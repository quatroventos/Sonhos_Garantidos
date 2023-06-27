<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();


	if(isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id){

		echo '<link rel="stylesheet" type="text/css" href="'.DIR.'/plugins/style.css" />';
		echo '<div class="w600 pt40 m-a"> ';
			echo '<div class="p30 pl20 pr20 fz16" style="color: #333; border: 1px solid #ccc; border-radius: 5px"> ';

				$mysql->filtro = " where tipo = 'frete' ";
				$consulta = $mysql->read_unico('configs');

				if(isset($_GET['pagar_envio']) AND $_GET['pagar_envio']){		
					if(isset($consulta->melhor_envio_token) AND $consulta->melhor_envio_token){
						$consulta = verificar_token__atualizar_token($consulta, 1);
		
			            $mysql->prepare = array($_GET['id']);
			            $mysql->filtro = " WHERE ".STATUS." AND id = ? AND seller = '".$_SESSION['seller']."' ORDER BY ".ORDER." ";
			            $pedidos = $mysql->read_unico('pedidos');
		
			            $mysql->filtro = " WHERE ".STATUS." AND id = '".$pedidos->cadastro."' ORDER BY ".ORDER." ";
			            $cadastro = $mysql->read_unico('cadastro');
			
			            $carrinho = json_decode(file_get_contents(DIR_F.'/plugins/Json/pedidos/'.$pedidos->id.'.json'));
		
						$produtos_dados = array();
		
						$nomes = explode('zz;zz', $pedidos->nomes);
						$produtos = explode('-', $pedidos->produtos);
						$qtds = explode('-', $pedidos->qtds);
						$precos = explode('-', $pedidos->precos);
		
						$x = 0;
						$produtos_precos = 0;
						foreach ($produtos as $key => $value) {
							if($value){
								$produtos_dados[$x] = array();
								$produtos_dados[$x]['name'] = $nomes[$key];
								$produtos_dados[$x]['quantity'] = $qtds[$key];
								$produtos_dados[$x]['unitary_value'] = $precos[$key];
		
								$produtos_precos = $qtds[$key]*$precos[$key];
								$x++;
							}
						}
		
						$servico = 0;
						$dimensoes_dados = array();
						foreach ($pedidos->json->melhor_envio as $key => $value) {
							if($key == $_SESSION['seller']){
								foreach ($value as $key1 => $value1) {
									if($value1->name == str_replace('melhor_envio_', '', $pedidos->tipo_frete)){
										$servico = $value1->id;
										$x = 0;
										foreach ($value1->packages as $key2 => $value2) {
											$dimensoes_dados[$x] = array();
											$dimensoes_dados[$x]['height'] = $value2->dimensions->height;
											$dimensoes_dados[$x]['width'] = $value2->dimensions->width;
											$dimensoes_dados[$x]['length'] = $value2->dimensions->length;
											$dimensoes_dados[$x]['weight'] = $value2->weight;
											$x++;
										}
									}
								}
							}
						}
		
		
						$post = array();
						$post['service'] = $servico;
						if(isset($_POST['agencia']) AND $_POST['agencia']){
							$post['agency'] = $_POST['agencia'];
						}
		
						$post['from']['name'] = $consulta->nome;
						$post['from']['phone'] = tel_completo($consulta->telefone);
						$post['from']['email'] = $consulta->email;
						$post['from']['document'] = retornar_numero($consulta->cpf);
						$post['from']['company_document'] = retornar_numero($consulta->cnpj);
						$post['from']['state_register'] = $consulta->estados;
						$post['from']['address'] = $consulta->rua;
						$post['from']['complement'] = $consulta->complemento;
						$post['from']['number'] = $consulta->numero;
						$post['from']['district'] = $consulta->bairro;
						$post['from']['city'] = $consulta->cidades;
						$post['from']['state_abbr'] = $consulta->estados;
						$post['from']['country_id'] = "BR";
						$post['from']['postal_code'] = retornar_numero($consulta->cep);
						$post['from']['note'] = $consulta->table.'-'.$consulta->id;
		
						$post['to']['name'] = $cadastro->nome;
						$post['to']['phone'] = tel_completo($cadastro->telefone);
						$post['to']['email'] = $cadastro->email;
						$post['to']['document'] = retornar_numero($cadastro->cpf);
						//$post['to']['company_document'] = retornar_numero($cadastro->cnpj);
						//$post['to']['state_register'] = $carrinho->frete->estados;
						$post['to']['address'] = $carrinho->frete->rua;
						$post['to']['complement'] = $carrinho->frete->complemento;
						$post['to']['number'] = $carrinho->frete->numero;
						$post['to']['district'] = $carrinho->frete->bairro;
						$post['to']['city'] = $carrinho->frete->cidades;
						$post['to']['state_abbr'] = $carrinho->frete->estados;
						$post['to']['country_id'] = "BR";
						$post['to']['postal_code'] = retornar_numero($carrinho->frete->cep);
						$post['to']['note'] = $cadastro->table.'-'.$cadastro->id;
		
						$post['products'] = $produtos_dados;
		
						$post['volumes'] = $dimensoes_dados;
		
						$post['options']['insurance_value'] = $produtos_precos;
						$post['options']['receipt'] = false;
						$post['options']['own_hand'] = false;
						$post['options']['reverse'] = false;
						$post['options']['non_commercial'] = (isset($_POST['nf']) AND $_POST['nf']) ? false : true;
						$post['options']['invoice']['key'] = (isset($_POST['nf']) AND $_POST['nf']) ? $_POST['nf'] : '';
						$post['options']['platform'] = $consulta->razao_social;
						$post['options']['tags'][0]['tag'] = $pedidos->id;
						$post['options']['tags'][0]['url'] = DIR_C.'/minha_conta/meus_pedidos_detalhes/'.$pedidos->id;
						$json = json_encode($post);
		
//echo $json; exit();
//pre($post); exit();
		
						$curl = curl_init();
						curl_setopt_array($curl, array(
							CURLOPT_URL => URL_MELHOR_ENVIO."/api/v2/me/cart",
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
		
		
						$array = json_decode($response);
		
//pre($array); exit();
		
						if(!(isset($array->id) AND $array->id)){
							if(isset($array->message) AND $array->message){
								echo '<div class="pt10 fwb c_vermelho"> ';
									echo 'Erro: ';
									foreach ($array->errors as $key => $value) {
										foreach ($value as $key1 => $value1) {
											if($value1 == 'validation.nfe'){
												echo 'NF Inválida';
											} else {
												echo $value1;
											}
										}
									}
								echo '</div> ';
								echo '<div class="pt10 pb10"><a href="'.DIR.'/admin/?pg=19&mod=pedidos&abrir_menu_pedido='.$pedidos->id.'" class="c_azul link">Vizualizar meu pedido</a></div>';
							}
							if(isset($array->agency[0]) AND $array->agency[0] == 'O campo agency é obrigatório.'){
								if($servico == 3 OR $servico == 4){
									$array->error = 'Agência Jadlog não corresponde ao estado';
								}
							}
							if(isset($array->error) AND $array->error){
								if(preg_match('(Agência Jadlog não corresponde ao estado)', $array->error)){
									$curl = curl_init();
									curl_setopt_array($curl, array(
										CURLOPT_URL => "https://melhorenvio.com.br/api/v2/me/shipment/agencies?company=2&country=BR&state=MG&city=Montes%20claros",
										CURLOPT_RETURNTRANSFER => true,
										CURLOPT_CUSTOMREQUEST => "GET",
									));
									
									$response = curl_exec($curl);
									$err = curl_error($curl);
									curl_close($curl);
									$array = json_decode($response);
		
									echo '<div class="pt10"> ';
										echo '<form method="post" action=""> ';
											echo '<div class="fwb">Selecione a  agência </div> ';
											echo '<div class="pt10"> ';
												echo '<select name="agencia" class="design" required> ';
													echo '<option>Selecione...</option> ';
													foreach ($array as $key => $value) {
														echo '<option value="'.$value->id.'">'.$value->name.' ('.$value->address->address.', '.$value->address->district.' - '.$value->address->city->city.'/'.$value->address->city->state->state_abbr.')</option> ';
													}
												echo '</select> ';
											echo '</div> ';
											echo '<div class="pt10"> ';
												echo '<button class="botao">Enviar</button> ';
											echo '</div> ';
										echo '</form> ';
									echo '</div> ';
		
								} else {
									echo '<div class="pt10 fwb c_vermelho">Erro: '.$array->error.'</div> ';
									echo '<div class="pt10 pb10"><a href="'.DIR.'/admin/?pg=19&mod=pedidos&abrir_menu_pedido='.$pedidos->id.'" class="c_azul link">Vizualizar meu pedido</a></div>';
								}
							}
		
						} else {
							unset($mysql->campo);
							$mysql->campo['melhor_envio_order'] = $array->id;
							$mysql->filtro = " WHERE `id` = '".$pedidos->id."' ";
							$mysql->update('pedidos');
		
							echo '<div class="p40 tac">Será cobrado o valor de '.preco($array->price, 1).'. <a href="'.DIR.'/app/Melhor_Envio/pagar.php?id='.$pedidos->id.'&pagar_envio_debitar=1" class="c_azul link">Clique aqui para prosseguir</a></div>';
						}
		
//pre($post); exit();
//pre($array); exit();
//pre($pedidos); exit();
		
					}
		
		
		
		
		
				} elseif(isset($_GET['pagar_envio_debitar']) AND $_GET['pagar_envio_debitar']){
					if(isset($consulta->melhor_envio_token) AND $consulta->melhor_envio_token){
			
			            $mysql->prepare = array($_GET['id']);
			            $mysql->filtro = " WHERE ".STATUS." AND id = ? AND seller = '".$_SESSION['seller']."' ORDER BY ".ORDER." ";
			            $pedidos = $mysql->read_unico('pedidos');
		
						$post = array();
						$post['mode'] = "private";
						$post['orders'][0] = $pedidos->melhor_envio_order;
						$json = json_encode($post);
		
						$curl = curl_init();
						curl_setopt_array($curl, array(
							CURLOPT_URL => URL_MELHOR_ENVIO."/api/v2/me/shipment/checkout",
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
		
//$response = '{"purchase":{"id":"67bb5399-1cbd-4e7a-ac9a-7059266a1f8b","protocol":"PUR-20220326207","total":85.32,"discount":0,"status":"paid","paid_at":"2022-03-10 11:53:53","canceled_at":null,"created_at":"2022-03-10 11:53:53","updated_at":"2022-03-10 11:53:53","payment":null,"transactions":[{"id":"54479bc4-591c-4056-b5d0-be79e509d7a4","protocol":"TRN-20220357402","value":85.32,"type":"debit","status":"authorized","description":"Pagamento de envios (PUR-20220326207)","authorized_at":"2022-03-10 11:53:53","unauthorized_at":null,"reserved_at":null,"canceled_at":null,"created_at":"2022-03-10 11:53:53","description_internal":null,"reason":{"id":7,"label":"Pagamento de envios","description":""}}],"orders":[{"id":"a1397a49-d368-4dd1-a86b-63ad7914a8cf","protocol":"ORD-20220395539","service_id":2,"agency_id":null,"contract":"9912415671","service_code":null,"quote":85.32,"price":85.32,"coupon":null,"discount":0,"delivery_min":3,"delivery_max":4,"status":"released","reminder":null,"insurance_value":85.01,"weight":null,"width":null,"height":null,"length":null,"diameter":null,"format":"box","billed_weight":5.5,"receipt":false,"own_hand":false,"collect":false,"collect_scheduled_at":null,"reverse":false,"non_commercial":false,"authorization_code":null,"tracking":null,"self_tracking":null,"delivery_receipt":null,"additional_info":null,"cte_key":null,"paid_at":"2022-03-10 11:53:53","generated_at":null,"posted_at":null,"delivered_at":null,"canceled_at":null,"suspended_at":null,"expired_at":null,"created_at":"2022-03-10 11:53:51","updated_at":"2022-03-10 11:53:53","parse_pi_at":null,"from":{"name":"Cervejaria 01","phone":"12345678900","email":"teste@hotmail.com","document":"05395936300","company_document":"61831244000100","state_register":null,"postal_code":"39402758","address":"Rua Guanabara","location_number":"980","complement":null,"district":"Santo Ant\u00f4nio\u00a0","city":"Montes Claros","state_abbr":"MG","country_id":"BR","latitude":null,"longitude":null,"note":"seller-1"},"to":{"name":"Teste","phone":"44444444443","email":"teste@hotmail.com","document":"05395936300","company_document":null,"state_register":null,"postal_code":"18117530","address":"Rua Judith de Campos Machado","location_number":"123","complement":null,"district":"Vila Pedroso","city":"Votorantim","state_abbr":"SP","country_id":"BR","latitude":null,"longitude":null,"note":"cadastro-1"},"service":{"id":2,"name":"SEDEX","status":"available","type":"express","range":"interstate","restrictions":"{\"insurance_value\":{\"min\":0,\"max\":10000},\"formats\":{\"box\":{\"weight\":{\"min\":0.001,\"max\":30},\"width\":{\"min\":11,\"max\":105},\"height\":{\"min\":2,\"max\":105},\"length\":{\"min\":16,\"max\":105},\"sum\":200},\"roll\":{\"weight\":{\"min\":0.001,\"max\":30},\"diameter\":{\"min\":5,\"max\":91},\"length\":{\"min\":18,\"max\":105},\"sum\":200},\"letter\":{\"weight\":{\"min\":0.001,\"max\":0.5},\"width\":{\"min\":11,\"max\":60},\"length\":{\"min\":16,\"max\":60}}}}","requirements":"[\"names\",\"addresses\"]","optionals":"[\"AR\",\"MP\",\"VD\"]","company":{"id":1,"name":"Correios","status":"available","picture":"\/images\/shipping-companies\/correios.png","use_own_contract":false}},"agency":null,"invoice":{"model":"55","number":"9248","serie":"1","key":"31190307586261000184550010000092481404848162","value":null,"cfop":null,"issued_at":"2019-03-01 00:00:00","uploaded_at":null,"to_document":null},"tags":[{"tag":"15","url":"https:\/\/lefdigital.com.br\/sites\/beer_mate\/minha_conta\/meus_pedidos_detalhes\/15"}],"products":[{"name":"Cerveja 001","quantity":1,"unitary_value":45.01,"weight":null},{"name":"Cerveja 002","quantity":2,"unitary_value":40,"weight":null}],"generated_key":null}],"paypal_discounts":[]},"digitable":null,"redirect":null,"message":null,"token":null,"payment_id":null}';
		
						$array = json_decode($response);
		
						if(!(isset($array->purchase) AND $array->purchase)){
							if(isset($array->message) AND $array->message){
								echo '<div class="pt10 fwb c_vermelho"> ';
									echo 'Erro: '.$array->message;
									foreach ($array->errors as $key => $value) {
										foreach ($value as $key1 => $value1) {
											echo ' '.$value1;
										}
									}
								echo '</div> ';
								echo '<div class="pt10 pb10"><a href="'.DIR.'/admin/?pg=19&mod=pedidos&abrir_menu_pedido='.$pedidos->id.'" class="c_azul link">Vizualizar meu pedido</a></div>';
							}
		
						} else {
							if($array->purchase->status == 'paid'){
								$file = fopen(DIR_F.'/plugins/Json/pedidos/'.$pedidos->id.'_melhor_envio.json', 'w');
					            fwrite($file, json_encode($array));
					            fclose($file);
		
								$file = fopen(DIR_F.'/plugins/Json/pedidos/melhor_envio/'.$pedidos->id.'_melhor_envio_'.date('Y_m_d_H_i_s').'.json', 'w');
					            fwrite($file, json_encode($array));
					            fclose($file);
		
								unset($mysql->campo);
								$mysql->campo['melhor_envio_pago'] = 1;
								$mysql->filtro = " WHERE `id` = '".$pedidos->id."' ";
								$mysql->update('pedidos');
		
								location(DIR.'/app/Melhor_Envio/pagar.php?id='.$pedidos->id);
		
							} else {
								echo '<div class="pt10 fwb c_vermelho">Ocorreu algum erro, tente novamente!</div> ';
								echo '<div class="pt10 pb10"><a href="'.DIR.'/admin/?pg=19&mod=pedidos&abrir_menu_pedido='.$pedidos->id.'" class="c_azul link">Vizualizar meu pedido</a></div>';				
							}
						}
		
					}
		
		
		
		
		
				} elseif(isset($_GET['gerar_etiqueta']) AND $_GET['gerar_etiqueta']){
					if(isset($consulta->melhor_envio_token) AND $consulta->melhor_envio_token){
			
			            $mysql->prepare = array($_GET['id']);
			            $mysql->filtro = " WHERE ".STATUS." AND id = ? AND seller = '".$_SESSION['seller']."' ORDER BY ".ORDER." ";
			            $pedidos = $mysql->read_unico('pedidos');
		
						$post = array();
						$post['orders'][0] = $pedidos->melhor_envio_order;
						$json = json_encode($post);
		
						$curl = curl_init();
						curl_setopt_array($curl, array(
							CURLOPT_URL => URL_MELHOR_ENVIO."/api/v2/me/shipment/generate",
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
		
//$response = '{"d99e0dcf-26e0-41ae-83e4-e03de91d234b": {"status": false,"message": "Envio não está liberado"}}';
//$response = '{"d99e0dcf-26e0-41ae-83e4-e03de91d234b": {"status": true,"message": "Envio gerado com sucesso"}}';
		
						$array = json_decode($response);

//pre($array); exit();

						if(is_object($array)){
							foreach ($array as $key => $value) {
								if(isset($value->status)){
									if($value->status){
										// GERAR URL DA ETIQUETA
											$post = array();
											$post['mode'] = "private";
											$post['orders'][0] = $pedidos->melhor_envio_order;
											$json = json_encode($post);
							
											$curl = curl_init();
											curl_setopt_array($curl, array(
												CURLOPT_URL => URL_MELHOR_ENVIO."/api/v2/me/shipment/print",
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
			
											$array = json_decode($response);
											pre($array);
			
											if(isset($array->url) AND $array->url){
												unset($mysql->campo);
												$mysql->campo['melhor_envio_etiqueta'] = $array->url;
												$mysql->filtro = " WHERE `id` = '".$pedidos->id."' ";
												$mysql->update('pedidos');
			
												location(DIR.'/app/Melhor_Envio/pagar.php?id='.$pedidos->id);
											} else {
												echo '<div class="pt10 fwb c_vermelho">'.$value->message.'</div> ';
												echo '<div class="pt10 pb10"><a href="'.DIR.'/admin/?pg=19&mod=pedidos&abrir_menu_pedido='.$pedidos->id.'" class="c_azul link">Vizualizar meu pedido</a></div>';				
											}
										// GERAR URL DA ETIQUETA
			
									} else {
										echo '<div class="pt10 fwb c_vermelho">'.$value->message.'</div> ';
										echo '<div class="pt10 pb10"><a href="'.DIR.'/admin/?pg=19&mod=pedidos&abrir_menu_pedido='.$pedidos->id.'" class="c_azul link">Vizualizar meu pedido</a></div>';				
									}
				
								} else {
									echo '<div class="pt10 fwb c_vermelho">Ocorreu algum erro, tente novamente!</div> ';
									echo '<div class="pt10 pb10"><a href="'.DIR.'/admin/?pg=19&mod=pedidos&abrir_menu_pedido='.$pedidos->id.'" class="c_azul link">Vizualizar meu pedido</a></div>';				
								}
							}
		
						} else {
							echo '<div class="pt10 fwb c_vermelho">Ocorreu algum erro ou esta etiqueta ja foi gerada!</div> ';
							echo '<div class="pt10 pb10"><a href="'.DIR.'/admin/?pg=19&mod=pedidos&abrir_menu_pedido='.$pedidos->id.'" class="c_azul link">Vizualizar meu pedido</a></div>';
						}
					}
		
		
		
		
		
		
		

				} else {

		            $mysql->prepare = array($_GET['id']);
					$mysql->filtro = " WHERE ".STATUS." AND id = ? ORDER BY ".ORDER." ";
		            $pedidos = $mysql->read_unico('pedidos');
		
		            $mysql->filtro = " WHERE ".STATUS." AND id = '".$pedidos->cadastro."' ORDER BY ".ORDER." ";
		            $cadastro = $mysql->read_unico('cadastro');
	
		            $carrinho = json_decode(file_get_contents(DIR_F.'/plugins/Json/pedidos/'.$pedidos->id.'.json'));
		
					if(preg_match('(melhor_envio_)', $pedidos->tipo_frete)){
						echo '<div class=""> ';
				    		echo '<div class="fz16 fwb">MELHOR ENVIO</div> ';

				    		if($pedidos->melhor_envio_pago == 0){
								echo '<form method="post" action="'.DIR.'/app/Melhor_Envio/pagar.php?id='.$pedidos->id.'&pagar_envio=1"> ';
				    	        	echo '<div class="pt10">'.str_replace('melhor_envio_', '', $pedidos->tipo_frete).': '.preco($pedidos->frete, 1).'</div> ';
									echo '<div class="pt10">Chave da NF: <input type="text" name="nf" class="design w300" /></div> ';
					            	echo '<div class="pt10"><button class="p10 botao">Pagar Envio</button></div> ';
					            	echo '<div class="pt10 fz14 lh18 c_vermelho">* Para efetuar o pagamento você deve ter crédito disponível na sua conta do Melhor Envio, caso não tenho crédito entre no <a href="'.URL_MELHOR_ENVIO.'/painel/melhor-carteira?show-add-balance=true" class="c_azul link" target="_blank">PAINEL DO MELHOR ENVIO CLIANDO AQUI</a> e insira crédito!</div> ';
								echo '</form> ';
				    		} else {
				        		echo '<div class="pt10">'.str_replace('melhor_envio_', '', $pedidos->tipo_frete).': '.preco($pedidos->frete, 1).' <b class="c_verde">(PAGO)</b></div> ';
								if($pedidos->melhor_envio_etiqueta){
									location(DIR.'/admin/?pg=19&mod=pedidos&abrir_menu_pedido='.$pedidos->id);
								} else {
				            		echo '<div class="pt10"><a href="'.DIR.'/app/Melhor_Envio/pagar.php?id='.$pedidos->id.'&gerar_etiqueta=1"><button class="p10 botao">Gerar Etiqueta</button></a></div> ';
								}
				    		}
				    	echo '</div> ';
					}
				}


	    	echo '</div> ';
    	echo '</div> ';

	}

?>
