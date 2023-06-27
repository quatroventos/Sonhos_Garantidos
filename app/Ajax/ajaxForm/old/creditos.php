<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = 'z';


		if(isset($_POST['creditos'])){
			$mysql->prepare = array($_SESSION['x_site']->id);
			$mysql->filtro = " WHERE `id` = ? ";
			$cadastro = $mysql->read_unico('cadastro');

			// Creditos
			$_POST['creditos'] = $cadastro->creditos>$_POST['creditos'] ? $_POST['creditos'] : $cadastro->creditos;
			$arr['creditos'] = $_SESSION['creditos'] = $_POST['creditos'];

			// Mostrar ou nao creditos
			if($arr['creditos'])
				$arr['evento']  = '$(".CC_box_credito").fadeIn(); ';
			else
				$arr['evento']  = '$(".CC_box_credito").fadeOut(); ';

			$arr['alert'] = 'Adincionado com sucesso!';

			$arr['evento'] .= '$(".creditoo_atual").html("'.preco($cadastro->creditos, 1).'"); ';
			$arr['evento'] .= '$(".CC_credito").html("'.preco($arr['creditos'], 1).'"); ';
			$arr['evento'] .= 'CC_atualizar() ';
		}



	echo json_encode($arr); 
?>