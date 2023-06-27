<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();

		if(isset($_SESSION['seller']) and $_SESSION['seller']){

			if(isset($_POST['gravar']) and $_POST['gravar']){
				$table = 'produtos';

				$mysql->filtro = " WHERE `id` = '".$_SESSION['seller']."' ";
				$seller_pd = $mysql->read_unico(SELLER);

				$mysql->filtro = " WHERE ".STATUS." AND id = '".$_POST['id']."' AND seller = '".$seller_pd->id."' ORDER BY ".ORDER." ";
				$item = $mysql->read_unico($table);
				if(isset($item->id) OR $_POST['id']==0){

					unset($mysql->campo);
		            $mysql->campo['nome'] = isset($_POST['nome']) ? $_POST['nome'] : '';
		            $mysql->campo['preco1'] = isset($_POST['preco1']) ? $_POST['preco1'] : '';
		            $mysql->campo['preco'] = isset($_POST['preco']) ? $_POST['preco'] : '';
		            $mysql->campo['categorias'] = isset($_POST['categorias']) ? $_POST['categorias'] : '';
		            $mysql->campo['marcas'] = isset($_POST['marcas']) ? $_POST['marcas'] : '';
		            $mysql->campo['estoque'] = isset($_POST['estoque']) ? $_POST['estoque'] : '';
		            $mysql->campo['peso'] = isset($_POST['peso']) ? $_POST['peso'] : '';
		            $mysql->campo['comprimento'] = isset($_POST['comprimento']) ? $_POST['comprimento'] : '';
		            $mysql->campo['largura'] = isset($_POST['largura']) ? $_POST['largura'] : '';
		            $mysql->campo['altura'] = isset($_POST['altura']) ? $_POST['altura'] : '';

		            if($_POST['id']==0){
		            	$mysql->campo['seller'] = $seller_pd->id;
						$arr['ult_id'] = $mysql->insert($table);

		            } else {
		            	$mysql->prepare = array($item->id);
		                $mysql->filtro = " WHERE `id` = ? AND seller = '".$seller_pd->id."' ";
		                $arr['ult_id'] = $mysql->update($table);
		            }


		            $upload = new Upload();
		            if(isset($_FILES)) $upload->fileUpload($arr['ult_id'], '../../../../');


	                // Gravando do Editor
		            $ex = explode('<div style="display: none xxx-'.rand().'">', $_POST['txt_editor']);
		            $_POST['txt_editor'] = $ex[0].'<div style="display: none xxx-'.rand().'"></div>';
					$_POST['txt_editor'] = str_replace('<body', '<bodyXXX', $_POST['txt_editor']);
					$_POST['txt_editor'] = str_replace('body>', 'bodyXXX>', $_POST['txt_editor']);
					$_POST['txt_editor'] = str_replace('class=', 'classXXX=', $_POST['txt_editor']);
	                editor_gravar($table, $arr['ult_id']);


					//$arr['alert'] = 'CADASTRO EDITADO COM SUCESSO!';
					$arr['alert'] = 'z';
					$arr['evento'] = 'setTimeout(function(){ window.parent.location = "'.DIR.'/minha_conta/'.$table.'/?ir=PRINCIPALL'.($_POST['id']==0 ? '&irr=FOTOS_'.$arr['ult_id'] : '').'"; }, 200); ';
				}







			} else {
				$input = new Input();

                $mysql->prepare = array($_POST['id']);
                $mysql->filtro = " WHERE ".STATUS." AND id = ? AND seller = '".$_SESSION['seller']."' ";
				$item = $mysql->read_unico('produtos');
				if(isset($item->id)){
					$input->value = $item;
				}

				$mysql->filtro = " WHERE ".STATUS." AND `tipo` = 0 AND star = 1 ORDER BY ".ORDER." ";
				$produtos1_cate = $mysql->read('produtos1_cate');
				foreach($produtos1_cate as $value){
					$mysql->filtro = " WHERE ".STATUS." AND `subcategorias` = '".$value->id."' ORDER BY ".ORDER." ";
					$produtos1_subcate[$value->id] = $mysql->read('produtos1_cate');
					foreach($produtos1_subcate[$value->id] as $value1){
						$mysql->filtro = " WHERE ".STATUS." AND `subcategorias` = '".$value1->id."' ORDER BY ".ORDER." ";
						$produtos1_subcate1[$value1->id] = $mysql->read('produtos1_cate');
					}
				}

				$mysql->filtro = " WHERE ".STATUS." ORDER BY ".ORDER." ";
				$marcas = $mysql->read('marcas');

				$arr['title'] = 'Produtos';
				$arr['html']  = '<form id="formm" method="post" action="'.$_SERVER['SCRIPT_NAME'].'">
									<div class="w800 p20 w100p_800 br10">
										<input type="hidden" name="id" value="'.(isset($item->id) ? $item->id : '0').'" >

										<div class="wr12 p10">
											<span class="db pb4">Nome*</span>
											<input type="text" name="nome" class="w100p design fz14" value="'.(isset($item->nome) ? $item->nome : '').'" required>
										</div>
										<div class="clear"></div>



										<div class="wr4 p10">
											<span class="db pb4">
												Tabela de Medidas*
												'.( (isset($item->foto1) AND $item->foto1) ? '<a href="'.DIR.'/web/fotos/'.$item->foto1.'" class="c_azul link" target="_blank">Ver Foto</a>' : '' ).'
											</span>
											<div class="h40 pt5 pl10 pr10 fz12 o-h bd_ccc back_fff br5"  rel="tooltip" data-original-title="1MB (Tamanho Máxima)">
												<input type="file" name="foto1" >
											</div>
										</div>
										<div class="wr4 p10">
											<span class="db pb4">Categoria</span>
											<select name="categorias" class="design">
												<option>Selecione...</option> ';
												foreach ($produtos1_cate as $key => $value) {
													if($produtos1_subcate[$value->id]){
														$arr['html'] .= '<optgroup label="'.$value->nome.'"> ';
															foreach ($produtos1_subcate[$value->id] as $key1 => $value1) {
																$arr['html'] .= '<option value="'.$value1->id.'" '.( (isset($item->categorias) AND $item->categorias==$value1->id) ? 'selected' : '' ).'>'.$value1->nome.'</option> ';
																foreach ($produtos1_subcate1[$value1->id] as $key2 => $value2) {
																	$arr['html'] .= '<option value="'.$value2->id.'" '.( (isset($item->categorias) AND $item->categorias==$value2->id) ? 'selected' : '' ).'>-- '.$value2->nome.'</option> ';
																}
															}
														}
													$arr['html'] .= '</optgroup> ';
												}
				$arr['html'] .= '			<select>
										</div>
										<div class="wr4 p10">
											<span class="db pb4">Marcas</span>
											<select name="marcas" class="design">
												<option>Selecione...</option> ';
												foreach ($marcas as $key => $value) {
													$arr['html'] .= '<option value="'.$value->id.'" '.( (isset($item->marcas) AND $item->marcas==$value->id) ? 'selected' : '' ).'>'.$value->nome.'</option> ';
												}
				$arr['html'] .= '			<select>
										</div>
										<div class="clear"></div>


										<div class="wr4 p10">
											<span class="db pb4">Preço (De)</span>
											<input type="search" name="preco1" class="preco w100p design fz14" value="'.(isset($item->preco1) ? preco($item->preco1) : '').'" rel="tooltip" data-original-title="Ex: R$ 100,00">
										</div>
										<div class="wr4 p10">
											<span class="db pb4">Preço Atual*</span>
											<input type="search" name="preco" class="preco w100p design fz14" value="'.(isset($item->preco) ? preco($item->preco) : '').'" required rel="tooltip" data-original-title="Ex: R$ 100,00">
										</div>
										<div class="wr4 p10">
											<span class="db pb4">Estoque*</span>
											<input type="number" name="estoque" class="w100p design fz14" value="'.(isset($item->estoque) ? $item->estoque : '').'" min="0" required>
										</div>
										<div class="clear"></div>

										<div class="p10 fz14i lh20 fwb cor_f00">
											*Atenção: os campos a seguir são de extrema importância, confirme as medidas antes de efetuar o cadastro.
											<a onclick="$('.A.'.IMG_DIMENSSOES'.A.').show()" class="c_azul link">Clique aqui e veja o exemplo</a>
											<div class="dn posa t0 l50p z2 w520 p10 mt10 bd_ccc back_fff IMG_DIMENSSOES" style="margin-left: -250px">
												<a onclick="$('.A.'.IMG_DIMENSSOES'.A.').hide()" class="posa r0 p10 fz20" style="margin-top: -10px;">x</a>
												<img src="'.DIR.'/web/img/outros/produtos/formas-espaciais.jpg" class="dib" />
											</div>
										</div>


										<div class="wr3 p10">
											<span class="db pb4">Peso (em Kg)*</span>
											<input type="search" name="peso" class="preco w100p design fz14" value="'.(isset($item->peso) ? preco($item->peso) : '').'" required rel="tooltip" data-original-title="&nbsp; &nbsp; &nbsp; &nbsp; Ex.: 0,25 = 250 Gramas; 1 = 1 Kilo; 1,50 = 1 Kilo e 500 Gramas" >
										</div>
										<div class="wr3 p10">
											<span class="db pb4">Comprimento*</span>
											<input type="number" name="comprimento" class="w100p design fz14" value="'.(isset($item->comprimento) ? $item->comprimento : '').'" value="16" min="16" max="105" required rel="tooltip" data-original-title="*Obs.: Comprimento(C): Min:16cm Máx:105cm;">
										</div>
										<div class="wr3 p10">
											<span class="db pb4">Largura*</span>
											<input type="number" name="largura" class="w100p design fz14" value="'.(isset($item->largura) ? $item->largura : '').'" value="12" min="12" max="105" required rel="tooltip" data-original-title="*Obs.: Largura(L): Min:12cm Máx:105cm;">
										</div>
										<div class="wr3 p10">
											<span class="db pb4">Altura*</span>
											<input type="number" name="altura" class="w100p design fz14" value="'.(isset($item->altura) ? $item->altura : '').'" value="2" min="2" max="105" required rel="tooltip" data-original-title="*Obs.: Altura(A): Min:2cm Máx:105cm; / Soma(C+L+A) Min:29cm Máx:200cm;">
										</div>
										<div class="clear"></div> ';




										if(!MOBILE){
				$arr['html']  .= '			<div class="p10">
												<script type="text/javascript" src="'.DIR.'/plugins/Ckeditor/ckeditor/ckeditor.js"></script>
												<span class="db pb4">Texto</span>
												'.$input->editor('', 'txt_editor').'
											</div>
											<style>.finput_editor { padding: 0 !important; } </style>
											<div class="clear"></div> ';
										} else {
				$arr['html']  .= '			<div class="p10 fwb">
												Para Editar Descrição completa somente no Desktop!
											</div>
											<div class="clear"></div> ';
										}






				$arr['html']  .= '		<div class="p10 tac">
											<button class="dib w200 design p10 '.BUTTON1.' br0 hover2 hoverr4">Salvar</button>
										</div>
										<div class="clear"></div>

										<input type="hidden" name="gravar" value="1">
									</div>

								</form>
								<script>ajaxForm('.A.'formm'.A.');</script>

								<script>$('.A.'[rel="tooltip"]'.A.').tooltip({html:true});</script> ';
			}




		} else {
			$arr['erro'][] = 'Você precisa está logado!';
		}

	echo json_encode($arr); 

?>