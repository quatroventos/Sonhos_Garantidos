<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();
	$mysql->ini();

	$arr = array();
	$arr['id'] = 0;


		if(isset($_POST['nome']) and $_POST['nome'] and isset($_POST['table']) and $_POST['table']){

			$criarMysql = new criarMysql();
            $criarMysql->criarTabelas($_POST['table'], 0);
            if(LUGAR != 'admin'){
            	$criarMysql->criarColunas($_POST['table'], table_admin());
            }

			$mysql->prepare = array($_POST['table']);
			$mysql->filtro = " WHERE `modulo` = ? ";
			$modulos = $mysql->read_unico('menu_admin');

			$verificacoes = new Verificacoes();
			$verificacoes->modulos = $modulos;
			$verificacoes->permissoes_all(0, 'novo');

			$mysql->campo['nome'] = $_POST['nome'];
			if(LUGAR != 'admin'){
				$mysql->campo[table_admin()] = $_SESSION['x_'.LUGAR]->id;
			}
			$arr['id'] = $mysql->insert($_POST['table']);

			if(preg_match('(1_cate)', $_POST['table'])){
				$mysql->prepare = array($arr['id']);
				$mysql->filtro = " WHERE `id` = ? ";
				$mysql->campo['vcategorias'] = '-'.$arr['id'].'-';
				$mysql->update($_POST['table']);
			}

		}

	$mysql->fim();
	echo json_encode($arr); 

?>