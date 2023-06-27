<?
	if(!isset($pagamento_recorrente)){
		$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
		require_once $DIR_F[0].'/system/conecta.php';

		$mysql = new Mysql();
		$mysql->ini();
		$arr = array();
	}


	$dados = array();
	$arr['alert'] = 0;

		$PAGAMENTO = 'Pagarme';


		$mysql->campo['metodo'] = $_POST['metodo'];
		if(isset($pagamento_recorrente) AND isset($cadastro_planos_faturas_0->id)){
			$mysql->filtro = " WHERE ".STATUS." AND id = '".$cadastro_planos_faturas_0->id."' ";
		} else {
			$mysql->prepare = array($_SESSION['x_site']->id, $_POST['id']);
			$mysql->filtro = " WHERE ".STATUS." AND `cadastro` = ? AND id = ? ";
		}
		$ult_id = $mysql->update('cadastro_planos_faturas');

		$mysql->filtro = " WHERE ".STATUS." AND id = '".$ult_id."' ";
		$pedidos = $mysql->read_unico('cadastro_planos_faturas');

		$mysql->filtro = " WHERE ".STATUS." AND id = '".$pedidos->cadastro."' ";
		$cadastro = $mysql->read_unico('cadastro');


		if($pedidos->metodo == $PAGAMENTO.'_cartao'){
            $mysql->prepare = array($_SESSION['x_site']->id);
            $mysql->filtro = " WHERE ".STATUS." AND `cadastro` = ? AND principal = 1 ";
            $cadastro_cartoes = $mysql->read_unico('cadastro_cartoes');

			$_POST['cartao_nome'] = $cadastro_cartoes->nome;
			$_POST['cartao_numero'] = cartao_crip($cadastro_cartoes->numero, 1);
			$_POST['cartao_validade'] = base64_decode(vc($cadastro_cartoes->validade));
			$_POST['cartao_cvv'] = cartao_crip($cadastro_cartoes->cvv, 1);
		}


		// SELLER
	        //$mysql->filtro = " WHERE ".STATUS." AND id = '".$_SESSION['x_site']->id."' ";
	        //$seller_pd = $mysql->read_unico(SELLER);
		// SELLER


		if(isset($pedidos->metodo) AND $pedidos->metodo AND isset($cadastro->id) AND $cadastro->id){
			if(preg_match('('.$PAGAMENTO.'_)', $pedidos->metodo)){
				$ex_metodo = explode('_', $pedidos->metodo);

				$tipo_pedido = 'Plano';
				$carrinho_retorno = 'planos';
				$plano_fim = 'plano_fim';
				$pedidos->valor_total = $pedidos->preco;
				include DIR_F.'/app/Ajax/Pagamentos/'.$ex_metodo[0].'/index.php';
			}
		}



	if(!isset($pagamento_recorrente)){
		$mysql->fim();
		echo json_encode($arr);
	}

?>