<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = 0;


		if(isset($_POST['id']) and $_POST['id']){

			$mysql->filtro = " where id = '".$_POST['id']."' ";
			$item = $mysql->read_unico('videos');
			if(isset($item->id)){

				$arr['title'] = 'Video';
				$arr['html']  = '<div>
									<div class="w800 w100p_800 br10">
										'.player($item->foto1, '100%', 360, $item->foto).'
									</div>
								</div>
								<div class="carregando1"> <img src="'.DIR.'/web/img/outros/carregando/loader.gif" /> <span> Carregando... </span> </div> ';

			}

		}


	echo json_encode($arr); 

?>