<?

	class Input extends Mysql {

		public $value;
		public $coluna;
		public $tags = ' class="design" ';
		public $opcoes;
		public $extra;

		public $filtro;

		public $p = '';
		public $dois_pontos = ':';
		public $filtro_avancado = 0;

		public $modulos;


		// VALUE
			public function value($name){
				$value = $this->value;
				$value_old = $this->value;
				$coluna = $this->coluna;

				$return = '';
				if($this->value){
					if($this->coluna AND isset($value->$coluna)){
						$value = $value->$coluna;
					} elseif(isset($value->$name)){
						$value = $value->$name;
					}
					
					if(is_object($value)){
						$value = '';
					}
				}

				if($name != 'multifotos'){
					$value = cod('html->asc', $value);
				}

				// Preco
				$casas = 2;
				if(preg_match('(casas=)', $this->tags)){
					$casas = entre('casas="', '"', $this->tags);
				}

				if(!$this->filtro_avancado AND $value){
					$value = (preg_match('(preco)', $this->tags)) ? number_format($value, $casas, '.', '') : $value;
				}

				return $value;
			}
		// VALUE

		// VALIDATE
			private function validate(){
				$return = '';
				if(preg_match("(required)",$this->tags)){
					$return = '<span class="c_vermelho">*</span>';
				}
				return $return;
			}
		// VALIDATE











		// TEXT
			public function text($nome, $name, $type='text'){

				$id		= !preg_match('(id=")', $this->tags) ? 'id="'.tirar_barras_2pronto_virgula($name).'" ' : '';
				$value	= $this->value($name)!='' ? $this->value($name) : '';

				$return = '<div class="finput finput_'.$name.'"> ';
					$return .= $nome ? '<label class="lnome" for="'.$name.'" > <span '.$this->p.'> '.$nome.$this->validate().$this->dois_pontos.' </span> </label> ' : ' <label class="lnome"> &nbsp; </label> ';

					$return .= '<div class="input" rel="tooltip" data-original-title="'.$this->extra.'"> ';

						$data_filtro_avancado = $this->filtro_av($nome, $name, $type, $id, $value);
						if($data_filtro_avancado){ // Data Filtro Avancado
							$return .= $data_filtro_avancado;

						// Input Date Normal
						} elseif(browser()!='chrome' AND browser()!='firefox' AND $type == 'date'){
							$return .= '<input type="text_date" name="'.$name.'" '.$id.' '.$this->tags.' value="'.data($value, 'd/m/Y').'"  placeholder_preto="1" /> <input type="hidden" name="data_firefox['.str_replace('[', ';;x;;', str_replace(']', '', $name)).']" /> ';

						// Input Date-Local Normal
						} elseif(browser()!='chrome' AND $type == 'datetime-local'){
							$return .= '<input type="text_datetime-local" name="'.$name.'" '.$id.' '.$this->tags.' value="'.data($value, 'd/m/Y').' '.data($value, 'H:i').'" placeholder_preto="1" /> <input type="hidden" name="datatime_firefox['.str_replace('[', ';;x;;', str_replace(']', '', $name)).']" /> ';

						} elseif($type == 'datetime-local'){
							$value = $value!='0000-00-00 00:00:00' ? $value : '';
							$return .= '<input type="'.$type.'" name="'.$name.'" '.$id.' '.$this->tags.' value="'.data($value, 'Y-m-d').'T'.data($value, 'H:i').'" /> ';

						// Input Normal
						} else {
							$value = $value!='0000-00-00' ? $value : '';
							$this->tags = str_replace('value="Y-m-d"', 'value="'.date('Y-m-d').'"', $this->tags);
							$return .= '<input type="'.$type.'" name="'.$name.'" '.$id.' '.iff($value, 'value="'.stripcslashes($value).'"').' '.$this->tags.' /> ';
						}

						// Input Color
						if($type == 'color'){
							$rand = rand();
							$return .= '<span onclick="boxs('.A.'color'.A.', '.A.'rand='.$rand.'&hex='.iff($value, stripcslashes($value)).A.')" class="color_'.$rand.' dib pl2 vam c-p c_azul">Hex</span>';
						}

					$return .= '</div>';

				$return .= '</div>';
				$return .= "\n\n";

				$this->extra = '';
				return $return;
			}
		// TEXT


		// DATA DATATABLE FILTRO (FILTRO AVANCADO)
			public function filtro_av($nome, $name, $type, $id, $value){

				$input_nome = str_replace('datatable_filtro[value][', '', $name);
				$input_nome = str_replace(']', '', $input_nome);

				// From e To
				$from = isset($_POST['datatable_filtro']['value'][$input_nome]['from']) ? $_POST['datatable_filtro']['value'][$input_nome]['from'] : '';
				$to = isset($_POST['datatable_filtro']['value'][$input_nome]['to']) ? $_POST['datatable_filtro']['value'][$input_nome]['to'] : '';

				// Filtro Avancado Value (item com array e item normal)
	        	if($this->filtro_avancado AND $from AND $to AND ($type == 'date' OR $type == 'datetime-local') ){
					$return = '	<div class="design w50p fll pr5"> <input type="'.$type.'" name="'.$name.'[from]" '.$this->tags.' value="'.iff(browser()!='chrome', $from, data($from, 'Y-m-d')).'" /> </div>
								<div class="design w50p dib pl5"> <input type="'.$type.'" name="'.$name.'[to]"  '.$this->tags.' value="'.iff(browser()!='chrome', $to, data($to, 'Y-m-d')).'" /> </div>
								<div class="clear"></div> ';


	        	// Filtro Avancado sem Value
				} elseif($this->filtro_avancado AND ($type == 'date' OR $type == 'datetime-local') ){
					$return = '	<div class="design w50p fll pr5"> <input type="'.$type.'" name="'.$name.'[from]" '.$this->tags.' /> </div>
								<div class="design w50p dib pl5"> <input type="'.$type.'" name="'.$name.'[to]"  '.$this->tags.' /> </div>
								<div class="clear"></div> ';
				}

				$return = isset($return) ? $return : '';
				return $return;
			}
		// DATA DATATABLE FILTRO (FILTRO AVANCADO)


		// FILE
			public function file($nome, $name){
				$img = new Imagem();
				$img->carregamento = 0;

				$id		= !preg_match('(id=")', $this->tags) ? 'id="'.tirar_barras_2pronto_virgula($name).'" ' : '';
				$value = $this->value;

				$tamanho = '';
				if(isset($this->modulos->modulo)){
					$width = wwhh($name, $this->modulos, $this->modulos->modulo, 0, 'txt');
					$height = wwhh($name, $this->modulos, $this->modulos->modulo, 1, 'txt');
					if($width AND $height){
						if($this->modulos->modulo == 'banner'){
							$tamanho = 'Tamanho Recomendável: '.$width;
						} else {
							$tamanho = 'Tamanho Recomendável: '.$width.' x '.$height.' - ';
						}
					}
				}

				$return = '';
				$return .= $this->opcoes ? '<div class="'.$this->opcoes.'"> ' : '';
					$return .= '<div class="finput finput_'.$name.' finput_foto_files" rel="tooltip" data-original-title="'.$this->extra.' '.$tamanho.' Tamanho Máxima: 2MB"> ';
						if(LUGAR != 'siteXXX') $return .= $nome ? '<label for="'.$name.'" > <span '.$this->p.'> '.$nome.$this->validate().$this->dois_pontos.' </span> </label> ' : ' <label> &nbsp; </label> ';
						$valor = $this->value(str_replace('[]', '', $name));
						$cor = ($valor AND $valor != 'a:0:{}') ? 'c_azul' : 'cor_888';
						if(!preg_match('(tipo_file)', $this->tags) AND LUGAR != 'site'){
							// WebCam
								//if(preg_match('(webcam)', $this->tags)){
								if(!preg_match('(produtos_combinacoes)', $name)){
									$rand_webcam = rand();
									$return .= '<div class="rand_webcam_'.$rand_webcam.'" style="display: table-cell;">';
										$return .= '<div class="pt5 pr10 fz16"><i onclick="boxs('.A.'webcam'.A.', '.A.'rand_webcam='.$rand_webcam.A.')" class="faa-camera c-p"></i></div>';
										$return .= '<input type="hidden" name="webcam['.$name.']">';
									$return .= '</div> ';
								}
							// WebCam
							// Crop
								//if(preg_match('(crop)', $this->tags)){
								if($this->value($name) AND !preg_match('(multifotos)', $name)){
									$nome_da_foto = nome_da_foto($value->$name);
									if(strtolower($nome_da_foto['ext']) == 'png' OR strtolower($nome_da_foto['ext']) == 'bmp' OR strtolower($nome_da_foto['ext']) == 'webp' OR strtolower($nome_da_foto['ext']) == 'pjpeg' OR strtolower($nome_da_foto['ext']) == 'jpeg' OR strtolower($nome_da_foto['ext']) == 'jpg' OR strtolower($nome_da_foto['ext']) == 'gif'){
										$onclick = '';
										if(isset($value->id)){
											$onclick = "boxs('crop', 'idd=".$value->id."&tablee=".$value->table."&col=".$name."&modulos=".$this->modulos->id."', 1)";
										}
										if($onclick){
											$return .= '<div class="" style="display: table-cell;">';
												$return .= '<div class="pt5 pr10 fz16"><i onclick="'.$onclick.'" class="faa-crop c-p"></i></div>';
											$return .= '</div> ';
										}
									}
								}
							// Crop
						}
						$return .= '<label for="'.$name.'" class="input file posr vat"> ';
								$return .= '<span class="posa vm c-p limit"> <i class="faa-file-image-o ml2 mr3 '.$cor.' "></i> <span>Selecionar Arquivo'.iff(preg_match('(multifotos)', $name), 's').'</span> </span> <input type="file" name="'.$name.'" '.$id.' '.$this->tags.' onChange="input_file(this)" '.iff(preg_match('(multifotos)', $name), 'multiple').' /> ';
						$return .= '</label> ';

						// Pop File
						if($this->value($name) AND !preg_match('(multifotos)', $name)){	
							$nome_da_foto = nome_da_foto($value->$name);
							$nome_img = (strtolower($nome_da_foto['ext']) == 'png' OR strtolower($nome_da_foto['ext']) == 'bmp') ? $value->$name : 'thumbnails/'.$nome_da_foto['nome'].'_50x50.'.$nome_da_foto['ext'];
							$aparcer_img = 0;
							if(strtolower($nome_da_foto['ext']) == 'png' OR strtolower($nome_da_foto['ext']) == 'bmp'){
								$aparcer_img = 1;
							}
							if(strtolower($nome_da_foto['ext']) == 'pjpeg' OR strtolower($nome_da_foto['ext']) == 'jpeg' OR strtolower($nome_da_foto['ext']) == 'jpg' OR strtolower($nome_da_foto['ext']) == 'gif'){
								$img->caminho = preg_match('(site)', LUGAR) ? '../web/fotos/'.FOTOS.'' : '../../web/fotos/'.FOTOS.'';
								$img->foto = $name;
								$img->img($value, 50, 50);
								$aparcer_img = 1;
							}

							$img = (object)array();
							$img->tags = ' class="max-w50 max-h50 m1 bd_ccc br3" ';
							$return .= '<div class="pop_file" style="margin-left: 100px"> ';
								$return .= '<div class="arrow_all"> <div class="arrow"></div> </div> ';
								if($aparcer_img){
									$return .= '<div class="mr10 fll"> ';
										$return .= '<a href="'.DIR.'/web/fotos/'.FOTOS.$value->$name.'" target="_blank"> ';
											$return .= '<img src="'.DIR.'/web/fotos/'.FOTOS.$nome_img.'" class="max-w50 max-h50 m1 bd_ccc br3"> ';
										$return .= '</a> ';
									$return .= '</div> ';
								} else {
									$return .= '<div class="mr10 fll"> ';
										$return .= '<a href="'.DIR.'/web/fotos/'.FOTOS.$value->$name.'" target="_blank"> ';
											if(strtolower($nome_da_foto['ext']) == 'pdf'){
												$return .= '<svg class="'.(LUGAR=='site' ? 'w40' : 'w30').'" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M88 304H80V256H88C101.3 256 112 266.7 112 280C112 293.3 101.3 304 88 304zM192 256H200C208.8 256 216 263.2 216 272V336C216 344.8 208.8 352 200 352H192V256zM224 0V128C224 145.7 238.3 160 256 160H384V448C384 483.3 355.3 512 320 512H64C28.65 512 0 483.3 0 448V64C0 28.65 28.65 0 64 0H224zM64 224C55.16 224 48 231.2 48 240V368C48 376.8 55.16 384 64 384C72.84 384 80 376.8 80 368V336H88C118.9 336 144 310.9 144 280C144 249.1 118.9 224 88 224H64zM160 368C160 376.8 167.2 384 176 384H200C226.5 384 248 362.5 248 336V272C248 245.5 226.5 224 200 224H176C167.2 224 160 231.2 160 240V368zM288 224C279.2 224 272 231.2 272 240V368C272 376.8 279.2 384 288 384C296.8 384 304 376.8 304 368V320H336C344.8 320 352 312.8 352 304C352 295.2 344.8 288 336 288H304V256H336C344.8 256 352 248.8 352 240C352 231.2 344.8 224 336 224H288zM256 0L384 128H256V0z"/></svg> ';
											} elseif(strtolower($nome_da_foto['ext']) == 'doc' OR strtolower($nome_da_foto['ext']) == 'docx'){
												$return .= '<svg class="'.(LUGAR=='site' ? 'w60 h60' : 'w45 h45').'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12.186 14.552c-.617 0-.977.587-.977 1.373 0 .791.371 1.35.983 1.35.617 0 .971-.588.971-1.374 0-.726-.348-1.349-.977-1.349z"/><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.155 17.454c-.426.354-1.073.521-1.864.521-.475 0-.81-.03-1.038-.06v-3.971a8.16 8.16 0 0 1 1.235-.083c.768 0 1.266.138 1.655.432.42.312.684.81.684 1.522 0 .775-.282 1.309-.672 1.639zm2.99.546c-1.2 0-1.901-.906-1.901-2.058 0-1.211.773-2.116 1.967-2.116 1.241 0 1.919.929 1.919 2.045-.001 1.325-.805 2.129-1.985 2.129zm4.655-.762c.275 0 .581-.061.762-.132l.138.713c-.168.084-.546.174-1.037.174-1.397 0-2.117-.869-2.117-2.021 0-1.379.983-2.146 2.207-2.146.474 0 .833.096.995.18l-.186.726a1.979 1.979 0 0 0-.768-.15c-.726 0-1.29.438-1.29 1.338 0 .809.48 1.318 1.296 1.318zM14 9h-1V4l5 5h-4z"/><path d="M7.584 14.563c-.203 0-.335.018-.413.036v2.645c.078.018.204.018.317.018.828.006 1.367-.449 1.367-1.415.006-.84-.485-1.284-1.271-1.284z"/></svg> ';
											} elseif(strtolower($nome_da_foto['ext']) == 'txt'){
												$return .= '<svg class="'.(LUGAR=='site' ? 'w60 h60' : 'w45 h45').'" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6zM9.998 14.768H8.895v3.274h-.917v-3.274H6.893V14h3.105v.768zm2.725 3.274-.365-.731c-.15-.282-.246-.492-.359-.726h-.013c-.083.233-.185.443-.312.726l-.335.731h-1.045l1.171-2.045L10.336 14h1.05l.354.738c.121.245.21.443.306.671h.013c.096-.258.174-.438.276-.671l.341-.738h1.043l-1.139 1.973 1.198 2.069h-1.055zm4.384-3.274h-1.104v3.274h-.917v-3.274h-1.085V14h3.105v.768zM14 9h-1V4l5 5h-4z"/></svg> ';
											} elseif(strtolower($nome_da_foto['ext']) == 'xls' OR strtolower($nome_da_foto['ext']) == 'xlsx'){
												$return .= '<svg class="'.(LUGAR=='site' ? 'w60 h60' : 'w40 h40').'" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="91.607px" height="91.607px" viewBox="0 0 91.607 91.607" style="enable-background:new 0 0 91.607 91.607;"xml:space="preserve"> <g> <g> <path d="M59.245,0H12.392v91.607h66.824V27.17L55.478,10.778L59.245,0z M33.529,56.625l-2.015-4.029 c-0.826-1.552-1.356-2.707-1.983-3.996h-0.063c-0.464,1.287-1.026,2.443-1.721,3.996l-1.849,4.029h-5.746l6.44-11.263 l-6.21-10.998h5.781l1.947,4.062c0.662,1.354,1.157,2.445,1.686,3.7h0.064c0.53-1.42,0.959-2.412,1.521-3.7l1.881-4.062h5.747 l-6.275,10.867l6.607,11.394H33.529z M64.47,47.277c-3.698-1.287-6.11-3.334-6.11-6.571c0-3.799,3.173-6.706,8.424-6.706 c2.511,0,4.358,0.529,5.681,1.124l-1.123,4.062c-0.893-0.429-2.477-1.056-4.656-1.056s-3.236,0.99-3.236,2.146 c0,1.42,1.254,2.048,4.129,3.137c3.93,1.454,5.778,3.501,5.778,6.64c0,3.732-2.872,6.903-8.981,6.903 c-2.543,0-5.054-0.662-6.311-1.354l1.025-4.162c1.354,0.695,3.436,1.389,5.58,1.389c2.313,0,3.535-0.959,3.535-2.411 C68.202,49.027,67.147,48.234,64.47,47.277z M55.954,52.396v4.229H42.046V34.364h5.056v18.033H55.954z"/> <polygon points="63.937,0 60.884,8.732 79.216,21.391 		"/> </g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> ';
											} elseif(strtolower($nome_da_foto['ext']) == 'csv1'){
												$return .= '<svg class="'.(LUGAR=='site' ? 'w60 h60' : 'w40 h40').'" viewBox="-64 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm-96 144c0 4.42-3.58 8-8 8h-8c-8.84 0-16 7.16-16 16v32c0 8.84 7.16 16 16 16h8c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8h-8c-26.51 0-48-21.49-48-48v-32c0-26.51 21.49-48 48-48h8c4.42 0 8 3.58 8 8v16zm44.27 104H160c-4.42 0-8-3.58-8-8v-16c0-4.42 3.58-8 8-8h12.27c5.95 0 10.41-3.5 10.41-6.62 0-1.3-.75-2.66-2.12-3.84l-21.89-18.77c-8.47-7.22-13.33-17.48-13.33-28.14 0-21.3 19.02-38.62 42.41-38.62H200c4.42 0 8 3.58 8 8v16c0 4.42-3.58 8-8 8h-12.27c-5.95 0-10.41 3.5-10.41 6.62 0 1.3.75 2.66 2.12 3.84l21.89 18.77c8.47 7.22 13.33 17.48 13.33 28.14.01 21.29-19 38.62-42.39 38.62zM256 264v20.8c0 20.27 5.7 40.17 16 56.88 10.3-16.7 16-36.61 16-56.88V264c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8v20.8c0 35.48-12.88 68.89-36.28 94.09-3.02 3.25-7.27 5.11-11.72 5.11s-8.7-1.86-11.72-5.11c-23.4-25.2-36.28-58.61-36.28-94.09V264c0-4.42 3.58-8 8-8h16c4.42 0 8 3.58 8 8zm121-159L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"/></svg> ';
											} elseif(strtolower($nome_da_foto['ext']) == 'mp4' OR strtolower($nome_da_foto['ext']) == 'mov' OR strtolower($nome_da_foto['ext']) == 'avi'){
												$return .= '<svg class="'.(LUGAR=='site' ? 'w60 h60' : 'w40 h40').'" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="96.992px" height="96.992px" viewBox="0 0 96.992 96.992" style="enable-background:new 0 0 96.992 96.992;"xml:space="preserve"> <g> <path d="M82.297,17.002L66.028,0.732C65.559,0.263,64.924,0,64.26,0H16.463c-1.381,0-2.5,1.119-2.5,2.5v91.992 c0,1.381,1.119,2.5,2.5,2.5h64.066c1.381,0,2.5-1.119,2.5-2.5V18.769C83.029,18.105,82.766,17.471,82.297,17.002z M67.787,58.854 c0,0.104-0.062,0.201-0.156,0.244c-0.035,0.018-0.074,0.023-0.111,0.023c-0.062,0-0.125-0.021-0.174-0.064l-9.236-7.953v7.985 c0,0.591-0.479,1.07-1.071,1.07H30.275c-0.591,0-1.07-0.479-1.07-1.07V37.902c0-0.59,0.479-1.07,1.07-1.07h26.762 c0.593,0,1.07,0.48,1.07,1.07v7.985l9.238-7.953c0.078-0.068,0.189-0.083,0.284-0.04s0.156,0.139,0.156,0.243L67.787,58.854 L67.787,58.854z M62.051,22.342c-0.337,0-0.658-0.133-0.896-0.371c-0.237-0.238-0.372-0.561-0.372-0.897l0.002-15.126L77.18,22.343 L62.051,22.342L62.051,22.342z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> ';
											} elseif(strtolower($nome_da_foto['ext']) == 'mp3'){
												$return .= '<svg class="'.(LUGAR=='site' ? 'w60 h60' : 'w40 h40').'" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"viewBox="0 0 58 58" style="enable-background:new 0 0 58 58;" xml:space="preserve"> <g> <path d="M32.048,45.858c-0.142-0.196-0.34-0.36-0.595-0.492s-0.593-0.198-1.012-0.198h-1.23v3.992h1.504 c0.2,0,0.398-0.034,0.595-0.103s0.376-0.18,0.54-0.335s0.296-0.371,0.396-0.649s0.15-0.622,0.15-1.032 c0-0.164-0.022-0.354-0.068-0.567S32.189,46.055,32.048,45.858z"/> <path d="M51.5,39V13.978c0-0.766-0.092-1.333-0.55-1.792L39.313,0.55C38.964,0.201,38.48,0,37.985,0H8.963 C7.777,0,6.5,0.916,6.5,2.926V39H51.5z M37.5,3.391c0-0.458,0.553-0.687,0.877-0.363l10.095,10.095 C48.796,13.447,48.567,14,48.109,14H37.5V3.391z M23.794,26.177H27.5v-9.053V8.765v-1c0-0.553,0.447-1,1-1s1,0.447,1,1v0.898 c0.105,0.461,0.948,3.606,4.862,6.738c1.008,0.808,1.74,1.555,2.308,2.351c1.365,1.914,3.414,5.929,1.787,11.304 c-0.131,0.432-0.527,0.71-0.957,0.71c-0.096,0-0.193-0.014-0.29-0.043c-0.432-0.131-0.71-0.527-0.71-0.957 c0-0.096,0.014-0.193,0.043-0.29c0.977-3.226-2.905-6.084-5.224-7.793c-0.66-0.485-1.182-0.869-1.521-1.205L29.5,19.233v11.473 c0,3.471-2.823,6.294-6.294,6.294c-3.466,0-5.706-2.24-5.706-5.706C17.5,28.138,19.912,26.177,23.794,26.177z"/> <path d="M6.5,41v15c0,1.009,1.22,2,2.463,2h40.074c1.243,0,2.463-0.991,2.463-2V41H6.5z M25.068,54H23.4v-6.932l-2.256,5.605 h-1.449l-2.27-5.605V54h-1.668V43.924h1.668l2.994,6.891l2.98-6.891h1.668V54z M33.723,48.429 c-0.173,0.415-0.415,0.764-0.725,1.046s-0.684,0.501-1.121,0.656s-0.921,0.232-1.449,0.232h-1.217V54H27.57V43.924h2.898 c0.429,0,0.853,0.068,1.271,0.205s0.795,0.342,1.128,0.615s0.602,0.604,0.807,0.991s0.308,0.822,0.308,1.306 C33.982,47.552,33.896,48.014,33.723,48.429z M41.358,52.271c-0.132,0.333-0.299,0.608-0.499,0.827s-0.426,0.395-0.677,0.526 s-0.494,0.23-0.731,0.294s-0.453,0.104-0.649,0.123s-0.349,0.027-0.458,0.027c-0.766,0-1.369-0.053-1.812-0.157 s-0.75-0.212-0.923-0.321l0.369-1.176c0.082,0.046,0.159,0.096,0.232,0.15s0.178,0.107,0.314,0.157s0.328,0.091,0.574,0.123 s0.583,0.048,1.012,0.048c0.629,0,1.099-0.171,1.408-0.513s0.465-0.772,0.465-1.292c0-0.492-0.142-0.907-0.424-1.244 s-0.697-0.506-1.244-0.506h-1.381l-0.014-1.107h0.93c0.2,0,0.403-0.005,0.608-0.014s0.398-0.06,0.581-0.15s0.333-0.246,0.451-0.465 s0.178-0.533,0.178-0.943c0-0.164-0.014-0.337-0.041-0.52s-0.103-0.351-0.226-0.506s-0.303-0.28-0.54-0.376 s-0.565-0.144-0.984-0.144s-0.754,0.039-1.005,0.116s-0.439,0.139-0.567,0.185l-0.479-1.23c0.219-0.063,0.49-0.132,0.813-0.205 s0.791-0.109,1.401-0.109c0.429,0,0.834,0.053,1.217,0.157s0.718,0.271,1.005,0.499s0.515,0.52,0.684,0.875 s0.253,0.774,0.253,1.258c0,0.282-0.05,0.54-0.15,0.772s-0.228,0.436-0.383,0.608s-0.328,0.316-0.52,0.431 s-0.369,0.189-0.533,0.226c0.21,0.027,0.426,0.096,0.649,0.205s0.431,0.265,0.622,0.465s0.351,0.444,0.479,0.731 s0.191,0.617,0.191,0.991C41.557,51.544,41.49,51.938,41.358,52.271z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> ';
											} elseif(strtolower($nome_da_foto['ext']) == 'flv'){
												$return .= '<svg class="'.(LUGAR=='site' ? 'w60 h60' : 'w40 h40').'" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"width="588.601px" height="588.6px" viewBox="0 0 588.601 588.6" style="enable-background:new 0 0 588.601 588.6;"xml:space="preserve"> <g> <path d="M359.031,537.78c0.781,0.048,1.551,0.111,2.342,0.111h178.2c20.846,0,37.8-16.96,37.8-37.801V86.994 c0-20.838-16.954-37.8-37.8-37.8h-178.2c-0.786,0-1.561,0.077-2.342,0.113V0L11.228,46.417v494.564L359.031,588.6V537.78z M359.031,71.042c0.771-0.114,1.54-0.243,2.342-0.243h178.2c8.933,0,16.2,7.27,16.2,16.2v413.103c0,8.934-7.268,16.2-16.2,16.2 h-178.2c-0.796,0-1.571-0.127-2.342-0.232V71.042z M121.345,257.618l-40.5,0.562v25.397l37.8-0.077v20.82l-37.8-0.28v44.719 l-23.219-0.653V238.08l63.719-1.484V257.618z M210.187,352.397l-70.354-1.967V236.173l25.062-0.588v93.604l45.291,0.833V352.397z M274.348,354.201l-31.989-0.896l-37.676-118.642l29.014-0.688l14.521,50.34c4.103,14.24,7.857,27.994,10.734,43.018l0.541,0.011 c3.066-14.438,6.863-28.725,11.032-42.533l15.715-52.049l30.182-0.707L274.348,354.201z"/> <path d="M413.433,384.318c13.547-5.675,29.226-18.341,38.411-34.003c3.565-6.139,9.028-18.742,14.961-32.717h41.286v-35.324 h-26.188c4.029-8.976,7.673-16.58,10.441-20.914c10.046-15.67,34.9-15.272,34.9-15.272v-33.581c0,0-20.926-4.802-47.092,14.829 c-26.162,19.606-42.726,72.812-56.669,102.022c-13.964,29.204-39.677,25.734-39.677,25.734v34.414 C383.812,389.501,399.933,389.95,413.433,384.318z"/> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> <g> </g> </svg> ';
											}
										$return .= '</a> ';
									$return .= '</div> ';								
								}
								$return .= '<div class="w110 fll"> ';
									$return .= '<a href="'.DIR.'/web/fotos/'.FOTOS.$value->$name.'" target="_blank" class="db pt5 pb5 fz12"> <b>Ver Arquivo</b> </a> ';
									$return .= '<label><input type="checkbox" name="sem_foto['.$name.']" value="1" class="design dib vam" /> <span class="dib vam">Excluir Arquivo</span></label> ';
								$return .= '</div> ';
								$return .= '<div class="clear"></div> ';
							$return .= '</div> ';

						} else {
							$name = str_replace('[]', '', $name);
							$img->caminho = '../../web/fotos/'.FOTOS.'';
							if($this->value($name)){
								$itens = unserialize(base64_decode($this->value($name)));
								if(is_array($itens) AND $itens){
									$return .= '<div class="w328 pop_file pb5 ml50"> ';
										$return .= '<div class="arrow_all"> <div class="arrow"></div> </div> ';
										$x=1;
										$return .= '<div class="max-h140 o-a"> ';
											foreach ($itens as $k => $v) { $x++;
												$return .= '<div class="w144 fll"> ';
													$return .= '<div class="w57 fll limit"> ';
														$return .= '<a href="'.DIR.'/web/fotos/'.FOTOS.$v.'" target="_blank"> ';
															$return .= $img->img( (object)array('foto'=>$v) , 50, 50);
														$return .= '</a> ';
													$return .= '</div> ';
													$return .= '<div class="w70 fll pl5">';
														$return .= '<a href="'.DIR.'/web/fotos/'.FOTOS.$v.'" target="_blank" class="db pt2 pb4 fz11"> <b>Ver Arquivo</b> </a> ';
														$return .= '<label class="db pt3 pb4"><input type="checkbox" name="sem_multifotos['.$name.'][]" value="'.$k.'" class="design vam" /> Excluir </label> ';
													$return .= '</div> ';
													$return .= '<div class="clear"></div> ';
												$return .= '</div> ';
												$return .= ($x%2) ? '<div class="clear h5"></div> ' : '';
											}
											$return .= '<div class="clear"></div> ';
										$return .= '</div> ';
									$return .= '</div> ';
								}
							}

						}
						// Pop File

					$return .= '</div>';
				$return .= $this->opcoes ? '</div>' : '';
				$return .= "\n\n";

				$this->extra = '';
				return $return;
			}
		// FILE














		// SELECTS
			public $selecione = '- - -';
			public $onchange = '';
			public $table = '';
			public $filtro_extra = '';
			public $order = '';
			public $niveis = 1000;
			public $gerenciar = 0;

			// SELECT
				public function select($nome, $name){
					// OPCOES INI
						$opcoes_ini = $this->opcoes;
					// OPCOES INI

					// SELECT CONFIGS
						$this->select_configs($name);
					// SELECT CONFIGS

					// ID
						$id	= !preg_match('(id=")', $this->tags) ? 'id="'.tirar_barras_2pronto_virgula($name).'" ' : '';
						if(isset($this->itens[1]) AND preg_match('(1_cate)', $this->itens[1])){
							$id	= 'id="'.$this->itens[1].'" ';
						}
					// ID

					// SELECTSSS
						$return  = '<div class="finput finput_'.$name.' '.iff(preg_match('(multiple)', $this->tags), 'mb5').' " > ';
							$return .= $nome ? '<label class="lnome" for="'.$name.'" > <span '.$this->p.'> '.$nome.$this->validate().$this->dois_pontos.' </span> </label> ' : ' <label class="lnome"> &nbsp; </label> ';
							$return .= '<div class="input" rel="tooltip" data-original-title="'.$this->extra.'" > ';

								// ESTADOS CIDADES
									if($this->opcoes == '(estados)' OR $this->opcoes == '(cidades)' OR $this->opcoes == '(bairros)'){
										$return .= $this->select_localizacoes($name, $id);
								// ESTADOS CIDADES

								// MULTIPLE
									} elseif(preg_match('(multiple)', $this->tags)){
										$return .= $this->select_multiple($name, $id);
								// MULTIPLE

								// AUTOCOMPLETE
									} elseif(preg_match('(autocomplete)', $this->tags)){
										$return .= $this->select_autocomplete($name, $id);
								// AUTOCOMPLETE

								// COM BANCO SUBCATEGORIAS
									} elseif(preg_match('(subcategorias)', $this->tags)){
										$return .= $this->select_banco_subcategorias($name, $id, $opcoes_ini);
								// COM BANCO SUBCATEGORIAS

								// COM BANCO
									} elseif(isset($this->itens[1]) AND $this->itens[1]){
										$return .= $this->select_banco($name, $id, $opcoes_ini);
								// COM BANCO
								
								// SELECT1
									} else {
										$return .= $this->select1($name, $id);
									}
								// SELECT1

							$return .= '</div> ';
						$return .= '</div> ';
						$return .= "\n\n";
					// SELECTSSS

					//$this->filtro = '';
					//$this->onchange = '';
					//$this->extra = '';
					//$this->selecione = '- - -';
					return $return;
				}
				// CONFIGS
					public function select_configs($name){
						$this->filtro_extra = '';

						// OPCOES
							// CATEGORIAS
								if(preg_match('(categorias)', $this->opcoes)){
									$ex = explode('(categorias)', $this->opcoes);
									$ex[1] = isset($ex[1]) ? $ex[1] : '';
									$this->opcoes = '(banco)->'.$this->table.'1_cate'.$ex[1];
									//$this->filtro_extra .= " AND tipo = 0 ";
								}
							// CATEGORIAS
							// BANCO
								$this->itens = explode('(banco)->', $this->opcoes);
								if(isset($this->itens[1]) AND $this->itens[1]){
									$this->itens = explode('->', $this->opcoes);
								}
							// BANCO
							// ANOS
								$ex = explode('(anos)->', $this->opcoes);
								if(isset($ex[1]) AND $ex[1]){
									$anos = '';
									for ($i=(date('Y')+1); $i>=$ex[1]; $i=$i-1) { 
										$anos .= $i.'->'.$i.'; ';
									}
									$this->opcoes = $anos;
								}
							// ANOS
						// OPCOES

						$table = isset($this->itens[1]) ? $this->itens[1] : '';

						// PAI ex. (pai="produtos")
							if($table){
								$pai = '';
								if( isset($this->value->id) and preg_match('(pai=")', $this->tags) ){
									$pai = entre('pai="', '"', $this->tags);
									$pai = " AND ".$pai." = '".$this->value->id."' ";
								}
								$this->filtro_extra .= $pai;
								$this->filtro_extra .= LUGAR!='admin' ? 'AND '.STATUS : '';
								$this->filtro_extra .= preg_match('(1_cate)', $table) ? 'AND `tipo` = 0 '  : '';
							}
						// PAI

						// COLUNAS
							if($table){
								$this->colunas = "id, nome".iff(preg_match('(1_cate)', $this->itens[1]), ', tipo');
							}
						// COLUNAS

						// FILTRO EXTRA
							if($table){
								// CADASTRO
								/*
									if($table == 'cadastro'){
										$this->filtro_extra .= " AND `tipo1` = 1 ";
									}
								*/
								// CADASTRO
								// USUARIOS
									if($table == 'usuarios'){
										$this->filtro_extra .= " AND `id` != 1 ";
									}
								// USUARIOS
							}
						// FILTRO EXTRA

						// ORDER
							$this->order = "";
						// ORDER
					}
				// CONFIGS
			// SELECT




			// SELECT BANCO
				public function select_banco($name, $id, $opcoes_ini){
					$return = '';

					// Categorias
					if(preg_match('(subcategorias)', $opcoes_ini)){
						$this->itens[1] = $this->table;
						$ex = explode('->', $opcoes_ini);
						$this->niveis = (isset($ex[1]) AND $ex[1]) ? $ex[1] : 0;
						$this->filtro_extra .= " AND tipo = 0 ";
					}

					// RELACAO
						if(preg_match('(relacao)', $this->tags)){
							$return .= $this->select_relacao($name);
						}
					// RELACAO

					$return .= '<select name="'.$name.'" '.$id.' '.$this->tags.' '.$this->onchange.' > ';
						$return .= $this->selecione ? '<option value="">'.iff(preg_match('(subcategorias)', $opcoes_ini) AND !$this->filtro_avancado, 'Categoria Principal', $this->selecione).'</option> ' : '';

						$this->nao_existe = 1;
						$this->filtro = $this->filtro ? $this->filtro : " WHERE ".iff(LUGAR!='admin', STATUS, "lang = '".LANG."'")." ".$this->filtro_extra." ORDER BY ".$this->order." `nome` ASC ";
						$consulta = $this->read($this->itens[1]);
						if(isset($consulta) AND is_array($consulta)){
							foreach($consulta as $value){
								$tipo1 = ($this->itens[1] == 'produtos_atributos1_cate' AND $name == 'categorias') ? ' tipo1="'.rel('produtos_atributos1_cate', $value->id, 'tipo1').'" ' : '';
								$return .= '<option value="'.$value->id.'" '.iff($this->value($name) == $value->id, 'selected').' '.$tipo1.' > ';
									$return .= preg_match('(1_cate)', $this->itens[1]) ? tracos_nivels($value->tipo).' ' : '';
									$return .= select_nome($name, $value);
								$return .= '</option> ';
								$return .= preg_match('(1_cate)', $this->itens[1]) ? categorias_nivels($this->itens[1], $value->id, $this->niveis, '', $this->value($name)) : '';
							}
						}
					$return .= '</select> ';

					// GERENCIAR
						$return .= $this->select_gerenciar($name);
					// GERENCIAR

					return $return;
				}
			// SELECT BANCO

			// SELECT BANCO CATEGORIAS
				public function select_banco_subcategorias($name, $id, $opcoes_ini){
					$return = '';

					// Categorias
					if(preg_match('(subcategorias)', $opcoes_ini)){
						$this->itens[1] = $this->table;
						$ex = explode('->', $opcoes_ini);
						$this->niveis = (isset($ex[1]) AND $ex[1]) ? $ex[1] : 0;
						$this->filtro_extra .= " AND tipo = 0 ";
					}

					// RELACAO
						if(preg_match('(relacao)', $this->tags)){
							$return .= $this->select_relacao($name);
						}
					// RELACAO

					$return .= '<select name="'.$name.'" '.$id.' '.$this->tags.' '.$this->onchange.' > ';
						$return .= $this->selecione ? '<option value="">'.iff(preg_match('(subcategorias)', $opcoes_ini) AND !$this->filtro_avancado, 'Categoria Principal', $this->selecione).'</option> ' : '';

						$this->nao_existe = 1;
						$this->filtro = $this->filtro ? $this->filtro : " WHERE ".iff(LUGAR!='admin', STATUS, "lang = '".LANG."'")." ".$this->filtro_extra." ORDER BY ".$this->order." `nome` ASC ";
						$consulta = $this->read($this->itens[1]);
						if(isset($consulta) AND is_array($consulta)){
							foreach($consulta as $value){
								$tipo1 = ($this->itens[1] == 'produtos_atributos1_cate' AND $name == 'categorias') ? ' tipo1="'.rel('produtos_atributos1_cate', $value->id, 'tipo1').'" ' : '';
								$return .= '<optgroup label="'.select_nome($name, $value).'" > ';
									$return .= preg_match('(1_cate)', $this->itens[1]) ? categorias_nivels($this->itens[1], $value->id, $this->niveis, '', $this->value($name), 0) : '';
								$return .= '</optgroup> ';
							}
						}
					$return .= '</select> ';

					// GERENCIAR
						$return .= $this->select_gerenciar($name);
					// GERENCIAR

					return $return;
				}
			// SELECT BANCO CATEGORIAS

			// RELACAO
				public function select_relacao($name){
					$return = '';
					if(preg_match('(relacao=)', $this->tags) AND isset($this->itens[2])){
						if(preg_match('(relacaoo=)', $this->tags) AND isset($this->itens[2])){
							$this->tags .= ' onchange="select_relacao(this); select_relacao(this, '.A.A.', '.A.A.', '.A.A.', '.A.A.', '.A.'relacaoo'.A.')" ';
						} else {
							$this->tags .= ' onchange="select_relacao(this)" ';
						}
					}
					if(preg_match('(relacao1=)', $this->tags) OR preg_match('(relacao2=)', $this->tags) OR preg_match('(relacao3=)', $this->tags)){
						$this->tags .= ' rel_val="'.$this->value($name).'" ';
						$this->filtro_extra .= " AND 1=2";
						if(preg_match('(relacao1=)', $this->tags)){
							$entre = entre('relacao1="', '"', $this->tags);
							$return .= ' <script> setTimeout(function(){ $("select#'.$entre.'").trigger("change"); }, .5); </script> ';
						}
					}
					return $return;
				}
			// RELACAO

			// GERENCIAR
				public function select_gerenciar($name){
					$return = '';
					$name = (isset($this->itens[1]) AND preg_match('(1_cate)', $this->itens[1])) ? $this->itens[1] : $name;
					if(isset($this->itens[2])){
						if($this->gerenciar == 1 OR $this->gerenciar == 3){
							$return .= '</div><div class="dtc pt2 pl5 o-h vam"> <a onclick="gerenciar_novo_item('.A.$name.A.', '.A.$this->itens[2].A.')"><img src="'.DIR.'/web/img/admin/icons/add.png" style="width:25px; height:25px; max-width: inherit"></a> ';
						}
						if($this->gerenciar == 2 OR $this->gerenciar == 3){
							$return .= '</div><div class="dtc pt2 pl5 o-h vam"> <a onclick="gerenciar_itens('.A.$name.A.', '.A.$this->itens[2].A.')"><img src="'.DIR.'/web/img/admin/icons/edit.png" style="width:25px; height:25px; max-width: inherit"></a> ';
						}
					}
					return $return;
				}
			// GERENCIAR




			// SELECT1
				public function select1($name, $id){
					$return  = '<select name="'.$name.'" '.$id.' '.$this->tags.' '.$this->onchange.'> ';
						$itens = explode('; ', $this->opcoes);
						for($c=0; $c<count($itens); $c++){
							$ex = explode('->', $itens[$c]);
							if( !$c AND ($ex[0] OR $this->filtro_avancado) )
								$return .= $this->selecione ? '<option value="">'.$this->selecione.'</option> ' : '';
							if(isset($ex[1])){
								$return .= '<option value="'.$ex[0].'" '.iff($this->value($name) == $ex[0], 'selected').'> ';
									$return .= $ex[1];
								$return .= '</option> ';
							}
						}
					$return .= '</select> ';

					return $return;
				}
			// SELECT1



			// SELECT MULTIPLE
				public function select_multiple($name, $id){
					$return = '';
					$return .= preg_match('(multiple)', $this->tags) ? '<input type="checkbox" checked value="" name="'.$name.'[]" class="dni" />' : '';
					$return .= '<select name="'.$name.iff(preg_match('(multiple)', $this->tags), '[]').'" '.$id.' '.$this->tags.' '.$this->onchange.' > ';

						$value = $this->value($name);

						if(isset($this->itens[1]) AND $this->itens[1]){
							$this->nao_existe = 1;
							$this->filtro = $this->filtro ? $this->filtro : " WHERE ".iff(LUGAR!='admin', STATUS, "lang = '".LANG."'")." ".$this->filtro_extra." ORDER BY ".$this->order." `nome` ASC ";
							$consulta = $this->read($this->itens[1]);
							if(isset($consulta) AND is_array($consulta)){
								foreach($consulta as $v){
									$z=0;
									if($value){
										$opcional = explode('-', $value);
										for($i=0; $i<count($opcional); $i++){
											if($opcional[$i] == $v->id) $z++;
										}
									}
									$return .= '<option value="'.$v->id.'" '.iff($z, 'selected').'> ';
										$return .= select_nome($name, $v);
									$return .= '</option> ';
								}
							}

						} else {
							$this->itens = explode('; ', $this->opcoes);
							for($c=0; $c<count($this->itens); $c++){
								$ex = explode('->', $this->itens[$c]);
								if( !$c AND ($ex[0] OR $this->filtro_avancado) )
									$return .= $this->selecione ? '<option value="">'.$this->selecione.'</option> ' : '';
								if(isset($ex[1])){
									$return .= '<option value="'.$ex[0].'" '.iff(preg_match('(-'.$ex[0].'-)', $this->value($name)), 'selected').'> ';
										$return .= $ex[1];
									$return .= '</option> ';
								}
							}
						}

					$return .= '</select> ';
					return $return;
				}
			// SELECT MULTIPLE



			// SELECT AUTOCOMPLETE
				public function select_autocomplete($name, $id){

					$gerenciar = ($this->gerenciar AND isset($this->itens[2])) ? 'gerenciar="'.$this->gerenciar.'" gerenciar_modulo="'.$this->itens[2].'" gerenciar_nome="'.$nome.'" gerenciar_table="'.$this->itens[1].'" gerenciar_value="'.$this->value($name).'"' : '';
					$return  = '<select name="'.$name.'" '.$id.' '.str_replace('design', 'autocomplete_'.$this->itens[1], $this->tags).' '.$this->onchange.' '.$gerenciar.' > ';

						$this->colunas = "id, nome";
						$this->nao_existe = 1;
						$this->filtro = " WHERE `lang` = '".LANG."' AND id = '".$this->value($name)."' ORDER BY `nome` ASC ";
						$consulta = $this->read($this->itens[1]);
						if(isset($consulta) AND is_array($consulta) AND $consulta){
							foreach($consulta as $value){
								$return .= '<option value="'.$value->id.'">'.$value->nome.'</option> ';
							}
						} else {
							$return .= '<option value="">'.$this->selecione.'</option> ';
						}

					$return .= '</select> ';

					$return .= '<script> ';
						$return .= '$(document).ready(function() { ';
							$return .= '$("select.autocomplete_'.$this->itens[1].'").select2({ ';
								$return .= 'minimumInputLength: 2, ';
								$return .= 'ajax: { ';
									$return .= 'type: "POST", ';
									$return .= 'url: DIR+"/admin/app/Ajax/Autocomplete/'.$this->itens[1].'.php", ';
									$return .= 'dataType: "json", ';
									$return .= 'delay: 250, ';
									$return .= 'data: function (params) { ';
										$return .= 'return { pesq: params.term }; ';
									$return .= '}, ';
									$return .= 'processResults: function (data, params) { ';
										$return .= 'var more = (params.page * 10) < data.total; ';
										$return .= 'return { ';
											$return .= 'results: data.itens, ';
											$return .= 'more: more ';
										$return .= '}; ';
									$return .= '}, ';
									$return .= 'cache: true ';
								$return .= '}, ';
								$return .= 'escapeMarkup: function (markup) { return markup; }, ';
								$return .= 'templateResult: ResultadoNome, ';
								$return .= 'templateSelection: Display ';
							$return .= '}); ';
							$return .= 'function ResultadoNome(data) { return data.value; } ';
							$return .= 'function Display (data) { return data.value || data.text; } ';
						$return .= '}); ';
					$return .= '</script> ';

					return $return;
				}
			// SELECT AUTOCOMPLETE




			// SELECT ESTADOS CIDADES BAIRROS
				public function select_localizacoes($name, $id){
					// ONCHANGE
					$this->onchange = '';
					if(preg_match('(rel_estados=)', $this->tags)){
						if(preg_match('(inserir_box)', $this->tags)){
							$this->onchange = 'onchange="rel_estados(this, 1)" ';
						} else{
							$this->onchange = 'onchange="rel_estados(this)" ';
						}
					}
					// ONCHANGE

					$return  = '<select name="'.$name.'" '.$id.' '.$this->tags.' '.$this->onchange.' > ';
						$return .= $this->selecione ? '<option value="">'.$this->selecione.'</option> ' : '';

						// Estados
						if($this->opcoes == '(estados)'){
							$item = 'estados';
							if($this->value($name)) $_GET['estados_rel'] = $this->value($name);

							$file = DIR_F.'/plugins/Json/localidades/estados.json';
							$json = json_decode(file_get_contents($file));
							$json = array( (object)(array('estados'=>$json)) );

						// Cidades
						} elseif($this->opcoes == '(cidades)'){
							$item = 'cidades';
							if(isset($_GET['estados_rel']) AND $_GET['estados_rel']){
								if($this->value($name)) $_GET['cidades_rel'] = $this->value($name);
								$_GET['estados_rel'] = (isset($_GET['estados_rel']) AND $_GET['estados_rel']) ? $_GET['estados_rel'] : str_replace('cidades', 'estados', $name);

								$file = DIR_F.'/plugins/Json/localidades'.BARRA.'cidades'.BARRA.$_GET['estados_rel'].'.json';
								$json = json_decode(file_get_contents($file));
							}

						// Bairros
						} elseif($this->opcoes == '(bairros)'){
							$item = 'bairros';
							if(isset($_GET['estados_rel']) AND $_GET['estados_rel'] AND isset($_GET['cidades_rel']) AND $_GET['cidades_rel']){
								$return .= '<option value="Centro" '.iff($this->value($name) == 'Centro', 'selected').'>Centro</option> ';

								$file = DIR_F.'/plugins/Json/localidades/bairros'.BARRA.$_GET['estados_rel'].'.json';
								$json = json_decode(file_get_contents($file));
							}
						}


						// Option
						if(isset($json) AND $json){
							foreach($json as $v){
								if($item!='bairros' OR $value->cidade == $_GET['cidades_rel']){
									foreach($v->$item as $value){
										$val = $item=='estados' ? $value->sigla : $value;
										$nome = $item=='estados' ? $value->nome : $value;
										$this_value = cod('asc->html', $this->value($name));
										$return .= '<option value="'.$val.'" '.iff($this_value == $val, 'selected').'> ';
											$return .= $nome;
										$return .= '</option> ';
									}
								}
							}
						}
						// Option


					$return .= '</select> ';

					return $return;
				}
			// SELECT ESTADOS CIDADES BAIRROS
		// SELECTS

















		// CHECKBOX
			public $check_ini = 1;
			public function checkbox($nome, $name, $tipo='checkbox'){

				// SET
					$set = '';
					if(preg_match('(set=")', $this->tags)){
						$set = entre('set="', '"', $this->tags);
					}
				// SET

				$return = '<div class="finput finput_'.$name.'" > ';
					$return .= $nome ? '<label class="lnome" for="'.$name.'" > <span '.$this->p.'> '.$nome.$this->validate().$this->dois_pontos.' </span> </label> ' : '';

					$return .= '<div class="input dbi" rel="tooltip" data-original-title="'.$this->extra.'"> ';

						if($tipo == 'checkbox'){
							$return .= $this->check_ini ? '<input type="checkbox" checked value="" name="'.$name.'[]" class="dni" />' : '';
						}

						$value = $this->value($name);
						if($this->filtro_avancado AND $value){
							$it = '-';
							foreach ($value as $k => $v){
								$it .= $v.'-';
							}
							$value = $it;
						}

						$itens = explode('(banco)->', $this->opcoes);
						if(isset($itens[1]) AND $itens[1]){
							$array = array();

							$this->colunas = "id, nome";
							$this->nao_existe = 1;
							$this->filtro = $this->filtro ? $this->filtro : " WHERE ".iff(LUGAR!='admin', STATUS, "lang = '".LANG."'")." ORDER BY `nome` ASC ";
							$consulta = $this->read($itens[1]);
							$this->filtro = '';
							if(isset($consulta) AND is_array($consulta)){
								foreach($consulta as $k => $v){
									$id = !preg_match('(id=")', $this->tags) ? 'id="'.$name.'_'.$v->id.'" ' : '';
									$z=0;
									if($value){
										$opcional = explode('-', $value);
										for($i=0; $i<count($opcional); $i++){
											if($opcional[$i] == $v->id) $z++;
										}
									}
									$array[$k] = (object)array();
									$array[$k] = $v;
									$array[$k]->checked = $z ? 'checked' : '';
								}
							}

						} else {

							$itens = explode('; ', $this->opcoes);
							for($c=0; $c<count($itens); $c++){
								$ex = explode('->', $itens[$c]);
								if(isset($ex[1])){
									$id = !preg_match('(id=")', $this->tags) ? 'id="'.$name.'_'.$ex[0].'" ' : '';
									$z=0;
									//if($value){
										$opcional = explode('-', $value);
										for($i=0; $i<count($opcional); $i++){
											if($opcional[$i] == $ex[0]) $z++;
										}
									//}
									$array[$c] = (object)array();
									$array[$c]->id = $ex[0];
									$array[$c]->nome = $ex[1];
									$array[$c]->checked = $z ? 'checked' : '';
								}
							}
						}

						$x=0;
						foreach ($array as $key => $v) { $x++;
							$return .= '<label class="'.$name.'_'.$v->id.' l'.$name.' w210 fll mr25"> ';
								$return .= '<input type="'.$tipo.'" value="'.$v->id.'" name="'.$name.'[]" '.$id.' '.$this->tags.' '.$v->checked.' /> ';
								$return .= '<span '.$this->p.' class="limit">';
									if(isset($set) AND $set){
										$return .= set($v->table, $v->id, $set);
									} else{
										$return .= $v->nome;
									}
								$return .= '</span> ';
							$return .= '</label>';
						}

						$return .= '<div class="h10 clear"></div> ';
					$return .= '</div> ';

				$return .= '</div> ';
				$return .= "\n\n";


				$this->extra = '';
				return $return;
			}
		// CHECKBOX




		// RADIO
			public function radio($nome, $name){
				return $this->checkbox($nome, $name, $tipo='radio');
			}
		// RADIO















		// TEXTAREA
			public function textarea($nome, $name){

				$id	= !preg_match('(id=")', $this->tags) ? 'id="'.tirar_barras_2pronto_virgula($name).'" ' : '';

				$limit1 = ''; $limit2 = '';
				$this->opcoes = (int)$this->opcoes;
				if($this->opcoes){
					$id = "'".$name."'";
					$limit1 = 'onkeyup="progreso_tecla(this, '.$this->opcoes.', '.$id.')" maxlength="'.$this->opcoes.'"';
					$limit2 = '<span id="progreso_'.$name.'" class="extra height20"></span>';
					$id = 'id="'.tirar_barras_2pronto_virgula($name).'" ';
				}
				$return = '<div class="finput finput_'.$name.' ftextarea pl10" > ';
					$return .= $nome ? '<label class="lnome p0" for="'.$name.'" > <span '.$this->p.'> '.$nome.$this->validate().$this->dois_pontos.' </span> </label> ' : ' ';
					$return .= '<div class="clear"></div> ';
					//$return .= $nome ? '<label class="lnome p0" for="'.$name.'" > <span '.$this->p.'> &nbsp; </span> </label> ' : ' ';
					$return .= '<div class="input dbi" rel="tooltip" data-original-title="'.$this->extra.'"> <textarea name="'.$name.'" '.$id.' '.$this->tags.' '.$limit1.' >'.$this->value($name).'</textarea> </div> ';
					$return .= $limit2;
					$return .= '<div class="clear"></div> ';
				$return .= '</div> ';
				$return .= "\n\n";

				$this->extra = '';
				return $return;
			}
		// TEXTAREA







		// EDITOR
			public function editor($nome, $name, $txt_fixo='editor'){

				$return = '';
				$tipo = str_replace('txt_editor', '', $name);

				$value = $this->value;
				$id	= !preg_match('(id=")', $this->tags) ? 'id="'.tirar_barras_2pronto_virgula($name).'" ' : '';

				$return .= '<div class="finput finput_editor min-h300 pl10 pb20" > ';
					$return .= $nome ? '<label class="lnome p0" for="'.$name.'" > <span '.$this->p.'> '.$nome.$this->validate().$this->dois_pontos.' </span> </label> ' : ' ';
					$return .= '<div class="clear"></div> ';

					$txt = '';
					if($txt_fixo!='editor'){
						$txt = $txt_fixo;
					} elseif(isset($value->table) AND $value->table){
						$this->colunas = "txt";
						$this->prepare = array($value->table, $value->id, $tipo);
						$this->filtro = " WHERE `tabelas` = ? AND `item` = ? AND `tipo` = ? ";
						$z_txt = $this->read_unico('z_txt');
						if(isset($z_txt->txt)){
							$txt = str_replace('/web/ckfinder/', DIR.'/web/ckfinder/', base64_decode($z_txt->txt) );
						}
					}
					$return .= '<div class="input dbi"> <textarea '.$id.' name="'.$name.'">'.$txt.'</textarea> </div> ';
					$return .= ' <script> editor_criar_extarea('.A.$name.A.'); </script> ';

				$return .= '</div> ';
				$return .= "\n\n";

				return $return;

			}
		// EDITOR






		// BUTTON
			public function button($nome, $name){

				$id		= !preg_match('(id=")', $this->tags) ? 'id="'.tirar_barras_2pronto_virgula($name).'" ' : '';
				$value	= $this->value($name)!='' ? 'value="'.$this->value($name).'" ' : '';
				$opcoes	= $this->opcoes ? ' onclick="'.str_replace(' ', '', $this->opcoes).'" ' : '';
				$extra	= '<div class="extra '.$name.'">'.$this->extra.'</div> <div class="clear"></div> ';

				$return = '<div class="finput fbutton finput_'.$name.'" rel="tooltip" data-original-title="'.$this->extra.'"> ';
					$return .= $extra;
					$return .= '<button type="button" name="'.$name.'" '.$id.' '.$value.' '.$this->tags.' '.$opcoes.'> <span '.$this->p.'> '.$nome.' </span> </button> ';
				$return .= '</div>';
				$return .= "\n\n";

				$this->extra = '';
				return $return;
			}
		// BUTTON





		// FILE EDITOR
			public function file_editor($nome, $name){
				$return = '';

				$value = $this->value;
				if($value){
					$value = $value->$name;
				}

		
				$return .= '<div class="funcao_input '.$name.'_input"> ';
					$return .= $nome ? '<span>'.$nome.'</span> ' : '';
					$return .= '<div class="clear"></div> ';
				
					if(!isset($_SESSION['plugin']['editor'])){
						$return .= '<script src="'.DIR.'/plugins/Ckeditor/ckeditor/ckeditor.js"></script>';
						$_SESSION['plugin']['editor'] = 'ok';
					}
					if(!isset($_SESSION['plugin']['ckfinder'])){
						$return .= '<script src="'.DIR.'/plugins/Ckeditor/ckfinder/ckfinder.js"></script>';
						$_SESSION['plugin']['ckfinder'] = 'ok';
					}
					$return .= '<script type="text/javascript"> ';
						$return .= 'function BrowseServer_'.$name.'(){ ';
							$return .= 'var finder = new CKFinder(); ';
							$return .= 'finder.basePath = "../../aa/";	/* The path for the installation of CKFinder (default = "/ckfinder/"). */ ';
							$return .= 'finder.selectActionFunction = SetFileField_'.$name.'; ';
							$return .= 'finder.popup(); ';
						$return .= '}; ';
						$return .= 'function SetFileField_'.$name.'( fileUrl ){ ';
							$return .= 'document.getElementById( "'.$name.'" ).value = fileUrl; ';
						$return .= '}; ';
					$return .= '</script> ';
					$return .= '<input id="'.$name.'" name="'.tirar_barras($name).'" type="text" class="width300 design" value="'.$value.'" /> ';
					$return .= '<input type="button" value="Buscar Arquivo" onclick="BrowseServer_'.$name.'();" class="design_submit" /> ';
				$return .= '</div> ';
				$return .= "\n\n";

				return $return;

			}
		// FILE EDITOR



		// INFO
			//public function info(){
				//return $this->tags;
			//}
		// INFO




		// BOXX
			public function boxx($value, $linhas){
				$return = '';
				if(isset($value['input']['opcoes']) AND isset($value['input']['tags'])){
					$return .= '</fieldset>';

					$html = '';
					$rel = $value['input']['opcoes'];
					$file = $value['input']['tags'];

					if(isset($linhas->id) AND $linhas->id){
						$mysql = new Mysql();
						$mysql->filtro = " WHERE lang = '".LANG."' AND ".$linhas->table." = '".$linhas->id."' ORDER BY id asc ";
						$consulta = $mysql->read( str_replace('_zz', '', $rel) );
						foreach ($consulta as $key1 => $value1) {
		            		include DIR_F.'/admin/app/Ajax/Boxx/'.$file;
						}
					}
					unset($value1);

					$boox_zerado = 1;
					$return .= '<div class="boox_zerado dn">';
		    			include DIR_F.'/admin/app/Ajax/Boxx/'.$file;
					$return .= '</div>';

			        $return .= '<button type="button" class="design mt10" onclick="boxx_novo(this)"> <p>  <i class="fa fa-plus-circle mr3 mb1 fz16"></i> Novo Atributo </span> </button>';
			    }

				return $return;
			}
		// BOXX



	}


?>