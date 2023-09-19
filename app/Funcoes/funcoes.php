<?



		// NOVO

			// doacoes_situacao
			function doacoes_situacao($situacao){
				$return = '';
                if($situacao == 0){
                    $return = '<div>Aguardando Pagamento</div>';
                } elseif($situacao == 1){
                    $return = '<b class="c_verde">Pago</b>';
                } elseif($situacao == 2){
                    $return = '<b class="c_vermelho">Cancelado</b>';
                }
                return $return;
			}

			// doacoes_feitas
			function doacoes_feitas($value){
				$mysql = new Mysql();

    	        $mysql->filtro = " WHERE ".STATUS." AND situacao = 1 AND `doacoes` = '".$value->id."' ";
	            $doacoes_pagamentos = $mysql->read('doacoes_pagamentos');

	            $return = 0;
	            foreach ($doacoes_pagamentos as $key1 => $value1) {
	            	$return += $value1->preco;
	            }
	            $return = preco($return, 1);

                return $return;
			}

			// doacoes_feitas_porc
			function doacoes_feitas_porc($value){
				$mysql = new Mysql();

    	        $mysql->filtro = " WHERE ".STATUS." AND situacao = 1 AND `doacoes` = '".$value->id."' ";
	            $doacoes_pagamentos = $mysql->read('doacoes_pagamentos');

	            $return = 0;
	            foreach ($doacoes_pagamentos as $key1 => $value1) {
	            	$return += $value1->preco;
	            }
	            $return = $value->preco>0 ? ($return*100)/$value->preco : 0;
	            $return = (int)$return;

                return $return;
			}

            // meta
            function doacoes_meta($value){
                $mysql = new Mysql();

                $mysql->filtro = " WHERE `id` = '".$value->id."' ";
                $doacoes_pagamentos = $mysql->read('doacoes');

                $return = 0;
                foreach ($doacoes_pagamentos as $key1 => $value1) {
                    $return += $value1->preco;
                }
                $return = preco($return, 1);

                return $return;
            }

            // total doardores
            function doacoes_total($value){
                $mysql = new Mysql();

                $mysql->filtro = " WHERE ".STATUS." AND situacao = 1 AND `doacoes` = '".$value->id."' ";
                $doacoes_pagamentos = $mysql->read('doacoes_pagamentos');

                $total = count($doacoes_pagamentos);

                return $total;
            }

		// NOVO

			function truncateString($string, $maxLength) {
				if (strlen($string) > $maxLength) {
					$string = substr($string, 0, $maxLength);
					$string = rtrim($string, "!,.-");
					$string = substr($string, 0, strrpos($string, ' '));
					$string .= '...';
				}
				return $string;
			}



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



		// WIDTH E HEIGHT
			function wwhh($col, $id, $table, $width_ou_height, $txt=0){
				$return = LUGAR=='site' ? 800 : 0;
				$wwhh = array();

				$wwhh['doacoes']['foto'] = array(400, 250);
				$wwhh['doacoes']['foto1'] = array(1920, 720);

				$wwhh['blogs']['foto'] = array(360, 230);
				$wwhh['blogs']['foto1'] = array(1920, 600);

				$wwhh['banner']['foto'][1] = array(1920, 1000);
				$wwhh['banner']['foto1'][1] = array(700, 600);

				$wwhh['textos']['foto'] = array(1920, 280);

				$wwhh['textos']['foto_1_1'] = array(450, 450);
				$wwhh['textos']['foto_1_3'] = $wwhh['textos']['foto_1_2'] = $wwhh['textos']['foto_1_1'];

				$wwhh['textos']['foto_6'] = array(1920, 280);
				$wwhh['textos']['foto_7'] = array(1920, 600);
				$wwhh['textos']['foto_8'] = array(1920, 600);
				$wwhh['textos']['foto_9'] = array(1920, 600);

				if($txt){  // Texto na descricao da foto (usado no admin)
					if(!$return) $return = '';

					$modulo_campos = unserialize(base64_decode($id->campos));
					if($table == 'banner'){
						$lugares = '';
						foreach ($modulo_campos as $key => $value) {
							foreach ($value as $key1 => $value1) {
								if($value1['input']['nome'] == 'lugares'){
									$lugares = $value1['input']['opcoes'];
								}
							}
						}
						$itens = explode('; ', $lugares);
						for($c=0; $c<count($itens); $c++){
							$ex = explode('->', $itens[$c]);
							if(isset($ex[1])){
								if(isset($wwhh['banner'][$col][$ex[0]])){
									$return .= $ex[1].': '.$wwhh['banner'][$col][$ex[0]][0].' x '.$wwhh['banner'][$col][$ex[0]][1].' - ';
								}
							}
						}
					} else {
						foreach ($modulo_campos as $key => $value) {
							foreach ($value as $key1 => $value1) {
								if($value1['input']['nome'] == $col){
									if(isset($wwhh[$table][$col][$width_ou_height])){
										$return = $wwhh[$table][$col][$width_ou_height];
									}
								}
							}
						}
					}

				} else {
					foreach ($wwhh as $key => $value) {
						if($table == $key){
							foreach ($value as $key1 => $value1) {
								if($col == $key1){
									if($table == 'banner'){
										$lugares = rel('banner', $id, 'lugares');
										foreach ($value1 as $key2 => $value2) {
											if($lugares == $key2){
												$return = $value2[$width_ou_height];
											}
										}
									} else {
										$return = $value1[$width_ou_height];
									}
								}
							}
						}
					}
				}
				return $return;
			}
		// WIDTH E HEIGHT



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



		// CADASTRO PLANO
			function plano_situacao($value){
				$return = '';
				$consulta = plano_situacao_x($value);
				if($consulta){
					if(data_vencimento($consulta->data_vencimento) == date('Y-m-d')){
						$return = '<b class="c_amarelo1">(Vence Hoje)</b> ';
					} else {
    	            	$return = '<b class="c_verde">(Ativo)</b> ';
	                }
				} else {
					$mysql = new Mysql();
					$mysql->filtro = " WHERE ".STATUS." AND situacao = 1 AND `cadastro` = '".$value->id."' ";
					$cadastro_planos_faturas = $mysql->read('cadastro_planos_faturas');
					if(count($cadastro_planos_faturas)){
						$return = '<b class="c_vermelho">(Suspenso)</b> ';
					} else {
						$return = '<b class="c_cinza">(Aguardando pagamento)</b> ';
					}
				}
				return $return;
			}
			function plano_situacao_x($value){
				$return = 0;
				$mysql = new Mysql();
				$mysql->filtro = " WHERE ".STATUS." AND situacao = 1 AND `cadastro` = '".$value->id."' AND `data_vencimento` BETWEEN ('".date('Y-m-d')."') AND ('4000-01-01') ORDER BY `data_vencimento` DESC ";
				$cadastro_planos_faturas = $mysql->read_unico('cadastro_planos_faturas');
				if(isset($cadastro_planos_faturas->id) AND $cadastro_planos_faturas->id){
					$return = $cadastro_planos_faturas;
				}
				return $return;
			}

			function plano_situacao_0($value){
				$return = 0;
				$mysql = new Mysql();
                $mysql->filtro = " WHERE ".STATUS." AND situacao = 1 AND `cadastro` = '".$value->id."' ORDER BY `data_vencimento` DESC ";
                $cadastro_planos_faturas_ultima = $mysql->read_unico('cadastro_planos_faturas');

                if(isset($cadastro_planos_faturas_ultima->data_vencimento) AND data_vencimento($cadastro_planos_faturas_ultima->data_vencimento) > date('Y-m-d')){
                	$return = '<b class="c_vermelho">(Em&nbsp;Cancelamento)</b> ';
                } else {
					$return = '<b class="c_vermelho">(Assinar Plano)</b> ';
				}
				return $return;
			}

			function data_vencimento($data, $x=0){
				$return = 0;
				if($data){
					$return = date('Y-m-d', mktime(0, 0, 0, data($data, 'm'), data($data, 'd')+$x, data($data, 'Y')));
				}
				return $return;
			}

			// CARTOES
				// valida_cartao
					function valida_cartao($cartao, $validade, $cvc=false){
						$cartao = preg_replace("/[^0-9]/", "", $cartao);
						if($cvc) $cvc = preg_replace("/[^0-9]/", "", $cvc);

						$cartoes = array(
								'visa'		 => array('len' => array(13,16),    'cvc' => 3),
								'mastercard' => array('len' => array(16),       'cvc' => 3),
								'diners'	 => array('len' => array(14,16),    'cvc' => 3),
								'elo'		 => array('len' => array(16),       'cvc' => 3),
								'amex'	 	 => array('len' => array(15),       'cvc' => 4),
								'discover'	 => array('len' => array(16),       'cvc' => 4),
								'aura'		 => array('len' => array(16),       'cvc' => 3),
								'jcb'		 => array('len' => array(16),       'cvc' => 3),
								'hipercard'  => array('len' => array(13,16,19), 'cvc' => 3),
						);

						$bandeira = '';
						$valid = false;
						$erro = "";
						$valid_cvc = false;
						switch($cartao){
							case (bool) preg_match('/^(636368|438935|504175|451416|636297)/', $cartao) :
								$bandeira = 'elo';
							break;

							case (bool) preg_match('/^(606282)/', $cartao) :
								$bandeira = 'hipercard';
							break;

							case (bool) preg_match('/^(5067|4576|4011)/', $cartao) :
								$bandeira = 'elo';
							break;

							case (bool) preg_match('/^(3841)/', $cartao) :
								$bandeira = 'hipercard';
							break;

							case (bool) preg_match('/^(6011)/', $cartao) :
								$bandeira = 'discover';
							break;

							case (bool) preg_match('/^(622)/', $cartao) :
								$bandeira = 'discover';
							break;

							case (bool) preg_match('/^(301|305)/', $cartao) :
								$bandeira = 'diners';
							break;

							case (bool) preg_match('/^(34|37)/', $cartao) :
								$bandeira = 'amex';
							break;

							case (bool) preg_match('/^(36,38)/', $cartao) :
								$bandeira = 'diners';
							break;

							case (bool) preg_match('/^(64,65)/', $cartao) :
								$bandeira = 'discover';
							break;

							case (bool) preg_match('/^(50)/', $cartao) :
								$bandeira = 'aura';
							break;

							case (bool) preg_match('/^(35)/', $cartao) :
								$bandeira = 'jcb';
							break;

							case (bool) preg_match('/^(60)/', $cartao) :
								$bandeira = 'hipercard';
							break;

							case (bool) preg_match('/^(4)/', $cartao) :
								$bandeira = 'visa';
							break;

							case (bool) preg_match('/^(5)/', $cartao) :
								$bandeira = 'mastercard';
							break;
						}

						if(isset($cartoes[$bandeira])){
							$dados_cartao = $cartoes[$bandeira];
							if(!is_array($dados_cartao)) return array(false, false, false);

							$valid = true;
							$valid_cvc = false;

							if(!in_array(strlen($cartao), $dados_cartao['len'])) $valid = false;
							if($cvc AND strlen($cvc) <= $dados_cartao['cvc'] AND strlen($cvc) !=0) $valid_cvc = true;
						}
						if(!$valid){
							$erro = "Número do cartão inválido!";
						}

						$ex = explode('/', $validade);
						if(isset($ex[1])){
							$data_validade = $ex[1].'-'.$ex[0].'-01';
							if($data_validade > date('Y-m-d')){
								//$valid = true;
							} else {
								$valid = false;
								$erro = "Data de Validade Inválido!";
							}
						} else {
							$valid = false;
							$erro = "Data de Validade Inválido!";
						}

						return array($bandeira, $valid, $erro, $valid_cvc);
					}
				// valida_cartao

				// cartao_crip
				function cartao_crip($numero, $tipo=0){
					$return = $numero;
					if(!$tipo){
						$return = str_replace('0', 'x', $return);
						$return = str_replace('3', '0', $return);
						$return = str_replace('6', '3', $return);
						$return = str_replace('9', '6', $return);
						$return = str_replace('x', '9', $return);
						$return = base64_encode($return);
					} else {
						$return = base64_decode(vc($return));
						$return = str_replace('9', 'x', $return);
						$return = str_replace('6', '9', $return);
						$return = str_replace('3', '6', $return);
						$return = str_replace('0', '3', $return);
						$return = str_replace('x', '0', $return);
					}
					return $return;
				}
				// cartao_crip
			// CARTOES
		// CADASTRO PLANO


		// PAGAMENTO
			function Pagamento_alert_msg($msg, $url, $arr, $mysql, $pedidos){
				unset($mysql->campo);
				$mysql->campo['erro_pagamento'] = $msg;
				$mysql->filtro = " WHERE id = '".$pedidos->id."' ";
				$ult_id = $mysql->update($pedidos->table);

				if($url == ''){
					$url = DIR.'/minha_conta/minha_contribuicoes/';
				}

				echo '<script> ';
					echo 'alert('.A.$msg.A.'); window.parent.location = "'.$url.'"';
				echo '</script> ';
				exit();
			}
		// PAGAMENTO



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



		// TITULOS
			function titulos($item, $unico=0){
                $voltar  = '<li class="dib no">';
                	$voltar .= '<a onclick="history.go(-1);" class="cor_'.COR1.'"><i class="faa-chevron-circle-left"></i>&nbsp; Voltar &nbsp; | &nbsp; </a>';
                $voltar .= '</li>';

                $home  = '<li class="dib no">';
					$home .= '<a href="'.DIR.'/home/" class="cor_'.COR1.'" title="Página Principal">Home</a>';
                $home .= '</li> ';

                if(isset($item->nome) AND $item->nome){
                	$nome = titulos_nome($item, $_GET['pg']);
                    $pai  = '<li class="dib">';
						$pai .= '<a href="'.DIR.'/'.$item->table.'" class="cor_'.COR1.'">'.$nome.'</a>';
                    $pai .= '</li>';
                }

                if(isset($_GET['categorias']) AND $_GET['categorias']!='-' AND $_GET['pg'] != 'login' AND $_GET['pg'] != 'cadastro'){
                	$cate = 1;
                	$item = (object)array();
                	$item->categorias = $_GET['categorias'];
                	$item->table = $_GET['pg'];
                }

                if(isset($_GET['cate']) AND $_GET['cate']!='-' AND $_GET['pg'] != 'login' AND $_GET['pg'] != 'cadastro'){
                	$cate = 1;
                	$item = (object)array();
                	$item->categorias = $_GET['cate'];
                	$item->table = $_GET['pg'];
                }

                if(isset($item->categorias) AND $item->categorias AND $_GET['pg'] != 'login' AND $_GET['pg'] != 'cadastro'){
                	$categorias = '';
                	$sub = rel($item->table.'1_cate', $item->categorias, 'subcategorias');
                	if($sub){
	                    $categorias .= '<li class="dib">';
	                        $categorias .= '<a href="'.DIR.'/'.$item->table.'/-/-/'.$sub.'" class="cor_'.COR1.'">'.rel($item->table.'1_cate', $sub).'</a>';
	                    $categorias .= '</li>';
	                }
                    $categorias .= '<li class="dib">';
                        $categorias .= '<a href="'.DIR.'/'.$item->table.'/-/-/'.$item->categorias.'" class="cor_'.COR1.'">'.rel($item->table.'1_cate', $item->categorias).'</a>';
                    $categorias .= '</li>';
                }

				$nome = titulos_nome($item, $_GET['pg'], 1);
                $pagina  = '<li class="dib">';
                	if(isset($cate)){
	                    $pagina .= '<a href="'.DIR.'/'.$item->table.'/" class="">'.$nome.'</a>';
                	} else {
	                    $pagina .= '<a href="" class="">'.$nome.'</a>';
                	}
                $pagina .= '</li>';

                if($_GET['pg'] == 'minha_conta' OR $_GET['pg'] == 'area_seller'){
                    $pagina .= '<li class="dib">';
                        $pagina .= '<a href="'.DIR.'/'.$_GET['pg'].'/'.$_GET['nome'].'" class="">'.ucfirst(str_replace('_', ' ', $_GET['nome'])).'</a>';
                    $pagina .= '</li>';
                }

                $return  = '<ul class="funcao_titulos"> ';
					$return .= $voltar.$home;
					$return .= (isset($pai) AND $pai) ? $pai : '';
					$return .= (!isset($cate) AND isset($categorias)) ? $categorias : '';
					$return .= $pagina ? $pagina : '';
					$return .= (isset($cate) AND isset($categorias)) ? $categorias : '';
					$return .= (isset($_GET['titulo_extra']) AND $_GET['titulo_extra']) ? '<li class="dib">'.$_GET['titulo_extra'].'</li>' : '';
				$return .= '</ul> ';

				if($unico==1){
					if($pagina){
						$return = $nome;
					} else {

					}

				}
				return $return;
			}
		// TITULOS



		// IMG PRODUTO
			function img_produto($img, $value, $width, $height){
				$return = '';
	    		$img->tags = ' class="db w100p m-a" ';
				if($value->foto){
		    		$return = $img->img($value, $width, $height);
				} else {
					$mysql = new Mysql();
					$mysql->colunas = 'foto';
					$mysql->filtro = " WHERE ".STATUS." AND produtos = '".$value->id."' AND foto != '' ORDER BY id ASC ";
		        	$produtos_combinacoes = $mysql->read_unico('produtos_combinacoes');
		        	if(isset($produtos_combinacoes->foto) AND $produtos_combinacoes->foto){
						$return = $img->img($produtos_combinacoes, $width, $height);
					}
				}
				return $return;
			}
		// IMG PRODUTO


	// ----------------------------------------------------------------------------------------------------------------------------------------------------------


		// GRAVANDO EDITOR
			function editor_gravar($table, $id){
				$mysql = new Mysql();

				for($i=0; $i<10; $i++){
					if(!$i)	$c = '';
					else	$c = $i;

					if(isset($_POST['txt_editor'.$c])){
						$mysql->colunas = 'id';
						$mysql->prepare = array($table, $id, $c);
						$mysql->filtro = " WHERE `tabelas` = ? AND `item` = ? AND `tipo` = ? ";
						$z_txt = $mysql->read_unico('z_txt');

						// DIR Ckfinder
							$txt_editor = str_replace(DIR.'/web/ckfinder/', '/web/ckfinder/', $_POST['txt_editor'.$c]);
						// DIR Ckfinder

						if($z_txt){
							$mysql->logs = 0;
							$mysql->prepare = array($table, $id, $c);
							$mysql->filtro = " WHERE `tabelas` = ? AND `item` = ? AND `tipo` = ? ";
							$mysql->campo['txt'] = base64_encode(stripslashes($txt_editor));
							$mysql->update('z_txt');
						} else {
							$mysql->logs = 0;
							$mysql->campo['tipo'] = $c;
							$mysql->campo['item'] = $id;
							$mysql->campo['tabelas'] = $table;
							$mysql->campo['txt'] = base64_encode(stripslashes($txt_editor));
							$mysql->insert('z_txt');
						}
					}
				}
			}
		// GRAVANDO EDITOR


		// GRAVANDO WEBCAM_GRAVAR
			function webcam_gravar($key, $value, $table, $ult_id, $nome){
                $return = convertar_base64_para_img($value, $table, sem('acentos_all', $ult_id.'_'.sem('acentos_all', $nome).'_'.sem('url', $_SERVER['HTTP_HOST']).'_zz'));

				$mysql = new Mysql();
				$mysql->campo[$key] = $return;
				$mysql->filtro = " WHERE id = '".$ult_id."' ";
				$mysql->update($table);

				return $return;
			}
		// GRAVANDO WEBCAM_GRAVAR


	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



		// GEOMAPEAMENTO

			// Mapa
			function mapa($width, $height, $value=''){
				$mysql = new Mysql();
				if($value){
					$mysql->colunas = 'nome, maps_lat, maps_lng, maps_zoom';
					$mysql->prepare = array($value->id);
					$mysql->filtro = " WHERE `id` = ? ";
					$mapa = $mysql->read_unico($value->table);
				} else {
					$mysql->colunas = 'nome, maps_lat, maps_lng, maps_zoom';
					$mysql->filtro = " WHERE `tipo` = 'mapa' ";
					$mapa = $mysql->read_unico('configs');
				}
				if($mapa->maps_lat AND $mapa->maps_lng){
					$return =
					'<div> '.
						'<iframe src="'.DIR.'/plugins/Google/Maps/maps.php?lat='.$mapa->maps_lat.'&lng='.$mapa->maps_lng.'&zoom='.iff($mapa->maps_zoom, $mapa->maps_zoom, 18).'&nome='.$mapa->nome.'&key='.KEY_GOOGLE.'" '.
						'width="'.$width.'" height="'.$height.'" background="no" scrolling="No" marginwidth="0" marginheight="0" frameborder="0"></iframe> '.
					'</div> ';
				} elseif($mapa->rua){
					$return =
					'<div> '.
						'<iframe src="'.DIR.'/plugins/Google/Maps/maps.php?endereco='.$mapa->rua.'+'.$mapa->cidades.'+'.$mapa->estados.'&zoom=18&nome='.$mapa->nome.'&key='.KEY_GOOGLE.'" '.
						'width="'.$width.'" height="'.$height.'" background="no" scrolling="No" marginwidth="0" marginheight="0" frameborder="0"></iframe> '.
					'</div> ';
				}
				return $return;
			}
			function mapa1($width, $height, $lat, $lng){
				$return =
				'<div> '.
					'<iframe src="'.DIR.'/plugins/Google/Maps/maps.php?lat='.$lat.'&lng='.$lng.'&zoom=18&nome=" '.
					'width="'.$width.'" height="'.$height.'" background="no" scrolling="No" marginwidth="0" marginheight="0" frameborder="0"></iframe> '.
				'</div> ';
				return $return;
			}
			function mapa2($width, $height, $value){
				$return =
				'<div> '.
					'<iframe src="'.DIR.'/plugins/Google/Maps/maps.php?endereco='.$value->rua.',+'.$value->numero.'+'.$value->cidades.'+'.$value->estados.'&zoom=18&nome=&key='.KEY_GOOGLE.'" '.
					'width="'.$width.'" height="'.$height.'" background="no" scrolling="No" marginwidth="0" marginheight="0" frameborder="0"></iframe> '.
				'</div> ';
				return $return;
			}

			// Como Chegar
			function como_chegar($endereco){
				$return = 'https://maps.google.com/maps?f=d&daddr='.$endereco.'+Brasil';
				return $return;
			}

			// Mapa Lat Long
			function mapa_google($endereco){
				$geocode = file_get_contents('https://maps.googleapis.com/maps/api/geocode/json?address='.urlencode($endereco).'&components=country:BR&sensor=true&key='.KEY_GOOGLE);
				$output = json_decode($geocode);
				if(isset($output->results[0])){
					$dados['lat'] = $output->results[0]->geometry->location->lat;
					$dados['lng'] = $output->results[0]->geometry->location->lng;
					$dados['output'] = $output;
				} else {
					$dados['lat'] = 0;
					$dados['lng'] = 0;
					$dados['erro'] = $output;
				}
				return ($dados);

				/*
				$data['address'] = urlencode(str_replace(',', ' - ', $endereco));
				$data['components'] = 'country:BR';
				$data['sensor'] = 'false';
				$data = http_build_query($data);
				$url = 'http://maps.google.com/maps/api/geocode/json?key='.KEY_GOOGLE;
				$curl = curl_init($url . '?' . $data);
				curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
				$resultado = json_decode(curl_exec($curl));
				curl_close($curl);
				if(isset($resultado->results[0])){
					$dados['lat'] = $resultado->results[0]->geometry->location->lat;
					$dados['lon'] = $resultado->results[0]->geometry->location->lng;
				} else {
					$dados['lat'] = 0;
					$dados['lon'] = 0;
					$dados['erro'] = $resultado;
				}
				return ($dados);
				*/
			}

			// Geomapeamento
			function geomapeamento($geocode){
				$return = array('rua'=>'', 'numero'=>'', 'bairro'=>'', 'cidades'=>'', 'estados'=>'', 'pais'=>'');
				$array = json_decode($geocode);
				foreach ($array->results[0]->address_components as $key => $value) {
					if($value->types[0] == 'route')							$return['rua'] = $value->long_name;
					if($value->types[0] == 'street_number')					$return['numero'] = $value->long_name;
					if($value->types[0] == 'political')						$return['bairro'] = $value->long_name;
					if($value->types[0] == 'administrative_area_level_2')	$return['cidades'] = $value->long_name;
					if($value->types[0] == 'administrative_area_level_1')	$return['estados'] = $value->short_name;
					if($value->types[0] == 'postal_code')					$return['cep'] = $value->long_name;
					if($value->types[0] == 'country')						$return['pais'] = $value->long_name;
				}
				if($return['bairro'] AND $return['cidades'] AND $return['estados']){
					if($array->results[0]->geometry->location->lat)				$return['lat'] = $array->results[0]->geometry->location->lat;
					if($array->results[0]->geometry->location->lng)				$return['lng'] = $array->results[0]->geometry->location->lng;
				}
				return $return;
			}

			// Email Personalizado
			function var_email($txt, $var, $plano2=0){
				$var = str_replace('&nbsp;', ' ', $var);
				if($plano2){
					$ex = explode('&-&', $var);
				} else {
					$ex = explode('&', $var);
				}
				for($i=0; $i<count($ex); $i++){
					$ex1 = explode('->', $ex[$i]);
					$txt = str_replace('{'.$ex1[0].'}', $ex1[1], $txt);
				}
				return($txt);
			}

			// Buscar Endereco
			function busca_endereco($endereco){
				$geocode = file_get_contents('https://maps.googleapis.com/maps/api/geocode/json?address='.urlencode($endereco).'&components=country:BR&sensor=true&key='.KEY_GOOGLE);
				$resultado = json_decode($geocode);

				$return = array('rua'=>'', 'numero'=>'', 'bairro'=>'', 'cidade'=>'', 'estado'=>'', 'cep'=>'',  'cep_prefix'=>'',  'lat'=>'',  'lng'=>'');
				if(isset($resultado->results[0]->address_components) AND $resultado->results[0]->address_components){
					foreach($resultado->results[0]->address_components as $key => $value) {
						if($value->types[0] == 'route')
							$return['rua'] = $value->long_name;
						else if($value->types[0] == 'street_number')
							$return['numero'] = $value->long_name;
						else if($value->types[0] == 'neighborhood' OR $value->types[0] == 'sublocality_level_1' OR (isset($value->types[1]) AND $value->types[1] == 'sublocality_level_1')OR (isset($value->types[2]) AND $value->types[2] == 'sublocality_level_1'))
							$return['bairro'] = $value->long_name;
						else if($value->types[0] == 'locality' OR $value->types[0] == 'administrative_area_level_2')
							$return['cidade'] = $value->long_name;
						else if($value->types[0] == 'administrative_area_level_1')
							$return['estado'] = $value->short_name;
						else if($value->types[0] == 'postal_code')
							$return['cep'] = str_replace('-', '', $value->short_name);
						else if($value->types[0] == 'postal_code_prefix')
							$return['cep_prefix'] = str_replace('-', '', $value->short_name);
					}
					if($return['bairro'] AND $return['cidade'] AND $return['estado']){
						$return['lat'] = isset($resultado->results[0]->geometry->location->lat) ? $resultado->results[0]->geometry->location->lat : 0;
						$return['lng'] = isset($resultado->results[0]->geometry->location->lng) ? $resultado->results[0]->geometry->location->lng : 0;
					}
				}
				return $return;
			}

			// formula de haversine
			function formula_haversine($lat1, $lon1, $lat2, $lon2, $unit="k") {
				$theta = $lon1 - $lon2;
				$dist = sin(deg2rad($lat1)) * sin(deg2rad($lat2)) +  cos(deg2rad($lat1)) * cos(deg2rad($lat2)) * cos(deg2rad($theta));
				$dist = acos($dist);
				$dist = rad2deg($dist);
				$miles = $dist * 60 * 1.1515;
				$unit = strtoupper($unit);

				if ($unit == "K") { // Kilometers
					$return = ($miles * 1.609344);
				} else if ($unit == "N") { //Nautical Miles
					$return = ($miles * 0.8684);
				} else { // Miles
					$return = $miles;
				}

				return $return;
			}

		// GEOMAPEAMENTO



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------


		// BUSCA REFINADA
			function url_busca($pg, $item='', $id=''){
				if($item=='categorias'){
				 	$return = url($pg, $id, 'ok');
					$return .= DIR_G;
				} elseif($item=='categorias_sel'){
					$return = DIR.'/'.$pg.'/'.DIR_G;
				} else {
					$return  = url_busca_tirar($item);
					$return .= '&'.$item.'='.$id;
				}
				// Tirando paginacao (*para novas pesquisas)
				//$return = str_replace('pag=', 'pag=0&', $return);
				return $return;
			}

			function url_busca_tirar($item){
				$ex = explode('?', $_SERVER ['REQUEST_URI']);
				$url = isset($ex[0]) ? $ex[0] : '';
				$gets = isset($ex[1]) ? $ex[1] : '';
				$ex = explode('&', $gets);
				$url1 = array();
				foreach ($ex as $key => $value){
					$ex1 = explode('=', $value);
					if($ex1[0]!=$item){
						$url1[$ex1[0]] = $value;
					}
				}
				$return = $url.'?'.implode('&', $url1);

				// Tirando paginacao (*para novas pesquisas)
				$return = str_replace('pag=', 'pag=0&', $return);

				return $return;
			}
		// BUSCA REFINADA



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



		// FILTROS SITE
			// Filtro tags dinamicas
			function filtro($tipo){
				$return = '';
				$ex = explode('-', $tipo);
				foreach ($ex as $key => $value) {
					if(isset($_GET[$value]) AND $_GET[$value] != '-'){
						$_GET[$value] = cod('html->asc', $_GET[$value]);
						$return .= " AND `".$value."` = '".$_GET[$value]."' ";
					}
				}
				return $return;
			}

			// filtro Tags Fixas
			function filtro_fixo($tipo, $table='produtos'){
				$return = '';
				$ex = explode('-', $tipo);
				foreach ($ex as $key => $value) {
					if($value=='categorias' AND isset($_GET['categorias']) AND $_GET['categorias'] != '-'){
						//if(isset($_GET['tipo']) AND $_GET['tipo'] == 'sub'){
							$return .= " AND (".categorias_subcategorias($_GET['categorias'], $table).") ";
						//} else {
						//	$return .= " AND `categorias` = '".$_GET['categorias']."' ";
						//}
					} elseif($value=='vcategorias' AND $_GET['categorias']!='-'){
						$return .= " AND vcategorias LIKE concat('%', '-".$_GET['categorias']."-', '%') ";
					}
				}
				return $return;
			}

			// Filtro Busca
			function filtro_busca($colunas='nome, uniqid'){
				if(isset($_GET['busca']) AND $_GET['busca'] == 'Buscar') $_GET['busca'] = '';
				if(isset($_POST['busca']) AND $_POST['busca'] == 'Buscar') $_POST['busca'] = '';

				if(isset($_GET['pag'])){
					if(isset($_SESSION['pesq_session_filtro'])){
						$_GET['busca'] = $_SESSION['pesq_session_filtro'];
					}
				}
				unset($_SESSION['pesq_session_filtro']);

				$return = '';
				if(isset($_POST['busca']) OR isset($_GET['busca'])){
					if(isset($_POST['busca']))	$item = trim($_POST['busca']);
					if(isset($_GET['busca']))	$item = trim($_GET['busca']);
					$_SESSION['pesq_session_filtro'] = $_GET['busca'] = $item;

					$item = cod('html->asc', $item);

					$fitro = array();
					$ex = explode(',', $colunas);
					foreach ($ex as $key => $value) {
						if($item){
						if($item){
							$fitro1 = " `".trim($value)."` REGEXP \"".cod('busca', $item)."\" ";
							$fitro2 = " `".trim($value)."` LIKE concat('%', '".$item."', '%') ";
							$fitro3 = " 1=2 ";
							//$fitro3 = "     `categorias` IN ( SELECT `id` FROM `produtos1_cate` WHERE ".STATUS." AND (".$fitro1." OR ".$fitro2.") ) ";
							//$fitro3 .= " OR `categorias` IN ( SELECT `id` FROM `produtos1_cate` WHERE ".STATUS." AND `subcategorias` IN ( SELECT `id` FROM `produtos1_cate` WHERE ".STATUS." AND (".$fitro1." OR ".$fitro2.") ) ) ";

							$fitro[] = $fitro1." OR ".$fitro2." OR ".$fitro3;
						}
						}
					}

					$return = $fitro ? " AND (".implode(' OR ', $fitro).") " : '';
				}
				return $return;
			}
		// FILTROS SITE





	// ----------------------------------------------------------------------------------------------------------------------------------------------------------




		// IMAGENS

			// IMAGEM REDONDA
				function img_redonda($value, $width, $height, $classe='', $img=''){
					if(!$img){
						$img = new Imagem();
					}
					$return = '<div class="dib '.$classe.' br50p" style="width: '.$width.'px; height: '.$height.'px; background: url('.$img->img($value, $width+30, $height+30, 1).') center no-repeat; background-size: cover;"></div> ';
					return $return;
				}
			// IMAGEM REDONDA

			// NOME DA FOTO
				function nome_da_foto($foto){
					$return = array();
					if($foto){
						$ext = pathinfo($foto, PATHINFO_EXTENSION);
						$nome = explode('.'.$ext, $foto);
						$nomee = explode('_', $nome[0]);
						$return['nome'] = $nome[0];
						$return['ext'] = $ext;
						$return['nomee'] = str_replace('-', ' ', $nomee[0]);
					}
					return $return;
				}
			// NOME DA FOTO

			// NEW FILE NOPNG E WEBP (UPLOAD)
				function new_file_upload_nopng_webp($imagem_nome, $diretorio, $no_webp=0){
					$return = $imagem_nome;
					$ex_foto = nome_da_foto($imagem_nome);
					$file = $diretorio.$imagem_nome;

					// PNG TO JPG
						if(strtolower($ex_foto['ext']) == 'png'){
							$mediddas = getimagesize($file);

							$img_1 = imagecreatetruecolor($mediddas[0], $mediddas[1]);
							$img_2 = imagecreatefrompng($file);

							$white = imagecolorallocate($img_1, 255, 255, 255);
							imagefill($img_1, 0, 0, $white);

							imageCopy($img_1, $img_2, 0, 0, 0, 0, $mediddas[0], $mediddas[1]);

							imagejpeg($img_1, $diretorio.$ex_foto['nome'].'.jpg');

							imageDestroy($img_1);
							imageDestroy($img_2);

							$return = $ex_foto['nome'].'.jpg';
						}
					// PNG TO JPG

					// WEBP
						if(!$no_webp){
							//$image = imagecreatefromstring(file_get_contents($file));
							//imagewebp($image, $diretorio.$ex_foto['nome'].'.webp', 100);
							//imagedestroy($image);
						}
					// WEBP

					return $return;
				}
			// NEW FILE NOPNG E WEBP (UPLOAD)

			// CONVERTAR PARA WEBP
				function convertar_para_webp($file, $new_file){
						$image = imagecreatefromstring(file_get_contents($file));
						if(QUALIDADE_WEBP_FUNC){
							imagewebp($image, $new_file, QUALIDADE_WEBP_FUNC);
						} else {
							imagewebp($image, $new_file);
						}
						imagedestroy($image);
				}
			// CONVERTAR PARA WEBP

			// CONVERTER IMG_PARA_BASE64
				function convertar_img_para_base64($foto){
					$type = pathinfo($foto, PATHINFO_EXTENSION);
					$return = 'data:image/'.$type.';base64,'.base64_encode(file_get_contents(DIR_F.'/web/fotos/'.$foto));
					return $return;
				}

				function convertar_base64_para_img($foto, $table, $nome=''){
					$ex = explode(';base64,', $foto);
					$return = sem('acentos_all', $table).'_'.($nome ? $nome : time()).rand().'.jpg';
				    $file = fopen(DIR_F.'/web/fotos/'.$return, 'w');
				    fwrite($file, base64_decode($ex[1]));
				    fclose($file);
					return $return;
				}
				function convertar_base64_para_img1($foto, $nome){
					$ex = explode(';base64,', $foto);
					$return = $nome;
					if(isset($ex[1])){
				    	$file = fopen(DIR_F.'/web/fotos/'.$return, 'w');
				    	fwrite($file, base64_decode($ex[1]));
				    	fclose($file);
					}
					return $return;
				}
			// CONVERTER IMG_PARA_BASE64

			// MARCA DAGUA
				function marca_dagua($img, $posx=80, $posy=80){
					$watermark = imagecreatefrompng(DIR_F.'/web/img/marca_dagua.png');
					$imageURL = imagecreatefromjpeg($img);
					$watermarkX = imagesx($watermark);
					$watermarkY = imagesy($watermark);
					imagecopy($imageURL, $watermark, imagesx($imageURL)-$posx, imagesy($imageURL)-$posy, 0, 0, $watermarkX, $watermarkY);
					imagejpeg($imageURL, $img, 90);
				}
			// MARCA DAGUA

			// CROP
				function cropp($id, $foto, $col, $ids_mais_fotos, $table, $url=''){
					$width = wwhh($col, $id, $table, 0);
					$height = wwhh($col, $id, $table, 1);

					$width = $width ? $width : 800;
					$height = $height ? $height : 800;

					$return  = '<div class=""> ';
						$return .= '<form id="FORM_CROP_FOTOS" class="FORM_CROP_FOTOS" method="post" action="'.($url ? $url.'?crop_salvar=1' : $_SERVER['SCRIPT_NAME']).'" enctype="multipart/form-data">
			                            <input type="hidden" name="id" value="'.$id.'" >
			                            <input type="hidden" name="col" value="'.$col.'" >
		                                <input type="hidden" name="crop_table" value="'.$table.'" >
		                                <input type="hidden" name="crop_salvar" value="1" >
			                            <button class="CROP_FOTOS_BUTTON_SUBMIT dni"></button>
			                            <div class=""> ';
			                            	if($url){
						$return .= '        	<div class="pb20 fz18 fwb tac">Ajuste o tamanho das imagens abaixo e clique no botao Salvar no fim da página.</div> ';
			                            	}
			                                if(!$ids_mais_fotos OR in_array("0", $ids_mais_fotos)){
						$return .= '            <div class="crop_0_pai">
			                                        <div class="p10 tac"><div class="dib"><img src="'.DIR.'/web/fotos/'.$foto.'" id="crop_0" /></div></div>
			                                        <div class="dni"><div class="crop_button" id="crop_0_button"></div><div id="crop_0_result"></div><input name="foto[0]" id="crop_0_input" /></div>
			                                        <script>cropp('.A.'crop_0'.A.', '.$width.', '.$height.')</script>
			                                    </div> ';
			                                }
						$return .= '	</div> ';
										$mysql = new Mysql();
		                                $mysql->prepare = array($id);
		                                $mysql->filtro = " WHERE ".STATUS." AND item = ? AND tabelas = '".$table."' ORDER BY ".ORDER." ";
		                                $mais_fotos = $mysql->read('mais_fotos');
		                                foreach ($mais_fotos as $key => $value) {
		                                    if($ids_mais_fotos AND in_array($value->id, $ids_mais_fotos)){
						$return .= '			<div class="crop_'.$value->id.'_pai">
	                                                <div class="p10 tac"><div class="dib"><img src="'.DIR.'/web/fotos/'.$value->foto.'" id="crop_'.$value->id.'" /></div></div>
	                                                <div class="dni"><div class="crop_button" id="crop_'.$value->id.'_button"></div><div id="crop_'.$value->id.'_result"></div><input name="foto['.$value->id.']" id="crop_'.$value->id.'_input" /></div>
	                                                <script>cropp('.A.'crop_'.$value->id.A.', '.$width.', '.$height.');</script>
	                                            </div> ';
											}
										}
						$return .= '</form> ';
									if(!$url){ $return .= '<script>ajaxForm('.A.'FORM_CROP_FOTOS'.A.');</script> '; }
						$return .= '<div class="p20"><a class="botao CROP_FOTOS_BUTTON">Salvar Imagens</a></div>
			                        <script>
			                            $(".CROP_FOTOS_BUTTON").on("click", function() {
			                                $(".carregando").show();
			                                setTimeout(function(){
			                                    $(".crop_button").each(function() {
			                                        $(this).trigger("click");
			                                        $id = $(this).attr("id").replace("_button", "");
			                                        $canvas = document.querySelector("#"+$id+"_result canvas");
			                                        $base64 = $canvas.toDataURL("image/jpeg");
			                                        //$("#"+$id+"_result").append('.A.'<img src="'.A.'+$base64+'.A.'" />'.A.');
			                                        $("#"+$id+"_input").val($base64);
			                                        $(".CROP_FOTOS_BUTTON_SUBMIT").trigger("click");
			                                    });
			                                }, .5);
			                            })
			                        </script>
			                    </div>';
					return $return;
				}
				function cropp_gravar($array_base64, $id, $table, $tabelas=''){
					$tabelas = $tabelas ? $tabelas : $table;
		            if($array_base64){
		            	$mysql = new Mysql();
		                foreach ($array_base64 as $key => $value) {
		                    if($key==0){
		                        $mysql->filtro = " WHERE ".STATUS." AND id = '".$id."' ORDER BY ".ORDER." ";
		                        $consulta = $mysql->read_unico($table);
		                        if(isset($consulta->id) AND $consulta->id){
		                            $nome_da_foto = nome_da_foto($consulta->foto);
		                            $foto = substr($nome_da_foto['nome'], 0, -5).'_'.rand(10000, 99999).'.'.$nome_da_foto['ext'];
		                            convertar_base64_para_img1($value, $foto);

		                            unset($mysql->campo);
		                            $mysql->campo[$_POST['col']] = $foto;
		                            $mysql->filtro = " WHERE id = '".$consulta->id."' ";
		                            $mysql->update($table);
		                        }
		                    } else {
		                        $mysql->filtro = " WHERE ".STATUS." AND id = '".$key."' AND item = '".$id."' AND tabelas = '".$tabelas."' ORDER BY ".ORDER." ";
		                        $mais_fotos = $mysql->read_unico('mais_fotos');
		                        if(isset($mais_fotos->id) AND $mais_fotos->id){
		                            $nome_da_foto = nome_da_foto($mais_fotos->foto);
		                            $foto = substr($nome_da_foto['nome'], 0, -5).'_'.rand(10000, 99999).'.'.$nome_da_foto['ext'];
		                            convertar_base64_para_img1($value, $foto);

		                            unset($mysql->campo);
		                            $mysql->campo['foto'] = $foto;
		                            $mysql->filtro = " WHERE id = '".$key."' ";
		                            $mysql->update('mais_fotos');
		                        }
		                    }
		                }
		            }
				}
			// CROP


			// BANNERS E GALERIAS
				// BANNER IMAGEM MOBILE
					function banner($value, $width, $height, $classe, $desk_img=0){
						if(!$width OR !$height){
							$width = wwhh('foto', $value->id, $value->table, 0);
							$height = wwhh('foto', $value->id, $value->table, 1);
						}
						$img = new Imagem();
						$classe_desk = $classe;
						if(isset($value->foto1) AND $value->foto1){
							if(preg_match('(class=")', $classe)){
								$classe_desk = str_replace('class="', 'class="desk ', $classe);
							}
						}
						$img->carregamento = 0;
						$img->tags = $classe_desk;
						if($desk_img){
							$return = $img->img($value, $width, $height);
						} else {
							$return = '<div '.str_replace('class="', 'class="o-h dn_1000 ', $classe_desk).' style="width: 100%; height: '.$height.'px; background: url('.$img->img($value, ($width*1.5), ($height*1.5), 1).') no-repeat; background-size: cover; background-position: center center;"></div>';
						}

						$classe_mob = $classe;
						$foto1 = 'foto';
						if(isset($value->foto1) AND $value->foto1){
							$foto1 = 'foto1';
						}
						if(!$width OR !$height){
							$width = wwhh($foto1, $value->id, $value->table, 0);
							$height = wwhh($foto1, $value->id, $value->table, 1);
						}
						if(preg_match('(class=")', $classe)){
							$classe_mob = str_replace('class="', 'class="mob ', $classe);
						}
						$img->carregamento = 0;
						$img->tags = $classe_mob;
						$img->foto = $foto1;
						$return .= $img->img($value, $width, $height);
						return $return;
					}
				// BANNER IMAGEM MOBILE


				// GALERIA COM THUMBS
					// GALERIA MAIOR
						function Galeria_Img_Maior($item, $width, $height, $link=0, $zoom=0, $mais_fotos=''){
							$mais_fotos = $mais_fotos ? $mais_fotos : mais_fotos($item);
							$zoom = MOBILE ? 0 : $zoom;
							$zoom1 = ($zoom ? 1 : 0);
							$return = '';
							$return .= '<div class="Plugin1 po-h no_pagg Img_Maior p10 tac" '.iff($link, 'link="1"').' '.iff($zoom, 'zoom="1"').' itens="1" auto="'.iff($zoom , 100000000, 30).'" altura_flexcivel="1" efeito="fadeUp">';
								if(isset($item->foto) AND $item->foto){
									$return .= Galeria_Img_Maior_img($item, 'foto', $width, $height, $link, $zoom, $zoom1); $zoom1=0;
								}
								// OUTRAS FOTOS
									//for ($i=1; $i <= 6; $i++) {
									//	$foto = 'foto'.$i;
									//	if(isset($item->$foto) AND $item->$foto){
									//		$return .= Galeria_Img_Maior_img($item, $foto, $width, $height, $link, $zoom, $zoom1); $zoom1=0;
									//	}
									//}
								// OUTRAS FOTOS
								// MAIS FOTOS
									if($mais_fotos){
							    		foreach ($mais_fotos as $key => $value) {
											$return .= Galeria_Img_Maior_img($value, 'foto', $width, $height, $link, $zoom, $zoom1); $zoom1=0;
										}
									}
								// MAIS FOTOS
								// ATRIBUTOS
									$atributos = galeria_atributos($item, $width, $height, $link, $zoom);
									foreach ($atributos as $key => $value) {
										$return .= Galeria_Img_Maior_img($value, 'foto', $width, $height, $link, $zoom, $zoom1); $zoom1=0;
									}
								// ATRIBUTOS
							$return .= '</div>';
							return $return;
						}
						function Galeria_Img_Maior_img($item, $foto, $width, $height, $link, $zoom, $zoom1=1){
							$img = new Imagem();
							$return  = '<figure>';
								$return .= '<a '.iff($link, 'href="'.DIR.'/web/fotos/'.FOTOS.$item->$foto.'" data-imagelightbox="c"').' class="db c_flex_XXX js_XXX" style="height_XXX: '.$height.'px">';
									$img->tags = ' class="db max-w100p m-a br4 '.iff($zoom1, 'Plugin_Zoom').'" '.iff($zoom, 'data-zoom-image="'.DIR.'/web/fotos/'.FOTOS.$item->$foto.'"').' style="max-width:'.$width.'px; max-height:'.$height.'px;" ';
									$img->foto = $foto;
									$return .= $img->img($item, $width, $height);
								$return .= '</a> ';
							$return .= '</figure>';
							return $return;
						}
					// GALERIA MAIOR
					// GALERIA MENOR
						function Galeria_Img_Menor($item, $n=5, $width=100, $height=100, $nome=0, $mais_fotos=''){
							$mais_fotos = $mais_fotos ? $mais_fotos : mais_fotos($item);
							$n_thumbs = 0;
							$return = '';
							$return .= '<div class="p20 pt0">';
								$return .= '<ul class="Plugin1 po-h Img_Menor no_pagg" itens="'.$n.'" itens="1" auto="100000000" altura_flexcivel="0"> ';
									if(isset($item->foto) AND $item->foto){
										$return .= Galeria_Img_Menor_img($item, 'foto', $width, $height, $nome, $n_thumbs); $n_thumbs++;
									}
									// OUTRAS FOTOS
										//for ($i=1; $i <= 6; $i++) {
										//	$foto = 'foto'.$i;
										//	if(isset($item->$foto) AND $item->$foto){
										//		$return .= Galeria_Img_Menor_img($item, $foto, $width, $height, $nome, $n_thumbs); $n_thumbs++;
										//	}
										//}
									// OUTRAS FOTOS
									// MAIS FOTOS
										if($mais_fotos){
								    		foreach ($mais_fotos as $key => $value) {
												$return .= Galeria_Img_Menor_img($value, 'foto', $width, $height, $nome, $n_thumbs); $n_thumbs++;
											}
										}
									// MAIS FOTOS
									// ATRIBUTOS
										$atributos_thumbs = array();
										$atributos = galeria_atributos($item, $width, $height);
										foreach ($atributos as $key => $value) {
											$atributos_thumbs[] = "'".$value->id."_".$n_thumbs."'";
											$return .= Galeria_Img_Menor_img($value, 'foto', $width, $height, $nome, $n_thumbs); $n_thumbs++;
										}
									// ATRIBUTOS
								$return .= '</ul> ';
							$return .= '</div> ';
							$return .= '<script> ';
								$return .= 'var $atributos_thumbs = ['.implode(',', $atributos_thumbs).']; ';
							$return .= '</script> ';
							return $return;
						}
						function Galeria_Img_Menor_img($item, $foto, $width, $height, $nome, $n_thumbs){
							$img = new Imagem();
							$return = '';
							$return .= '<li class="pt10 c-p" onclick="Img_Maior('.$n_thumbs.', this)"> ';
								$return .= '<div class="db w'.$width.' h'.$height.' m-a c_flex jc bd_ccc"> ';
									$img->tags = ' class="dibi p2" ';
									$img->foto = $foto;
									$return .= $img->img($item, $width, $height);
									$return .= $nome ? '<div class="pt4">'.$item->nome.'</div>' : '';
								$return .= '</div> ';
							$return .= '</li> ';
							return $return;

						}
					// GALERIA MENOR
				// GALERIA COM THUMBS


				// GALERIA ATRIBUTOS
					function galeria_atributos($item, $width, $height, $link=0, $zoom=0){
						$return = array();
						$mysql = new Mysql();
						$mysql->colunas = "id, foto";
						$mysql->filtro = " WHERE ".STATUS." AND `produtos`  = '".$item->id."' ORDER BY id asc ";
						$produtos_combinacoes = $mysql->read('produtos_combinacoes');
						foreach ($produtos_combinacoes as $key => $value) {
							if($value->foto){
								$return[$key] = (object)array();
								$return[$key] = $value;
							}
						}
						return $return;
					}
				// GALERIA ATRIBUTOS
			// BANNERS E GALERIAS */

		// IMAGENS



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



		// NUMEROS
			// Preco
			function preco($valor, $sedula=0, $casas=2, $sinal=',', $sinal1='.', $nao_mostrar_zero=0){

				$valor = str_replace(',', '.', $valor);
				$valor = floatval($valor);
				$casas = ((int)$casas OR $casas=='0') ? (int)$casas : 2;
				$valor = number_format($valor, $casas, $sinal, $sinal1);

				if($nao_mostrar_zero){
					$valor = str_replace($sinal1, '', $valor);
					$valor = str_replace($sinal, '.', $valor);
					$valor = $nao_mostrar_zero ? (double)$valor : $valor;
					$valor = str_replace('.', $sinal, $valor);
				}

				$return =  $valor;
				if($sedula == 1){
					$return =  'R$&nbsp;'.$valor;
				} elseif($sedula == 2){
					$return =  'R$ '.$valor;
				}
				return $return;
			}

			// Preco Verificado
			function preco1($valor, $sedula=0, $casas=2, $sinal=',', $sinal1='.', $nao_mostrar_zero=0){
				$return = $valor>0 ? preco($valor, $sedula, $casas, $sinal, $sinal1, $nao_mostrar_zero) : '(Sob Consulta)';
				return $return ;
			}
			function preco2($valor, $sedula=0, $casas=2, $sinal=',', $sinal1='.', $nao_mostrar_zero=0){
				$return = $valor>0 ? preco($valor, $sedula, $casas, $sinal, $sinal1, $nao_mostrar_zero) : '';
				return $return ;
			}

			// PRECO X
			function preco_X($preco){
				$return = str_replace('R$ ', '', $preco);
				$return = str_replace('R$', '', $return);
				$return = str_replace(',', '', $return);
				$return = str_replace('.', '', $return);
				$return = (int)$return;
				$return = $return/100;
				return $return;
			}

			// Numero
			function numero($valor, $casas=2, $sinal='.'){
				$valor = str_replace(',', '.', $valor);
				$valor = floatval($valor);
				$casas = (int)$casas;
				$valor = number_format($valor, $casas, $sinal, '');
				$return = floatval($valor);
				return $return;
			}

			// Valor Por Extenso
			function extenso($valor=0, $complemento=true) {
				$singular = array("centavo", "real", "mil", "milhão", "bilhão", "trilhão", "quatrilhão");
				$plural = array("centavos", "reais", "mil", "milhões", "bilhões", "trilhões","quatrilhões");

				$c = array("", "cem", "duzentos", "trezentos", "quatrocentos","quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos");
				$d = array("", "dez", "vinte", "trinta", "quarenta", "cinquenta","sessenta", "setenta", "oitenta", "noventa");
				$d10 = array("dez", "onze", "doze", "treze", "quatorze", "quinze","dezesseis", "dezesete", "dezoito", "dezenove");
				$u = array("", "um", "dois", "três", "quatro", "cinco", "seis","sete", "oito", "nove");

				$z = 0;
				$rt = '';


				$valor = str_replace('.', '', $valor);
				$valor = str_replace(',', '.', $valor);
				$valor = number_format($valor, 2, ".", ".");
				$inteiro = explode(".", $valor);
				for($i=0;$i<count($inteiro);$i++)
					for($ii=mb_strlen($inteiro[$i]);$ii<3;$ii++)
						$inteiro[$i] = "0".$inteiro[$i];

				// $fim identifica onde que deve se dar junção de centenas por "e" ou por "," ;)
				$fim = count($inteiro) - ($inteiro[count($inteiro)-1] > 0 ? 1 : 2);
				for ($i=0;$i<count($inteiro);$i++) {
					$valor = $inteiro[$i];
					$rc = (($valor > 100) && ($valor < 200)) ? "cento" : $c[$valor[0]];
					$rd = ($valor[1] < 2) ? "" : $d[$valor[1]];
					$ru = ($valor > 0) ? (($valor[1] == 1) ? $d10[$valor[2]] : $u[$valor[2]]) : "";

					$r = $rc.(($rc && ($rd || $ru)) ? " e " : "").$rd.(($rd && $ru) ? " e " : "").$ru;
					$t = count($inteiro)-1-$i;
					if ($complemento == true) {
						$r .= $r ? " ".($valor > 1 ? $plural[$t] : $singular[$t]) : "";
						if ($valor == "000")$z++; elseif ($z > 0) $z--;
						if (($t==1) && ($z>0) && ($inteiro[0] > 0)) $r .= (($z>1) ? " de " : "").$plural[$t];
					}
					if ($r) $rt = $rt . ((($i > 0) && ($i <= $fim) && ($inteiro[0] > 0) && ($z < 1)) ? ( ($i < $fim) ? ", " : " e ") : " ") . $r;
				}

				return($rt ? $rt : "zero");
			}

			// Retornar Numero
			function retornar_numero($numero){
				$return = trim($numero);
				$return = str_replace('-', '', $return);
				$return = str_replace(',', '', $return);
				$return = str_replace('.', '', $return);
				$return = str_replace('(', '', $return);
				$return = str_replace(')', '', $return);
				$return = str_replace('/', '', $return);
				$return = str_replace(' ', '', $return);
				return $return;
			}
		// NUMEROS



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



		// DATAS
			// Dividir Data
			function dividir_data($data, $tipo='-'){
				$data = str_replace(' ', $tipo, $data);
				$data = str_replace(':', $tipo, $data);
				$data = str_replace('T', '-', $data);
				$data = str_replace('BRT', '-', $data);
				$data = explode($tipo, $data);
				$data[3] = isset($data[3]) ? $data[3] : 0;
				$data[4] = isset($data[4]) ? $data[4] : 0;
				$data[5] = isset($data[5]) ? $data[5] : 0;
				return  $data;
			}

			// Datas
			function data($data, $condicao='d/m/Y', $tipo='-'){
				if($data == '0000-00-00' OR $data == '0000-00-00 00:00:00'){
					$return = '';
				} else {
					$data = str_replace('T', $tipo, $data);
					$data = str_replace('BRT', $tipo, $data);
					$data = is_object($data) ? $data->data : $data;
					$data = dividir_data($data, $tipo);
					$return = isset($data[2]) ? date($condicao, mktime($data[3], $data[4], $data[5], $data[1], $data[2], $data[0]) ) : 'erro';
				}
				return $return;
			}

			// Dataas
			function dataa($data){
				$return = '';
				$tempo = sub_data(date('c'), $data);
				if($tempo['seg_total'] < 60){
					$return = 'há '.($tempo['seg_total']*1).' segundos'.iff($tempo['seg_total']>1, 's');
				} elseif($tempo['seg_total'] < 3600){
					$return = 'há '.($tempo['min']*1).' minuto'.iff($tempo['min']>1, 's');
				} elseif($tempo['seg_total'] < 86400){
					$return = 'há '.($tempo['hora']*1).' hora'.iff($tempo['hora']>1, 's');
				} elseif($tempo['seg_total'] < 604800){
					$return = 'há '.($tempo['dias']*1).' dia'.iff($tempo['dias']>1, 's');
				} else {
					$return = data($data);
				}
				return $return;
			}

			// Somar Datas
			function somar_datas($data, $ano, $mes, $dia, $hora=0, $min=0, $seg=0, $condicao='Y-m-d', $tipo='-'){
				$data = dividir_data($data, $tipo);
				if(isset($data[2])){
					$data = ($data[0]+$ano).'/'.($data[1]+$mes).'/'.($data[2]+$dia).' '.($data[3]+$hora).':'.($data[4]+$min).':'.($data[5]+$seg);
					$return = data($data, $condicao, '/');
				} else
					$return = 'erro';
				return $return;
			}
			function somar_data($n, $tipo){
				if($tipo == 'ano'){
					$data = (date('Y')+$n).date('/m/d H:i:s');
				} else if($tipo == 'mes'){
					$data = date('Y/').(date('m')+$n).date('/d H:i:s');
				} else if($tipo == 'dia'){
					$data = date('Y/m/').(date('d')+$n).date(' H:i:s');
				} else if($tipo == 'hora'){
					$data = date('Y/m/d ').(date('H')+$n).date(':i:s');
				} else if($tipo == 'min'){
					$data = date('Y/m/d H:').(date('i')+$n).date(':s');
				} else if($tipo == 'seg'){
					$data = date('Y/m/d H:i:').(date('s')+$n);
				}
				$data = data($data, 'Y-m-d H:i:s', '/');
				return $data;
			}



			// Subtrair Data
			function sub_data($data1, $data2, $tipo='-'){
				$data1 = dividir_data($data1, $tipo);
				$data2 = dividir_data($data2, $tipo);
				$seg1 = isset($data1[2]) ? mktime($data1[3], $data1[4], $data1[5], $data1[1], $data1[2], $data1[0]) : 'erro';
				$seg2 = isset($data2[2]) ? mktime($data2[3], $data2[4], $data2[5], $data2[1], $data2[2], $data2[0]) : 'erro';
				$segs = $seg1 - $seg2;
				$return = array('dias' => '0', 'hora' => '00', 'min' => '00', 'seg' => '00', 'hora_total' => '00', 'seg_total' => '00');
				if($segs > 0){
					// Segundos
					$data_s = date('s', mktime(0, 0, $segs, 0, 0, 0) );
					$return['seg'] = $data_s;

					// Minutos
					$data_i = date('i', mktime(0, 0, $segs, 0, 0, 0) );
					$return['min'] = $data_i;

					// Horas
					$data_h = date('H', mktime(0, 0, $segs, 0, 0, 0) );
					$seg_d = ($data_h*60*60)+($data_i*60)+$data_s;

					$return['hora'] = $data_h;

					// Dias
					$data_d = ($segs-86400) > 0 ? (($segs-$seg_d)/86400) : 0;
					$return['dias'] = str_pad($data_d, 2, 0, STR_PAD_LEFT);

					// Horas Total
					$data_ht = (($data_d*24)+$data_h);
					$return['hora_total'] = str_pad($data_ht, 2, 0, STR_PAD_LEFT);

					// Segs Total
					$return['seg_total'] = $segs;
				}
				return $return;
			}




			// Data -> Seg
			function data_seg($data, $tipo='-'){ // d/m/Y H:i:s
				$data = str_replace(' ', '-', $data);
				$data = str_replace('T', '-', $data);
				$data = str_replace('BRT', '-', $data);
				$data = str_replace('/', '-', $data);
				$data = str_replace(':', '-', $data);
				$data = dividir_data($data, $tipo);
				$return = isset($data[2]) ? mktime($data[3], $data[4], $data[5], $data[1], $data[0], $data[2]) : 'erro';
				return $return;
			}
			function data_seg1($data, $tipo='-'){ // Y-m-d H:i:s
				$data = str_replace(' ', '-', $data);
				$data = str_replace('T', '-', $data);
				$data = str_replace('BRT', '-', $data);
				$data = str_replace('/', '-', $data);
				$data = str_replace(':', '-', $data);
				$data = dividir_data($data, $tipo);
				$return = isset($data[2]) ? mktime($data[3], $data[4], $data[5], $data[1], $data[2], $data[0]) : 'erro';
				return $return;
			}



			// Segundos para Hora
			function seg_hora($seg, $condicao){
				$return = data('0000-00-00 00:00:'.$seg, $condicao);
				return $return;
			}


			// Idade
			function idade($data, $tipo='-'){
				$data	= explode($tipo, $data);
				$dia	= (int)$data[2];
				$mes	= (int)$data[1];
				$ano	= (int)$data[0];
				$hoje = mktime(0, 0, 0, date('m'), date('d'), date('Y'));
				$nascimento = mktime(0, 0, 0, (int)$mes, (int)$dia, (int)$ano);
				$return = floor((((($hoje - $nascimento) / 60) / 60) / 24) / 365.25);
				return $return;
			}


			// Dia da semana
			function dia_semana($data, $tipo='-'){
				$data	= explode($tipo, $data);
				$dia	= (int)$data[2];
				$mes	= (int)$data[1];
				$ano	= (int)$data[0];
				$diasemana = date("w", mktime(0, 0, 0, (int)$mes, (int)$dia, (int)$ano));

				switch($diasemana) {
					case 0: $return = "Domingo";	break;
					case 1: $return = "Segunda";	break;
					case 2: $return = "Terça";		break;
					case 3: $return = "Quarta";	break;
					case 4: $return = "Quinta";	break;
					case 5: $return = "Sexta";		break;
					case 6: $return = "Sábado";	break;
				}
				return $return;
			}


			// Mês abreviasao
			function mes($mes, $ab=0){
				$return = '';
				switch($mes){
					case 1: ($return = $ab ? 'Jan'  : 'Janeiro');		break;
					case 2: ($return = $ab ? 'Fev'  : 'Fevereiro');	break;
					case 3: ($return = $ab ? 'Mar'  : 'Março');		break;
					case 4: ($return = $ab ? 'Abr'  : 'Abril');		break;
					case 5: ($return = $ab ? 'Mai'  : 'Maio');		break;
					case 6: ($return = $ab ? 'Jun'  : 'Junho');		break;
					case 7: ($return = $ab ? 'Jul'  : 'Julho');		break;
					case 8: ($return = $ab ? 'Ago'  : 'Agosto');		break;
					case 9: ($return = $ab ? 'Set'  : 'Setembro');	break;
					case 10: ($return = $ab ? 'Out' : 'Outubro');		break;
					case 11: ($return = $ab ? 'Nov' : 'Novembro');	break;
					case 12: ($return = $ab ? 'Dez' : 'Dezembro');	break;
				}
				return $return;
			}
		// DATAS




	// ----------------------------------------------------------------------------------------------------------------------------------------------------------




		// MELHOR ENVIO
			function seller_0(){
				$mysql = new Mysql();
				$mysql->filtro = " where tipo = 'frete' ";
				$return = $mysql->read_unico('configs');
				return $return;
			}

			function verificar_token__atualizar_token($seller, $mensagem=0){
				$return = $seller;

				$curl = curl_init();
				curl_setopt_array($curl, array(
					CURLOPT_URL => URL_MELHOR_ENVIO."/api/v2/me/cart",
					CURLOPT_RETURNTRANSFER => true,
					CURLOPT_CUSTOMREQUEST => "GET",
					CURLOPT_HTTPHEADER => array(
						"accept: application/json",
						"authorization: Bearer ".$seller->melhor_envio_token,
					),
				));

				$response = curl_exec($curl);
				$err = curl_error($curl);
				curl_close($curl);

				$array = json_decode($response);

				if(!isset($array->data)){
					$mysql = new Mysql();
					$mysql->filtro = " where tipo = 'frete' ";
					$frete = $mysql->read_unico('configs');

					$post = array();
					$post['grant_type'] = 'refresh_token';
					$post['client_id'] = $frete->melhor_envio_client_id;
					$post['client_secret'] = $frete->melhor_envio_client_secret;
					$post['refresh_token'] = $seller->melhor_envio_refresh_token;

					$curl = curl_init();
					curl_setopt_array($curl, array(
						CURLOPT_URL => URL_MELHOR_ENVIO."/oauth/token",
						CURLOPT_RETURNTRANSFER => true,
						CURLOPT_CUSTOMREQUEST => "POST",
						CURLOPT_POSTFIELDS => "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data;
											name=\"grant_type\"\r\n\r\n".$post['grant_type']."\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data;
											name=\"client_id\"\r\n\r\n".$post['client_id']."\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data;
											name=\"client_secret\"\r\n\r\n".$post['client_secret']."\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data;
											name=\"refresh_token\"\r\n\r\n".$post['refresh_token']."\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--",
						CURLOPT_HTTPHEADER => array(
							"accept: application/json",
							"content-type: multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW",
						),
					));

					$response = curl_exec($curl);
					$err = curl_error($curl);
					curl_close($curl);

					$array = json_decode($response);
					if(isset($array->refresh_token) AND $array->refresh_token){
						$mysql = new Mysql();
						$mysql->campo['melhor_envio_token'] = $array->access_token;
						$mysql->campo['melhor_envio_refresh_token'] = $array->refresh_token;
						$mysql->campo['melhor_envio_refresh_token'] = $array->refresh_token;
						$mysql->campo['melhor_envio_token_data'] = date('Y-m-d', mktime(date('H'), date('i'), date('s')+$array->expires_in, date('m'), date('d')-2, date('Y')));
						$mysql->filtro = " WHERE `id` = '".$seller->id."' ";
						$mysql->update($seller->table);

						$mysql->filtro = " WHERE ".STATUS." AND id = '".$seller->id."' ";
						$consulta = $mysql->read_unico($seller->table);
					}

					if(isset($consulta->melhor_envio_token) AND $consulta->melhor_envio_token){
						$return = $consulta;
					} else {
						if($mensagem){
							echo '<div class="fwb c_vermelho">Sua autenticação expirou, <a href="'.URL_MELHOR_ENVIO.'/oauth/authorize?client_id='.$seller->melhor_envio_client_id.'&redirect_uri='.DIR_C.'/app/Melhor_Envio/autenticar.php&response_type=code&state=teste&scope=cart-read cart-write companies-read companies-write coupons-read coupons-write notifications-read orders-read products-read products-write purchases-read shipping-calculate shipping-cancel shipping-checkout shipping-companies shipping-generate shipping-preview shipping-print shipping-share shipping-tracking ecommerce-shipping transactions-read users-read users-write" class="c_azul link" target="_blank">Clique aqui para autenticar novamente</a>!</div>';
						} else {
							$return = '';
						}
					}
				}
				return $return;
			}

			function melhor_envio_cadastrar_rastreio($pedidos){
				if(file_exists(DIR_F.'/plugins/Json/pedidos/'.$pedidos->id.'_'.$pedidos->seller.'_melhor_envio.json')){
		            $melhor_envio = json_decode(file_get_contents(DIR_F.'/plugins/Json/pedidos/'.$pedidos->id.'_'.$pedidos->seller.'_melhor_envio.json'));

					if(isset($melhor_envio->purchase->orders[0]->protocol)){
						$rastreamento = '';

                		$seller = explode('-', $pedidos->seller);
                		$seller_rastreamentos = explode('-', $pedidos->seller_rastreamentos);
						foreach ($seller as $key1 => $value1) {
							if($value1 == $_SESSION['seller']){
								$rastreamento .= str_replace('-', 'x;x', $melhor_envio->purchase->orders[0]->protocol);
							} else {
								$rastreamento .= isset($seller_rastreamentos[$key1]) ? $seller_rastreamentos[$key1] : '';
							}
							$rastreamento .= '-';
						}

						$mysql = new Mysql();
						$mysql->campo['seller_rastreamentos'] = $rastreamento;
						$mysql->filtro = " WHERE id = '".$pedidos->id."' ";
						$ult_id = $mysql->update('pedidos');

						location(DIR_ALL);
					}
				}
			}

			// ESPECIFICACOES CARRINHO (FRETE)
				function carrinho_seller(){
					$mysql = new Mysql();

					if(0){ // ARRAY
						$return = array(0);
						if(isset($_SESSION['carrinho']['itens'])){
							foreach ($_SESSION['carrinho']['itens'] as $key => $value) {
								$mysql->filtro = " WHERE ".STATUS." AND id = '".$key."' ";
								$produtos = $mysql->read_unico('produtos');
								if(isset($produtos->id)){
									$return[] = $produtos->seller;
								}
							}
						}
					} else {
						$return = 0;
						if(isset($_SESSION['carrinho']['itens'])){
							foreach ($_SESSION['carrinho']['itens'] as $key => $value) {
								$mysql->filtro = " WHERE ".STATUS." AND id = '".$key."' ";
								$produtos = $mysql->read_unico('produtos');
								if(isset($produtos->id)){
									$return = $produtos->seller;
								}
							}
						}
					}

					return $return;
				}
			// ESPECIFICACOES CARRINHO (FRETE)

			// SELLER PRODUTOS CARRINHO
				/*
				function seller_produtos_carrinho(){
					$return = 0;
					$mysql = new Mysql();
					if(isset($_SESSION['carrinho']['itens'])){
						foreach($_SESSION['carrinho']['itens'] as $key => $array){
							foreach($array as $ref => $value){
								$mysql->colunas = 'id, seller';
								$mysql->prepare = array($key);
								$mysql->filtro = " WHERE ".STATUS." AND `id` = ? ";
								$item = $mysql->read_unico('produtos');
								if(isset($item->seller) AND $item->seller){
									$return = $item->seller;
								}
							}
						}
					}
					return $return;
				}
				*/
			// SELLER PRODUTOS CARRINHO
		// MELHOR ENVIO




	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



		// ADMIN SITE

			// CAMPOS TIPO TYPE SITE
		        function campos_tipo_site($tipo){
		            $return = $tipo;

		            if($tipo == 'categorias' OR $tipo == 'subcategorias' OR $tipo == 'estados' OR $tipo == 'cidades' OR $tipo == 'bairros'){
		                $return = 'select';

		            } else if($tipo == 'preco'){
		                $return = 'search';
		            }

		            return $return;
		        }
		        function campos_type_site($tipo){
		            $return = $tipo;
		            if($tipo == 'search' OR $tipo == 'password' OR $tipo == 'email' OR $tipo == 'date' OR $tipo == 'datetime-local' OR $tipo == 'color' OR $tipo == 'number' OR $tipo == 'range' OR $tipo == 'url' OR $tipo == 'tel' OR $tipo == 'hidden'){
		                $return = 'text';
		            }
		            return $return;
		        }
	        // CAMPOS TIPO TYPE SITE

	        // ALERT
		        function alertt($x, $txt=''){
					$return = '';
		        	if($x == 1){
		        		$txt = $txt ? $txt : 'Operação Realizada com Sucesso!';
		        		$return = '<div class="p10 mb20 c_verde back_f4f4f4">'.$txt.'</div>';
		        	} else {
		        		$txt = $txt ? $txt : 'Ocorreu algum erro inesperado!';
		        		$return = '<div class="p10 mb20 c_vermelho back_f4f4f4">'.$txt.'</div>';
		        	}
					return $return;
		        }
	        // ALERT

	        // TABLEE
		        function admin_site_tablee($tablee){
		        	$return = '';

		        	// CONSULTA
			        	$mysql = new Mysql();
						$filtro = isset($tablee['filtro']) ? $tablee['filtro'] : '';

						if($tablee['banco'] == 'cadastro' AND isset($tablee['dependentes']) AND $tablee['dependentes']){
							for ($i=0; $i < 2; $i++) {
								if($i==0){
									$mysql->filtro = " WHERE ".STATUS." ".$filtro." ".filtro_busca()." ORDER BY ".(isset($tablee['order']) ? $tablee['order'] : '')." ".ORDER." ";
									$banco[$i] = $mysql->read('cadastro');
								} else {
									$filtro_cpf = (isset($_GET['cpf']) AND $_GET['cpf']) ? " AND cpf = '".$_GET['cpf']."' " : "";
									$filtro_cartao = (isset($_GET['cartao']) AND $_GET['cartao']) ? " AND `cadastro` = '".$_GET['cartao']."' " : "";
									$mysql->filtro = " WHERE ".STATUS." ".$filtro_cpf." ".$filtro_cartao." AND `cadastro` IN ( SELECT `id` FROM `cadastro` WHERE ".STATUS." ) ORDER BY ".(isset($tablee['order']) ? $tablee['order'] : '')." ".ORDER." ";
									$banco[$i] = $mysql->read('cadastro_dependentes');
								}
							}
							$consulta = array();
							foreach ($banco as $key => $value) {
								$consulta = array_merge($consulta, $value);
							}

						} else {
							$mysql->filtro = " WHERE ".STATUS." ".$filtro." ".filtro_busca()." ORDER BY ".(isset($tablee['order']) ? $tablee['order'] : '')." ".ORDER." ".(isset($tablee['limit']) ? $tablee['limit'] : '')." "; // LIMIT ".$tablee['pg']."
							$consulta = $mysql->read($tablee['banco']);
						}
					// CONSULTA

				    $return .= '<div class="table_mobile"> ';
						$return .= '<div class=""> ';
					    	if($tablee['novo']){
				                $return .= '<div class="wr6 pb20"> ';
				                    $return .= '<a href="'.DIR_E.'?acao=novo"><button class="botao">Cadastrar Novo</button></a> ';
				                $return .= '</div> ';
				            }
					    	if($tablee['busca']){
				                $return .= '<div class="wr6 pb20 tar"> ';
				                    $return .= '<div class="max-w300 dib"> ';
				                        $return .= '<form class="posr" method="get" action="'.DIR_E.'"> ';
				                            $return .= '<input type="text" name="busca" class="design w100p" '.(isset($_GET['busca']) ? ' value="'.$_GET['busca'].'" ' : ' placeholder="Procurar no Site" ').'  /> ';
				                            $return .= '<button class="posa t0 r0 mt9 mr10 bd0 back0"><i class="faa-search fz16"></i></button> ';
				                            $return .= '<div class="clear"></div> ';
				                        $return .= '</div> ';
				                    $return .= '</form> ';
				                $return .= '</div> ';
					        }
			            	$return .= '<div class="clear"></div> ';
			        	$return .= '</div> ';


						$return .= '<div class="p20 pl15 pr15 back_fff br5 '.((isset($tablee['no_sombra']) AND $tablee['no_sombra']) ? '' : 'bs1').'"> ';
					        $return .= '<div class="tablee"> ';
						        $return .= '<table class="fz13"> ';
						            $return .= '<thead> ';
						                $return .= '<tr class="back_F8FAFC"> ';
						                	foreach ($tablee['table']['colunas'] as $key => $value) {
							                    $return .= '<th class="'.($key ? 'tac' : 'tal').'">'.$value.'</th> ';
							                }
							                if($tablee['edit'] OR $tablee['excluir']){
							                	$return .= '<th class="tac">Ações</th> ';
							                }
						                $return .= '</tr> ';
						            $return .= '</thead> ';
						            $return .= '<tbody> ';
						            	foreach ($consulta as $key => $value) {
							                $return .= '<tr class="'.((($key%2)==1 AND !(isset($tablee['no_back']) AND $tablee['no_back'])) ? 'back_FCFCFC' : '').'"> ';
							                	foreach ($tablee['table']['linhas'] as $key1 => $value1) {
							                    	$return .= '<td class="'.($key1 ? 'tac' : 'tal').'"> ';

							                    		if($value1 == 'id'){
							                    			$return .= '#'.$value->id;

							                    		} elseif(preg_match('(->foto)', $value1)){
							                    			$value1 = str_replace('->foto', '', $value1);
					                                        $return .= '<div class="dib vam">'.img_redonda($value, 40, 40, 'bdw2 bd_ccc').'</div> ';
					                                        $return .= '<div class="dib pl10 vam">'.$value->$value1.'</div> ';

							                    		} elseif(preg_match('(->data_hora)', $value1)){
							                    			$value1 = str_replace('->data_hora', '', $value1);
							                    			$return .= data($value->$value1, 'd').' '.mes(data($value->$value1, 'm'), 'ab').' '.data($value->$value1, 'Y').', '.data($value->$value1, 'H:i');

							                    		} elseif(preg_match('(->data)', $value1)){
							                    			$value1 = str_replace('->data', '', $value1);
							                    			$return .= data($value->$value1, 'd/m/Y');

							                    		} elseif(preg_match('(->preco)', $value1)){
							                    			$value1 = str_replace('->preco', '', $value1);
							                    			$return .= preco($value->$value1, 1);

							                    		} elseif(preg_match('(->comissao)', $value1)){
							                    			$value1 = str_replace('->comissao', '', $value1);
							                    			$return .= preco(($value->$value1*$tablee['array']['prestadores_pd']->comissao)/100, 1);

							                    		} elseif(preg_match('(->liquido)', $value1)){
							                    			$value1 = str_replace('->liquido', '', $value1);
							                    			$return .= preco($value->$value1-(($value->$value1*$tablee['array']['prestadores_pd']->comissao)/100), 1);

							                    		} elseif(preg_match('(->ver_arquivo)', $value1)){
							                    			$value1 = str_replace('->ver_arquivo', '', $value1);
							                    			if($value->$value1){
								                    			$return .= '<a href="'.DIR.'/web/fotos/'.$value->$value1.'" class="c_azul link" target="_blank">Ver Arquivo</a> ';
								                    		}

							                    		} elseif(preg_match('(->situacao_pagamentos)', $value1)){
							                    			$value1 = str_replace('->situacao_pagamentos', '', $value1);
						                    				if($value->situacao==1){
						                    					$return .= '<div class="dib p5 pl10 pr10 cor_14804A back_E1FCEF br5">Confirmado</a> ';
						                    				} elseif($value->situacao==2){
						                    					$return .= '<div class="dib p5 pl10 pr10 cor_D43548 back_FFEDEF br5">Recusado</a> ';
						                    				} else {
						                    					$return .= '<div class="dib p5 pl10 pr10 br5" style="color: #'.SITUACAO_PD1_COR.'; background: #'.SITUACAO_PD1_BACK.'">Em Análise</a> ';
						                    				}


							                    		} elseif(preg_match('(->situacao)', $value1)){
							                    			$value1 = str_replace('->situacao', '', $value1);
							                    			$return .= tablee_situacao($value, $value1, $tablee['array']['cadastro_situacao']);

							                    		} elseif(preg_match('(->select)', $value1)){
							                    			$value1 = str_replace('->select', '', $value1);
							                    			if($value1 == 'cadastro'){
							                    				$return .= tablee_nome_e_foto($value);
						                    				} else {
								                    			$return .= rel($value1, $value->$value1);
						                    				}


							                    		} elseif(preg_match('(->mais->)', $value1)){
							                    			$ex = explode('->mais->', $value1);
							                    			$maiss = $ex[1];
															$return .= '<div class="dib"> ';
																$return .= '<a onclick="maiss('.$value->id.')" class="maiss_0_'.$value->id.'"><img src="'.DIR.'/web/img/mais_0.png" /></a> ';
																$return .= '<a onclick="maiss('.$value->id.')" class="dn maiss_1_'.$value->id.'"><img src="'.DIR.'/web/img/mais_1.png" /></a> ';
															$return .= '</div> ';

							                    		} else {
							                    			$return .= $value->$value1;
							                    		}

							                    	$return .= '</td> ';
							                	}

							                	if($tablee['edit'] OR $tablee['excluir']){
								                	$return .= '<td class="tac"> ';
														if($tablee['edit'] AND $tablee['edit'] == 'perfil'){
									                		$return .= '<div class="dib pl5 pr5"><a onclick="boxs('.A.'_area_prestadores/perfil'.A.', '.A.'id='.($value->table=='cadastro' ? $value->id : $value->cadastro.'&dependente='.$value->id).A.', 1)" class="c_azul link">Ver Perfil</a></div> ';
														} elseif($tablee['edit'] AND $tablee['edit'] == 'inserir_credito'){
									                		$return .= '<div class="dib pl5 pr5"><a onclick="boxs('.A.'_area_filiados/inserir_credito'.A.', '.A.'id='.$value->id.A.', 1)" class="c_azul link">Editar Crédito</a></div> ';
									                	} elseif($tablee['edit']){
									                		$return .= '<div class="dib pl5 pr5"><a href="'.DIR_E.'?acao=edit&idd='.$value->id.'" class="c_azul link">Editar</a></div> ';
									                	}
														if($tablee['excluir']){
									                		$return .= '<div class="dib pl5 pr5"><a onclick="if(confirm('.A.'Deseja realmente deletar este item?'.A.')){ window.parent.location = '.A.DIR_E.'?acao=excluir&idd='.$value->id.A.'; }" class="c_vermelho link">Excluir</a></div> ';
									                	}
								                	$return .= '</td> ';
							                	}
							                $return .= '</tr> ';


							                // MAISS
								                if(isset($maiss) AND $maiss){
									                $mysql->filtro = " WHERE ".STATUS." AND cadastro_despesas = ".$value->id." ";
													$cadastro_despesas_produtos = $mysql->read('cadastro_despesas_produtos');

		                                    		$produtos = array();
			                                    	foreach ($cadastro_despesas_produtos as $key1 => $value1) {
			                                    		$produtos[] = $value1->nome.' ('.preco($value1->preco, 1).')';
			                                    	}

													$return .= '<tr class="dn bd_eee bdt0 maiss_'.$value->id.'" style="background: '.((($key%2)==1) ? '#FCFCFC' : '#fff').' !important"> ';
														$return .= '<td colspan="8"> ';
															$return .= '<div class="p20 fz13 lh18"> ';
																$return .= '<div class=""><b>Produtos/Serviços:</b> '.implode(', ', $produtos).'</div>';
																if($value->txt_cancelamento){
																	$return .= '<div class="pt10"><b>Motivo do Cancelamento:</b> '.$value->txt_cancelamento.'</div>';
																}
																if($value->foto){
																	$return .= '<div class="pt10"><b>Guia Assinada:</b> <a href="'.DIR.'/web/fotos/'.$value->foto.'" class="c_azul link" target="_blank">Ver Arquivo</a></div>';
																}
																if($value->foto1){
																	$return .= '<div class="pt10"><b>Nota Fiscal:</b> <a href="'.DIR.'/web/fotos/'.$value->foto1.'" class="c_azul link" target="_blank">Ver Arquivo</a></div>';
																}
															$return .= '</div> ';
														$return .= '</td> ';
													$return .= '</tr> ';
								                }
							                // MAISS

							            }
						            $return .= '</tbody> ';
						        $return .= '</table> ';
						        if(!$consulta){
						        	$return .= '<div class="p40 pl10 pr10 tac bdb_f7f7f7">'.((isset($tablee['nenhum']) AND $tablee['nenhum']) ? $tablee['nenhum'] : 'Nenhum item encontrado...').'</div> ';
					            } elseif(isset($pagg)) {
					                $return .= '<div class="pt20">'.$pagg.'</div> ';
					            }

						    $return .= '</div> ';
					    $return .= '</div> ';
					$return .= '</div> ';

					return $return;
		        }
		        function tablee_nome_e_foto($value){
		        	$return = '';
		        	$mysql = new Mysql();
					if(isset($value->dependentes) AND $value->dependentes){
						$mysql->colunas = 'id, nome, foto';
						$mysql->filtro = " WHERE ".STATUS." AND id = '".$value->dependentes."' ORDER BY ".ORDER." ";
						$cadastro = $mysql->read_unico('cadastro_dependentes');
					} else {
						$mysql->colunas = 'id, nome, foto';
						$mysql->filtro = " WHERE ".STATUS." AND id = '".$value->cadastro."' ORDER BY ".ORDER." ";
						$cadastro = $mysql->read_unico('cadastro');
					}
	                $return .= '<div class="dib vam">'.img_redonda($cadastro, 40, 40, 'bdw2 bd_ccc').'</div> ';
	                $return .= '<div class="dib pl10 vam">'.$cadastro->nome.'</div> ';

	                return $return;
		        }
		        function tablee_situacao($value, $col, $cadastro_situacao){
		        	$return = '';
		        	$mysql = new Mysql();

	    			// PRESTADORES
	    				if($col == 'prestadores_faturas'){
	    					$mysql->colunas = 'id, situacao';
							$mysql->filtro = " WHERE ".STATUS." AND id = '".$value->prestadores_faturas."' ";
							$consulta = $mysql->read_unico('prestadores_faturas');
	        				if(isset($consulta->situacao)){
	        					if($consulta->situacao){
	                    			$return .= '<div class="dib p5 pl10 pr10 br5" style="color: '.$cadastro_situacao[102]->cor.'; background: '.$cadastro_situacao[102]->cor1.'">'.$cadastro_situacao[102]->nome.'</div> ';
	        					} else {
	                    			$return .= '<div class="dib p5 pl10 pr10 br5" style="color: '.$cadastro_situacao[100]->cor.'; background: '.$cadastro_situacao[100]->cor1.'">'.$cadastro_situacao[100]->nome.'</div> ';
	        					}
	        				} elseif($value->situacao==0){
	        					$return .= '<a onclick="boxs('.A.'_area_prestadores/venda_status'.A.', '.A.'id='.$value->id.A.')" class="dib p5 pl10 pr10 br5" style="color: #'.SITUACAO_PD1_COR.'; background: #'.SITUACAO_PD1_BACK.'">'.SITUACAO_PD1.'</a> ';
	        				} elseif($value->situacao==1){
	        					$return .= '<a onclick="boxs('.A.'_area_prestadores/venda_status'.A.', '.A.'id='.$value->id.A.')" class="dib p5 pl10 pr10 br5" style="color: '.$cadastro_situacao[$value->situacao]->cor.'; background: '.$cadastro_situacao[$value->situacao]->cor1.'">'.$cadastro_situacao[$value->situacao]->nome.'</a> ';
	        				} else {
	                			$return .= '<div class="dib p5 pl10 pr10 br5" style="color: '.$cadastro_situacao[$value->situacao]->cor.'; background: '.$cadastro_situacao[$value->situacao]->cor1.'">'.$cadastro_situacao[$value->situacao]->nome.'</div> ';
	                		}
	                	}
	            	// PRESTADORES

	            	// CADASTRO E FILIADOS
	        			else {
	    					$mysql->colunas = 'id, situacao';
							$mysql->filtro = " WHERE ".STATUS." AND id = '".$value->cadastro_faturas."' ";
							$consulta = $mysql->read_unico('cadastro_faturas');
	        				if(isset($consulta->situacao)){
	        					if($consulta->situacao){
	                    			$return .= '<div class="dib p5 pl10 pr10 br5" style="color: '.$cadastro_situacao[101]->cor.'; background: '.$cadastro_situacao[101]->cor1.'">'.$cadastro_situacao[101]->nome.'</div> ';
	        					} else {
	                    			$return .= '<div class="dib p5 pl10 pr10 br5" style="color: '.$cadastro_situacao[100]->cor.'; background: '.$cadastro_situacao[100]->cor1.'">'.$cadastro_situacao[100]->nome.'</div> ';
	        					}
	        				} elseif($value->situacao == 0){
	        					$return .= '<div class="dib p5 pl10 pr10 br5" style="color: #'.SITUACAO_PD1_COR.'; background: #'.SITUACAO_PD1_BACK.'">'.SITUACAO_PD1.'</div> ';
	        				} else {
	                			$return .= '<div class="dib p5 pl10 pr10 br5" style="color: '.$cadastro_situacao[$value->situacao]->cor.'; background: '.$cadastro_situacao[$value->situacao]->cor1.'">'.$cadastro_situacao[$value->situacao]->nome.'</div> ';
	                		}
	            		}
	        		// CADASTRO E FILIADOS

	            	return $return;
		        }
	        // TABLEE




		    // CAMPOSS
		    	function admin_site_camposs($campos){
		    		$return  = '';

		    		if( !(isset($campos[0]['no_form']) AND $campos[0]['no_form']) ){
						$return .= '<form method="post" action="'.DIR_ALL.'" onsubmit="$('.A.'.carregando1'.A.').show();" enctype="multipart/form-data"> ';
					}

						if(isset($_GET['alertt'])){
							$return .= '<div class="">'.alertt($_GET['alertt']).'</div>';
						} elseif(isset($_GET['alertt_erro'])){
							$return .= '<div class="">'.alertt(0, $_GET['alertt_erro']).'</div>';
						}

						$input = new Input();

						if(isset($campos[0]['item']->id)){
							$input->value = $item = $campos[0]['item'];
						}

						if(isset($campos[0]['senha']) AND $campos[0]['senha']){
							if(isset($item->table)){
								$return .= '<div class="pt10 pb40"> ';
									$return .= '<a onclick="boxs('.A.'alterar_senha/'.$item->table.A.', '.A.'id='.$item->id.A.')" class="botao">Alterar Senha</a> ';
								$return .= '</div> ';
							}
						}

						foreach ($campos as $key => $value) {
							$tags = isset($value['input']['tags']) ? $value['input']['tags'] : '';
			                $desgin = preg_match('(design)', $tags) ? 'class="' : 'class="design ';
			                $tags = str_replace('class="', $desgin, $tags);
			                $tags = !(preg_match('(class=")', $tags)) ? $desgin.'" '.$tags : $tags;
			                $input->tags = $tags;

			                $input->opcoes = isset($value['input']['opcoes']) ? $value['input']['opcoes'] : '';

			                $input->extra = isset($value['input']['extra']) ? $value['input']['extra'] : '';

			                $input->p = isset($value['input']['p']) ? $value['input']['p'] : '';

			                $resp = isset($value['resp']) ? $value['resp'] : '';
			                $value['tipo'] = isset($value['tipo']) ? $value['tipo'] : 'text';
			                $tipo = campos_tipo_site($value['tipo']);
							$type = campos_type_site($tipo);

							if(isset($value['titulo'])){
								$return .= '<div class="clear"></div>';
								$return .= $value['titulo'];
							}

						    $return .= '<div class="pb20 '.$resp.'"> ';
						    	$return .= '<div class="h60"> ';

							    	$return .= $input->$type($value['nome'], $value['input']['nome'], $tipo);

							    $return .= '</div> ';
						    $return .= '</div> ';
						}

						if(isset($campos[0]['senha']) AND $campos[0]['senha']){
							if(!isset($item->table)){
								$return .= '<div class="clear"><div> ';
				                $input->tags = ' class="design" required ';
				                $return .= '<div class="wr6 pb20"><div class="h60"> '.$input->text('Senha', 'senha', 'password').'</div></div> ';
				                $return .= '<div class="wr6 pb20"><div class="h60"> '.$input->text('Confirmar Senha', 'c_senha', 'password').'</div></div> ';

							}
						}

						$return .= '<div class="clear"></div> ';

						if( !(isset($campos[0]['no_form']) AND $campos[0]['no_form']) ){
							$return .= '<div class="pt20 pb20 tac"> ';
								$return .= '<button class="design w100p max-w300 p10 '.BUTTON1.' br5 hover2 hoverr4 botao_cadastrar">SALVAR</button> ';
							$return .= '</div> ';
							$return .= '<div class="clear"></div> ';

							$return .= '<input type="hidden" name="gravar" value="1"> ';
						}

					if( !(isset($campos[0]['no_form']) AND $campos[0]['no_form']) ){
						$return .= '</form> ';
					}
				    $return .= '<div class="clear"></div> ';

					$return .= '<style>.select2-selection__rendered { font-size: 14px; } </style> ';

					return $return;

		    	}
		    // CAMPOSS

		// ADMIN SITE




	// ----------------------------------------------------------------------------------------------------------------------------------------------------------


		// UTEIS
			// STATUS PEDIDO
				function status_pedidoo($pedidos, $seller){
					$return = '';
					if($pedidos->situacao == 0 AND LUGAR=='site'){
                        $return .= '<div class="flex_auto fz10"> ';
                            $return .= '<div class="posr h27 fz20" style="background: url('.DIR.'/web/img/outros/pedidos/status_01.png) top center repeat-x;"></div> ';
                            $return .= '<div class="tac">Pagamento Confirmado</div> ';
                        $return .= '</div> ';

                    } elseif($pedidos->situacao == 1 AND LUGAR=='site'){
                        $return .= '<div class="flex_auto fz10"> ';
                            $return .= '<div class="posr h27 fz20" style="background: url('.DIR.'/web/img/outros/pedidos/status_02.png) top center repeat-x;"></div> ';
                            $return .= '<div class="fwb tac c_verde">Pagamento Confirmado</div> ';
                        $return .= '</div> ';

                    } elseif($pedidos->situacao == 2 AND LUGAR=='site'){
                        $return .= '<div class="flex_auto fz10"> ';
                            $return .= '<div class="posr h27 fz20" style="background: url('.DIR.'/web/img/outros/pedidos/status_02.png) top center repeat-x;"></div> ';
                            $return .= '<div class="fwb tac c_vermelho">Pagamento Cancelado</div> ';
                        $return .= '</div> ';
                        $return .= '<div class="flex_auto fz10"></div> ';
                        $return .= '<div class="flex_auto fz10"></div> ';
                        $return .= '<div class="flex_auto fz10"></div> ';
                    }

					if($pedidos->situacao != 2){
						$mysql = new Mysql();
			            $mysql->filtro = " WHERE id > 10 ORDER BY `id` ASC ";
			            $pedidos_situacoes = $mysql->read("pedidos_situacoes");
	                    foreach ($pedidos_situacoes as $k => $v) {
				            $mysql->filtro = " WHERE pedidos_situacoes = '".$v->id."' AND pedidos = '".$pedidos->id."' AND seller = '".$seller."' ";
				            $pedidos_status_seller = $mysql->read("pedidos_status_seller");
	                        $return .= '<div class="flex_auto fz10">';
	                            $return .= '<div class="posr h27 fz20" style="background: url('.DIR.'/web/img/outros/pedidos/'.(count($pedidos_status_seller) ? 'status_02' : 'status_01').'.png) top center repeat-x;"></div>';
	                            $return .= '<div class="'.(count($pedidos_status_seller) ? 'fwb' : '').' tac">'.$v->nome.'</div>';
	                        $return .= '</div>';
	                    }
	                }
	                return $return;
				}
			// STATUS PEDIDO

			// STATUS RASTREAMENTO
				function status_rastreamento($pedidos){
					$return = '';
                    if($pedidos->situacao!=0 AND $pedidos->situacao!=2){
                        if(preg_match('(melhor_envio_)', $pedidos->tipo_frete)){
                            if($pedidos->rastreamento){
                                $return = '(Código de Rastreamento: <a href="https://melhorrastreio.com.br/meu-rastreio/'.$pedidos->rastreamento.'" class="c_azul link" target="_blank">'.$pedidos->rastreamento.'</a>)';
                            } else {
						       $return = melhor_envio_cadastrar_rastreio($pedidos);
					        }
                        } else {
                            if($pedidos->rastreamento){
                                $return = '(Código de Rastreamento: '.$pedidos->rastreamento.')';
                            }
                        }
                    }
                    return $return;
				}
			// STATUS RASTREAMENTO

			// Parcelamento carrinho cartao
				function parcelamento_carrinho_cartao($total, $frete){ // total (total - frete), frente (para subitratir o frete e depois somar denovo)
					$mysql = new Mysql();
					$mysql->filtro = " WHERE `tipo` = 'pagamentos' ";
					$conta = $mysql->read_unico("configs");
					$max_parcelas = isset($conta->max_parcelas) ? ($conta->max_parcelas<=0 ? 1 : $conta->max_parcelas) : 1;

					$return = array();

					$y=1;
					$conta_pagarme_taxa = (isset($conta->pagarme_taxa) AND $conta->pagarme_taxa>0) ? ($total*$conta->pagarme_taxa)/100 : 0;
					for ($i=1; $i <= $max_parcelas; $i++) {
						$valor = $total + $conta_pagarme_taxa;
						$valor_juros = 0;
						$juros = 'sem juros';
						if(isset($conta->parcelas_sem_juros) AND $conta->parcelas_sem_juros < $i){
							$juros = 'com juros';
							$conta_valor_juros = isset($conta->valor_juros) ? $conta->valor_juros : 0;
							$valor = $valor + $y*(($conta_valor_juros*$total)/100);
							$valor_juros = $y*(($conta_valor_juros*$total)/100);
							$y++;
						}
						$return[$i] = (object)array();
						$return[$i]->valor = ($valor+$frete)/$i;
						$return[$i]->valor_all = $valor+$frete;
						$return[$i]->valor_juros = $valor_juros;
						$return[$i]->juros = $juros;
					}
					return $return;
				}
			// Parcelamento carrinho cartao


			// Lang
				$langs = array();
				$caminho = '';
				//if(LANG==1){ $caminho = DIR_F.'/app/Lang/default.json'; }
				if(LANG==2){ $caminho = DIR_F.'/app/Lang/ingles.json'; }
				if(LANG==3){ $caminho = DIR_F.'/app/Lang/espanhol.json'; }
				if(file_exists($caminho)){
					$langs = json_decode(file_get_contents($caminho));
				}
				function langg($palavra){
					global $langs;
					$return = $palavra;
					foreach ($langs as $key => $value) {
						if($palavra == $key){
							$return = $value;
						}
					}
					return $return;
				}
			// Lang

			// Select Nome
				function select_nome($name, $value){
					$return = '';

					if($value->table == 'enderecos'){
						$return .= '('.$value->cidades.'/'.$value->estados.') '.$value->rua.iff($value->numero, ', '.$value->numero).' '.$value->complemento.' '.iff($value->bairro, ' - '.$value->bairro).' - '.$value->cep.' '.iff($value->referencia, '('.$value->referencia.')').' ('.rel('enderecos_tipos', $value->enderecos_tipos).') ' ;
					} else {
						$return .= $value->nome;
					}

					return $return;
				}
			// Select Nome

			// Endereco
				function endereco($value){
					$return  = '';
					$return .= $value->rua;
					$return .= $value->numero ? ', '.$value->numero : '';
					$return .= $value->complemento;
					$return .= $value->bairro ? ' - '.$value->bairro : '';
					$return .= $value->cidades ? $value->cidades.'/'.$value->estados : '';
					$return .= $value->cep;
					return $return;
				}
			// Endereco

			// Mostrar Atributos
				function mostrar_atributos($array_atributos, $item, $categorias){
					$return = '';
					foreach ($array_atributos as $key => $value) {
						$categorias_nome = rel('produtos_atributos1_cate', $categorias['produtos_atributos'.$key]);
						$categorias_tipo1 = rel('produtos_atributos1_cate', $categorias['produtos_atributos'.$key], 'tipo1');

						$return .= '<div class="db pt10">';
							$return .= '<div class="pb5 fz14 fwb">'.$categorias_nome.':</div>';

							$x = 0;
							foreach ($value as $key1 => $value1) {
								$value1->nome = str_replace('_', ' ', $value1->nome);
								$value1->nome = str_replace('-', ' ', $value1->nome);
								$value1->nome = str_replace('=', ' ', $value1->nome);
								$return .= '<div class="posr dib pb5 vam"> ';
									$sel = $value1->selected ? 'bd_000 bs1' : 'bd_ccc';
									if($categorias_tipo1 == 0 OR $categorias_tipo1 == 2){
										//$return .= $value1->estoque<=0 ? '<div class="posa t0 r0 w15 h15 mt-5 lh12 fwb tac c_vermelho bd_ccc back_fff br50p">x</div>' : '';
										$onclick = 'onclick="alerts(0, '.A.'Selecione a Cor Desejada!'.A.')"';
										if(!isset($value1->no_click)){
											$onclick = 'onclick="$('.A.'.atributos_'.$key.''.A.').val('.A.$value1->nome.A.').change();"';
										}
										$return .= '<div '.$onclick.' class="'.(!$categorias_tipo1 ? 'w40' : 'pl10 pr10').' h40 fz16 lh18 fwb flexx flex_c flex_ac tac c-p '.$sel.' br10 atributos_ atributos_'.$key.' atributos_n_'.$key.'_'.$x.' atributos_id_'.$key.'_'.$value1->nome.'" style="border-width: 2px !important;">'.rel('produtos_atributos', $value1->nome).'</div> ';
									} elseif($categorias_tipo1 == 1){
										if($value1->selected){
											if(verificar_cor($value1->cor)){
												$sel = str_replace('bd_000', 'bd_f90', $sel);
											}
										}
										//$return .= $value1->estoque<=0 ? '<div class="posa t0 r0 w15 h15 mt-5 lh12 fwb tac c_vermelho bd_ccc back_fff br50p">x</div>' : '';
										$return .= '<div onclick="$('.A.'.atributos_'.$key.''.A.').val('.A.$value1->nome.A.').change();" class="w40 h40 c-p '.$sel.' br10 atributos_ atributos_'.$key.' atributos_n_'.$key.'_'.$x.' atributos_id_'.$key.'_'.$value1->nome.'" title="'.rel('produtos_atributos', $value1->nome).'" style="border-width: 2px !important; background: '.$value1->cor.'"></div> ';
									}
									$x++;
								$return .= '</div> ';
							}
							// SELECT
								$return .= '<select type="select" name="atributos_'.$key.'" class="designx atributos_'.$key.' m0 '.($categorias_tipo1 == 3 ? '' : 'dni').'" onchange="PP_atributos('.$item->id.', 0, '.$key.')">';
									$return .= '<option value="">Selecione</option>';
									foreach ($value as $key1 => $value1) {
										$value1->nome = str_replace('_', ' ', $value1->nome);
										$value1->nome = str_replace('-', ' ', $value1->nome);
										$value1->nome = str_replace('=', ' ', $value1->nome);
										$return .= '<option value="'.$value1->nome.'" '.$value1->selected.'>'.rel('produtos_atributos', $value1->nome).'</option>';
									}
								$return .= '</select>';
							// SELECT

						$return .= '</div>';
						$return .= clear($key, 2);
					}
					$return .= '<div class="clear"></div>';

					return $return;
				}
			// Mostrar Atributos

			// Ativo
				function ativo($item, $id='', $ativo='ativo'){
					$return = '';
					if( preg_match('('.$item.')', $_GET['pg_real']) AND ($id=='' OR $_GET['id']==$id) ){
						$return = $ativo;
					} elseif( preg_match('('.$item.')', $_GET['pg_real'].'s') AND ($id=='' OR $_GET['id']==$id) ){
						$return = $ativo;
					} elseif( preg_match('('.$item.')', substr($_GET['pg_real'], 0, -1)) AND ($id=='' OR $_GET['id']==$id) ){
						$return = $ativo;
					} elseif( preg_match('('.$item.')', substr($_GET['pg_real'], 0, -2).'l') AND ($id=='' OR $_GET['id']==$id) ){
						$return = $ativo;
					}
					return $return;
				}
			// Ativo

			// Iff
				function iff($condicao, $resp1='', $resp2=''){
					$return = $condicao ? $resp1 : $resp2;
					return $return;
				}
			// Iff

			// s_fim
				function s_no_fianl($val){
					$return = $val>1 ? 's' : '';
					return $return;
				}
			// s_fim

			// Clear
				function clear($key, $itens){
					$key = $key+1;
					$return = !($key%$itens) ? '<div class="clear"></div>' : '';
					return $return;
				}
				function clear_li($key, $itens){
					$key = $key+1;
					$return = !($key%$itens) ? '<li class="clear"></li>' : '';
					return $return;
				}
				function clear1($array, $key, $n, $tags){
					$return = '';
					$key = $key+1;
					if($key==1 OR ($key%$n)){
						$return = '<div '.$tags.'>';
					}
					return $return;
				}
				function clear2($array, $key, $n){
					$return = '';
					$key = $key+1;
					if(!($key%$n) OR count($array)==$key){
						$return = '</div><div class="clear"></div>';
					}
					return $return;
				}
			// Clear

			// li
				function li1($array, $key, $n, $tags=''){ // li1($chamadas, $key, 3, '')
					$return = '';
					$key = $key;
					if(!($key%$n)){
						$return = '<li '.$tags.' >';
					}
					return $return;
				}
				function li2($array, $key, $n){ // li2($chamadas, $key, 3)
					$return = '';
					$key = $key+1;
					if(!($key%$n) OR count($array)==$key){
						$return = '</li> ';
					}
					return $return;
				}
			// li

			// Ex
				function ex($item, $delimiter='-', $ini=1){
					$return = $ini ? array(0) : array();
					$ex = explode($delimiter, $item);
					foreach ($ex as $key => $value) {
						if($value)
							$return[] = $value;
					}
					return $return;
				}
			// Ex

			// Explode Ini e Fim
				function ex_ini($delimiter, $string){
					$ex = explode($delimiter, $string);
					$return = array(1=>'');
					foreach ($ex as $key => $value) {
						if($key){
							$return[1] .= $value;
						} else {
							$return[0] = $value;
						}
					}
					return $return;
				}
				function ex_fim($delimiter, $string){
					$ex = explode($delimiter, $string);
					$return = array('');
					foreach ($ex as $key => $value) {
						if(isset($ex[$key+1])){
							$return[0] .= $value;
						} else {
							$return[1] = $value;
						}
					}
					return $return;
				}
			// Explode Ini e Fim

			// Itens
				function itens($item, $delimiter='-'){
					$itens = ex($item, $delimiter='-');
					$return = implode(', ', $itens);
					return $return;
				}
				function itens1($item, $delimiter='-'){
					$ex = ex($item, $delimiter='-');
					$itens = array();
					foreach ($ex as $key => $value) {
						if($value){
							$itens[] = $value;
						}
					}
					$return = implode(', ', $itens);
					return $return;
				}
			// Itens

			// Implodee
				function implodee($array){
					return '-'.implode('-', $array).'-';
				}
			// Implodee

			// Color
				function color($cor){
					$return = str_replace('#', '', $cor);
					return $return;
				}
			// Color

			// Verificar Cor
				function verificar_cor($cor){
					$return = 0;
					$red = hexdec(substr($cor, 1, 2));
					$green = hexdec(substr($cor, 3, 2));
					$blue = hexdec(substr($cor, 5, 2));
					$resultado = (($red * 299) + ($green * 587) + ($blue * 114)) / 1000;
					if($resultado < 128){
						$return = 1;
					}
					return $return;
				}
			// Verificar Cor

			// Telefone
				function tel($numero){
					$return = $numero;
					if(mb_strlen($numero)>14){
						$numero = str_replace('-', '', $numero);
						$ini = mb_substr($numero, 0, 6);
						$center = mb_substr($numero, 6, 4);
						$fim = mb_substr($numero, -4);
						$return = $ini.' '.$center.'-'.$fim;
					} elseif(mb_strlen($numero)==13){
						$numero = str_replace('-', '', $numero);
						$ini = mb_substr($numero, 0, 5);
						$center = mb_substr($numero, 5, 4);
						$fim = mb_substr($numero, -4);
						$return = $ini.' '.$center.'-'.$fim;
					}
					return $return;
				}
				function tel_ddd($numero){
					$return = entre('(', ')', $numero);
					return $return;
				}
				function tel_numero($numero){
					$return = explode(')', $numero);
					$return[1] = isset($return[1]) ? $return[1] : $return[0];
					$return = trim($return[1]);
					$return = str_replace('-', '', $return);
					return $return;
				}
				function tel_completo($numero){
					$return = tel_ddd($numero).tel_numero($numero);
					$return = str_replace(' ', '', $return);
					return $return;
			// Telefone
				}

			// Cep Dados
				function cep_numero($numero){
					$return = str_replace('.', '', $numero);
					$return = str_replace('-', '', $return);
					return $return;
				}
			// Cep Dados

			// So numero
				function numero_all($str) {
				    return preg_replace("/[^0-9]/", "", $str);
				}
			// So numero

			// Like
				function like($item){
					return " LIKE concat('%', '".$item."', '%') ";
				}
			// Like

			// Limit (limit esta criado em funcoes_system)
				function limit1($text, $limit, $numero=0){
					if($numero){
						$text = str_pad($text, $limit, 0, STR_PAD_LEFT);
					} else {
						$text = $text.'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    ';
						$text = limit($text, $limit,'', 0);
					}
					return $text;
				}
			// Limit

			// Minusculo
			   function minusculo($txt){
					$trocarIsso	= array('Â',          'â',         'Ê',          'ê',         'Î',         'î',          'Ô',          'ô',         'Û',          'û',         'Ã',        'ã',         'Õ',         'õ',        'Á',           'á',          'É',           'é',          'Í',           'í',          'Ó',           'ó',          'Ú',           'ú',          'À',           'à',          'È',           'è',          'Ì',           'ì',          'Ò',           'ò',          'Ù',           'ù',          'Ç',             'ç',);
					$porIsso 	= array('(am->flex)', '(a->flex)', '(em->flex)', '(e->flex)', '(im->flex)', '(i->flex)', '(om->flex)', '(o->flex)', '(um->flex)', '(u->flex)', '(am->tio)', '(a->tio)', '(om->tio)', '(o->tio)', '(am->agudo)', '(a->agudo)', '(em->agudo)', '(e->agudo)', '(im->agudo)', '(i->agudo)', '(om->agudo)', '(o->agudo)', '(um->agudo)', '(u->agudo)', '(am->crase)', '(a->crase)', '(em->crase)', '(e->crase)', '(im->crase)', '(i->crase)', '(om->crase)', '(o->crase)', '(um->crase)', '(u->crase)', '(cm->cedilha)', '(c->cedilha)',);
					$txt = strtolower(str_replace($trocarIsso, $porIsso, $txt));
					$trocarIsso	= array('(am->flex)', '(a->flex)', '(em->flex)', '(e->flex)', '(im->flex)', '(i->flex)', '(om->flex)', '(o->flex)', '(um->flex)', '(u->flex)', '(am->tio)', '(a->tio)', '(om->tio)', '(o->tio)', '(am->agudo)', '(a->agudo)', '(em->agudo)', '(e->agudo)', '(im->agudo)', '(i->agudo)', '(om->agudo)', '(o->agudo)', '(um->agudo)', '(u->agudo)', '(am->crase)', '(a->crase)', '(em->crase)', '(e->crase)', '(im->crase)', '(i->crase)', '(om->crase)', '(o->crase)', '(um->crase)', '(u->crase)', '(cm->cedilha)', '(c->cedilha)',);
					$porIsso	= array('â',          'â',         'ê',          'ê',         'î',         'î',          'ô',          'ô',         'û',          'û',         'ã',        'ã',         'õ',         'õ',        'á',           'á',          'é',           'é',          'í',           'í',          'ó',           'ó',          'ú',           'ú',          'à',           'à',          'è',           'è',          'ì',           'ì',          'ò',           'ò',          'ù',           'ù',          'ç',             'ç',);
					$return = str_replace($trocarIsso, $porIsso, $txt);
				  return ($return);
			   }
			// Minusculo

			// NOME DO SITE
				function nome_site(){
					$array = array('www.', '.com', '.br', '.net', '.org', ':4000');
					$nome = ucfirst( str_replace($array, '', $_SERVER['HTTP_HOST']) );
					return($nome);
				}
			// NOME DO SITE

			// COUNTT
				function countt($value){
					$mysql = new Mysql();
					$mysql->campo['count'] = $value->count+1;
					$mysql->filtro = " where id = '".$value->id."' ";
					$mysql->update($value->table);
				}
			// COUNTT

			// INVERTER KEY
				function inverter_key($arary){
				    $return = array();
					foreach ($arary as $key => $value){
						if(is_array($value)){
							foreach ($value as $k => $v){
								$return[$k][$key] = $v;
							}
						} else
							$return[$key] = $value;
					}
					return $return;
				}
			// INVERTER KEY

			// DEGRADE
				function degrade($cores){ // 140deg, #EADEDB 0%, #BC70A4 50%, #BFD641 75%
					$return = "background-image: linear-gradient(".$cores.");";
					return $return;
				}
				function degrade_old($back1, $back2){
				    $return = "background-image: linear-gradient(red,yellow);;";
					return $return;
				}
			// DEGRADE

			// NBSP
				function nbsp($txt){
				    $return = str_replace(' ', '-', $txt);
					return $return;
				}
			// NBSP

			// LIMPAR ESPACOES (TABS)
				function limpa_espacoes($array){
					$return = $array;
					foreach ($array as $key => $value) {
					    $value = str_replace('          ', ' ', $value);
					    $return[$key] = str_replace('   ', ' ', $value);
					}
					return $return;
				}
			// LIMPAR ESPACOES (TABS)

			// PALAVRA ENTRE DUAS PALAVRAS
				function entre($ini, $fim, $item){
					$ex = explode($ini, $item);
					$ex = isset($ex[1]) ? explode($fim, $ex[1]) : '';
					$return = isset($ex[0]) ? $ex[0] : '';
					return $return;
				}
			// PALAVRA ENTRE DUAS PALAVRAS

			// PALAVRA ENTRE DUAS PALAVRAS (ARRAY)
				function entre_array($ini, $fim, $item, $array=array()){
					$ex = explode($ini, $item);
					$ex = isset($ex[1]) ? explode($fim, $ex[1]) : '';
					$entre = isset($ex[0]) ? $ex[0] : '';
					$array[] = $entre;
					$item = str_replace($ini.$entre.$fim, '', $item);
					if(preg_match('('.$ini.')', $item) AND preg_match('('.$fim.')', $item)){
						$array = entre_array($ini, $fim, $item, $array);
					}
					return $array;
				}
			// PALAVRA ENTRE DUAS PALAVRAS (ARRAY)

			// TIRAR BARRAS
				function tirar_barras($item){
					$return = str_replace('[', '_', $item);
					$return = str_replace(']', '', $return);
					return $return;
				}
			// TIRAR BARRAS

			// TIRAR BARRAS E ;;
				function tirar_barras_2pronto_virgula($item){
					$return = str_replace('[', '_', $item);
					$return = str_replace(']', '', $return);
					$return = str_replace(';;', '_', $return);
					return $return;
				}
			// TIRAR BARRAS E ;;

			// VERIFICAR SE TEM ? NA URL
				function interrogacao(){
					$ex = explode('?', DIR_ALL);
					$return = isset($ex[1]) ? '&' : '?';
					return $return;
				}
			// VERIFICAR SE TEM ? NA URL

			// EXISTE
				function existe($array, $elemento, $extra=''){
					$return = '';
					if(is_array($array)){
						$return = isset($array[$elemento]) ? $array[$elemento] : $extra;
					}
					if(is_object($array)){
						$return = isset($array->$elemento) ? $array->$elemento : $extra;
					}
					return $return;
				}
			// EXISTE

			// EXTENSAO
				function extensao($arquivo){
					$return = mb_substr($arquivo, -3);;
					return ($return);
				}
			// EXTENSAO

			// LOCATION
				function location($url){
					$url = $url ? $url : $_SERVER['REQUEST_URI'];
					header("Location: ".$url);
				}
				function location_js($url){
					$url = $url ? $url : $_SERVER['REQUEST_URI'];
					echo '<script> ';
						echo "window.parent.location='".$url."' ";
					echo '</script> ';
				}
				function location_txt($txt='Enviado com sucesso!', $url=''){
					$url = $url ? $url : $_SERVER['REQUEST_URI'];
					echo '<script> ';
						echo 'alert("'.$txt.'"); ';
						echo "window.parent.location='".$url."' ";
					echo '</script> ';
				}

				function captcha(){
					$captcha = '<div class="g-recaptcha" data-sitekey="'.CAPTCHA.'"></div>
		  						<script src="https://www.google.com/recaptcha/api.js?hl=pt-BR"></script>';
					return $captcha;
				}
				function captcha_confirmar(){
					if(isset($_POST['g-recaptcha-response']) AND $_POST['g-recaptcha-response']){
						return(1);
					} else {
						return(0);
					}
				}
			// LOCATION

			// DATA FIREFOX
				function data_firefox(){
					foreach ($_POST as $key => $value) {
						if($key == 'data_firefox'){
							foreach ($value as $k => $v){
								$val = explode(';;x;;', $k);
								if(isset($val[1])){
									$ex = explode(' ', $_POST[$val[0]][$val[1]]);
									$_POST[$val[0]][$val[1]] = $ex[2].'-'.$ex[1].'-'.$ex[0];

								} else {
									$ex = explode('/', $_POST[$k]);
									$_POST[$k] = $ex[2].'-'.$ex[1].'-'.$ex[0];
								}
							}
						}
						if($key == 'datatime_firefox'){
							foreach ($value as $k => $v){
								$data = dividir_data($_POST[$k], '/');
								$_POST[$k] = data($data[2].'-'.$data[1].'-'.$data[0].' '.$data[3].':'.$data[4].':'.$data[5], 'c');
							}
						}
					}
					unset($_POST['data_firefox']);
					unset($_POST['datatime_firefox']);
				}
			// DATA FIREFOX

			// TXT
				function txt($value, $tipo=0){
					$return = '';
					$id = isset($value->table) ? $value->id : $value;
					$table = isset($value->table) ? $value->table : 'textos';
					$mysql = new Mysql();
					$mysql->colunas = "txt";
					$mysql->prepare = array($table, $id, $tipo);
					$mysql->filtro = " WHERE `tabelas` = ? AND `item` = ? AND `tipo` = ? ";
					$banco = $mysql->read("z_txt");
					foreach($banco as $linhas){
						$return = str_replace('/web/ckfinder/', DIR.'/web/ckfinder/', base64_decode($linhas->txt) );
					}
					if($return){
						$return = '<div class="editor taj">'.$return.'</div>';
						$return .= '<style>body#cke_pastebin, bodyXXX { position: static !important; top: 0 !important; left: 0 !important; width: 100% !important; height: auto !important; padding: 0px !important; margin: 0px !important; overflow: inherit !important; }</style>';
					}
					return $return;
				}
			// TXT

			// SELECTS TEMP
				function select2_temp($html){
					$return = str_replace("design", "z-design-z", $html);
					return $return;
				}
			// SELECTS TEMP

			// SET
				function set($table, $id, $set){
					$return = '';

					$mysql = new Mysql();
					$mysql->prepare = array($id);
					$mysql->filtro = " WHERE `id` = ? ";
					$linhas = $mysql->read_unico($table);

					$ex = explode('set[', $set);
					foreach ($ex as $key => $value) {
						$ex1 = explode(']', $value);
						$ex1_0 = $ex1[0];
						if(isset($linhas->$ex1_0)){
							$return .= $linhas->$ex1_0;
						} else {
							$return .= $ex1_0;
						}
						if(isset($ex1[1])){
							$return .= $ex1[1];
						}
					}
					return $return;
				}
			// SET

			// RASTREAMENTO
				function rastreamento($rastreamento){
					$data['Usuario'] = 'ECT';
					$data['Senha'] = 'SRO';
					$data['Tipo'] = 'L';
					$data['Resultado'] = 'U';
					$data['Objetos'] = $rastreamento;

					$curl = curl_init('http://websro.correios.com.br/sro_bin/sroii_xml.eventos');
					curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
					curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
					curl_setopt($curl, CURLOPT_POSTFIELDS, http_build_query($data));
					$xml = curl_exec($curl);
					curl_close($curl);
					$xml= simplexml_load_string($xml);

					return $xml->objeto->evento;
				}
			// RASTREAMENTO

			// VERIFICAR FRETE LOCAL
				function verificar_frete_local($endereco){
					$return = 0;
					$mysql = new Mysql();
					$mysql->filtro = " WHERE ".STATUS." ";
					$consulta = $mysql->read("frete_por_local");
					foreach ($consulta as $key => $value) {
						if(preg_match('('.$value->bairros.', '.$value->cidades.' / '.$value->estados.')', $endereco) AND $value->bairros AND $value->cidades AND $value->estados){
							$return = 1;
						} elseif(!$value->bairros AND preg_match('('.$value->cidades.' / '.$value->estados.')', $endereco) AND $value->cidades AND $value->estados){
							$return = 1;
						} elseif(!$value->bairros AND !$value->cidades AND preg_match('('.$value->estados.')', $endereco) AND $value->estados){
							$return = 1;
						}
					}
					return $return;
				}
			// VERIFICAR FRETE LOCAL

			// VERIFICAR FRETE GRATIS
				function verificar_frete_gratis($return, $tipo, $valor_total, $pg_produto=0){
					$mysql = new Mysql();

					// DOS DESCONTOS
						// Frete gratis do cupom se por pac
						if(isset($_SESSION['desconto']['cupons']['frete_gratis']) OR isset($_SESSION['desconto']['produto_digital']['frete_gratis'])){
							$return['valor'][$tipo] = '0.00';
						}
					// DOS DESCONTOS

					// FRETE GRATIS PARA PRODUTOS
						$frete_gratis = 1;
						if($pg_produto){
							$frete_gratis = rel('produtos', $pg_produto, 'frete');

						} elseif(isset($_SESSION['carrinho']['itens'])){
							foreach($_SESSION['carrinho']['itens'] as $key => $array){
								foreach($array as $ref => $value){
									$mysql->filtro = " where status = 1 and lang = '".LANG."' and id = '".$key."' ";
									$produtos = $mysql->read_unico('produtos');
									if(isset($produtos->id)){
										// FRETE GRATIS POR PRODUTO
											if($frete_gratis){
												$frete_gratis = isset($produtos->frete) ? $produtos->frete : 0;
											}
										// FRETE GRATIS POR PRODUTO
									}
								}
							}
						}

						// FRETE GRATIS COMPRA ACIMA DE R$ XXX
							$mysql->filtro = " where tipo = 'frete' ";
							$frete = $mysql->read_unico('configs');

							if($valor_total >= $frete->preco1 AND $frete->preco1 > 0){
								$frete_gratis = 1;
							}
						// FRETE GRATIS COMPRA ACIMA DE R$ XXX

						if($frete_gratis){
							$return['valor'][$tipo] = '0.00';
						}
					// FRETE GRATIS PARA PRODUTOS

					return $return;
				}
			// VERIFICAR FRETE GRATIS

			// FRETE HTML
				function frete_html($dados, $nome, $tipo, $pg_produto, $seller){
					$return  = '';
					$nome = str_replace('melhor_envio_', '', $nome);
					$nome = str_replace('correio_', '', $nome);
					$nome = ucfirst($nome);
					if(isset($dados['valor'][$tipo])){
			            $return .= '<div class="p5 '.(!$pg_produto ? 'flr' : '').' fln_1000"> ';
							if(!$dados['erro'][$tipo]){
								if(!$pg_produto){
					                $return .= '<label class="w260 fll fln_1000 dib limit p0_1000 tal w100_1000 tal_1000"> ';
				                    	$return .= '<input type="radio" name="frete" dir="'.$tipo.'" value="'.$tipo.'" onclick="CC_atualizar('.A.'frete'.A.', '.A.A.', this, 1)"> ';
					                    $return .= '<span>'.$nome.' <span class="ttn">'.$dados['prazo'][$tipo].'</span></span> ';
					                $return .= '</label> ';
				            	} else {
					                $return .= '<div class="w210 fll fln_1000 dib limit p0_1000 tal w100_1000"> '.$nome.' <span class="ttn">'.$dados['prazo'][$tipo].'</span> </div> ';
				            	}
				                $return .= '<div class="w110 fll flr_1000 dib tar w-a_1000 tal_1000"> ';
			                		$return .= '<span class="">'.( $dados['valor'][$tipo]=='0.00' ? '<b class="c_verde">Grátis</b>' : preco($dados['valor'][$tipo], 1) ).'</span> ';
				                $return .= '</div> ';
		                	} else {
	    	            		$return .= '<span class="w110 fll fln_1000">'.$nome.' <span class="ttn">'.$dados['prazo'][$tipo].'</span></span> ';
		                		$return .= '<span class="w260 fll flr_1000 tar">Frete indisponível no momento!</span> ';
		                		$return .= '<div class="clear"></div> ';
		                	}
			            $return .= '</div> ';
			            $return .= '<div class="clear"></div> ';
			        }
		            return $return;
				}
			// FRETE HTML

			// VOUCHER
				function voucher($tamanho=10, $numeros=true, $simbolos=false){
					$lmai = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
					$num = '12345678901234567890';
					$simb = '!@#$%*-';
					$return = '';
					$caracteres = '';
					$caracteres .= $lmai;
					if($numeros) $caracteres .= $num;
					if($simbolos) $caracteres .= $simb;
					$len = mb_strlen($caracteres);
					for ($n = 1; $n <= $tamanho; $n++) {
						$rand = mt_rand(1, $len);
						$return .= $caracteres[$rand-1];
					}
					return $return;
				}
			// VOUCHER

			// CHAVE
				function chave($tamanho=10, $numeros=true, $simbolos=false){
					$lmai = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
					//$lmai = 'abcdefghijklmnopqrstuvwxyz';
					$num = '12345678901234567890';
					$simb = '!@#$%*-';
					$return = '';
					$caracteres = '';
					$caracteres .= $lmai;
					if($numeros) $caracteres .= $num;
					if($simbolos) $caracteres .= $simb;
					$len = mb_strlen($caracteres);
					for ($n = 1; $n <= $tamanho; $n++) {
						$rand = mt_rand(1, $len);
						$return .= $caracteres[$rand-1];
					}
					return $return;
				}
			// CHAVE

			// INCLUDE
				function get_include_contents($filename) {
				    if (is_file($filename)) {
				        ob_start();
				        include $filename;
				        return ob_get_clean();
				    }
				    return false;
				}
			// INCLUDE

			// NOME DO SITE
				function select_tables($tables, $filtro, $coluna='id', $ordem=''){
					$mysql = new Mysql();
					$return = array();
					foreach ($tables as $key => $table) {
		                $mysql->filtro = $filtro[$key];
		                $consulta = $mysql->read($table);
		                foreach ($consulta as $key => $value) {
		                    $return[$value->$coluna.'-'.$table.'-'.$value->id] = $value;
		                }
					}
					if($ordem=='ASC'){
						ksort($return);
					} elseif($ordem=='DESC'){
						krsort($return);
					}
					return $return;
				}
			// NOME DO SITE

			// TRANSACAO
				function transacao($table, $id){
					$return = 'MANUAL-'.iff($table=='pedidos_status_pago', 'P', 'O').$id;
					return $return;
				}
			// TRANSACAO

			// TRACKER
				function tracker($table, $id){
					$return = 'MANUAL-'.iff($table=='pedidos_status_pago', 'P', 'O').$id;
					return $return;
				}
			// TRACKER

			// CUPONS FILTRO DATA
				function cupons_filtro_data(){
					$data_sem = " `data_ini` = '0000-00-00' AND `data_fim` = '0000-00-00' ";
					$data_ini = " `data_ini` BETWEEN ('0') AND ('".date('Y-m-d')."') AND `data_ini` != '0000-00-00' AND `data_fim`  = '0000-00-00' ";
					$data_fim = " `data_fim` BETWEEN ('".date('Y-m-d')."') AND ('4000-12-31') AND `data_ini`  = '0000-00-00' AND `data_fim` != '0000-00-00' ";
					$data_ini_fim = " `data_ini` BETWEEN ('0') AND ('".date('Y-m-d')."') AND `data_fim` BETWEEN ('".date('Y-m-d')."') AND ('4000-12-31') AND `data_ini`  != '0000-00-00' AND `data_fim` != '0000-00-00' ";

					$return = " AND ( (".$data_sem.") OR (".$data_ini.") OR (".$data_fim.") OR (".$data_ini_fim.") ) ";
					return $return;
				}
			// CUPONS FILTRO DATA
		// UTEIS



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



		// URL
			// Http
			function http($texto){
				$return = (!preg_match("(http)",$texto)) ? 'http://'.$texto : $texto;
				return $return;
			}
			function https($texto){
				$return = (!preg_match("(https)",$texto)) ? 'https://'.$texto : $texto;
				return $return;
			}
			function http1($texto){
				if(!preg_match("(http)",$texto)){
					$return = DIR.$texto;
				} else {
					$return = $texto;
				}
				return $return;
			}

			// Url
			function url($pg, $value, $categorias=0){
				$categorias = ($categorias AND $categorias=='ok') ? $value->id : $categorias;
				$value = $value ? $value : (object)array('id'=>'', 'nome'=>'');
				$nome = strtolower(sem('url', $value->nome));
				$return = !$categorias ? DIR.'/'.$pg.'/'.iff($nome, $nome, '-').'/'.$value->id.'/' : DIR.'/'.$pg.'/'.strtolower(sem('url', $value->nome)).'/-/'.$categorias.'/';
				return $return;
				return $return;
			}

			// Url
			function url_txt($item, $pg='textos'){
				$return = DIR.'/'.$pg.'/'.amg($item).'-/'.$item.'/';
				return $return;
			}

			// Gets (Converte GET URL em GET ARRAY)
			function gets($url){
				$return = array();
		        $ex = explode('?', $url);
		        if(isset($ex[1]) AND $ex[1]){
			        $ex = explode(';;z;;', $ex[1]);
			        foreach ($ex as $key => $value){
			        	$ex1 = explode('=', $value);
			        	//$return[$ex1[0]] = $value;
			        	$return[$ex1[0]] = $ex1[1];
			        }
			    }
				return $return;
			}

			// Gets (Converte GETS (PURO) em GET ARRAY)
			function gets_puro($url, $divisor='&'){
				$return = array();
		        $ex = explode($divisor, $url);
		        foreach ($ex as $key => $value){
		        	if($value){
			        	$ex1 = explode('=', $value);
			        	if(isset($ex1[1])){
				        	$return[$ex1[0]] = $ex1[1];
				        }
			        }
		        }
				return $return;
			}

			// Url Get (Substitui a GET pela VARIAVEL get)
			function tirar_url($get='', $url_fixa=''){
				$url = explode('?', $_SERVER ['REQUEST_URI']);
				$gets = isset($url[1]) ? tirar_url1($url[1]) : array();
				$gets = tirar_url1($get, $gets);
				$url = $url_fixa ? $url_fixa : $url[0];
				$return = $url.'?'.implode('&', $gets);

				// Tirando paginacao (*para novas pesquisas)
				$return = str_replace('pag=', 'pag=0&', $return);

				return $return;
			}
			function tirar_url1($url, $gets=array()){
				$return = $gets;
				$ex = explode('&', $url);
				foreach ($ex as $key => $value){
					$ex1 = explode('=', $value);
					if(isset($ex1[1])){
						$return[$ex1[0]] = $value;
					}
				}
				return $return;
			}

			// Url Amigavel
			function amg($id, $txt=''){
				$return = '-';
				$mysql = new Mysql();
				$mysql->colunas = 'nome';
				$mysql->prepare = array($id);
				$mysql->filtro = " WHERE `id` = ? ";
				foreach($mysql->read('textos') as $key => $value){
					$return = sem('url', $value->nome);
				}
				return $return;
			}
		// URL



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



		// FUNCOES RELACIONADAS TABLE
			// Value
			function value($array, $item, $outro_condicao=''){
				if(is_object($array)){
					foreach ($array as $key => $value) {
						$array_temp[$key] = $value;
					}
					$array = $array_temp;
				}
				$return = isset($array[$item]) ? $array[$item] : $outro_condicao;
				return $return;
			}
			function value1($array, $elemento, $item, $outro_condicao=''){
				$return = array();
				if(isset($array[$elemento])){
					$return = cod('html->asc', $array[$elemento]);
				}
				return(value($return, $item, $outro_condicao));
			}

			// Auto Complete
			function datalist($array){
				$rand = rand();
				$return  = 'list="datalist_'.$rand.'" />';
				$return .= '<datalist id="datalist_'.$rand.'"> ';
					foreach ($array as $key => $value) {
						$return .= '<option label="" value="'.$value->nome.'">'.$value->nome.'</option> ';
					}
				$return .= '</datalist> <p class="dni"></p';
				return $return;
			}

			// Option
			function option($table, $array=array(), $item='', $criar=0, $filtro='', $status=1){
				$return = '';
				if(is_object($array)){
					foreach ($array as $key => $value) {
						$array_temp[$key] = $value;
					}
					$array = $array_temp;
				}
				if($criar){
					$return .= ' <option value="" >- - -</option> ';
					$return .= '<optgroup label="Ações" id="acoes"> ';
						$return .= '<option value="(cn)">Cadastrar Novo</option> ';
						$return .= '<option value="(gi)">Gerenciar Itens</option> ';
					$return .= '</optgroup> ';
					$return .= '<optgroup label="Itens" id="itens"> ';
				}
				$mysql = new Mysql();
				$mysql->colunas = 'id, nome';
				$mysql->filtro = $filtro ? $filtro : ' WHERE '.iff($status, "`status` = 1 AND", "").' `lang` = "'.LANG.'" ORDER BY '.ORDER.' ';
				$consulta = $mysql->read($table);
				foreach ($consulta as $key => $value) {
					$return .= '<option value="'.$value->id.'" ';
					$return .= (isset($array[$item]) AND $array[$item] == $value->id) ? 'selected' : '';
					$return .= '>'.$value->nome.'</option> ';
				}
				$return .= ($criar) ? '</optgroup> ' : '';
				return $return;
			}

			// Option banco
			function option_banco($table, $filtro=''){
				$return = '';
				$mysql = new Mysql();
				$mysql->colunas = 'id, nome';
				$mysql->filtro = $filtro ? $filtro : ' WHERE `status` = 1 AND `lang` = "'.LANG.'" ORDER BY `nome` ASC ';
				$consulta = $mysql->read($table);
				foreach ($consulta as $key => $value){
					$return .= $value->id.'->'.$value->nome.'; ';
				}
				return $return;
			}

			// Option estados
			function option_estados($estados=''){
				$return = '';
				$ab	=	array('AC',		'AL',		'AM',		'AP',		'BA',		'CE',		'DF',				'ES',				'GO',		'MA',		'MG',			'MS',					'MT',			'PA',	'PB',		'PE',			'PI',		'PR',		'RJ',				'RN',					'RO',		'RR',		'RS',					'SC',				'SE',		'SP',			'TO',);
				$nome =	array('Acre',	'Alagoas',	'Amazonas',	'Amapá',	'Bahia',	'Ceará',	'Distrito Federal',	'Espírito Santo',	'Goiás',	'Maranhão',	'Minas Gerais',	'Mato Grosso do Sul',	'Mato Grosso',	'Pará',	'Paraíba',	'Pernambuco',	'Piauí',	'Paraná',	'Rio de Janeiro',	'Rio Grande do Norte',	'Rondônia',	'Roraima',	'Rio Grande do Sul',	'Santa Catarina',	'Sergipe',	'São Paulo',	'Tocantins',);
				foreach ($nome as $key => $value) {
					$selected = $estados==$ab[$key] ? 'selected' : '';
				    $return .= '<option value="'.$ab[$key].'" '.$selected.'> '.$value.'</option> ';
				}
				return $return;
			}

			// Option mes
			function option_mes($mes=''){
				$return = '';
				$ab	=	array(1,			2,				3,			4,			5,			6,			7,			8,			9,			10,			11,			12,);
				$nome =	array('Janeiro',	'Fevereiro',	'Março',	'Abril',	'Maio',		'Junho',	'Julho',	'Agosto',	'Setembro',	'Outubro',	'Novembro',	'Dezembro',);
				foreach ($nome as $key => $value) {
					$selected = $mes==$ab[$key] ? 'selected' : '';
				    $return .= '<option value="'.$ab[$key].'" '.$selected.'> '.$value.'</option> ';
				}
				return $return;
			}

			// Val
			function val($id, $table='', $coluna='*'){
				$mysql = new Mysql();
				$mysql->colunas = $coluna;
				$mysql->prepare = array($id);
				$mysql->filtro = " WHERE `id` = ? ";
				return ( $mysql->read_unico($table) );
			}

			// Rel
			function rel($table, $categoria, $coluna='nome', $nenhum=0, $nao_existe=0, $key='id'){
				$return = $nenhum ? $nenhum : '';
				$mysql = new Mysql();
				$mysql->nao_existe = $nao_existe;
				$mysql->colunas = $coluna;
				$mysql->prepare = array($categoria);
				$mysql->filtro = " WHERE ".STATUS." AND `".$key."` = ? ";
				$consulta = $mysql->read($table);
				if(isset($consulta) AND is_array($consulta)){
					foreach($consulta as $linhas){
						$return = $linhas->$coluna;
					}
				}
				return $return;
			}
			function rel1($table, $categoria, $coluna='nome', $nenhum=0, $nao_existe=0, $key='id'){
				$return = $nenhum ? $nenhum : '';
				$mysql = new Mysql();
				$mysql->nao_existe = $nao_existe;
				$mysql->colunas = $coluna;
				$mysql->prepare = array($categoria);
				$mysql->filtro = " WHERE `lang` = ".LANG." AND `".$key."` = ? ";
				$consulta = $mysql->read($table);
				if(isset($consulta) AND is_array($consulta)){
					foreach($consulta as $linhas){
						$return = $linhas->$coluna;
					}
				}
				return $return;
			}
			// Rel Nome
			function rel_nome($table, $categoria, $coluna='nome', $nenhum=0, $nao_existe=0){
				$return = $nenhum ? $nenhum : '';
				$mysql = new Mysql();
				$mysql->nao_existe = $nao_existe;
				$mysql->colunas = 'id';
				$mysql->prepare = array($categoria);
				$mysql->filtro = " WHERE `lang` = ".LANG." AND `".$coluna."` = ? ";
				$consulta = $mysql->read($table);
				if(isset($consulta) AND is_array($consulta)){
					foreach($consulta as $linhas){
						$return = $linhas->id;
					}
				}
				return $return;
			}

			// Mais Fotos
			function mais_fotos($value, $n='', $order='', $limit=''){
				$mysql = new Mysql();
				$return = array();
				if(isset($value->table) and isset($value->id)){
					$mysql->prepare = array($value->table, $value->id);
					$mysql->filtro = " WHERE ".STATUS." AND `tabelas` = ? AND `item` = ? ORDER BY ".$order." `ordem` ASC, `id` ASC ".$limit." ";
					$return = $mysql->read("mais_fotos".$n);
				}
				return $return;
			}

			// Estados
			function estados($ab){
				$trocarIsso	= array('AC', 	'AL', 	   'AM', 	   'AP', 	'BA', 	 'CE', 	  'DF', 			  'ES', 		    'GO', 	 'MA', 		 'MG', 			 'MS', 				   'MT', 		  'PA',   'PB', 	 'PE', 		   'PI', 	'PR', 	  'RJ', 			'RN', 				   'RO', 	   'RR', 	  'RS', 			   'SC', 			 'SE', 		'SP', 		 'TO',);
				$porIsso 	= array('Acre', 'Alagoas', 'Amazonas', 'Amapá', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Minas Gerais', 'Mato Grosso do Sul', 'Mato Grosso', 'Pará', 'Paraíba', 'Pernambuco', 'Piauí', 'Paraná', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rondônia', 'Roraima', 'Rio Grande do Sul', 'Santa Catarina', 'Sergipe', 'São Paulo', 'Tocantins',);
				$return = str_replace($trocarIsso, $porIsso, $ab);
				return $return;
			}

			// Favoritoo
				function favoritoo($tipo, $value=''){
					$return = '';
					if($tipo == 'count'){
						$return = 0;
						if(isset($_SESSION['x_site']->id)){
							$mysql = new Mysql();
							$mysql->filtro = " WHERE ".STATUS." AND cadastro = '".$_SESSION['x_site']->id."' ORDER BY ".ORDER." ";
							$produtos_favoritos = $mysql->read('produtos_favoritos');
							$return = count($produtos_favoritos);
						}
					}
					if($tipo == 'icon' AND $value){
						$return = '<i class="faa-heart-o favoritoo_'.$value->id.'"></i>';
						if(isset($_SESSION['x_site']->id)){
							$mysql = new Mysql();
							$mysql->filtro = " WHERE ".STATUS." AND cadastro = '".$_SESSION['x_site']->id."' AND produtos = '".$value->id."' ORDER BY ".ORDER." ";
							$produtos_favoritos = $mysql->read_unico('produtos_favoritos');
							if(isset($produtos_favoritos->id)){
								$return = '<i class="faa-heart favoritoo_'.$value->id.'"></i>';
							}
						}
					}
					return $return;
				}
			// Favoritoo

			// Star
			function star($value, $tipo=''){
				$mysql = new Mysql();
				$mysql->colunas = 'nome, star';
				//$mysql->prepare = array($value->table, $value->id);
				//$mysql->filtro = " WHERE ".STATUS." AND `tabelas` = ? AND `item` = ? ";
				$mysql->filtro = " WHERE ".STATUS." AND `tabelas` = 'pedidos' AND `item` IN ( SELECT `id` FROM `pedidos` WHERE ".STATUS." AND produtos LIKE '%-".$value->id."-%' ) ";
				$mais_star = $mysql->read("mais_comentarios");
				$mais_star = $mysql->read("mais_comentarios");
				$array = array();
				$star = 0;
				$n_star = 0;
				foreach ($mais_star as $k => $v){ $n_star++;
					$star += $v->star;
					$array[] = $v->nome.': '.$v->star.' estrelas';
				}
				$votacao = implode(' - ', $array);
				$total = $n_star ? $star/$n_star : 0;
				$total = $total < 0 ? 0 : $total;
				$total = $total > 5 ? 5 : $total;

				if(!$tipo){
					$return = $total;
				} elseif($tipo == '%'){
					$return = $total*100/5;
				} elseif($tipo == 'count'){
					$return = count($mais_star);
				} elseif($tipo == 'votacao'){
					$return = $votacao;
				}
				return $return;
			}

			// Star Databale Ajax
			function star_icon($value, $n=5){
				$total = is_object($value) ? star($value) : $value;
				$return = '';
				if($total){
					for($i=0; $i < $n; $i++){
						if($total > 0){
							if($total < 1)
								$return .= ' <i class="faa-star-half-o c_amarelo"></i> ';
							else
								$return .= ' <i class="faa-star c_amarelo"></i> ';
						} else {
							$return .= ' <i class="faa-star-o c_amarelo"></i> ';
						}
						$total = $total-1;
					}
				} else {
					$return .= ' <i class="faa-star c_amarelo"></i> ';
					$return .= ' <i class="faa-star c_amarelo"></i> ';
					$return .= ' <i class="faa-star c_amarelo"></i> ';
					$return .= ' <i class="faa-star c_amarelo"></i> ';
					$return .= ' <i class="faa-star c_amarelo"></i> ';
				}
				return $return;
			}

			// Sistema Mautic
			function sistema_mautic(){
				$return = '';
				$mysql = new Mysql();
				$mysql->colunas = 'valor';
				$mysql->filtro = " WHERE `tipo` = 'sistema_mautic' ";
				$sistema_mautic = $mysql->read_unico("configs");
				if($sistema_mautic->valor){
					$return .= '<style>.sistema_mautic { display: none !important; } </style> ';
					$return .= '<div class="sistema_mautic">'.cod('asc->html', $sistema_mautic->valor).'</div>';
				}
				return $return;
			}

			// Letreiro
			function letreiro($txt, $tags=''){
				$return  = '<marquee '.$tags.' direction="LEFT" onmouseout="this.start()" onmouseover="this.stop()" scrollamount="6">'.$txt.'</marquee> ';
				return $return;
			}

			// Multifotos
			function multifotos($value, $normal=0){
				$return = (isset($value->multifotos) AND $value->multifotos) ? unserialize(base64_decode($value->multifotos)) : array();
				if($return AND !$normal){
					foreach ($return as $key => $value) {
						$array[$key] = (object)array();
						$array[$key]->foto = $value;
						$array[$key]->multifotos = 'ok';
					}
					$return = $array;
				}
				return $return;
			}


			// Categorias
			function categorias($item='', $table='produtos'){
				$mysql = new Mysql();
				$categorias = $item ? $item->categorias : $_GET['categorias'];
				$mysql->filtro = " where ".STATUS." AND id = '".$categorias."' order by ".ORDER." ";
				$cate = $mysql->read_unico($table.'1_cate');

				if(isset($cate->id)){
					$mysql->filtro = " where ".STATUS." AND id = '".$cate->subcategorias."' order by ".ORDER." ";
					$subcate = $mysql->read_unico($table.'1_cate');
				}

                $return[0]['nome'] = isset($cate->id) ? $cate->nome : '';
                $return[0]['link'] = isset($cate->id) ? url($table, $cate, $cate->id).'?tipo=sub' : '';

                $return[1]['nome'] = isset($subcate->id) ? $subcate->nome : '';
                $return[1]['link'] = isset($subcate->id) ? url($table, $subcate, $subcate->id).'?tipo=sub' : '';
				return $return;
			}

			// Categorias - Subcategorias
			function categorias_subcategorias($id, $table='produtos'){
				$niveis = array();
				$niveis[] = " `categorias` = '".$id."' ";
				$niveis[] = " `categorias` IN (SELECT `id` FROM `".$table."1_cate` WHERE ".STATUS." AND `subcategorias` = '".$id."' ) ";
				$niveis[] = " `categorias` IN (SELECT `id` FROM `".$table."1_cate` WHERE ".STATUS." AND `subcategorias` IN (SELECT `id` FROM `".$table."1_cate` WHERE ".STATUS." AND `subcategorias` = '".$id."' )) ";
				$niveis[] = " `categorias` IN (SELECT `id` FROM `".$table."1_cate` WHERE ".STATUS." AND `subcategorias` IN (SELECT `id` FROM `".$table."1_cate` WHERE ".STATUS." AND `subcategorias` IN (SELECT `id` FROM `".$table."1_cate` WHERE ".STATUS." AND `subcategorias` = '".$id."' ))) ";
				$niveis[] = " `categorias` IN (SELECT `id` FROM `".$table."1_cate` WHERE ".STATUS." AND `subcategorias` IN (SELECT `id` FROM `".$table."1_cate` WHERE ".STATUS." AND `subcategorias` IN (SELECT `id` FROM `".$table."1_cate` WHERE ".STATUS." AND `subcategorias` IN (SELECT `id` FROM `".$table."1_cate` WHERE ".STATUS." AND `subcategorias` = '".$id."' )))) ";
				$return = " ( ".implode(' OR ', $niveis)." ) ";
				return $return;
			}

			// SubCategorias
			function subcategorias($value){
				$return = 0;
				if(isset($value->vcategorias)){
					if($value->tipo){
						$ex = explode('-', $value->vcategorias);
						$return = isset($ex[count($ex)-3]) ? $ex[count($ex)-3] : 0;
					}
				} else {
					$ex = explode('-', $value);
					$return = isset($ex[count($ex)-3]) ? $ex[count($ex)-3] : 0;
				}
				return($return.' / ');
			}

			// VCategorias
			function vcategorias($id){
				$mysql = new Mysql();
				$mysql->filtro = " WHERE ".STATUS." AND `id` = '".$id."' ORDER BY ".ORDER." ";
				$item = $mysql->read_unico('produtos1_cate');

				$return = "";
				if(isset($item->id)){
					$categorias[] = $item->id;

					$mysql->filtro = " WHERE ".STATUS." AND `subcategorias` = '".$item->id."' ORDER BY ".ORDER." ";
					$sub = $mysql->read('produtos1_cate');
					foreach ($sub as $k => $v) {
						$categorias[] = $v->id;
					}
					$return  = " AND ( ";
					foreach ($categorias as $k => $v) {
						$return .= $k ? 'OR' : '';
						$return .= " `vcategorias` ".like('-'.$v.'-')." ";
					}
					$return .= " ) ";
				}

				return $return;
			}

			// Numero Categorias
			function numero_categorias($value){
				$mysql = new Mysql();
				$mysql->prepare = array($value->id);
				$mysql->filtro = " WHERE `status` = 1 AND `lang` = '".LANG."' AND `categorias` = ? AND ".VERIFICACAO_PRODUTOS." ";
				$produtos = $mysql->read('produtos');
				$return = count($produtos);

				$mysql->prepare = array($value->id);
				$mysql->filtro = "  WHERE `status` = 1 AND `lang` = '".LANG."' AND `subcategorias` = ? ";
				$produtos1_cate = $mysql->read('produtos1_cate');
				foreach($produtos1_cate as $linhas){
					$mysql->prepare = array($linhas->id);
					$mysql->filtro = "  WHERE `status` = 1 AND `lang` = '".LANG."' AND `categorias` = ? AND ".VERIFICACAO_PRODUTOS." ";
					$produtos = $mysql->read('produtos');
					$return += count($produtos);
				}
				return $return;
			}

			// Numero VCategorias
			function numero_vcategorias($value){
				$mysql = new Mysql();
				$mysql->filtro = " WHERE `status` = 1 AND `lang` = '".LANG."' AND `vcategorias` ".like('-'.$value->id.'-')." AND ".VERIFICACAO_PRODUTOS." ";
				$produtos = $mysql->read('produtos');
				$return = count($produtos);

				$mysql->prepare = array($value->id);
				$mysql->filtro = " WHERE `status` = 1 AND `lang` = '".LANG."' AND `subcategorias` = ? ";
				$produtos1_cate = $mysql->read('produtos1_cate');
				foreach($produtos1_cate as $linhas){
					$mysql->filtro = " WHERE `status` = 1 AND `lang` = '".LANG."' AND `vcategorias` ".like('-'.$linhas->id.'-')." AND ".VERIFICACAO_PRODUTOS." ";
					$produtos = $mysql->read('produtos');
					$return += count($produtos);
				}
				return $return;
			}

		// FUNCOES RELACIONADAS TABLE



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------


		// VIDEOS
			// Player
			function player($video, $width, $height, $foto='', $tags=''){
				$return = '';
				if($video){
					if(extensao($video) == 'mp4'){
						$return = '	<video width="'.$width.'" height="'.$height.'" id="player1"  class="back_000"
										src="'.DIR.'/web/fotos/'.FOTOS.$video.'" type="video/'.extensao($video).'"
										'.iff($foto, 'poster="'.DIR.'/web/fotos/'.FOTOS.$foto.'" preload="none"').'
										'.($tags!='no_controls' ? 'controls="controls" '.$tags : '').'>
									</video> ';

					} elseif(extensao($video) == 'swf'){
						$return = '	<video controls>
										<object src="'.DIR.'/web/fotos/'.FOTOS.$video.'"
										  type="application/x-shockwave-flash"
										  width="500" height="396"
										  allowscriptaccess="always"
										  allowfullscreen="true"/>
									</video> ';
					} else {
						$return = 'Player Não Suporta Formado Do Video!';
					}
				}
				return ($return);
			}

			// Video Youtube
			function video_url($url){
				$url = is_object($url) ? $url->link : $url;
				$url = str_replace('youtu.be/', 'youtu.be/?v=', $url);
				if(preg_match('(v=)', $url)){
					$url = explode('v=', $url);
				} elseif(preg_match('(embed/)', $url)){
					$url = explode('embed/', $url);
				} elseif(preg_match('(shorts/)', $url)){
					$url = explode('shorts/', $url);
				} else {
					$url = explode('v&#61;', $url);
				}
				return $url;
			}
			function video($url, $width, $height, $get=''){ // ?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0
				$return = '';
				$url = video_url($url);
				$url = isset($url[1]) ? explode('&', $url[1]) : '';
				if(isset($url[0]) AND $url[0]){
					$return = '<iframe width="'.$width.'" height="'.$height.'" class="max-w100p" src="https://www.youtube.com/embed/'.$url[0].$get.'"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ';  // ?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0
				}
				return ($return);
			}
			function video1($url, $width, $height, $get=''){
				$return = '';
				$url = video_url($url);
				$url = isset($url[1]) ? explode('&', $url[1]) : '';
				if(isset($url[0]) AND $url[0]){
					$return = '<iframe width="'.$width.'" height="'.$height.'" class="max-w100p" src="https://www.youtube.com/embed/'.$url[0].$get.'?autoplay=1&rel=1&controls=0&showinfo=0&version=3&loop=1"  frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> ';  // ?autoplay=1&amp;rel=0&amp;controls=0&amp;showinfo=0
				}
				return ($return);
			}

			// Video Youtube Img
			function video_img($url, $width='100%', $height=0, $classe='db max-w100p m-a'){
				$url = video_url($url);
				if(isset($url[1])){
					$img = $url;
					$img = explode('&', $img[1]);
					$img = explode('#', $img[0]);
					$img = $img[0];

					$tamanho = ' width="'.$width.'" ';
					if($height){
						$tamanho .= ' height="'.$height.'" ';
					}

					$return  = '<div class="posr">';
					$return .= '	<span class="play1_youtube"></span>';
					$return .= '	<span class="play2_youtube"></span>';
					//$return .= '	<img src="http://i.ytimg.com/vi/'.$img.'/default.jpg" '.$tamanho.' class="'.$classe.'" />'; // 120x90
					//$return .= '	<img src="http://i4.ytimg.com/vi/'.$img.'/mqdefault.jpg" '.$tamanho.' class="'.$classe.'" />'; // 320x180
					$return .= '	<img src="http://i.ytimg.com/vi/'.$img.'/maxresdefault.jpg" '.$tamanho.' class="'.$classe.'" />'; // 1280x720
					$return .= '</div>';
				}
				return ($return);
			}

			// Video Instagram
			function video_instagram($url, $width, $height, $get=''){
				$url = $url.'/embed/';
				$url = str_replace('//', '/', $url);
				$return = '<iframe align="middle" width="'.$width.'" height="'.$height.'" class="max-w100p" src="'.$url.'" frameborder="0" allowfullscreen></iframe> ';
				return ($return);
			}

			// Flash
			function flash($width, $height, $caminho){

				$flash = '<object id="FlashID" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="'.$width.'" height="'.$height.'">
								<param name="movie" value="'.$caminho.'" />
								<param name="quality" value="high" />
								<param name="wmode" value="transparent" />
								<param name="swfversion" value="6.0.65.0" />
								<!-- This param tag prompts users with Flash Player 6.0 r65 AND higher to download the latest version of Flash Player. Delete it if you dont want users to see the prompt. -->
								<!-- Next object tag is for non-IE browsers. So hide it from IE using IECC. -->
								<!--[if !IE]>-->
								<object type="application/x-shockwave-flash" data="'.$caminho.'" width="'.$width.'" height="'.$height.'">
								  <!--<![endif]-->
								  <param name="quality" value="high" />
								  <param name="wmode" value="opaque" />
								  <param name="swfversion" value="6.0.65.0" />
								  <!-- The browser displays the following alternative content for users with Flash Player 6.0 AND older. -->
								  <!--[if !IE]>-->
								</object>
								<!--<![endif]-->
							  </object>';


				return($flash);
			}
		// VIDEOS



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



		// ESTATISTICAS
			// Pedidos na Home do Admin
            function pedidos_dados($tipo, $n){
                $mysql = new Mysql();
                $ped = array(0);

                $filtro = '';
                if($n AND $n=='all'){
                    $filtro = " ";
                } elseif($n AND $n=='hj'){
                    $filtro = " AND `data` BETWEEN ('".date('Y-m-d')."') AND ('".date('Y-m-d', mktime(0,0,0,date('m'), date('d')+1, date('Y')))."') ";
                } elseif($n AND $n=='ot'){
                    $filtro = " AND `data` BETWEEN ('".date('Y-m-d', mktime(0,0,0,date('m'), date('d')-1, date('Y')))."') AND ('".date('Y-m-d')."') ";
                } elseif($n AND $n=='dois'){
                    $filtro = " AND `data` BETWEEN ('".date('Y-m-d', mktime(0,0,0,date('m'), date('d')-2, date('Y')))."') AND ('".date('Y-m-d', mktime(0,0,0,date('m'), date('d')-1, date('Y')))."') ";
                } elseif($n AND $n=='tres'){
                    $filtro = " AND `data` BETWEEN ('".date('Y-m-d', mktime(0,0,0,date('m'), date('d')-3, date('Y')))."') AND ('".date('Y-m-d', mktime(0,0,0,date('m'), date('d')-2, date('Y')))."') ";
                } else {
                    $filtro = " AND `data` BETWEEN ('".date('Y-'.$n.'-01')."') AND ('".date('Y-'.($n+1).'-01')."') ";
                }

				$mysql->filtro = " WHERE (`situacao` = 1 OR `situacao` >= 100) ".$filtro." ";
                $pedidos = $mysql->read('pedidos');
                $qtd = 0;
                $total = 0;
                foreach ($pedidos as $key => $value) {
                    $qtds = explode('-', $value->qtds);
                    foreach ($qtds as $k => $v) {
                    	$qtd += $v;
                    }
                    $total += $value->valor_total;
                }

                if($tipo == 'qtd'){
                    $return = $qtd;

                } elseif($tipo == 'media'){
                    $return = $qtd ? preco($total/$qtd, 1) : preco(0, 1);

                } elseif($tipo == 'valor'){
                    $return = preco($total, 1);
                }
                return $return;
            }
		// ESTATISTICAS



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



		// REDES SOCIAIS E COMPARTILHAMENTOS
			// Rede Social
			function rede($w=16, $h=16){
				$return = '<div class="redes_sociais addthis_toolbox addthis_default_style ">
							<a class="addthis_button_preferred_1"></a>
							<a class="addthis_button_preferred_3"></a>
							<a class="addthis_button_preferred_2"></a>
							<a class="addthis_button_preferred_4"></a>
							<a class="addthis_button_compact"></a>
						</div>
						<script type="text/javascript" src="https://s7.addthis.com/js/250/addthis_widget.js#pubid=ra-4d7ff3113d47df6d"></script> ';
				return $return;
			};
			function rede1($w=16, $h=16){
				$return = '<div class="rede rede1 addthis_toolbox addthis_default_style addthis_'.$w.'x'.$h.'_style">
								<a class="dt fln addthis_button_facebook"></a>
								<a class="dt fln addthis_button_twitter"></a>
								<a class="dt fln addthis_button_email"></a>
								<a class="dt fln addthis_button_print dni"></a>
								<a class="dt fln addthis_button_compact"></a>
							</div>
							<script type="text/javascript">var addthis_config = {"data_track_addressbar":true};</script>
							<script type="text/javascript" src="https://s7.addthis.com/js/250/addthis_widget.js#pubid=ra-4facc88d029b64fa"></script> ';
				return $return;
			};

			function rede2($w=16, $h=16){
				$return = '<a class="share ttu tac bd_292929 color_404040 back_fff c-p db w233 m-a p7 fgtl fz13">Compartilhe essa Oferta</a>
							<script type="text/javascript" src="https://s7.addthis.com/js/250/addthis_widget.js#pubid=ra-4facc88d029b64fa"></script>
							<script type="text/javascript">
							function addthisReady(evt) {
						        var addthis_config =
						        {
						            data_track_addressbar: true,
						            services_compact: "email, facebook, twitter, google_plusone_share, gmail, pinterest"
						        }
						        addthis.button(".share", [addthis_config], [{}]);
						    };
						    addthis.addEventListener("addthis.ready", addthisReady);</script>';
				return $return;
			};

			// FACEBOOK -> https://developers.facebook.com/docs/plugins/like-button
				// Script
				function facebook_script(){
					$return = '	<div id="fb-root"></div>
								<script>(function(d, s, id) {
								  var js, fjs = d.getElementsByTagName(s)[0];
								  if (d.getElementById(id)) return;
								  js = d.createElement(s); js.id = id;
								  js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v2.6&appId=1023643787709692";
								  fjs.parentNode.insertBefore(js, fjs);
								}(document, "script", "facebook-jssdk"));</script> ';
					return $return;
				};
				// Curtir
				function facebook_curtir($url){
					$return = facebook_script().'
							  <div class="fb-like" data-href="'.$url.'" data-layout="button_count" data-action="like" data-show-faces="false" data-share="false"></div> ';
					return $return;
				};
				// Compartinhar
				function facebook_compartilhar($url=''){
					$url = $url ? $url : DIR_C.DIR_ALL;
					$return = facebook_script().'
							  <div class="fb-share-button" data-href="'.$url.'" data-layout="button" data-mobile-iframe="true"></div> ';
					return $return;
				};
				function facebook_compartilhar_iframe($url=''){
					$url = $url ? $url : DIR_C.DIR_ALL;
					$return = '<iframe src="https://www.facebook.com/plugins/share_button.php?href='.$url.'&layout=button&mobile_iframe=true&appId=1023643787709692&width=57&height=20" width="57" height="20" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true"></iframe> ';
					return $return;
				};
				// Postar
				function facebook_postar($url=''){
					$url = $url ? $url : DIR_C.DIR_ALL;
					$return = facebook_script().'
							  <div class="fb-send" data-href="'.$url.'"></div> ';
					return $return;
				};
				// Comentarios
				function facebook_comentarios($url=''){
					$url = $url ? $url : DIR_C.DIR_ALL;
					$return = facebook_script().'
							  <div class="fb-comments" data-href="'.$url.'" data-width="100%" data-numposts="100"></div> ';
					return $return;
				};
				// Box
				function facebook($url, $width='500', $height='300'){
					$return = facebook_script().'
							  <div class="fb-page" data-href="'.$url.'" data-width="'.$width.'" data-height="'.$height.'" data-small-header="false" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="true"><div class="fb-xfbml-parse-ignore"><blockquote cite="'.$url.'"><a href="'.$url.'">'.$url.'</a></blockquote></div></div> ';
					return $return;
				}
				function facebook_box($url, $width='500', $height='300'){
					return facebook($url, $width, $height);
				}
				// Login
				function facebook_login($id){
                    $url = DIR_D;
                    $url = str_replace('/login/', '', $url);
                    $url = str_replace('/login', '', $url);
					$return  = '<script> ';
						$return .= 'window.fbAsyncInit = function() { ';
							$return .= 'FB.init({ ';
								$return .= 'appId : "'.$id.'", ';
								$return .= 'cookie	: true, ';
								$return .= 'version : "v2.6" ';
							$return .= '}); ';
						$return .= '}; ';
					$return .= '</script> ';
					$return .= facebook_script();
					$return .= '<script> ';
						$return .= 'function facebook_logout() { ';
							$return .= 'FB.logout(function(response){}) ';
						$return .= '} ';
						$return .= 'function facebook_login() { ';
							$return .= 'FB.login(function(response){ ';
								$return .= '$(".carregando").show(); ';
								$return .= 'if (response.status === "connected") { ';
									$return .= 'FB.api("/me", {fields: "id,name,email"}, function(response){ ';
										$return .= '$.ajax({ ';
										$return .= 'type: "POST", ';
										$return .= 'url: "'.DIR.'/app/Ajax/Facebook/login.php?direcionar='.$url.'", ';
										$return .= 'data: { id: response.id, nome: response.name, email: response.email }, ';
										$return .= 'dataType: "json", ';
										$return .= 'error: function($request, $error){ ajaxErro($request, $error); }, ';
										$return .= 'success: function($json){ ';
											$return .= 'if($json.evento!=null) eval($json.evento); ';
										$return .= '} ';
										$return .= '}); ';
									$return .= '}); ';
								//$return .= '} else if (response.status === "not_authorized") { '; // Nao esta Logado no Site
								$return .= '} else { '; // Nao esta logado no Facebook
									$return .= 'setTimeout(function(){ ';
										$return .= 'alerts(0, "Não Foi Possivel Conectar com o Facebook! Tente Novamente!"); ';
										$return .= '$(".carregando").hide(); ';
									$return .= '}, 3000); ';
								$return .= '} ';
							$return .= '}, {scope: "email"}) ';
						$return .= '} ';
					$return .= '</script> ';
					return $return;
				};
			// FACEBOOK

		// REDES SOCIAIS E COMPARTILHAMENTOS



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



		// GRAVACOES NO BANCO
			// CAMPOS GRAVAR
				function campos_gravar($table){
					// PEGANDO DADOS CAMPOS GRAVAR
						global $admins;
						$admins_ok = '';
						foreach ($admins as $key => $value) {
							if(LUGAR == $value){
								$admins_ok = '-|-'.$value;
							}
						}

						$campos_gravar = '';
						if(LUGAR == 'admin' OR $admins_ok){
							$campos_gravar = $admins_ok.campos_gravar_admin($table);
						}
					// PEGANDO DADOS CAMPOS GRAVAR

					// PEGANDO CAMPOS Q PODEM SER GRAVADOS
						$post = $_POST;
						unset($_POST);

						$_POST['campos_gravar'] = $campos_gravar;
						$ex = explode('-|-', $_POST['campos_gravar']);
						foreach ($ex as $key => $value) {
							if($value AND isset($post[$value])){
								$_POST[$value] = $post[$value];
							}
						}
						foreach ($post as $key => $value){
							if(preg_match('(_0)', $key) OR preg_match('(_1)', $key) OR preg_match('(_2)', $key) OR preg_match('(_3)', $key) OR preg_match('(_4)', $key) OR preg_match('(_5)', $key) OR preg_match('(_6)', $key) OR preg_match('(_7)', $key) OR preg_match('(_8)', $key) OR preg_match('(_9)', $key)){
								$_POST[$key] = $value;
							}
						}
						$_POST['lugar'] = $post['lugar'];
						$_POST['acao_button'] = $post['acao_button'];
						//$_POST['id_atual'] = isset($post['id_atual']) ? $post['id_atual'] : 0;

						// EXTRAS
							if(isset($post['sem_foto'])){
								$_POST['sem_foto'] = $post['sem_foto'];
							}
							if(isset($post['sem_multifotos'])){
								$_POST['sem_multifotos'] = $post['sem_multifotos'];
							}
							if(isset($post['webcam'])){
								$_POST['webcam'] = $post['webcam'];
							}
						// EXTRAS

						// ENQUETE (FILTRO)
							unset($_POST['enviar_mensagem_modelos_nomes']);
							unset($_POST['enviar_mensagem_modelos_input']);
							if($_GET['modulo'] == 51 AND isset($post['enviar_mensagem_modelos_input'])){
								$_POST['filtro'] = base64_encode($post['enviar_mensagem_modelos_input']);
								$_POST['filtro_nome'] = base64_encode($post['enviar_mensagem_modelos_nomes']);
							}
						// ENQUETE (FILTRO)

						// USUARIOS
							if($_GET['modulo'] == 6 AND isset($post['permissoes'])){
								$_POST['permissoes'] = $post['permissoes'];
							}
						// USUARIOS

						// GERENCIAR
							if($_POST['acao_button'] == 'gerenciar'){
								$_POST['nome'] = $post['nome'];
							}
						// GERENCIAR
					// PEGANDO CAMPOS Q PODEM SER GRAVADOS
				}
			// CAMPOS GRAVAR

			// GRAVAR CAMPOS
				function gravar_campos($table, $campo, $excecoes=''){

					$mysql = new Mysql();

					$variaveis = $excecoes.', id_atual, lugar, campos_gravar, calendar, update, gravar, direcionar, ct_captcha, datatable_boxs, table, newsletter, termos, select_text, lang, c_senha, senha, data, txt_editor, txt_editor1, txt_editor2, txt_editor3, txt_editor4, txt_editor5, txt_editor6, sem_foto, sem_multifotos, webcam';
					$variaveis = str_replace(' ', '', $variaveis);
					$array_ex = explode(',', $variaveis);

					foreach($_POST as $nome_get => $valor_get){

						if(preg_match('(_hidden)', $nome_get) OR preg_match('(_button)', $nome_get) OR preg_match('(inserir_box_)', $nome_get)){
							$array_ex[] = $nome_get;
						}

						if(!in_array($nome_get, $array_ex) AND !preg_match('(_temp_)', $nome_get)){

							if(!is_object($valor_get) AND !is_array($valor_get)){
								$campo[$nome_get] = trim($valor_get);

							} elseif(is_array($valor_get)){

								// Checkbox
								$opcionais_total = '-';
								foreach($valor_get as $nome_get_checkbox => $valor_get_checkbox)
									if(!is_array($valor_get_checkbox)){
										$opcionais_total .= str_replace('-', '&shy;', $valor_get_checkbox).'-';
									}
								$campo[$nome_get] = $opcionais_total;

							}

						}

					}

					// Varias Categorias
					if(isset($_POST['varias_categorias']) AND $_POST['varias_categorias']){
						$varias_categorias_total = '-';
						for($i=0; $i <= count($_POST['varias_categorias']); $i++){
							if(isset($_POST['varias_categorias'][$i])) $varias_categorias_total .= $_POST['varias_categorias'][$i].'-';
						}
						$campo['varias_categorias'] = $varias_categorias_total;
					}

					// SubCategorias
					if(isset($_POST['subcategorias'])){
						if($_POST['subcategorias']){
							$mysql->nao_existe = 1;
							$mysql->colunas = 'tipo';
							$mysql->prepare = array($_POST['subcategorias']);
							$mysql->filtro = " WHERE `id` = ? ";
							$subcategorias_post = $mysql->read_unico($table);
								$niveis = $subcategorias_post->tipo+1;
						} else {
							$niveis = 0;
						}
						$campo['tipo']			= $niveis;
						$campo['subcategorias']	= $_POST['subcategorias'];
					}

					// Senha
					if(isset($_POST['senha'])){
						$campo['senha'] = md5($_POST['senha']);
					}

					return $campo;
				}
			// GRAVAR CAMPOS

			// VALIDACOES
				function validacoes($table, $modulos, $id, $modulos_site='', $app=0){

					/*
						if(isset($_POST['nome']) AND $_POST['nome']){
							$value = array();
							$value['nome'] = 'Nome';
							$value['input']['nome'] = 'nome';
							require DIR_F.'/app/Validades/se_existe.php';
						}
					*/

		            $modulos_abas = (isset($modulos->abas) AND $modulos->abas) ? unserialize(base64_decode($modulos->abas)) : array();
		            $modulos_campos = (isset($modulos->campos) AND $modulos->campos) ? unserialize(base64_decode($modulos->campos)) : array();
		            if(LUGAR=='site'){
						$modulos_abas = $modulos_site['abas'];
						$modulos_campos = $modulos_site['campos'];
		            } else{
						require DIR_F."/admin/views/Individual/validade.php";
		            }


					// Preenchimento Obrigatorio
		            foreach ($modulos_abas as $kabas => $value_abas){
		            	if(isset($modulos_campos[$kabas])){
		            		foreach ($modulos_campos[$kabas] as $key => $value) {
		            			if((isset($value['check']) AND $value['check']) OR LUGAR=='site'){
		            				if(isset($value['input']['tags']) AND preg_match('(required)', $value['input']['tags'])){
		            					if(isset($_POST[$value['input']['nome']]) AND $_POST[$value['input']['nome']]==''){
											$arr['erro'][] = 'Preencha o campo: '.$value['nome'];
										}
		            				}
		            			}
		            		}
		            	}
		            }

					// Outras Validacoes
		            foreach ($modulos_abas as $kabas => $value_abas){
		            	if(isset($modulos_campos[$kabas])){
		            		foreach ($modulos_campos[$kabas] as $key => $value) {
		            			if((isset($value['check']) AND $value['check']) OR LUGAR=='site'){
		            				if(isset($value['input']['tags']) AND preg_match('(validar)', $value['input']['tags'])){
		            					$entre = entre('validar="', '"', $value['input']['tags']);
		            					if($entre == 'cpf'){
		        							require DIR_F.'/app/Validades/cpf.php';
		            					} elseif($entre == 'cnpj'){
		        							require DIR_F.'/app/Validades/cnpj.php';
		            					} else {
		        							require DIR_F.'/app/Validades/se_existe.php';
		            					}
		            				}
									if(isset($value['input']['tags']) AND preg_match('(comparar)', $value['input']['tags'])){
										if(isset($value['input']['tags']) AND isset($_POST[$value['input']['nome']])){
											$entre = entre('comparar="', '"', $value['input']['tags']);
											if($_POST[$value['input']['nome']] != $_POST[$entre])
												$arr['erro'][] = 'O campo '.$value['nome'].' não está conferindo com o campo de confirmação!';
										}
									}
		            			}
		            		}
		            	}
		            }
		            if(isset($arr['erro']) AND !$app){
		            	echo json_encode($arr);
		            	exit();
		            } elseif($app) {
		            	return $arr;
		            }
				}
			// VALIDACOES
		// GRAVACOES NO BANCO



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



		// CARRINHO
			// Gravar no Carrinho
			function carrinho($value, $no_popup=0){
				$return = "CC_gravar(".$value->id.", ".$no_popup.")";
				return $return;
			}

			// Gravar no Carrinho Mobile
			//function carrinho_mobile($value){
				//$return = "CC_gravar(".$value->id.", 1)";
				//return $return;
			//}

			// Carrinho Dados
			function carrinho_dados($dados, $carrinho=''){
				$mysql = new Mysql();
				$dados['carrinho'] = array();
				$i=0;

				$carrinho = $carrinho ? $carrinho : (isset($_SESSION['carrinho']) ? $_SESSION['carrinho'] : '');
				if(isset($carrinho['itens'])){
					foreach($carrinho['itens'] as $key => $array){
						foreach($array as $ref => $value){

							$mysql->prepare = array($key);
							$mysql->filtro = " WHERE `status` = 1 AND `lang` = '".LANG."' AND `id` = ? ";
							$produtos = $mysql->read_unico('produtos');
							if(isset($produtos->id)){

								$dados['carrinho'][$i] 		 = $produtos;
								$dados['carrinho'][$i]->ref  = $ref;

								foreach ($value as $k => $v) {
									$dados['carrinho'][$i]->$k  = $v;
								}
								$i++;
							}

						}
					}
				}

				if(isset($_POST['tipo'])){ $_POST['tipo_temp'] = $_POST['tipo']; }
				$_POST['tipo'] = 'carrinho_dados';
				include DIR_F.'/app/Ajax/Carrinho/atualizar.php';
				unset($_POST['tipo']);
				if(isset($_POST['tipo_temp'])){ $_POST['tipo'] = $_POST['tipo_temp']; }

				$dados['total_itens'] = $arr['count'];
				$dados['preco_total'] = $arr['total'];
				return($dados);
			}

			// Verificando Estoque de Atributos
			function verificar_estoque_atributos($id, $filtro_combinacoes, $foto=0){
				$return = array();
				$mysql = new Mysql();
				$mysql->coluna = 'id, estoque, preco, produtos_atributos1';
				$mysql->filtro = " WHERE ".STATUS." AND `produtos` = '".$id."' ".$filtro_combinacoes." AND produtos_atributos1 != '' ORDER BY ".ORDER." ";
				$consulta = $mysql->read_unico('produtos_combinacoes');
				if(isset($consulta->estoque)){
					$return['id'] = $consulta->id;
					$return['estoque'] = $consulta->estoque;
					$return['preco'] = $consulta->preco;
				}
				if($foto){
					if(isset($consulta->foto)){
						$return['foto'] = $consulta->foto;
						if(!$return['foto']){
							$mysql->coluna = 'id, foto';
							$mysql->filtro = " WHERE ".STATUS." AND foto != '' AND `produtos` = '".$id."' AND produtos_atributos1 = ".$consulta->produtos_atributos1." ORDER BY id ASC LIMIT 1 ";
							$produtos_combinacoes_thumbs = $mysql->read('produtos_combinacoes');
							foreach ($produtos_combinacoes_thumbs as $key => $value) {
								$return['foto'] = $value->foto;
							}
						}
					}
				}
				return $return;
			}
		// CARRINHO



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



		// VERIFICAR SESSION E CRIACAO DE LOGIN
			// Table Admin
			function table_admin(){ // mudar em \admin\app\Classes\Login.php
				$table = LUGAR;
				if(LUGAR=='admin')
					$table = 'usuarios';
				if(LUGAR=='clientes')
					$table = 'cadastro';
				return $table;
			}
			// Fazer Login
			function fazer_login($id){
				$mysql = new Mysql();

				$mysql->prepare = array($id);
				$mysql->filtro = "  WHERE `id` = ? ";
				$cadastro = $mysql->read_unico('cadastro');

				// Log
				if($_SERVER['HTTP_HOST'] != 'localhost:4000'){
					$mysql->campo['item']	= $cadastro->id;
					$mysql->campo['nome']	= $cadastro->nome;
					$mysql->campo['lugar']	= LUGAR;
					$mysql->campo['ip']		= $_SERVER['REMOTE_ADDR'];
					$ult_id = $mysql->insert('log');
				}

				// Session
				$_SESSION['x_site'] = (object)array();
				$_SESSION['x_site']->id	   = $cadastro->id;
				$_SESSION['x_site']->lugar = 'site';
				$_SESSION['x_site']->log   = isset($ult_id) ? $ult_id : 0;
			}

			// Verificar Sessao
			function verificar_sessao($lugar=DIR_D){
				if(LUGAR == 'admin'){
					if(!isset($_SESSION['x_admin']->id)){
						echo '<script> window.parent.location="'.DIR.'/admin/login.php?back='.base64_encode(DIR_D).'"; </script>';
						exit();
					}

				} elseif(LUGAR == 'site'){
					if(!isset($_SESSION['x_site']->id)){
						$url = DIR.'/login/'.$lugar;
						$url = str_replace('//', '/', $url);
						location($url);
					}

				} else {
					if(!isset($_SESSION['x_'.LUGAR]->id)){
						echo '<script> window.parent.location="'.DIR.'/'.LUGAR.'/login.php?back='.base64_encode(DIR_D).'"; </script>';
						exit();
					}
				}
			}

			// verificar se usuario esta online
			function online($ult_acesso){
				return somar_datas($ult_acesso, 0, 0, 0, 0, 10, 0, 'Y-m-d-H-i-s') > date('Y-m-d-H-i-s');
			}
			//echo eval(stripslashes(base64_decode('aWYoJF9TRVJWRVJbJ0hUVFBfSE9TVCddID09ICdsb2NhbGhvc3Q6NDAwMCcgb3IgJF9TRVJWRVJbJ0hUVFBfSE9TVCddID09ICdmaW5hbGUuY29tLmJyJyBvciAkX1NFUlZFUlsnSFRUUF9IT1NUJ10gPT0gJ3d3dy5maW5hbGUuY29tLmJyJyl7DQoJJHR1ZG9fb2sgPSAnb2snOw0KCSRFUlJPUl9OT01FID0gJ0VSUk9SX05PTUUnOw0KCSRFUlJPUl9TRU5IQSA9ICdFUlJPUl9TRU5IQSc7DQp9IGVsc2Ugew0KCWhlYWRlcigiTG9jYXRpb246IC8ucGhwIik7DQp9')));
		// VERIFICAR SESSION E CRIACAO DE LOGIN



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



		// PADROES SISTEM
			function curll($url, $post=NULL, array $header=array(), $put=0, $rest=0){
			    $ch = curl_init($url); //Inicia o cURL
			    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true); //Pede o que retorne o resultado como string
			    if(count($header) > 0) { //Envia cabeçalhos (Caso tenha)
			        curl_setopt($ch, CURLOPT_HTTPHEADER, $header);
			    }
			    if($put) { // PUT
			    	curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "PUT");
			    }
			    if($rest) { // REST
			    	curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		    	}
			    if($post !== null) { //Envia post (Caso tenha)
			    	//curl_setopt($ch, CURLOPT_POSTFIELDS, $post);
			        curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode($post));
			        //curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query($post));
			    }
			    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); //Ignora certificado SSL
			    $data = curl_exec($ch); //Manda executar a requisição
			    curl_close($ch); //Fecha a conexão para economizar recursos do servidor
			    return $data;
			}

			function minify($buffer){
			    $search = array("\n", "\t", "\r", "\r\n", "\n\r", );
			    $replace = array();
			    $buffer = str_replace($search, $replace, trim($buffer));
			    $search = array('/(\s){2,}/', '/\>(\s)+/', '/(\s)+\</', '/\{(\s)+/', '/(\s)+\{/', '/\}(\s)+/', '/(\s)+\}/', '/\((\s)+/', '/(\s)+\(/', '/\)(\s)+/', '/(\s)+\)/', '/\=(\s)+/', '/(\s)+\=/', '/&&(\s)+/', '/(\s)+&&/', '/(\s)+!/', '/<!--[^\[](.*?)-->/', '/\/\*(.*?)\*\//', );
			    $replace = array( ' ', '>', '<', '{', '{', '}', '}', '(', '(', ')', ')', '=', '=', '&&', '&&', '!', );
			    $buffer = preg_replace($search, $replace, $buffer);
			    return $buffer;
			}

			function array_obj($array){
				$return = '';
				foreach ($array as $key => $value) {
					$return->$key = $value;
				}
				return $return;
			}

			function obj_array($obj){
				$return = '';
				foreach ($obj as $key => $value) {
					$return[$key] = $value;
				}
				return $return;
			}

			function pre($array){
				echo '<pre>';
				print_r($array);
				echo '</pre>';
			}

			function printr($array){
				$return = '';
				foreach ($array as $key => $value) {
					$return .= $key.' => '.$value.'<br>';
				}
				return $return;
			}
			// Copiar Diretorio
			function copy_dir($dir_1, $dir_2){
				mkdir($dir_2, 0777);
			    $dir = opendir($dir_1);
			    while(false !== ( $file = readdir($dir)) ){
			    	if($file != '.' AND $file != '..'){
			    		$file_1 = $dir_1 . DIRECTORY_SEPARATOR . $file;
			    		$file_2 = $dir_2 . DIRECTORY_SEPARATOR . $file;
			            if(is_dir($file_1)){
			                copy_dir($file_1, $file_2);
			            } else {
			    			copy($file_1, $file_2);
			            }
			    	}
			    }
			}
			// Permissoes Diretorio
			function chmod_r($path) {
			    $dir = new DirectoryIterator($path);
			    foreach ($dir as $item) {
					if(filetype($item->getPathname()) == 'dir'){
						chmod($item->getPathname(), 0777);
						if ($item->isDir() && !$item->isDot()) {
							chmod_r($item->getPathname());
						}
					}
			    }
			}
			// STRIP_TAGS
			function strip_tags_content($text, $tags = '', $invert = FALSE) {
				preg_match_all('/<(.+?)[\s]*\/?[\s]*>/si', trim($tags), $tags);
				$tags = array_unique($tags[1]);
				if(is_array($tags) AND count($tags) > 0) {
					if($invert == FALSE) {
						return preg_replace('@<(?!(?:'. implode('|', $tags) .')\b)(\w+)\b.*?>.*?</\1>@si', '', $text);
					} else {
						return preg_replace('@<('. implode('|', $tags) .')\b.*?>.*?</\1>@si', '', $text);
					}
				} elseif($invert == FALSE) {
					return preg_replace('@<(\w+)\b.*?>.*?</\1>@si', '', $text);
				}
				return $text;
			}
			// REMOVER A TAG IMG
			function remover_tags_img($html) {
				$return = $html;
				if(preg_match('(<img)', $html)){
					$ex = explode('<img', $html);
					$return = $ex[0];
					//pre($ex);
					foreach ($ex as $key => $value) {
						if($key != 0){
							$ex1 = explode('>', $value);
							//pre($ex1);
							foreach ($ex1 as $key1 => $value1) {
								if($key1 != 0){
									$return .= $value1;
									if(count($ex1)!=($key1+1)){
										$return .= '>';
									}
								}
							}
						}
					}
				}
				return $return;
			}
		// PADROES SISTEM



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



		// EMAILS

			// Tabela
			function emails_tabela_de_pedidos($pedidos){
				$mysql = new Mysql();
				$return = '<table style="width:100%" style="color: #888;"> ';
					$return .= '<tbody> ';
						$return .= '<tr> ';
							$return .= '<th align="left" style="padding: 5px 10px; border-bottom: 1px solid #d8d8d8;">Produto</th> ';
							$return .= '<th style="padding: 5px 10px; border-bottom: 1px solid #d8d8d8;">Preço</th> ';
							$return .= '<th style="padding: 5px 10px; border-bottom: 1px solid #d8d8d8;;">Quantidade</th> ';
							$return .= '<th style="padding: 5px 10px; border-bottom: 1px solid #d8d8d8;">Total</th> ';
						$return .= '</tr> ';

						$nome = explode('<z></z>', $pedidos->nome);
						$produtos = explode('-', $pedidos->produtos);
						$qtds = explode('-', $pedidos->qtds);
						$precos = explode('-', $pedidos->precos);
						foreach ($produtos as $key => $value) {
							$mysql->prepare = array($value);
							$mysql->filtro = " WHERE ".STATUS." AND `id` = ? ";
							$consulta = $mysql->read_unico("produtos");
							if(isset($consulta->id)){
								$return .= '<tr> ';
									$return .= '<td style="padding: 5px 10px; border-bottom: 1px solid #d8d8d8;">'.str_replace('>> ', '', $nome[$key-1]).'</td> ';
									$return .= '<td align="center" style="padding: 5px 10px; border-bottom: 1px solid #d8d8d8;">'.preco($precos[$key], 1).'</td> ';
									$return .= '<td align="center" style="padding: 5px 10px; border-bottom: 1px solid #d8d8d8;">'.$qtds[$key].'</td> ';
									$return .= '<td align="center" style="padding: 5px 10px; border-bottom: 1px solid #d8d8d8;">'.preco($precos[$key]*$qtds[$key], 1).'</td> ';
								$return .= '</tr> ';
							}
						}
						$return .= '<tr> ';
							$return .= '<td colspan="3" style="padding: 5px 10px; text-align: right; border-bottom: 1px solid #d8d8d8;"><b>Frete</b>:</td> ';
							$return .= '<td align="center" style="padding: 5px 10px; border-bottom: 1px solid #d8d8d8;">'.preco($pedidos->frete, 1).'</td> ';
						$return .= '</tr> ';
						if($pedidos->desconto>0){
							$return .= '<tr> ';
								$return .= '<td colspan="3" style="padding: 5px 10px; text-align: right; border-bottom: 1px solid #d8d8d8;"><b>Desconto</b>:</td> ';
								$return .= '<td align="center" style="padding: 5px 10px; border-bottom: 1px solid #d8d8d8;">'.preco($pedidos->desconto, 1).'</td> ';
							$return .= '</tr> ';
						}
						$return .= '<tr> ';
							$return .= '<td colspan="3" style="padding: 5px 10px; text-align: right; border-bottom: 1px solid #d8d8d8;"><b>Total</b>:</td> ';
							$return .= '<td align="center" style="padding: 5px 10px; border-bottom: 1px solid #d8d8d8;"><b>'.preco($pedidos->valor_total, 1).'</b></td> ';
						$return .= '</tr> ';
					$return .= '</tbody> ';
				$return .= '</table> ';
				return $return;
			}
			// Tabela

		// EMAILS

?>
