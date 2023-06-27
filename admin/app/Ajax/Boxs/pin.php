<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';
	require_once DIR_F.'/app/Funcoes/funcoesAdmin.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = 0;


		if(isset($_POST['id']) and $_POST['id'] AND isset($_POST['lat']) and $_POST['lat'] AND isset($_POST['lng']) and $_POST['lng'] AND isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id){
			$mysql->campo['rua'] = $_POST['rua'];
			$mysql->campo['numero'] = $_POST['numero'];
			$mysql->campo['bairros'] = $_POST['bairro'];
			$mysql->campo['cidades'] = $_POST['cidade'];
			$mysql->campo['estados'] = $_POST['estado'];
			$mysql->campo['cep'] = $_POST['cep'];
			$mysql->campo['lat'] = $_POST['lat'];
			$mysql->campo['lng'] = $_POST['lng'];
			$mysql->campo['ok'] = 2;
			$mysql->filtro = " WHERE id = '".$_POST['id']."' ";
			$ult_id = $mysql->update('onde_comprar');

			$arr['alert'] = 1;
			$arr['evento'] = 'datatable_update(); $(".fundoo").trigger("click");';


		} else if(isset($_POST['id']) and $_POST['id'] AND isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id){

			$mysql->filtro = " where id = '".$_POST['id']."' ";
			$cadastro = $mysql->read_unico('onde_comprar');
			if(isset($cadastro->id)){

				$endereco = busca_endereco($cadastro->endereco);

				$arr['title'] = 'Buscando Localização';
				$arr['html']  = '<div class="w600 m-a p20 pt15">
									<div class="w340 m-a">
										<div><b>Endereço Cadastrado:</b> '.$cadastro->endereco.'</div>
										<div class="pt5">
											<b>Endereço Buscado no Google:</b> ';
				$arr['html'] .= 			$endereco['rua'];
				$arr['html'] .= 			$endereco['numero'] ? ', '.$endereco['numero'] : '';
				$arr['html'] .= 			$endereco['bairro'] ? ' - '.$endereco['bairro'] : '';
				$arr['html'] .= 			' - '.$endereco['cidade'].' / '.$endereco['estado'];
				$arr['html'] .= 			$endereco['cep'] ? ' - CEP: '.$endereco['cep'] : '';
				$arr['html'] .= '		</div>

										<div class="pt10">
											<form id="pin" method="post" action="'.$_SERVER['SCRIPT_NAME'].'">
												<input type="hidden" name="id" value="'.$_POST['id'].'" />
												<input type="hidden" name="rua" value="'.$endereco['rua'].'" />
												<input type="hidden" name="numero" value="'.$endereco['numero'].'" />
												<input type="hidden" name="bairro" value="'.$endereco['bairro'].'" />
												<input type="hidden" name="cidade" value="'.$endereco['cidade'].'" />
												<input type="hidden" name="estado" value="'.$endereco['estado'].'" />
												<input type="hidden" name="cep" value="'.$endereco['cep'].'" />
												<input type="hidden" name="lat" value="'.$endereco['lat'].'" />
												<input type="hidden" name="lng" value="'.$endereco['lng'].'" />
												<input type="hidden" name="gravar" value="1">
												<button class="botao"> <i class="mr2 faa-check c_verde"></i> Salvar</button>
												<button type="button" class="botao" onclick="fechar_all()"> <i class="mr2 faa-times c_vermelho"></i> Fechar</button>
											</form>
											<script>ajaxForm('.A.'pin'.A.');</script>
										</div>
									</div>

									<div class="pt10">'.mapa1('100%', '300', $endereco['lat'], $endereco['lng']).'</div>
								</div> ';

			} else {
				$arr['erro'][] = "Nenhum Usuario encontrado!";
			}


		} else {
			$arr['erro'][] = "Nenhum Usuario encontrado!";
		}

	echo json_encode($arr); 

?>