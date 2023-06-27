<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';
	require_once DIR_F.'/app/Funcoes/funcoesAdmin.php';

	$mysql = new Mysql();
	$mysql->ini();

	$datatable = new Datatable();
	$input = new Input();

	$arr = array();


	if(isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id){


		if(isset($_POST['acao']) AND $_POST['acao'] == 'itens'){

			if(isset($_POST['datatable_filtro']['value'])){
				foreach ($_POST['datatable_filtro']['value'] as $key => $value){
					$filtro[] = $datatable->filtro($key, $value);
				}
			}

			if(isset($filtro)){
				$arr['html']  = '<ul class="verde"> ';
					$arr['html'] .= '<b>Filtros: </b> ';
					foreach ($filtro as $key => $value){
						if($value['nome']){
							$arr['html'] .= '<li> ';
								$arr['html'] .= '<a onclick="datatable_filtro_delete_item('.A.$_POST['modulo'].A.', '.A.$value['name'].A.', this, '.A.$_POST['gets'].A.')"><i class="faa-times mr5 fz14 c_verde"></i></a>';
								$arr['html'] .= $value['nome'].': '.$value['item'];
							$arr['html'] .= '</li> ';
						}
					}
					$arr['html'] .= '<div class="clear"></div> ';
				$arr['html'] .= '</ul> ';
			}



		} elseif(isset($_POST['acao']) AND $_POST['acao'] == 'filtro_inicial'){
			$arr['post']  = '';
			$mysql->prepare = array($_POST['modulo']);
			$mysql->filtro = " WHERE `id` = ? ";
			$modulos = $mysql->read_unico('menu_admin');
			if(isset($modulos->modulo) AND isset($_SESSION['filtro_inicial'][$modulos->modulo])){
				foreach ($_SESSION['filtro_inicial'][$modulos->modulo] as $key => $value) {
					foreach ($value as $k => $v) {
						$arr['post'] .= '&datatable_filtro['.$k.']['.$key.']='.$v;
					}
				}
			}

			$arr['boxs'] = $_POST['boxs'];



		} elseif(isset($_POST['acao']) AND $_POST['acao'] == 'novo'){
			$arr['post']  = '';
			$arr['post'] .= '&datatable_filtro[nome]['.$_POST['name'].']='.$_POST['nome'];
			$arr['post'] .= '&datatable_filtro[tipo]['.$_POST['name'].']='.$_POST['tipo'];
			$arr['post'] .= '&datatable_filtro[value]['.$_POST['name'].']='.$_POST['value'];
			$arr['post'] .= '&datatable_filtro[opcoes]['.$_POST['name'].']='.$_POST['opcoes'];

			$mysql->prepare = array($_POST['modulo']);
			$mysql->filtro = " WHERE `id` = ? ";
			$modulos = $mysql->read_unico('menu_admin');
			if(isset($modulos->modulo)){
				$_SESSION['filtro_inicial'][$modulos->modulo][$_POST['name']]['nome'] = $_POST['nome'];
				$_SESSION['filtro_inicial'][$modulos->modulo][$_POST['name']]['tipo'] = $_POST['tipo'];
				$_SESSION['filtro_inicial'][$modulos->modulo][$_POST['name']]['value'] = $_POST['value'];
				$_SESSION['filtro_inicial'][$modulos->modulo][$_POST['name']]['opcoes'] = $_POST['opcoes'];
			}



		} elseif(isset($_POST['acao']) AND $_POST['acao'] == 'delete'){
			$arr['post'] = '';
			$arr['item'] = $_POST['name'];

			$mysql->prepare = array($_POST['modulo']);
			$mysql->filtro = " WHERE `id` = ? ";
			$modulos = $mysql->read_unico('menu_admin');
			$modulo = isset($modulos->modulo) ? $modulos->modulo : '';

			foreach ($_POST['datatable_filtro'] as $k => $v){
				foreach ($v as $key => $value){
					 $arr['post'] .= $datatable->filtro_del($modulo, $k, $key, $value);
				}
			}



		} else {

			$id = $_POST['id'];
			if($_POST['id'] == 0){
				$id = 0;
			}

			$mysql->prepare = array($id);
			$mysql->filtro = " WHERE `id` = ? ";
			$modulos = $mysql->read_unico('menu_admin');

			$arr['title'] = 'Filtro Avançado';

			$arr['html']  = '<div class="max-w900 linha mb10 filtro_avancado_'.$_POST['id'].'">
								<div class="p20 pt5">
									<form method="post" action="javascript:void(0)" onsubmit="datatable_filtro('.A.$_POST['id'].A.', this)" autocomplete="off">
										<button class="botao flr"> <i class="mr2 faa-check c_verde"></i> Pesquisar</button>
										<button type="reset" class="botao" onclick="window.location.reload();"> <i class="mr2 faa-check-circle c_verde"></i> Reset</button>
										<ul class="filtro_avancado pt10"> ';

											if(isset($_POST['gets'])){
												$arr['html'] .= '<input type="hidden" name="gets" value="'.$_POST['gets'].'"> ';
											}

											$linhas = '';
											$filtro_avancado = '';
											$modulos_campos = unserialize(base64_decode($modulos->campos));
											require_once DIR_F.'/admin/views/Individual/filtros.php';

							                foreach ($campos as $k => $v) {
								                foreach ($v as $key => $value) {

								                	$campos_menuadmin = new CamposMenuAdmin();

													$input_nome = $value['input']['nome'];
													$value['tipo'] = isset($value['tipo']) ? $value['tipo'] : 'text';
													$tipo = $campos_menuadmin->menu_admin_tipo($value['tipo']);
													$type = $campos_menuadmin->menu_admin_type($tipo);

													if(isset($value['check']) AND $value['check'] AND !preg_match('(_hidden)', $input_nome) AND !preg_match('(inserir_box)', $input_nome) AND $tipo!='color' ){

														if($tipo != 'info' AND $tipo != 'hidden' AND $tipo != 'file' AND $tipo != 'password' AND $tipo != 'checkbox' AND $tipo != 'radio' AND $tipo != 'textarea' AND $tipo != 'button' AND $tipo != 'editor' AND $tipo != 'file_editor' AND $tipo != 'mais_campos' AND (!isset($value['input']['disabled']) OR !$value['input']['disabled']) ){

															// Configurando Input
											                    $input->check_ini = 0;
											                    $input->filtro_avancado = 1;
															// Configurando Input

															// Table
																$input->table = $modulos->modulo;
															// Table

															// Congurando Tipo
																$tipo = $tipo=='radio' ? 'select' : $tipo;
															// Congurando Tipo

															// Tags
																$tags = isset($value['input']['tags']) ? $value['input']['tags'] : '';
																$tags_real = $tags;
																$value['input']['design'] = isset($value['input']['design']) ? $value['input']['design'] : 1;
											                    if($value['input']['design']!=2){
											                        $desgin = 'class="design ';
											                        $tags = !preg_match('(designx)', $tags) ? str_replace('class="', $desgin, $tags) : $tags;
											                        $tags = !(preg_match('(class=")', $tags)) ? $desgin.'" '.$tags : $tags;
											                    }
											                    $tags = str_replace('required', '', $tags);
											                    $tags = str_replace('multiple', '', $tags);
											                    $tags = str_replace('onblur=', '', $tags);
											                    $tags = str_replace('onclick=', '', $tags);
											                    $tags = str_replace('value=', '', $tags);
											                    $tags = str_replace('disabled', '', $tags);
															// Tags

															// Value
										                    	$input->value = isset($_POST['datatable_filtro']['value'][$input_nome]) ? $_POST['datatable_filtro']['value'][$input_nome] : '';
															// Value

															// Opcoes
											                    $input->opcoes = isset($value['input']['opcoes']) ? $value['input']['opcoes'] : '';
															// Opcoes

															// Extra								                   
											                    $input->extra = isset($value['input']['extra']) ? $value['input']['extra'] : '';
															// Extra

															$value['resp'] = isset($value['resp']) ? $value['resp'] : 12;
											                $arr['html'] .= ' <li class="'.$value['resp'].' '.iff(preg_match('(multiple)', $input->tags), 'h-a').' "> ';

											                	if($tipo == 'date' OR $tipo == 'datetime-local'){
										                    		$arr['html'] .= $input->$type($value['nome'], 'datatable_filtro[value]['.$input_nome.']', 'date');
										                    	} else {
											                    	$arr['html'] .= $input->$type($value['nome'], 'datatable_filtro[value]['.$input_nome.']', $tipo);
										                    	}

										                    	$arr['html'] .= '<input type="hidden" name="datatable_filtro[nome]['.$input_nome.']" value="'.$value['nome'].'"> ';

										                    	$tipo = ($value['tipo']=='preco') ? 'preco' : $tipo;
										                    	$tipo = preg_match('(multiple)', $tags_real) ? 'checkbox' : $tipo;
										                    	$arr['html'] .= '<input type="hidden" name="datatable_filtro[tipo]['.$input_nome.']" value="'.$tipo.'"> ';

										                    	if(isset($value['filtro']) AND $value['filtro'])
										                    		$arr['html'] .= '<input type="hidden" name="datatable_filtro[filtro]['.$input_nome.']" value="'.$value['filtro'].'"> ';

										                    	if($input->filtro_avancado AND ($tipo=='select' OR $tipo=='checkbox' OR $tipo=='radio') )
										                    		$arr['html'] .= '<input type="hidden" name="datatable_filtro[opcoes]['.$input_nome.']" value="'.$input->opcoes.'"> ';

												                $arr['html'] .= ' <div class="clear"></div> ';

											                $arr['html'] .= ' </li> ';

														}

										            }
									            }
									        }

		        $arr['html'] .= ' 			<div class="clear h10"></div>
										</ul>
										<button class="botao flr"> <i class="mr2 faa-check c_verde"></i> Pesquisar</button>
										<button type="reset" class="botao" onclick="window.location.reload();"> <i class="mr2 faa-check-circle c_verde"></i> Reset</button>
									</form>
								</div>
							 </div> ';

		}

	}


	$mysql->fim();
	echo json_encode($arr); 

?>