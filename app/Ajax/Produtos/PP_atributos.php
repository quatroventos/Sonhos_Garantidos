<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['PP_atributos'] = '';
	$arr['PP_atributos_ini'] = 0;


		$mysql->colunas = "id, nome, codigo, categorias, marcas, estoque, preco, preco1, preco2, preco3, data_promocional, parcelas";
		$mysql->prepare = array($_POST['id']);
		$mysql->filtro = " WHERE ".STATUS." AND `id` = ? ORDER BY ".ORDER." ";
		$item = $mysql->read_unico('produtos');

		// Dados Iniciais
		$nome = $item->nome;
		$codigo = $item->codigo;
		$foto_thumbs = 0;
		$foto_atributos_plugin = 0;
		$foto_atributos_thumbs = 0;
		$categorias = '<a href="'.DIR.'/produtos/-/-/'.$item->categorias.'">'.rel('produtos1_cate', $item->categorias).'</a>';
		$marcas = '<a href="'.DIR.'/produtos/?marcas='.$item->marcas.'">'.rel('marcas', $item->marcas).'</a>';
		$estoque = $item->estoque;
		$preco = $item->preco;
		$preco1 = $item->preco1;
		$preco2 = $item->preco2;
		$parcelas = $item->parcelas;
		$preco3 = $item->preco3;
		$data_promocional = $item->data_promocional;








		// ATRIBUTOS
			$tem_abritubos = 0;
			$tem_abritubos_sel = 0;
			$filtro_combinacoes = '';
			$link_indisponivel = array();
			$atributos_array = array();
			$atrr_id = array();
			$categorias = array();
			// ATRIBUTOS CATEGORIAS
				$mysql->colunas = "id, estoque, produtos_atributos1, produtos_atributos2, produtos_atributos3";
				$mysql->filtro = " WHERE ".STATUS." AND `produtos`  = '".$item->id."' ORDER BY id asc LIMIT 1 ";
				$produtos_combinacoes = $mysql->read('produtos_combinacoes');
				foreach ($produtos_combinacoes as $key => $value) {
					foreach ($value as $key1 => $value1) {
						if(preg_match('(produtos_atributos)', $key1)){
							$categorias[$key1] = rel('produtos_atributos', $value1, 'categorias');
						}
					}
				}
			// ATRIBUTOS CATEGORIAS
			// ARRAY
				$mysql->colunas = "id, estoque, produtos_atributos1, produtos_atributos2, produtos_atributos3";
				$mysql->filtro = " WHERE ".STATUS." AND `produtos`  = '".$item->id."' ORDER BY id asc ";
				$produtos_combinacoes = $mysql->read('produtos_combinacoes');
				foreach ($produtos_combinacoes as $key => $value) {
					for ($i=1; $i <= 3; $i++) {
						$filtro_1 = $i==1;
						$filtro_2 = (isset($_POST['atributos_1'])) ? $i==2 AND $_POST['atributos_1']==$value->produtos_atributos1 : 0;
						$filtro_3 = (isset($_POST['atributos_1']) AND isset($_POST['atributos_2'])) ? $i==3 AND $_POST['atributos_1']==$value->produtos_atributos1 AND $_POST['atributos_2']==$value->produtos_atributos2 : 0;
						if( ($filtro_1) OR ($filtro_2) OR ($filtro_3) ){
							$attr = 'produtos_atributos'.$i;
							if($value->$attr){
								$tem_abritubos++;
								$atributos_array[$i][$value->$attr] = (object)array();
								$atributos_array[$i][$value->$attr]->nome = $value->$attr;
								$atributos_array[$i][$value->$attr]->estoque = $value->estoque;
								$atributos_array[$i][$value->$attr]->cor = rel('produtos_atributos', $value->$attr, 'cor');
								$atributos_array[$i][$value->$attr]->selected = '';
							}
							if(isset($_POST['atributos_'.$i]) AND $_POST['atributos_'.$i] == $value->$attr){
								$tem_abritubos_sel++;
								$atributos_array[$i][$value->$attr]->selected = 'selected';
								$atrr_id[$i] = $value->$attr;

								$attributo = 'Atributo '.str_pad($i, 2, 0, STR_PAD_LEFT);
								$link_indisponivel[] = $attributo.': '.$value->$attr;
							}
						}
					}
				}
			// ARRAY
			// FILTRO COMBINADOS
				for ($i=1; $i <= 3; $i++) {
					if(isset($atrr_id[$i])){
						$filtro_combinacoes .= " AND produtos_atributos".$i." = '".$atrr_id[$i]."' ";
					} else {
						$filtro_combinacoes .= " AND produtos_atributos".$i." = '' ";
					}
				}
			// FILTRO COMBINADOS
			// ORDENAR
				foreach ($atributos_array as $key => $value) {
					ksort($atributos_array[$key]);
				}
			// ORDENAR

			// HTML
				$arr['PP_atributos'] .= mostrar_atributos($atributos_array, $item, $categorias);
			// HTML

			// COMBINACOES
				$mysql->filtro = " WHERE ".STATUS." AND `produtos` = '".$item->id."' ".$filtro_combinacoes." ORDER BY ".ORDER." LIMIT 1 ";
				$produtos_combinacoes = $mysql->read('produtos_combinacoes');
				foreach ($produtos_combinacoes as $key => $value) {
					$nome = $value->nome ? $value->nome : $nome;
					$codigo = $value->codigo ? $value->codigo : $codigo;
					$ex = explode(',', $_POST['atributos_thumbs']);
					foreach ($ex as $key1 => $value1) {
						$ex1 = explode('_', $value1);
						if(isset($ex1[0]) AND $ex1[0] == $value->id){
							$ex = explode('_', $value1);
							$foto_thumbs = $ex1[1];
							$foto_atributos_thumbs = $value->id;
						}
					}
					$estoque = $value->estoque;
					if($value->preco>0){
						$preco =  $value->preco;
						$preco1 = $value->preco1;
						$preco2 = $value->preco2;
						$parcelas = $value->parcelas;
					}
				}

				// THUMBS (se n achar nenhum -> buscar pela cor)
					if(!$foto_thumbs AND isset($_POST['atributos_2'])){
						$mysql->filtro = " WHERE ".STATUS." AND foto != '' AND `produtos` = '".$item->id."' AND produtos_atributos1 = '".$_POST['atributos_1']."' AND produtos_atributos2 = '".$_POST['atributos_2']."' ORDER BY id ASC LIMIT 1 ";
						$produtos_combinacoes_thumbs = $mysql->read('produtos_combinacoes');
						foreach ($produtos_combinacoes_thumbs as $key => $value) {
							$ex = explode(',', $_POST['atributos_thumbs']);
							foreach ($ex as $key1 => $value1) {
								$ex1 = explode('_', $value1);
								if(isset($ex1[0]) AND $ex1[0] == $value->id){
									$ex = explode('_', $value1);
									$foto_thumbs = $ex1[1];
									$foto_atributos_thumbs = $value->id;
								}
							}
						}
					}
					if(!$foto_thumbs AND isset($_POST['atributos_1'])){
						$mysql->filtro = " WHERE ".STATUS." AND foto != '' AND `produtos` = '".$item->id."' AND produtos_atributos1 = '".$_POST['atributos_1']."' ORDER BY id ASC LIMIT 1 ";
						$produtos_combinacoes_thumbs = $mysql->read('produtos_combinacoes');
						foreach ($produtos_combinacoes_thumbs as $key => $value) {
							$ex = explode(',', $_POST['atributos_thumbs']);
							foreach ($ex as $key1 => $value1) {
								$ex1 = explode('_', $value1);
								if(isset($ex1[0]) AND $ex1[0] == $value->id){
									$ex = explode('_', $value1);
									$foto_thumbs = $ex1[1];
									$foto_atributos_thumbs = $value->id;
								}
							}
						}
					}
				// THUMBS (se n achar nenhum -> buscar pela cor)

				// PLUGIN ATRIBUTOS (FOTOS)
					if(isset($_POST['atributos_1'])){
						$mysql->filtro = " WHERE ".STATUS." AND foto != '' AND `produtos` = '".$item->id."' AND produtos_atributos1 = '".$_POST['atributos_1']."' ORDER BY id ASC LIMIT 1 ";
						$produtos_combinacoes_thumbs = $mysql->read('produtos_combinacoes');
						foreach ($produtos_combinacoes_thumbs as $key => $value) {
							$ex = explode(',', $_POST['atributos_thumbs']);
							foreach ($ex as $key1 => $value1) {
								$ex1 = explode('_', $value1);
								if(isset($ex1[0]) AND $ex1[0] == $value->id){
									$ex = explode('_', $value1);
									$foto_atributos_plugin = $value->id;
								}
							}
						}
					}
				// PLUGIN ATRIBUTOS (FOTOS)
			// COMBINACOES
		// ATRIBUTOS










		/*
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
			$desconto = '';
			$desconto_qtd = 0;
			$arr['PP_descontos_qtd'] = '';
			foreach ($descontos_qtd as $key1 => $value1) {
				if($key1<=$_POST['qtd']){
					$desconto_qtd = $value1;
				}
				$desconto .= '<div class="wr6 p5 tac bdb_DFDFDF bdr_DFDFDF">'.$key1.'</div><div class="wr6 p5 tac bdb_DFDFDF">'.preco($preco-$value1, 1).'</div>';
			}
			$desconto .= $desconto ? '<div class="clear"></div>' : '';

			$arr['PP_descontos_qtd'] = '';
			if($desconto){
				$arr['PP_descontos_qtd'] .= '<div class="pt10"> ';
					$arr['PP_descontos_qtd'] .= '<div class="bd_DFDFDF br2"> ';
						$arr['PP_descontos_qtd'] .= '<div class="wr6 p5 tac back_DFDFDF">A Partir de</div> ';
						$arr['PP_descontos_qtd'] .= '<div class="wr6 p5 tac back_DFDFDF">Pague</div> ';
						$arr['PP_descontos_qtd'] .= $desconto;
						$arr['PP_descontos_qtd'] .= '<div class="clear"></div> ';
					$arr['PP_descontos_qtd'] .= '</div> ';
				$arr['PP_descontos_qtd'] .= '</div> ';
			}

			// Desconto
			$preco = $preco-$desconto_qtd;
			$preco2 = $preco2-$desconto_qtd;
		// DESCONTOS POR QTD
		*/









		// DESCONTOS CRONOMETRO
			if($data_promocional > date('Y-m-d H:i:s')){
				$preco = $preco - $preco3;
				$preco2 = $preco2 - $preco3;
			}
		// DESCONTOS CRONOMETRO





		// PARCELAMENTO
			$mysql->filtro = " WHERE `tipo` = 'pagamentos' ";
			$conta = $mysql->read_unico("configs");
			$pagarme_max_parcelas = isset($conta->pagarme_max_parcelas) ? ($conta->pagarme_max_parcelas>=0 ? 1 : $conta->pagarme_max_parcelas) : 1;

			$parcelado_all = '';
			for ($i=1; $i <= $pagarme_max_parcelas; $i++) { 
				$parcelado_all .= '<div class="">'.$i.'x de XXXX</div>';
			}
		// PARCELAMENTO





		// DADOS
			$arr['PP_nome'] = $nome ? $nome : '';
			$arr['PP_codigo'] = $codigo ? $codigo : '';
			$arr['PP_foto_thumbs'] = $foto_thumbs;
			$arr['PP_foto_atributos_plugin'] = $foto_atributos_plugin;
			$arr['PP_foto_atributos_thumbs'] = $foto_atributos_thumbs;
			$arr['PP_estoque'] = $estoque;
			$arr['PP_preco'] = $preco>0 ? preco($preco, 1) : '';
			$arr['PP_preco0'] = $preco>0 ? 'Por: <b class="c_vermelho">'.preco($preco, 1).'</b>' : '';
			$arr['PP_preco1'] = $preco1>0 ? preco($preco1, 1) : '';
			$arr['PP_parcela'] = ($parcelas>0) ? $parcelas : '';
			$arr['PP_preco_parcelado'] = ($parcelas>0) ? iff($preco2>0, preco($preco2/$parcelas, 1), preco($preco/$parcelas, 1)) : '';
			$arr['PP_preco_juros'] = $preco2>$preco ? '' : 'sem juros';
			$arr['PP_preco_economize'] = ($preco1>0 AND $preco1>$preco) ? preco($preco1-$preco, 1) : '';
			$arr['PP_preco_parcelado_all'] = $parcelado_all;

			$arr['PP_parcelas_varios'] = '';
			if($parcelas>0){
				for ($i=1; $i <= $parcelas; $i++) { 
					$arr['PP_parcelas_varios'] .= '<div>'.$i.'x de <span>'.iff($preco2>0, preco($preco2/$i, 1), preco($preco/$i, 1)).' </span> '.iff(($preco2>0 AND $i>1), 'com', 'sem').' juros</div>';
				}
			}

			$arr['PP_comprar'] = 0;
			$arr['PP_link_indisponivel'] = "";

			if($estoque>0){
				$arr['PP_comprar'] = 1;
			} else {
				if(($tem_abritubos==0 AND $tem_abritubos_sel==0) OR $tem_abritubos_sel){
					$arr['PP_link_indisponivel'] = "boxs('aviseme', 'id=".$item->id."&atributos=".implode(', ', $link_indisponivel)."')";
				} else {
					$arr['PP_comprar'] = 1;
				}
			}

			$arr['PP_categorias'] = $categorias;
			$arr['PP_marcas'] = $marcas;
		// DADOS


	echo json_encode($arr);

?>