<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';
	require_once DIR_F.'/app/Funcoes/funcoesAdmin.php';

	$mysql = new Mysql();
	$mysql->ini();

	$arr = array();
	$arr['id'] = array();
	$arr['alert'] = 1;

	if(isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id){

		$mysql->prepare = array($_GET['modulos']);
		$mysql->filtro = " WHERE `id` = ? ";
		$modulos = $mysql->read_unico('menu_admin');

		$verificacoes = new Verificacoes();
		$verificacoes->modulos = $modulos;
		$verificacoes->permissoes_all(0, 'lista');


        // Fotos
		$itens = array();
		$table = $_GET['col'];
        $upload = new Upload();
        $caminho = LUGAR == 'admin' ? '../../../' : '../../../../';
        if(isset($_FILES)){
        	$itens = $upload->fileUpload(0, $caminho, 1);
        }

        if($itens){
	        foreach ($itens as $key => $value) {
				$value = new_file_upload_nopng_webp($value,  $caminho."../web/fotos/".FOTOS);

				unset($mysql->campo['foto']);
				$mysql->campo['foto'] = $value;
				$mysql->campo['tabelas'] = $modulos->modulo;
				$mysql->campo['item'] = $_GET['item'];
				$arr['id'][] = $mysql->insert($_GET['col']);
	        }
		}


		$arr['evento']  = " $('#'+id).find('.input.file input').val(''); ";
		$arr['evento'] .= " $('#'+id).find('.input.file span>span').html('Selecionar Fotos'); ";
		$arr['evento'] .= " $('.carregando').show(); ";
		$arr['evento'] .= " setTimeout(function(){ mais_fotos_update('".$modulos->modulo."', '".$_GET['item']."', '".$modulos->id."', '".$_GET['col']."'); }, 1000); ";

	}


	$mysql->fim();
	echo json_encode($arr); 

?>