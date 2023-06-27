<?

	class Datatable {

		public $modulos;
		public $datatables_ordem;
		public $datatables_top;
		public $datatables_center;
		public $passar_para_ajax;

		public function script($gerenciar=''){
			$return = "\n";
			$return .= '<script type="text/javascript" charset="utf-8"> ';
				$return .= '$(document).ready(function() { ';
					$return .= 'var oTable'.$gerenciar.' = $dataTable_oTable = $(".datatable'.$gerenciar.'").DataTable({ ';

						$return .= '"order": ['.$this->ordenacao($this->datatables_center, $this->datatables_ordem).'], ';
						if(isset($this->modulos->order) AND $this->modulos->order){
							$return .= '"iDisplayLength" : '.stripslashes($this->modulos->order).', ';
						} elseif(isset($this->modulos->modulo) AND $this->modulos->modulo == 'financeiro') {
							$return .= '"iDisplayLength" : 99999999999, ';
						} elseif(isset($this->modulos->modulo) AND $this->modulos->modulo == 'menu_admin') {
							$return .= '"iDisplayLength" : 10000, ';
						} else {
							$mysql = new Mysql();
							$usuario = isset($_SESSION['x_admin']->id) ? $_SESSION['x_admin']->id : 1;
							$mysql->colunas = 'itens_pagina';
							$mysql->prepare = array($usuario);
							$mysql->filtro = " WHERE `id` = ? ";
							$usuarios = $mysql->read_unico('usuarios');
							$itens_pagina = (isset($usuarios->itens_pagina) AND $usuarios->itens_pagina) ? $usuarios->itens_pagina : 25;
							$return .= '"iDisplayLength" : '.$itens_pagina.', ';
						}
												
						$return .= '"sPaginationType": "full_numbers", ';
                		$return .= '"processing": true, ';
                		$return .= '"serverSide": true, ';
                		$return .= '"ajax":{ ';
                    		$return .= '"url": "'.DIR.'/admin/app/Ajax/Datatables/ajax.php"+GETS, ';
                    		$return .= '"type": "POST", ';
							$return .= '"data": function (d) { ';
								$return .= 'return $.extend( {}, d, { ';
									$return .= '"oTable": "'.$gerenciar.'", ';
									$return .= $this->passar_para_ajax;
								$return .= '}); ';
							$return .= '} ';
                		$return .= '}, ';
            		$return .= '}); ';
					$return .= '$.extend({ ';
						$return .= 'atualizar_datatable'.$gerenciar.': function () { ';
							$return .= 'ajax_reload(oTable'.$gerenciar.') ';
						$return .= '}, ';
						if(!$gerenciar){
							$return .= 'atualizar_datatable_row'.$gerenciar.': function ($id) { ';
								$return .= 'ajax_reload_rows('.A.'row'.A.', oTable'.$gerenciar.', '.$this->modulos->id.', $id) ';
							$return .= '}, ';
							$return .= 'atualizar_datatable_row_add'.$gerenciar.': function ($id) { ';
								$return .= 'ajax_reload_rows('.A.'add'.A.', oTable'.$gerenciar.', '.$this->modulos->id.', $id) ';
							$return .= '}, ';
							$return .= 'atualizar_datatable_row_delete'.$gerenciar.': function ($id) { ';
								$return .= 'ajax_reload_rows('.A.'delete'.A.', oTable'.$gerenciar.', '.$this->modulos->id.', $id) ';
							$return .= '}, ';
						}
					$return .= '}); ';
				$return .= '}); ';
			$return .= '</script> ';
			$return .= "\n\n";

			return($return);
		}




		public function ordenacao(){
			foreach ($this->datatables_center as $key => $value) {
				if(preg_match('(id)', $value) AND $key==0)
					$id = $key;
				if(preg_match('(data)', $value) AND $key==0)
					$id = $key;
				if(preg_match('(nome)', $value) AND !preg_match('(->nome)', $value))
					$nome = $key;
				if(preg_match('(ordem)', $value))
					$ordem = $key;
			}
			$ordenacao = '';
			if(isset($ordem))	$ordenacao .= '[ '.$ordem.', "asc" ], ';
			if(isset($id))		$ordenacao .= '[ '.$id.', "desc" ], ';
			if(isset($nome))	$ordenacao .= '[ '.$nome.', "asc" ], ';

			$return = $ordenacao.' [ 0, "asc" ]';
			if($this->datatables_ordem) $return = $this->datatables_ordem.', '.$return;
			return($return);
		}




		public function acoes($gerenciar='', $aparecer=0){
			$exportar = '';			
			foreach ($this->datatables_top as $key => $value) {
				$ex = explode('->', $value);
				$exportar .= $ex[0].'z|z';
			}

	        $menu_admin = (isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id==1 AND $this->modulos->id==1) ? 1 : 0;
	        $menu_admin1 = (isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id==1 AND $this->modulos->id==2) ? 1 : 0;

			$return = '<div class="acoes acoes_temp '.iff(!$aparecer, 'dn').'"> ';
							$_GET['gets'] = isset($_GET['gets']) ? $_GET['gets'] : '';
							//if($this->modulos->id == 13 OR $this->modulos->id == 71){
							//	$return .= '<button type="button" class="fll botao novo" onclick="views('.$this->modulos->id.', '.A.'novo'.A.', '.A.$_GET['gets'].A.');"> <i class="icon mr5 faa-plus-circle c_verde"></i> Novo (Pessoa Física) </button> ';
							//	$return .= '<button type="button" class="fll botao novo" onclick="views('.$this->modulos->id.', '.A.'novo'.A.', '.A.$_GET['gets'].';;z;;tipo=1'.A.');"> <i class="icon mr5 faa-plus-circle c_verde"></i> Novo (Pessoa Jurídica)  </button> ';
							//} else
							if(preg_match('(novo)', $this->modulos->informacoes) OR $menu_admin){
								$return .= '<button type="button" class="fll botao novo" onclick="views('.$this->modulos->id.', '.A.'novo'.A.', '.A.$_GET['gets'].A.');"> <i class="icon mr5 faa-plus-circle c_verde"></i> Novo </button> ';
							}
							if(preg_match('(edit)', $this->modulos->informacoes) OR $menu_admin){
                            	$return .= '<button type="button" class="fll botao edit" disabled onclick="views('.$this->modulos->id.', '.A.'edit'.A.', '.A.$_GET['gets'].A.')"> <i class="icon mr5 faa-edit (alias) c_333"></i> Alterar </button> ';
							}
                           	if(preg_match('(ver_item)', $this->modulos->informacoes) OR $menu_admin){
                            	$return .= '<button type="button" class="fll botao edit" disabled onclick="views('.$this->modulos->id.', '.A.'edit'.A.')"> <i class="icon mr5 faa-external-link-square c_333"></i> Ver Item </button> ';
                           	}
							if(preg_match('(excluir)', $this->modulos->informacoes) OR $menu_admin){
                            	$return .= '<button type="button" class="fll botao delete" disabled onclick="if(confirm('.A.'Deseja realmente deletar o(s) iten(s) selecionado(s)?'.A.'))views('.$this->modulos->id.', '.A.'delete'.A.')"> <i class="icon mr5 faa-minus-circle c_vermelho"></i> Apagar </button> ';
							}
							if($gerenciar){
								$gets = gets_puro($_GET['gets'], ';;z;;');
                            	$return .= '<button type="button" class="fll botao selecionar" onclick="gerenciar_fechar_selecionado('.A.'gerenciar_'.$gets['rand'].A.')"> <i class="icon mr5 faa-check-circle c_azul"></i> Marcar item selecionado </button> ';
							}
                           	if($this->modulos->modulo == 'newsletter' AND !MOBILE){
                            	//$return .= '<button type="button" class="fll botao" onclick="boxs('.A.'newsletter'.A.', '.A.''.A.', 1)"> <i class="icon mr5 faa-envelope cor-Admin_666"></i> Enviar Newsletter </button> ';
                           	}
							if($this->modulos->modulo == 'xxxxxxxx'){
                            	$return .= '<button type="button" class="fll botao extra" onclick="datatable_acoes_botao_extra('.A.DIR.'/app/Exportacoes/gerar_cupom.php'.A.')"> <i class="icon mr5 fa fa-download cor-Admin_666"></i> Gerar Etiqueta </button> ';
                           	}
			if(!$aparecer){
				$return .= '	<div class="datatable_mais_acoes fll mr172">
		                            <ul class="mais_acoes fechar_item"> ';
		                            	if(preg_match('(excluir)', $this->modulos->informacoes) OR $menu_admin){
											$return .= '<li class="botao" onclick="datatable_selecionar_todos('.A.'.box_table ul.mais_acoes'.A.')"> <i class="icon mr5 faa-check-circle-o c_verde"></i> Selecionar Todos </li> ';
										}
			                        	$bloquear = 0;
			                        	if($menu_admin){
				                        	$bloquear = 1;
			                        	} elseif(!$menu_admin1) {
							                foreach ($this->modulos->colunas as $k1 => $v1){
						                        if(preg_match('(status)', $v1['value']) AND isset($v1['check']) AND $v1['check']){
						                        	$bloquear = 1;
						                        }
							                }
							            }
										if($bloquear){
		        	                        $return .= '<li class="botao" onclick="datatable_acoes('.A.'block'.A.', '.A.$this->modulos->id.A.')" > <i class="icon mr5 faa-unlock-alt cor-Admin_CEAC68"></i> Ativar / Bloquear </li> ';
										}
										if(preg_match('(clonar)', $this->modulos->informacoes) OR $menu_admin){
			    	                        $return .= '<li class="botao" onclick="datatable_acoes('.A.'clonar'.A.', '.A.$this->modulos->id.A.')" > <i class="icon mr5 faa-files-o c_azul"></i> Clonar </li> ';
										}
										if(preg_match('(star)', $this->modulos->informacoes) OR $menu_admin){
		    		                        $return .= '<li class="botao" onclick="datatable_acoes('.A.'star'.A.', '.A.$this->modulos->id.A.')" > <i class="icon mr5 faa-star c_amarelo"></i> Destaque </li> ';
										}
										if(preg_match('(lanc)', $this->modulos->informacoes) OR $menu_admin){
			        	                    $return .= '<li class="botao" onclick="datatable_acoes('.A.'lanc'.A.', '.A.$this->modulos->id.A.')" > <i class="icon mr5 faa-dot-circle-o c_verde"></i> Lançamento </li> ';
										}
										if(preg_match('(promocao)', $this->modulos->informacoes) OR $menu_admin){
			            	                $return .= '<li class="botao" onclick="datatable_acoes('.A.'promocao'.A.', '.A.$this->modulos->id.A.')" > <i class="icon mr5 faa-certificate c_azul"></i> Promoção </li> ';
										}
										$return .= '<li class="botao dni" onclick="datatable_mais_acoes_fechar()" > <i class="icon mr5 faa-file-text-o"></i> Imprimir em Html </li> ';
										$return .= '<li class="botao dni" onclick="datatable_exportar_txt()" > <i class="icon mr5 faa-file-text-o"></i> Exportar em TXT </li> ';
										$return .= '<li class="botao" onclick="datatable_exportar_excel()" > <i class="icon mr5 faa-file-excel-o c_verde"></i> Exportar em Excel (Itens da Tabela) </li> ';
										if(LUGAR == 'admin'){
											$return .= '<li class="botao" onclick="datatable_exportar_all('.A.$this->modulos->id.A.', '.A.'excel'.A.')" > <i class="icon mr5 faa-file-excel-o c_verde"></i> Exportar em Excel (Todos os Campos) </li> ';
										}
										$return .= '<li class="botao" onclick="datatable_exportar_pdf()" > <i class="icon mr5 faa-file-pdf-o c_vermelho"></i> Exportar em PDF (Itens da Tabela) </li> ';
										if(LUGAR == 'admin'){
											//$return .= '<li class="botao" onclick="datatable_exportar_all('.A.$this->modulos->id.A.', '.A.'pdf'.A.')" > <i class="icon mr5 faa-file-pdf-o c_vermelho"></i> Exportar em PDF (Todos os Itens) </li> ';
										}
				$return .= '	    </ul>
		                            <button type="button"class="botao mais_acoes" onclick="datatable_mais_acoes_abrir()"> Mais Ações <i class="icon m0 ml3 faa-caret-down c_666"></i> </button>
								</div> ';
				if(LUGAR == 'admin'){
					//$return .= '<a href="javascript:void(0)" class="datatable_colunas dn_700" onclick="boxs('.A.'datatable_colunas'.A.', '.A.'id='.$this->modulos->id.A.', 1)"><button type="button"class="flr botao colunas dni"> <i class="icon mr5 faa-bars c_666"></i> Colunas </button></a> ';
				}
				if($this->modulos->id!=1 AND $this->modulos->id!=2){
					$return .= '<a href="javascript:void(0)" class="datatable_filtro_avancado" onclick="boxs('.A.'filtro_avancado'.A.', '.A.'id='.$this->modulos->id.'&gets='.$_GET['gets'].A.', 1)"><button type="button"class="flr botao filtro_avancado"> <i class="icon mr5 faa-search c_azul"></i> Filtro Avançado </button></a> ';
				}
			}
			$return .= '	<div class="clear"></div>
                        </div>

						<!-- Exportarr -->
						<form id="exportarr" method="post" action="">
                        	<input type="hidden" name="exportar_table" value="'.$this->modulos->modulo.'" />
                        	<input type="hidden" name="exportar_top" value="'.$exportar.'" />
                        	<input type="hidden" name="exportar_center" class="exportar_center"/>
						</form>
						<!-- Exportarr -->

                        <script> datatable_acao_pos('.A.$gerenciar.A.') </script>
                        <div class="datatable_filtro_itens boxs_alert"></div>

						<div class="clear"></div> ';

			return($return);
		}




		public function title($gerenciar=''){
			$return = '';

			if(!$gerenciar){
            	$return .= '<div class="posa r0 mr20"> ';
        	    	//$return .= '<a onclick="history.go(-1); setTimeout(function(){ window.location.reload(); }, .5);" class="cor-Admin_hover_108ee9 link dn_700"><i class="faa-reply"></i> Voltar</a> ';
	            	$return .= '<a onclick="voltarr()" class="cor-Admin_hover_108ee9 link dn_700"><i class="faa-reply"></i> Voltar</a> ';
    	        $return .= '</div> ';
	        }

            //$return .= '<div class="min-h30"> ';
	            $return .= '<div class="title pb10"> '; // dn_450
		            $return .= '<a onclick="defaultt('.A.A.')" class="mb5 cor-Admin_hover_108ee9 link"> ';
		                $return .= '<i class="uii-home pr3"></i> Home ';
		            $return .= '</a> ';

		            $return .= '<span class="dib pl5 pr5 cor-Admin_999">/</span> ';
		            $return .= '<i class="'.$this->modulos->foto.' pr3"></i> '.$this->modulos->nome;

					if(isset($_GET['get']['secretarias_areas'])){
		    	        $return .= '<span class="dib pl5 pr5 cor-Admin_999">/</span> ';
			            $return .= rel('secretarias_areas', $_GET['get']['secretarias_areas']);
			        
			        } elseif(isset($_GET['get']['secretarias'])){
		    	        $return .= '<span class="dib pl5 pr5 cor-Admin_999">/</span> ';
			            $return .= rel('secretarias', $_GET['get']['secretarias']);
			        }
	            $return .= '</div> ';
            //$return .= '</div> ';

			return $return;
		}



		public function top(){
			$return  = "\n";
			$return .= '<thead>';
				$return .= '<tr>';
					foreach ($this->datatables_top as $key => $value) {
						// Categorias
						if($value == 'NOME DA CATEGORIA')
							$value = 'Categorias';

						// Classes
						$ex = explode('->', $value);
						$classe  = '';
						$classe .= ($ex[0]=='') ? 'w70 ' : '';
						$classe .= ($ex[0]=='Nome') ? 'tal ' : '';
						$classe .= ($ex[0]=='Status') ? 'w70 ' : '';
						$classe .= ($ex[0]=='Id' OR $ex[0]=='ID' OR $ex[0]=='Data') ? 'w100 ' : '';
						$classe .= ($ex[0]=='Data Cadastro' OR $ex[0]=='Data de Cadastro') ? 'w120 ' : '';

						$classe .= ($ex[0]=='Nome') ? 'min-w150 ' : '';
						$classe .= ($ex[0]=='Ações') ? 'w100 ' : '';
						foreach ($ex as $val) {
							if(preg_match('(class=)', $val)){
								$classe .= str_replace('class=', '', $val);
							}
						}

						// Top Tabela
						$return .= '<th class="th_'.$key.' '.$classe.'"><b>'.$ex[0].'</b></th>';
					}
				$return .= '</tr>';
			$return .= '</thead>';
			$return .= '<tbody>';

			return($return);
		}





		public function passando_para_ajax($filtro){
            $passar_para_ajax = '"filtro": "'.$filtro.'", "modulo": "'.$this->modulos->id.'", "pg": "'.$_GET['modulo'].'", lugar: "'.LUGAR.'",';

            // Passando itens das colunas
            if($this->modulos->id==1){
                $datatables_top = array('Status', 'Nome', 'Ordem', 'Icon', 'Categorias');
                $datatables_center = array('status', 'nome', 'ordem', 'id->icon', 'categorias');
            } else {
                $this->modulos->colunas = $this->usuarios_config($this->modulos);
                $colunas = $this->modulos->colunas;
                $campos = unserialize(base64_decode($this->modulos->campos));


                // Colunas
                $col_foto = 0;
                foreach ($campos[0] as $key => $value) {
                    if(isset($value['check']) AND $value['check']){
                        if($value['input']['nome']=='foto')
                            $col_foto = 1;
                    }
                }
                $datatables_top = array();
                $datatables_center = array();
                foreach ($colunas as $key => $value) {
                    if(isset($value['check']) AND $value['check']){
                        $ex = explode('->', $value['value']);
                        if($ex[0] == 'foto'){
                            if($col_foto){
                                $datatables_top[] = $value['nome'];
                                $datatables_center[] = $value['value'];
                            }
                        } elseif($ex[0] == 'relacionamento_categoria_automatico'){
                            if(preg_match('(-categorias-)', $this->modulos->informacoes)){
                                $datatables_top[] = $value['nome'];
                                $datatables_center[] = 'categorias';
                            } elseif(preg_match('(-vcategorias-)', $this->modulos->informacoes)){
                                $datatables_top[] = $value['nome'];
                                $datatables_center[] = 'vcategorias';
                            } elseif(preg_match('(-subcategorias-)', $this->modulos->informacoes)){
                                $datatables_top[] = $value['nome'];
                                $datatables_center[] = 'subcategorias';
                            }
                        } else {
                            $datatables_top[] = $value['nome'];
                            $datatables_center[] = $value['value'];
                        }
                    }       
                }
                if( !isset($gerenciar_itens) AND ( preg_match('(-star-)', $this->modulos->informacoes) OR preg_match('(-lanc-)', $this->modulos->informacoes) OR preg_match('(-promocao-)', $this->modulos->informacoes) OR preg_match('(-mapa-)', $this->modulos->informacoes) ) ){
                    $datatables_top[] = 'Ações';
                    $datatables_center[] = 'id->acoes';
                }
            }

            // Ordenacao
            $ordem = (isset($this->modulos->ordem1) AND $this->modulos->ordem1) ? $this->modulos->ordem1 : '';

            // Colunas (Value)
            foreach($datatables_center as $key => $value){
                $passar_para_ajax .= '"col['.$key.']": "'.$value.'",';
            }

            // Datatable Filtro
            if(isset($_POST['datatable_filtro'])){
                foreach ($_POST['datatable_filtro'] as $k => $v) {
                    foreach ($v as $key => $value) {
                        if(is_array($value)){
                            foreach ($value as $k1 => $v1) {
                                if(is_array($v1)){
                                    foreach ($v1 as $k2 => $v2) {
                                        $passar_para_ajax .= '"datatable_filtro['.$k.']['.$key.']['.$k1.']['.$k2.']": "'.$v2.'",';
                                    }
                                } else {
                                    $passar_para_ajax .= '"datatable_filtro['.$k.']['.$key.']['.$k1.']": "'.$v1.'",';
                                }
                            }
                        } else {
                            $passar_para_ajax .= '"datatable_filtro['.$k.']['.$key.']": "'.$value.'",';
                        }
                    }
                }
            }

			$this->datatables_ordem = $ordem;
			$this->datatables_top = $datatables_top;
			$this->datatables_center = $datatables_center;
			$this->passar_para_ajax = $passar_para_ajax;
		}










		// Usuarios Config
		public function usuarios_config(){
			$return = array();
			$mysql = new Mysql();
			$usuario = isset($_SESSION['x_admin']->id) ? $_SESSION['x_admin']->id : 0;
			$mysql->colunas = 'id, colunas';
			$mysql->prepare = array($this->modulos->id, $usuario);
			$mysql->filtro = " WHERE `modulos` = ? AND `usuarios` = ? ";
			$usuarios_config = $mysql->read_unico('usuarios_config');
			if(isset($usuarios_config->id)){
				$usuarios_config_colunas = unserialize(base64_decode($usuarios_config->colunas));
				$modulos_colunas = unserialize(base64_decode($this->modulos->colunas));
				$modulos_campos = unserialize(base64_decode($this->modulos->campos));

				// Colunas
				foreach ($modulos_colunas as $key => $value) {
					if(isset($value['check']) AND $value['check'] AND $value['nome']){
						if(in_array('coluna_'.$key, $usuarios_config_colunas)){
							$n = 0;
							foreach ($usuarios_config_colunas as $k1 => $v1) {
								if($v1 == 'coluna_'.$key)
									$n = $k1;
							}
							$return[$n] = $value;
						}
					}
				}

				// Excluindo campos q ja existem em colunas
				$colunas_menu_admin = array();
				foreach ($modulos_colunas as $key => $value) {
					if(isset($value['check']) AND $value['check']){
						$ex = explode('->', $value['value']);
						$colunas_menu_admin[] = $ex[0];
					}
				}

				// Campos
				foreach ($modulos_campos as $key => $value) {
					foreach ($value as $k => $v) {
						if(isset($v['check']) AND $v['check'] AND $v['nome'] AND !preg_match('(1_cate)', $v['input']['nome']) AND !preg_match('(_hidden)', $v['input']['nome']) AND !preg_match('(inserir_box)', $v['input']['nome']) ){
							if(!in_array($v['input']['nome'], $colunas_menu_admin)){
								if(in_array('campo_'.$key.'_'.$k, $usuarios_config_colunas)){
									$n = 0;
									foreach ($usuarios_config_colunas as $k1 => $v1) {
										if($v1 == 'campo_'.$key.'_'.$k)
											$n = $k1;
									}
									/* Extra (->funcao no ajax) */
										$extra = '';
										if(preg_match('(data)', $v['input']['nome'])){
											$extra = '->data';
										} elseif(preg_match('(banco->)', str_replace(')', '', $v['input']['opcoes']) )){
											$opcoes = str_replace('(banco)->', '', $v['input']['opcoes']);
											$ex = explode('(', $opcoes);
											$extra = '->select->'.$ex[0];
										} elseif(preg_match('(foto)', $v['input']['nome'])){
											$extra = '->foto';
										} elseif(preg_match('(->)', $v['input']['opcoes'])){
											$extra = '->check';
										}
									/* Extra (->funcao no ajax) */
									$return[$n]['check'] = $v['check'];
									$return[$n]['nome'] = $v['nome'];
									$return[$n]['value'] = $v['input']['nome'].$extra;
								}
							}
						}
					}
				}
			}
			ksort($return);
			if(!$return)
				$return = unserialize(base64_decode($this->modulos->colunas));
			return $return;
		}








        // Filtro Avancado (criando os $_SESSION['filtro_avancado'})
		public function filtro($key, $value, $k=0){
			$return['nome'] = '';
			if($value != ''){
				$return['name'] = $key;
				$return['nome'] = $_POST['datatable_filtro']['nome'][$key];
				$opcoes = isset($_POST['datatable_filtro']['opcoes'][$key]) ? $_POST['datatable_filtro']['opcoes'][$key] : '';
				$tipo = $_POST['datatable_filtro']['tipo'][$key];
				$return['item'] = $value;

				// Select
				$itens = explode('(banco)->', $opcoes);
				if(isset($itens[1])){
					if(isset($itens[1]) AND $itens[1]){ // AND !preg_match('(1_cate)', $itens[1])
	                    $ex = explode('(banco)->', $opcoes);
	                    if(isset($ex[1])){
	                    	$ex1 = explode('->', $ex[1]);
	                    	$itens[1] = $ex1[0];
	                    }
						if($tipo == 'checkbox'){
							if(!is_array($return['item'])) $return['item'] = array($return['item']);
							$it = array();
							$mysql = new Mysql();
							$mysql->colunas = 'nome';
							$mysql->filtro = " WHERE `id` IN (".implode(',', $return['item']).") ";
							$consulta = $mysql->read($itens[1]);
							foreach ($consulta as $k => $v){
								$it[] = $v->nome;
							}
							if($it)
								$return['item'] = implode(' - ', $it);

						} else {
							$mysql = new Mysql();
							//if($itens[1] == ''){
								//$mysql->colunas = 'nome, estados';
							//} else {
								$mysql->colunas = 'nome';
							//}
							$mysql->prepare = array($return['item']);
							$mysql->filtro = " WHERE `id` = ? ";
							$consulta = $mysql->read_unico($itens[1]);
							if(isset($consulta->nome)){
								$return['item'] = $consulta->nome;
								//if($itens[1] == 'times'){
									//$return['item'] .= ' ('.$consulta->estados.')';
								//}
							}
						}
					}

				// Checkbox
				} elseif($tipo == 'checkbox' OR $tipo == 'select'){
					if($tipo == 'select'){
						$array[0] = $value;
					} else{
						$array = $value;
					}

					$it = array();
					$opcoes = explode('; ', $opcoes);
					if(!is_array($array)){
						$array = array($array);
					}
					foreach ($array as $k1 => $v1)
						for($c=0; $c<count($opcoes); $c++){
							$ex = explode('->', $opcoes[$c]);
							if(isset($ex[1]) AND $v1 == $ex[0])
								$it[] = $ex[1];
						}
					if($it){
						$return['item'] = implode(' - ', $it);
					}

				// Data
				} elseif($tipo == 'date' OR $tipo == 'datetime-local'){
					if(isset($value['from']) AND $value['from'] AND isset($value['to']) AND $value['to']){
						if(browser()=='chrome'){
							$value['from'] = data($value['from'], 'd/m/Y');
							$value['to'] = data($value['to'], 'd/m/Y');
						}
						if(!$value['from'] OR $value['from']=='erro' OR !$value['to'] OR $value['to']=='erro')
								$return['nome'] = '';
						else
							$return['item'] = $value['from'].' até '.$value['to'];
					} else {
						$return['nome'] = '';
					}
				}

			}
			return $return;
		}

		function filtro_del($modulo, $k, $key, $value){
			$return = '';
			// Deletar item
			if($k=='value' AND $key==$_POST['name']){
				$value =  '';
			}

			// Item com array (Data)
			if(is_array($value)){
				foreach ($value as $k1 => $v1){
					$return .= '&datatable_filtro['.$k.']['.$key.']['.$k1.']='.$v1;
				}
			} else {
				$return .= '&datatable_filtro['.$k.']['.$key.']='.$value;
			}

			// Filtro Inicial
			if($value=='' AND isset($_SESSION['filtro_inicial'][$modulo][$key])){
				unset($_SESSION['filtro_inicial'][$modulo][$key]);
			}

			return $return;
		}





	}

?>