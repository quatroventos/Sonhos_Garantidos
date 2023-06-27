<?

	class Paginacao extends Mysql {

		public $pags;

		public function pag($table){

			$n_max_por_pag = MOBILE ? 4 : 8;

			global $dados;
			$colunas = $this->colunas;
			$filtro = $this->filtro;
			$prepare = $this->prepare;

			$_GET['pag'] = isset($_GET['pag']) ? $_GET['pag'] : 0;
			$item_atual = $_GET['pag'] ? $_GET['pag']*$this->pags : 0;

			// Busca
			if(isset($_GET['gets1']) and !$_GET['gets1'] and isset($_POST['pesq']) and !$_POST['pesq'])
				unset($_SESSION['pesq_session_filtro']);

			// Itens Por Pagina
			$this->colunas = $colunas;
			$this->prepare = $prepare;
			$this->filtro = $filtro." LIMIT ".$item_atual.", ".$this->pags." ";
			$itens_pag = count($this->read($table));

			// Numero de Paginas e Limite de Paginas Vizualizadas
			$this->colunas = 'id';
			$this->prepare = $prepare;
			$this->filtro = $filtro;
			$itens_pag = $this->read($table);
			$itens_pag = count($itens_pag);

			$num_final_pag = ($itens_pag/$this->pags);
			$num_final_pag = explode('.', $num_final_pag);
			if(!isset($num_final_pag[1])) $num_final_pag[0]--;
			if($_GET['pag'] > ($n_max_por_pag-2) and $num_final_pag[0] > ($n_max_por_pag-1) ) $y=$_GET['pag']-($n_max_por_pag-2); else $y=0;
			$n_paginas_default = 0;

			// URL q será passada para proxima pagina
			$url = str_replace('?pag=', '?', $_SERVER ['REQUEST_URI']);
			$url = str_replace('?&pag=', '?&', $_SERVER ['REQUEST_URI']);
			$url = str_replace('&pag=', '&', $_SERVER ['REQUEST_URI']);
			$ex = explode('?', $url);
			$url_atual = isset($ex[1]) ? $ex[0].'?'.$ex[1].'&' : $ex[0].'?';

			// PAGINACAO
				// NORMAL
					$n_paginas = $n_paginas_default;
					$dados['pagg'] = '<div class="clear"></div>';
					if(!$itens_pag){
						$dados['pagg'] .= '<div class="p40 tac fz16">Nenhum item encontrado...</div>';

					} elseif($num_final_pag[0]) {
						$dados['pagg'] .= '<div class="pagg">';
							$dados['pagg'] .= '<a '.iff($_GET['pag'], 'href="'.$url_atual.'pag=0" class="', 'class="ativo').' hover1 hoverr3"  ><<</a>';
							for($y=0; $y<=$num_final_pag[0]; $y++){
								if($n_paginas <= ($n_max_por_pag-1) ){ $n_paginas++;
									$dados['pagg'] .= '<a '.iff($_GET['pag']!=$y, 'href="'.$url_atual.'pag='.$y.'" class="', 'class="ativo').' hover1 hoverr3"  >'.($y+1).'</a>';
								}
							}
							$dados['pagg'] .= '<a '.iff($_GET['pag']!=($y-1), 'href="'.$url_atual.'pag='.($y-1).'" class="', 'class="ativo').' hover1 hoverr3" >>></a>';
						$dados['pagg'] .= '</div>';
					}
				// NORMAL

				// AJAX global $dados; echo global['pagg_ajax']; $_GET['pag'] = $_POST['pagg'];
					$n_paginas = $n_paginas_default;
					$dados['pagg_ajax'] = '<div class="clear"></div>';
					if(!$itens_pag){
						$dados['pagg_ajax'] .= '<div class="p40 tac fz16">Nenhum item encontrado...</div>';

					} elseif($num_final_pag[0]) {
						$dados['pagg_ajax'] .= '<div class="pagg">';
							$dados['pagg_ajax'] .= '<a '.iff($_GET['pag'], 'onclick="atualizar_mapa(this, 0, 0)" class="', 'class="ativo').' hover1 hoverr3"  ><<</a>';
							for($y=0; $y<=$num_final_pag[0]; $y++){
								if($n_paginas <= ($n_max_por_pag-1) ){ $n_paginas++;
									$dados['pagg_ajax'] .= '<a '.iff($_GET['pag']!=$y, 'onclick="atualizar_mapa(this, 0, '.$y.')" class="', 'class="ativo').' hover1 hoverr3"  >'.($y+1).'</a>';
								}
							}
							$dados['pagg_ajax'] .= '<a '.iff($_GET['pag']!=($y-1), 'onclick="atualizar_mapa(this, 0, '.($y-1).')" class="', 'class="ativo').' hover1 hoverr3" >>></a>';
						$dados['pagg_ajax'] .= '</div>';
					}
				// AJAX
			// PAGINACAO

			$this->colunas = $colunas;
			$this->prepare = $prepare;
			$this->filtro = $filtro." LIMIT ".$item_atual.", ".$this->pags." ";

			unset($_GET['pag']);

			return($this->read($table));
		}

	}

?>