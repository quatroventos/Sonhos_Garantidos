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

		if(isset($seller) AND $seller){
			if(isset($_POST['gravar']) and $_POST['gravar']){

				$mysql->prepare = array($_SESSION[$seller], md5($_POST['senha_atual']));
				$mysql->filtro = " where `id` = ? AND `senha` = ? ";
				$seller = $mysql->read_unico($seller);

				if(!isset($seller->id)){
					$arr['erro'][] = 'Senha Atual informada não confere!';
				} elseif(!isset($_POST['senha']) or !$_POST['senha']){
					$arr['erro'][] = 'Preencha o campo: Senha';
				} elseif($_POST['senha'] != $_POST['c_senha']){
					$arr['erro'][] = 'O campo Senha não está conferindo com o campo de confirmação!';
				}

				if(!isset($arr['erro'])){
					$mysql->prepare = array($seller->id);
					$mysql->filtro = " where `id` = ? ";
					$mysql->campo['senha'] = md5($_POST['senha']);
					$mysql->update($seller);
					$arr['alert'] = 1;
					$arr['evento'] = '$(".fundoo").trigger("click");';
				}


			} else {

				$arr['title'] = 'Alterar Senha';
				$arr['html']  = '<form id="formm" method="post" action="'.$_SERVER['SCRIPT_NAME'].'">
									<div class="p20 pt15">
										<div class="linha mb10">
											<b class="db mb5">Senha Atual:</b>
											<input type="password" name="senha_atual" class="w200 design" required >
										</div>
										<div class="linha mb10">
											<b class="db mb5">Nova Senha:</b>
											<input type="password" name="senha" class="w200 design" required >
										</div>
										<div class="linha mb10">
											<b class="db mb5">Confirmar Senha:</b>
											<input type="password" name="c_senha" class="w200 design" required >
										</div>
										<input type="hidden" name="gravar" value="1">
										<button class="botao c_verde"> <i class="mr2 faa-check"></i> Salvar</button>
										<div class="clear"></div>
									</div>
								</form>
								<script>ajaxForm('.A.'formm'.A.');</script> ';

			}
		}

	echo json_encode($arr); 

?>