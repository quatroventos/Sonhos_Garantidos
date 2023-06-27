<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();

		$table = $table1 = 'produtos';

		if(isset($_SESSION['x_site']->id) and $_SESSION['x_site']->id){

			if(isset($_POST['gravar']) and $_POST['gravar']){
				$mysql->filtro = " WHERE ".STATUS." AND id = '".$_POST['id']."' AND seller = '".$_SESSION['x_site']->id."' ORDER BY ".ORDER." ";
				$item = $mysql->read_unico($table);
				if(isset($item->id)){

					unset($mysql->campo);
					$mysql->campo['lang'] = LANG;

	            	$mysql->prepare = array($item->id);
	                $mysql->filtro = " WHERE `id` = ? AND seller = '".$_SESSION['x_site']->id."' ";
	                $arr['ult_id'] = $mysql->update($table);


					$ids_fotos_para_crop = array();
					$erro_dimencao_foto = '';

		            $upload = new Upload();
		            if(isset($_FILES)){
		            	$nome_foto = $upload->fileUpload($arr['ult_id'], '../../../../');

		            	if(isset($_FILES['foto'])){
		            		if(isset($nome_foto[0]) AND $nome_foto[0]){
		            			$ids_fotos_para_crop = array(0);
		            		} else {
								$erro_dimencao_foto = '&erro_dimencao_foto=1';
		            		}
		            	}
		            }

		            if(isset($_FILES['mais_fotos']) AND $_FILES['mais_fotos']){
						for ($i=0; $i < 100; $i++) {
		            		unset($_FILES['foto']);
							if(isset($_FILES['mais_fotos']['name'][$i]) AND isset($_FILES['mais_fotos']['type'][$i]) AND isset($_FILES['mais_fotos']['tmp_name'][$i]) AND isset($_FILES['mais_fotos']['error'][$i]) AND isset($_FILES['mais_fotos']['size'][$i])){
								$_FILES['foto']['name'] = $_FILES['mais_fotos']['name'][$i];
								$_FILES['foto']['type'] = $_FILES['mais_fotos']['type'][$i];
								$_FILES['foto']['tmp_name'] = $_FILES['mais_fotos']['tmp_name'][$i];
								$_FILES['foto']['error'] = $_FILES['mais_fotos']['error'][$i];
								$_FILES['foto']['size'] = $_FILES['mais_fotos']['size'][$i];
							}
							if(isset($_FILES['foto'])){
								unset($mysql->campo);
					            $mysql->campo['tabelas'] = $table1;
					            $mysql->campo['item'] = $arr['ult_id'];
					            $ult_id = $mysql->insert('mais_fotos');

					            $upload = new Upload();
					            if(isset($_FILES)){
					            	$nome_foto = $upload->fileUpload($ult_id, '../../../../', 0, 0, 'mais_fotos');

					            	if(isset($nome_foto[0]) AND $nome_foto[0]){
							            $ids_fotos_para_crop[] = $ult_id;
							        } else {
							        	$erro_dimencao_foto = '&erro_dimencao_foto=1';
										$mysql->filtro = " WHERE id = '".$ult_id."' ";
										$mysql->delete('mais_fotos');
							        }
					            }
							}
						}
		            }

		            $ids = $ids_fotos_para_crop ? implode(',', $ids_fotos_para_crop) : 'none';

					$arr['alert'] = 'Cadastrado com Sucesso!';
					$arr['evento'] = 'fechar_all(); window.parent.location = "'.DIR.'/minha_conta/'.$table1.'/?crop_fotos='.$arr['ult_id'].'&crop_table=produtos&ids='.$ids.$erro_dimencao_foto.'" ';

				}







			} else {
				$input = new Input();

                $mysql->prepare = array($_POST['id']);
                $mysql->filtro = " WHERE ".STATUS." AND id = ? AND seller = '".$_SESSION['x_site']->id."' ";
				$item = $mysql->read_unico($table);
				if(isset($item->id)){
					$input->value = $item;
				}

				$mysql->filtro = " WHERE ".STATUS." AND tabelas = '".$table."' AND item = '".$item->id."' ORDER BY id ASC, ".ORDER." ";
				$mais_fotos = $mysql->read('mais_fotos');

				$arr['title'] = 'Meus Imóveis';
				$arr['html']  = '<form id="formm" method="post" action="'.$_SERVER['SCRIPT_NAME'].'" enctype="multipart/form-data">
									<div class="w800 p20 w100p_800 br10">
										<input type="hidden" name="id" value="'.(isset($item->id) ? $item->id : '0').'" >

										<div class="wr6 p10">
											<span class="db pb4">
												Foto Principal
											</span>
											<div class="p10 fz12 bd_ccc back_fff br2">
												<input type="file" name="foto" >
											</div>
										</div>
										<div class="wr6 p10">
											<span class="db pb4">
												Mais Fotos
											</span>
											<div class="p10 fz12 bd_ccc back_fff br2">
												<input type="file" name="mais_fotos[]" multiple >
											</div>
										</div>
										<div class="clear"></div>
										<div class="fz16 fwb tac c_vermelho">*Tamanho mínimo para cadastrar as fotos: 600x600</div> ';


										if(isset($item->foto) AND $item->foto){
				$arr['html']  .= '			<div class="wr3 p10">
												<span class="db pb4">
													Foto Principal
												</span>
												<div class="dib p10 bd_ccc back_fff br2">
													<a href="'.DIR.'/web/fotos/'.$item->foto.'" target="_blank"><img src="'.DIR.'/web/fotos/'.$item->foto.'" class="max-w140" /></a>
												</div>
											</div> ';
										}
										if($mais_fotos){
				$arr['html']  .= '			<div class="wr9 p10">
												<span class="db pb4">
													Mais Fotos
												</span> ';
												foreach ($mais_fotos as $key => $value) {
													$arr['html']  .= '<div class="posr dib p10 mb10 mr10 vat bd_ccc back_fff br2"> ';
														$arr['html']  .= '<a onclick="deletee('.A.DIR.'/minha_conta/'.$table.'/?excluir_mais_fotos='.$value->id.'&item='.$item->id.A.');" class="posa t0 r0 w20 h20 mt2 mr2 fz14 lh18 fwb tac c_vermelho bd_666 back_fff br50p">X</a> ';
														$arr['html']  .= ( (isset($value->foto) AND $value->foto) ? '<a href="'.DIR.'/web/fotos/'.$value->foto.'" target="_blank"><img src="'.DIR.'/web/fotos/'.$value->foto.'" class="max-w140" /></a>' : '' );
													$arr['html']  .= '</div> ';
												}
				$arr['html']  .= '			</div> ';
										}
				$arr['html']  .= '		<div class="clear"></div> ';


				$arr['html']  .= '		<div class="p10 tac">
											<button class="dib w200 design p10 '.BUTTON1.' br0 hover2 hoverr4">Salvar</button>
										</div>
										<div class="clear"></div>

										<input type="hidden" name="gravar" value="1">
									</div>

								</form>
								<script>ajaxForm('.A.'formm'.A.');</script> ';
			}




		} else {
			$arr['erro'][] = 'Você precisa está logado!';
		}

	echo json_encode($arr); 

?>