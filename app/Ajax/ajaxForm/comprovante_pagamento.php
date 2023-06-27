<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = 0;


		// Log Gravacoes (Formularios)
		if(isset($_SESSION['x_site']->id)){

			unset($mysql->campo);

			$table = 'pedidos';

            $upload = new Upload();
            if(isset($_FILES)) $upload->fileUpload($_POST['id'], '../../../');

            $arr['alert'] = 1;
            if(isset($_POST['direcionar'])){
    	        $arr['evento'] = ' setInterval( function() {window.parent.location = "'.$_POST['direcionar'].'";}, 1000); ';
	        } else {
    	        $arr['evento'] = ' setInterval( function() {window.parent.location = "'.DIR.'/minha_conta/pedidos/";}, 1000); ';
	        }
            

		} else {
			$arr['alert'] = 'Você não está logado no sistema!';
		}

	echo json_encode($arr); 
?>