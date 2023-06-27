<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';
	require_once DIR_F.'/app/Funcoes/funcoesAdmin.php';

	$mysql = new Mysql();
	$mysql->ini();

	$arr = array();
	$arr['alert'] = 0;


		if(isset($_POST['rand']) AND $_POST['rand'] AND isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id){

			if(isset($_POST['gravar']) AND $_POST['gravar']){
				$arr['alert'] = 'z';
				$arr['evento']  = '$('.A.'span.color_'.$_POST['rand'].A.').parent().find('.A.'input[type=color]'.A.').val('.A.$_POST['hex'].A.');';
				$arr['evento'] .= 'fechar_all();';

			} else {
				$arr['title'] = 'Cor em Hexadecimal';
				$arr['html']  = '<div class="">
									<div class="p20 pt15">
										<form id="alterarSenha" method="post" action="'.$_SERVER['SCRIPT_NAME'].'">
											<input type="text" name="hex" class="w100p h40 fz14 tac design" value="'.$_POST['hex'].'" minlength="7" maxlength="7" required>

											<div class="mt15 tar">
												<button class="botao"> <i class="mr2 faa-check c_verde"></i> Salvar</button>
											</div>
											<div class="clear"></div>

											<input type="hidden" name="gravar" value="1">
											<input type="hidden" name="rand" value="'.$_POST['rand'].'">
										</form>
										<script>ajaxForm('.A.'alterarSenha'.A.'); setTimeout(function(){  $('.A.'input[name="hex"]'.A.').focus(); }, .5);</script>
									</div>
							    </div> ';
			}
		}

	$mysql->fim();
	echo json_encode($arr); 

?>