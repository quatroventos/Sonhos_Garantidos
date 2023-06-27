<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();


	if( (isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id) OR (isset($_SESSION['seller']) AND $_SESSION['seller']) ){
		if(isset($_GET['code']) AND $_GET['code']){
	
			$mysql->filtro = " where tipo = 'frete' ";
			$frete = $mysql->read_unico('configs');
	
			//$mysql->filtro = " WHERE `id` = '".$_SESSION['seller']."' ";
			//$seller_pd = $mysql->read_unico('seller');
	
			if($frete->melhor_envio_client_id AND $frete->melhor_envio_client_secret){
	
				$post = array();
				$post['grant_type'] = 'authorization_code';
				$post['client_id'] = $frete->melhor_envio_client_id;
				$post['client_secret'] = $frete->melhor_envio_client_secret;
				$post['redirect_uri'] = DIR_C.'/app/Melhor_Envio/autenticar.php';
				$post['code'] = $_GET['code'];
	
				$curl = curl_init();
				curl_setopt_array($curl, array(
				  CURLOPT_URL => URL_MELHOR_ENVIO."/oauth/token",
				  CURLOPT_RETURNTRANSFER => true,
				  CURLOPT_CUSTOMREQUEST => "POST",
				  CURLOPT_POSTFIELDS => "------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; 
										name=\"grant_type\"\r\n\r\n".$post['grant_type']."\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; 
										name=\"client_id\"\r\n\r\n".$post['client_id']."\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; 
										name=\"client_secret\"\r\n\r\n".$post['client_secret']."\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; 
										name=\"redirect_uri\"\r\n\r\n".$post['redirect_uri']."\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW\r\nContent-Disposition: form-data; 
										name=\"code\"\r\n\r\n".$post['code']."\r\n------WebKitFormBoundary7MA4YWxkTrZu0gW--",
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
					unset($mysql->campo);
					$mysql->campo['melhor_envio_token'] = $array->access_token;
					$mysql->campo['melhor_envio_refresh_token'] = $array->refresh_token;
					$mysql->campo['melhor_envio_refresh_token'] = $array->refresh_token;
					$mysql->campo['melhor_envio_token_data'] = date('Y-m-d', mktime(date('H'), date('i'), date('s')+$array->expires_in, date('m'), date('d')-2, date('Y')));
	
					if(isset($seller_pd->id) AND $seller_pd){
						$mysql->filtro = " WHERE `id` = '".$_SESSION['seller']."' ";
						$mysql->update('seller');
					} else {
						$mysql->filtro = " WHERE `id` = '".$frete->id."' ";
						$mysql->update('configs');
					}
				}
			}
		}

		if(isset($seller_pd->id) AND $seller_pd){
			location(DIR.'/area_seller/melhor_envio/');
		} else {
			location(DIR.'/admin/?pg=19&mod=pedidos&abrir_menu=9&abrir_menu_tipo=frete');
		}
	}

?>
