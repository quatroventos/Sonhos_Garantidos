<?	if(!isset($_GET['no_session_start'])) { ob_start(); if(!isset($no_session_start)){ session_start(); } }


		// BANCO
			if($_SERVER['HTTP_HOST'] == 'localhost:4000'){
				$localhost_config	= 'localhost';
				$banco_config		= 'sorocabacom_007_sonhos_garantidos';
				$nome_config	 	= 'root';
				$senha_config		= '';

			} else {

				$localhost_config	= 'sonhosgarant.mysql.dbaas.com.br';
				$banco_config		= 'sonhosgarant';
				$nome_config	 	= 'sonhosgarant';
				$senha_config		= 'UBWBU%#@dw89w';


				if(isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id==1){
					ini_set('display_errors', 0);
					define('TESTE', 1);
				} else {
					ini_set('display_errors', 0);
					define('TESTE', 0);
				}
			}
		// BANCO


		// DEFINES
			define('NOME', 'Sonhos Garantidos');

			define('SELLER', 'seller');
			define('SELLER_OK', 0);

			// PADROES CSS
				define('COR1', 'D69D5E');
				define('COR2', 'ccc');
				//define('COR_B', 'fff');
				//define('COR_P', '000');
				define('BUTTON1', 'cor_fff_i cor_hover_'.COR1.'_i bd_'.COR1.'_i back_'.COR1.'_i back_hover_fff_i');
				define('BUTTON2', 'cor_fff_i cor_hover_'.COR2.'_i bd_'.COR2.'_i back_'.COR2.'_i back_hover_fff_i');
			// PADROES CSS

			// MAX_UPLOAD
				define('MAX_UPLOAD', 10 * 1000 * 1000);
			// MAX_UPLOAD

			// PADROES IMAGEM
				define('QUALIDADE_WEBP_FUNC', 0);
				define('QUALIDADE_WEBP_THUMB', 0);
			// PADROES IMAGEM

			// URL API
				define('URL_MELHOR_ENVIO', "https://sandbox.melhorenvio.com.br");
			// URL API


			// DISPLAY ERROS
				if(isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id==1){
					ini_set('display_errors', 0);
					define('TESTE', 1);
				} else {
					ini_set('display_errors', 0);
					define('TESTE', 0);
				}
			// DISPLAY ERROS


			// ADMINS
				$admins = array('clientes');
				if(isset($_GET['lugar'])){
					foreach ($admins as $key => $value) {
						if($_GET['lugar'] == $value){
							foreach ($_SERVER as $key1 => $value1) {
								$_SERVER[$key1] = str_replace('/admin/', '/'.$value.'/', $value1);
							}
						}
					}
				}
			// ADMINS

			// DIR
				/* SUBDOMINIO */
				/*
					// REDIRECIONAR
						if(preg_match('(lefdigital.com/blogs)', $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'])){
							$ex = explode('lefdigital.com/blogs', $_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI']);
							header("Location: https://blog.lefdigital.com".$ex[1]);
							exit();
						}
					// REDIRECIONAR

					if($_SERVER['HTTP_HOST'] == 'blog.lefdigital.com'){
						// REDIRECIONAR
							if(isset($_GET['cod'])){
								$_GET['pg_subdominio'] = 'blog';
							} else {
								$_GET['pg_subdominio'] = 'blogs';
							}
							$_GET['pg_subdominio'] = 'blogs';
						// REDIRECIONAR

						define('DIR', 'https://lefdigital.com'); //*
						define('DIR_F', $dir__[0]);
						$http = $_SERVER['HTTP_HOST']=='localhost:4000' ? 'http' : 'https';
						define('HTTP', $http);
						define('DIR_C', DIR); //*
						define('DIR_D', str_replace(DIR, '', $_SERVER['REQUEST_URI'])); //*
						$ex = explode('?', DIR_D);
						define('DIR_G', (isset($ex[1]) AND $ex[1]) ? '?'.$ex[1] : ' ' );
						define('DIR_ALL', DIR_C.DIR_D);
						define('DIR_ckfinder', '../..');
					}
				/* SUBDOMINIO */

				/* DOMINIO */
					//else {
						$dir_url = array($_SERVER['SCRIPT_NAME']);
						$dir__ = array(__DIR__);
						$pastas = array('admin', 'api', 'app', 'css', 'app', 'extra', 'js', 'plugins', 'system', 'views', 'web', 'z_temp', 'z_tarefas', 'index.php');
						$pastas = array_merge($pastas, $admins);
						foreach ($pastas as $key => $value) {
							$dir_url = explode('/'.$value, $dir_url[0]);
							$dir__ = explode(DIRECTORY_SEPARATOR.$value, $dir__[0]);
						}
						define('DIR', $dir_url[0]);
						define('DIR_F', $dir__[0]);
						$http = $_SERVER['HTTP_HOST']=='localhost:4000' ? 'http' : 'https';
						define('HTTP', $http);
						define('DIR_C', HTTP.'://'.$_SERVER['HTTP_HOST'].DIR);
						define('DIR_D', str_replace(DIR, '', $_SERVER['REQUEST_URI']));
						$ex = explode('?', DIR_D);
						define('DIR_G', (isset($ex[1]) AND $ex[1]) ? '?'.$ex[1] : '?' );
						define('DIR_E', str_replace(DIR_G, '', DIR.DIR_D));
						define('DIR_ALL', DIR_C.DIR_D);
						define('DIR_ckfinder', '../..');
					//}
				/* DOMINIO */

				// mudar em DIR_C para https
				if((!isset($_SERVER['HTTPS']) OR $_SERVER['HTTPS']!='on') AND $_SERVER['HTTP_HOST']!='localhost:4000'){ echo '<script> window.parent.location = "'.DIR_ALL.'"; </script>'; exit(); }
			// DIR



			// LUGAR
				$lugar = 'site';
				if(preg_match('(/admin/)', DIR_ALL)){
					$lugar = 'admin';

				} else {
					foreach ($admins as $key => $value) {
						if(preg_match('(/'.$value.')', DIR_ALL)){
							$lugar = $value;
						}
					}
				}
				$lugar = isset($_POST['lugar']) ? $_POST['lugar'] : $lugar;
				define('LUGAR', $lugar);
			// LUGAR


			// LESS
				if($_SERVER['HTTP_HOST'] == 'localhost:4000'){
					define('LESS', 0);
				} else {
					define('LESS', 1);
				}
			// LESS


			// LANG
				if(!isset($_GET['lang'])){
					$_GET['lang'] = isset($_SESSION['lang']) ? $_SESSION['lang'] : 1;
				}
				$_SESSION['lang'] = $_GET['lang'];
				define('LANG', $_GET['lang']);
			// LANG


			// CONFIGS
				date_default_timezone_set("America/Sao_Paulo");
				if(!isset($codificacao)) ini_set("default_charset","UTF-8");
				//ini_set("MAX_FILE_SIZE","10M");
				//ini_set("upload_max_filesize","10M");
				ini_set("allow_url_fopen", 1);
				ini_set("allow_url_include", 1);
				if($_SERVER['HTTP_HOST'] == 'localhost:4000'){
					ini_set('max_execution_time', 6000);
				} else {
					ini_set('max_execution_time', 30000);
				}
				ini_set('memory_limit', '-1');
				ini_set("pcre.jit", "0");
				//ini_set('session.save_path', 'tmp');
				setlocale(LC_TIME, NULL);	// data BR smarty
			// CONFIGS
		// DEFINES


		// AUTO LOAD DAS CLASSES
		    if(!function_exists('classAutoLoader')){
		        function classAutoLoader($class_name){
			        // Classes Site
			        if( file_exists(DIR_F.'/app/Classes'.BARRA.$class_name.'.php') ){
			            require_once DIR_F.'/app/Classes'.BARRA.$class_name.'.php';
			        // Class Admin
			        } elseif( file_exists(DIR_F.'/admin/app/Classes'.BARRA.$class_name.'.php') ){
			            require_once DIR_F.'/admin/app/Classes'.BARRA.$class_name.'.php';
			        // TNG
			        } elseif( file_exists(DIR_F.'/plugins/Tng/tng/triggers'.BARRA.$class_name.'.class.php') ){
			            require_once(DIR_F.'/plugins/Tng/tng/triggers'.BARRA.$class_name.'.class.php');
			        }
		        }
		    }
		    spl_autoload_register('classAutoLoader');
		// AUTO LOAD DAS CLASSES




		// REQUIRE ONCE
			require_once DIR_F.'/system/mysql.php';
			require_once DIR_F.'/app/Funcoes/funcoes.php';
			require_once DIR_F.'/app/Funcoes/funcoes_system.php';

			if($_SERVER['HTTP_HOST'] == 'localhost:4000'){
				$__DIR__ = __DIR__;
				include 'D:\wamp64\www\Configs\banco.php';
			}

			$mysql = new Mysql();
		// REQUIRE ONCE


		// MOBILE
			include DIR_F.'/plugins/Mobile/mobile.php';
			define('MOBILE', mobile_device_detect(true, true, true, true, true, true, 1, 0));
		// MOBILE




		// DEFINES MYSQL
			define('STATUS', " `status` = 1 AND `lang` = '".LANG."' ");
			define('ORDER', " `ordem` ASC, `nome` ASC, `id` DESC ");
			define('ORDER1', " `ordem` ASC, `id` DESC ");
			define('BARRA', DIRECTORY_SEPARATOR);

			// Situcoes de Pedidos
			define('SITUACAO_PD', "Aguardando Pagamento");
		// DEFINES MYSQL






		// CONDICOES
			$condicoes['conecta'] = 1;
			include DIR_F.'/app/Condicoes/produtos_promocoes.php';
			unset($condicoes['conecta']);
		// CONDICOES



		// VERIFICACOES
		// VERIFICACOES




		// DEFINES DINAMICOS
			$mysql = new Mysql();
			$mysql->colunas = 'key_google, captcha, facebook';
			$mysql->filtro = " WHERE `lang` = '".LANG."' AND `tipo` = 'informacoes' ";
			$defines = $mysql->read_unico('configs');

			//define('FACEBOOK', $defines->facebook);
			//define('KEY_GOOGLE', $defines->key_google);
			//define('CAPTCHA', $defines->captcha);

			defined('KEY_GOOGLE') or define('KEY_GOOGLE', '');
		// DEFINES DINAMICOS

?>
