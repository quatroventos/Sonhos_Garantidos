<?

	class Imagem extends Mysql {

		public $foto = 'foto';
		public $caminho = DIR_F.'/web/fotos/'.FOTOS;
		public $dir;

		public $tags;
		public $w100p=1;
		public $link;
		public $link2;
		public $zoom=0;
		public $zoom_w=0;
		public $zoom_h=0;
		public $real;
		public $sem_img;
		public $carregamento=1;


		public function img($value, $width=0, $height=0, $back=0, $no_webp=0, $marca_dagua=0){

			//if(MOBILE){
				$this->carregamento = 0;
			//}

			$ex = explode('?', DIR_D);
			if($ex[0] == '/'){
				$this->caminho = DIR_F.'/web/fotos/'.FOTOS;
			}

			$dir  = $this->dir ? $this->dir : DIR;
			$rand = rand();

			// WIDTH E HEIGHT AUTOMATICO
				if(!$width){
					$width = wwhh($this->foto, $value->id, $value->table, 0);
					$height = wwhh($this->foto, $value->id, $value->table, 1);
				}
			// WIDTH E HEIGHT AUTOMATICO

			$width_2 = $width; //$width*2;
			$height_2 = $height; //$height*2;

			$nome_foto = $this->foto;
			$nome_da_foto = nome_da_foto($value->$nome_foto);
			$title = isset($value->nome) ? $value->nome : $nome_da_foto['nomee'];
			$title = (isset($value->multifotos) AND $value->multifotos == 'ok') ? '' : $title; // Multifotos
			$title = (isset($value->table) AND $value->table=='configs') ? '' : $title;
			$title = (isset($value->table) AND $value->table=='pedidos') ? '' : $title;




			// ZOOM
				if($this->zoom){
					if(preg_match('(class=")', $this->tags)){
						$this->tags = str_replace('class="', 'class="Plugin_Zoom ', $this->tags);
					} else {
						$this->tags = 'class="Plugin_Zoom" ';
					}
					$zoom_w = $this->zoom_w ? $this->zoom_w : 0;
					$zoom_h = $this->zoom_h ? $this->zoom_h : 0;
					$ex = nome_da_foto($value->$nome_foto);
					$this->tags .= ' '.iff($zoom_w, 'zoom_w="'.$zoom_w.'"').' '.iff($zoom_h, 'zoom_h="'.$zoom_h.'"').' data-zoom-image="'.DIR.'/web/fotos/'.FOTOS.$ex['nome'].'.webp" ';
				}
			// ZOOM




			// IMG - BASE 64
				if(preg_match('(data:)', strtolower($value->$nome_foto)) AND preg_match('(;base64,)', strtolower($value->$nome_foto)) AND !$back){
					if($back){
						$return = $value->$nome_foto;
					} else {
						$return = '<img src="'.$value->$nome_foto.'" style="max-width: 100%; max-height: '.$height.'px;" '.$tamanho.' '.$this->tags.' title="'.$title.'" alt="'.$title.'" name="'.$title.'" />';
					}
			// IMG - BASE 64



			// SEM IMG OU NAO EXISTE
				} elseif( (!$value->$nome_foto AND $this->sem_img) OR (!file_exists($this->caminho.$value->$nome_foto)) AND !$back){
					if($back){
						$return = $dir.'/web/img/outros/sem_img.jpg';
					} else {
						$return = '<img src="'.$dir.'/web/img/outros/sem_img.jpg" '.$this->tags.' style="max-width: 100%; max-height:'.$height.'px;" />';
					}
			// SEM IMG OU NAO EXISTE



			// FLASH -> SWF
				} elseif( preg_match('(.swf)', strtolower($value->$nome_foto)) AND !$this->link AND !$back ){
					if($back){
						$return = '';
					} else {
						$return = flash($width, $height, $dir.'/web/fotos/'.FOTOS.$value->foto);
					}
			// FLASH -> SWF




			// IMG -> WEBP JPEG, JPJ, GIF, PNG, BMP
				} elseif( preg_match('(.webp)', strtolower($value->$nome_foto)) OR preg_match('(.pjpeg)', strtolower($value->$nome_foto)) OR preg_match('(.jpeg)', strtolower($value->$nome_foto)) OR preg_match('(.jpg)', strtolower($value->$nome_foto)) OR preg_match('(.gif)', strtolower($value->$nome_foto)) OR preg_match('(.png)', strtolower($value->$nome_foto)) OR preg_match('(.bmp)', strtolower($value->$nome_foto)) ){
					// PNG ou BMP
					if( preg_match('(.webp)', strtolower($value->$nome_foto)) OR preg_match('(.png)', strtolower($value->$nome_foto)) OR preg_match('(.bmp)', strtolower($value->$nome_foto)) ){
						$this->real = 1;
					} else {
						$tng = new tNG_DynamicThumbnail("../", "KT_thumbnail");
						$tng->setFolder($this->caminho);
						$tng->setRenameRule($value->$nome_foto);
						$tng->setResize($width_2, $height_2, true);
						$tng->Execute();
						$tng->setResize($width, $height, true);
						$tng->Execute();
					}

					// WEBP
						if(!$this->real AND isset($value->table) AND $value->table != 'banner_XXXXX'){
							$file = $this->caminho.'thumbnails/'.$nome_da_foto['nome'].'_'.$width_2.'x'.$height_2.'.'.$nome_da_foto['ext'];
							$new_file = $this->caminho.'thumbnails/'.$nome_da_foto['nome'].'_'.$width_2.'x'.$height_2.'.webp';
							if(!file_exists($new_file) AND file_exists($file)){
								// MARCA DAGUA
									//if($marca_dagua){ marca_dagua($file); }
								// MARCA DAGUA

								$image = imagecreatefromstring(file_get_contents($file));
								if(QUALIDADE_WEBP_THUMB){
									imagewebp($image, $new_file, QUALIDADE_WEBP_THUMB);
								} else {
									imagewebp($image, $new_file);
								}
								imagedestroy($image);
							} elseif(!file_exists($file)){
								$this->real = 1;
							}
						}
					// WEBP

					// CONFIGURACOES
						// IMG
						$img_C = '/web/fotos/'.FOTOS.'thumbnails/'.$nome_da_foto['nome'].'_'.$width_2.'x'.$height_2;
						$img_ext = '.webp';
						if($this->real){
							$ex = nome_da_foto($value->$nome_foto);
							$img_C = '/web/fotos/'.FOTOS.$ex['nome'];
							$img_ext = '.'.$ex['ext'];
						}
						if(isset($value->table) AND $value->table == 'banner_XXXXX'){ // banner nao webp
							$ex = nome_da_foto($value->$nome_foto);
							$img_ext = '.'.$ex['ext'];
						}
						// VERIFICAR SE A IMG WEBP FOI CRIADO CORRETAMENTE
							if(file_exists(DIR_F.$img_C.'.webp')){
								$mediddas_webp = getimagesize(DIR_F.$img_C.'.webp');
								if(!$mediddas_webp[0]){
									$img_ext = '.'.$nome_da_foto['ext'];
								}
							} else {
								$no_webp = 1;
							}
						// VERIFICAR SE A IMG WEBP FOI CRIADO CORRETAMENTE

						// RESTRICOES DA EXTRENSAO
							if($no_webp){
								$ex = nome_da_foto($value->$nome_foto);
								$img_ext = '.'.$ex['ext'];
							}
							if($this->real == 'png'){
								$img_ext = '.png';
							}
						// RESTRICOES DA EXTRENSAO

						$img = $dir.$img_C.$img_ext;

						// TAMANHO
						$tamanho = '';
						//$mediddas = getimagesize(DIR_F.$img_C.'.'.$nome_da_foto['ext']);
						//$tamanho = $mediddas[3];

						// Max-w100p
						if($this->w100p){
							if(preg_match('(class=")', $this->tags)){
								$this->tags = str_replace('class="', 'class="max-w100p ', $this->tags);
							} else {
								$this->tags = 'class="max-w100p" ';
							}
						}

						// CARREGAMENTO
						if($this->carregamento AND LUGAR == 'site'){
							$img = DIR.'/web/img/outros/spacer.gif" img_load="img_'.$rand.'" src_load="'.$img;
						}
					// CONFIGURACOES






					// BACK
						if($back){
							$return = $img;
					// BACK

					// LINK
						} elseif($this->link OR $this->link2){
							//$tng_link = new tNG_DynamicThumbnail("../", "KT_thumbnail");
							//$tng_link->setFolder($this->caminho);
							//$tng_link->setRenameRule($value->$nome_foto);
							//$tng_link->setResize(800, 600, true);
							//$tng_link->Execute();

							//$img_link = $dir.'/web/fotos/'.FOTOS.'thumbnails/'.$nome_da_foto['nome'].'_800x600.'.$nome_da_foto['ext'];

							if($this->link2){
								$foto = $value->foto1;
							} else {
								$ex = nome_da_foto($value->$nome_foto);
								if($ex['ext'] == 'webp'){
									$im = imagecreatefromwebp(DIR.'..'.$img_C.$img_ext);
									imagejpeg($im, DIR.'..'.$img_C.'.jpeg', 100);
									$foto = $ex['nome'].'.jpeg';
								} else {
									$foto = $value->$nome_foto;
								}
							}
							$img_link = $dir.'/web/fotos/'.FOTOS.$foto;

							$return = '	<a href="'.$img_link.'" data-imagelightbox="'.iff($this->link==1, 'a', 'c').'">
											<img src="'.$img.'" style="max-width: '.$width.'px; max-height: '.$height.'px;" '.$tamanho.' '.$this->tags.' title="'.$title.'" alt="'.$title.'" name="'.$title.'" />
										</a>';
					// LINK


					// NORMAL
						} else {
							$return = '<img src="'.$img.'" style="max-width: '.$width.'px; max-height: '.$height.'px;" '.$tamanho.' '.$this->tags.' title="'.$title.'" alt="'.$title.'" name="'.$title.'" />';
						}
					// NORMAL






					// IMG LOAD
						if($this->carregamento AND LUGAR == 'site'){
							$return .= '<script> $(document).ready(function(){ img_load("img_'.$rand.'", "'.$width.'", "'.$height.'") }); </script>';
						}
					// IMG LOAD
			// IMG -> WEBP JPEG, JPJ, GIF, PNG, BMP






			// VAZIO
				} else $return = '';
			// VAZIO








			$this->foto = 'foto';
			//$this->caminho = '../web/fotos/'.FOTOS;

			$this->tags = "";
			$this->link = 0;
			$this->link2 = 0;
			$this->zoom = 0;
			$this->zoom_w = 0;
			$this->zoom_h = 0;
			$this->real = "";
			$this->sem_img = "";
			$this->carregamento = 1;

			return($return);
		}

	
	}


?>