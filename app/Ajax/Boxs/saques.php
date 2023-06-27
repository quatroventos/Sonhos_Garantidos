<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();


		if(isset($_SESSION['x_site']->id) and $_SESSION['x_site']->id){

			$mysql->filtro = " where tipo = 'pagamentos' ";
			$pagamentos = $mysql->read_unico("configs");

			$mysql->filtro = " WHERE `id` = '".$_SESSION['x_site']->id."' ";
			$cadastro = $mysql->read_unico('cadastro');

			if(isset($_POST['gravar']) and $_POST['gravar'] AND isset($cadastro->id) AND $cadastro->id){

				if(!isset($_POST['preco'])){
					$arr['erro'][] = 'Digite um valor maior que R$ 0,00!';

				} else if($_POST['preco'] <= 0){
					$arr['erro'][] = 'Digite um valor maior que R$ 0,00!';

				} else if($_POST['preco'] > $cadastro->saldo){
					$arr['erro'][] = 'Você possue apenas '.preco($cadastro->saldo, 1).'!';

				} else {

					unset($mysql->campo);
		            $mysql->campo['saldo'] = $cadastro->saldo - $_POST['preco'];
					$mysql->filtro = " WHERE id = '".$cadastro->id."' ";
					$arr['ult_id_cadastro'] = $mysql->update('cadastro');

					unset($mysql->campo);
		            $mysql->campo['preco'] = $_POST['preco'] - $pagamentos->preco3;
	            	$mysql->campo['taxa_saque'] = $pagamentos->preco3;
	            	$mysql->campo['cadastro'] = $cadastro->id;
					$arr['ult_id'] = $mysql->insert('cadastro_saques');

					//$arr['alert'] = 'CADASTRO EDITADO COM SUCESSO!';
					$arr['alert'] = 'z';
					$arr['evento'] = 'setTimeout(function(){ window.location.reload(); }, 200); ';
				}










			} else {

				$arr['title'] = 'Solicitar Saque';
				$arr['html']  = '<form id="formm" method="post" action="'.$_SERVER['SCRIPT_NAME'].'">
									<div class="w600 p20 w100p_600 br10">
										<input type="hidden" name="id" value="'.(isset($item->id) ? $item->id : '0').'" >

										<div class="p10">
											<b class="db pb4">Valor:</b>
											<input type="search" name="preco" class="preco w100p design fz14">
										</div>
										<div class="clear"></div>

										<div class="p10 pt0">*Obs.: Será cobrado uma taxa de '.preco($pagamentos->preco3, 1).' por saque</div>

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