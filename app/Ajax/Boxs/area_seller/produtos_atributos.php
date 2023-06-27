<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();

		$table = $table1 = 'produtos';

		if(isset($_SESSION['x_site']->id) and $_SESSION['x_site']->id){

			if(isset($_POST['gravar']) and $_POST['gravar'] AND isset($_POST['id']) and $_POST['id']){
				$mysql->filtro = " WHERE ".STATUS." AND id = '".$_POST['id']."' AND seller = '".$_SESSION['x_site']->id."' ORDER BY ".ORDER." ";
				$item = $mysql->read_unico($table);
				if(isset($item->id)){

					$produtos_combinacoes_id = $_POST['produtos_combinacoes_id'] ? $_POST['produtos_combinacoes_id'] : 0;

					unset($mysql->campo);
					$mysql->campo['lang'] = LANG;

					$mysql->campo['produtos'] = $item->id;
					$mysql->campo['preco1'] = $_POST['boxx']['produtos_combinacoes']['preco1'][$produtos_combinacoes_id];
					$mysql->campo['preco'] = $_POST['boxx']['produtos_combinacoes']['preco'][$produtos_combinacoes_id];
					$mysql->campo['estoque'] = $_POST['boxx']['produtos_combinacoes']['estoque'][$produtos_combinacoes_id];
					$mysql->campo['produtos_atributos1'] = $_POST['boxx']['produtos_combinacoes']['produtos_atributos1'][$produtos_combinacoes_id];
					$mysql->campo['produtos_atributos2'] = $_POST['boxx']['produtos_combinacoes']['produtos_atributos2'][$produtos_combinacoes_id];

					if($produtos_combinacoes_id){
		            	$mysql->prepare = array($produtos_combinacoes_id);
	                	$mysql->filtro = " WHERE `id` = ? AND produtos = '".$item->id."' ";
	                	$arr['ult_id'] = $mysql->update('produtos_combinacoes');
	                } else {
	                	$arr['ult_id'] = $mysql->insert('produtos_combinacoes');
	                }

	                // UPLOAD FOTO
						$ids_fotos_para_crop = array();
						$erro_dimencao_foto = '';

						$foto['name'] = $_FILES['boxx']['name']['produtos_combinacoes']['foto'][$produtos_combinacoes_id];
						$foto['type'] = $_FILES['boxx']['type']['produtos_combinacoes']['foto'][$produtos_combinacoes_id];
						$foto['tmp_name'] = $_FILES['boxx']['tmp_name']['produtos_combinacoes']['foto'][$produtos_combinacoes_id];
						$foto['error'] = $_FILES['boxx']['error']['produtos_combinacoes']['foto'][$produtos_combinacoes_id];
						$foto['size'] = $_FILES['boxx']['size']['produtos_combinacoes']['foto'][$produtos_combinacoes_id];
						unset($_FILES);
						$_FILES['foto'] = $foto;

			            if(isset($_FILES)){
				            $upload = new Upload();
			            	$nome_foto = $upload->fileUpload($arr['ult_id'], '../../../../', 0, 0, 'produtos_combinacoes');

			            	if(isset($_FILES['foto']['size']) AND $_FILES['foto']['size']){
			            		if(isset($nome_foto[0]) AND $nome_foto[0]){
			            			$ids_fotos_para_crop = array(0);
			            		} else {
									$erro_dimencao_foto = '&erro_dimencao_foto=1';
			            		}
			            	}
			            }
	                // UPLOAD FOTO

		            $ids = $ids_fotos_para_crop ? implode(',', $ids_fotos_para_crop) : 'none';

					$arr['alert'] = 'Cadastrado com Sucesso!';
					$arr['evento'] = 'fechar_all(); window.parent.location = "'.DIR.'/minha_conta/'.$table1.'/?crop_fotos='.$arr['ult_id'].'&crop_table=produtos_combinacoes&ids='.$ids.$erro_dimencao_foto.'" ';

				}







			} else {
				$input = new Input();

                $mysql->prepare = array($_POST['id']);
                $mysql->filtro = " WHERE ".STATUS." AND id = ? AND seller = '".$_SESSION['x_site']->id."' ";
				$item = $mysql->read_unico($table);
				if(isset($item->id)){
					$input->value = $item;
				}

				$mysql->filtro = " WHERE ".STATUS." AND produtos = '".$item->id."' ORDER BY id ASC, ".ORDER." ";
				$produtos_combinacoes = $mysql->read('produtos_combinacoes');

				$arr['title'] = 'Atributos (Produtos)';
				$arr['html']  = '<div class="w900 p20 w100p_900 br10">
									<div class="pb15"><a onclick="$('.A.'.produtos_combinacoes_all'.A.').hide(); $('.A.'.produtos_combinacoes_0'.A.').show();" class="botao br5">Novo Atributo</a></div>

									<div class="produtos_combinacoes_all">';
										foreach ($produtos_combinacoes as $key => $value) {
											$arr['html']  .= '<div class="posr p10 mb10 vat bd_ccc back_fff br5"> ';
												$arr['html']  .= '<a onclick="$('.A.'.produtos_combinacoes_all'.A.').hide(); $('.A.'.produtos_combinacoes_'.$value->id.A.').show();" class="posa t0 r0 w20 h20 mr22 fz18 fwb tac cor_666" style="margin-top: -4px;"><i class="faa-edit"></i></a> ';
												$arr['html']  .= '<a onclick="deletee('.A.DIR.'/minha_conta/'.$table.'/?excluir_atributo='.$value->id.'&item='.$item->id.A.');" class="posa t0 r0 w20 h20 mr2 fz18 fwb tac c_vermelho" style="margin-top: -4px;">X</a> ';
												$arr['html']  .= '<div class="flexx"> ';
													$arr['html']  .= '<div class="flex_1 tac"><div class="fwb">Cor:</div>'.rel('produtos_atributos', $value->produtos_atributos1).'</div> ';
													$arr['html']  .= '<div class="flex_1 tac"><div class="fwb">Tamanho:</div>'.rel('produtos_atributos', $value->produtos_atributos2).'</div> ';
													$arr['html']  .= '<div class="flex_1 tac"><div class="fwb">Foto:</div>'.($value->foto ? '<a href="'.DIR.'/web/fotos/'.$value->foto.'" target="_blank"><img src="'.DIR.'/web/fotos/'.$value->foto.'" class="max-w40 m-a bd_eee" /></a>' : '').'</div> ';
													$arr['html']  .= '<div class="flex_1 tac"><div class="fwb">Preço (de):</div>'.preco($value->preco1, 1).'</div> ';
													$arr['html']  .= '<div class="flex_1 tac"><div class="fwb">Preço Atual:</div>'.preco($value->preco, 1).'</div> ';
													$arr['html']  .= '<div class="flex_1 tac"><div class="fwb">Estoque:</div>'.$value->estoque.'</div> ';
												$arr['html']  .= '</div> ';
											$arr['html']  .= '</div> ';
										}
				$arr['html']  .= '	</div>
									<div class="clear"></div>

									<div class="">';
										$rel = 'produtos_combinacoes';

										// ITENS DUPLICADOS (ID = X E ID = 0) *SE FOR MODIFICAR TEM Q MODIFICAR NOS DOIS (produtos_combinacoes_0 ABAIXO)
										foreach ($produtos_combinacoes as $key => $value) {
											$value1 = $value;
											$return = '';
											include DIR_F.'/admin/app/Ajax/Boxx/produtos_combinacoes.php';
				$arr['html']  .= '			<div class="dn produtos_combinacoes_'.$value->id.'">
												<form id="formm_'.$value->id.'" method="post" action="'.$_SERVER['SCRIPT_NAME'].'" enctype="multipart/form-data">
													<input type="hidden" name="id" value="'.(isset($item->id) ? $item->id : '0').'" >
													<input type="hidden" name="produtos_combinacoes_id" value="'.$id.'" >
													<ul class="produtos_combinacoes p10 pb0 bd_ccc br5">'.$return.'<li class="m0 clear"></li></ul>
													<div class="p10 tac">
														<button class="dib w200 design p10 '.BUTTON1.' br0 hover2 hoverr4">Salvar</button>
													</div>
													<input type="hidden" name="gravar" value="1">
												</form>
												<script>ajaxForm('.A.'formm_'.$value->id.A.');</script>
											</div> ';
										}

										// NOVO
											$value1 = (object)array();
											$value1->id = '';
											$return = '';
											include DIR_F.'/admin/app/Ajax/Boxx/produtos_combinacoes.php';
				$arr['html']  .= '			<div class="dn produtos_combinacoes_0">
												<form id="formm_0" method="post" action="'.$_SERVER['SCRIPT_NAME'].'" enctype="multipart/form-data">
													<input type="hidden" name="id" value="'.(isset($item->id) ? $item->id : '0').'" >
													<input type="hidden" name="produtos_combinacoes_id" value="'.$id.'" >
													<ul class="produtos_combinacoes p10 pb0 bd_ccc br5">'.$return.'<li class="m0 clear"></li></ul>
													<div class="p10 tac">
														<button class="dib w200 design p10 '.BUTTON1.' br0 hover2 hoverr4">Salvar</button>
													</div>
													<input type="hidden" name="gravar" value="1">
												</form>
												<script>ajaxForm('.A.'formm_0'.A.');</script>
											</div> ';
										// NOVO

				$arr['html']  .= '	</div>
									<div class="clear"></div>

									<style>
										.produtos_combinacoes li { margin-bottom: 20px; }
										.produtos_combinacoes span.posa { display: none; }
										.finput select { font-size: 12px; }
										.finput input { font-size: 12px; }
										.finput_foto_files span { display: none; }
										.finput_foto_files .pop_file { display: none; }
									</style>

								</div> ';
			}




		} else {
			$arr['erro'][] = 'Você precisa está logado!';
		}

	echo json_encode($arr); 

?>