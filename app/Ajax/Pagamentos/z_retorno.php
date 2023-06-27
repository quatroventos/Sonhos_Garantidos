<?

    $postt = $_POST;
    $gett = $_GET;

	$ex = explode('-', $reference);
	$tipo = isset($ex[0]) ? $ex[0] : '';
	$id = isset($ex[1]) ? $ex[1] : 0;

	$debitado = 0;
	if($tipo == 'doacoes_pagamentos'){
		if($status == 1 OR $status == 2){
            $mysql->nao_existe = 1;
            $mysql->prepare = array($id);
			$mysql->filtro = " WHERE `id` = ? AND `ja_foi_pago` = 0 ";
			$doacoes_pagamentos = $mysql->read_unico('doacoes_pagamentos');
			if(isset($doacoes_pagamentos->preco) AND retornar_numero($preco) == retornar_numero($doacoes_pagamentos->preco)){

				$table = 'doacoes_pagamentos';
				$retorno = 1;
				$situacao = $status;
				$usuarios = 0;
				$metodo = $doacoes_pagamentos->metodo;

				include DIR_F.'/app/Ajax/Pagamentos/retorno_doacoes_pagamentos.php';

				if(!file_exists(DIR_F.'/plugins/Json/doacoes_pagamentos_retorno'.BARRA)){
					mkdir(DIR_F.'/plugins/Json/doacoes_pagamentos_retorno'.BARRA, 0777, true);
				}

	            $file = fopen(DIR_F."/plugins/Json/doacoes_pagamentos_retorno/".$doacoes_pagamentos->metodo."_".$doacoes_pagamentos->id.".json", 'w');
	            fwrite($file, json_encode($array));
	            fclose($file);

				$debitado = 1;
			}
		}
	}


	unset($mysql->campo);
	$mysql->campo['data'] = date('Y-m-d H:i:s');
	$mysql->campo['metodo'] = $metodo;
	$mysql->campo['doacoes_pagamentos'] = $reference;
	$mysql->campo['status1'] = $status1;
	$mysql->campo['debitado'] = $debitado;
	$mysql->campo['retorno'] = (json_encode($array));
	$mysql->campo['post'] = (json_encode($postt));
	$mysql->campo['get'] = (json_encode($gett));
	$mysql->insert($tipo.'_zretorno');

?>