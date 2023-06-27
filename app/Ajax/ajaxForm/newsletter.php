<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = 'z';
	$arr['form'] = '';
	$arr['dir'] = DIR_C;


		if(isset($_POST['email'])){

        	$mysql->campo['categorias'] = isset($_POST['categorias']) ? $_POST['categorias'] : 1;
        	$mysql->campo['nome'] = isset($_POST['nome']) ? $_POST['nome'] : $_POST['email'];
        	$mysql->campo['email'] = $_POST['email'];
            $mysql->insert('newsletter');


			// Email
			$arr['email'] = $_POST['email'];


			$arr['alert'] = 1;
			$arr['evento'] = ' ';

		}


	echo json_encode($arr); 
?>