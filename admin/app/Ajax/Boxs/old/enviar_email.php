<?	ob_start();

	require_once "../../../../system/conecta.php";
	require_once "../../../../system/mysql.php";
	require_once "../../../../app/Classes/Email.php";
	require_once "../../../../app/Classes/Input.php";
	require_once "../../../../app/Funcoes/funcoes.php";
	require_once "../../../../app/Funcoes/funcoesAdmin.php";

	$mysql = new Mysql();
	$mysql->ini();

	$arr = array();

	$verificar_senha_atual = 0;

		if(isset($_POST['email']) AND $_POST['email'] AND isset($_POST['remetente']) AND $_POST['remetente'] AND isset($_POST['enviar_email']) AND $_POST['enviar_email'] AND (LUGAR == 'admin' OR LUGAR == 'vendedores') ){

			$_POST['txt'] = stripslashes($_POST['txt']);

			$email = new Email();
			$email->assunto = $_POST['assunto'];
			$email->titulo = str_replace('src="', 'src="http://'.$_SERVER['HTTP_HOST'], $_POST['txt']);

			$email->to = $_POST['email'];
			$email->remetente = $_POST['remetente'];
			$email->enviar();

			$arr['alert'] = 1;
			$arr['evento'] = '$(".fundoo").trigger("click");';


		} elseif(isset($_POST['email']) AND $_POST['email'] AND isset($_POST['remetente']) AND $_POST['remetente'] AND (LUGAR == 'admin' OR LUGAR == 'vendedores') ){
			$input = new Input();

			$arr['title'] = 'Newsletter';
			$arr['html']  = '<div class="w940">
								<div class="p20 pt15">
									<form id="formNewsletter" method="post" action="'.$_SERVER['SCRIPT_NAME'].'">
										<input type="hidden" name="enviar_email" value="1"> ';

			$arr['html'] .= '			<div class="w940 linha mb10">
											<b class="db mb5">Email do Cliente:</b>
											<input type="text" name="email" class="w940 design" value="'.$_POST['email'].'" required >
										</div> ';

			$arr['html'] .= '			<div class="w940 linha mb10">
											<b class="db mb5">Seu Email:</b>
											<input type="text" name="remetente" class="w940 design" value="'.$_POST['remetente'].'" required >
										</div> ';

			$arr['html'] .= '			<div class="w940 linha mb10">
											<b class="db mb5">Assunto:</b>
											<input type="text" name="assunto" class="w940 design" required >
										</div> ';

			$arr['html'] .= '			<style> #formNewsletter .finput.finput_editor { padding: 0 !important; }</style> ';
			$arr['html'] .= '			<div class="w940 linha mb10">
											'.$input->editor('Texto', 'txt').'
										</div>
										<button class="botao"> <i class="mr2 fa fa-check c_verde"></i> Enviar</button>
										<div class="clear"></div>
									</form>
									<script>ajaxForm('.A.'formNewsletter'.A.');</script>
								</div>
							</div> ';

		} else {
			$verificacoes = new Verificacoes();
			$arr['violacao_de_regras'] = 1;
			$verificacoes->violacao_de_regras($arr)
		}

	$mysql->fim();
	echo json_encode($arr); 

?>