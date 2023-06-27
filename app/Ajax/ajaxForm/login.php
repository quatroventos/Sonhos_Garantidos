<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = 'z';


		// Login
		if(isset($_POST['fazer_login'])){

			$mysql->prepare = array($_POST['email']);
			$mysql->filtro = "  WHERE `email` = ? ";
			$cadastro = $mysql->read_unico('cadastro');
			if(isset($cadastro->id)){
				if($cadastro->status){
					if(strcmp($cadastro->senha, md5($_POST['senha'])) == 0){
						fazer_login($cadastro->id);

						$_POST['direcionar'] = (isset($_POST['direcionar']) AND $_POST['direcionar'] AND $_POST['direcionar']!='-') ? $_POST['direcionar'] : 'minha_conta';
						if($_POST['direcionar'] == 'refresh'){
							$arr['evento'] = 'window.location.reload(); ';
						} else {
							$arr['evento'] = 'window.location.href="'.DIR.'/'.$_POST['direcionar'].'"; ';
						}

					} else $arr['erro'][] = 'Senha Inválida!';
				} else $arr['erro'][] = 'Conta Bloqueada!';
			} else $arr['erro'][] = 'Email Não Cadastrado!';
	
	


		// Sair
		} elseif(isset($_GET['sair'])){

			// Log
			if(isset($_SESSION['x_site']->log)){
				$mysql->prepare = array($_SESSION['x_site']->log);
				$mysql->filtro = " WHERE `id` = ? ";
				$mysql->campo['data_saida'] = date('c');
				$ult_id = $mysql->update('log');
			}

			// Unset
			unset($_SESSION['x_site']);
			unset($_SESSION['carrinho']);

			$arr['evento'] = 'window.location.reload(); ';

		}


	echo json_encode($arr); 
?>