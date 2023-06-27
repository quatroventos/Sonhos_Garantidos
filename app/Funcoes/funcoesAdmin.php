<?

   	// NOVO
   	// NOVO




	// ------------------------------------------------------------------------------------------------------------------------------------



	// INDEX ADMIN
		/* Especificacoes do Menu */
        	function index_admin_menu(){
				$mysql = new Mysql();
				$return = array();

				// Permissoes do Menu Inicial
		        if(LUGAR == 'admin'){
					$verificacoes = new Verificacoes();
					$filtro_permissoes = "  AND admins = '' ".$verificacoes->liberar_permissoes_menu_inicial();

				} else {
					$filtro_permissoes = " AND admins = '".LUGAR."' ";
				}


				// Menu e Sub Menus
				$i = 0;
				$mysql->filtro = " WHERE `status` = 1 AND `tipo` = 0 AND `id` IN ( SELECT `categorias` FROM menu_admin WHERE `status` = 1 ".$filtro_permissoes." ) ORDER BY `ordem` ASC, `nome` ASC, `id` DESC ";
				$menu_admin1_cate_0 = $mysql->read('menu_admin1_cate');
				if(!$menu_admin1_cate_0){
					$arr['erro'][]= 'Nenhuma Permissão para Acesso aos Menus Foi Cadastrado Para Este Usuário!';
					echo json_encode($arr);
					exit();
				}
				foreach ($menu_admin1_cate_0 as $key => $value){ $i++;

					// Categorias
					$return['menu_cate'][$i] = $value;

					// Menus
					$z = 0;
					$mysql->prepare = array($value->id);
					$mysql->filtro = " WHERE `status` = 1 AND `categorias` = ? ".$filtro_permissoes." ORDER BY `ordem` ASC, `nome` ASC, `id` DESC ";
					$menu_admin = $mysql->read('menu_admin');
					foreach ($menu_admin as $k => $v){ $z++;
						$return['menu'][$i][$z] = $v;
					}


					// Sub Categorias
					$mysql->prepare = array($value->id);
					$mysql->filtro = " WHERE `status` = 1 AND `tipo` = 1 AND `subcategorias` = ? AND `id` IN ( SELECT `categorias` FROM menu_admin WHERE `status` = 1 ".$filtro_permissoes." ) ORDER BY `ordem` ASC, `nome` ASC, `id` DESC ";
					$menu_admin1_cate_0 = $mysql->read('menu_admin1_cate');
					foreach ($menu_admin1_cate_0 as $k => $v){
						$return['menu_subcate'][$i] = $v;

						// Menus Sub
						$y = 0;
						$mysql->prepare = array($v->id);
						$mysql->filtro = " WHERE `status` = 1 AND `categorias` = ? ".$filtro_permissoes." ORDER BY `ordem` ASC, `nome` ASC, `id` DESC ";
						$menu_admin = $mysql->read('menu_admin');
						foreach ($menu_admin as $k1 => $v1){ $y++;
							$return['menu_sub'][$i][$y] = $v1;
						}
					}
				}

				return $return;
        	}
		/* Especificacoes do Menu */


		/* Default */
			//function defaultt(){
				//return "ajaxNormal('../../admin/views/default.php', '', 0)";
			//}
		

			// GETS TIPOS
				function default_gets_tipos($post){
					$return = '';
					foreach ($post as $key => $value) {
						if(preg_match('(tipo)', $key)){
							if($key != 'tipo1'){
								$kk = str_replace('tipo', '', $key);
								$return .= '&tipo'.($kk-1).'='.$value;
							}
						} else {
							$return .= '&'.$key.'='.$value;
						}
					}
					return $return;
				}
			// GETS TIPOS

			// DEFAULT LINK
				function default_link($value, $post, $coluna=''){
					$return = '';
					$id = $coluna ? $coluna : 'id';
					$gets = $_POST['gets'].'&'.$post['tipo1'].'='.$value->$id;
					if(isset($post['tipo2'])){
						//$return = 'defaultt('.A.$_POST['tipo'].'_'.$post['tipo2'].A.', '.A.A.', '.A.$gets.A.')';
						$return = 'defaultt('.A.$_POST['tipo'].A.', '.A.A.', '.A.$gets.A.')';
					} elseif(isset($post['modulo'])){
						$return = VIEWS.'('.$post['modulo'].', 0, '.A.$gets.A.')';
					}
					return $return;
				}
			// DEFAULT LINK
		/* Default */
	// INDEX ADMIN




	// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



	// DATATABLE AJAX
		function datatable_ajax_img($col, $item, $value, $class=''){
			$return = '';
			if(preg_match('(.png)', strtolower($item)) OR preg_match('(.bmp)', strtolower($item)) OR preg_match('(.webp)', strtolower($item)) OR preg_match('(.svg)', strtolower($item))){
				//$foto = 'web/fotos/'.FOTOS.$item.'" width="100" height="100" ';
				$foto = 'web/fotos/'.FOTOS.$item;
				$return = '<img src="'.DIR.'/'.$foto.'" class="img" />';
			} else {
				$img = new Imagem();
				$img->carregamento = 0;
				$img->caminho = '../../../../web/fotos/'.FOTOS.'';
				$img->foto = $col;
				$img->img($value, 100, 100);
				$nome_da_foto = nome_da_foto($item);
				$foto = 'web/fotos/'.FOTOS.'thumbnails/'.$nome_da_foto['nome'].'_100x100.'.$nome_da_foto['ext'];
				$return = '<img src="'.DIR.'/'.$foto.'" class="img '.$class.'" />';
			}
			return $return;
		}
	// DATATABLE AJAX



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



		// NA GRAVACAO
	        // CAMPOS GRAVAR ADMIN
		        function campos_gravar_admin($table){
					$mysql = new Mysql();
					$mysql->prepare = array($_GET['modulo']);
					$mysql->filtro = " WHERE id = ? ";
					$modulos = $mysql->read_unico('menu_admin');
					$modulos->colunas = unserialize(base64_decode($modulos->colunas));

	                $camposmodulos = new CamposModulos();
	                $camposmodulos->modulos = $modulos;
	                $camposmodulos->ids = array(0);
	                $camposmodulos->gravar_campos = 1;

	                $_GET['lugar'] = $_POST['lugar'];
                	$_GET['acao'] = (isset($_GET['id']) AND $_GET['id']) ? 'edit' : 'novo';

                	$input = new Input();
					$mysql->prepare = array($_GET['id']);
					$mysql->filtro = " WHERE id = ? ";
					$linhas = $mysql->read_unico($table);
		            include DIR_F.'/admin/views/Individual/campos.php';
					$_GET['acao'] = 'gravar';

		            $arr = array('html'=>'');
	                $arr = $camposmodulos->conteudo($campos, $arr);
					return $arr['camposss'];
		        }
	        // CAMPOS GRAVAR ADMIN

	        // REMOVER $_FILES
		        function remover_posts_files(){
		            foreach ($_POST as $key => $value){
		                if(preg_match('(foto)', $key)){
		                	$ex = explode('foto', $key);
		                	if(!$ex[0])
		                		unset($_POST[$key]);
		                }
		                if(preg_match('(multifotos)', $key)){
		                	$ex = explode('multifotos', $key);
		                	if(!$ex[0])
		                		unset($_POST[$key]);
		                }
		            }
		        }
	        // REMOVER $_FILES
	// NA GRAVACAO


	// INSERIR BOX
        function inserir_box_gravar($id, $table){
			$mysql = new Mysql();
            foreach ($_POST as $key => $value) {
                if(preg_match('(inserir_box_)', $key)){
                	$tipo = str_replace('inserir_box_', '', $key);
                	$enderecos = array('0');
                	foreach ($_POST[$key] as $k => $v) {
                		unset($mysql->campos);
                		if($k != 'principal'){
	                		$enderecos[] = $k;
	                		foreach ($v as $k1 => $v1) {
								$mysql->campo[$k1] = $v1;
	                		}
							$mysql->campo[$table] = $id;
							$mysql->campo['principal'] = 0;
							$mysql->campo['status'] = 1;
	                		$mysql->logs = 0;
	                		$mysql->prepare = array($k);
							$mysql->filtro = " WHERE `id` = ? ";
							$mysql->update($table.'_'.$tipo);
                		}
                	}
                	// Deletendo ""
                	unset($mysql->campo);
                	$mysql->logs = 0;
					$mysql->campo['status'] = 0;
					$mysql->campo['principal'] = 0;
					$mysql->filtro = " WHERE !(id IN (".implode(',', $enderecos).")) ";
					$mysql->update($table.'_'.$tipo);

                	// Gravando Principal
                	if(isset($value['principal'])){
                		unset($mysql->campo);
						$mysql->campo['principal'] = 1;
	            		$mysql->logs = 0;
                		$mysql->prepare = array($value['principal']);
						$mysql->filtro = " WHERE `id` = ? ";
						$mysql->update($table.'_'.$tipo);
                	}
                	unset($_POST[$key]);
                }
            }
        }
        function inserir_box($linhas, $nome){
        	$table = isset($linhas->table) ? $linhas->table : '';
        	$id = isset($linhas->id) ? $linhas->id : '';
			$return = '<script>fieldset_ini($("button[name='.$nome.']"), '.A.$table.A.', '.A.$id.A.')</script>';
			return $return;
        }
	// INSERIR BOX

	// OUTROS
		// Tirar char especiais dos names
		function menu_admin_names($post){
			$array = '';
			if(isset($post['campos'])){
				foreach ($post['campos'] as $key => $value){
					foreach ($value as $k => $v){
						$post['campos'][$key][$k]['input']['nome'] = sem('acentos', $v['input']['nome']);
					}
				}
			}
			return $post;
		}

		// Acesso para outos admins
		function acesso_para_outos_admins($admins){
			$return = 0;
			foreach ($admins as $key => $value) {
				if($value == LUGAR){
					$return = 1;
				}
			}
			return $return;
		}
	// OUTROS



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




    // GRAVACAO DE CATEGORIAS (NIVEIS)
		function categorias_nivels($table, $id, $niveis, $item_atual='', $subcategorias_atual='', $tracos=1){
			$return = '';
			$mysql = new Mysql();
			$mysql->nao_existe = 1;
			$mysql->colunas = 'id, nome, tipo';
			$mysql->prepare = array($id, $item_atual, $niveis);
			$mysql->filtro = " WHERE `lang` = '".LANG."' AND `subcategorias` = ? AND `id` != ? AND `tipo` < ? ORDER BY `nome` ASC  ";
			$consulta = $mysql->read($table); $yy=0;
			foreach($consulta as $key => $value){ $yy++;
				$return .= '<option value="'.$value->id.'" '.iff($subcategorias_atual == $value->id, 'selected').' >';
					$return .= ($tracos ? tracos_nivels($value->tipo) : '-').' '.$value->nome;
				$return .= '</option>';
				$return .= categorias_nivels($table, $value->id, $niveis, $item_atual, $subcategorias_atual);
			}
			return $return;
		}

		function tracos_nivels($tipo){
			$return = '';
			for($i=0; $i<(3*$tipo)+3; $i++)
				$return .= '-';
			return $return;
		}

		function vcategorias_categorias_nivels_gravar($table){
			if(isset($_POST['subcategorias'])){
				$mysql = new Mysql();

				// Zerar se for selecionado uma categoria com a hierarquia errada
				$zerar = 0;
				$mysql->nao_existe = 1;
				$mysql->colunas = "id, tipo, subcategorias";
				$mysql->filtro = " WHERE `tipo` != 0 ORDER BY `tipo` ASC ";
				$consulta = $mysql->read($table);
				foreach($consulta as $value){
					$mysql->nao_existe = 1;
					$mysql->colunas = "tipo";
					$mysql->prepare = array($value->subcategorias);
					$mysql->filtro = " WHERE `id` = ? ";
					$consulta1 = $mysql->read($table);
					foreach($consulta1 as $v){
						if($value->tipo != ($v->tipo+1))
							$zerar = 1;
					}
					if(!count($consulta1)) $zerar = 1;
	
					if($zerar){
						$mysql->campo['tipo'] = 0;
						$mysql->campo['subcategorias'] = 0;
						$mysql->prepare = array($value->id);
						$mysql->filtro = " WHERE id = ? ";
						$mysql->update($table);
					}
				}

				// Gravar o campo vcategorias
				$mysql->nao_existe = 1;
				$mysql->colunas = "id, tipo, subcategorias";
				$mysql->filtro = " ORDER BY `tipo` ASC ";
				$consulta = $mysql->read($table);
				foreach($consulta as $value){
	
					$vcategorias = '';
	
					for($i=0; $i<$value->tipo; $i++){
						$mysql->nao_existe = 1;
						$mysql->colunas = "id, subcategorias";
						$mysql->prepare = array($value->subcategorias);
						$mysql->filtro = " WHERE `id` = ? ";
						$consulta1 = $mysql->read($table);
						foreach($consulta1 as $v){
							$value->subcategorias = $v->subcategorias;
							$vcategorias = $v->id.'-'.$vcategorias;
						}
					}
	
					$vcategorias = '-'.$vcategorias.$value->id.'-';
	
					$mysql->campo['vcategorias'] = $vcategorias;
					$mysql->prepare = array($value->id);
					$mysql->filtro = " WHERE id = ? ";
					$mysql->update($table);
	
				}

			}
		}
 	// GRAVACAO DE CATEGORIAS (NIVEIS)




	// BOXXS
		function boxxs_admin($modulos){
			$return = '';

            $colunas = $modulos->colunas;
	        $cols = explode('->', $modulos->info);

			foreach ($colunas as $key => $value) {
				if(isset($value['check']) and $value['check']){
					$boxxs[] = $value;
				}
			}

			switch ( count($boxxs) ) {
				case 1:		$wr = 'wr12';	break;
				case 2:		$wr = 'wr6';	break;
				case 3:		$wr = 'wr4';	break;
				case 4:		$wr = 'wr3';	break;
				case 5:		$wr = 'wr2';	break;
				case 6:		$wr = 'wr2';	break;
				case 7:		$wr = 'wr15';	break;
				case 8:		$wr = 'wr15';	break;
				case 9:		$wr = 'wr1';	break;
				case 10:	$wr = 'wr1';	break;
				case 11:	$wr = 'wr1';	break;
				case 12:	$wr = 'wr1';	break;
			}

			$mysql = new Mysql();
			foreach ($boxxs as $key => $value) {
				$return .= '<li class="'.$wr.'">
								<div class="itens">
			                        <h3> '.$value['nome'].' </h3> ';
			                        $ex = explode('->', $value['value']);
				$return .= '        <ul class="sortable '.$ex[1].'" boxxs="'.$ex[0].'" table="'.$modulos->modulo.'"> ';
							            $mysql->filtro = " WHERE ".STATUS." AND boxxs = '".$ex[0]."' ORDER BY nome ASC ";
							            $consulta = $mysql->read($modulos->modulo);
										foreach ($consulta as $key => $value) {
											$return .= '<li dir="'.$value->id.'" ondblclick="views('.$modulos->id.', 1, '.A.'id='.$value->id.A.')"> ';
											$col = array();
											foreach ($cols as $k => $v) {
												if($v){
													if($v == 'id'){
														$col[] = '#'.$value->$v;
													} elseif(preg_match('(set)', $v)){
														$set = entre('set[', ']', $v);
														$var = entre('$', '$', $set);
														$val = $value->$var;
														$val = str_replace('$'.$var.'$', $val, $set);
														eval("\$val = $val;");
														$col[] = $val;
													} else
														$col[] = $value->$v;
												}
											}
											$return .= implode(' - ', $col);
											$return .= '</li> ';
										}
				$return .= '        </ul>
		                        </div>
		                    </li> ';
			}
			return($return);
		}
	// BOXXS

?>