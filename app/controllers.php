<?

	class Controllers extends Mysql {



		// INCLUDES

			public function includes(){

				// TOPO
				// TOPO


				// FOOTER
				// FOOTER


				// PADRAO
					$this->filtro = " where tipo = 'emails' AND lang = '".LANG."' ";
					$dados['emails'] = $this->read_unico('configs');

					$this->filtro = " WHERE  `tipo` = 'informacoes' AND lang = '".LANG."' ";
					$dados['info'] = $dados['informacoes'] = $this->read_unico('configs');

					if(isset($_SESSION['x_site']->id)){
						$this->filtro = " WHERE `id` = '".$_SESSION['x_site']->id."' ";
						$dados['cadastro_pd'] = $this->read_unico('cadastro');
					}
					if(!isset($dados['cadastro_pd']->id)){
						unset($_SESSION['x_site']);
					}


					$textos = $this->read('textos');
					foreach ($textos as $key => $value){
						$dados['textos'][$value->id-((LANG*10000)-10000)] = $value;
					}


					$this->filtro = " WHERE ".STATUS." ORDER BY ".ORDER." ";
					$dados['paginas'] = $this->read('paginas');

					$this->filtro = " WHERE ".STATUS." ORDER BY `lugares` DESC";
					$banner = $this->read_unico('banner');
					if(isset($banner->lugares)){
						for ($i=1; $i <= $banner->lugares; $i++) { 
							$this->filtro = " WHERE ".STATUS." AND `lugares` = '".$i."' ORDER BY `ordem` ASC, `id` DESC ";
							$dados['banner'][$i] = $this->read('banner');
						}
					}

					$dados['redess'] = 		array("facebook", 	"twitter",	"google",	"instagram",	"whatsapp",	"rss",	"delicious",	"dribbble",	"linkedin",	"flickr",	"skype",	"pinterest",	"youtube",	"vimeo");
					//$dados['redess_cor'] = 	array("3B5998", 	"56A3D9",	"BF221F",	"BF221F",		"099000",	"3B5998",	"BF221F",		"3B5998",	"007BB6",	"BF221F",	"007BB6",	"56A3D9",	"BF221F",	"BF221F");

					// Todas da informacoes do carrinho
					//$dados = carrinho_dados($dados);

				// PADRAO

				return($dados);
			}

		// INCLUDES







		// ----------------------------------------------------------------------------------------------------------------------------------------------------------







		// VIEWS


			// HOME
				public function home(){

					$this->filtro = " WHERE ".STATUS." ORDER BY ".ORDER1." ";
					$dados['doacoes'] = $this->read('doacoes');

					$this->filtro = " WHERE ".STATUS." ORDER BY ".ORDER1." ";
					$dados['depoimentos'] = $this->read('depoimentos');

					$this->filtro = " WHERE ".STATUS." ORDER BY ".ORDER1." ";
					$dados['blogs'] = $this->read('blogs');

					$this->view($_GET['pg'], $dados);
				}
			// HOME


			// DOACOES
				public function doacoes(){

					$this->filtro = " WHERE ".STATUS." ".filtro_busca()." ORDER BY ".ORDER1." ";
					$dados['doacoes'] = $this->read('doacoes', 20);

					$this->view($_GET['pg'], $dados);
				}
				public function doacao(){

					$this->prepare = array($_GET['id']);
					$this->filtro = " WHERE ".STATUS." AND id = ? ";
					$dados['item'] = $this->read_unico('doacoes');

					$this->view($_GET['pg'], $dados);
				}
				public function doacao_pagamento(){
					verificar_sessao();

					$this->prepare = array($_GET['id']);
					$this->filtro = " WHERE ".STATUS." AND id = ? ";
					$dados['item'] = $this->read_unico('doacoes');

					if(!isset($dados['item']->id)){
						echo '<script> ';
							echo 'alert("Esta Doação já se encerrou!"); ';
							if($_GET['id'] == '-'){
								echo 'window.parent.location = "'.DIR.'/doacoes/"; ';
							} else {
								echo 'window.parent.location = "'.DIR.'/doacoes/-/'.$_GET['id'].'/"; ';
							}
						echo '</script> ';
						exit();
					}

					$this->view($_GET['pg'], $dados);
				}
				public function doacao_pagamento_fim(){
					verificar_sessao();

					$this->prepare = array($_GET['id']);
					$this->filtro = " WHERE ".STATUS." AND id = ? ";
					$dados['item'] = $this->read_unico('doacoes');

					if(!isset($dados['item']->id)){
						echo '<script> ';
							echo 'alert("Esta Doação já se encerrou!"); ';
							if($_GET['id'] == '-'){
								echo 'window.parent.location = "'.DIR.'/doacoes/"; ';
							} else {
								echo 'window.parent.location = "'.DIR.'/doacoes/-/'.$_GET['id'].'/"; ';
							}
						echo '</script> ';
						exit();
					}

					$this->view($_GET['pg'], $dados);
				}
			// DOACOES



			// BLOG
				public function blog(){

					$filtro = '';
                    if(isset($_GET['date'])){
                            $filtro = " AND data1 = '".$_GET['date']."' ";
                    }

                    // TAGS
					if($_GET['nome'] == 'tags'){
						$this->filtro = " WHERE ".STATUS." AND id IN (".($_GET['id']!='-' ? $_GET['id'] : 0).") ORDER BY data1 DESC, ".ORDER." ";
						$dados['blogs'] = $this->read('blogs', 20);

					// ITENS
					} elseif($_GET['id'] == '-'){
						$this->filtro = " WHERE ".STATUS." ".filtro_busca()." ".filtro_fixo('categorias', 'blogs')." ORDER BY data1 DESC, ".ORDER." ";
						$dados['blogs'] = $this->read('blogs', 20);

					// ITEM
					} else {
						$this->prepare = array($_GET['id']);
						$this->filtro = " WHERE ".STATUS." AND `id` = ? ORDER BY data1 DESC, ".ORDER." ";
						$dados['blogs'] = $this->read('blogs');
						$dados['item'] = $dados['blogs'][0];

						$dados['mais_fotos'] = mais_fotos($dados['item']);

						$this->filtro = " WHERE ".STATUS." AND id != '".$dados['item']->id."' AND `categorias` = '".$dados['item']->categorias."' ORDER BY data1 DESC, ".ORDER." limit 3 ";
						$dados['blogs_rel'] = $this->read('blogs');
					}

					// LATERAL
						$this->filtro = " WHERE ".STATUS." ORDER BY data1 LIMIT 20 ";
						$dados['blogs_ultimos'] = $this->read('blogs');

						$this->filtro = " WHERE ".STATUS." ORDER BY ".ORDER." ";
						$dados['blogs1_cate'] = $this->read('blogs1_cate');

						//$this->filtro = " WHERE ".STATUS." ORDER BY ".ORDER." ";
						//$dados['blogs_tags'] = $this->read('blogs_tags');
					// LATERAL

					$this->view($_GET['pg'], $dados);
				}
			// BLOG



			// FAQ
				public function faq(){

					$this->filtro = " WHERE ".STATUS." ".filtro_busca()." ORDER BY ".ORDER." ";
					$dados['faq'] = $this->read('faq');

					$this->view($_GET['pg'], $dados);
				}
			// FAQ



		// VIEWS







		// ------------------------------------------------------------------------------------------------------------------------------------------







		// VIEWS PADROES


			// Textos
			public function textos(){
				$banco = 'textos';
				$soma_lang = ((LANG*10000)-10000);
				if($_GET['pg_real']=='textosp'){
					$banco = 'paginas';
					$soma_lang = 0;
				} elseif($_GET['pg_real']=='textosp1'){
					$banco = 'paginas1_cate';
					$soma_lang = 0;
				}

				$this->prepare = array($soma_lang+$_GET['id']);
				$this->filtro = " WHERE ".STATUS." AND `id` = ? ";
				$dados['item'] = $this->read_unico($banco);
				$dados['titulo'] = $dados['item']->nome;

				$dados['mais_fotos'] = $banco == 'textos' ? multifotos($dados['item']) : mais_fotos($dados['item']);

				$this->filtro = " WHERE ".STATUS." ORDER BY ".ORDER." ";
				$dados['equipe'] = $this->read('equipe');

				$this->view($_GET['pg'], $dados);
			}


			// Paginas Padroes ou com Ajax
			public function teste(){ $this->view($_GET['pg'], ''); }
			public function trabalhe(){ $this->view($_GET['pg'], ''); }
			public function login(){ $this->view($_GET['pg'], ''); }
			public function mobile(){ $this->view($_GET['pg'], ''); }

			public function area_seller(){ $this->view($_GET['pg'], ''); }
			public function area_afiliados(){ $this->view($_GET['pg'], ''); }
			public function erro_404(){ $this->view($_GET['pg'], ''); }

			public function cadastro(){
				$dados['CADASTRO_NOVO'] = 1;
				$this->view($_GET['pg'], $dados);
			}

			public function fale(){
				$dados = array();

				$this->filtro = " WHERE ".STATUS." ORDER BY ".ORDER." ";
				$dados['assuntos'] = $this->read('assuntos');

				$this->view($_GET['pg'], $dados);
			}

			public function minha_conta(){
				verificar_sessao();

				$dados = array();
				if($_GET['nome'] == 'meus_sonhos'){
        	        $this->filtro = " WHERE ".STATUS." AND cadastro = '".$_SESSION['x_site']->id."' ORDER BY ".ORDER1." ";
    	            $dados['consulta'] = $this->read('doacoes', 10);

				} elseif($_GET['nome'] == 'minha_contribuicoes'){
        	        $this->filtro = " WHERE ".STATUS." AND cadastro = '".$_SESSION['x_site']->id."' ORDER BY id DESC ";
    	            $dados['consulta'] = $this->read('doacoes_pagamentos', 20);

				} elseif($_GET['nome'] == 'meus_doadores'){
        	        $this->filtro = " WHERE ".STATUS." AND `doacoes` IN ( SELECT `id` FROM `doacoes` WHERE ".STATUS." AND cadastro = '".$_SESSION['x_site']->id."' ) ORDER BY ".ORDER1." ";
    	            $dados['consulta'] = $this->read('doacoes_pagamentos', 20);
	            }

				$this->view($_GET['pg'], $dados);
			}

			// Carrinho
			public function carrinho(){
				//verificar_sessao('carrinho');
				unset($_SESSION['creditos']);
				unset($_SESSION['desconto']);
				$this->view($_GET['pg'], '');
			}
			public function carrinho_pagamento(){
				verificar_sessao('carrinho');
				$this->view($_GET['pg'], '');
			}
			public function carrinho_fim(){
				verificar_sessao('carrinho');
				$this->view($_GET['pg'], '');
			}


		// VIEWS PADROES






		// ------------------------------------------------------------------------------------------------------------------------------------------




		// Apps
	
			private function view($pg, $vars = null){
				global $dados;

				$globais = array();
				if(isset($dados['pagg'])){
					$globais = array('pagg');
				} else {
					$globais = array('pagg'=>0);
				}

				if($dados){
					foreach($globais as $value){
						$vars[$value] = $dados[$value];
					}
				}

				// Includes
				extract($this->includes(), EXTR_OVERWRITE);

				// Head
				$head = new Head();
				define('META', $head->meta() . less());

				// Variaveis
				if(is_array($vars) and count($vars) ){
					extract($vars, EXTR_OVERWRITE);
				}

				// Pagina Real Existe?
				if( file_exists(DIR_F.'/views'.BARRA.$_GET['pg_real'].'.phtml') ){
					$pg = $_GET['pg_real'];
				}

				return require_once(DIR_F.'/views/index.phtml');

			}

		// Apps




	}

?>