<?

	if(isset($arr['ult_id'])){
		unset($arr['ult_id']);
	}


    // CADASTRO_PLANOS_FATURAS
	    if($modulos->modulo == 'cadastro_planos_faturas'){

	    	$mysql->prepare = array($_GET['id']);
            $mysql->filtro = " WHERE ".STATUS." AND id = ? ";
            $pedidos = $mysql->read_unico('cadastro_planos_faturas');

            $mysql->filtro = " WHERE ".STATUS." AND id = '".$pedidos->cadastro."' ";
            $cadastro = $mysql->read_unico('cadastro');

	        if(isset($_POST['situacao']) AND $_POST['situacao'] == 1){
	            if(isset($cadastro->id)){
	                $situacao = 1;
	                $usuarios = $_SESSION['x_admin']->id;
	                include DIR_F.'/app/Ajax/Pagamentos/retorno_planos.php';

	                unset($mysql->campo);
					$mysql->campo['metodo'] = 'Administração do Site';
					$mysql->filtro = " WHERE id = '".$pedidos->id."' ";
					$mysql->update('cadastro_planos_faturas');

	            } else {
	                $_POST['situacao'] = 0;
	            }
	        }


	        if(!(isset($_POST['situacao']) AND $_POST['situacao'] == 1)){
                unset($mysql->campo);
				$mysql->campo['metodo'] = 'Administração do Site';

				$mysql->campo['situacao'] = 0;
				$mysql->campo['situacao_data'] = date('Y-m-d H:i:s');
				$mysql->campo['situacao_usuarios'] = $_SESSION['x_admin']->id;
				$mysql->campo['ja_foi_pago'] = 0;

				$mysql->campo['data_ini'] = 0;
				$mysql->campo['data_vencimento'] = 0;

				$mysql->filtro = " WHERE id = '".$pedidos->id."' ";
				$mysql->update('cadastro_planos_faturas');
			}

		}
    // CADASTRO_PLANOS_FATURAS

?>