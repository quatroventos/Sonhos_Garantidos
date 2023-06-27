<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();

		$ex = explode('/area_', DIR_ALL);
		if(isset($ex[1]) AND $ex[1]){
			$ex = explode('__', $ex[1]);
			if(isset($ex[1]) AND $ex[1]){
				$seller = $ex[0];
			}
		}

		if(isset($_SESSION[$seller]) and $_SESSION[$seller]){

			$mysql->filtro = " WHERE `id` = '".$_SESSION[$seller]."' ";
			$seller_pd = $mysql->read_unico($seller);

			if(isset($_POST['gravar']) and $_POST['gravar']){
				$table = 'prestadores_servicos';

				$mysql->filtro = " WHERE ".STATUS." AND id = '".$_POST['id']."' AND ".$seller." = '".$seller_pd->id."' ORDER BY ".ORDER." ";
				$item = $mysql->read_unico($table);
				if(isset($item->id) OR $_POST['id']==0){

					unset($mysql->campo);
		            $mysql->campo['nome'] = isset($_POST['nome']) ? $_POST['nome'] : '';
		            $mysql->campo['categorias'] = isset($_POST['categorias']) ? $_POST['categorias'] : '';

		            if($_POST['id']==0){
		            	$mysql->campo[$seller] = $seller_pd->id;
						$arr['ult_id'] = $mysql->insert($table);

		            } else {
		            	$mysql->prepare = array($item->id);
		                $mysql->filtro = " WHERE `id` = ? AND ".$seller." = '".$seller_pd->id."' ";
		                $arr['ult_id'] = $mysql->update($table);
		            }


					//$arr['alert'] = 'CADASTRO EDITADO COM SUCESSO!';
					$arr['alert'] = 'z';
					$arr['evento'] = 'setTimeout(function(){ window.location.reload(); }, 200); ';

				}







			} else {
				$input = new Input();

				$mysql->filtro = " WHERE ".STATUS." AND id = '".$_POST['id']."' AND ".$seller." = '".$seller_pd->id."' ORDER BY ".ORDER." ";
				$item = $mysql->read_unico('prestadores_servicos');
				if(isset($item->id)){
					$input->value = $item;
				}

				$mysql->filtro = " WHERE ".STATUS." ORDER BY ".ORDER." ";
				$prestadores_servicos1_cate = $mysql->read('prestadores_servicos1_cate');

				$arr['title'] = 'Loja';
				$arr['html']  = '<form id="formm" method="post" action="'.$_SERVER['SCRIPT_NAME'].'">
									<div class="w800 p20 w100p_800 br10">
										<input type="hidden" name="id" value="'.(isset($item->id) ? $item->id : '0').'" >

										<div class="wr12 p10">
											<span class="db pb4">Nome*</span>
											<input type="text" name="nome" class="w100p design fz14" value="'.(isset($item->nome) ? $item->nome : '').'" required>
										</div>
										<div class="clear"></div>


										<div class="wr12 p10">
											<span class="db pb4">Categoria</span>
											<select name="categorias" class="design">
												<option>Selecione...</option> ';
												foreach ($prestadores_servicos1_cate as $key => $value) {
													$arr['html'] .= '<option value="'.$value->id.'" '.( (isset($item->categorias) AND $item->categorias==$value->id) ? 'selected' : '' ).'>'.$value->nome.'</option> ';
												}
				$arr['html'] .= '			<select>
										</div>
										<div class="clear"></div> ';


				$arr['html']  .= '		<div class="p10 tac">
											<button class="dib w200 design p10 '.BUTTON1.' br0 hover2 hoverr4">Salvar</button>
										</div>
										<div class="clear"></div>

										<input type="hidden" name="gravar" value="1">
									</div>

								</form>
								<script>ajaxForm('.A.'formm'.A.');</script>

								<script>$('.A.'[rel="tooltip"]'.A.').tooltip({html:true});</script> ';
			}




		} else {
			$arr['erro'][] = 'Você precisa está logado!';
		}

	echo json_encode($arr); 

?>