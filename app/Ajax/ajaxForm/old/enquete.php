<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['form'] = '';
	$arr['dir'] = DIR_C;


		if(isset($_POST['id']) AND $_POST['id'] AND isset($_POST['voto']) AND $_POST['voto']){

        	$mysql->campo['enquete'] = $_POST['id'];
        	$mysql->campo['voto'] = $_POST['voto'];
            $mysql->insert('enquete_votos');


			$arr['alert'] = 'Votado com Sucesso!';
			$arr['evento'] = ' ';

		}


	echo json_encode($arr); 
?>