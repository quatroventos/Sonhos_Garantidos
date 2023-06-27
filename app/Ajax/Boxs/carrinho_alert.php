<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = 0;

		if(isset($_POST['id']) and $_POST['id']){

			$mysql->filtro = " where id = '".$_POST['id']."' ";
			$produtos = $mysql->read_unico('produtos');

			// COMBINACOES
				$descricao = array();
				$filtro_combinacoes = '';
				for ($i=1; $i<=3; $i++) {
					if(isset($_POST['atributos_'.$i]) AND $_POST['atributos_'.$i]){
						$descricao[] = nome_atributos($i, $_POST['atributos_'.$i]);
						$filtro_combinacoes .= " AND produtos_atributos".$i." = '".$_POST['atributos_'.$i]."' ";
					} else {
						$filtro_combinacoes .= " AND produtos_atributos".$i." = '' ";
					}
				}

				if($filtro_combinacoes){
					$return = verificar_estoque_atributos($produtos->id, $filtro_combinacoes, 1);
				}
			// COMBINACOES

			$arr['title'] = 'Produto Adicionado!';
			$arr['html']  = '<div class="p10">
								<div class="w400 m-a p20 pt15 cor_333 w100p_400">
									<div class="wf6"> <a href="'.url('produto', $produtos).'"><img src="'.(DIR.'/web/fotos/'.FOTOS.( (isset($return['foto']) AND $return['foto']) ? $return['foto'] : $produtos->foto )).'" class="w100p"></a> </div>
									<div class="wf6 pt20 pl10 fz20 fwb"> <a href="'.url('produto', $produtos).'" class="cor_666">'.$produtos->nome.' '.((isset($descricao) and $descricao) ? '<br><i class="fz14 fwn">('.implode(' / ', $descricao).')</i>' : '').'</a> </div>
									<div class="clear h15"></div>
									<div class="wf7 tac pr5"> <a href="javascript:fechar_all()" class="db botao pl5 pr5 cor_666"> <i class="cor_666 faa-reply"></i> Continuar Comprando</a> </div>
									<div class="wf5 tac"> <a href="'.DIR.'/carrinho/" class="db botao pl5 pr5 cor_666"> <i class="cor_35AA47 faa-shopping-cart"></i> Ir pro carrinho</a> </div>
									<div class="clear h5"></div>
							    </div>
						    </div> ';

		}

	echo json_encode($arr); 

?>