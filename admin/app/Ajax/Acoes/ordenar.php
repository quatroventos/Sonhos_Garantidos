<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';
	require_once DIR_F.'/app/Funcoes/funcoesAdmin.php';

	$mysql = new Mysql();
	$mysql->ini();

	$arr = array(); 
	$arr['value'] = array();


	if(isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id){

		$mysql->prepare = array($_GET['modulos']);
		$mysql->filtro = " WHERE `id` = ? ";
		$modulos = $mysql->read_unico('menu_admin');

		$verificacoes = new Verificacoes();
		$verificacoes->modulos = $modulos;
		$verificacoes->permissoes_all(0, 'lista');

		// Ordem
		if(isset($_POST['ordem'])){
			foreach ($_POST['ordem'] as $key => $value) {
				$mysql->logs = 'Item Ordenando';
		        $mysql->campo['ordem'] = $value;

				if($modulos->id == 1) $mysql->logs = 0;
				$mysql->logs_caminho = '../../';

				$mysql->prepare = array($key);
				$mysql->filtro = " WHERE `id` = ? ";
				$ult_id = $mysql->update($modulos->modulo);
				$arr['value'][$key] = $value;
			}
		}

		// Input
		if(isset($_POST['input'])){
			foreach ($_POST['input'] as $k => $v) {
				foreach ($v as $key => $value) {
					$mysql->logs = ucfirst($k).': '.$value;
			        $mysql->campo[$k] = $value;

					if($modulos->id == 1) $mysql->logs = 0;
					$mysql->logs_caminho = '../../';

					$mysql->prepare = array($key);
					$mysql->filtro = " WHERE `id` = ? ";
					$ult_id = $mysql->update($modulos->modulo);
					$arr['value'][$key] = $value;
				}
			}
		}

	}


	$mysql->fim();
	echo json_encode($arr); 
?>