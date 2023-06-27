<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';
	require_once DIR_F.'/app/Funcoes/funcoesAdmin.php';

	$mysql = new Mysql();
	$mysql->ini();

	$arr = array();
	$arr['hoje'] = date('Y-m-d');
	$arr['datas'] = array();


		if(isset($_POST['table']) AND $_POST['table'] AND isset($_POST['secretarias']) AND $_POST['secretarias']){

            $mysql->filtro = " WHERE ".STATUS." AND secretarias = '".$_POST['secretarias']."' ORDER BY data1 asc ";
            $consulta = $mysql->read($_POST['table']);

            foreach ($consulta as $key => $value) {
                $arr['datas'][$key]['id'] = $value->id;
                $arr['datas'][$key]['title'] = $value->nome;
                $arr['datas'][$key]['start'] = $value->data1;

                if($value->destaque){
    	            $arr['datas'][$key]['color'] = "#f00";
	                //$arr['datas'][$key]['textColor'] = "#333";
	            }
            }

		}


	$mysql->fim();
	echo json_encode($arr); 

?>

<?
/*
    "id": "1", // Optional
    "title": "Demo event", // Required
    "start": "2013-08-28 10:20:00", // Required
    "end": "2013-08-28 11:00:00", // Optional
    "allDay": false, // Optional
    "url": "http://google.com", // Optional, will not open because of browser-iframe security issues
    "className": "test-class", // Optional
    "editable": true, // Optional
    "color": "yellow", // Optional
    "borderColor": "red", // Optional
    "backgroundColor": "yellow", // Optional
    "textColor": "green" // Optional
*/
?>