<?

	if(!isset($comentarios_box)){
		$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
		require_once $DIR_F[0].'/system/conecta.php';
		require_once DIR_F.'/plugins/Tng/tng/tNG.inc.php';

		$mysql = new Mysql();
		$mysql->ini();
	}

	$arr = array();
	$arr['okkkk'] = 1;


		if(!isset($_SESSION['x_site']->id)){
			$arr['title'] = 'Favorito';
			$arr['html']  = ' <div class="p20 tac"> Você precisa se logar para poder selecionar como favorito! </div> ';


		} else {

			$mysql->filtro = " WHERE cadastro = '".$_SESSION['x_site']->id."' AND produtos = '".$_POST['item']."' ";
			$delete = $mysql->delete('produtos_favoritos');
			if($delete){
				$arr['evento'] = "$('.favoritoo_".$_POST['item']."').removeClass('faa-heart').addClass('faa-heart-o'); ";

			} else {
	        	$mysql->campo['cadastro'] = $_SESSION['x_site']->id;
	        	$mysql->campo['produtos'] = $_POST['item'];
	            $mysql->insert('produtos_favoritos');

	            $arr['evento'] = "$('.favoritoo_".$_POST['item']."').removeClass('faa-heart-o').addClass('faa-heart'); ";
			}

			$mysql->filtro = " WHERE cadastro = '".$_SESSION['x_site']->id."' ";
			$produtos_favoritos = $mysql->read('produtos_favoritos');

			$arr['evento'] .= "$('.favoritoo').attr('data-number', ".count($produtos_favoritos).")";
		}


	if(!isset($comentarios_box)){
		$mysql->fim();
		echo json_encode($arr); 
	}

?>