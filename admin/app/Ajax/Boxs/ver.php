<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';
	require_once DIR_F.'/app/Funcoes/funcoesAdmin.php';

	$mysql = new Mysql();
	$mysql->ini();

	$arr = array();
	$arr['alert'] = 0;


		if(isset($_POST['id']) AND $_POST['id'] AND isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id){

			if(isset($_POST['box'])){
				$mysql->prepare = array($_POST['id']);
				if(LUGAR == 'admin'){
					$mysql->filtro = " WHERE `id` = ? ";
				} else {
					$mysql->filtro = " WHERE `id` = ? ";
				}
				$item = $mysql->read_unico($_POST['box']);

				// Txt
				if($_POST['box'] == 'dicas'){
					if(isset($item->id)){
						$arr['title'] = 'Dicas';
						$arr['html']  = '<div class="w700 w-a_700">
											<div class="p20 pt15">
												<b class="db pb30 fz30">'.$item->nome.'</b>
												<img src="'.DIR.'/web/fotos/'.FOTOS.$item->foto.'" class="max-w300 max-h300 fll mr10 mb10">
												'.txt($item).'
												<div class="clear"></div>
											</div>
									    </div> ';
					}

				// Videos
				} elseif($_POST['box'] == 'videos'){
					if(isset($item->id)){
						$arr['title'] = 'Video Aula';
						$arr['html']  = '<div class="w700 w-a_700">
											<div class="p20 pt15">
												'.player($item->foto, '100%', 360).'
											</div>
									    </div> ';
					}
	            }

            }

		}

	$mysql->fim();
	echo json_encode($arr); 

?>