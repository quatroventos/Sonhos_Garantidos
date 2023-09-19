<?

	class System {


		public function __construct(){

		    // Eliminar Bug de LUGAR != site
		    if(LUGAR != 'site'){
				echo '<script>window.parent.location="'.DIR_C.DIR_D.'";</script>';
		    	exit();
		    }

		    // SUBDOMINIO
				if(isset($_GET['pg_subdominio'])){
					$_GET['cod'] = $_GET['pg_subdominio'].'/'.$_GET['cod'];
				}
		    // SUBDOMINIO

			// CRIANDO GET PADRAO
				$_GET['cod'] = isset($_GET['cod']) ? $_GET['cod'] : '';
				$gets = explode('/', $_GET['cod']);
				$gets[0] = strtolower($gets[0]);

				// Redirecionar para pg/
				if(!$gets[0]){
					$gets[0] = 'home';
					$gets[1] = '';
				}

				$_GET['pg_real'] = $gets[0];

				// Muda para abrir outras paginas
				if($gets[0]=='textosp' OR $gets[0]=='textosp1'){
					$_GET['pg'] = $gets[0] = 'textos';
				}

                if($gets[0]=='pagarme'){
                    $_GET['pg'] = 'pagarme';
                }

			// CRIANDO GET PADRAO

			// VERIFICANDO QUAL PAGINA CHAMAR
				if( method_exists(new Controllers(), $gets[0]) ){
					$_GET['pg'] = $gets[0];

					// Criando arquivo
					if(!file_exists(DIR_F."/views/".$gets[0].".phtml") ){
						copy(DIR_F."/views/home.phtml", "../views/".$gets[0].".phtml");
						$gravar_file = fopen(DIR_F."/views/".$gets[0].".phtml", 'w');
						$arquivo_novo  =
						"<?\n".
						"\techo\n".
						"\t\t'<section id=".A2.$gets[0].A2." class=".A2."centerr".A2.">'.\n\n". //animated_ini
						"\t\t'</section>';\n".
						"\n?>";

						$arquivo_novo  = "\n\t";
						$arquivo_novo .= '<section id="'.$gets[0].'">';
						$arquivo_novo .= "\n\t";
						$arquivo_novo .= '</section>';

						fwrite($gravar_file, $arquivo_novo );
						fclose($gravar_file);
					}

				//} else {
				//	$_GET['pg'] = 'home';
				}
			// VERIFICANDO QUAL PAGINA CHAMAR



			// GET PADRAO
				$_GET['nome']		= ( isset($gets[1]) and $gets[1] ) ? $gets[1] : '-';
				$_GET['id']			= ( isset($gets[2]) and $gets[2] ) ? $gets[2] : '-';
				$_GET['categorias']	= ( isset($gets[3]) and $gets[3] ) ? $gets[3] : '-';
				$_GET['categorias1']= ( isset($gets[4]) and $gets[4] ) ? $gets[4] : '-';

				$_GET['url_gets'] = str_replace($gets[0], '', $_GET['cod']);

				unset($gets[0], $gets[1], $gets[2], $gets[3], $gets[4]);
			// GET PADRAO


			// OUTROS GETS (a/1/b/2 => a=1, b=2)
				// Excluindo o ultimo array se ult array for 0
				if( !end($gets) ) array_pop($gets);

				// Passando valores para ind e value
				$i=0;
				if($gets){
					foreach($gets as $val){
						if( !($i%2) )   $ind[] = $val;
						else            $value[] = $val;
						$i++;
					}
				} else {
					$ind = array();  $value = array();
				}

				// Verificando Cont
				if( ( isset($ind) and !isset($value) ) or count($ind) != count($value) )
					$value[] = '';


				if( count($ind) == count($value) and $ind and $value ){
					foreach($ind as $name => $val){
						if(isset($_GET[$val]) AND isset($value[$name])){
							$_GET[$val] = $value[$name];
						}
					}
				}
			// OUTROS GETS

		}



		public function run(){

			// Abrindo Paginas
			if(isset($_GET['pg'])){
				if($_GET['pg'] == 'zzz'){
					include DIR_F.'/views/zzz.phtml';

				} else {
					$Controllers = new Controllers();
					$pg = $_GET['pg'];
					$Controllers->$pg();
				}

			} else {
				/*
				$mysql = new Mysql();
				$mysql->filtro = " WHERE ".STATUS." AND situacao = 1 AND url = '".$_GET['pg_real']."' ";
				$x_afiliados = $mysql->read_unico('afiliados');
				if(isset($x_afiliados) AND $x_afiliados){

					// SESSION PARA VINCULANDO CADASTRO
						$_GET['afiliados_abrir_cadastro'] = 1;
						$_SESSION['x_afiliados'] = $x_afiliados->id;
					// SESSION PARA VINCULANDO CADASTRO

					// COUNT AFILIADOS
						$mysql->campo['url_acesso'] = $x_afiliados->url_acesso+1;
						$mysql->filtro = " WHERE id = '".$x_afiliados->id."' ";
						$mysql->update('afiliados');
					// COUNT AFILIADOS

					$pg = $_GET['pg'] = $_GET['pg_real'] = 'home';
					$Controllers = new Controllers();
					$Controllers->$pg();

				} else {
				*/
					$pg = $_GET['pg'] = $_GET['pg_real'] = 'erro_404';
					$Controllers = new Controllers();
					$Controllers->$pg();
				}
			//}

		}


	}

?>
