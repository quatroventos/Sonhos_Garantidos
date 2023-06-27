<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array(); 


		// Passando Session Javascript para Session Php
		foreach ($_POST as $key => $value) {
			$_SESSION[$key] = $value;
			$arr['json'][$key] = $value;
		}


		// Return Json Das Session (so informacoes)
		//foreach ($_SESSION as $key => $value) {
			//$arr['session'][$key] = $value;
		//}



	echo json_encode($arr); 
?>