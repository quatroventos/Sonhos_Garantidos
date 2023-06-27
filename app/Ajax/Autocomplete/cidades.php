<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();
	$arr['itens'] = array();

	if(isset($_POST['pesq'])){
		$filtro = $_POST['estados'] ? " `estados` = '".$_POST['estados']."' AND " : "";
		$mysql->colunas = 'id, cidades';
		$mysql->filtro = " where ".$filtro." `cidades` REGEXP '".cod('busca', $_POST['pesq'])."' GROUP BY `cidades` ORDER BY `cidades` ASC ";
		$consulta = $mysql->read('veiculos');

		foreach ($consulta as $key => $value) {
			$row_array['id'] = $value->id;
			$row_array['value'] = $value->cidades;
			array_push($arr['itens'], $row_array);  
		}
	}

	echo json_encode($arr);

?>