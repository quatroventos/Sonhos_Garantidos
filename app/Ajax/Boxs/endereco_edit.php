<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = 0;


		if(isset($_POST['gravar']) and $_POST['gravar']){

			if(isset($_POST['endereco'])){
				unset($mysql->campos);
				$mysql->campo['principal'] = 0;
				$mysql->prepare = array($_SESSION['x_site']->id);
				$mysql->filtro = " WHERE ".STATUS." AND `cadastro` = ? ";
				$ult_id = $mysql->update('cadastro_enderecos');

				unset($mysql->campos);
				$mysql->campo['principal'] = 1;
				$mysql->prepare = array($_POST['endereco']);
				$mysql->filtro = " WHERE ".STATUS." AND `id` = ? ";
				$ult_id = $mysql->update('cadastro_enderecos');

				// Resetar Frete
				unset($_SESSION['carrinho']['frete']['valor']);

				$arr['alert'] = 'z';
				$arr['evento']  = '$(".fundoo").trigger("click"); ';
				$arr['evento'] .= 'CC_atualizar(); ';
			}



		} elseif(isset($_POST['delete']) and $_POST['delete']){

			unset($mysql->campos);
			$mysql->campo['status'] = 0;
			$mysql->campo['principal'] = 0;
			$mysql->prepare = array($_POST['delete']);
			$mysql->filtro = " WHERE ".STATUS." AND `id` = ? ";
			$mysql->update('cadastro_enderecos');

			if(isset($_SESSION['carrinho']['frete']['endereco_atual']) and $_POST['delete'] == $_SESSION['carrinho']['frete']['endereco_atual']){
				unset($_SESSION['carrinho']['frete']['endereco_atual']);
				unset($_SESSION['carrinho']['frete']['cep']);
				unset($_SESSION['carrinho']['frete']['rua']);
				unset($_SESSION['carrinho']['frete']['numero']);
				unset($_SESSION['carrinho']['frete']['complemento']);
				unset($_SESSION['carrinho']['frete']['bairro']);
				unset($_SESSION['carrinho']['frete']['estados']);
				unset($_SESSION['carrinho']['frete']['cidades']);
			}

			$arr['alert'] = 1;
			$arr['evento'] = '$(".linha_'.$_POST['delete'].'").hide();';
			$arr['evento'] .= 'CC_atualizar(); ';


		} else {

			$arr['title'] = 'Selecionar Endereço';
			$arr['html']  = '<div class="p20 pt15 cor_333">
								<form id="EditEndereco" class="fz12" method="post" action="'.$_SERVER['SCRIPT_NAME'].'"> ';

									$mysql->prepare = array($_SESSION['x_site']->id);
									$mysql->filtro = " WHERE ".STATUS." AND `cadastro` = ? ";
									$cadastro_enderecos = $mysql->read('cadastro_enderecos');
									if($cadastro_enderecos){
										foreach ($cadastro_enderecos as $key => $value) {
											$arr['html'] .= '<div class="linha linha_'.$value->id.' p5 pl10 pr10 mb5 br10"> ';
												$arr['html'] .= '<a onclick="ajaxNormal('.A.'Boxs/endereco_edit.php'.A.', '.A.'delete='.$value->id.A.')" class="mr4" title="Deletar Enredeço"> <i class="faa-times fz14 c_vermelho"></i> </a> ';
												$arr['html'] .= '<label class="m0"> ';
													$arr['html'] .= '<input type="radio" name="endereco" value="'.$value->id.'" '.iff($value->principal==1, 'checked').' onclick="$('.A.'#EditEndereco'.A.').submit();" > ';
													$arr['html'] .= $value->rua.', '.$value->numero.' '.$value->complemento.' - '.$value->bairro.' - '.$value->cidades.' / '.$value->estados.' - '.$value->cep;
												$arr['html'] .= '</label> ';
											$arr['html'] .= '</div> ';
										}

			$arr['html'] .= '			<input type="hidden" name="gravar" value="1">
										<div class="clear"></div>
										<style>
											#EditEndereco .linha:hover { background: #eee; }
										</style>
									</form>
									<script>ajaxForm('.A.'EditEndereco'.A.');</script
								</div> ';
			} else {
				$arr['evento'] = "boxs('endereco_add'); ";				
			}


		}

	echo json_encode($arr); 

?>