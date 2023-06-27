<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';
	require_once DIR_F.'/app/Funcoes/funcoesAdmin.php';

	$mysql = new Mysql();
	$mysql->ini();

	$arr = array();
	$arr['id'] = array();

	if(isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id){

		$mysql->prepare = array($_GET['modulos']);
		$mysql->filtro = " WHERE `id` = ? ";
		$modulos = $mysql->read_unico('menu_admin');

		$verificacoes = new Verificacoes();
		$verificacoes->modulos = $modulos;
		$verificacoes->permissoes_all(0, 'lista');

		$arr['tabelas'] = $modulos->modulo;

		// crop
		if(isset($_POST['tipo']) AND $_POST['tipo'] == 'crop'){
			if(isset($_POST['delete'])){
				$arr['ids_crop'] = array();
				foreach ($_POST['delete'] as $key => $value) {
					$mysql->colunas = 'id';
					$mysql->filtro = " WHERE `id` = '".$key."' ";
					$item = $mysql->read_unico($_GET['col']);
					if(isset($item->id)){
						$arr['ids_crop'][] = $item->id;
					}
				}
				$arr['ids_crop'] = implode(',', $arr['ids_crop']);
				$arr['modulos'] = $modulos->id;
			}

		} else { // delete
			// Nome
			if(isset($_POST['nome'])){
				foreach ($_POST['nome'] as $key => $value) {
					$mysql->prepare = array($key);
					$mysql->filtro = " WHERE `id` = ? ";
		        	$mysql->campo['nome'] = $value;
					$arr['id']['nome'][] = $mysql->update($_GET['col']);
				}
			}

			// Ordem
			if(isset($_POST['ordem'])){
				unset($mysql->campo);
				foreach ($_POST['ordem'] as $key => $value) {
					$mysql->prepare = array($key);
					$mysql->filtro = " WHERE `id` = ? ";
		        	$mysql->campo['ordem'] = $value;
					$arr['id']['ordem'][] = $mysql->update($_GET['col']);
				}
			}

			// Delete
			if(isset($_POST['delete'])){
				foreach ($_POST['delete'] as $key => $value) {
					$mysql->prepare = array($key);
					$mysql->filtro = " WHERE `id` = ? ";
					$arr['id']['delete'][] = $mysql->delete($_GET['col']);
				}
			}
		}

	}


	$mysql->fim();
	echo json_encode($arr); 
?>