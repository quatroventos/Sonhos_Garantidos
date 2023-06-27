<?

	if(!isset($_GET['APP_'])){
		$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
		require_once $DIR_F[0].'/system/conecta.php';

		$mysql = new Mysql();
		$mysql->ini();
		$arr = array();
	}


	$dados = array();
	$arr['alert'] = 0;


		// COMPRA SEM FRETE
			/*
			$_SESSION['carrinho']['frete']['cep'] = '00.000-000';
			$_SESSION['carrinho']['frete']['rua'] = '';
			$_SESSION['carrinho']['frete']['numero'] = '';
			$_SESSION['carrinho']['frete']['complemento'] = '';
			$_SESSION['carrinho']['frete']['bairro'] = '';
			$_SESSION['carrinho']['frete']['cidades'] = '';
			$_SESSION['carrinho']['frete']['estados'] = '';
			$_SESSION['carrinho']['frete']['valor'] = '0';
			$_SESSION['carrinho']['frete']['tipo'] = 'sem_frete';

			/*
				ITENS PARA MODIFICAR
					views\carrinho.phtml
						-> ocutar campos de endereço e frete
					app\Ajax\Carrinho\atualizar.php
						-> linha onde chama o boxs endereço
					admin\views\Individual\campos.php
						-> ocutar box Endereço de Entrega
					views\minha_conta\meus_pedidos.phtml
						-> ocutar box Endereço de Entrega
					esse arquivo
						-> tira endereco do envio de email
				ITENS PARA MODIFICAR
			*/
		// COMPRA SEM FRETE

		// SISTEMA DE ESCOLHER QUAIS CIDADES IRA VENDER
		//$mysql->filtro = " WHERE ".STATUS." AND estados = '".$_SESSION['carrinho']['frete']['estados']."' AND cidades = '".$_SESSION['carrinho']['frete']['cidades']."' ORDER BY ".ORDER." ";
		//$estados_cidades = $mysql->read_unico('venda_estados_cidades');
		//if(!isset($estados_cidades->id)){
			//$arr['alert'] = 'Não Vendemos para a sua Cidades!';

		//} else
		if(!isset($_SESSION['carrinho']['frete']['cep']) OR !isset($_SESSION['carrinho']['frete']['cep'])){
			$arr['alert'] = 'Selecione o Endereço de Entrega';
			$mysql->prepare = array($_SESSION['x_site']->id);
			$mysql->filtro = " WHERE `cadastro` = ? ";
			$cadastro_enderecos = $mysql->read('cadastro_enderecos');
			if(isset($cadastro_enderecos->id)){
				$arr['evento'] = "boxs('endereco_edit'); ";
			} else {
				$arr['evento'] = "boxs('endereco_add'); ";
			}

		} elseif($_POST['id']==0 AND !isset($_SESSION['carrinho']['frete']['tipo'])){
			$arr['alert'] = 'Selecione o Tipo de Frete';

		} elseif($_POST['id']==0 AND !(isset($_SESSION['carrinho']['frete']['valor']) AND $_SESSION['carrinho']['frete']['valor']!='')){
			$arr['alert'] = 'O Frete não foi Calculado!';

		} elseif(!isset($_SESSION['x_site']->id)){
			$arr['alert'] = 'Você Precisa esta Logado para Efetuar uma Compra!';

		} elseif($_POST['id']==0 AND !(isset($_SESSION['carrinho']['itens']) AND $_SESSION['carrinho'])) {
			$arr['alert'] = 'Seu Carrinho está Vazio!';





		// LIBERADOOOO
		} else {
			if($_POST['id']==0) {

				$CARRINHO = isset($_SESSION['carrinho']) ? $_SESSION['carrinho'] : array();

				$mysql->prepare = array($_SESSION['x_site']->id);
				$mysql->filtro = " WHERE `id` = ? ";
				$cadastro = $mysql->read_unico("cadastro");


				// Itens
				$dados['nome'] = array();
				$dados['foto'] = '';
				$dados['seller'] = array();
				$dados['ids'] = array();
				$dados['nomes'] = array();
				$dados['fotos'] = array();
				$dados['qtds'] = array();
				$dados['refs'] = array();
				$dados['precos'] = array();
				$dados['preco_adicional'] = 0;
				$dados['valor_subtotal'] = 0;
				$dados['credito'] = 0;
				$dados['desconto'] = 0;
				$dados['desconto_info'] = '';
				$dados['taxa'] = 0;
				$dados['taxa_info'] = '';

				// Pegando id dos Produtos
				$itens = array();
				foreach($CARRINHO['itens'] as $key => $array){
					foreach($array as $ref => $value){
						if(isset($key)){

							// Pegando Info dos Produtos
							$mysql->prepare = array($key);
							$mysql->filtro = " WHERE `status` = 1 AND `lang` = '".LANG."' AND `id` = ? ";
							$item = $mysql->read_unico("produtos");
							if(isset($item->id)){
								$estoque = $item->estoque;
								$preco = $item->preco;
								$nome = '';

								$dados['seller'][] = $item->seller;
								$dados['ids'][]	  = $item->id;
								$dados['nomes'][] = $item->nome;
								$dados['qtds'][]  = $value->qtd;
								$dados['refs'][]  = $ref;

								// ATRIBUTOS
									$nome_atributos = array();
									$filtro_combinacoes = '';
									for ($i=1; $i<=10; $i++) {
										$atributos = 'atributos_'.$i;
										if(isset($value->$atributos)){
											$nome_atributos[] = rel('produtos_atributos', $value->$atributos);
											$filtro_combinacoes .= " AND produtos_atributos".$i." = '".$value->$atributos."' ";
										} else {
											$filtro_combinacoes .= " AND produtos_atributos".$i." = '' ";
										}
									}
									// COMBINACOES
										if($filtro_combinacoes){
											$return = verificar_estoque_atributos($item->id, $filtro_combinacoes);
											if(isset($return['estoque'])){
												$preco = $return['preco']>0 ? $return['preco'] : $preco;
												$estoque = $return['estoque'];
											}
										}
									// COMBINACOES
								// ATRIBUTOS

								// ATRIBUTOS EXTRA ADD NA HORA DA COMPRA
									if(isset($value->atributos_extra) AND $value->atributos_extra){
										$nome_atributos[] = $value->atributos_extra;
									}
								// ATRIBUTOS EXTRA ADD NA HORA DA COMPRA

								/*
								// DESCONTOS POR QTD
									$descontos_qtd = array();
									// CATEGORIAS
										$mysql->coluna = 'id, qtd, preco, preco1';
										$mysql->filtro = " WHERE ".STATUS." AND `produtos1_cate` = '".$item->categorias."' AND produtos = 0 ORDER BY ".ORDER." ";
										$produtos_descontos_qtd = $mysql->read('produtos_descontos_qtd');
										foreach ($produtos_descontos_qtd as $key1 => $value1) {
											if($value1->preco>0){
												$descontos_qtd[$value1->qtd] = $value1->preco;
											} elseif($value1->preco1>0){
												$descontos_qtd[$value1->qtd] = ($preco*$value1->preco1)/100;
											}
										}
									// CATEGORIAS

									// PRODUTOS
										$mysql->coluna = 'id, qtd, preco';
										$mysql->filtro = " WHERE ".STATUS." AND `produtos` = '".$item->id."' AND produtos1_cate = 0 ORDER BY ".ORDER." ";
										$produtos_descontos_qtd = $mysql->read('produtos_descontos_qtd');
										foreach ($produtos_descontos_qtd as $key1 => $value1) {
											$descontos_qtd[$value1->qtd] = $value1->preco;
										}
									// PRODUTOS
									ksort($descontos_qtd);

									// Informacoes
									$desconto_qtd = 0;
									foreach ($descontos_qtd as $key1 => $value1) {
										if($key1<=$value->qtd){
											$desconto_qtd = $value1;
										}
									}

									// Desconto
									$preco = $preco-$desconto_qtd;
								// DESCONTOS POR QTD
								*/

								// DESCONTOS CRONOMETRO
									if($item->data_promocional > date('Y-m-d H:i:s')){
										$preco = $preco - $item->preco3;
									}
								// DESCONTOS CRONOMETRO



								$nome_atributos			 = $nome_atributos ? '('.implode(' / ', $nome_atributos).')' : '';
								$codigo 				 = iff($item->codigo, 'Cod.: '.$item->codigo, '#'.$item->id);
								$dados['nome'][]	 	 = '<div class="cc_itens"><span class="codigoo">'.$codigo.' -  </span><span class="qtdd">'.$value->qtd.'x - </span><span class="nomee">'.$item->nome.' </span><span class="precoo"> ('.preco($preco, 1).') </span><span class="precoo_all"> ('.preco($value->qtd*$preco, 1).') </span><em class="atributoss">'.$nome_atributos.'</em></div>';
								if(!$dados['foto']){ $dados['foto'] = $item->foto; }
								$dados['nomes'][] 		 = $item->nome;
								$dados['fotos'][] 		 = $item->foto;
								$dados['precos'][] 		 = $preco;
								$dados['valor_subtotal'] += $value->qtd*$preco;


								// VERIFICANDO ESTOQUE E ERROS
									// Estoque
									if($value->qtd>1 AND $estoque){
										if($estoque < $value->qtd){
											if(!isset($no_estoque)) $arr['erro'] = '<b>Estoque Excedido para o(s) Iten(s)! </b> ';
											$arr['erro'] .= '<div>>> '.$item->nome.' '.iff($nome, '('.$nome.')').' (Estoque Disponível: '.$estoque.')</div>';
											$no_estoque = 1;
										}
									} elseif(!$estoque) {
										if(!isset($no_estoque)) $arr['erro'] = '<b>Sem Estoque Disponível para o(s) Iten(s)! </b> ';
										$arr['erro'] .= '<div>>> '.$item->nome.' '.iff($nome, '('.$nome.')').' (Estoque Disponível: '.$estoque.')</div>';
										$no_estoque = 1;
									}

									/*/ Tempo (COMPRA COLETIVA)
									$tempo = sub_data(data($item->data_fim, 'd/m/Y/H/i/s'), date('d/m/Y/H/i/s'));
									if($tempo['hora_total']=='00' AND $tempo['min']=='00' AND $tempo['seg']=='00'){
										$arr['erro'] = 'O tempo para Compra desse Produto Acabou!';
									}

									// Minimo de Compra
									if($item->qtd_min>$value->qtd)
										$arr['erro'] = 'Você pode Comprar no Mínimo '.$item->qtd_min.' Produtos!';

									// Maximo de Compra
									if($item->qtd_max<$value->qtd)
										$arr['erro'] = 'Você pode Comprar no Máximo '.$item->qtd_max.' Produtos!';
									// (COMPRA COLETIVA) */

								// VERIFICANDO ESTOQUE E ERROS

							}
							// Pegando Info dos Produtos
						}
					}
				}


				// VERIFICANDO CREDITO
					if(isset($_SESSION['creditos']) AND $_SESSION['creditos']){
						if($cadastro->creditos<$_SESSION['creditos']){
							$arr['erro'] = 'Você Não Possui a Quantidade de Créditos que está querendo usar na Compra!';
						} else {
							$dados['credito'] += $_SESSION['creditos'];
							$mysql->campo['creditos'] = $cadastro->creditos - $_SESSION['creditos'];
							$mysql->prepare = array($cadastro->id);
							$mysql->filtro = " WHERE `id` = ? ";
							$mysql->update('cadastro');
						}
					}
				// VERIFICANDO CREDITO


				// ERROS
				if(isset($arr['erro'])){
					$arr['alert'] = $arr['erro'];
					if(!isset($_GET['APP_'])){
						echo json_encode($arr);
						exit();
					}

				} else {

					// DADOS FINAIS
					$dados['metodo']		= isset($_POST['metodo']) ? $_POST['metodo'] : '';
					$dados['cupons']		= isset($_SESSION['desconto']['cupons']['id']) ? $_SESSION['desconto']['cupons']['id'] : 0;
					$dados['tipo_frete']    = isset($CARRINHO['frete']['tipo'])	 ? $CARRINHO['frete']['tipo'] : '';
					$dados['frete'] 		= isset($CARRINHO['frete']['valor']) ? $CARRINHO['frete']['valor'] : 0;
					$dados['desconto'] 	 	+= isset($CARRINHO['desconto']['valor']) ? $CARRINHO['desconto']['valor'] : 0;
					$dados['desconto_info'] .= isset($CARRINHO['desconto']['info']) ? $CARRINHO['desconto']['info'] : '';


					// GRAVANDO O PEDIDO
					unset($mysql->campo);
					$mysql->campo['nome']			= implode('<z></z>', $dados['nome']);
					$mysql->campo['cadastro']		= $_SESSION['x_site']->id;
					$mysql->campo['foto']			= $dados['foto'];

					$mysql->campo['seller']			= '-'.implode('-', $dados['seller']).'-';
					$mysql->campo['produtos']		= '-'.implode('-', $dados['ids']).'-';
					$mysql->campo['nomes']			= 'zz;zz'.implode('zz;zz', $dados['nomes']).'zz;zz';
					$mysql->campo['fotos']			= 'zz;zz'.implode('zz;zz', $dados['fotos']).'zz;zz';
					$mysql->campo['qtds']			= '-'.implode('-', $dados['qtds']).'-';
					$mysql->campo['refs']			= '-'.implode('-', $dados['refs']).'-';
					$mysql->campo['precos']			= '-'.implode('-', $dados['precos']).'-';

					$mysql->campo['metodo']			= $dados['metodo'];
					$mysql->campo['cupons']			= $dados['cupons'];
					$mysql->campo['tipo_frete']		= $dados['tipo_frete'];
					$mysql->campo['frete']			= numero($dados['frete']);

					// INFORMACOES DE DESCONTO E TAXAS
						// DESCONTO
							if($dados['credito']>0){
								$dados['desconto_info'] .= '<div class=cc_credito>>>Crédito: '.preco($dados['credito'], 1).'</div>';
							}
						// DESCONTO

						// TAXAS
							$mysql->filtro = " where tipo = 'pagamentos' ";
							$pagamentos = $mysql->read_unico("configs");

							$metodo = str_replace('_cartao', '', $dados['metodo']);
							$metodo = str_replace('_boleto', '', $metodo);
							$metodo = str_replace('_pix', '', $metodo);

							$campo = strtolower($dados['metodo']).'_taxa';
							if(isset($pagamentos->$campo) AND $pagamentos->$campo>0){
								$taxa = ($pagamentos->$campo*$dados['valor_subtotal'])/100;
								$dados['taxa'] += $taxa;
								$dados['taxa_info'] .= '<div class=cc_taxa>>> Taxa do Pagamento: '.preco($taxa, 1).'</div>';
							}
						// TAXAS

						// PARCELAMENTO
							$dados['valor_parcela_juros'] = 0;
							if($dados['metodo'] == 'Pagarme_cartao'){
								$_POST['cartao_parcelamento'] = $_POST['cartao_parcelamento'] ? $_POST['cartao_parcelamento'] : 1;
								$parcelamento_carrinho_cartao = parcelamento_carrinho_cartao($dados['valor_subtotal'], 0);
								$dados['valor_parcela_juros'] = isset($parcelamento_carrinho_cartao[$_POST['cartao_parcelamento']]->valor_juros) ? $parcelamento_carrinho_cartao[$_POST['cartao_parcelamento']]->valor_juros : 0;
							}
						// PARCELAMENTO
					// INFORMACOES DE DESCONTO E TAXAS

					$mysql->campo['credito']			 = $dados['credito'];
					$mysql->campo['desconto']			 = numero($dados['desconto']);
					$mysql->campo['desconto_info']		 = $dados['desconto_info'];
					$mysql->campo['taxa']				 = numero($dados['taxa']);
					$mysql->campo['taxa_info']			 = $dados['taxa_info'];
					$mysql->campo['parcerlas']			 = isset($_POST['cartao_parcelamento']) ? $_POST['cartao_parcelamento'] : 0;
					$mysql->campo['valor_parcela_juros'] = $dados['valor_parcela_juros'];
					$mysql->campo['valor_subtotal']		 = numero($dados['valor_subtotal']);
					$mysql->campo['valor_total']		 = numero($dados['frete'] + $dados['valor_subtotal']  + $dados['valor_parcela_juros'] - $dados['desconto'] + $dados['taxa']);

					$mysql->campo['obs']				= isset($_POST['obs']) ? $_POST['obs'] : '';



					// AFILIADOS
						$mysql->campo['afiliados'] = $cadastro->afiliados;
						if(isset($_SESSION['x_afiliados']) AND $cadastro->afiliados==0){
							$mysql1 = new Mysql();
							$mysql1->campo['afiliados'] = $_SESSION['x_afiliados'];
							$mysql1->campo['afiliados_data'] = date('c');
							$mysql1->filtro = " WHERE id = '".$cadastro->id."' ";
							echo $mysql1->update('cadastro');

							$mysql->campo['afiliados'] = $_SESSION['x_afiliados'];
						}

						if($mysql->campo['afiliados'] != 0){
							$mysql->filtro = " WHERE  `tipo` = 'informacoes' AND lang = '".LANG."' ";
							$info = $mysql->read_unico('configs');

							if(isset($info->preco12) AND $info->preco12 > 0){ // COMISSAO GERAL
								$mysql->campo['valor_total_afiliados_porc'] = $info->preco12;
								$mysql->campo['valor_total_afiliados'] = (($dados['valor_subtotal'] - $dados['desconto'])*$info->preco12)/100;

							} elseif(isset($produtos_porc->preco10) AND $produtos_porc->preco10>0) { // COMISSAO POR PRODUTO
								$produtos_afiliados_porc = '-';
								$afiliados_porc = 0;
								$afiliados_porc_x = 0;
								foreach ($dados['ids'] as $key => $value) {
									$mysql->filtro = " WHERE ".STATUS." ".PRODUTOS_ATIVOS." AND id = '".$value."' ORDER BY ".ORDER." ";
									$produtos_porc = $mysql->read_unico('produtos');

									$produtos_afiliados_porc .= $produtos_porc->preco10.'-';
									$afiliados_porc += $produtos_porc->preco10;
									$afiliados_porc_x++;
								}

								$afiliados_porc_final = $afiliados_porc/$afiliados_porc_x;

								$mysql->campo['produtos_afiliados_porc'] = $produtos_afiliados_porc;
								$mysql->campo['valor_total_afiliados'] = (($dados['valor_subtotal'] - $dados['desconto'])*$afiliados_porc_final)/100;;
								$mysql->campo['valor_total_afiliados_porc'] = $afiliados_porc_final;
							}
						}
					// AFILIADOS



					$arr['itens'] = $mysql->campo;
					$arr['id'] = $mysql->insert("pedidos");







					// GRAVANDO JSON DO CARRINHO
					$file = fopen(DIR_F.'/plugins/Json/pedidos/'.$arr['id'].'.json', 'w');
		            fwrite($file, json_encode($CARRINHO));
		            fclose($file);


					// PEGANDO DADOS DO PEDIDO
						$mysql->prepare = array($arr['id']);
						$mysql->filtro = " WHERE `id` = ? ";
						$pedidos = $mysql->read_unico("pedidos");
					// PEGANDO DADOS DO PEDIDO


					// ACOES PARA TODOS OS PRODUTOS DO CARRINHO
						$produtos = explode('-', $pedidos->produtos);
						$qtds = explode('-', $pedidos->qtds);
						$refs = explode('-', $pedidos->refs);
						foreach ($produtos as $k => $v) {

							// Diminuir no Estoque e Aumentar ++ Vendido
							$mysql->colunas = 'id, estoque, preco, vendidos, vendidos_valor';
							$mysql->prepare = array($v);
							$mysql->filtro = " WHERE `id` = ? ";
							$consulta = $mysql->read('produtos');
							foreach ($consulta as $key => $value){
								$estoque = $value->estoque;

								$estoque_table = 'produtos';
								$estoque_id = $value->id;

								// ATRIBUTOS
									$ex = explode('_z_', $refs[$k]);
									$ref = explode('_', $ex[0]);

									$filtro_combinacoes = '';
									for ($i=1; $i<=10; $i++) {
										if(isset($ref[$i]) AND $ref[$i]){
											$filtro_combinacoes .= " AND produtos_atributos".$i." = '".$ref[$i]."' ";
										} else {
											$filtro_combinacoes .= " AND produtos_atributos".$i." = '' ";
										}
									}
									// COMBINACOES
										if($filtro_combinacoes){
											$return = verificar_estoque_atributos($value->id, $filtro_combinacoes);
											if(isset($return['estoque'])){
												$estoque_id = $return['id'];
												$estoque_table = 'produtos_combinacoes';
												$estoque = $return['estoque'];
											}
										}
									// COMBINACOES
								// ATRIBUTOS

								// DIMINUINDO ESTOQUE
									unset($mysql->campo);
									$mysql->campo['estoque'] = $estoque - $qtds[$k];
									$mysql->filtro = " WHERE `id` = ".$estoque_id." ";
									$mysql->update($estoque_table);
								// DIMINUINDO ESTOQUE
							}

						}
					// ACOES PARA TODOS OS PRODUTOS DO CARRINHO


					// ENVIANDO DADOS POR EMAIL
						$email = new Email();
			
						// EMAIL 51
							$mysql->filtro = " WHERE `id` = 51 ";
							$textos = $mysql->read_unico('textos');
							$enderecos = $CARRINHO['frete'];

							$var_email = 'nome->'.$cadastro->nome.'&email->'.$cadastro->email;
							$var_email .= '&id->'.$pedidos->id.'&data->'.data($pedidos->data, 'd/m/Y H:i').'&metodo_pagamento->'.ucfirst(str_replace('_', ' ', $dados['metodo'])).'&tipo_frete->'.ucfirst(str_replace('_', ' ', $dados['tipo_frete']));
							$var_email .= '&endereco->'.$enderecos['rua'].', '.$enderecos['numero'].' '.$enderecos['complemento'].'&bairro->'.$enderecos['bairro'].'&cep->'.$enderecos['cep'].'&cidade->'.$enderecos['cidades'].'&estado->'.$enderecos['estados'];
							$var_email .= '&tabela_produtos->'.str_replace('&', 'z;z-z;z', emails_tabela_de_pedidos($pedidos));

							// ENVIANDO PARA O CLIENTE
								$email->to			= $cadastro->email;
								//$email->remetente	= nome_site();
								$email->assunto		= var_email($textos->nome, $var_email);
								$email->txt 		= str_replace('z;z-z;z', '&', str_replace('src="/web/', 'src="'.DIR_C.'/web/', var_email(txt($textos), $var_email) ) );
								$email->enviar();
							// ENVIANDO PARA O CLIENTE

							// ENVIANDO PARA O SELLER
								if(SELLER_OK){
									foreach($dados['seller'] as $key => $value){
										$mysql->prepare = array($value);
										$mysql->filtro = " WHERE ".STATUS." AND id = ? ";
										$seller = $mysql->read_unico(SELLER);

										if(isset($seller->email) AND $seller->email){
											$email->to = $seller->email;
											$email->enviar();
										}
									}
								}
							// ENVIANDO PARA O SELLER

							// ENVIANDO PARA O DONO DO SITE
								$mysql->filtro = " WHERE `status` = '1' AND tipo = 'emails' ";
								$email_remetente = $mysql->read_unico('configs');
								$email->to = $email_remetente->email;
								$email->enviar();
							// ENVIANDO PARA O DONO DO SITE
						// EMAIL 51

					// ENVIANDO DADOS POR EMAIL
				}







			// SEGUNDA VIA DO PAGAMENTO
			} elseif($_POST['id']) {

				$mysql->prepare = array($_POST['id']);
				$mysql->filtro = " WHERE `id` = ? ";
				$pedidos = $mysql->read_unico("pedidos");

				// MUDAR METODO DE PAGAMENTO
					if($pedidos->metodo != $_POST['metodo']){
						unset($mysql->campo);
						$mysql->campo['metodo'] = $_POST['metodo'];
						$mysql->prepare = array($_POST['id']);
						$mysql->filtro = " WHERE `id` = ? ";
						$mysql->update('pedidos');
					}
				// MUDAR METODO DE PAGAMENTO
			}





			// REDIRECIONANDO PARA O PLATAFORMA DE PAGAMENTO
				if(isset($pedidos->id)){
					if($pedidos->valor_total<=0){ // VALOR TOTAL DA COMPRA ZERADO
						$_POST['id'] = $pedidos->id;
						$table = 'pedidos';
						$transaction = '';
						$xml = (object)array();
						$xml->lastEventDate = date('c');
						$status = $situacao = 1;
						$retorno_pagseguro = 1;
						include 'retorno_pedidos.php';
						$arr['evento']  = "alert('Sua Compra Foi Realizada Com Sucesso!'); ";
						$arr['evento'] .= 'window.location.href="'.DIR.'/minha_conta/pedidos/"; ';


					} elseif($pedidos->id AND $pedidos->valor_subtotal){

						if($pedidos->metodo == 'PagSeguro' OR preg_match('(PagSeguro_)', $pedidos->metodo) OR preg_match('(Pagarme_)', $pedidos->metodo)){
							$ex_metodo = explode('_', $pedidos->metodo);
							include DIR_F.'/app/Ajax/Pagamentos/'.$ex_metodo[0].'/index.php';
							//$arr['evento'] = 'window.location.href="'.DIR.'/minha_conta/pedidos/"; ';

						} else {
							$arr['evento'] = 'window.location.href="'.DIR.'/minha_conta/pedidos/"; ';
						}
					}
					if($_SERVER['HTTP_HOST'] != 'localhost:4000'){ unset($_SESSION['carrinho']); }

				} else {
					$arr['evento'] = 'window.location.href="'.DIR.'/minha_conta/pedidos/"; ';
				}
			// REDIRECIONANDO PARA O PLATAFORMA DE PAGAMENTO

	}



	if(!isset($_GET['APP_'])){
		$mysql->fim();
		echo json_encode($arr);
	}

?>