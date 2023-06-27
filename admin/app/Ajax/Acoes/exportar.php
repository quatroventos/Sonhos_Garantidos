<?

	$codificacao = 'no';
	$DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';
	require_once DIR_F.'/app/Funcoes/funcoesAdmin.php';

	verificar_sessao();
	$mysql = new Mysql();
	$input = new Input();
	$verificacoes = new Verificacoes();

    $mysql->prepare = array($_GET['modulo']);
    $mysql->filtro = " WHERE `id` = ? ".$verificacoes->liberar_permissoes_menu_inicial()." ";
    $modulos = $mysql->read_unico('menu_admin');

    if(isset($modulos->id) AND isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id){

        $modulos_campos = $modulos->campos ? unserialize(base64_decode($modulos->campos)) : array();

		$filtro = '';
		if(isset($_GET['f'])){
			$filtro = base64_decode($_GET['f']);
		}

		$mysql->filtro = " ".$filtro." ORDER BY `id` ASC ";
	    $itens = $mysql->read($modulos->modulo);


    	$_POST['exportar_table'] = $modulos->modulo;

    	$x=0;
		$tipos = array();
		$colunas = array();
		$_POST['exportar_top'] = '';
		foreach ($modulos_campos as $k => $v) {
			foreach ($v as $key => $value) {
				if(isset($value['check']) AND $value['check'] AND $value['tipo']!='password' AND $value['tipo']!='button' AND $value['tipo']!='hidden' AND $value['tipo']!='info' AND !preg_match('(multifotos)', $value['input']['nome'])){
			    	$_POST['exportar_top'] .= $value['nome'].'z|z';
			    	$tipos[$x] = $value['tipo'];
			    	$colunas[$x] = $value['input']['nome'];
			    	$tags[$x] = $value['input']['tags'];
			    	$opcoes[$x] = $value['input']['opcoes'];
			    	$x++;
		    	}
		    }
		}

    	$_POST['exportar_top'] .= 'Data de Cadastroz|z';
		$tipos[$x] = 'date';
		$colunas[$x] = 'data';

		$_POST['exportar_center'] = '';
    	foreach ($itens as $key => $value) {
    		foreach ($colunas as $k => $v) {
    			if($tipos[$k] == 'categorias'){
					$_POST['exportar_center'] .= rel($value->table.'1_cate', $value->$v).'z|z';

    			} elseif($tipos[$k] == 'subcategorias'){
					$_POST['exportar_center'] .= rel($value->table, $value->$v).'z|z';

    			} elseif($tipos[$k] == ''){
					$_POST['exportar_center'] .= rel($value->table, $value->$v).'z|z';

    			} elseif($tipos[$k] == 'preco'){
					$_POST['exportar_center'] .= preco($value->$v).'z|z';

    			} elseif($tipos[$k] == 'date'){
					$_POST['exportar_center'] .= data($value->$v).'z|z';

    			} elseif($tipos[$k] == 'datetime-local'){
					$_POST['exportar_center'] .= data($value->$v, 'd/m/Y H:i').'z|z';

    			} elseif($tipos[$k] == 'file'){
					$_POST['exportar_center'] .= 'web/fotos/'.FOTOS.$value->$v.'z|z';

    			} elseif($tipos[$k] == 'select' OR $tipos[$k] == 'checkbox' OR $tipos[$k] == 'radio'){
					$ex = explode('(anos)->', $opcoes[$k]);
					if(isset($ex[1]) AND $ex[1]){
						$_POST['exportar_center'] .= $value->$v.'z|z';

					} else {
						$itens = explode('(banco)->', $opcoes[$k]);
						if(isset($itens[1]) AND $itens[1]){
							$itens = explode('->', $opcoes[$k]);
						}
						if(isset($itens[1]) AND $itens[1]){
							$val = array();
							$ex = explode('-', $value->$v);
							foreach ($ex as $key => $v1) {
								if($v1){
									$val[] = rel($itens[1], $v1);
								}
							}
							$_POST['exportar_center'] .= implode(', ', $val).'z|z';
						} else {
							$opc = array();
							$itens = explode('; ', $opcoes[$k]);
							foreach ($itens as $key => $v1) {
								$ex = explode('->', $v1);
								if(isset($ex[1])){
									$opc[$ex[0]] = $ex[1];
								}
							}
							$val = array();
							$ex = explode('-', $value->$v);
							foreach ($ex as $key => $v1) {
								if($v1){
									$val[] = $opc[$v1];
								}
							}
							$_POST['exportar_center'] .= implode(', ', $val).'z|z';
						}
					}

    			} elseif($tipos[$k] == 'editor'){
					$tipo = str_replace('txt_editor', '', $v);
					$_POST['exportar_center'] .= txt($value, $tipo).'z|z';

    			} else {
					$_POST['exportar_center'] .= $value->$v.'z|z';
				}

			}
	    	$_POST['exportar_center'] .= 'z-z';
    	}

		$_POST['exportar_center'] = str_replace('
', '', $_POST['exportar_center']);
		$_POST['exportar_center'] = str_replace('<3', '', $_POST['exportar_center']);


		if($_GET['tipo'] == 'excel'){
			require_once DIR_F.'/app/Exportacoes/z_exportar_para_excel.php';

		} elseif($_GET['tipo'] == 'pdf'){
			$caminho_extra = '../../';
			require_once DIR_F.'/app/Exportacoes/z_exportar_para_pdf.php';
		}

	} else {
		echo 'Você nça tem permissão exportar Dados!';
	}

?>