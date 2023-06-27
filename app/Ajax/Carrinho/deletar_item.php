<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();


		$ex = explode('_', $_POST['ref']);
		$id = $arr['id'] = $ex[0];
		$ref = $arr['ref'] = $_POST['ref'];

		$arr['rel_classe'] = sem('acentos_all_carrinho', $ref);

		unset($_SESSION['carrinho']['itens'][$id][$ref]);


	echo json_encode($arr);

?>