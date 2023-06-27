<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = 0;


		$arr['title'] = 'Contato';
		$arr['html']  = '<div class="w340 p20 pt15">
							<form id="form_fale" method="post" action="" enctype="multipart/form-data" >
								<div class="linha mb10">
									<b class="db mb5">Nome:</b>
									<input type="text" name="mail[campo][1]" class="w300 design" required >
									<input type="hidden" name="mail[nome][1]" value="Nome" />
								</div>
								<div class="linha mb10">
									<b class="db mb5">Email:</b>
									<input type="text" name="mail[campo][2]" class="w300 design" required >
									<input type="hidden" name="mail[nome][2]" value="Email" />
								</div>
								<div class="linha mb10">
									<b class="db mb5">Assunto:</b>
									<input type="text" name="mail[campo][4]" class="w300 design" required >
									<input type="hidden" name="mail[nome][4]" value="Assunto" />
								</div>
								<div class="linha mb15">
									<b class="db mb5">Mensagem:</b>
									<textarea name="mail[campo][10]" class="w300 h100 design" required></textarea>
									<input type="hidden" name="mail[nome][10]" value="Mensagem" />
								</div>
								<input type="reset" class="dni">
								<input type="hidden" name="log_gravacoes" value="1">
								<button class="botao h30 pl10 pr10"> <i class="mr2 faa-check c_verde"></i> Enviar</button>
								<div class="clear"></div>
							</form>
							<script>ajaxForm('.A.'form_fale'.A.', '.A.'mail.php'.A.');</script>
						</div> ';


	echo json_encode($arr); 

?>