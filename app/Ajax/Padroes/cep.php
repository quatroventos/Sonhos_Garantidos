<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();
	$arr = array('erro'=>1, 'rua'=>'', 'bairros'=>'', 'cidades'=>'', 'estados'=>'');

		$cep = isset($_GET['cep']) ? $_GET['cep'] : $_POST['cep'];

		$json = json_decode(file_get_contents(DIR_F.'/plugins/Json/localidades/cep'.BARRA.$cep[0].'0000000.json'));
		foreach ($json as $key => $value) {
			if(isset($value->$cep)){
				$arr = $value->$cep;
			}
		}

	echo json_encode($arr);

?>