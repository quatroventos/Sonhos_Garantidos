<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = 0;


		if(isset($_POST['html']) and $_POST['html']){

			$arr['title'] = '&nbsp;';
			$arr['html']  = $_POST['html'];

		}

	echo json_encode($arr); 

?>