<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = 'z';


		// Login
		if(isset($_POST['id']) AND $_POST['id'] AND isset($_POST['nome']) AND $_POST['nome'] AND isset($_POST['email']) AND $_POST['email']){

			$mysql->prepare = array($_POST['email']);
			$mysql->filtro = "  WHERE `email` = ? ";
			$cadastro = $mysql->read_unico('cadastro');

			if(!isset($cadastro->id)){
				unset($mysql->campo);
				$mysql->campo['nome']	= $_POST['nome'];
				$mysql->campo['email']	= $_POST['email'];
				$mysql->campo['senha']	= 'facebook';
				$ult_id = $mysql->insert('cadastro');

				$mysql->prepare = array($ult_id);
				$mysql->filtro = "  WHERE `id` = ? ";
				$cadastro = $mysql->read_unico('cadastro');
			}

			fazer_login($cadastro->id);

			$_POST['direcionar'] = (isset($_POST['direcionar']) AND $_POST['direcionar']!='-') ? $_POST['direcionar'] : 'minha_conta';
			if($_POST['direcionar'] == 'refresh'){
				$arr['evento'] = 'window.location.reload(); ';
			} else {
				$arr['evento'] = 'window.location.href="'.DIR.'/'.$_POST['direcionar'].'"; ';
			}
	
		}


	echo json_encode($arr); 
?>