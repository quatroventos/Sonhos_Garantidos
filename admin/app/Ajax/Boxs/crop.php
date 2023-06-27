<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';
	require_once DIR_F.'/app/Funcoes/funcoesAdmin.php';

	$mysql = new Mysql();
	$mysql->ini();

	$arr = array();
	$arr['html'] = '';


	if(isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id){

		if(isset($_POST['crop_salvar']) AND $_POST['crop_salvar']){
			cropp_gravar($_POST['foto'], $_POST['id'], $_POST['crop_table']);

			$arr['alert'] = 'Cadastro com sucesso!';
			$arr['evento'] = 'setTimeout(function(){ fechar_all(); }, 200); ';


		} else {
			$mysql->prepare = array($_POST['modulos']);
			$mysql->filtro = " WHERE `id` = ? ";
			$modulos = $mysql->read_unico('menu_admin');

			$verificacoes = new Verificacoes();
			$verificacoes->modulos = $modulos;
			$verificacoes->permissoes_all(0, 'lista');

			// mais fotos
			if(isset($_POST['ids']) AND $_POST['ids']){
		        $mysql->filtro = " WHERE id IN (".$_POST['ids'].") ";
		        $consulta = $mysql->read_unico($_POST['tablee']);
		        if(isset($consulta->id) AND $consulta->id){
					$arr['title'] = 'Recortar Foto';
					$arr['html'] .= '<div class="w700 w-a_700 itens mb10"> ';

						$ids = isset($_POST['ids']) ? explode(',', $_POST['ids']) : '';
						$arr['html'] .= '<div class="">'.cropp($consulta->item, '', 'foto', $ids, $consulta->tabelas).'</div> ';
					
					$arr['html'] .= '</div> ';
				}

			// modulos
			} else {
				$col = $_POST['col'];
				$mysql->colunas = 'id, '.$col;
		        $mysql->prepare = array($_POST['idd']);
		        $mysql->filtro = " WHERE id = ? ";
		        $consulta = $mysql->read_unico($_POST['tablee']);
		        if(isset($consulta->$col) AND $consulta->$col){

					$arr['title'] = 'Recortar Foto';
					$arr['html'] .= '<div class="w700 w-a_700 itens mb10"> ';

						$arr['html'] .= '<div class="">'.cropp($consulta->id, $consulta->$col, $col, 0, $consulta->table).'</div> ';
					
					$arr['html'] .= '</div> ';

					$arr['html'] .= '<script> ';
						$arr['html'] .= "$('.ui-dialog').prepend('<style>.pop_file { display: none !important;}</style>'); ";
					$arr['html'] .= '</script> ';
				}
			}
		}
	}


	$mysql->fim();
	echo json_encode($arr); 

?>