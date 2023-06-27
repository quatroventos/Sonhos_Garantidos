<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();
	$arr = array();
	$arr['html'] = '';

        // MAIS CAMPOS
			for ($i=100; $i>=1; $i--) { 
				$_POST['table'] = str_replace('_'.$i, '', $_POST['table']);
				if(isset($_POST['pai'])){
					$_POST['pai'] = str_replace('_'.$i, '', $_POST['pai']);
				}
			}
        // MAIS CAMPOS

		$mysql->prepare = array($_POST['table']);
		$mysql->filtro = " WHERE `modulo` = ? ";
		$modulos = $mysql->read_unico('menu_admin');

		$verificacoes = new Verificacoes();
		$verificacoes->modulos = $modulos;
		$verificacoes->permissoes_all(0, 'lista');

		$arr['html'] .= ' <option value="">- - -</option> ';

		$table = $modulos->modulo;

		// FILTRO
			$filtro = '';
			if(isset($_POST['pai'])){
				$pai = $_POST['pai'];

				for ($i=100; $i>=0; $i--) {
					$pai = str_replace('_'.$i, '', $pai);
				}
				$pai_val = isset($_POST['pai_val']) ? $_POST['pai_val'] : 0;

				$pai = preg_match('(1_cate)', $pai) ? 'categorias' : $pai;

				$filtro = " WHERE ".$pai." = '".$pai_val."' ";
			}
		// FILTRO

		$mysql->filtro = $filtro." ORDER BY nome asc ";
		$consulta = $mysql->read($table);
		foreach ($consulta as $key => $value) {

			// SELECTED
				$selected = '';
				if(isset($_POST['rel_val'])){
					if($_POST['rel_val']==$value->id){
						$selected =  'selected';
					}

					if(preg_match('('.$_POST['rel_val'].')', '-'.$value->id.'-') AND preg_match('(-)', $_POST['rel_val'])){
						$selected =  'selected';
					}
				}
			// SELECTED
			
			$arr['html'] .= ' <option value="'.$value->id.'" '.$selected.' >'.$value->nome.'</option> ';
		}

	echo json_encode($arr);

?>