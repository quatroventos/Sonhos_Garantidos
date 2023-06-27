<?

	class CamposModulos {

		public $modulos;
		public $ids;
		public $linhas;
		public $gravar_campos;

		// Conteudo
		public function conteudo($campos, $arr){
        	$return = '';

            $return .= '<div class="dialog"> ';
            	$return .= $this->dialog_acoes();
                $return .= '<div class="tabs menu_admin"> ';


		            $modulos_abas = $this->modulos->abas ? unserialize(base64_decode($this->modulos->abas)) : array();
		            $modulos_campos = $this->modulos->campos ? unserialize(base64_decode($this->modulos->campos)) : array();

                	
                	$form = "form_".rand();
                	//if(!($this->modulos->modulo == 'pedidos' AND $_GET['acao'] == 'edit')){
                	if($this->modulos->modulo != 'pedidos'){
                    	$return .= '<form class="'.$form.'" action="" method="post" enctype="multipart/form-data"> ';
                    }

		                // ABAS
                    		$mostrar_abas = 0;
                    		foreach ($modulos_abas as $key => $value) {
                    			if($value['check']){
                    				$mostrar_abas++;
                    			}
                    		}
                    		if($mostrar_abas>1){
		                        $return .= '<ul class="h31 nav"> ';
	                                            $x=0;
	                                            foreach ($modulos_abas as $key => $value) { $x++;
	                                            	if($value['check']){
								                        $return .= '<li tabs="tabs_'.$key.'" class="'.iff($x==1, 'ativo', '').' '.iff($value['disabled']==1, 'disabled', '').'"> ';
									                        $return .= '<a onclick="tabs(this)">'.iff($value['nome'], $value['nome'], 'Principal').'</a> ';
								                        $return .= '</li> ';
	                                            	}
		                                        }
		                        $return .= '	<div class="clear"></div> ';
		                        $return .= '</ul> ';
		                        $return .= '<div class="clear"></div> ';
		                    }
		                // ABAS

		                $return .= (isset($this->modulos->info) AND $this->modulos->info AND $this->modulos->tipo!=2) ? '<div class="mt10 ml10 mr10">'.$this->modulos->info.'</div>' : '';
		                $return .= '<ul class="campos box tabs"> ';

		                // CAMPOS
		                    $x=0;
		                    foreach ($modulos_abas as $kabas => $value_abas){ $x++;
		                    	if(!$kabas OR ($value_abas['check'] AND $value_abas['nome'])){
			                        $return .= '<li tabs="tabs_'.$kabas.'" class="'.iff($x==1, 'ativo', '').'"> ';
			                        $return .= '	<ul class="itens posr"> ';
		                                                if(isset($modulos_campos[$kabas])){
									                        $array = $this->conteudo_campos($modulos_campos[$kabas], $kabas, $campos, $arr);
									                        $arr['camposss'] = $array['camposss'];
															$return .= $array['html'];
		                                                }
			                        $return .= '   		<div class="clear"></div> ';
			                        $return .= '	</ul> ';
			                        $return .= '	<div class="h05 clear"></div> ';
			                        $return .= '</li> ';
			                        $return .= '<li class="clear"></li> ';
								}
		                    }
		                // CAMPOS


			            $return .= '</ul> ';
			            $return .= '<input type="hidden" name="id_atual" value="'.$this->ids[0].'"> ';
			            $return .= '<input type="hidden" name="acao_button" value="3"> ';
			            $return .= '<input type="reset" name="reset_button" class="dni"> ';
			            $return .= '<input type="submit" class="dni" onclick="preencher_campos_corretos()"> ';

                	//if(!($this->modulos->modulo == 'pedidos' AND $_GET['acao'] == 'edit')){
					if($this->modulos->modulo != 'pedidos'){
	                    $return .= '</form> ';
                	}

                    $return .= '<div class="clear"></div> ';
                    $return .= '<script> required_invalid('.A.'.tabs.menu_admin form.'.$form.A.') </script> ';
                    $gets = isset($_GET['gets']) ? $_GET['gets'] : '';
                    $return .= '<script> gravar_item('.A.$this->modulos->id.A.', '.A.$this->ids[0].A.', '.A.'.tabs.menu_admin form.'.$form.A.', '.A.$gets.A.') </script> ';

                    if(DIALOG_MAX){
                    	$return .= '<script> setTimeout(function(){ $('.A.'.ui-dialog.pg_'.$this->modulos->id.A.').addClass('.A.'max'.A.') }, 0,5); </script> ';
                    }

                $return .= '</div> ';
            $return .= '</div> ';

            $arr['html'] .= $return;
            return $arr;
		}




		// Campos da Pagina
        public function conteudo_campos($modulos_campos, $kabas, $campos, $arr){
    		$input = new Input();
    		$input->modulos = $this->modulos;
			$html = '';
			$camposss = array();

			$fields_ini=0;

			// CAMPOS INI
				if(isset($campos['ini'][$kabas]) OR isset($campos['centro_ini'][$kabas])){
					if(isset($campos['ini'][$kabas])){
			            $html .= '<div class="conteudo_ini">'.$campos['ini'][$kabas].'</div>';
			        }
					// INICIO FIELDS
						$html .= ' <div class="pl10 comecando_camposs"> <fieldset class="primeira_fieldset w100p fll pt5 pb5 pr10 mt5 mb5 br1"> ';
					// INICIO FIELDS
					if(isset($campos['centro_ini'][$kabas])){
			            $html .= '<div class="conteudo_centro_ini">'.$campos['centro_ini'][$kabas].'</div>';
			        }

					$fields_ini++;
				}
			// CAMPOS INI

            foreach ($modulos_campos as $key => $value) {

	          	// CAMPO CENTO
	          	if(isset($campos['centro'][$kabas]) AND $value['input']['nome']=='txt'){
	          		$html .= '<div class="clear"></div> ';
	          		if(isset($campos['centro'][$kabas])){
	            		$html .= '<div class="conteudo_centro">'.$campos['centro'][$kabas].'</div> ';
	            	}
	            	$html .= '<div class="conteudo_opcoes_demandas"></div> ';
	            	if(isset($campos['centro_fim'][$kabas])){
	            		$html .= '<div class="conteudo_centro_fim">'.$campos['centro_fim'][$kabas].'</div> ';
	            	}
	          	}
	          	// CAMPO CENTO

	          	$mais_campos_n = 0;
				if(isset($value['check']) AND $value['check']){

                	$campos_menuadmin = new CamposMenuAdmin();

					$value['tipo'] = isset($value['tipo']) ? $value['tipo'] : 'text';
					$tipo = $campos_menuadmin->menu_admin_tipo($value['tipo']);
					$type = $campos_menuadmin->menu_admin_type($tipo);

					if( !($tipo=='editor' AND MOBILE) ){

						// TABLE
							$input->table = $this->modulos->modulo;
						// TABLE

						// TAGS
							$tags = $value['input']['tags'];
	                        $desgin = preg_match('(design)', $tags) ? 'class="' : 'class="design ';
	                        $tags = str_replace('class="', $desgin, $tags);
	                        $tags = !(preg_match('(class=")', $tags)) ? $desgin.'" '.$tags : $tags;
		                    $input->tags = $tags;
						// TAGS

						// VALUE
		                    $input->value = $this->linhas;
						// VALUE

						// OPCOES
		                    $input->opcoes = isset($value['input']['opcoes']) ? $value['input']['opcoes'] : '';
						// OPCOES

						// EXTRA
		                    $input->extra = isset($value['input']['extra']) ? $value['input']['extra'] : '';
						// EXTRA

						// GERENCIAR
		                    $input->gerenciar = isset($value['gerenciar']) ? $value['gerenciar'] : '';
						// GERENCIAR

						// FIELDS
		                    // Fim
							$html .= ($value['fields'] AND $fields_ini) ? ' </fieldset> <div class="clear"></div> </div> ' : '';

							// Inicio
							$html .= ($value['fields'] OR !$fields_ini) ? ' <div class="pl10"> <fieldset class="fieldset_extra '.$value['fields'].' w100p fll pt5 pb5 pr10 mt5 mb5 br1"> ' : '';

							// Legend
							if($value['fields']){
		                    	$html .= '<legend class="pl5 pr5 ml15 mr5 bd-Admin_ddd back-Admin_fff bs1">';
			                    if($value['fields']==1){
			                    	$html .= $value['nome'];
			                    	$value['nome'] = '';
			                    } else{
			                    	$html .= $value['fields'];
			                    }
			                    $html .= '</legend>';
							} elseif(!$fields_ini){
			                    //$html .= '<legend class="pl5 pr5 ml15 mr5 bd-Admin_ddd back-Admin_fff bs1">Informações</legend>';
							}
						// FIELDS

							// INSERIR BOX
		                    	if(preg_match('(inserir_box)', $value['input']['nome'])){
									$html .= inserir_box($this->linhas, $value['input']['nome'] );
									$input->value = '';
		                    	}
							// INSERIR BOX

							// CAMPOS
		                    	$resp = isset($value['resp']) ? $value['resp'] : '';
				                $html .= ' <li class="'.$resp.' linhas_inputs '.$tipo.' camposs_'.$value['input']['nome'].' '.iff(preg_match('(multiple)', $tags), 'multiple').' '.iff($tipo=='hidden', 'dni').'"> ';
				                	if($tipo == 'info'){
				                		$txt = str_replace('<iframe', '&lt;iframe', $value['nome'].$value['input']['tags']);
				                		$txt = str_replace('</iframe', '&lt;/iframe', $txt);
				                		$html .= '<div class="mt5 ml10 mr10">'.str_replace('https://URL-DO-SEU-SITE', DIR_C, $txt).'</div> ';

			                		// MAIS CAMPOS
				                	} elseif($tipo == 'mais_campos'){
				                		$mais_campos_remove = str_replace('mais_campos', 'mais_campos_remove', $value['input']['tags']);
				                		$mais_campos_remove = str_replace('Adicionar mais', 'Remover último', $mais_campos_remove);
				                		$html .= '<div class="ml10 mr10">'.$value['nome'].$value['input']['tags'].' - '.$mais_campos_remove.'</div> ';
				                		if($this->linhas){
				                			$itens = entre("mais_campos(this, '", "')", $value['input']['tags']);
				                			$ex = explode("', '", $itens);
				                			for ($i=2; $i <=100; $i++){
				                				$values = array();
					                			foreach ($ex as $k1 => $v1){
					                				$VV = $v1.'_'.$i;
					                				if(isset($this->linhas->$VV)){
						                				$values[] = "'".$this->linhas->$VV."'";
						                			}
					                			}
					                			$veificar_values = 0; // Verificar se algum esta preenchido
					                			foreach ($values as $key => $value) {
					                				if($value != "''" AND $value != "'0000-00-00'" AND $value != "'0000-00-00 00:00:00'"){
						                				$veificar_values = 1;
						                			}
					                			}
					                			if($values AND $veificar_values){
					                				$html .= "<script>values = new Array(".implode(',', $values)."); mais_campos_edit(".($i+$mais_campos_n).", values, '".$itens."')</script>";
					                				$mais_campos_n++;
					                			}
				                			}
				                		}
				                	// MAIS CAMPOS


				                	} elseif($tipo == 'boxx'){
				                		if(!$this->gravar_campos){
			                    			$html .= $input->boxx($value, $this->linhas);
			                    			$html .= '<style>li[tabs="tabs_'.$kabas.'"] fieldset.pt5.pb5 { display: none; } </style> ';
			                    		}

				                	} else {
				                		if(!$this->gravar_campos){
		                    				$html .= $input->$type($value['nome'], $value['input']['nome'], $tipo);
		                    			}

							            // CAMPOS GRAVAR
											$camposss[] = $value['input']['nome'];
										// CAMPOS GRAVAR
			                    	}
					                $html .= ' <div class="clear"></div> ';
				                $html .= ' </li> ';
							// CAMPOS

						$fields_ini++;
					}

               	}
          	}

          	// CAMPOS FIM
	          	if(isset($campos['fim'][$kabas])){
	            	$html .= '<div class="conteudo_fim">'.$campos['fim'][$kabas].'</div>';
	          	}
          	// CAMPOS FIM

			// CAMPOS GRAVAR
	          	$campos_extra = '';
	          	foreach ($campos as $k1 => $v1) {
		          	$campos_extra .= isset($v1[$kabas]) ? $v1[$kabas] : '';
	          	}
            	$array_fim = entre_array(' name="', '"', $campos_extra);
            	foreach ($array_fim as $k1 => $v1) {
            		$camposss[] = $v1;
            	}
			// CAMPOS GRAVAR

           	// ULTIMA FIELDS
				$html .=  ' </fieldset> ';
           	// ULTIMA FIELDS

          	// CAMPOS FIMM
	          	if(isset($campos['fimm'][$kabas])){
	            	$html .= '<div class="conteudo_fim">'.$campos['fimm'][$kabas].'</div>';
	          	}
          	// CAMPOS FIM

            // OUTROS ADMINS
            if(LUGAR != 'admin'){
            	$html .=  '<input type="hidden" name="'.table_admin().'" value="'.$_SESSION['x_'.LUGAR]->id.'">';
            }

			$return = array();
            $return['html'] = $html;

            $arr['camposss'] = isset($arr['camposss']) ? $arr['camposss'] : '-|-';
            $return['camposss'] = $arr['camposss'].implode('-|-', $camposss).'-|-';

        	return($return);
        }




	    // Dialog Menu Acoes
		public function dialog_acoes(){
	        $menu_admin = (isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id==1 AND $this->modulos->id==1) ? 1 : 0;

			$return =  '<div class="aba_title">
	                        <a onclick="dialog_mini('.$this->modulos->id.')" class="faa-minus"></a>
	                        <a onclick="dialog_max('.$this->modulos->id.')" class="faa-plus"></a>
	                        <a onclick="dialog_fechar('.$this->modulos->id.', '.A.$this->ids[0].A.')" class="faa-times"></a>
	                    </div>

	                    <div class="acoes"> ';
	                    	if($this->modulos->modulo != 'pedidos'){
	                    		if(preg_match('(novo)', $this->modulos->informacoes) OR preg_match('(edit)', $this->modulos->informacoes) OR $menu_admin){
									$return .=  '<button type="button"class="botao salvar c_verde" onclick="dialog_button_form(this, 1)" '.iff($_GET['acao']=='novo', 'disabled').'> <i class="mr5 faa-check"></i> <span>Salvar</span> </button> ';
	                    		}
								if( (preg_match('(novo)', $this->modulos->informacoes) OR (preg_match('(novo)', $this->modulos->informacoes) AND preg_match('(edit)', $this->modulos->informacoes)))  OR $menu_admin ){
									$return .=  '<button type="button"class="botao salvar_novo" onclick="dialog_button_form(this, 2)" '.iff(($this->modulos->tipo==1 OR $this->modulos->modulo=='textos' OR $this->modulos->modulo=='configs'), 'disabled').'> <i class="mr5 faa-check-circle c_verde"></i> Salvar e Criar Novo </button> ';
								}
								if(preg_match('(novo)', $this->modulos->informacoes) OR preg_match('(edit)', $this->modulos->informacoes) OR $menu_admin){
									$return .=  '<button type="button"class="botao edit" onclick="dialog_button_form(this, 3)"> <i class="mr5 faa-check-circle-o c_verde"></i> Salvar e Fechar </button> ';
								}
	                        	if( (preg_match('(excluir)', $this->modulos->informacoes) AND preg_match('(edit)', $this->modulos->informacoes))  OR $menu_admin ){
									$return .=  '<button type="button"class="botao delete" onclick="if(confirm('.A.'Deseja realmente deletar deste item?'.A.'))deletar_item('.$this->modulos->id.', '.$this->ids[0].')" '.iff($_GET['acao']=='novo', 'disabled').' '.iff(($this->modulos->tipo==1 OR $this->modulos->modulo=='textos' OR $this->modulos->modulo=='configs'), 'disabled').'> <i class="mr5 faa-minus-circle c_vermelho"></i> Apagar </button> ';
	                        	}
								$return .=  '<button type="button"class="botao dn"> Mais Ações <i class="ml3 faa-caret-down c_666"></i> </button> ';
                        		$return .=  '<span class="sep"></span> ';
								$return .=  '<button type="button"class="botao c_vermelho" onclick="dialog_fechar('.$this->modulos->id.', '.A.$this->ids[0].A.')"> <i class="mr5 faa-times-circle"></i> <span>Fechar</span> </button> ';
                        		$return .=  '<div class="clear"></div> ';
							}
			$return .=  '</div> ';

			return($return);
		}


	}

?>