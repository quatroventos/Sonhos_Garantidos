<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = '';
	$arr['alert_boxs'] = 0;
	$arr['topo'] = '';

		if($_POST['id']){
			//unset($_SESSION['carrinho']);

			$id = $_POST['id'];
			$qtd = $_POST['qtd']*1;

			$mysql->prepare = array($id);
			$mysql->filtro = " WHERE ".STATUS." ".PRODUTOS_ATIVOS." AND `id` = ? ORDER BY `id` DESC ";
			$item = $mysql->read_unico('produtos');
			$estoque = $item->estoque;


			// ATRIBUTOSSSSSSSSSSSSSSSSS
				$ref_atributos = '';
				$ref_atributos_outros = '';
				$ref_atributos_adicionais = '';

				// ATRIBUTOS
					$array_atributos = array();
					$filtro_combinacoes = '';
					for ($i=1; $i<=10; $i++) {
						$atributos = 'atributos_'.$i;
						if(isset($_POST[$atributos])){
							$ref_atributos .= $_POST[$atributos].'_';
							$filtro_combinacoes .= " AND produtos_atributos".$i." = '".$_POST[$atributos]."' ";
						}
					}
					// COMBINACOES
						$combinacoes_existente = 0;
						if($filtro_combinacoes){
							$return = verificar_estoque_atributos($item->id, $filtro_combinacoes);
							if(isset($return['estoque'])){
								$estoque = $return['estoque'];
								$combinacoes_existente = 1;
							}
						}
					// COMBINACOES

					// VerificANDo de Atributo Existe
					if($filtro_combinacoes AND !$combinacoes_existente){
						$arr['erro'][] = 'Selecione as Atribuições Desejadas!';
					}
				// ATRIBUTOS


				// ATRIBUTOS ADICIONAIS
					for ($i=1; $i<=10; $i++) {
						$atributos = 'atributos_adicionais_'.$i;
						if(isset($_POST[$atributos]) AND $_POST[$atributos]){
							$ref_atributos_adicionais .= $_POST[$atributos].'_';
							$return = verificar_estoque_atributos_adicionais($item->id, $_POST[$atributos]);
							if(isset($return['estoque']) AND $return['estoque'] < $qtd){
								$arr['erro'][] = 'Item Adicional indisponível para a Quantidade Solicidada!<div>(Estoque Disponível: '.$return['estoque'].')</div>';
							}
						}
					}
				// ATRIBUTOS ADICIONAIS


				// ATRIBUTOS OUTROS
					for ($i=1; $i<=10; $i++) { // 11 -> Aro
						$atributos = 'atributos_outros_'.$i;
						if(isset($_POST[$atributos])){
							$ref_atributos_outros .= $_POST[$atributos].'_';
						}
					}
				// ATRIBUTOS OUTROS


				// ATRIBUTOS EXTRA
					if(isset($_POST['atributos_extra'])){
						$atributos_extra = $_POST['atributos_extra'];
					}
				// ATRIBUTOS EXTRA
			// ATRIBUTOSSSSSSSSSSSSSSSSS


			// VarificANDo Estoque
			$arr['estoque'] = $estoque;
			if( !($qtd AND $estoque >= $qtd) ){
				$arr['erro'][] = 'Produto indisponível para a Quantidade Solicidada!<div>(Estoque Disponível: '.$estoque.')</div>';
			}


			// Verificando se existe erros
			if(!isset($arr['erro'])){
				$ref = $_POST['id'].'_'.$ref_atributos.'z_'.$ref_atributos_adicionais.'z_'.$ref_atributos_outros;
				$arr['ref'] = $ref;

				$arr['item_all'] = '';
				if(!isset($_SESSION['carrinho']['itens'][$id][$ref]->qtd)){
					$mysql->filtro = " WHERE ".STATUS." ".PRODUTOS_ATIVOS." AND id = '".$id."' ";
					$item = $mysql->read_unico('produtos');

					/*
					$arr['item_all'] .= '<li class="posr mb10 carrinho_all_item_'.$ref.'">';
						$arr['item_all'] .= '<a onclick="carrinho_deletar_item('.A.$ref.A.')" class="delete-item"><i class="fa fa-times"></i></a> ';
						$arr['item_all'] .= '<div class="fll mr10"><a href="'.url('produto', $item).'"><img src="'.DIR.'/web/fotos/'.FOTOS.$item->foto.'" widht="50" height="50"></a></div> ';
						$arr['item_all'] .= '<div class="fwb"><a href="'.url('produto', $item).'">'.$item->nome.'</a></div> ';
						$arr['item_all'] .= '<div class=""><a href="'.url('produto', $item).'">'.preco($item->preco, 1).'</div> ';
						$arr['item_all'] .= '<div class="clear"></div> ';
					$arr['item_all'] .= '</li>';
					*/
				}


				$_SESSION['carrinho']['itens'][$id][$ref] = (object)array();
				$_SESSION['carrinho']['itens'][$id][$ref]->qtd = $qtd;
				
				$array_atributos = explode('_', $ref_atributos);
				foreach ($array_atributos as $key => $value) {
					if($value){
						$atributo = 'atributos_'.($key+1);
						$_SESSION['carrinho']['itens'][$id][$ref]->$atributo = str_replace('_', '', $value);
					}
				}

				$ref_atributos_adicionais = explode('_', $ref_atributos_adicionais);
				foreach ($ref_atributos_adicionais as $key => $value) {
					if($value){
						$atributo = 'atributos_adicionais_'.($key+1);
						$_SESSION['carrinho']['itens'][$id][$ref]->$atributo = str_replace('_', '', $value);
					}
				}

				$ref_atributos_outros = explode('_', $ref_atributos_outros);
				foreach ($ref_atributos_outros as $key => $value) {
					if($value){
						$atributo = 'atributos_outros_'.($key+1);
						$_SESSION['carrinho']['itens'][$id][$ref]->$atributo = str_replace('_', '', $value);
					}
				}

				if(isset($atributos_extra)){
					$_SESSION['carrinho']['itens'][$id][$ref]->atributos_extra = $atributos_extra;
				}

				if($_POST['no_popup']==0){
					$arr['alert_boxs'] = 1;
				}

				//$arr['alert'] = 'Produto enviado para o carrinho!';

			}

		}

	if(!isset($include))
		echo json_encode($arr);

?>