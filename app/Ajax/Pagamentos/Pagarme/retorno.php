<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';


	$mysql->filtro = " where tipo = 'pagamentos' ";
	$conta = $mysql->read_unico("configs");


		if(isset($_GET['id']) AND $_GET['id']){
			$_POST['dados'] = (object)array();
			$_POST['dados']->id = $_GET['id'];
		} else {
			$json = file_get_contents("php://input");
			$_POST['dados'] = json_decode($json);
		}

		if(isset($_POST['dados']->id) AND $_POST['dados']->id){

			$curl = curl_init();
			curl_setopt_array($curl, [
				CURLOPT_URL => "https://api.pagar.me/core/v5/hooks/".$_POST['dados']->id,
				CURLOPT_RETURNTRANSFER => true,
				CURLOPT_CUSTOMREQUEST => "GET",
				CURLOPT_HTTPHEADER => [
					"Accept: application/json",
					"Authorization: Basic ".base64_encode($conta->pagarme_api.':')
				],
			]);
			$response = curl_exec($curl);
			curl_close($curl);
			$array = json_decode($response);


			//if(isset($array->message) AND $array->message == 'Webhook not found.'){
				//unset($mysql->campo);
				//$mysql->campo['data'] = date('Y-m-d H:i:s');
				//$mysql->campo['metodo'] = "Pagarme-997";
				//$mysql->campo['retorno'] = $response;
				//$mysql->campo['post'] = (json_encode($_POST));
				//$mysql->campo['get'] = $json;
				//$mysql->insert('pedidos_zretorno');

				//$array1 = json_decode($json);
				//if($array1->account->id == $conta->pagarme_id){
					//$array = $array1;
				//}
			//}


			if(isset($array->data->status)){

			    // Status
				$status = 0;
				if(strtolower($array->data->status) == 'paid'){
					$status = 1;
				}
				if(strtolower($array->data->status) == 'unpaid' OR strtolower($array->data->status) == 'canceled' OR strtolower($array->data->status) == 'refused' OR strtolower($array->data->status) == 'failed'){
					$status = 2;
				}

			    // Referencia
			    $reference = $array->data->items[0]->code;

			    // Preco
			    $preco = $array->data->amount;

			    // status1
				$status1 = $array->data->status;

				include DIR_F.'/app/Ajax/Pagamentos/z_retorno.php';

			//} else {
				//unset($mysql->campo);
				//$mysql->campo['data'] = date('Y-m-d H:i:s');
				//$mysql->campo['metodo'] = "Pagarme-998";
				//$mysql->campo['retorno'] = $response;
				//$mysql->campo['post'] = (json_encode($_POST));
				//$mysql->campo['get'] = $json;
				//$mysql->insert('pedidos_zretorno');
			}

		//} else {
			//unset($mysql->campo);
			//$mysql->campo['data'] = date('Y-m-d H:i:s');
			//$mysql->campo['metodo'] = "Pagarme-999";
			//$mysql->campo['post'] = (json_encode($_POST));
			//$mysql->campo['get'] = $json;
			//$mysql->insert('pedidos_zretorno');
		}


?>
