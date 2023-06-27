<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';
	require_once DIR_F.'/plugins/Tng/tng/tNG.inc.php';

	include_once DIR_F.'/app/Funcoes/funcoesAdmin.php';
	include_once DIR_F.'/admin/app/Ajax/Datatables/scripts/func_ajax_ini.php';
	include_once DIR_F.'/admin/app/Ajax/Datatables/scripts/func.php';

	$arr = array();

	if((isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id) OR acesso_para_outos_admins($admins)){


		$mysql = new Mysql();
		$mysql->prepare = array($_POST['modulo']);
		$mysql->filtro = " WHERE `id` = ? ";
		$modulos = $mysql->read_unico('menu_admin');
		$arr["modulos"] = $modulos->id;

		// Colunas Datatable Row Data
		if(isset($_POST['row']) AND $modulos->id != 1){
			$_POST['filtro'] = " AND id = '".$_POST['row']."' ";
			$_POST['col'] = dt_colunas_row_data($modulos);
		}


		// Detalhes Gerenciar
			if(isset($_POST['oTable']) AND $_POST['oTable'] == '_gerenciar'){
				foreach ($_POST['col'] as $key => $value) {
					if(preg_match('(->mais_fotos)', $value) OR preg_match('(->mais_fotos1)', $value) OR preg_match('(->mais_fotos2)', $value) OR preg_match('(->mais_fotos3)', $value) OR preg_match('(->mais_fotos4)', $value) OR preg_match('(->mais_fotos5)', $value) OR preg_match('(->mais_comentarios)', $value) OR preg_match('(->itens->)', $value)){
						$_POST['col'][$key] = 'id->none->'.$key;
					}
				}
				//pre($_POST['col']);
			}


		// Pegando dados das colunas
		foreach ($_POST['col'] as $key => $value) {
			if($value=='mais_fotos' OR $value=='mais_fotos1' OR $value=='mais_fotos2' OR $value=='mais_fotos3' OR $value=='mais_fotos4' OR $value=='mais_fotos5' OR $value=='mais_comentarios'){
				$value = 'id->'.$value;
			}
			$ex = explode('->', $value);
			$colx[] = array('num' => $key, 'col' => $ex[0]);
			$ex = explode('->', $value);
			for ($i=0; $i <= 10; $i++) { 
				if(isset($ex[$i]) OR $i<=2){
					$cols[$key][$i] = isset($ex[$i]) ? $ex[$i] : '';
				}
			}
		}



		// Table
			$table = $modulos->modulo;

		// Filtro
	 		$langg = ($table!='idiomas' AND $table!='usuarios') ? " `lang` = '".LANG."' " : ' 1=1 ';

	 		$filtro = isset($_POST['filtro']) ? stripcslashes($_POST['filtro']) : '';
			$filtro = " where ".$langg." ".$filtro." ".$modulos->filtro;


		// PERMISSOES
			$verificacoes = new Verificacoes();
			$verificacoes->modulos = $modulos;

			$verificacoes->permissoes_all(0, 'lista');
			$filtro = $verificacoes->filtro_admins_ajax_datatable($table, $filtro);
		// PERMISSOES


		// FILTROS
			 // MENU ADMIN
				if($table == 'menu_admin'){
					$tipo_modulo = isset($_GET['m']) ? " AND tipo = '".$_GET['m']."' " : "";
					$filtro .= ' AND id != 1 '.$tipo_modulo.' ';
				}
			// MENU ADMIN

			// DATATABLE FILTRO (FILTRO AVANCADO)
				$arr['datatable_filtro'] = '';
				if(isset($_POST['datatable_filtro'])){
					$filtro_datatable_filtro = dt_datatable_filtros($_POST['datatable_filtro']);
					$filtro .= $filtro_datatable_filtro;
					$arr['datatable_filtro'] = base64_encode($filtro_datatable_filtro);
				}
			// DATATABLE FILTRO (FILTRO AVANCADO)

			// ITENS
				if(isset($_GET['item']) AND $_GET['item'] AND isset($_GET['table']) AND $_GET['table']){
					if(preg_match('(mais_)', $_GET['mod'])){
						$filtro .= " AND tabelas =  '".$_GET['table']."' AND item = '".$_GET['item']."' ";
					} else {
						$filtro .= " AND ".$_GET['table']." = '".$_GET['item']."' ";
					}
				}
			// ITENS

			// PLANOS
				//if(isset($_GET['filtro_planos'])){
					//$filtro .= " and cadastro = '".$_GET['filtro_planos']."' ";
				//}
			// PLANOS
		// FILTROS


		// Variaveis para o Filtro Interno
			if(isset($modulos->campos)){
				$_POST['modulos_campos'] = unserialize(base64_decode($modulos->campos));
			}


		// Utilizando Colunas Extras
		$cols_extra = '';
		foreach ($cols as $k_col => $col){
			if($col[1] == 'cidade_estado' OR $col[1] == 'cidades_estados'){
				$counas = $col[2] ? $col[2] : $col[1];
				$ex = explode('_', $counas);
				$cols_extra = implode(', ', $ex);
			} elseif($col[1] == 'logs_acoes'){
				$cols_extra = 'usuarios, usuarios_id, acoes, tabelas, item, campos';
			} elseif($col[1] == 'star'){
				$cols_extra = 'star, tabelas, item';
			} elseif($col[1] == 'tempo'){
				$cols_extra = 'data, data_saida';
			}
		}



		// ACOES
			// CADASTRO
			/*
				if($table == 'cadastro'){
					unset($mysql->campo);
					$mysql->campo['vencimento_para_datatable'] = '0000-00-00';
					$mysql->filtro = " WHERE 1 ";
					$mysql->update('cadastro');

					// VENCIMENTO_PARA_DATATABLE
						$mysql->filtro = $filtro." AND planos != 0 ";
						$cadastro = $mysql->read('cadastro');
						foreach ($cadastro as $key => $value) {
							$mysql->filtro = " WHERE ".STATUS." AND cadastro = '".$value->id."' ORDER BY `data_vencimento` DESC ";
							$cadastro_planos_faturas = $mysql->read_unico('cadastro_planos_faturas');

							unset($mysql->campo);
							$mysql->campo['vencimento_para_datatable'] = $cadastro_planos_faturas->data_vencimento;
							$mysql->filtro = " WHERE id = '".$value->id."' ";
							$mysql->update('cadastro');
						}
					// VENCIMENTO_PARA_DATATABLE
				}
			*/
			// CADASTRO
		// ACOES





		// Fazendo consulta1
		$consulta1 = dt_consulta($table, $_POST, $cols, $cols_extra, $filtro, $modulos);


		// Passando Filtro
		$arr['filtro'] = $filtro;
		$arr['filtro_exportar'] = base64_encode($filtro);


		// ----------------------------------------------------------------------------------------------------------------------------------------------------
		
			// DADOS

				$mysql->nao_existe_all = 1;
				$arr["data"] = array();

				foreach ($consulta1['dados'] as $key => $value){


					// INFOS DA TABLE
					$row = array();
					foreach ($cols as $k_col => $col){
						$row_atual = array();
						$col_autal = $col[0];
						$item = $value->$col_autal;
						$info = dt_info($value, $col, $k_col);

						// COLUNAS
							// ACOES
								if($col[1] == 'acoes'){
									$dt_value = dt_value($value);
									dt_criar_colunas($modulos, $dt_value);

									$return  = '';
									$tooltip = 0;
									$bloquear = 0;
					                foreach (unserialize(base64_decode($modulos->colunas)) as $k1 => $v1){
				                        if(preg_match('(block)', $v1['value']) AND isset($v1['check']) AND $v1['check'])
				                        	$bloquear = 1;
					                }

									$txt_star = 'Selecione este item como Destaque';
									$txt_lanc = 'Selecione este Item como Lançamento';
									$txt_pro = 'Selecione este Item como Promoção';

									if($modulos->modulo == 'produtos'){
										$txt_star = 'Selecione este item como Destaque';
										$txt_lanc = 'Selecione este Item como Lançamento';
										$txt_pro = 'Selecione este Item como Promoção';
									}

									if($modulos->modulo == 'produtos1_cate'){
										$txt_star = 'Selecione este item como Destaque no Menu';
										$txt_lanc = 'Selecione este Item como Destaque na Home';
										$txt_pro = 'Selecione este Item como Promoção';
									}

									if($modulos->modulo == 'planos'){
										$txt_star = 'Produtos Aparecem como Destaque na Home';
										$txt_lanc = 'Produtos Aparecem como Novidades na Home';
										$txt_pro = 'Produtos Aparecem como Outlef na Home';
									}

					                if($bloquear){
					                	$tooltip = 1;
										$return .= '<a onclick="datatable_acoes('.A.'block'.A.', '.A.$modulos->id.A.', '.A.$value->id.A.')" class="dib p5" rel="tooltip" data-original-title="Ativar ou Bloquear Item"> <i class="di fz16 faa-check '.iff($dt_value->status, 'c_verde', 'n_ativo').'"></i> </a> ';
					                }
									if(isset($modulos->informacoes) AND preg_match('(-star-)', $modulos->informacoes)){
										$tooltip = 1;
										$return .= '<a onclick="datatable_acoes('.A.'star'.A.', '.A.$modulos->id.A.', '.A.$value->id.A.')" class="dib p5" rel="tooltip" data-original-title="'.$txt_star.'"> <i class="di fz16 faa-star '.iff($dt_value->star, 'c_amarelo', 'n_ativo').'"></i> </a> ';
									}
									if(isset($modulos->informacoes) AND preg_match('(-lanc-)', $modulos->informacoes)){
										$tooltip = 1;
										$return .= '<a onclick="datatable_acoes('.A.'lanc'.A.', '.A.$modulos->id.A.', '.A.$value->id.A.')" class="dib p5" rel="tooltip" data-original-title="'.$txt_lanc.'"> <i class="di fz16 faa-dot-circle-o '.iff($dt_value->lanc, 'c_verde', 'n_ativo').'"></i> </a> ';
									}
									if(isset($modulos->informacoes) AND preg_match('(-promocao-)', $modulos->informacoes)){
										$tooltip = 1;
										$return .= '<a onclick="datatable_acoes('.A.'promocao'.A.', '.A.$modulos->id.A.', '.A.$value->id.A.')" class="dib p5" rel="tooltip" data-original-title="'.$txt_pro.'"> <i class="di fz16 faa-certificate '.iff($dt_value->promocao, 'c_azul', 'n_ativo').'"></i> </a> ';
									}
									//if(isset($modulos->informacoes) AND preg_match('(-clonar-)', $modulos->informacoes)){
										$tooltip = 1;
										//$return .= '<a onclick="datatable_acoes('.A.'clonar'.A.', '.A.$modulos->id.A.', '.A.$value->id.A.')" class="dib p5" rel="tooltip" data-original-title="Clonar Item"> <i class="di fz16 c_azul faa-files-o ativo"></i> </a> ';
									//}
									if(isset($modulos->informacoes) AND preg_match('(-mapa-)', $modulos->informacoes)){
										$tooltip = 1;
										$return .= '<a onclick="boxs('.A.'mais_mapas'.A.', '.A.'item='.$value->id.'&modulos='.$modulos->id.A.', 1);" class="dib p5" rel="tooltip" data-original-title="Cadastrar uma Localização para esse Item"> <i class="di fz16 c_azul faa-globe ativo"></i> </a> ';
									}
									//if($modulos->id == 54){
										//$return .= '<a onclick="window.open('.A.DIR.'/produto/-/'.$value->id.'?preview=ok'.A.', '.A.'_blank'.A.')" target="_blank" class="dib p5" rel="tooltip" data-original-title="Preview"><i class="di fz16 c_azul faa-file-image-o"></i> </a> ';
									//}

									if($tooltip){
										$return .= '<script> $("[rel=tooltip]").tooltip({html:true}) </script> ';
									}

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;
									$row_atual['exportar'] = '(nao_mostrar)';
							// ACOES




							// ----------------------------------------------------------------------------------------------------------------------------------------------------




							// OUTROS PADROES

								// Cidade Estado
								} elseif($col[1] == 'cidade_estado' OR $col[1] == 'cidades_estados'){
								 	$counas = $col[2] ? $col[2] : $col[1];
									$ex = explode('_', $counas);
									$ex_0 = $ex[0];
									$ex_1 = $ex[1];
									$cidade = $value->$ex_0 ? $value->$ex_0 : '- - - - -';
									$estado = $value->$ex_1 ? $value->$ex_1 : '- - - - -';
									$return = $cidade!='- - - - -' ? $cidade.' / '.$estado : $estado;

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;



								// Logs Acoes
								} elseif($col[1] == 'logs_acoes'){
									$return = '';
									$align = '';
									if($col[0] == 'usuarios'){
										if($value->usuarios){
											if($value->usuarios == 'site'){
												$item = 'Site';
											} else {
												$mysql->colunas = "nome";
												$mysql->prepare = array($value->usuarios_id);
												$mysql->filtro = " WHERE `id` = ? ";
												$usuarios = $mysql->read_unico($value->usuarios);
												if(isset($usuarios->nome))
													$return = $usuarios->nome;
											}
										}
									} else if($col[0] == 'acoes'){
										$return = $value->acoes;
									} else if($col[0] == 'tabelas'){
										$return = ucfirst(str_replace('_', ' ', $value->tabelas));
									} else if($col[0] == 'item'){
										$return = $value->item;
									} else if(isset($col[2]) AND $col[2] == 'campos'){
										$align = 'tal';
										$caminho = DIR_F.'/plugins/Json/log_acoes/0.json';
										if(file_exists($caminho)){
											$json = '['.file_get_contents($caminho).']';
											$campos = json_decode($json);
											if(is_array($campos)){
												foreach($campos as $key1 => $value1){
													if(is_object($value1)){
														foreach($value1 as $key2 => $value2){
															if($key2 == $item){
																foreach($value2 as $key3 => $value3){
																	if($key3 != 'tipo' AND $key3 != 'subcategorias' AND $key3 != 'varias_categorias'){
																		$return .= str_replace(',', '', $key3).' = '.$value3.'<br>';
																	}
																}
															}
														}
													}
												}
											}
										}
									}

									$row_atual['tags']  = $info;
									$row_atual['tags']['class']  .= $align;
									$row_atual['value'] = $return;

							// OUTROS PADROES




							// ----------------------------------------------------------------------------------------------------------------------------------------------------




							// NUMEROS DE ITENS RELACIONADOS

								// Mais Fotos
								} elseif($col[1] == 'mais_fotos' OR $col[1] == 'mais_fotos1' OR $col[1] == 'mais_fotos2' OR $col[1] == 'mais_fotos3' OR $col[1] == 'mais_fotos4' OR $col[1] == 'mais_fotos5'){
									$mysql->colunas = "id";
									$mysql->prepare = array($table, $value->id);
									$mysql->filtro = " WHERE `tabelas` = ? AND `item` = ? ";
									$mais_fotos = $mysql->read($col[1]);
									$return = '<div class="w45 m-a"><i class="faa-bars"></i>&nbsp;|&nbsp;<span>'.count($mais_fotos).'</span></div> ';

									$row_atual['tags']  = $info;
									$row_atual['onclick']  = 'boxs('.A.'mais_fotos' .A.', '.A.'item='.$value->id.'&modulos='.$modulos->id.'&col='.$col[1].A.', 1);';
									$row_atual['onclick_class']  = 'dib w50 p5 n_'.$col[1];
									$row_atual['value'] = $return;
									$row_atual['exportar'] = count($mais_fotos);



								// Mais Comentarios
								} elseif($col[1] == 'mais_comentarios'){
									$mysql->colunas = "id";
									$mysql->prepare = array($table, $value->id);
									$mysql->filtro = " WHERE `tabelas` = ? AND `item` = ? ";
									$mais_comentarios = $mysql->read("mais_comentarios");
									$return = '<div class="w45 m-a"><i class="faa-bars"></i>&nbsp;|&nbsp;<span>'.count($mais_comentarios).'</div> ';

									$row_atual['tags']  = $info;
									$row_atual['onclick']  = 'views('.(44).', 0, '.A.'table='.$value->table.'&item='.$value->id.A.');';
									$row_atual['onclick_class']  = 'dib w50 p5 n_mais_comentarios';
									$row_atual['value'] = $return;
									$row_atual['exportar'] = count($mais_comentarios);



								// Enquete Votos
								} elseif($col[1] == 'enquete_votos'){
									$return = '<div class="dib w30 h30 c_flex jc br50p" style="border:2px solid #666"><i class="faa-bars fz16"></i></div> ';

									$row_atual['tags']  = $info;
									$row_atual['onclick']  = 'boxs('.A.'enquete'.A.', '.A.'id='.$value->id.A.', 0, '.A.'../../../app/Ajax/Boxs/'.A.');';
									$row_atual['onclick_class']  = 'dib w50 p5';
									$row_atual['value'] = $return;
									$row_atual['exportar'] = '(nao_mostrar)';


								// Itens
								} elseif($col[1] == 'itens'){ // id->itens->table->coluna->99

									$mysql->colunas = "id";
									$mysql->prepare = array($value->id);
									$mysql->filtro = " WHERE `".$col[3]."` = ? ";
									$itens = $mysql->read($col[2]);
									$return = '<div class="w45 m-a"><i class="faa-bars"></i>&nbsp;|&nbsp;<span>'.count($itens).'</span></div> ';

									$row_atual['tags']  = $info;
									$row_atual['onclick']  = 'views('.$col[4].', 0, '.A.'table='.$col[3].'&item='.$value->id.A.');';
									$row_atual['onclick_class']  = 'dib w50 p5 n_mais_fotos';
									$row_atual['value'] = $return;
									$row_atual['exportar'] = count($itens);



								// Mais Star
								} elseif($col[1] == 'mais_star'){ // *star
								 	if($col[2] == 'unico'){
										$total = $item;
								 	} else {
										$total = star($value);
									}
									$return  = '<div rel="tooltip" data-original-title="'.star($value, 'votacao').'" class="dib w95 fz16"> '.star_icon($total).'</div> ';
									$return .= '<script> $("[rel=tooltip]").tooltip({html:true}) </script> ';

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;
									$row_atual['exportar'] = $total;
							// NUMEROS DE ITENS RELACIONADOS




							// ----------------------------------------------------------------------------------------------------------------------------------------------------




							// CATEGORIAS

								// Select
								} elseif($col[1] == 'select'){
									// cadastro->select->nome
								 	$ex = explode('class=', $col[2]);
								 	$coluna = $ex[0] ? $ex[0] : 'nome';
									$return = rel1($col[0], $item, $coluna, '- - - - - - -', 1);
									// empresa->select->cadastro->select->nome
									if(isset($col[3]) AND $col[3] == 'select'){
									 	$ex = explode('class=', isset($col[4]) ? $col[4] : '');
									 	$coluna = $ex[0] ? $ex[0] : 'nome';
										$return = rel1($col[2], $item, $coluna, '- - - - - - -', 1);
										// empresa->select->empresas->select->empresas_rel->select->nome
										if(isset($col[5]) AND $col[5] == 'select'){
										 	$ex = explode('class=', isset($col[6]) ? $col[6] : '');
										 	$coluna = $ex[0] ? $ex[0] : 'nome';
											$return = rel1($col[4], $return, $coluna, '- - - - - - -', 1);
										}
									}
									$limit_div = (isset($col[4]) AND $col[4]=='nome') ? 'max-w200 m-a' : '';

									$row_atual['tags']  = $info;
									$row_atual['tags']['class'] .= $limit_div.' limit';
									$row_atual['value'] = $return;



								// Select1
								} elseif($col[1] == 'select1'){
									$return  = '- - - - - - -';
								 	$opcoes = '';
					                foreach (unserialize(base64_decode($modulos->campos)) as $k1 => $v1){
						                foreach ($v1 as $k2 => $v2){
					                        if($v2['input']['nome'] == $col[0]) // AND isset($v2['check']) AND $v2['check']
					                        	$opcoes = $v2['input']['opcoes'];
					                    }
					                }
									$opcoes = explode('; ', $opcoes);
									for($c=0; $c<count($opcoes); $c++){
										$ex = explode('->', $opcoes[$c]);
										if(isset($ex[1]) AND $item == $ex[0])
											$return  = $ex[1];
									}

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;



								// Select2 (Traço)
								} elseif($col[1] == 'select2'){ // empresas->check->empresas
								 	$ex = explode('class=', $col[2]);
									$item = str_replace('-', '', $item);
									$return = rel1($col[2], $item, 'nome', '- - - - - - -', 1);
									$limit_div = 'max-w200 m-a';

									$row_atual['tags']  = $info;
									$row_atual['tags']['class'] .= $limit_div.' limit';
									$row_atual['value'] = $return;



								// Check
								} elseif($col[1] == 'check'){ // empresas->check->empresas
									$col[2] = $col[2] ? $col[2] : $col[0];
									$return  = td_check($col, $item, $modulos);

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;



								// Categorias
								} elseif($col[0] == 'categorias'){ // *categorias
								 	$return = '- - - - - - -';
								 	$mysql->prepare = array($item);
									$mysql->filtro = " WHERE `id` = ? ";
									$cate1 = $mysql->read($value->table.'1_cate');
									foreach($cate1 as $v1){
										$return = '('.$v1->nome.')';
										$id_sub = $v1->subcategorias;

										// Niveis da categoria
										for($x=($v1->tipo-1); $x>=0; $x=$x-1){
											$mysql->prepare = array($id_sub);
											$mysql->filtro = " WHERE `id` = ? ";
											$cate2 = $mysql->read($value->table.'1_cate');
											foreach($cate2 as $v2){
												$return = '('.$v2->nome.') <br> '.$return;
												$id_sub = $v2->subcategorias;
											}
										}
									}

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;



								// Subcategorias
								} elseif($col[0] == 'subcategorias'){
								 	$return = '- - - - - - -';
								 	$mysql->prepare = array($value->id);
									$mysql->filtro = " WHERE `id` = ? ";
									$cate1 = $mysql->read($value->table);
									foreach($cate1 as $v1){
										$return = '('.$v1->nome.')';
										$id_sub = $v1->subcategorias;

										// Niveis da categoria
										for($x=($v1->tipo-1); $x>=0; $x=$x-1){
										 	$mysql->prepare = array($id_sub);
											$mysql->filtro = " WHERE `id` = ? ";
											$cate2 = $mysql->read($value->table);
											foreach($cate2 as $v2){
												$return = '('.$v2->nome.') <br> '.$return;
												$id_sub = $v2->subcategorias;
											}
										}
									}

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;


								// VCategorias
								} elseif($col[0] == 'vcategorias'){
								 	$return = '';
									$categorias = explode('-', $item);
									foreach ($categorias as $k => $v) {
										if($v)
											$return .= '<div>('.rel1($table.'1_cate', $v).')</div>';
									}
									$return = $return ? $return : '- - - - - - -';

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;


								// Mais Campos
								} elseif($col[1] == 'mais_campos'){
									$return = array();
									$x=0;
									$dt_value = dt_value($value);
									foreach ($dt_value as $key1 => $value1) {
										if(preg_match('('.$col[2].'_1)', $key1) OR preg_match('('.$col[2].'_2)', $key1) OR preg_match('('.$col[2].'_3)', $key1) OR preg_match('('.$col[2].'_4)', $key1) OR preg_match('('.$col[2].'_5)', $key1) OR preg_match('('.$col[2].'_6)', $key1) OR preg_match('('.$col[2].'_7)', $key1) OR preg_match('('.$col[2].'_8)', $key1) OR preg_match('('.$col[2].'_9)', $key1)){
											if($value1){ $x++;
												$return[] = '<div>- '.$value1.'</div>';													
												//$return[] = '<div>'.$x.'. '.rel($col[3], $value1).'</div>';
												// mudar tbm na class dt_filter(); em func.php
											}
										}
									}

									$row_atual['tags']  = $info;
									$row_atual['value'] = implode('', $return);


							// CATEGORIAS




							// ----------------------------------------------------------------------------------------------------------------------------------------------------




							// COMBINACOES PRODUTOS

								// Produtos Combinações Itens
								} elseif($col[1] == 'combinacoes'){
									$mysql->colunas = "id";
									$mysql->prepare = array($value->id);
									$mysql->filtro = " WHERE `produtos` = ? ";
									$produtos_combinacoes = $mysql->read("produtos_combinacoes");
									$return = '<i class="faa-bars"></i>&nbsp;|&nbsp;<span>'.count($produtos_combinacoes).'</span> ';

									$row_atual['tags']  = $info;
									$row_atual['onclick']  = 'views(41, 0, '.A.'produtos_combinacoes='.$value->id.A.');';
									$row_atual['onclick_class']  = 'dib w50 p5 n_mais_fotos';
									$row_atual['value'] = $return;
									$row_atual['exportar'] = count($produtos_combinacoes);



								// Produtos Combinações Atributos
								} elseif($col[1] == 'produtos_atributos'){
									$id = rel1('produtos_atributos', $item, 'categorias');
									$categoria = rel1('produtos_atributos1_cate', $id);
									$nome = rel1('produtos_atributos', $item);

									$return = ($categoria AND $nome) ? '<b>'.$categoria.'</b>: '.$nome : '- - - - - - -';

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;


							// COMBINACOES PRODUTOS





							// ----------------------------------------------------------------------------------------------------------------------------------------------------




							// NOVOS


							// NOVOS




							// ----------------------------------------------------------------------------------------------------------------------------------------------------




							// PADROES

								// Preco
								} elseif($col[1] == 'preco' OR $col[1] == 'preco1' OR $col[1] == 'preco2' OR $col[1] == 'preco3'){
								 	$col[3] = isset($col[3]) ? $col[3] : '';
								 	$casas = $col[2]<=0 ? $col[2] : 2;
								 	if($col[1] == 'preco')		$return = preco($item, 1, $casas).$col[3];
								 	elseif($col[1] == 'preco1')	$return = preco($item, 0, $casas, ',', '', 1).$col[3];
								 	elseif($col[1] == 'preco2')	$return = preco($item, 0, $casas, ',').$col[3];
								 	elseif($col[1] == 'preco3')	$return = preco($item, 1, $casas, ',', '', 1).$col[3];

								 	// Some dos precos
								 	if(isset($value->situacao) AND ($value->situacao==1 OR $value->situacao>10)){
								 		$preco['valor_pago'] = isset($preco['valor_pago']) ? $preco['valor_pago']+$item : $item;
								 	}
								 	$preco[$col[0]] = isset($preco[$col[0]]) ? $preco[$col[0]]+$item : $item;

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;



								// Data
								} elseif($col[0] == 'data' OR $col[1] == 'data'){ // *data
								 	$col[2] = $col[2] ? $col[2] : 'd/m/Y';
									$return  = ($item != '0000-00-00 00:00:00' AND $item != '0000-00-00' AND $item != '1969-12-31 21:00:00' AND $item != '1969-12-31') ? data($item, $col[2]) : '- - - - - - -';

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;



								// vencimento_para_datatable
								} elseif($col[0] == 'vencimento_para_datatable'){
									$return  = ($item != '0000-00-00' AND $item != '1969-12-31') ? data($item) : '- - - - - - -';
									if($item != '0000-00-00' AND $item != '1969-12-31' AND $item < date('Y-m-d', mktime(date('H'), date('i'), date('s'), date('m'), date('d'), date('Y')))){
										$return  = '<div class="fwb c_vermelho">'.$return.'</div>';
									}
									if($item != '0000-00-00' AND $item != '1969-12-31' AND $item <= date('Y-m-d', mktime(date('H'), date('i'), date('s'), date('m'), date('d')-30, date('Y')))){
										$return  = '<div class="vencido_mais_30_dias">'.$return.'</div>';
										$return .= '<script> $(".vencido_mais_30_dias").parent().parent().parent().css("background", "#FFBFBF"); </script>';
									}

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;



								// Tempo
								} elseif($col[1] == 'tempo'){
								 	$return = '...';
									if($value->data_saida AND $value->data_saida != '0000-00-00 00:00:00'){
										$data = sub_data($value->data_saida, $value->data);
										$return = $data['dias'].' '.$data['hora'].':'.$data['min'].':'.$data['seg'];
									}

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;



								// Set
								} elseif($col[1] == 'set'){
									$return = set($table, $value->id, $col[2]);

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;



								// Info_seta
								} elseif($col[1] == 'info_seta'){ // add botao https://datatables.net/examples/api/row_details.html
									$return  = '<div class="info_seta" info="'.$value->nome.'">';
										$return .= '<div class="ml20"><i class="faa-plus w20 h20 c_flex jc c_branco bd_333 back_verde br50p no_efeito"></i></div>';
										$return .= '<div class="dn ml20"><i class="dn faa-minus w20 h20 c_flex jc c_branco bd_333 back_vermelhlo br50p"></i></div>';
									$return .= '</div>';

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;



								// Sim Nao
								} elseif($col[1] == 'sim_nao'){
									$return = ($item) ? '<b class="c_verde">SIM</b>' : '';

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;



								// Color
								} elseif($col[0] == 'color'){
									if($value->foto)
										$return = '';
									else
										$return = '<div style="width:30px; height:30px; display: inline-block; background:'.$item.'" class="br5"></div>';

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;




								// verificar_pin
								} elseif($col[1] == 'verificar_pin'){
									$return  = '';
									if($item){
										$return .= '<i class="faa-map-marker c_azul"></i> ';
									}

									$row_atual['tags']  = $info;
									$row_atual['onclick']  = "boxs('pin', 'id=".$value->id."')";
									$row_atual['onclick_class']  = 'dib fz16 pl5 pr5';
									$row_atual['value'] = $return;
									$row_atual['exportar'] = '(nao_mostrar)';


								} elseif($col[1] == 'okk'){
									$return  = '';
									if($item!='1'){
										$return .= '<i class="faa-globe c_azul"></i> ';
									}

									$row_atual['tags']  = $info;
									$row_atual['onclick']  = "boxs('pin1', 'id=".$value->id."')";
									$row_atual['onclick_class']  = 'dib fz16 pl5 pr5';
									$row_atual['value'] = $return;
									$row_atual['exportar'] = '(nao_mostrar)';




								// Online
								} elseif($col[1] == 'online'){
								 	$return = 'Off';
								 	$return1 = 'Off';
									if($item){
										if(online($item)){ // *ult_acesso
											$return = '<b style="color:#0C0">On</b>';
											$return1 = 'On';
										}
									}

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;
									$row_atual['exportar'] = $return1;



								// Download
								} elseif($col[1] == 'download'){ // *foto
									$return  = '';
									if($item){
										$return .= '<i class="faa-download c_azul"></i> ';
									}

									$row_atual['tags']  = $info;
									$row_atual['onclick']  = 'downloadd('.A.$item.A.', '.A.'../../web/fotos/'.FOTOS.A.')';
									$row_atual['onclick_class']  = 'dib fz16 pl5 pr5';
									$row_atual['value'] = $return;
									$row_atual['exportar'] = '(nao_mostrar)';



								// Ver
								} elseif($col[1] == 'ver'){ // *foto
									$return  = '';
									if($item){
										$return .= '<a onclick="boxs('.A.'ver'.A.', '.A.'modulos='.$modulos->id.'&box='.$col[2].'&id='.$value->id.A.', 1)" class="dib fz16 pl5 pr5"><i class="'.iff($col[3], $col[3], 'faa-file-video-o').' c_azul"></i> </a> ';
									}

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;
									$row_atual['exportar'] = '(nao_mostrar)';



								// LINK_INDICACAO
								} elseif($col[1] == 'link_indicacao'){
									$return = '';
									if($item){
										$return  = '<a onclick="copyy('.A.'.link_indicacao_'.$value->id.A.')" class="c_azul link">Copiar Link</a>';
										$return .= '<input type="text" class="link_indicacao_'.$value->id.' w05 h05 op0" value="'.DIR_C.'/indicacao/'.base64_encode('543'.$item.'5dg').'">';
										
									}

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;


								// Situacao
								} elseif($col[0] == 'situacao'){ // *situacao
									$return = '<i class="mr5 fz14 faa-clock-o"></i>'.SITUACAO_PD;
									$mysql->prepare = array($item);
									$mysql->filtro = " WHERE `id` = ? ";
									$situacoes = $mysql->read_unico($col[1]);
									if(isset($situacoes->id)){
										$return = '<i class="mr5 fz14 fa '.$situacoes->icon.'" style="color:'.$situacoes->cor.'"></i>'.$situacoes->nome;
									}
									if($value->erro_pagamento){
										$return .= '<div class="fwb c_vermelho">*'.$value->erro_pagamento.'</div>';
									}

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;



								// Status
								} elseif($col[0] == 'status'){ // *status
									$return		= $item ? '<i class="di fz16 c_verde faa-check"></i>' : '<i class="di fz16 n_ativo faa-check"></i>';
									$return1	= $item ? 'Ativo' : 'Bloqueado';
								 	$script = (isset($_POST['oTable']) AND $_POST['oTable'] == '_boxs') ? '<script> setTimeout(function(){ $(".datatable_boxs .td_0").parent().hide(); $(".datatable_boxs .th_0").hide(); }, 0.5); </script>' : '';

									$row_atual['tags']  = $info;
									$row_atual['onclick']  = 'datatable_acoes('.A.'block'.A.', '.A.$modulos->id.A.', '.A.$value->id.A.')';
									$row_atual['onclick_class']  = 'dib pt5 pb5 pl10 pr10';
									$row_atual['value'] = $return;
									$row_atual['exportar'] = $return1;



								// Status1
								} elseif($col[0] == 'status1'){ // *status1
									$return		= $item ? '<i class="di fz16 c_verde faa-check"></i>' : '<i class="di fz16 n_ativo faa-check"></i>';
									$return1	= $item ? 'Ativo' : 'Bloqueado';

									$row_atual['tags']  = $info;
									$row_atual['onclick']  = 'datatable_acoes('.A.'block1'.A.', '.A.$modulos->id.A.', '.A.$value->id.A.')';
									$row_atual['onclick_class']  = 'dib pt5 pb5 pl10 pr10';
									$row_atual['value'] = $return;
									$row_atual['exportar'] = $return1;



								// Telefones
								} elseif($col[1] == 'telefones'){ // *ordem
								 	$return  = '';
								 	$return .= isset($value->telefone) ? '<div class="">'.$value->telefone.'</div><div class="clear"></div>' : '';
								 	$return .= isset($value->celular) ? '<div class="dib pt2" style="border-top:1px solid #ccc">'.$value->celular.'</div><div class="clear"></div>' : '';
								 	$return .= isset($value->whatsapp) ? '<div class="dib pt2" style="border-top:1px solid #ccc">'.$value->whatsapp.'</div><div class="clear"></div>' : '';

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;
									$row_atual['exportar'] = $item;



								// Ordem
								} elseif($col[0] == 'ordem'){ // *ordem
								 	$boxs = '';
								 	if(isset($_POST['rand'])){
								 		$boxs = 'onkeyup="enter('.A.'datatable_ordenar_boxs(e)'.A.', event, this)" modulos="'.$modulos->id.'" rand="ordemm_'.$_POST['rand'].'" ';
								 	}
									$return = '<span class="dni">'.$item.'</span> <input type="text" name="ordem['.$value->id.']" id="ordem_'.$value->id.'" size="1" class="datatable_ordem pl10 pr10 design tac" value="'.$item.'" maxlength="3" onclick="this.select()" '.$boxs.' /> ';

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;
									$row_atual['exportar'] = $item;



								// Input
								} elseif($col[1] == 'input'){
								 	$boxs = '';
									$return = '<span class="dni">'.$item.'</span> <input type="text" name="input['.$col[0].']['.$value->id.']" id="input_'.$col[1].'_'.$value->id.'" size="1" class="datatable_ordem pl10 pr10 design tac" value="'.$item.'" maxlength="3" onclick="this.select()" /> '.$col[2];

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;
									$row_atual['exportar'] = $item.$col[2];



								// Icon
								} elseif($col[1] == 'icon'){
									$return = $item ? '	<i class="'.$value->foto.' fz16"></i> ' : '';

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;
									$row_atual['exportar'] = $item;



								// Txt
								} elseif($col[0] == 'txt' OR $col[0] == 'txt1' OR $col[0] == 'txt2'){
								 	if($col[1] == 'msg'){
										$return  = '<div> '.$item.'</div> ';
								 	} else {
										$return  = '<div rel="tooltip" data-original-title="'.$item.'"> '.limit($item, 70).'</div> ';
										$return .= '<script> $("[rel=tooltip]").tooltip({html:true}) </script> ';						 		
								 	}

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;


								// SVG
								} elseif($col[0] == 'svg'){
									$return = voltar_cod($item);

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;


								// Imagem
								} elseif($col[0] == 'foto' OR $col[1] == 'foto'){ // *foto
									if($item AND preg_match('(data:)', strtolower($item)) AND preg_match('(;base64,)', strtolower($item))){
										$return = '<img src="'.$item.'" class="img" />';
									} elseif($item AND file_exists('../../../../web/fotos/'.FOTOS.$item) AND (preg_match('(.webp)', strtolower($item)) OR preg_match('(.pjpeg)', strtolower($item)) OR preg_match('(.jpeg)', strtolower($item)) OR preg_match('(.jpg)', strtolower($item)) OR preg_match('(.gif)', strtolower($item)) OR preg_match('(.png)', strtolower($item)) OR preg_match('(.bmp)', strtolower($item))) ){
										$return = datatable_ajax_img($col[0], $item, $value);
									} elseif(preg_match('(.swf)', strtolower($item)) OR preg_match('(.pfd)', strtolower($item)) OR preg_match('(.xls)', strtolower($item)) OR preg_match('(.doc)', strtolower($item)) OR preg_match('(.txt)', strtolower($item))){
										$col[2]=='link';
										$return = 'ver arquivo';
									} else {
										$return = '<img src="'.DIR_C.'/web/img/outros/sem_img.jpg" class="img" />';
									}

									//if(($col[1]=='link' OR $col[2]=='link') AND $item){
									if($item){
										$return = '<a onclick="hreff('.A.DIR.'/web/fotos/'.FOTOS.$item.A.')" class="c_azul link">'.$return.'</a>';
									}

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;
									$row_atual['exportar'] = DIR_C.'/web/fotos/'.FOTOS.$item;



								// None
								} elseif($col[1] == 'none'){ // *id
									$return  = '<script>';
										$return .= 'setTimeout(function(){';
											$return .= '$(".th_'.$col[2].'").hide();';
											$return .= '$(".td_'.$col[2].'").parent().hide();';
										$return .= '}, .5);';
									$return .= '</script>';

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;



								// Id
								} elseif($col[0] == 'id'){ // *id
									$return = '#'.$item;

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;



								// Outros
								} else { // *Outros
									$return = $item;

									$row_atual['tags']  = $info;
									$row_atual['value'] = $return;

							// PADROES


							}
						// COLUNAS


						// ROWS
						if(isset($row_atual['tags'])){
							foreach ($row_atual['tags'] as $k => $v){
								if($v)
									$row[$k_col][$k] = $v;
							}
						}
						if(isset($row_atual['onclick'])){
							$row[$k_col]['onclick'] = $row_atual['onclick'];
							$row[$k_col]['onclick_class'] = isset($row_atual['onclick_class']) ? $row_atual['onclick_class'] : '';
						}
						if(isset($row_atual['span'])){
							$row[$k_col]['span'] = $row_atual['span'];
						}

						if(isset($row_atual['exportar']))
							$row[$k_col]['exportar'] = sem('tags', $row_atual['exportar']);

						$row[$k_col]['value'] = $row_atual['value'];
						// ROWS


					}
					$arr["data"][] = $row;
					// INFOS DA TABLE
				}


			// DADOS

		// ----------------------------------------------------------------------------------------------------------------------------------------------------


		// Saidas
		$arr["oTable"] = isset($_POST['oTable']) ? $_POST['oTable'] : '';
		if(!isset($_POST['row'])){
			$arr["draw"] 			= intval($_POST['draw']);
			$arr["recordsTotal"]	= intval($consulta1['total']);
			$arr["recordsFiltered"] = intval($consulta1['total_filtrado']);
		}

        // Gravar dados no banco
        if($arr["oTable"] == '_gravar_datatable'){
            $arr['gravar_dados_table'] = $_POST['gravar_dados_table'];
        }

		// Html
		$arr["html"] = isset($arr["html"]) ? $arr["html"] : ' ';
        if($table == 'pedidos'){
        	if(isset($preco['valor_pago'])){
	        	$arr["html"] .= '<div class="tar pl20 pr20 fz20 fwb">Valor Pago: '.preco($preco['valor_pago'], 1).'</div>';
    	    }
        	if(isset($preco['valor_total'])){
	        	$arr["html"] .= '<div class="tar pl20 pr20 fz20 fwb">Valor Total: '.preco($preco['valor_total'], 1).'</div>';
    	    }
        }


		include_once 'scripts/func_ajax_fim.php';



	}

	echo json_encode($arr);

?>