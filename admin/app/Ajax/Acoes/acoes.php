<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';
	require_once DIR_F.'/app/Funcoes/funcoesAdmin.php';

	$mysql = new Mysql();
	$mysql->ini();

	$arr = array();
	$arr['id'] = 0;
	$arr['acao'] = $_POST['acao'];

	if(isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id){



		$ids = isset($_POST['ids']) ? explode('-', $_POST['ids']) : array($_POST['id']);

		$mysql->prepare = array($_POST['modulos']);
		$mysql->filtro = " WHERE `id` = ? ";
		$modulos = $mysql->read_unico('menu_admin');

		$verificacoes = new Verificacoes();
		$verificacoes->modulos = $modulos;
		if($_POST['table'] != 'mais_fotos'){
			$verificacoes->permissoes_all(0, 'lista');
			$arr['table'] = $modulos->modulo;
		 } else {
		 	$arr['table'] = 'mais_fotos';
		 }


		$filtro = $verificacoes->filtro_admins_ajax_datatable($arr['table']);



		foreach ($ids as $key => $value) {
			if($value){
				$mysql->prepare = array($value);
				$mysql->filtro = " WHERE `id` = ? ".$filtro." ";
				$item = $mysql->read_unico($arr['table']);
				if(isset($item->id)){

					$mysql->logs_caminho = '../../';

					switch ($_POST['acao']) {

						// Block
						case 'block':
							$verificacoes->acoes('block', $arr['table']);
							unset($mysql->campo);
							if($item->status)	$mysql->logs = 'Desbloqueio (Status)';
							else 				$mysql->logs = 'Bloqueio (Status)';
				        	$mysql->campo['status'] = (int)!$item->status;
							if($modulos->id==1) $mysql->logs = 0;

							$mysql->prepare = array($value);
							$mysql->filtro = " WHERE `id` = ? ".$filtro." ";
							$arr['id'] = $mysql->update($arr['table']);
						break;
						

						// Block1
						case 'block1':
							$verificacoes->acoes('block', $arr['table']);
							unset($mysql->campo);
							if($item->status1)	$mysql->logs = 'Desbloqueio (Status1)';
							else 				$mysql->logs = 'Bloqueio (Status1)';
				        	$mysql->campo['status1'] = (int)!$item->status1;
							if($modulos->id==1) $mysql->logs = 0;

							$mysql->prepare = array($value);
							$mysql->filtro = " WHERE `id` = ? ".$filtro." ";
							$arr['id'] = $mysql->update($arr['table']);
						break;
						

						// Clonar
						case 'clonar':
							$verificacoes->acoes('clonar', $arr['table']);
							if($item->table == 'menu_admin'){
								$mysql->json = 1;
								$mysql->prepare = array($value);
								$mysql->filtro = " WHERE `id` = ? ".$filtro." ";
								$item = $mysql->read_unico($arr['table']);

								$mysql->logs = 'Item Clonado';
								foreach ($item as $key1 => $value1) {
									if($key1 != 'id' and $key1 != 'table'){
										 if($key1 == 'data' or $key1 == 'dataup')
											$mysql->campo[$key1] = date('c');
										else
											$mysql->campo[$key1] = $value1;
									}
								}
								if($modulos->id==1) $mysql->logs = 0;
								$arr['id'] = $mysql->insert($arr['table']);		

            					copy(DIR_F.'/app/Json/menu_admin'.BARRA.$value.'.json', DIR_F.'/app/Json/menu_admin'.BARRA.$arr['id'].'.json');

								$mysql->json = 0;

							} else {								
								unset($mysql->campo);
								$mysql->logs = 'Item Clonado';
								foreach ($item as $key1 => $value1) {
									if($key1 != 'id' and $key1 != 'table'){
										 if($key1 == 'data' or $key1 == 'dataup')
											$mysql->campo[$key1] = date('c');
										else
											$mysql->campo[$key1] = $value1;
									}
								}
								if($modulos->id==1) $mysql->logs = 0;
								$mysql->campo['status'] = 0;
								$arr['id'] = $mysql->insert($arr['table']);		

								$mysql->prepare = array($item->id, $item->table);
								$mysql->filtro = " WHERE `item` = ? AND `tabelas` = ? ";
								$z_txt = $mysql->read('z_txt');
								foreach ($z_txt as $k => $v) {
									unset($mysql->campo);
									$mysql->campo['tipo'] 	 = $v->tipo;
									$mysql->campo['item'] 	 = $arr['id'];
									$mysql->campo['tabelas'] = $v->tabelas;
									$mysql->campo['txt'] 	 = $v->txt;
									$mysql->insert('z_txt');		
								}
							}
						break;


						// Star
						case 'star':
							$verificacoes->acoes('star', $arr['table']);
							unset($mysql->campo);
							if($item->star)	$mysql->logs = 'Destaque Desativado';
							else 			$mysql->logs = 'Destaque Ativado';
				        	$mysql->campo['star'] = !$item->star;
							if($modulos->id==1) $mysql->logs = 0;

							$mysql->prepare = array($value);
							$mysql->filtro = " WHERE `id` = ? ".$filtro." ";
							$arr['id'] = $mysql->update($arr['table']);
						break;


						// lanc
						case 'lanc':
							$verificacoes->acoes('lanc', $arr['table']);
							unset($mysql->campo);
							if($item->lanc)	$mysql->logs = 'Lançamentos Desativado';
							else 			$mysql->logs = 'Lançamentos Ativado';
				        	$mysql->campo['lanc'] = !$item->lanc;
							if($modulos->id==1) $mysql->logs = 0;

							$mysql->prepare = array($value);
							$mysql->filtro = " WHERE `id` = ? ".$filtro." ";
							$arr['id'] = $mysql->update($arr['table']);
						break;


						// Promocao
						case 'promocao':
							$verificacoes->acoes('promocao', $arr['table']);
							unset($mysql->campo);
							if($item->promocao) $mysql->logs = 'Promoção Desativado';
							else 				$mysql->logs = 'Promoção Ativado';
				        	$mysql->campo['promocao'] = !$item->promocao;
							if($modulos->id==1) $mysql->logs = 0;

							$mysql->prepare = array($value);
							$mysql->filtro = " WHERE `id` = ? ".$filtro." ";
							$arr['id'] = $mysql->update($arr['table']);
						break;


						// Delete
						case 'delete':
							if($_POST['table'] != 'mais_fotos'){
								$verificacoes->permissoes_all(array($value), 'delete');
							}
							unset($mysql->campo);
							if($modulos->id==1) $mysql->logs = 0;

							$mysql->prepare = array($value);
							$mysql->filtro = " WHERE `id` = ? ".$filtro." ";
		                	$arr['id'] = $mysql->delete($arr['table']);
						break;
					}

				}

			}
		}

    	if($arr['table'] == 'mais_fotos'){
    		$arr['table'] = $modulos->modulo;
    	}


	}


	$mysql->fim();
	echo json_encode($arr); 
?>