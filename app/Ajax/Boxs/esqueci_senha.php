<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = 0;


		if(isset($_POST['email']) and $_POST['email']){

			$mysql->filtro = " where email = '".$_POST['email']."' ";
			$cadastro = $mysql->read_unico('cadastro');
			if(isset($cadastro->id)){

				$email = new Email();
				$email->to = $_POST['email'];
				$email->assunto = 'Alteração de Senha no site '.nome_site();
				//<div><img src="'.DIR_C.'/web/img/logo.png" /></div><br>
				$email->txt = '	<div style="color:#333">
									<table border="0" cellPadding="0" width="550">
										<tr><td>Olá <b>'.$cadastro->nome.'</b>,</td></tr>
										<tr><td>Clique no link abaixo para criar uma nova senha</td></tr>
										<tr><td><a href="'.DIR_C.'/app/Recuperacoes/esqueci_senha_cadastro.php?q='.base64_encode($cadastro->data.'574839'.$cadastro->id.'847382').'" style="color:#00F">Criar nova senha</a></td></tr>
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
			$arr['html']  = '<div class="w340 m-a p20 pt15 cor_333">
								<form id="EsqueciSenha" method="post" action="'.$_SERVER['SCRIPT_NAME'].'">
								
									<div class="posr mt5">
										<i class="faa-envelope-o posa t0 l0 mt12 ml15 fz20 cor_666"></i>
										<input type="text" name="email" class="w100p p20 pl45 pr10 fz14 bdw2 br5 design" placeholder="Digite seu email" required >
									</div>
									<div class="mt15">
										<button class="design w100p p12 pl30 pr30 fz16 fwb br10 '.BUTTON1.'">Enviar</button>
									</div>
									<div class="clear"></div>
								</form>
								<script>ajaxForm('.A.'EsqueciSenha'.A.');</script>
							</div> ';

		}

	echo json_encode($arr); 

?>