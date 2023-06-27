<?

	// ITENS-> (RELACIONAMENTO)
		if(isset($_GET['table']) AND isset($_GET['item'])){
			$_POST[$_GET['table']] = $_GET['item'];
		}
	// ITENS-> (RELACIONAMENTO)



	if($modulos->modulo == 'afiliados_saques'){

		$mysql->filtro = " WHERE id = '".$_GET['id']."' ";
		$afiliados_saques = $mysql->read_unico('afiliados_saques');

		$mysql->filtro = " WHERE id = '".$afiliados_saques->afiliados."' ";
		$afiliados = $mysql->read_unico('afiliados');

		if(isset($afiliados_saques->preco) AND $afiliados_saques->preco AND isset($afiliados->id) AND $afiliados->id){

			if($_POST['situacao'] == 1 AND $afiliados_saques->situacao != 1){
				if($afiliados_saques->preco >= $afiliados->comissao){
					$arr['erro'][] = 'Este afiliado possue apenas '.preco($afiliados->comissao, 1).'!';
                    echo json_encode($arr);
                    exit();
				} else {
					unset($mysql->campo);
					$mysql->campo['comissao'] = $afiliados->comissao - $afiliados_saques->preco;
					$mysql->campo['comissao_recebido'] = $afiliados->comissao_recebido + $afiliados_saques->preco;
					$mysql->filtro = " WHERE id = '".$afiliados->id."' ";
					$mysql->update('afiliados');
				}

			} elseif($_POST['situacao'] != 1 AND $afiliados_saques->situacao == 1) {
				unset($mysql->campo);
				$mysql->campo['comissao'] = $afiliados->comissao + $afiliados_saques->preco;
				$mysql->campo['comissao_recebido'] = $afiliados->comissao_recebido - $afiliados_saques->preco;
				$mysql->filtro = " WHERE id = '".$afiliados->id."' ";
				$mysql->update('afiliados');
			}

		} else {
			$arr['erro'][] = 'Ocorreu algum erro!';
            echo json_encode($arr);
            exit();
		}

	}

?>