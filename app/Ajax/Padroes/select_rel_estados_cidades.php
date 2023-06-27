<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	echo isset($_GET['selecione']) ? '<option value="">'.$_GET['selecione'].'</option> ' : '<option value="">- - -</option> ';

	if(isset($_GET['estados']) and $_GET['estados']){
		$json = json_decode(file_get_contents(DIR_F.'/plugins/Json/localidades/cidades'.BARRA.$_GET['estados'].'.json'));
		foreach($json as $value){
			foreach($value->cidades as $v){
				echo '<option value="'.$v.'" ';
				echo (isset($_GET['val']) and $_GET['val']==$v) ? 'selected' : '';
				echo '>'.$v.'</option>';
			}
		}
	
	} elseif(isset($_GET['cidades']) and $_GET['cidades']){

		$selected = (isset($_GET['val']) and $_GET['val']=='Centro') ? 'selected' : '';
		echo '<option value="Centro" '.$selected.'>Centro</option> ';

		$json = json_decode(file_get_contents(DIR_F.'/plugins/Json/localidades/bairros'.BARRA.$_GET['uf'].'.json'));
		foreach($json as $value){
			if($value->cidade == $_GET['cidades']){
				foreach($value->bairros as $v){
					echo '<option value="'.$v.'" ';
					echo (isset($_GET['val']) and $_GET['val']==$v) ? 'selected' : '';
					echo '>'.$v.'</option>';
				}
			}
		}

	}

?>