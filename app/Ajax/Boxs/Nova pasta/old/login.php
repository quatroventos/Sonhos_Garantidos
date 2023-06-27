<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = 0;


		$arr['title'] = 'Fazer Login';
		$arr['html']  = '<form id="form_login" method="post" action="" enctype="multipart/form-data" >
							<div class="w340 p20 pt15">

								<div class="posr mt5">
									<i class="faa-envelope-o posa t0 l0 mt12 ml15 fz20 cor_666"></i>
									<input type="text" name="email" class="w100p p20 pl45 pr10 fz14 bdw2 br5 design" placeholder="Digite seu email" required >
								</div>
								<div class="posr mt15">
									<i class="faa-lock posa t0 l0 mt10 ml10 fz24 cor_666"></i>
									<input type="password" name="senha" class="w100p p20 pl40 pr10 fz14 bdw2 br5 design" placeholder="Digite seu senha" required >
								</div>

								<div class="mt15">
									<button class="design w100p p12 pl30 pr30 fz16 fwb br20 '.BUTTON1.'">Login</button>
								</div>
								<div class="mt20 tac">
									<a class="cor_00aec2 link" onclick="boxs('.A.'esqueci_senha'.A.');">Não sabe sua senha? </a>
								</div>
							</div>
							<div class="pt15 pb15 mt5 tac back_f2f0f8">
								Não tem conta?
								<a class="cor_00aec2 link" href="'.DIR.'/cadastro/">Cadastre-se grátis! </a>
							</div>

							<input type="hidden" name="fazer_login" value="1">
							<input type="hidden" name="direcionar" value="refresh">
						</form>
						<script>ajaxForm('.A.'form_login'.A.', '.A.'login.php'.A.');</script> ';


	echo json_encode($arr); 

?>