<?

	class Frete extends Mysql {

		// Calcular o Frete
		public $endereco;

		public function calcula_frete($cep, $pg_produto=0, $pg_produto_seller=0){
			// http://www.corporativo.correios.com.br/encomendas/sigepweb/doc/Manual_de_Implementacao_do_Web_Service_SIGEP_WEB.pdf

			$return = array();

			$this->filtro = " where tipo = 'frete' ";
			$frete = $this->read_unico('configs');

			// CONFIGURACOES
				if(!$this->endereco){
					$endereco = busca_endereco(retornar_numero($cep));
					if(!$endereco['estado']){
						$endereco = busca_endereco(substr(retornar_numero($cep), 0, -3));
					}
					$return['endereco']  = $endereco['cidade'];
					$return['endereco'] .= $endereco['estado'] ? ' / '.$endereco['estado'] : '';;

					if(!$this->endereco){
						$this->endereco = $return['endereco'];
					}
				}

				//$peso_total = 0;
				//if(isset($_SESSION['carrinho']['itens'])){
					//foreach($_SESSION['carrinho']['itens'] as $key => $array){
						//foreach($array as $ref => $value){
							//$this->filtro = " where status = 1 and lang = '".LANG."' and id = '".$key."' ";
							//$produtos = $this->read_unico('produtos');

							//$peso_total += $produtos->peso * $value->qtd;
						//}
					//}
				//}
			// CONFIGURACOES



			// FRETES
				$return['html'] = '';
				$return['tipos_frete'] = array();


				if($pg_produto){
					$seller = $pg_produto_seller;
				} else {
					$seller = carrinho_seller();
				}

				// MELHOR ENVIO (TEM Q SER O PRIMEIRO)
					if($frete->frete_melhor_envio){
						$tipos_frete_melhor_envio = $this->melhor_envio($cep, $pg_produto, $seller);
						$return['tipos_frete'] = $tipos_frete_melhor_envio;
						if(isset($tipos_frete_melhor_envio['valor'])){
							foreach ($tipos_frete_melhor_envio['valor'] as $key => $value) {
								if(preg_match('(melhor_envio_)', $key)){
									$return['html'] .= frete_html($return['tipos_frete'], $key, $key, $pg_produto, $seller);
								}
							}
						}
					}
				// MELHOR ENVIO (TEM Q SER O PRIMEIRO)

				// CORREIO
					if($frete->frete_correios){
						$return['tipos_frete'] = $this->correios($cep, $pg_produto, $seller);
						foreach ($return['tipos_frete']['valor'] as $key => $value) {
							if(preg_match('(correio_)', $key)){
								$return['html'] .= frete_html($return['tipos_frete'], $key, $key, $pg_produto, $seller);
							}
						}
					}
				// CORREIO


				// POR LOCAL
					if($frete->frete_por_local AND verificar_frete_local($this->endereco)){
						$return['tipos_frete'] = $this->frete_por_local($return['tipos_frete']);
						$return['html'] .= frete_html($return['tipos_frete'], '', 'frete_por_local', $pg_produto, $seller);
					}
				// POR LOCAL


				// POR RAIO
					if($frete->frete_por_raio AND $frete->frete_por_raio_lat!='' AND $frete->frete_por_raio_lng!=''){
						$return['tipos_frete'] = $this->frete_por_raio($return['tipos_frete'], $pg_produto, $seller);
						$return['html'] .= frete_html($return['tipos_frete'], 'Delivery', 'raio_frete', $pg_produto, $seller);
					}
				// POR RAIO



				// MOTO BOY
					if($frete->frete_moto_boy){
						$return['tipos_frete'] = $this->moto_boy($return['tipos_frete'], $seller);
						$return['html'] .= frete_html($return['tipos_frete'], 'Moto Boy', 'moto_boy', $pg_produto, $seller);
					}
				// MOTO BOY


				// RETIRAR NA LOJA
					if($frete->frete_retirar_na_loja){
						$return['tipos_frete'] = $this->retirar_na_loja($return['tipos_frete'], $seller);
						$return['html'] .= frete_html($return['tipos_frete'], 'Retirar na Loja', 'retirar_na_loja', $pg_produto, $seller);
					}
				// RETIRAR NA LOJA


				// NENHUM FRETE
					if(!$return['html']){
						$return['html'] = '<div class="'.($pg_produto ? '' : 'tar').' c_vermelho">*Nenhum frete disponível para a sua região</div>';
					}
				// NENHUM FRETE

			// FRETES

			return $return;
		}










































		public function melhor_envio($cep_destino, $pg_produto, $seller){
			$return = array();
			$cep_destino_origem = '';
			$produtos_dados = array();
			$valor_declarado = 0;
			$x=0;

			if($pg_produto){
				$this->filtro = " where ".STATUS." AND id = '".$pg_produto."' AND seller = '".$seller."' ";
				$produtos = $this->read_unico('produtos');
				if(isset($produtos->id)){
					$produtos_dados[$x] = array();
					$produtos_dados[$x]['id'] = $produtos->id;
					$produtos_dados[$x]['width'] = $produtos->largura;
					$produtos_dados[$x]['height'] = $produtos->altura;
					$produtos_dados[$x]['length'] = $produtos->comprimento;
					$produtos_dados[$x]['weight'] = $produtos->peso;
					$produtos_dados[$x]['insurance_value'] = $produtos->preco;
					$produtos_dados[$x]['quantity'] = 1;
					$valor_declarado += $produtos->preco;
					$x++;
				}
			} else {
				if(isset($_SESSION['carrinho']['itens'])){
					foreach($_SESSION['carrinho']['itens'] as $key => $array){
						foreach($array as $ref => $value){
							$this->filtro = " where ".STATUS." AND id = '".$key."' AND seller = '".$seller."' ";
							$produtos = $this->read_unico('produtos');
							if(isset($produtos->id)){
								$produtos_dados[$x] = array();
								$produtos_dados[$x]['id'] = $produtos->id;
								$produtos_dados[$x]['width'] = $produtos->largura;
								$produtos_dados[$x]['height'] = $produtos->altura;
								$produtos_dados[$x]['length'] = $produtos->comprimento;
								$produtos_dados[$x]['weight'] = $produtos->peso;
								$produtos_dados[$x]['insurance_value'] = $produtos->preco;
								$produtos_dados[$x]['quantity'] = $value->qtd;
								$valor_declarado += $value->qtd+$produtos->preco;
								$x++;
							}
						}
					}
				}
			}

			if(!$seller){
				$consulta = seller_0();
			} else {
				$this->filtro = " WHERE ".STATUS." AND id = '".$seller."' ";
				$consulta = $this->read_unico('seller');
			}
			if(isset($consulta->melhor_envio_token) AND $consulta->melhor_envio_token){

				if($_SERVER['HTTP_HOST'] != 'localhost:4000'){
					$consulta = verificar_token__atualizar_token($consulta);
				}

				$post = array();
				$post['from']['postal_code'] = cep_numero($consulta->cep);
				$post['to']['postal_code'] = cep_numero($cep_destino);
				$post['products'] = $produtos_dados;
				$json = json_encode($post);

				$curl = curl_init();
				curl_setopt_array($curl, array(
					CURLOPT_URL => URL_MELHOR_ENVIO."/api/v2/me/shipment/calculate",
					CURLOPT_RETURNTRANSFER => true,
					CURLOPT_CUSTOMREQUEST => "POST",
					CURLOPT_POSTFIELDS => $json,
					CURLOPT_HTTPHEADER => array(
						"accept: application/json",
						"authorization: Bearer ".$consulta->melhor_envio_token,
						"content-type: application/json",
					),
				));

				$response = curl_exec($curl);
				$err = curl_error($curl);

				curl_close($curl);

				if($_SERVER['HTTP_HOST'] == 'localhost:4000'){
					$err = 0;
					$response = '[{"id": 1, "name": "PAC", "price": "25.65", "custom_price": "25.65", "discount": "4.33", "currency": "R$", "delivery_time": 10, "delivery_range": {"min": 9, "max": 10 }, "custom_delivery_time": 10, "custom_delivery_range": {"min": 9, "max": 10 }, "packages": [{"price": "25.65", "discount": "4.33", "format": "box", "dimensions": {"height": 21, "width": 30, "length": 30 }, "weight": "1.90", "insurance_value": "150.20", "products": [{"id": "x", "quantity": 1 }, {"id": "y", "quantity": 2 }, {"id": "z", "quantity": 1 } ] } ], "additional_services": {"receipt": false, "own_hand": false, "collect": false }, "company": {"id": 1, "name": "Correios", "picture": "https://sandbox.melhorenvio.com.br/images/shipping-companies/correios.png"} }, {"id": 2, "name": "SEDEX", "price": "39.30", "custom_price": "39.30", "discount": "9.08", "currency": "R$", "delivery_time": 4, "delivery_range": {"min": 3, "max": 4 }, "custom_delivery_time": 4, "custom_delivery_range": {"min": 3, "max": 4 }, "packages": [{"price": "39.30", "discount": "9.08", "format": "box", "dimensions": {"height": 21, "width": 30, "length": 30 }, "weight": "1.90", "insurance_value": "150.20", "products": [{"id": "x", "quantity": 1 }, {"id": "y", "quantity": 2 }, {"id": "z", "quantity": 1 } ] } ], "additional_services": {"receipt": false, "own_hand": false, "collect": false }, "company": {"id": 1, "name": "Correios", "picture": "https://sandbox.melhorenvio.com.br/images/shipping-companies/correios.png"} }, {"id": 3, "name": ".Package", "price": "32.21", "custom_price": "32.21", "discount": "11.57", "currency": "R$", "delivery_time": 7, "delivery_range": {"min": 6, "max": 7 }, "custom_delivery_time": 7, "custom_delivery_range": {"min": 6, "max": 7 }, "packages": [{"format": "box", "dimensions": {"height": 21, "width": 30, "length": 30 }, "weight": "1.90", "insurance_value": "150.20", "products": [{"id": "x", "quantity": 1 }, {"id": "y", "quantity": 2 }, {"id": "z", "quantity": 1 } ] } ], "additional_services": {"receipt": false, "own_hand": false, "collect": false }, "company": {"id": 2, "name": "Jadlog", "picture": "https://sandbox.melhorenvio.com.br/images/shipping-companies/jadlog.png"} }, {"id": 4, "name": ".Com", "price": "36.19", "custom_price": "36.19", "discount": "48.57", "currency": "R$", "delivery_time": 6, "delivery_range": {"min": 5, "max": 6 }, "custom_delivery_time": 6, "custom_delivery_range": {"min": 5, "max": 6 }, "packages": [{"format": "box", "dimensions": {"height": 21, "width": 30, "length": 30 }, "weight": "1.90", "insurance_value": "150.20", "products": [{"id": "x", "quantity": 1 }, {"id": "y", "quantity": 2 }, {"id": "z", "quantity": 1 } ] } ], "additional_services": {"receipt": false, "own_hand": false, "collect": false }, "company": {"id": 2, "name": "Jadlog", "picture": "https://sandbox.melhorenvio.com.br/images/shipping-companies/jadlog.png"} }, {"id": 17, "name": "Mini Envios", "error": "Dimensões do objeto ultrapassam o limite da transportadora.", "company": {"id": 1, "name": "Correios", "picture": "https://sandbox.melhorenvio.com.br/images/shipping-companies/correios.png"} } ]';
				}

				if(!$err) {
					$array = json_decode($response);

					$_SESSION['carrinho']['melhor_envio'][$seller] = $array;
					foreach ($array as $key => $value) {
						if(isset($value->error)){
							$return['valor']['melhor_envio_'.$value->name] = '';
							$return['prazo']['melhor_envio_'.$value->name] = '';
							$return['erro']['melhor_envio_'.$value->name] = $value->error;

						} else {
							$return['valor']['melhor_envio_'.$value->name] = $value->custom_price;
							$return['prazo']['melhor_envio_'.$value->name] = '('.$value->custom_delivery_time.' dias)';
							$return['erro']['melhor_envio_'.$value->name] = '';
						}
					}
	
				}
			}

			// VERIFICACOES FRETE GRATIS
				$return = verificar_frete_gratis($return, 'melhor_envio_PAC', $valor_declarado, $pg_produto);
			// VERIFICACOES

			return $return;
		}






		public function correios($cep_destino, $pg_produto, $seller){
			$this->filtro = " where tipo = 'frete' ";
			$frete = $this->read_unico('configs');

			if($frete->codigo_correios AND $frete->senha_correios){
				$cod_servico = array('04510', '04014'); // 04510 81019
			} else {
				$cod_servico = array('04510', '04014'); // 81019
			}

			// Pegando os dados
			$total_peso = 0;
			$total_cm_cubico = 0;
			$valor_declarado = 0;

			if(isset($_SESSION['carrinho']['itens'])){
				foreach($_SESSION['carrinho']['itens'] as $key => $array){
					foreach($array as $ref => $value){
						$this->filtro = " where ".STATUS." AND id = '".$key."' ";
						$produtos = $this->read_unico('produtos');
						if(isset($produtos->id)){
						    $row_peso = $produtos->peso * $value->qtd;
						    $row_cm = ($produtos->altura * $produtos->largura * $produtos->comprimento) * $value->qtd;
						
						    $total_peso += $row_peso;
						    $total_cm_cubico += $row_cm;

							$valor_declarado += isset($produtos->preco) ? $value->qtd*$produtos->preco : 0;
						}
					}
				}
			}

			$raiz_cubica = round(pow($total_cm_cubico, 1/3), 2);
			$comprimento =  $raiz_cubica < 16 ? 16 : $raiz_cubica;
			$altura = $raiz_cubica < 2 ? 2 : $raiz_cubica;
			$largura = $raiz_cubica < 11 ? 11 : $raiz_cubica;
			$peso = $total_peso < 0.3 ? 0.3 : $total_peso;
			$diametro = hypot($comprimento, $largura); // Calculando a hipotenusa pois minhas encomendas são retangulares

			$data['nCdEmpresa'] = $frete->codigo_correios;
			$data['sDsSenha'] = $frete->senha_correios;
			$data['sCepOrigem'] = cep_numero($frete->cep);
			$data['sCepDestino'] = cep_numero($cep_destino);
			$data['nVlPeso'] = $peso;
			$data['nCdFormato'] = '1';
			$data['nVlComprimento'] = $comprimento;
			$data['nVlAltura'] = $altura;
			$data['nVlLargura'] = $largura;
			$data['nVlDiametro'] = $diametro;
			$data['sCdMaoPropria'] = 'n';
			$data['nVlValorDeclarado'] = 20;
			if($valor_declarado>20){
				$data['nVlValorDeclarado'] = $valor_declarado;
			}
			if($valor_declarado>3000){
				$data['nVlValorDeclarado'] = 3000;
			}
			$data['nVlValorDeclarado'] = 0;

			$data['sCdAvisoRecebimento'] = 'n';
			$data['StrRetorno'] = 'xml';

			$_SESSION['frete_carrinho']['cep_destino'] = $data['sCepDestino'];

			$frete_carrinho_xml = (isset($_SESSION['frete_carrinho']['xml']) AND $_SESSION['frete_carrinho']['xml']);
			$frete_carrinho_cep_destino = (isset($_SESSION['frete_carrinho']['cep_destino']) AND $_SESSION['frete_carrinho']['cep_destino']==$data['sCepDestino']);
			$frete_carrinho_atualizacoes = (isset($_SESSION['frete_carrinho']['atualizacoes']) AND $_SESSION['frete_carrinho']['atualizacoes']<5);
			$frete_carrinho_atualizacoes = 0;
			if($frete_carrinho_xml AND $frete_carrinho_cep_destino AND $frete_carrinho_atualizacoes){
				$xml = $_SESSION['frete_carrinho']['xml'];
				$_SESSION['frete_carrinho']['atualizacoes'] = isset($_SESSION['frete_carrinho']['atualizacoes']) ? $_SESSION['frete_carrinho']['atualizacoes']+1 : 0;

			} else {
				$xml = array();
				foreach ($cod_servico as $key1 => $value1) {
					$data['nCdServico'] = $value1;
					$url = 'http://ws.correios.com.br/calculador/CalcPrecoPrazo.aspx?'.http_build_query($data);
					$xml[] = curll($url);
				}
				$_SESSION['frete_carrinho']['xml'] = $xml;
				$_SESSION['frete_carrinho']['atualizacoes'] = 0;
			}
			$_SESSION['frete_carrinho']['data'] = $data;

			if(is_array($xml)){
				$return = array();
				foreach ($xml as $key1 => $value1) {
					$array = simplexml_load_string($value1);	
					if(isset($array->cServico) AND $array->cServico){
						foreach ($array->cServico as $key => $value){
							if($value->Codigo == '04510'){
								$tipo = 'correio_pac';
							} elseif($value->Codigo == '04014'){
								$tipo = 'correio_sedex';
							} elseif($value->Codigo == '81019'){
								$tipo = 'correio_e-sedex';
							} else {
								$tipo = '';
							}
		
							if($value->Erro == 0 or $value->Erro == '009' or $value->Erro == '010' or $value->Erro == '011'){
								$return['valor'][$tipo] = numero(numero((string)$value->Valor)-3);
								$return['prazo'][$tipo] = '('.$value->PrazoEntrega.' Dias)';
								$return['erro'][$tipo]  = '';
		
							} elseif($tipo) {
								$erro = 'Não Disponível<span class="dni">'.$value->MsgErro.'</span>';
								if($value->Erro==-3) $erro = 'CEP de destino inválido';
								if($value->Erro==-4) $erro = 'Peso excedido';
								if($value->Erro==-4) $erro = 'Peso excedido';
								$return['valor'][$tipo] = '';
								$return['prazo'][$tipo] = '';
								$return['erro'][$tipo]  = $erro;
							}
						}
					} else {
						$return['valor'] = array('correio_pac'=>'');
						$return['prazo'] = array('correio_pac'=>'');
						$return['erro'] = array('correio_pac'=>'erro ao calcular');
					}
				}

			} else {
				$return['valor'] = array('correio_pac'=>'');
				$return['prazo'] = array('correio_pac'=>'');
				$return['erro'] = array('correio_pac'=>'erro ao calcular');
			}

			// VERIFICACOES FRETE GRATIS
				$return = verificar_frete_gratis($return, 'correio_pac', $valor_declarado, $pg_produto);
			// VERIFICACOES

			//if($_SERVER['HTTP_HOST'] == 'localhost:4000'){
				//$return = $this->correios_local();
			//}

			return $return;

		}




		public function frete_por_local($return){
			$this->filtro = " WHERE ".STATUS." ";
			$consulta = $this->read("frete_por_local");
			foreach ($consulta as $key => $value) {
				if(preg_match('('.$value->bairros.', '.$value->cidades.' / '.$value->estados.')', $this->endereco) AND $value->bairros AND $value->cidades AND $value->estados){
					$return['valor']['frete_por_local'] = $value->preco>0 ? ($value->preco) : '0.00';
					$return['prazo']['frete_por_local'] = 'Bairro: '.$value->bairros;
					$return['erro']['frete_por_local'] = '';

				} elseif(!$value->bairros AND preg_match('('.$value->cidades.' / '.$value->estados.')', $this->endereco) AND $value->cidades AND $value->estados){
					$return['valor']['frete_por_local'] = $value->preco>0 ? ($value->preco) : '0.00';
					$return['prazo']['frete_por_local'] = 'Para '.$value->cidades;
					$return['erro']['frete_por_local'] = '';

				} elseif(!$value->bairros AND !$value->cidades AND preg_match('('.$value->estados.')', $this->endereco) AND $value->estados){
					$return['valor']['frete_por_local'] = $value->preco>0 ? ($value->preco) : '0.00';
					$return['prazo']['frete_por_local'] = 'Para '.estados($value->estados);
					$return['erro']['frete_por_local'] = '';
				}
			}

			return $return;
		}





		public function frete_por_raio($return, $pg_produto, $seller){
			$this->colunas = 'frete_por_raio_lat, frete_por_raio_lng';
			$this->filtro = " WHERE `lang` = '".LANG."' AND `tipo` = 'frete' ";
			$frete = $this->read_unico("configs");

			if($_SERVER['HTTP_HOST'] == 'localhost:4000'){
				$return['valor']['raio_frete'] = '300.00';
				$return['prazo']['raio_frete'] = '(1 dia)';
				$return['erro']['raio_frete'] = '';

			} else {
				if($pg_produto){
					$endereco = busca_endereco(retornar_numero($cep_destino));
					if($endereco['lat']==''){
						$endereco = busca_endereco(substr(retornar_numero($cep_destino), 0, -3));
						$lat_cliente = isset($endereco['lat']) ? $endereco['lat'] : '';
						$lng_cliente = isset($endereco['lng']) ? $endereco['lng'] : '';
					}

					$lat_cliente = isset($endereco['lat']) ? $endereco['lat'] : '';
					$lng_cliente = isset($endereco['lng']) ? $endereco['lng'] : '';

					//$this->endereco_produto = $endereco['cidade'];
					//$this->endereco_produto .= $endereco['estado'] ? ' / '.$endereco['estado'] : '';;

				} else {
					$endereco = busca_endereco($this->endereco);

					$lat_cliente = isset($endereco['lat']) ? $endereco['lat'] : '';
					$lng_cliente = isset($endereco['lng']) ? $endereco['lng'] : '';
				}

				if($frete->frete_por_raio_lat AND $frete->frete_por_raio_lng AND $lat_cliente!='' AND $lng_cliente!=''){
					$distancia = formula_haversine($frete->frete_por_raio_lat, $frete->frete_por_raio_lng, $lat_cliente, $lng_cliente);

					$this->filtro = " WHERE ".STATUS." AND km >= '".$distancia."' ORDER BY km ASC LIMIT 1 ";
					$consulta = $this->read("frete_por_raio");
					foreach ($consulta as $key => $value) {
						$return['valor']['raio_frete'] = $value->preco>0 ? $value->preco : '0.00';
						$return['prazo']['raio_frete'] = '(1 dia)';
						$return['erro']['raio_frete'] = '';
					}
				}
			}

			return $return;
		}




		public function moto_boy($return){
			$this->colunas = 'preco';
			$this->filtro = " WHERE `lang` = '".LANG."' AND `tipo` = 'frete' ";
			$frete = $this->read_unico("configs");

			$return['valor']['moto_boy'] = $frete->preco>0 ? ($frete->preco) : '0.00';
			$return['prazo']['moto_boy'] = '(1 Dias)';
			$return['erro']['moto_boy'] = '';

			return $return;
		}




		public function retirar_na_loja($return, $seller){
			$return['valor']['retirar_na_loja'] = '0.00';
			$return['prazo']['retirar_na_loja'] = '';
			$return['erro']['retirar_na_loja'] = '';

			return $return;
		}

	}


	/*
		41106 PAC sem contrato.
		40010 SEDEX sem contrato.
		40045 SEDEX a Cobrar, sem contrato.
		40215 SEDEX 10, sem contrato.
		40290 SEDEX Hoje, sem contrato.

		81019 e-SEDEX, com contrato.
		40126 SEDEX a Cobrar, com contrato.
		40096 SEDEX com contrato.
		40436 SEDEX com contrato.
		40444 SEDEX com contrato.
		40568 SEDEX com contrato.
		40606 SEDEX com contrato.
		41068 PAC com contrato.
		81027 e-SEDEX PrioritÃ¡rio, com conrato.
		81035 e-SEDEX Express, com contrato.
		81868 (Grupo 1) e-SEDEX, com contrato.
		81833 (Grupo 2) e-SEDEX, com contrato.
		81850 (Grupo 3) e-SEDEX, com contrato.
	*/

?>