<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();


		if(isset($_SESSION['seller']) and $_SESSION['seller']){

			if(isset($_POST['gravar']) and $_POST['gravar']){
	            $mysql->prepare = array($_POST['id']);
				$mysql->filtro = " WHERE `id` = ? AND seller LIKE '%-".$_SESSION['seller']."-%' ";
				$pedidos = $mysql->read_unico('pedidos');

				unset($mysql->campo);
	            $mysql->campo['rastreamento'] = $_POST['rastreamento'];

				$mysql->filtro = " WHERE id = '".$pedidos->id."' ";
				$arr['ult_id'] = $mysql->update('pedidos');

				// ENVIAR EMAIL
				$mysql->prepare = array($pedidos->cadastro);
				$mysql->filtro = " WHERE `id` = ? ";
				$cadastro = $mysql->read_unico('cadastro');
				if(isset($cadastro->id) and $_POST['rastreamento']){
					$mysql->filtro = " WHERE id = 53 ";
					$textos = $mysql->read_unico('textos');
					$var_email = 'DIR->'.DIR.'&nome->'.$cadastro->nome.'&rastreamento->'.$_POST['rastreamento'].'&id->'.$pedidos->id.'&produtos->'.cod('asc->html', $pedidos->nome).'&valor->'.preco($pedidos->valor_total, 1);

					$email = new Email();
					$email->to			= $cadastro->email;
					//$email->remetente	= nome_site();
					$email->assunto		= var_email($textos->nome, $var_email);
					$email->txt 		= var_email(txt($textos), $var_email);
					$email->enviar();
				}


	            //$arr['alert'] = 'CADASTRO EDITADO COM SUCESSO!';
				$arr['alert'] = 'z';
				$arr['evento'] = 'setTimeout(function(){ window.location.reload(); }, 200); ';










			} else {
				$input = new Input();

				$mysql->filtro = " WHERE ".STATUS." AND id = '".$_POST['id']."' ORDER BY ".ORDER." ";
				$pedidos = $mysql->read_unico('pedidos');

				$arr['title'] = 'Código de Rastreamento';
				$arr['html']  = '<form id="formm" method="post" action="'.$_SERVER['SCRIPT_NAME'].'">
									<div class="w400 p20 w100p_400 br10">
										<input type="hidden" name="id" value="'.$_POST['id'].'" >

										<div class="p10">
											<span class="db pb4">Rastreamento*</span>
											<input type="text" name="rastreamento" class="w100p design fz14" value="'.$pedidos->rastreamento.'" required>
										</div>
										<div class="clear"></div>


										<div class="p10 tac">
											<button class="dib w200 design p10 '.BUTTON1.' br0 hover2 hoverr4">Salvar</button>
										</div>
										<div class="clear"></div>

										<input type="hidden" name="gravar" value="1">
									</div>

								</form>
								<script>ajaxForm('.A.'formm'.A.');</script> ';
			}




		} else {
			$arr['erro'][] = 'Você precisa está logado!';
		}

	echo json_encode($arr); 

?>