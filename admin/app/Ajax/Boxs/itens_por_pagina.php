<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';
	require_once DIR_F.'/app/Funcoes/funcoesAdmin.php';

	$mysql = new Mysql();
	$mysql->ini();

	$arr = array();

		if(isset($_POST['gravar']) AND $_POST['gravar'] AND LUGAR == 'admin' AND isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id){
			$arr['alert'] = 1;

			$mysql->prepare = array($_SESSION['x_admin']->id);
			$mysql->filtro = " WHERE `id` = ? ";
			$mysql->campo['itens_pagina'] = $_POST['itens_pagina'];
			$mysql->update('usuarios');		

			$arr['evento'] = 'window.location.reload(); ';


		} elseif(isset($_POST['reset']) AND $_POST['reset']){
			$arr['alert'] = 1;

			$mysql->prepare = array($_SESSION['x_admin']->id);
			$mysql->filtro = " WHERE `id` = ? ";
			$mysql->campo['itens_pagina'] = '';
			$mysql->update('usuarios');		

			$arr['evento']  = '$("select[name=itens_pagina]").val(25); ';
			$arr['evento'] .= 'window.location.reload(); ';


		} elseif(LUGAR == 'admin') {
			$mysql->prepare = array($_SESSION['x_admin']->id);
			$mysql->filtro = " WHERE `id` = ? ";
			$usuarios = $mysql->read_unico('usuarios');
			$itens_pagina = (isset($usuarios->itens_pagina) AND $usuarios->itens_pagina) ? $usuarios->itens_pagina : 25;

			$arr['title'] = 'Configurações';

			$arr['html']  = '<form id="configForm" method="post" action="'.$_SERVER['SCRIPT_NAME'].'">
								<div class="p20 pt15">
									<div class="linha mb10">
										<b class="db mb5">Configurar o número de itens por pagina nas tabelas:</b>
										<select name="itens_pagina" class="design">
											<option value="10" '.iff($itens_pagina==10, 'selected').'>10</option>
											<option value="25" '.iff($itens_pagina==25, 'selected').'>25</option>
											<option value="50" '.iff($itens_pagina==50, 'selected').'>50</option>
											<option value="100" '.iff($itens_pagina==100, 'selected').'>100</option>
											<option value="500" '.iff($itens_pagina==500, 'selected').'>500</option>
											<option value="1000" '.iff($itens_pagina==1000, 'selected').'>1000</option>
											<option value="10000" '.iff($itens_pagina==10000, 'selected').'>10000</option>
											<option value="1000000" '.iff($itens_pagina==1000000, 'selected').'>1000000</option>
										</select>
										<input type="hidden" name="gravar" value="1">
									</div>
									<button class="botao flr"> <i class="mr2 faa-check c_verde"></i> Salvar</button>
									<button type="button" class="botao" onclick="ajaxNormalAdmin('.A.'Boxs/itens_por_pagina.php'.A.', '.A.'reset=1'.A.')"> <i class="mr2 faa-check-circle c_verde"></i> Resetar</button>
									<div class="clear"></div>
								</form>
								<script>ajaxForm('.A.'configForm'.A.');</script>
							</div> ';

		} else {
			$verificacoes = new Verificacoes();
			$arr['violacao_de_regras'] = 1;
			$verificacoes->violacao_de_regras($arr);
		}

	$mysql->fim();
	echo json_encode($arr); 

?>