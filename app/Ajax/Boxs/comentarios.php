<?

	if(!isset($comentarios_box)){
		$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
		require_once $DIR_F[0].'/system/conecta.php';
		require_once DIR_F.'/plugins/Tng/tng/tNG.inc.php';

		$mysql = new Mysql();
		$mysql->ini();
	}

	$arr = array();
	$arr['alert'] = 0;


		// GRAVAR
			if(isset($_POST['gravar']) and $_POST['gravar']){

	        	$mysql->campo['status'] = 0;
	        	$mysql->campo['cadastro'] = $_SESSION['x_site']->id;
	        	$mysql->campo['item'] = $_POST['item'];
	        	$mysql->campo['tabelas'] = $_POST['tabelas'];
	        	$mysql->campo['star'] = $_POST['star'];
	        	$mysql->campo['nome'] = $_POST['nome'];
	        	$mysql->campo['txt'] = $_POST['txt'];
	            $arr['ult_id'] = $mysql->insert('mais_comentarios');

				unset($mysql->campo);
				$table = 'mais_comentarios';
	            $upload = new Upload();
	            if(isset($_FILES)){
	            	$upload->fileUpload($arr['ult_id'], '../../../');
	            }


				$email = new Email();
				$email->assunto = 'Novo comentário do site '.NOME;
				$email->txt = 'Um novo comentário foi feito pelo Usuário: '.$_POST['nome'].' no Módulo: '.ucfirst($_POST['tabelas']).' - id: #'.$_POST['item'];
				$email->enviar();

				$arr['alert'] = 'Comentário Enviado com Sucesso! Aguarde a Liberação do Administrador...';
				$arr['evento'] = ' window.location.reload(); ';
			}
		// GRAVAR


		// ADD COMENTARIO
			elseif(isset($_POST['add']) and $_POST['add']){

				// VERIFICAR SE ESTA LOGADO
				if(!isset($_SESSION['x_site']->id)){
					$arr['title'] = 'Escrever Comentários';
					$arr['html']  = ' <div class="p20 tac"> Você precisa se logar para poder fazer um comentário! </div> ';


				} else {
					// VERIFICAR SE O PEDIDO JA FOI ENTREGE
					$mysql->prepare = array($_POST['item']);
					$mysql->filtro = " WHERE `id` = ? ";
					$pedidos = $mysql->read_unico('pedidos');
					if(!(isset($pedidos->situacao) AND $pedidos->situacao==101)){
						$arr['title'] = 'Escrever Comentários';
						$arr['html']  = ' <div class="p20 tac"> Você só pode qualificar um vendedor depois que o produto for entrege! </div> ';


					} else {
						// VERIFICAR SE JA FEZ COMENTARIO
						$mysql->prepare = array($_SESSION['x_site']->id, $_POST['tabelas'], $_POST['item']);
						$mysql->filtro = " WHERE `cadastro` = ? AND `tabelas` = ? AND `item` = ? ";
						$comentarios = $mysql->read_unico('mais_comentarios');
						if(isset($comentarios->id)){
							$arr['title'] = 'Escrever Comentários';
							$arr['html']  = ' <div class="p20 tac"> Você já comentou este produto! </div> ';

						} else {
							$mysql->prepare = array($_SESSION['x_site']->id);
							$mysql->filtro = " WHERE `id` = ? ";
							$cadastro = $mysql->read_unico('cadastro');
							$nome = isset($cadastro->nome) ? $cadastro->nome : '';
							$arr['title'] = 'Escrever Comentários';
							$arr['html']  = '<div class="w340 m-a p20 pt15 cor_333">
												<form id="comentarios" method="post" action="'.$_SERVER['SCRIPT_NAME'].'">
													<input type="hidden" name="item" value="'.$_POST['item'].'" >
													<input type="hidden" name="tabelas" value="'.$_POST['tabelas'].'" >

													<div class="linha mb10 fz14 cor_666">
														<b class="fll p2">Avaliar: &nbsp;</b>
														<input type="radio" name="star" value="0" required> 0 &nbsp;
														<input type="radio" name="star" value="1" required> 1 &nbsp;
														<input type="radio" name="star" value="2" required> 2 &nbsp;
														<input type="radio" name="star" value="3" required> 3 &nbsp;
														<input type="radio" name="star" value="4" required> 4 &nbsp;
														<input type="radio" name="star" value="5" required> 5
													</div>
													<div class="linha mb10">
														<b class="db mb5">Nome:</b>
														<input type="text" name="nome" value="'.$nome.'" class="w300 design" required >
													</div>
													<div class="linha mb10">
														<b class="db mb5">Fotos:</b>
														<div class=""><input type="file" name="foto"></div>
														<div class="pt5"><input type="file" name="foto1"></div>
														<div class="pt5"><input type="file" name="foto2"></div>
													</div>
													<div class="linha mb15">
														<b class="db mb5">Comentário:</b>
														<textarea name="txt" class="w300 h150 design"></textarea>
													</div>
													<input type="hidden" name="gravar" value="1">
													<button class="botao h30 pl10 pr10"> <i class="mr2 faa-check c_verde"></i> Enviar</button>
													<div class="clear"></div>
												</form>
												<script>ajaxForm('.A.'comentarios'.A.'); votar_star();</script>
											</div> ';
						}

					}

				}

			}
		// ADD COMENTARIO

		// VER COMENTARIOS
			else {
				if($_POST['tabelas'] == 'cadastro'){
					$mysql->prepare = array($_POST['item']);
					$mysql->filtro = " WHERE `status` = 1 AND `lang` = '".LANG."' AND `cadastro` = ? ORDER BY `id` DESC ";

				} elseif(isset($_POST['unico'])){
					$mysql->prepare = array($_POST['tabelas'], $_POST['item']);
					$mysql->filtro = " WHERE `status` = 1 AND `lang` = '".LANG."' AND `tabelas` = ? AND `item` = ? AND cadastro = '".$_SESSION['x_site']->id."' ORDER BY `id` DESC ";

				} elseif(isset($_POST['comentarios_rel']) AND $_POST['comentarios_rel'] == 'produtos'){
					$mysql->prepare = array($_POST['tabelas']);
					$mysql->filtro = " WHERE `status` = 1 AND `lang` = '".LANG."' AND `tabelas` = ? AND `item` IN ( SELECT `id` FROM `pedidos` WHERE ".STATUS." AND produtos LIKE '%-".$_POST['item']."-%' ) ORDER BY `id` DESC ";

				} else {
					$mysql->filtro = " WHERE 0 ";
				}
				$comentarios = $mysql->read('mais_comentarios');

				$img = new Imagem();
				$img1 = new Imagem();
				$img2 = new Imagem();
				$arr['title'] = 'Comentários';
				$arr['html']  = '<div class="w700 p20 pt15 w100p_700 '.(isset($comentarios_box) ? 'w100p bd_eee br5' : '').'"> ';
									foreach ($comentarios as $key => $value) {
										if(!isset($comentarios_box)){
											$img->caminho = '../../../web/fotos/'.FOTOS;
										}
										$img->carregamento = 0;
										$img->link = 2;
										$img->tags = ' class="bd_ccc br5" ';

										if(!isset($comentarios_box)){
											$img1->caminho = '../../../web/fotos/'.FOTOS;
										}
										$img1->carregamento = 0;
										$img1->link = 2;
										$img1->tags = ' class="bd_ccc br5" ';
										$img1->foto = 'foto1';

										if(!isset($comentarios_box)){
											$img2->caminho = '../../../web/fotos/'.FOTOS;
										}
										$img2->carregamento = 0;
										$img2->link = 2;
										$img2->tags = ' class="bd_ccc br5" ';
										$img2->foto = 'foto2';
										$arr['html'] .= '<div class="mb20">
															<div class="fll">
																<b>Nome: </b> '.$value->nome.'
																<div class="h05"></div>
																<b>Avaliação:</b> '.star_icon($value->star, 5).'
																<div class="h05"></div>
																<b>Texto: </b> '.$value->txt.'
															</div>
															<div class="flr">
																'.iff($value->foto, '<div class="dib pr5 vam">'.$img->img($value, 50, 50).'</div>').'
																'.iff($value->foto1, '<div class="dib pl5 pr5 vam">'.$img1->img($value, 50, 50).'</div>').'
																'.iff($value->foto2, '<div class="dib pl5 vam">'.$img2->img($value, 50, 50).'</div>').'
															</div>
															<div class="clear"></div>
														 </div>';
									}
									if(!$comentarios){									
										$arr['html'] .= '<div class="pt10 fz14 tac">Ninguem comentou este produto ainda!</div>';
									}

				$arr['html'] .= '</div> ';


			}
		// VER COMENTARIOS

	if(!isset($comentarios_box)){
		$mysql->fim();
		echo json_encode($arr); 
	}

?>