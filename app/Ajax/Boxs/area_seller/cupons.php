<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();


		if(isset($_SESSION['seller']) and $_SESSION['seller']){

			$mysql->filtro = " WHERE `id` = '".$_SESSION['seller']."' ";
			$seller_pd = $mysql->read_unico(SELLER);

			if(isset($_POST['gravar']) and $_POST['gravar']){
				$table = 'cupons';

				$mysql->filtro = " WHERE ".STATUS." AND id = '".$_POST['id']."' AND seller = '".$seller_pd->id."' ORDER BY ".ORDER." ";
				$item = $mysql->read_unico($table);
				if(isset($item->id) OR $_POST['id']==0){

	                // DATAS FIREFOX
	                    data_firefox();

					unset($mysql->campo);
		            $mysql->campo['nome'] = isset($_POST['nome']) ? $_POST['nome'] : '';
		            $mysql->campo['preco'] = isset($_POST['preco']) ? $_POST['preco'] : '';
		            $mysql->campo['preco1'] = isset($_POST['preco1']) ? $_POST['preco1'] : '';
		            $mysql->campo['data_ini'] = isset($_POST['data_ini']) ? $_POST['data_ini'] : '';
		            $mysql->campo['data_fim'] = isset($_POST['data_fim']) ? $_POST['data_fim'] : '';

		            if($_POST['id']==0){
		            	$mysql->campo['seller'] = $seller_pd->id;
						$arr['ult_id'] = $mysql->insert($table);

		            } else {
		            	$mysql->prepare = array($item->id);
		                $mysql->filtro = " WHERE `id` = ? AND seller = '".$seller_pd->id."' ";
		                $arr['ult_id'] = $mysql->update($table);
		            }



					//$arr['alert'] = 'CADASTRO EDITADO COM SUCESSO!';
					$arr['alert'] = 'z';
					$arr['evento'] = 'setTimeout(function(){ window.location.reload(); }, 200); ';

				}










			} else {
				$input = new Input();

				$mysql->filtro = " WHERE ".STATUS." AND id = '".$_POST['id']."' AND seller = '".$seller_pd->id."' ORDER BY ".ORDER." ";
				$item = $mysql->read_unico('cupons');
				if(isset($item->id)){
					$input->value = $item;
				}

				$arr['title'] = 'Cupons de Desconto';
				$arr['html']  = '<form id="formm" method="post" action="'.$_SERVER['SCRIPT_NAME'].'">
									<div class="w800 p20 w100p_800 br10">
										<input type="hidden" name="id" value="'.(isset($item->id) ? $item->id : '0').'" >


										<div class="p10">
											<span class="db pb4">Nome*</span>
											<input type="text" name="nome" class="w100p design fz14" value="'.(isset($item->nome) ? $item->nome : '').'" required>
										</div>
										<div class="clear"></div>


										<div class="wr6 p10">
											<span class="db pb4">Desconto com R$</span>
											<input type="search" name="preco" class="preco w100p design fz14" value="'.(isset($item->preco) ? $item->preco : '').'">
										</div>
										<div class="wr6 p10">
											<span class="db pb4">Desconto de  em %</span>
											<input type="search" name="preco1" class="preco1 w100p design fz14" value="'.(isset($item->preco1) ? $item->preco1 : '').'">
										</div>
										<div class="clear"></div>


										<div class="wr6 p10">
											<span class="db pb4">Data inicial</span>
											<input type="date" name="data_ini" class="w100p design fz14" value="'.(isset($item->data_ini) ? $item->data_ini : '').'">
										</div>
										<div class="wr6 p10">
											<span class="db pb4">Data Final</span>
											<input type="date" name="data_fim" class="w100p design fz14" value="'.(isset($item->data_fim) ? $item->data_fim : '').'">
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