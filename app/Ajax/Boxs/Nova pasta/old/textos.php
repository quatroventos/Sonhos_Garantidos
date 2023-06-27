<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = 0;


		if(isset($_POST['id']) and $_POST['id']){

			$mysql->filtro = " where id = '".$_POST['id']."' ";
			$item = $mysql->read_unico('textos');
			if(isset($item->id)){

				$arr['title'] = $item->nome;
				$arr['html']  = '<div class="w800 w100p_800 p20 fz16">
									'.txt($item).'
							    </div> ';

			}

		}

	echo json_encode($arr); 

?>