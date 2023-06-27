<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = 0;


		if(isset($_POST['gravar']) and $_POST['gravar']){

			$verificar_rua = str_replace(' ', '', $_POST['rua']);

			if(!$verificar_rua){
				$arr['erro'][] = 'Preencha a Rua!';

			} elseif(!$_POST['estados'] OR !$_POST['cidades']){
				$arr['erro'][] = 'Insira Corretamente o Cep para Cadastar a Cidade e Estado!';

			} else {
				$mysql->campo['principal'] = 0;
				$mysql->prepare = array($_SESSION['x_site']->id);
				$mysql->filtro = " WHERE `cadastro` = ? ";
				$ult_id = $mysql->update('cadastro_enderecos');

				unset($mysql->campo);
				$mysql->campo['cadastro'] = $_SESSION['x_site']->id;
				$mysql->campo['principal'] = 1;
				$mysql->campo['cep'] = $_POST['cep'];
				$mysql->campo['rua'] = $_POST['rua'];
				$mysql->campo['numero'] = $_POST['numero'];
				$mysql->campo['complemento'] = $_POST['complemento'];
				$mysql->campo['bairro'] = $_POST['bairro'];
				$mysql->campo['estados'] = $_POST['estados'];
				$mysql->campo['cidades'] = $_POST['cidades'];
				$ult_id = $mysql->insert('cadastro_enderecos');

				$arr['alert'] = 1;
				$arr['evento']  = '$(".fundoo").trigger("click"); ';
				$arr['evento'] .= 'CC_atualizar(); ';
			}



		} else {

			$arr['title'] = 'Adicionar Endereço';
			$arr['html']  = '<div class="p20 pt15 cor_333">
								<form id="AddEndereco" class="fz12" method="post" action="'.$_SERVER['SCRIPT_NAME'].'">
									<div class="linha mb10">
										<b class="w80 fll pt10 mb5">CEP*:</b>
										<input type="text" name="cep" id="cep" class="w120 w100p_120 design cep" onblur="cepp(this)" required >
										<a href="https://buscacepinter.correios.com.br/app/endereco/index.php?t" target="_blank" class="pt5 pl10 fz12 c_azul link">não sei meu CEP</a>
									</div>
									<div class="linha mb10">
										<b class="w80 fll pt10 mb5">Rua*:</b>
										<input type="text" name="rua" id="rua" class="w250 w100p_250 design" required >
									</div>
									<div class="linha mb10">
										<b class="w80 fll pt10 mb5">Número*:</b>
										<input type="text" name="numero" id="numero" class="w200 w100p_200 design" required >
									</div>
									<div class="linha mb10">
										<b class="w80 fll pt10 mb5">Compl.:</b>
										<input type="text" name="complemento" id="complemento" class="w200 w100p_200 design" >
									</div>
									<div class="linha mb10">
										<b class="w80 fll pt10 mb5">Bairro:</b>
										<input type="text" name="bairro" id="bairro" class="w200 w100p_200 design" required>
									</div>
									<div class="linha mb10">
										<b class="w80 fll pt10 mb5">Cidade*:</b>
										<div class="w200 fll">
											<div class="p10 bd_ccc br2 back_f7f7f7" id="cidades_html" style="min-height: 36px; overflow-y: hidden; white-space: nowrap;"></div>
											<input type="hidden" name="cidades" id="cidades" class="w200 w100p_200 design" required>
										</div>
										<div class="clear"></div>
									</div>
									<div class="linha mb10">
										<b class="w80 fll pt10 mb5">Estado*:</b>
										<div class="w200 fll">
											<div class="p10 bd_ccc br2 back_f7f7f7" id="estados_html" style="min-height: 36px; overflow-y: hidden; white-space: nowrap;"></div>
											<input type="hidden" name="estados" id="estados" class="w200 w100p_200 design" required>
										</div>
										<div class="clear"></div>
									</div>

									<input type="hidden" name="gravar" value="1">
									<span class="w80 fll mb5">&nbsp;</span>
									<button class="botao"> <i class="mr2 faa-check c_verde"></i> Salvar</button>
									<div class="clear"></div>
								</form>
								<script>ajaxForm('.A.'AddEndereco'.A.');</script>
							</div> ';

		}

	echo json_encode($arr); 

?>