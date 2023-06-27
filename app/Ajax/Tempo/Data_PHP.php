<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';


		$arr['date'] = date('d/m/Y H:i:s');
		$arr['time'] = time();


	echo json_encode($arr); 
?>