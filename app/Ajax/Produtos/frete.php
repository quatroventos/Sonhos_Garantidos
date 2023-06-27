<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();
	$frete = new Frete();

	$arr = array();


		if(isset($_POST['cep']) and isset($_GET['id'])){
			$mysql->prepare = array($_GET['id']);
			$mysql->filtro = " WHERE `status` = 1 AND `lang` = '".LANG."' AND `id` = ? ";
			$produtos = $mysql->read_unico('produtos');

			$arr['frete'] = $frete->calcula_frete($_POST['cep'], $produtos->id);
		}


	echo json_encode($arr);

?>