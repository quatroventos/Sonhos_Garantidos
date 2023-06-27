<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();
	$arr = array();
	$arr['html'] = '';
	$arr['table'] = $_POST['table'];


		$arr['html'] .= ' <option value="">'.$_POST['selecione'].'</option> ';


		$mysql->colunas = "id, nome";
		$mysql->filtro = " WHERE ".STATUS." AND motos_marcas = '".$_POST['pai_val']."' ORDER BY nome asc ";
		$consulta = $mysql->read('motos_modelos');
		foreach ($consulta as $key => $value) {
			$selected = (isset($_POST['rel_val']) AND $_POST['rel_val'] == $value->id) ? 'selected' : '';
			$arr['html'] .= ' <option value="'.$value->id.'" '.$selected.' >'.$value->nome.'</option> ';
		}

	echo json_encode($arr);

?>