<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = 0;

		$ex = explode('/area_', DIR_ALL);
		if(isset($ex[1]) AND $ex[1]){
			$ex = explode('__', $ex[1]);
			if(isset($ex[1]) AND $ex[1]){
				$seller = $ex[0];
			}
		}


		if(isset($_POST['email']) and $_POST['email'] AND isset($seller) AND $seller){

			$mysql->filtro = " where email = '".$_POST['email']."' ";
			$seller = $mysql->read_unico($seller);
			if(isset($seller->id)){

				$email = new Email();
				$email->to = $_POST['email'];
				$email->assunto = 'Alteração de Senha no site '.nome_site();
				//<div><img src="'.DIR_C.'/web/img/logo.png" /></div><br>
				$email->txt = '	<div style="color:#333">
									<table border="0" cellPadding="0" width="550">
										<tr><td>Olá <b>'.$seller->nome.'</b>,</td></tr>
										<tr><td>Clique no link abaixo para criar uma nova senha</td></tr>
										<tr><td><a href="'.DIR_C.'/app/Recuperacoes/esqueci_senha_'.$seller.'.php?q='.base64_encode($seller->data.'4324213'.$seller->id.'98453532').'" style="color:#00F">Criar nova senha</a></td></tr>
									</table>
								</div>';
				$email->enviar();

				$arr['alert'] = 1;
				$arr['msg'] = "Sua senha foi enviado para seu email!";
				$arr['evento'] = '$(".fundoo").trigger("click");';

			} else {
				$arr['alert'] = 0;
				$arr['msg'] = "Email não cadastrado!";
			}


		} else {

			$arr['title'] = 'Esqueceu a senha';
			$arr['html']  = '<div class="w340 m-a p20 pt15">
								<form id="EsqueciSenha" method="post" action="'.$_SERVER['SCRIPT_NAME'].'">
								
									<div class="posr mt5">
										<i class="faa-envelope-o posa t0 l0 mt12 ml15 fz20 cor_666"></i>
										<input type="text" name="email" class="w100p p20 pl45 pr10 fz14 bdw2 br5 design" placeholder="Digite seu email" required >
									</div>
									<div class="mt15">
										<button class="design w100p p12 pl30 pr30 fz16 fwb br20 '.BUTTON1.'">Enviar</button>
									</div>
									<div class="clear"></div>
								</form>
								<script>ajaxForm('.A.'EsqueciSenha'.A.');</script>
							</div> ';

		}

	echo json_encode($arr); 

?>