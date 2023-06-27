<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();
	$frete = new Frete();

	$arr = array();
	$arr['tipos_frete'] = array();

		$count = 0;
		$subtotal = 0;
		$preco_adicional = 0;
		$descontos_qtd_produtos = 0;

		// ALTERAR QTD
			if($_POST['tipo'] == 'qtd' OR $_POST['tipo'] == 'qtd-1' OR $_POST['tipo'] == 'qtd1'){
				$qtd_anterior = $_SESSION['carrinho']['itens'][$_POST['id']][$_POST['ref']]->qtd;
				$arr['atualizar_frete'] = 1;
				if($_POST['tipo'] == 'qtd'){
					$qtd_anterior = $_POST['val']>0 ? $_POST['val'] : 1;
				} elseif($_POST['tipo'] == 'qtd-1'){
					$qtd_anterior = $qtd_anterior>1 ? $qtd_anterior-1 : 1;
				} elseif($_POST['tipo'] == 'qtd1'){
					$qtd_anterior = $qtd_anterior+1;;
				}
				$_SESSION['carrinho']['itens'][$_POST['id']][$_POST['ref']]->qtd = $qtd_anterior;
			}
		// ALTERAR QTD

		// ITENS NO CARRINHO
			if(isset($_SESSION['carrinho']['itens'])){ 
				foreach($_SESSION['carrinho']['itens'] as $key => $array){
					foreach($array as $ref => $value){
						$mysql->colunas = 'id, nome, foto, preco, preco3, data_promocional, categorias';
						$mysql->prepare = array($key);
						$mysql->filtro = " WHERE ".STATUS." ".PRODUTOS_ATIVOS." AND `id` = ? ";
						$item = $mysql->read_unico('produtos');

						if(isset($item->id)){
							$preco = $item->preco;

							// ATRIBUTOS
								$descricao = array();
								$filtro_combinacoes = '';
								for ($i=1; $i<=3; $i++) {
									$atributos = 'atributos_'.$i;
									if(isset($value->$atributos)){
										$descricao[] = rel('produtos_atributos', $value->$atributos);
										$filtro_combinacoes .= " AND produtos_atributos".$i." = '".$value->$atributos."' ";
									} else {
										$filtro_combinacoes .= " AND produtos_atributos".$i." = '' ";
									}
								}
								// COMBINACOES
									if($filtro_combinacoes){
										$return = verificar_estoque_atributos($item->id, $filtro_combinacoes, 1);
										if(isset($return['estoque'])){
											$preco = $return['preco']>0 ? $return['preco'] : $preco;
										}
									}
								// COMBINACOES
							// ATRIBUTOS

							// ATRIBUTOS EXTRA ADD NA HORA DA COMPRA
								if(isset($value->atributos_extra) AND $value->atributos_extra){
									$descricao[] = $value->atributos_extra;
								}
							// ATRIBUTOS EXTRA ADD NA HORA DA COMPRA

							/*
							// DESCONTOS
								// DESCONTOS POR QTD
									$descontos_qtd = array();
									// CATEGORIAS
										$mysql->coluna = 'id, qtd, preco, preco1';
										$mysql->filtro = " WHERE ".STATUS." AND `produtos1_cate` = '".$item->categorias."' AND produtos = 0 ORDER BY ".ORDER." ";
										$produtos_descontos_qtd = $mysql->read('produtos_descontos_qtd');
										foreach ($produtos_descontos_qtd as $key1 => $value1) {
											if($value1->preco>0){
												$descontos_qtd[$value1->qtd] = $value1->preco;
											} elseif($value1->preco1>0){
												$descontos_qtd[$value1->qtd] = ($preco*$value1->preco1)/100;
											}
										}
									// CATEGORIAS

									// PRODUTOS
										$mysql->coluna = 'id, qtd, preco';
										$mysql->filtro = " WHERE ".STATUS." AND `produtos` = '".$item->id."' AND produtos1_cate = 0 ORDER BY ".ORDER." ";
										$produtos_descontos_qtd = $mysql->read('produtos_descontos_qtd');
										foreach ($produtos_descontos_qtd as $key1 => $value1) {
											$descontos_qtd[$value1->qtd] = $value1->preco;
										}
									// PRODUTOS
									ksort($descontos_qtd);

									// Informacoes
									$desconto_qtd = 0;
									foreach ($descontos_qtd as $key1 => $value1) {
										if($key1<=$value->qtd){
											$desconto_qtd = $value1;
										}
									}

									// Desconto
									$preco = $preco-$desconto_qtd;
								// DESCONTOS POR QTD
								*/

								// DESCONTOS CRONOMETRO
									if($item->preco3 > 0 AND $item->data_promocional > date('Y-m-d H:i:s')){
										$preco = $preco - $item->preco3;
									}
								// DESCONTOS CRONOMETRO

								// DESCONTOS POR QTD PRODUTOS
									$descontos_qtd_produtos += $value->qtd;
								// DESCONTOS POR QTD PRODUTOS
							// DESCONTOS

							$count++;
							$subtotal += $value->qtd*$preco;
							$arr['itens'][$ref]['nome'] = $item->nome;
							$arr['itens'][$ref]['foto'] = DIR.'/web/fotos/'.FOTOS.( (isset($return['foto']) AND $return['foto']) ? $return['foto'] : $item->foto );
							$arr['itens'][$ref]['descricao'] = (isset($descricao) and $descricao) ? '<br><i class="fz14 fwn">('.implode(' / ', $descricao).')</i>' : '';
							$arr['itens'][$ref]['preco'] = preco($preco, 1);
							$arr['itens'][$ref]['qtd'] = $value->qtd;
							$arr['itens'][$ref]['subtotal'] = preco($value->qtd*$preco, 1);

							$arr['itens'][$ref]['rel_classe'] = sem('acentos_all_carrinho', $ref);
						}
					}
				}
			}
		// ITENS NO CARRINHO



		// ----------------------------------------------------------------------



		// ENDERECO
			if(isset($_SESSION['x_site']->id)){ 
				$mysql->prepare = array($_SESSION['x_site']->id);
				$mysql->filtro = " WHERE `cadastro` = ? AND `principal` = 1 ";
				$enderecos_principal = $mysql->read_unico('cadastro_enderecos');

				if(isset($enderecos_principal->id)){
					$arr['endereco_atual']  = '<div>'.$enderecos_principal->rua.', '.$enderecos_principal->numero.' '.$enderecos_principal->complemento.'</div>';
					$arr['endereco_atual'] .= '<div>'.$enderecos_principal->bairro.', '.$enderecos_principal->cidades.' / '.$enderecos_principal->estados.'</div>';
					$arr['endereco_atual'] .= '<div>CEP: '.$enderecos_principal->cep.'</div>';
					$arr['cep'] = $enderecos_principal->cep;

					$_SESSION['carrinho']['frete']['cep'] = $enderecos_principal->cep;
					$_SESSION['carrinho']['frete']['rua'] = $enderecos_principal->rua;
					$_SESSION['carrinho']['frete']['numero'] = $enderecos_principal->numero;
					$_SESSION['carrinho']['frete']['complemento'] = $enderecos_principal->complemento;
					$_SESSION['carrinho']['frete']['bairro'] = $enderecos_principal->bairro;
					$_SESSION['carrinho']['frete']['cidades'] = $enderecos_principal->cidades;
					$_SESSION['carrinho']['frete']['estados'] = $enderecos_principal->estados;

				} else {
					$mysql->colunas = 'id';
					$mysql->prepare = array($_SESSION['x_site']->id);
					$mysql->filtro = " WHERE `cadastro` = ? ";
					$enderecos_principal = $mysql->read_unico('cadastro_enderecos');
					if($enderecos_principal) {
						$arr['evento'] = "boxs('endereco_edit', 'ini=1'); ";
					} else {
						$arr['evento'] = "boxs('endereco_add'); ";
					}
				}
			}
		// ENDERECO


		// FRETE
			if(isset($arr['cep']) AND $arr['cep'] AND (!isset($_GET['pg']) OR $_GET['pg']=='carrinho') AND $_POST['tipo'] != 'carrinho_dados' ){
				// ATUALIZANDO NO PAGAMENTO
					// if($_POST['tipo'] == 'Pagamento' OR $_POST['tipo'] == 'qtd1'){
					if($_POST['tipo'] == 'Pagamento'){
						unset($_SESSION['frete_carrinho']);
					}
				// ATUALIZANDO NO PAGAMENTO
				$frete->valor_total = $subtotal;
				$frete->endereco = $arr['endereco_atual'];
				$return_frete = $frete->calcula_frete($arr['cep']);
				$arr['tipos_frete'] = $return_frete['tipos_frete'];
				$arr['frete_html'] = $return_frete['html'];
			}
		// FRETE

		// SELECIONAR FRETE
			if($_POST['tipo'] == 'frete'){
				if(isset($arr['tipos_frete']['valor'][$_POST['val']])){
					$_SESSION['carrinho']['frete']['valor'] = $arr['tipos_frete']['valor'][$_POST['val']];
					$_SESSION['carrinho']['frete']['tipo'] = $_POST['val'];

					if($_SESSION['carrinho']['frete']['valor']==''){
						unset($_SESSION['carrinho']['frete']['valor']);
					}
					$arr['evento'] = ' $(".box_'.$_POST['val'].'").show(); ';

				} else {
					unset($_SESSION['carrinho']['frete']);
					$arr['evento'] = ' $(".box_'.$_POST['val'].'").hide(); ';
				}
			}
			$arr['tipo_frete_atual'] = isset($_SESSION['carrinho']['frete']['tipo']) ? $_SESSION['carrinho']['frete']['tipo'] : '';
		// SELECIONAR FRETE

		// PRECO DO FRETE
			$frete = isset($_SESSION['carrinho']['frete']['valor']) ? $_SESSION['carrinho']['frete']['valor'] : '';
		// PRECO DO FRETE



		// ----------------------------------------------------------------------



		// DESCONTO
			// CREDITOS
				$desconto = isset($_SESSION['creditos']) ? $_SESSION['creditos'] : 0;
				$desconto_info = array();

				if(isset($_SESSION['desconto'])){
					foreach ($_SESSION['desconto'] as $key => $value) {
						if($key == 'cupons'){
							$mysql->colunas = 'id, nome, preco, preco1, frete';
							$mysql->prepare = array($value['id']);
							$mysql->filtro = " WHERE `status` = 1 AND `lang` = '".LANG."' AND `id` = ? ".cupons_filtro_data()." ";
							$cupons = $mysql->read_unico('cupons');
							if(isset($cupons->id)){
								$info = '<div class=cc_cuponss>>> Cupom: (#'.$cupons->id.') '.$cupons->nome.' (';
								$info1 = ')</div>';
								if($cupons->preco>0){ // Preco
									$desconto += $cupons->preco;
									$desconto_info[] = $info.preco($cupons->preco, 1).$info1;
								}
								if($cupons->preco1>0){ // Procentagem
									$desconto += $subtotal*($cupons->preco1/100);
									$desconto_info[] = $info.preco($cupons->preco1, 0, 2, ',', '.', 1).'%'.$info1;
								}
								if($cupons->frete AND isset($_POST['tipo_frete_atual']) and $_POST['tipo_frete_atual']=='pac' ){ // Frete
									$frete = '0.00';
									$_SESSION['carrinho']['frete']['valor'] = $frete;
									$_SESSION['carrinho']['frete']['tipo'] = 'pac';
									$desconto_info[] = $info.'Frete grátis!'.$info1;
								}
							}
						}
					}
				}
				// VERIFICANDO SE O CREDITO UTILIZADO EH MAIOR QUE O TOTAL
					$preco_final = $subtotal + numero($frete);
					if($preco_final<$desconto AND isset($_SESSION['creditos'])){
						$nao_creditos = $desconto - $_SESSION['creditos'];
						$_SESSION['creditos'] = $preco_final - $nao_creditos;
					}
				// VERIFICANDO SE O CREDITO UTILIZADO EH MAIOR QUE O TOTAL
			// CREDITOS

			// DESCONTOS POR QTD PRODUTOS
				/*
				$_SESSION['desconto']['descontos_qtd_produtos'] = 0;

				$mysql->coluna = 'id, qtd, preco';
				$mysql->filtro = " WHERE ".STATUS." AND qtd <= '".$descontos_qtd_produtos."' ORDER BY qtd DESC LIMIT 1 ";
				$produtos_promocoes = $mysql->read('produtos_promocoes');
				foreach ($produtos_promocoes as $key1 => $value1) {
					//$_SESSION['desconto']['descontos_qtd_produtos'] = $value1->preco;
					$desconto_info[] = 'Desconto de '.preco($value1->preco).'% para compra de '.$value1->qtd.' ou mais produtos';
					$desconto += ($value1->preco*$subtotal)/100;
				}
				*/
			// DESCONTOS POR QTD PRODUTOS

			// DESCONTO PRIMEIRA COMPRA
				/*
				if(isset($_SESSION['x_site']->id)){
					$mysql->coluna = 'id';
					$mysql->filtro = " WHERE cadastro = '".$_SESSION['x_site']->id."' LIMIT 1 ";
					$consulta = $mysql->read('pedidos');
					$primeira_compra = 1;
					foreach ($consulta as $key1 => $value1) {
						$primeira_compra = 0;
					}
					if($primeira_compra){
						$mysql->filtro = " where tipo = 'pagamentos' ";
						$pagamentos = $mysql->read_unico("configs");

						if($pagamentos->preco>0){
							//$_SESSION['desconto']['primiera_compra'] = $pagamentos->preco;
							$desconto_info[] = 'Desconto de '.preco($pagamentos->preco, 1).' para 1 primeira compra';
							$desconto += $pagamentos->preco;
						} elseif($pagamentos->preco1>0){
							//$_SESSION['desconto']['primiera_compra'] = $pagamentos->preco1;
							$desconto_info[] = 'Desconto de '.preco($pagamentos->preco1).'% para 1 primeira compra';
							$desconto += ($pagamentos->preco1*$subtotal)/100;
						}
					}
				}
				*/
			// DESCONTO PRIMEIRA COMPRA
		// DESCONTO


		// ----------------------------------------------------------------------



		// VALORES FINAIS E TOPO
			$arr['count'] = $count;
			$arr['desconto'] = preco($desconto, 1);
			$arr['desconto_n'] = $desconto;
			$arr['frete'] = $frete!='' ? preco($frete, 1) : '';
			$arr['frete_n'] = $frete ? $frete : 0;
			$arr['subtotal'] = preco($subtotal, 1);
			$total = $subtotal + numero($frete) - $desconto;
			$arr['total'] = $total>0 ? preco($total, 1) : 'R$ 0,00';
			$arr['total_numero'] = $total>0 ? $total : 0;
			$arr['preco_adicional'] = $preco_adicional;
		// VALORES FINAIS E TOPO


		// PARCELAMENTO
			$parcelamento_carrinho_cartao = parcelamento_carrinho_cartao($total - numero($frete), numero($frete));

			$arr['cartao_parcelamento'] = '';
			foreach ($parcelamento_carrinho_cartao as $key => $value) {
				$arr['cartao_parcelamento'] .= '<option value="'.$key.'">'.$key.'x de '.preco($value->valor, 1).' '.$value->juros.' ('.preco($value->valor_all, 1).')</option>';
			}
		// PARCELAMENTO


		// SESSION
			$_SESSION['carrinho']['desconto']['valor'] = $desconto;
			$_SESSION['carrinho']['desconto']['info'] = implode('<br>', $desconto_info);
		// SESSION





		// GRAVANDO ARQUIVO PARA CARRINHO ABANDONADO
		/*
			if(isset($_SESSION['x_site']->id) AND isset($_SESSION['carrinho']) AND !isset($_SESSION['carrinho_abandonado_gravado'])){

				// GRAVANDO JSON DO CARRINHO
	            $file = fopen(DIR_F."/plugins/Json/carrinho_abandonado/".PASTA.$_SESSION['x_site']->id.".json", 'w');
	            fwrite($file, json_encode($_SESSION['carrinho']));
	            fclose($file);

				$mysql->campo['carrinho_abandonado'] = 1;
				$mysql->filtro = " WHERE id = '".$_SESSION['x_site']->id."' ";
				$ult_id = $mysql->update('cadastro');

				$_SESSION['carrinho_abandonado_gravado'] = 1;
			}
		*/
		// GRAVANDO ARQUIVO PARA CARRINHO ABANDONADO



	if($_POST['tipo'] != 'carrinho_dados'){
		echo json_encode($arr);
	}
?>