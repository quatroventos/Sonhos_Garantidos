<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = 0;


		if(isset($_POST['id']) and $_POST['id']){

			if(isset($_SESSION['x_site']->id)){
				$mysql->filtro = " where id = '".$_SESSION['x_site']->id."' ";
				$cadastro = $mysql->read_unico('cadastro');
			}
			$nome = isset($cadastro->nome) ? $cadastro->nome : '';

			$mysql->filtro = " where status = 1 and lang = '".LANG."' and id = '".$_POST['id']."' order by ordem asc, id desc ";
			$produtos = $mysql->read_unico('produtos');

			$ref = isset($_POST['atributos']) ? '('.$_POST['atributos'].')' : '';

			$arr['title'] = 'Indique um Amigo';
			$arr['html']  = '<div class="w360 m-a p25 pt15 w100p_360">
								<form id="ajaxForm" method="post" action="'.$_SERVER['SCRIPT_NAME'].'">
									<input name="assunto" type="hidden" value="Indicação de um amigo" />
									<input type="hidden" name="produtos" value="<a href='.DIR_ALL.url('produto', $produtos).'>'.$produtos->nome.'</a>" >
									<input type="hidden" name="mail[nome][]" value="Produtos" />

									<div class="linha mb10">
										<b class="db mb5">Seu Nome:</b>
										<input type="text" name="mail[campo][]" value="'.$nome.'" class="w300 design" required >
										<input type="hidden" name="mail[nome][]" value="Nome do Seu Amigo" />
									</div>
									<div class="linha mb10">
										<b class="db mb5">Email do seu Amigo:</b>
										<input type="email" name="to" class="w300 design" required >
									</div>
									<div class="linha mb15">
										<b class="db mb5">Texto:</b>
							            <textarea name="mail[campo][]" class="w300 h150 design" placeholder="Mensagem"></textarea>
										<input type="hidden" name="mail[nome][]" value="Mensagem" />
									</div>
									<button class="botao"> <i class="mr2 faa-check c_verde"></i> Enviar</button>
									<div class="clear"></div>
								
									<input type="hidden" name="log_gravacoes" value="1" />
								</form>
								<script>ajaxForm('.A.'ajaxForm'.A.', '.A.'mail.php'.A.')</script>
							</div> ';

		}

	echo json_encode($arr); 

?>