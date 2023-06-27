<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';
	require_once DIR_F.'/app/Funcoes/funcoesAdmin.php';

	$mysql = new Mysql();
	$mysql->ini();

	$arr = array();


		if(isset($_POST['enviar_newsletter']) AND $_POST['enviar_newsletter'] AND LUGAR == 'admin' AND isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id){

			$_POST['txt'] = stripslashes($_POST['txt']);

			$email = new Email();
			$email->assunto = $_POST['assunto'];
			$email->titulo = str_replace('src="', 'src="http://'.$_SERVER['HTTP_HOST'], $_POST['txt']);

			foreach($_POST['newsletter'] as $nome_post => $valor_post){
				$mysql->prepare = array($valor_post);
				$mysql->filtro = " WHERE `id` = ? ";
				$banco_newsletter = $mysql->read("newsletter");
				foreach($banco_newsletter as $newsletter){
					$email->to = $newsletter->email;
					$email->enviar();
				}
			}

			$arr['alert'] = 1;
			$arr['evento'] = '$(".fundoo").trigger("click");';


		} elseif(LUGAR == 'admin') {

			$arr['title'] = 'Newsletter';
			$arr['html']  = '<div class="w940">
								<div class="p20 pt15">
									<form id="formNewsletter" method="post" action="'.$_SERVER['SCRIPT_NAME'].'"> ';

						$mysql->filtro = " WHERE `status` = 1 AND `lang` = '".LANG."' ORDER BY `nome` ASC, `id` DESC ";
						$banco_newsletter1_cate = $mysql->read('newsletter1_cate');
						$mysql->filtro = " WHERE `status` = 1 AND `lang` = '".LANG."' ORDER BY `nome` ASC, `id` DESC ";
						$banco_newsletter = $mysql->read('newsletter');

						$arr['html'] .= '<label><input type="checkbox" name="marcar_todos" id="marcar_todos" class="design" onclick="selecionar_checkbox()" /> Marcar / Desarmar Todos</label> <div class="h5"></div> ';
						$arr['html'] .= '<div class="clear h10"></div> ';

						$arr['html'] .= '<div class="linha mb10"> ';
							foreach($banco_newsletter1_cate as $categorias){
			                    $arr['html'] .= '<label class="fwb fz14"><input type="checkbox" name="categorias_'.$categorias->id.'" id="categorias_'.$categorias->id.'" class="design" onclick="selecionar_checkbox_categorias('.$categorias->id.')" /> '.$categorias->nome.'</label> <div class="h5"></div> ';
								foreach($banco_newsletter as $newsletter){
									if($categorias->id == $newsletter->categorias){
			                        	$arr['html'] .= '<div class="fll pl20 pb5"> ';
			                        		$arr['html'] .= '<label><input type="checkbox" name="newsletter[]" id="newsletter[]" value="'.$newsletter->id.'" class="design newsletter_'.$categorias->id.' selecionar_'.$categorias->id.'" /> '.$newsletter->nome.' ('.$newsletter->email.')</label> ';
			                        	$arr['html'] .= '</div> ';
			                        }
			                    }
								$arr['html'] .= '<div class="clear h10"></div> ';
							}
						$arr['html'] .= '</div> ';

						$arr['html'] .= '<div class="linha mb10">
											<b class="db mb5">Assunto:</b>
											<input type="text" name="assunto" class="w100p design" required >
										</div> ';

						$input = new Input();
						$arr['html'] .= '<style> #formNewsletter .finput.finput_editor { padding: 0 !important; }</style> ';
						$arr['html'] .= '<div class="linha mb10">
											'.$input->editor('Texto', 'txt').'
										</div>
										<input type="hidden" name="enviar_newsletter" value="1">
										<div class="tar">
											<button class="botao"> <i class="mr2 faa-check c_verde"></i> Enviar</button>
										</div>
										<div class="clear"></div>
									</form>
									<script>ajaxForm('.A.'formNewsletter'.A.');</script>
								</div>
							</div> ';

		} else {
			$verificacoes = new Verificacoes();
			$arr['violacao_de_regras'] = 1;
			$verificacoes->violacao_de_regras($arr);
		}

	$mysql->fim();
	echo json_encode($arr); 

?>