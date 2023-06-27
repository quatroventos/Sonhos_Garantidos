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
				if(isset($pedidos->id) AND isset($_POST['pedidos_situacoes'])){

					unset($mysql->campo);
		            $mysql->campo['pedidos'] = $pedidos->id;
		            $mysql->campo['pedidos_situacoes'] = $_POST['pedidos_situacoes'];
	            	$mysql->campo['seller'] = $_SESSION['seller'];

					$arr['ult_id'] = $mysql->insert('pedidos_status_seller');

		            //$arr['alert'] = 'CADASTRO EDITADO COM SUCESSO!';
					$arr['alert'] = 'z';
					$arr['evento'] = 'setTimeout(function(){ window.location.reload(); }, 200); ';

				}










			} else {
	            $mysql->filtro = " WHERE id > 10 ORDER BY `id` ASC ";
	            $pedidos_situacoes = $mysql->read("pedidos_situacoes");

				$arr['title'] = 'Mudança de Status';
				$arr['html']  = '<form id="formm" method="post" action="'.$_SERVER['SCRIPT_NAME'].'">
									<input type="hidden" name="id" value="'.$_POST['id'].'" >

									<div class="w400 p20 w100p_400 br10">
										<div class="p10">
											<span class="db pb4">Novo Status*</span>
											<select name="pedidos_situacoes" class="w100p design fz14" required>
												<option value=""> - - - </option> ';
												foreach ($pedidos_situacoes as $key => $value) {
													$arr['html'] .= '<option value="'.$value->id.'">'.$value->nome.'</option> ';
												}
				$arr['html'] .= '			</select>
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