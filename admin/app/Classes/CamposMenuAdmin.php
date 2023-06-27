<?

	class CamposMenuAdmin {

		public $modulos;
		public $ids;

		// Conteudo
		public function conteudo($table){
        	$return = '';

            if($this->ids[0]){
                $linhas = '';
                $mysql = new Mysql();
                $mysql->prepare = array($this->ids[0]);
                $mysql->filtro = " WHERE `id` = ? ";
                $linhas = $mysql->read_unico($table);
            }

            if( !(isset($linhas->colunas) and $linhas->colunas) ){
                $linhas = (object)array();
                $array = array( 1=> array('check'=>1, 'nome'=>'Status', 'value'=>'status'), 2=> array('check'=>1, 'nome'=>'Nome', 'value'=>'nome'), 3=> array('check'=>0, 'nome'=>'Mais Fotos', 'value'=>'mais_fotos'), 4=> array('check'=>0, 'nome'=>'Comentários', 'value'=>'mais_comentarios'), 5=> array('check'=>1, 'nome'=>'Ordem', 'value'=>'ordem'), 6=> array('check'=>1, 'nome'=>'Foto', 'value'=>'foto'), 7=> array('check'=>1, 'nome'=>'NOME DA CATEGORIA', 'value'=>'relacionamento_categoria_automatico'), 8=> array('check'=>0, 'nome'=>'', 'value'=>'') );
                $linhas->colunas = base64_encode(serialize($array));
            }
            if( !(isset($linhas->abas) and $linhas->abas) ){
            	$array = array( 0=> array('nome'=>'', 'check'=>1, 'disabled'=>0) );
                $linhas->abas    = base64_encode(serialize($array));
            }
            if( !(isset($linhas->campos) and $linhas->campos) ){
				$array = array( 0=> array( 1=> array( 'check'=>1, 'nome'=>'Nome', 'input'=> array('nome'=>'nome', 'tags'=>'required') ), 2=> array( 'check'=>1, 'nome'=>'Meta (Titulo do Site)', 'input'=> array('nome'=>'nome_meta') ), 3=> array( 'check'=>1, 'nome'=>'Foto', 'input'=> array('nome'=>'foto'), 'tipo'=>'file' ), 4=> array( 'check'=>0, 'nome'=>'', 'input'=> array('nome'=>'') ), 5=> array( 'check'=>0, 'nome'=>'', 'input'=> array('nome'=>'') ), 'txt'=> array( 'check'=>1, 'nome'=>'Descrição curta', 'fields'=>1, 'input'=> array('nome'=>'txt', 'opcoes'=>0), 'tipo'=>'textarea' ), 'txt_meta'=> array( 'check'=>1, 'nome'=>'Meta (Descrição)', 'fields'=>1, 'input'=> array('nome'=>'txt_meta', 'opcoes'=>0), 'tipo'=>'textarea' ), 'editor'=> array( 'check'=>1, 'nome'=>'Descrição completa', 'fields'=>1, 'input'=> array('nome'=>'txt_editor'), 'tipo'=>'editor' ) ) );
                $linhas->campos    = base64_encode(serialize($array));
            }

            $linhas_colunas = unserialize(base64_decode($linhas->colunas));
            $linhas_abas = unserialize(base64_decode($linhas->abas));
            $linhas_campos = unserialize(base64_decode($linhas->campos));


            $return .= '<style> ';
				$return .= '.calc375 { width: -webkit-calc(100% - 375px) !important; width: -moz-calc(100% - 375px) !important; width: calc(100% - 375px) !important; } ';
				$return .= '.calc481 { width: -webkit-calc(100% - 481px) !important; width: -moz-calc(100% - 481px) !important; width: calc(100% - 481px) !important; } ';
				$return .= '.ml370 { margin-left: 370px !important; } ';
				$return .= '.ml475 { margin-left: 475px !important; } ';
			$return .= '</style> ';

            $return .= '<div class="dialog Arial"> ';
            $return .=     $this->dialog_acoes();

                $form = "form_".rand();
                $return .= '<div class="tabs menu_admin"> ';
                $return .= '   <form class="'.$form.'" action="" method="post" enctype="multipart/form-data"> ';


                    // ABAS
                        $return .= '   <ul class="h31 sortable nav"> ';
                        $return .= '       <li tabs="tabs_0" class="ativo"> <a onclick="tabs(this)"> Data Table </a> </li> ';
                                               	foreach ($linhas_abas as $key => $value) {
                        $return .=             		$this->menu_admin_abas($key, $value);
                                                }
                        $return .= '   </ul> ';
                        $return .= '   <div class="clear"></div> ';
                    // ABAS

    
                    $return .= '       <ul class="campos_menu_admin tabs"> ';


                    // COLUNAS
                        $return .= '       <li tabs="tabs_0" tipo="colunas" class="ativo">
                                                '.$this->menu_admin_colunas_infos_principais($linhas, $value).'
                                                <div class="h05 clear"></div>
                                                <fieldset>
                                                    <legend> Colunas </legend>
                                                    <ul class="sortable itens">';
                                                        foreach ($linhas_colunas as $key => $value) {
                        $return .=                         	$this->menu_admin_colunas($key, $value);
                                                        }
                        $return .= '				<li dir="txt"></li>
                                                    </ul>
                                                    <nav class="nav4">
                                                        <a onclick="menu_admin_mais_menos(1, this)" class="link c_azul"> mais linhas </a> &nbsp &nbsp
                                                        <a onclick="menu_admin_mais_menos(0, this)" class="link c_azul"> menos linhas </a>
                                                    </nav>
                                                    <div class="h05 clear"></div>
                                                </fieldset>
                                            </li> ';
                    // COLUNAS


                    // CAMPOS
					                        foreach ($linhas_abas as $key => $value){
					                            $return .= $this->menu_admin_campos($key, $linhas_campos);
					                        }
                    // CAMPOS


                $return .= '       		</ul>
                                        <input type="hidden" name="acao_button" value="3">
                                        <input type="reset" name="reset_button" class="dni">
                                        <input type="submit" class="dni">
                                    </form>
                                    <div class="clear"></div>
                                    <script> required_invalid('.A.'.tabs.menu_admin form.'.$form.A.') </script>
                                    <script> gravar_item('.$this->modulos->id.', '.$this->ids[0].', '.A.'.tabs.menu_admin form.'.$form.A.') </script>

                                    <div class="dni">
                                        <div class="colunas_novo"> '.select2_temp($this->menu_admin_colunas('-key-', array())).' </div>
                                        <div class="abas_novo"> '.select2_temp($this->menu_admin_abas('-key-', array())).' </div>
                                        <div class="colunas_campos_novo"> '.select2_temp($this->menu_admin_campos('-key-', $linhas_campos)).' </div>
                                        <div class="camposs_novo"> '.select2_temp($this->menu_admin_campos1('-kabas-', '-key-', array())).' </div>
                                    </div>
                                    <div class="h30 clear"></div>';


            $return .= '</div> ';

			return $return;
		}





	    // Dialog Menu Acoes
		public function dialog_acoes(){
	        $menu_admin = (isset($_SESSION['x_admin']->id) and $_SESSION['x_admin']->id==1 and $this->modulos->id==1) ? 1 : 0;

			$return =  '<div class="aba_title">
	                        <a onclick="dialog_mini('.$this->modulos->id.')" class="faa-minus"></a>
	                        <a onclick="dialog_max('.$this->modulos->id.')" class="faa-plus"></a>
	                        <a onclick="dialog_fechar('.$this->modulos->id.', '.A.$this->ids[0].A.')" class="faa-times"></a>
	                    </div>

	                    <div class="acoes"> ';
	                    	if($this->modulos->modulo != 'pedidos'){
	                    		if(preg_match('(novo)', $this->modulos->informacoes) or preg_match('(edit)', $this->modulos->informacoes) or $menu_admin){
									$return .=  '<button type="button"class="botao salvar c_verde" onclick="dialog_button_form(this, 1)" '.iff($_GET['acao']=='novo', 'disabled').'> <i class="mr5 faa-check"></i> <span>Salvar</span> </button> ';
	                    		}
								if( (preg_match('(novo)', $this->modulos->informacoes) or (preg_match('(novo)', $this->modulos->informacoes) and preg_match('(edit)', $this->modulos->informacoes)))  or $menu_admin ){
									$return .=  '<button type="button"class="botao salvar_novo" onclick="dialog_button_form(this, 2)" '.iff(($this->modulos->tipo==1), 'disabled').'> <i class="mr5 faa-check-circle c_verde"></i> Salvar e Criar Novo </button> ';
								}
								if(preg_match('(novo)', $this->modulos->informacoes) or preg_match('(edit)', $this->modulos->informacoes) or $menu_admin){
									$return .=  '<button type="button"class="botao edit" onclick="dialog_button_form(this, 3)"> <i class="mr5 faa-check-circle-o c_verde"></i> Salvar e Fechar </button> ';
								}
	                        	if( (preg_match('(excluir)', $this->modulos->informacoes) and preg_match('(edit)', $this->modulos->informacoes))  or $menu_admin ){
									$return .=  '<button type="button"class="botao delete" onclick="if(confirm('.A.'Deseja realmente deletar deste item?'.A.'))deletar_item('.$this->modulos->id.', '.$this->ids[0].')" '.iff($_GET['acao']=='novo', 'disabled').' '.iff(($this->modulos->tipo==1), 'disabled').'> <i class="mr5 faa-minus-circle c_vermelho"></i> Apagar </button> ';
	                        	}
								$return .=  '<button type="button"class="botao dn"> Mais Ações <i class="ml3 faa-caret-down c_666"></i> </button> ';
                        		$return .=  '<span class="sep"></span> ';
								$return .=  '<button type="button"class="botao c_vermelho" onclick="dialog_fechar('.$this->modulos->id.', '.A.$this->ids[0].A.')"> <i class="mr5 faa-times-circle"></i> <span>Fechar</span> </button> ';
                        		$return .=  '<div class="clear"></div> ';
							}
			$return .=  '</div> ';

			return($return);
		}





		// Abas
	    public function menu_admin_abas($key, $value){
	        $return = ' <li tabs="tabs_abas_'.$key.'" dir="'.$key.'" class="posr" >
	                        <span class="posa t0 l0 mt3 ml3 fz8"> ('.$key.') </span>
	                        <a onclick="tabs(this)" class="abas_nome w120 h30 limit">'.value($value, 'nome').'</a>
	                        <div class="menu_admin_abas br5">
	                            <a onclick="menu_admin_abas('.A.'novo'.A.', this)" class="novo"  title="Novo"> <i class="faa-file-o"></i> </a>
	                            <a onclick="menu_admin_abas('.A.'check'.A.', this)" class="check" title="Ativo">
	                            	<i class="faa-check-square-o ativo '.iff((isset($value['check']) and $value['check']), '', 'dn').'"></i>
	                            	<i class="faa-square-o '.iff((isset($value['check']) and $value['check']), 'dn', '').'"> </i>
	                            </a>
	                            <a onclick="menu_admin_abas('.A.'disable'.A.', this)" class="disable" title="Disable">
	                            	<i class="faa-dot-circle-o ativo '.iff((isset($value['disabled']) and $value['disabled']), '', 'dn').'"> </i>
	                            	<i class="faa-circle-o '.iff((isset($value['disabled']) and $value['disabled']), 'dn', '').'"> </i>
	                            </a>
	                            <a onclick="menu_admin_abas('.A.'edit'.A.', this)" class="edit" title="Editar"> <i class="faa-edit (alias)"></i> </a>
	                            <a onclick="menu_admin_abas('.A.'delete'.A.', this)" class="delete"  title="Deletar"> <i class="faa-times"></i> </a>
	                            <div class="menu_admin_abas_nome dn posa z8 l0 mt5">
	                                <input name="abas['.$key.'][nome]" type="text" class="design" onkeyup="menu_admin_abas_nome(this, event)" value="'.value($value, 'nome').'" >
	                                <input name="abas['.$key.'][check]" type="hidden" class="check" value="'.value($value, 'check').'" >
	                                <input name="abas['.$key.'][disabled]" type="hidden" class="disable" value="'.value($value, 'disabled').'" >
	                            </div>
	                        </div>
	                    </li> ';
	        return($return);
	    }




        // Colunas Infos Principais
        public function menu_admin_colunas_infos_principais($linhas, $value){
            $return = ' <fieldset>
                            <legend> Infos </legend>
                            <ul class="itens">
                                <li>
                                    <div class="w200 fll finput finput_nome">
                                        <label class="p0">&nbsp;</label>
                                        <div class="input"> <input name="nome" type="text" class="design" value="'.value($linhas, 'nome').'" placeholder="Nome do módulo" required> </div>
                                    </div>
                                    <div class="w200 fll ml10 finput">
                                        <label class="p0">&nbsp;</label>
                                        <div class="input"> <input name="modulo" type="text" class="design" value="'.value($linhas, 'modulo').'" placeholder="Nome da Tabela do módulo" required> </div>
                                    </div>
                                    <div class="w200 fll ml10 finput">
                                        <label class="p0">&nbsp;</label>
                                        <div class="input"> <input name="gets" type="text" class="design" value="'.value($linhas, 'gets').'" placeholder="Gets do módulo"> </div>
                                    </div>
                                    <div class="w200 fll ml10 finput">
                                        <label class="p0">&nbsp;</label>
                                        <div class="input"> <input name="foto" type="text" class="design" value="'.value($linhas, 'foto').'" placeholder="Icon"> </div>
                                    </div>
                                    <div class="w350 fll ml10 finput">
                                        <label class="p0">&nbsp;</label>
                                        <div class="input"> <input name="url" type="text" class="design" value="'.value($linhas, 'url').'" placeholder="Url do módulo"> </div>
                                    </div>
                                    <div class="w400 fll ml10 finput">
                                        <label class="p0">&nbsp;</label>
                                        <div class="input"> <textarea name="info" class="posa w400 h100 design o-hx" placeholder="Informação do Modulo Sobre os campos">'.value($linhas, 'info').'</textarea> </div>
                                    </div>
                                    <div class="h05 clear"></div>
                                    <div class="fll finput">
                                        <div class="input">
                                            <select name="categorias" class="design" pop="menu_admin1_cate" required>
                                            	<option value=""> - - - </option>
                                                '.option('menu_admin1_cate', $linhas, 'categorias', 0).'
                                            </select>
                                        </div>
                                    </div>
                                    <div class="fll ml20 finput">
                                    	<input type="reset" class="dni">
                                        <div class="dbi mt7">
                                            <label> <input name="tipo" type="radio" value="0" class="design" 	'.iff((isset($linhas->tipo) and $linhas->tipo==0), 'checked').iff(!isset($linhas->tipo), 'checked').'> Modulo </label> &nbsp
                                            <label> <input name="tipo" type="radio" value="1" class="design" 	'.iff((isset($linhas->tipo) and $linhas->tipo==1), 'checked').'> Modulo Único </label> &nbsp
                                            <label> <input name="tipo" type="radio" value="2" class="design" 	'.iff((isset($linhas->tipo) and $linhas->tipo==2), 'checked').'> *Modulo Boxxs </label> &nbsp
                                        </div>
                                    </div>
                                    <div class="h28 fll ml20 finput" style="border-left: 1px solid #aaa">&nbsp;</div>
                                    <div class="fll ml20 finput">
                                        <div class="dbi mt7">
                                            <input name="informacoes[]" type="hidden" value="acoes">
                                            <label> <input name="informacoes[]" type="checkbox" value="novo" class="design"     '.iff((isset($linhas->informacoes) and preg_match('(-novo-)', $linhas->informacoes)), 'checked').iff(!isset($linhas->informacoes), 'checked').'> Novo </label> &nbsp
                                            <label> <input name="informacoes[]" type="checkbox" value="edit" class="design"     '.iff((isset($linhas->informacoes) and preg_match('(-edit-)', $linhas->informacoes)), 'checked').iff(!isset($linhas->informacoes), 'checked').'> Edit </label> &nbsp
                                            <label> <input name="informacoes[]" type="checkbox" value="excluir" class="design"  '.iff((isset($linhas->informacoes) and preg_match('(-excluir-)', $linhas->informacoes)), 'checked').iff(!isset($linhas->informacoes), 'checked').'> Excluir </label>
                                            <label> <input name="informacoes[]" type="checkbox" value="clonar" class="design"   '.iff((isset($linhas->informacoes) and preg_match('(-clonar-)', $linhas->informacoes)), 'checked').iff(!isset($linhas->informacoes), 'checked').'> Clonar </label>
                                            <label> <input name="informacoes[]" type="checkbox" value="ver_item" class="design"     '.iff((isset($linhas->informacoes) and preg_match('(-ver_item-)', $linhas->informacoes)), 'checked').'> Ver Item </label> &nbsp
                                        </div>
                                    </div>
                                    <div class="fll ml30 finput">
                                        <div class="dbi mt7">
                                            <label> <input name="informacoes[]" type="checkbox" value="categorias" class="design"       '.iff((isset($linhas->informacoes) and preg_match('(-categorias-)', $linhas->informacoes)), 'checked').'> Categorias </label> &nbsp
                                            <label> <input name="informacoes[]" type="checkbox" value="vcategorias" class="design"      '.iff((isset($linhas->informacoes) and preg_match('(-vcategorias-)', $linhas->informacoes)), 'checked').'> VCategorias </label> &nbsp
                                            <label> <input name="informacoes[]" type="checkbox" value="subcategorias" class="design"    '.iff((isset($linhas->informacoes) and preg_match('(-subcategorias-)', $linhas->informacoes)), 'checked').'> Subcategorias (1_cate) </label> &nbsp &nbsp &nbsp &nbsp &nbsp &nbsp
                                        </div>
                                    </div>
                                    <div class="h05 clear"></div>
                                    <div class="fll finput">
                                        <div class="dbi mt7">
                                            <label> <input name="informacoes[]" type="checkbox" value="star" class="design"         '.iff((isset($linhas->informacoes) and preg_match('(-star-)', $linhas->informacoes)), 'checked').'> Star </label> &nbsp
                                            <label> <input name="informacoes[]" type="checkbox" value="lanc" class="design"         '.iff((isset($linhas->informacoes) and preg_match('(-lanc-)', $linhas->informacoes)), 'checked').'> Lanc. </label> &nbsp
                                            <label> <input name="informacoes[]" type="checkbox" value="promocao" class="design"     '.iff((isset($linhas->informacoes) and preg_match('(-promocao-)', $linhas->informacoes)), 'checked').'> Promoção </label> &nbsp
                                            <label> <input name="informacoes[]" type="checkbox" value="mapa" class="design"         '.iff((isset($linhas->informacoes) and preg_match('(- mapa-)', $linhas->informacoes)), 'checked').'> Mapa </label>
                                        </div>
                                    </div>
                                    <div class="w130 fll finput ml5">
                                        <div class="input">
                                            <select name="rel" class="design" pop="menu_admin">
                                                <option value=""> - - - </option>
                                                '.option('menu_admin', $linhas, 'rel', 0, '', 0).'
                                            </select>
                                        </div>
                                    </div>
                                    <div class="w130 fll ml5 finput">
                                        <label class="p0"> &nbsp; </label>
                                        <div class="input"> <input name="admins" type="text" class="design w100p" value="'.value($linhas, 'admins').'" placeholder="Admins" > </div>
                                    </div>
                                    <div class="w130 fll ml5 finput">
                                        <label class="p0"> &nbsp; </label>
                                        <div class="input"> <input name="colunas_extra" type="text" class="design w100p" value="'.value($linhas, 'colunas_extra').'" placeholder="Colunas Extra" > </div>
                                    </div>
                                    <div class="w190 fll ml5 finput">
                                        <label class="pl0 pr5"> Ordem: </label>
                                        <div class="input"> <input name="ordem1" type="text" class="design w100p" value="'.value($linhas, 'ordem1', "").'" placeholder=" [ 0, '.A.'desc'.A.' ], [ 1, '.A.'desc'.A.' ] " > </div>
                                    </div>
                                    <div class="w300 fll ml10 finput">
                                        <label class="pl0 pr5"> Filtro: </label>
                                        <div class="input"> <input name="filtro" type="text" class="design w100p" value="'.value($linhas, 'filtro').'" > </div>
                                    </div>
                                </li>
                            </ul>
                            <div class="h10 clear"></div>
                        </fieldset> ';
            return($return);
        }





    	// Colunas
        public function menu_admin_colunas($key, $value){
            $return = ' <li dir="'.$key.'">
                            <em class="mr10"></em>
                            <div class="w15 fll finput finput_linhas_check">
                                <div class="input dbi mt7"> <input name="colunas['.$key.'][check]" id="colunas_ckeck_'.$key.'" type="checkbox" value="1" class="design" '.iff((isset($value['check']) and $value['check']), 'checked').' > </div>
                            </div>
                            <div class="dib fll pt6">
                                <label class="w32 db pl5 limit" for="colunas_ckeck_'.$key.'"> ('.$key.') </label>
                            </div>
                            <div class="wf3 fll finput finput_linhas_nome" title="nome">
                                <label class="p0">&nbsp;</label>
                                <div class="input"> <input name="colunas['.$key.'][nome]" type="text" class="design" value="'.value($value, 'nome').'" > </div>
                            </div>
                            <div class="wf3 fll finput finput_linhas_value" title="Value">
                                <label class="p0 pl10"></label>
                                <div class="input"> <input name="colunas['.$key.'][value]" type="text" class="design" value="'.value($value, 'value').'" > </div>
                            </div>
                            <div class="clear"></div>
                        </li> ';
            return($return);
        }







        // Campos
        public function menu_admin_campos($key, $linhas_campos){
			$return = '	<li tabs="tabs_abas_'.$key.'" dir="'.$key.'"  tipo="camposs">
                            <fieldset>
                                <legend> Colunas </legend>
                                <div class="pl10">
                                    <a onclick="menu_admin_mais_menos(1, this)" class="link c_azul"> mais linhas </a> &nbsp &nbsp
                                    <a onclick="menu_admin_mais_menos(0, this)" class="link c_azul"> menos linhas </a>
                                </div>
                                <ul class="sortable itens menu_admin"> ';
                                	$key_temp = $key!='-key-' ? $key : 0;
                                    if(isset($linhas_campos[$key_temp])){
                                        foreach ($linhas_campos[$key_temp] as $key1 => $value) {
    		$return .=                  	$this->menu_admin_campos1($key, $key1, $value);
                                        }
                                    }
    		$return .= '		</ul>
                                <nav class="nav4">
                                    <a onclick="menu_admin_mais_menos(1, this)" class="link c_azul"> mais campos </a> &nbsp &nbsp
                                    <a onclick="menu_admin_mais_menos(0, this)" class="link c_azul"> menos campos </a>
                                </nav>
                                <div class="h05 clear"></div>
                            </fieldset>
                        </li> ';
            return $return;

        }







    	// Campos1
        public function menu_admin_campos1($kabas, $key, $value){
            $key_n = ($key!='txt' and $key!='txt_meta' and $key!='editor') ? $key : ( $key=='txt' ? 'TXT' : ($key=='txt_meta' ? 'TM' : 'ED') );

            $return  = '<li dir="'.$key.'" class="menu_admin_campos_'.$kabas.'_'.$key.'">
                            <em class="ml5 mr10"></em>
                            <a onclick="menu_admin_outros_campos(this)" class="seta dni"> <i class="faa-chevron-down"></i> <i class="db mt-9 faa-chevron-down"></i> </a>

                            <div class="w15 fll finput finput_check">
                                <div class="input dbi mt7">
                                    <input name="campos['.$kabas.']['.$key.'][check]" id="campos_ckeck_'.$kabas.'_'.$key_n.'" type="checkbox" value="1" class="design" '.iff((isset($value['check']) and $value['check']), 'checked').'>
                                </div>
                            </div>
                            <div class="dib fll pt6">
                                <label class="w40 db pl5 limit" for="campos_ckeck_'.$kabas.'_'.$key_n.'"> ('.$key_n.') </label>
                            </div>
                            <div class="w85 fll finput finput_temp">
                                <div class="input">
                                    <select name="campos['.$kabas.']['.$key.'][tipo]" class="design menu_admin_select_tipo_'.$kabas.'_'.$key.'">
                                        <option value="text"			'.iff((isset($value['tipo']) and $value['tipo'] == 'text'), 			'selected').'>Text</option>
                                        <option value="categorias" 		'.iff((isset($value['tipo']) and $value['tipo'] == 'categorias'), 		'selected').'>Categorias</option>
                                        <option value="subcategorias" 	'.iff((isset($value['tipo']) and $value['tipo'] == 'subcategorias'), 	'selected').'>Subcategorias</option>
                                        <option value="preco" 			'.iff((isset($value['tipo']) and $value['tipo'] == 'preco'), 			'selected').'>Preço</option>
                                        <option value="estados" 		'.iff((isset($value['tipo']) and $value['tipo'] == 'estados'), 			'selected').'>Estados</option>
                                        <option value="cidades"         '.iff((isset($value['tipo']) and $value['tipo'] == 'cidades'),          'selected').'>Cidades</option>
                                        <option value="bairros"         '.iff((isset($value['tipo']) and $value['tipo'] == 'bairros'),          'selected').'>Bairros*</option>
                                        <option value="password" 		'.iff((isset($value['tipo']) and $value['tipo'] == 'password'), 		'selected').'>Password</option>
                                        <option value="email" 			'.iff((isset($value['tipo']) and $value['tipo'] == 'email'), 			'selected').'>Email</option>
                                        <option value="date" 			'.iff((isset($value['tipo']) and $value['tipo'] == 'date'), 			'selected').'>Data</option>
                                        <option value="datetime-local" 	'.iff((isset($value['tipo']) and $value['tipo'] == 'datetime-local'), 	'selected').'>Data e Hora</option>
                                        <option value="color" 			'.iff((isset($value['tipo']) and $value['tipo'] == 'color'), 			'selected').'>Color</option>
                                        <option value="number" 			'.iff((isset($value['tipo']) and $value['tipo'] == 'number'), 			'selected').'>Número</option>
                                        <option value="range" 			'.iff((isset($value['tipo']) and $value['tipo'] == 'range'), 			'selected').'>Range</option>
                                        <option value="url" 			'.iff((isset($value['tipo']) and $value['tipo'] == 'url'), 				'selected').'>Url</option>
                                        <option value="tel" 			'.iff((isset($value['tipo']) and $value['tipo'] == 'tel'), 				'selected').'>Telefone</option>
                                        <option value="file" 			'.iff((isset($value['tipo']) and $value['tipo'] == 'file'), 			'selected').'>File</option>
                                        <option value="checkbox" 		'.iff((isset($value['tipo']) and $value['tipo'] == 'checkbox'),			'selected').'>Checkbox</option>
                                        <option value="radio" 			'.iff((isset($value['tipo']) and $value['tipo'] == 'radio'), 			'selected').'>Radio</option>
                                        <option value="select" 			'.iff((isset($value['tipo']) and $value['tipo'] == 'select'), 			'selected').'>Select</option>
                                        <option value="textarea" 		'.iff((isset($value['tipo']) and $value['tipo'] == 'textarea'), 		'selected').'>Textarea</option>
                                        <option value="button" 			'.iff((isset($value['tipo']) and $value['tipo'] == 'button'), 			'selected').'>Button</option>
                                        <option value="editor" 			'.iff((isset($value['tipo']) and $value['tipo'] == 'editor'), 			'selected').'>Editor</option>
                                        <option value="file_editor" 	'.iff((isset($value['tipo']) and $value['tipo'] == 'file_editor'), 		'selected').'>File Editor</option>
                                        <option value="hidden"			'.iff((isset($value['tipo']) and $value['tipo'] == 'hidden'), 			'selected').'>Hidden</option>
                                        <option value="info"            '.iff((isset($value['tipo']) and $value['tipo'] == 'info'),             'selected').'>Info</option>
                                        <option value="boxx"            '.iff((isset($value['tipo']) and $value['tipo'] == 'boxx'),             'selected').'>Boxx</option>
                                        <option value="mais_campos"     '.iff((isset($value['tipo']) and $value['tipo'] == 'mais_campos'),      'selected').'>Mais campos</option>
                                    </select>
                                    <script>
                                        $(document).ready(function(){
                                            $(".menu_admin_select_tipo_'.$kabas.'_'.$key.'").on("select2:select", function (e) {
                                                menu_admin_select_temp('.A.$kabas.'_'.$key.A.', e);
                                            });
                                        });
                                    </script>
                                </div>
                            </div>
                            <div class="w95 fll ml7 finput finput_fields">
                                <div class="input">
                                    <div class="input"> <input name="campos['.$kabas.']['.$key.'][fields]" type="text" class="design" placeholder="Fields" value='.A.value($value, 'fields', '').A.'> </div>
                                </div>
                            </div>
                            <div class="w80 fll ml7 finput finput_resp">
                                <div class="input">
                                    <select name="campos['.$kabas.']['.$key.'][resp]" class="design">
                                        <option value="wr1" 	'.iff((isset($value['resp']) and $value['resp'] == 'wr1'), 		'selected').'>WR1</option>
                                        <option value="wr15" 	'.iff((isset($value['resp']) and $value['resp'] == 'wr15'), 	'selected').'>WR1,5</option>
                                        <option value="wr2" 	'.iff((isset($value['resp']) and $value['resp'] == 'wr2'), 		'selected').'>WR2</option>
                                        <option value="wr25" 	'.iff((isset($value['resp']) and $value['resp'] == 'wr25'), 	'selected').'>WR2,5</option>
                                        <option value="wr3" 	'.iff((isset($value['resp']) and $value['resp'] == 'wr3'), 		'selected').'>WR3</option>
                                        <option value="wr35" 	'.iff((isset($value['resp']) and $value['resp'] == 'wr35'), 	'selected').'>WR3,5</option>
                                        <option value="wr4" 	'.iff((isset($value['resp']) and $value['resp'] == 'wr4'), 		'selected').'>WR4</option>
                                        <option value="wr45" 	'.iff((isset($value['resp']) and $value['resp'] == 'wr45'), 	'selected').'>WR4,5</option>
                                        <option value="wr5" 	'.iff((isset($value['resp']) and $value['resp'] == 'wr5'), 		'selected').'>WR5</option>
                                        <option value="wr55" 	'.iff((isset($value['resp']) and $value['resp'] == 'wr55'), 	'selected').'>WR5,5</option>
                                        <option value="wr6" 	'.iff((isset($value['resp']) and $value['resp'] == 'wr6'), 		'selected').'>WR6</option>
                                        <option value="wr65" 	'.iff((isset($value['resp']) and $value['resp'] == 'wr65'), 	'selected').'>WR6,5</option>
                                        <option value="wr7" 	'.iff((isset($value['resp']) and $value['resp'] == 'wr7'), 		'selected').'>WR7</option>
                                        <option value="wr75" 	'.iff((isset($value['resp']) and $value['resp'] == 'wr75'), 	'selected').'>WR7,5</option>
                                        <option value="wr8" 	'.iff((isset($value['resp']) and $value['resp'] == 'wr8'), 		'selected').'>WR8</option>
                                        <option value="wr85" 	'.iff((isset($value['resp']) and $value['resp'] == 'wr85'), 	'selected').'>WR8,5</option>
                                        <option value="wr9" 	'.iff((isset($value['resp']) and $value['resp'] == 'wr9'), 		'selected').'>WR9</option>
                                        <option value="wr95" 	'.iff((isset($value['resp']) and $value['resp'] == 'wr95'), 	'selected').'>WR9,5</option>
                                        <option value="wr10" 	'.iff((isset($value['resp']) and $value['resp'] == 'wr10'), 	'selected').'>WR10</option>
                                        <option value="wr105" 	'.iff((isset($value['resp']) and $value['resp'] == 'wr105'), 	'selected').'>WR10,5</option>
                                        <option value="wr11" 	'.iff((isset($value['resp']) and $value['resp'] == 'wr11'), 	'selected').'>WR11</option>
                                        <option value="wr115" 	'.iff((isset($value['resp']) and $value['resp'] == 'wr115'), 	'selected').'>WR11,5</option>
                                        <option value="wr12" 	'.iff((isset($value['resp']) and $value['resp'] == 'wr12'), 	'selected'). iff(!isset($value['resp']), 	'selected').'>WR12</option>
                                    </select>
                                </div>
                            </div>
                            <div class="calc375 ml370">
                                <div class="wf15 finput finput_nome" title="Nome">
                                    <label class="p0">&nbsp;</label>
                                    <div class="input"> <input name="campos['.$kabas.']['.$key.'][nome]" type="text" class="design" value='.A.value($value, 'nome').A.'> </div>
                                </div>
                                <div class="wf15 pl10 fll finput finput_input_nome" title="Name">
                                    <label class="p0">&nbsp;</label>
                                    <div class="input"> <input name="campos['.$kabas.']['.$key.'][input][nome]" type="text" class="design" value='.A.value1($value, 'input', 'nome').A.'> </div>
                                </div>
                                <div class="wf25 pl10 fll finput finput_input_tags" title="Tags">
                                    <label class="p0">&nbsp;</label>
                                    <div class="input"> <input name="campos['.$kabas.']['.$key.'][input][tags]" type="text" class="design autocomplete" value='.A.value1($value, 'input', 'tags').A.'> </div>
                                </div>
                                <div class="wf25 pl10 fll finput finput_input_opcoes" title="opçoes ou Onclick para Button">
                                    <label class="p0">&nbsp;</label>
                                    <div class="input"> <input name="campos['.$kabas.']['.$key.'][input][opcoes]" type="text" class="design" value="'.value1($value, 'input', 'opcoes').'"> </div>
                                </div>
                                <div class="wf25 pl10 fll finput finput_input_extra" title="Extra">
                                    <label class="p0">&nbsp;</label>
                                    <div class="input"> <input name="campos['.$kabas.']['.$key.'][input][extra]" type="text" class="design" placeholder="Extra" value='.A.value1($value, 'input', 'extra').A.'> </div>
                                </div>
                                <div class="wf15 pl10 fll finput finput_input_gerenciar" title="Gerenciar">
	                                <div class="input">
	                                    <select name="campos['.$kabas.']['.$key.'][gerenciar]" class="design">
	                                        <option value="0" '.iff((isset($value['gerenciar']) and $value['gerenciar']==0), 'selected').'> - - - </option>
	                                        <option value="1" '.iff((isset($value['gerenciar']) and $value['gerenciar']==1), 'selected').'>Novo</option>
	                                        <option value="2" '.iff((isset($value['gerenciar']) and $value['gerenciar']==2), 'selected').'>Gerenciar</option>
	                                        <option value="3" '.iff((isset($value['gerenciar']) and $value['gerenciar']==3), 'selected').'>Novo e Gerenciar</option>
	                                    </select>
	                                </div>
                                </div>
                                <div class="clear"></div>
                            </div>

                            <div class="dn outros_campos">
                                <a onclick="menu_admin_deletar_campos(this)" class="seta mt37 fz14 c_vermelho"> <i class="faa-times"></i> </a>
                                <div class="h10 clear"></div>
                                <div>
                                	<!-- Campos dn -->
                                </div>
                                <div class="clear"></div>
                            </div>

                            <div class="clear"></div>
                        </li> ';

            return($return);
        }





		// Tirando Barras na Gravacao
		public function tirando_barras($array){
			foreach($array as $key => $value){
				if(is_array($value)){

					foreach($value as $k => $v){
						if(is_array($v)){

							foreach($v as $k1 => $v1){
								if(is_array($v1)){

									foreach($v1 as $k2 => $v2){
										if(is_array($v2)){
										} else {
											$array[$key][$k][$k1][$k2] = stripslashes($v2);
										}
									}

								} else {
									$array[$key][$k][$k1] = stripslashes($v1);
								}
							}

						} else {
							$array[$key][$k] = stripslashes($v);
						}
					}

				} else {
					$array[$key] = stripslashes($value);
				}
			}
			return $array;
		}






        // Tipo em Campos Modulos e Filtro Avancado
        public function menu_admin_tipo($tipo){
            $return = $tipo;

            if($tipo == 'categorias' OR $tipo == 'subcategorias' OR $tipo == 'estados' OR $tipo == 'cidades' OR $tipo == 'bairros'){
                $return = 'select';

            } else if($tipo == 'preco'){
                $return = 'search';
            }

            return $return;
        }
        public function menu_admin_type($tipo){
            $return = $tipo;
            if($tipo == 'search' OR $tipo == 'password' OR $tipo == 'email' OR $tipo == 'date' OR $tipo == 'datetime-local' OR $tipo == 'color' OR $tipo == 'number' OR $tipo == 'range' OR $tipo == 'url' OR $tipo == 'tel' OR $tipo == 'hidden'){
                $return = 'text';
            }
            return $return;
        }



        // Tipo na Grvacao em Menu Admin em Criar colunas
        public function criar_colunas_tipo($v2){
            $return = 'text';
            if($v2['tipo']=='categorias' OR $v2['tipo']=='subcategorias' OR $v2['tipo']=='number' OR $v2['tipo']=='range'){
                $return = 'int';

            } elseif($v2['tipo'] == 'select' AND !preg_match('(multiple)', $v2['input']['tags'])){
                $return = 'int';

            } elseif($v2['tipo']=='estados'){
                $return = 'varchar(2)';

            } elseif($v2['tipo']=='cidades' OR $v2['tipo']=='bairros'){
                $return = 'varchar(100)';

            } elseif($v2['tipo']=='date'){
                $return = 'date';

            } elseif($v2['tipo']=='datetime-local'){
                $return = 'datetime';

            } elseif($v2['tipo']=='preco'){
                $return = 'decimal(20,2)';

            } elseif($v2['tipo']=='email' OR $v2['tipo']=='tel' OR $v2['tipo']=='color'){
                $return = 'varchar(50)';

            } elseif($v2['tipo']=='password' OR $v2['tipo']=='hidden'){
                $return = 'varchar(100)';
            }
            return $return;
        }




	}

?>