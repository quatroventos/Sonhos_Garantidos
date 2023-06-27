<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();


		if(isset($_SESSION['x_site']->id)){
			$mysql->prepare = array($_SESSION['x_site']->id);
			$mysql->filtro = " WHERE `id` = ? ";
			$mysql->campo['ult_acesso'] = date('c');
			$mysql->update('cadastro');
		}


	echo json_encode($arr); 
?>