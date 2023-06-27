<?

	class Verificacoes {

		public $modulos;

        // Verificacao All
		public function permissoes_all($ids, $acao='edit'){
			$acao = isset($_GET['acao']) ? $_GET['acao'] : $acao;
			$arr['acao'] = $acao;
	        $arr['violacao_de_regras'] = 1;

	         // MENU ADMIN
	        $arr = $this->menu_admin($arr);

	        // GRAVAR
	        $arr = $this->gravar($arr, $acao);

	        // NOVO
	        $arr = $this->informacoes($arr, $acao, 'novo');

	        // EDIT
	        $arr = $this->informacoes($arr, $acao, 'edit');

	        // DELETE
	        $arr = $this->informacoes($arr, $acao, 'delete');

	        // LISTA
	        $arr = $this->lista($arr, $acao);

			// BOXXS
	        $arr = $this->boxxs($arr, $acao);

			// LINHAS
	        $arr = $this->linhas($arr, $ids, $acao);

	        // VIOLACAO DE REGRA
	        $this->violacao_de_regras($arr);

	        return $arr['linhas'];
		}

		// MENU ADMIN
		public function menu_admin($arr=array()){
	        $arr['menu_admin'] = (isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id==1 AND isset($this->modulos->modulo) AND $this->modulos->id==1) ? 1 : 0;
	        if($arr['menu_admin']){
	            $arr['violacao_de_regras'] = 0;
	        }
	        return $arr;
        }

		// GRAVAR
		public function gravar($arr, $acao){
	        if($acao=='gravar' AND isset($_GET['id']) AND $_GET['id']){
	            if(preg_match('(edit)', $this->modulos->informacoes)){
	                $arr['violacao_de_regras'] = 0;
	            }
	        } elseif($acao == 'gravar'){
	            if(preg_match('(novo)', $this->modulos->informacoes)){
	                $arr['violacao_de_regras'] = 0;
	            }
	        }
	        return $arr;
        }

		// INFORMACOES
		public function informacoes($arr, $acao, $tipo){
			$informacoes = str_replace('-excluir-', '-delete-', $this->modulos->informacoes);
			//echo $acao.' - '.$tipo.' - preg_match(('.$tipo.') - '.$informacoes.')<br>';
	        if($acao==$tipo AND preg_match('('.$tipo.')', $informacoes)){
	            $arr['violacao_de_regras'] = 0;
	        }
	        return $arr;
        }

		// LISTAS
		public function lista($arr, $acao){
	        if($acao=='lista'){
	            $arr['violacao_de_regras'] = 0;
	        }
	        return $arr;
        }

		// BOXXS
		public function boxxs($arr, $acao){
	        if($acao=='boxxs'){
	            $arr['violacao_de_regras'] = 0;
	        }
	        return $arr;
        }


		// VERIFICAR SE ITEM EXISTE E PEGAR AS LINHAS
		public function linhas($arr, $ids, $acao){
	        $arr['linhas'] = '';
	        if( ($acao == 'edit' or $acao == 'delete') and !$arr['menu_admin']){
	            $arr['linhas'] = $this->consulta($ids, $acao);
	            if(is_array($arr['linhas']) or is_object($arr['linhas'])){
	                if(!$arr['linhas']){
	                    $arr['violacao_de_regras'] = 1;
	                }
	            } elseif($arr['linhas']=='0'){
		            $arr['delay'] = 20000;
		            $arr['erro'][] = 'Este Item Não Foi Encontrado no Banco de Dados. Ele Pode Ter Sido Deledado!';
		            echo json_encode($arr);
		            exit();
	            }
	        }
	        return $arr;
        }

        // CONSULTA NO BANCO
        public function consulta($ids, $acao){
        	$return = '';
        	$table = $this->modulos->modulo;
			$filtro = $this->filtro_admins_ajax_datatable($table);

        	if(isset($ids[0]) AND is_array($ids)){
	            $id = ($acao == 'edit' or $acao == 'delete') ? $ids[0] : 0;
        	} elseif(isset($ids[0]) AND !is_array($ids)){
        		$id = $ids;
        	} else {
        		$id = 0;
        	}

        	// Verificando se item existem em Configs e Textos
        	if($table=='configs'){
            	$mysql = new Mysql();
            	$mysql->colunas = 'id';
                $mysql->filtro = " WHERE lang = '".LANG."' AND `tipo` = '".$id."' ";
                $consulta = $mysql->read_unico('configs');
                if(!isset($consulta->id)){
					$mysql->campo['lang'] = LANG;
					$mysql->campo['tipo'] = $id;
					$mysql->insert('configs');
                }
        	}
        	if($table=='textos'){
            	$mysql = new Mysql();
            	$mysql->colunas = 'id';
                $mysql->filtro = " WHERE lang = '".LANG."' AND id = '".(((LANG*10000)-10000)+$id)."' ";
                $consulta = $mysql->read_unico('textos');
                if(!isset($consulta->id)){
					$mysql->campo['lang'] = LANG;
					$mysql->campo['id'] = ((LANG*10000)-10000)+$id;
					$mysql->insert('textos');
                }
        	}
        	// Verificando de item existem em Configs e Textos

            if($id){
            	$id = $table!='textos' ? $id : ((LANG*10000)-10000)+$id;

            	$mysql = new Mysql();
            	$mysql->prepare = array($id);
                $mysql->filtro = " WHERE lang = '".LANG."' AND `id` = ? ".$filtro." ";
                $return = $mysql->read_unico($table);
                if(!$return){
                	$coluna = $table=='configs' ? 'tipo' : 'id';
	            	$mysql->prepare = array($id);
					$mysql->filtro = " WHERE lang = '".LANG."' AND `".$coluna."` = ? ".$filtro." ";
					$return = $mysql->read_unico($table);
                }
            }
            return $return;
        }










        // ACOES
		function acoes($acao, $table){
			$arr = $this->menu_admin();
			if($table != 'mais_comentarios' AND !(isset($arr['menu_admin']) AND $arr['menu_admin']) ){
				$arr['violacao_de_regras'] = 1;

		         // MENU ADMIN
		        $arr = $this->menu_admin($arr);

		        // CLONAR
		        $arr = $this->informacoes($arr, $acao, 'clonar');

		        // STAR
		        $arr = $this->informacoes($arr, $acao, 'star');

		        // LANC
		        $arr = $this->informacoes($arr, $acao, 'lanc');

		        // PROMOCAO
		        $arr = $this->informacoes($arr, $acao, 'promocao');

				// BLOCK
				if($acao == 'block'){
		        	$bloquear = 0;
	                foreach (unserialize(base64_decode($this->modulos->colunas)) as $k1 => $v1){
	                    if(preg_match('(status)', $v1['value']) AND isset($v1['check']) AND $v1['check'])
	                    	$bloquear = 1;
	                }
					if($bloquear){
						$arr['violacao_de_regras'] = 0;
					}
				}

				$this->violacao_de_regras($arr);
			}
        }










		// VIOLACAO DE REGRA
		public function violacao_de_regras($arr=array()){
			$arr['violacao_de_regras'] = isset($arr['violacao_de_regras']) ? $arr['violacao_de_regras'] : 1;
			if($arr['violacao_de_regras']){
                $arr['delay'] = 10000;
                //if(isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id==2){
                	//$arr['erro'][] = 'zzz';
            	//} else
            	if(isset($_SESSION['x_'.LUGAR]->id)){
            		$ee = ''; // Numero de Exclamação == $arr['violacao_de_regras']
            		for ($i=0; $i < $arr['violacao_de_regras']; $i++) { 
            			$ee .= '!';
            		}
            		$arr['erro'][] = 'Ação Não Permitida'.$ee;
                } else {
                	$arr['erro'][] = 'Violação de Regras! Você Não Tem Pemissão Para Realizar Este Evento! Sua Tentativa De Acesso Foi Registrada No Sistema e Será Informada a Administração do Sistema!';
            	}
                echo json_encode($arr);
                exit();
			}
        }












		// LIBERER PERMISSOES
			// MENU INICIAL
			public function liberar_permissoes_menu_inicial(){
				$mysql = new Mysql();
				$mysql->colunas = 'permissoes, permissoes_all';
				$mysql->prepare = array($_SESSION['x_admin']->id);
				$mysql->filtro = "WHERE `id` = ? ";
				$usuarios = $mysql->read_unico('usuarios');

				$permissoes = array(0);
				if($usuarios->permissoes){
					$ex = explode('-', $usuarios->permissoes);
					foreach ($ex as $key => $value) {
						if($value)
							$permissoes[] = $value;
					}
				}
				$return = !($usuarios->permissoes_all=='t') ? ' and `id` IN ('.implode(',', $permissoes).') ' : '';
				return $return;
			}


			// MODULOS RELACIONADO
			public function liberar_permissoes_modulos_relacionados(){
				$return = '';
				$mysql = new Mysql();
	            $mysql->filtro = " WHERE admins = '' ".$this->liberar_permissoes_menu_inicial()." ";
	            $modulos = $mysql->read('menu_admin');
	            foreach ($modulos as $key => $value) {
	            	if(preg_match('(-'.$_GET['modulo'].'-)', $value->modulos_rel)){
			            $mysql->prepare = array($_GET['modulo']);
			            $mysql->filtro = " WHERE `id` = ? ";
			            $return = $mysql->read_unico('menu_admin');
	            	}
	            }
	            return $return;
			}
		// LIBERER PERMISSOES













		// FILTROS PARA OS ADMINS DO AJAX DATATABLE (tem tbm em padrao.php em delete e em acoes no admin)
		public function filtro_admins_ajax_datatable($table, $filtro=''){
			if(LUGAR == 'admin'){
				if($table == 'usuarios' and !($_SESSION['x_admin']->id==1 or $_SESSION['x_admin']->id==2) )
					$filtro .= " AND `id` != 2 ";
			} else {
				if($table == table_admin()){
					$filtro .= " AND `id` = '".$_SESSION['x_'.LUGAR]->id."' ";
				} elseif($table == 'configs'){
					$filtro .= "";
				} else {
					if(isset($this->modulos->id) AND ($this->modulos->id == 0)){
						$filtro .= " AND `".table_admin()."` = '".$_SESSION['x_'.LUGAR]->id."' ";
					} else {
						$filtro .= " AND `".table_admin()."` = '".$_SESSION['x_'.LUGAR]->id."' ";
					}
				}
			}
			return $filtro;
        }





	}

?>