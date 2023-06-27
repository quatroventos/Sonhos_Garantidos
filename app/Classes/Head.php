<?

	class Head extends Mysql {

		private $quebra = "\n";

		public function meta(){

			$this->colunas = 'meta_title, meta_description, meta_keywords, foto, foto1, script';
			$this->filtro = " WHERE `lang` = '".LANG."' AND `tipo` = 'meta' ";
			$meta = $this->read_unico('configs');

			$title_tag			= isset($meta->meta_title) ? $meta->meta_title : '';
			$descricao_tag		= isset($meta->meta_description) ? $meta->meta_description : '';
			$palavra_chave_tag	= isset($meta->meta_keywords) ? $meta->meta_keywords : '';

			// META AUTOMATICA
				$achou = 0;
				$tables = array($_GET['pg'], $_GET['pg'].'s', $_GET['pg'].'1', substr($_GET['pg'], 0, -1), substr($_GET['pg'], 0, -1).'s', substr($_GET['pg'], 0, -1).'is', substr($_GET['pg'], 0, -2).'oes');
				foreach($tables as $table){
					if(!$achou and $_GET['id']!='-' AND !isset($_GET['id_old'])){
						$this->nao_existe = 1;
						$this->colunas = 'id, nome, nome_meta, foto, txt_meta, txt';
						$this->prepare = array($_GET['id']);
						$this->filtro = " WHERE `id` = ? ";
						$consulta = $this->read($_GET['pg_real']=='textosp' ? 'paginas' : $table);
						if($consulta and is_array($consulta)){ $achou++;
							foreach ($consulta as $key => $value){
								if($_GET['pg'] == 'imovel'){
									$this->colunas = 'cidades, estados, categorias';
									$this->prepare = array($_GET['id']);
									$this->filtro = " WHERE `id` = ? ";
									$consulta = $this->read_unico($table);
									$value->nome = rel('imoveis1_cate', $consulta->categorias).' - '.$consulta->cidades.'/'.$consulta->estados;
								}
								if(isset($value->nome_meta) and $value->nome_meta){
									$title_tag = $value->nome_meta;
								} elseif(isset($value->nome) and $value->nome){
									$title_tag = $value->nome;
								}
								if(isset($value->txt_meta) and $value->txt_meta){
									$descricao_tag = $value->txt_meta;
								} elseif(isset($value->txt) and $value->txt){
									$descricao_tag = $value->txt;
								} elseif(isset($value->nome) and $value->nome){
									$descricao_tag = $value->nome;
								}

								if($value->foto){
									$foto_tag_foto = $value->foto;
								}
							}
						}
					}
				}
			// META AUTOMATICA

			// META MANUAL
				if(isset($_GET['nome_meta']) or isset($_GET['txt_meta'])){
					$title_tag 		= isset($_GET['nome_meta'])	? $title_tag.' - '.$_GET['nome_meta'] : $title_tag;
					$descricao_tag	= isset($_GET['txt_meta']) ? $descricao_tag.' - '.$_GET['txt_meta'] : $descricao_tag;
				}
			// META MANUAL

			// NOME DA PG DE N FOR INTERNA
				if((!isset($consulta) OR !$consulta) AND $_GET['pg'] != 'home'){
					$title_tag .= ' - '.titulos_nome('', $_GET['pg']);;
				}
			// NOME DA PG DE N FOR INTERNA

			// META TAGS
				$return  = $this->quebra;
				$return .= '<title>'.limit($title_tag, 70).'</title>'.$this->quebra;
				//$return .= '<base href="'.DIR_C.'">'.$this->quebra;
				$return .= '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'.$this->quebra;
				$return .= '<meta name="description" content="'.limit($descricao_tag, 160).'" />'.$this->quebra;
				$return .= '<meta name="KEYWORDS" content="'.$palavra_chave_tag.'" />'.$this->quebra;
				$return .= '<meta name="SUBJECT" content="'.$title_tag.'"/>'.$this->quebra;
				$return .= '<meta name="Abstract" content="'.$descricao_tag.'" />'.$this->quebra;
				$return .= '<meta name="company" content="'.$descricao_tag.'" />'.$this->quebra;

				$return .= '<meta name="distribution" content="Global" />'.$this->quebra;
				$return .= '<meta name="RATING" content="General" />'.$this->quebra;
				$return .= '<meta name="ROBOTS" content="INDEX, FOLLOW" />'.$this->quebra;
				$return .= '<meta name="Googlebot" content="index,follow" />'.$this->quebra;
				$return .= '<meta name="MSNBot" content="index,follow,all" />'.$this->quebra;
				$return .= '<meta name="InktomiSlurp" content="index,follow,all" />'.$this->quebra;
				$return .= '<meta name="Unknownrobot" content="index,follow,all" />'.$this->quebra;
				$return .= '<meta name="REVISIT-AFTER" content="2 days" />'.$this->quebra;
				$return .= '<meta name="language" content="PT-BR" />'.$this->quebra;
				$return .= '<meta name="Audience" content="all" />'.$this->quebra;
				$return .= '<meta name="url" content="'.$_SERVER["HTTP_HOST"].'" />'.$this->quebra;
				$return .= '<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">'.$this->quebra;
				//$return .= '<noscript><meta http-equiv="Refresh" content="1; url='.DIR.'/app/Errors/erro_java.php"></noscript>'.$this->quebra;

				$return .= '<meta itemprop="name" content="'.limit($title_tag, 70).'">'.$this->quebra;
				$return .= '<meta itemprop="description" content="'.limit($descricao_tag, 160).'">'.$this->quebra;
				$return .= '<meta itemprop="url" content="'.DIR_ALL.'">'.$this->quebra;

				$return .= '<meta property="og:site_name" content="'.NOME.'" />'.$this->quebra;
				$return .= '<meta property="og:locale" content="pt_BR" />'.$this->quebra;
				$return .= '<meta property="og:title" content="'.limit($title_tag, 70).'" />'.$this->quebra;
				$return .= '<meta property="og:description" content="'.limit($descricao_tag, 160).'" />'.$this->quebra;
				$return .= '<meta property="og:url" content="'.DIR_ALL.'" />'.$this->quebra;
				$return .= '<meta property="og:type" content="article" />'.$this->quebra;

				$foto_tag = '';
				if(isset($foto_tag_foto)){
					$foto_tag = $foto_tag_foto;
				} elseif(isset($meta->foto) AND $meta->foto){
					$foto_tag = $meta->foto;
				}
				$foto_tag = '';
				if(isset($foto_tag_foto)){
					$foto_tag = $foto_tag_foto;
				} elseif(isset($meta->foto) AND $meta->foto){
					$foto_tag = $meta->foto;
				}
				if($foto_tag){
					$ex = nome_da_foto($foto_tag);
					if($ex['ext']){
						if($ex['ext'] != 'webp'){
							$img = new Imagem();
							$value_img = (object)array();
							$value_img->foto = $foto_tag;
							$foto_tag = $img->img($value_img, 400, 400, 1, 1);
							$foto_tag = str_replace(DIR, '', $foto_tag);
							$img_tag = getimagesize(DIR_F.$foto_tag);
						} else {
							$img_tag = getimagesize(DIR_F.'/web/fotos/'.$foto_tag);
							$foto_tag = '/web/fotos/'.$foto_tag;
						}
					}

					$return .= '<meta property="og:image" content="'.DIR_C.$foto_tag.'" />'.$this->quebra;
					$return .= '<meta property="og:image:alt" content="'.$title_tag.'" />'.$this->quebra;
					$return .= '<meta property="og:image:type" content="'.$img_tag['mime'].'" />'.$this->quebra;
					$return .= '<meta property="og:image:width" content="'.$img_tag[0].'" />'.$this->quebra;
					$return .= '<meta property="og:image:height" content="'.$img_tag[1].'" />'.$this->quebra;
				}

				$return .= '<link rel="canonical" href="'.DIR_ALL.'">';
			// META TAGS

			// FAVICON
				$ico = $meta->foto1 ? DIR.'/web/fotos/'.FOTOS.$meta->foto1 : DIR.'/web/img/ico.ico';
				$return .= '<link rel="shortcut icon" href="'.$ico.'" type="image/x-icon" />'.$this->quebra;
			// FAVICON

			// SCRIPT
				$return .= stripslashes(cod('asc->html', $meta->script).$this->quebra.$this->quebra);
			// SCRIPT

			// PRELOAD
				$this->colunas = 'nome';
				$this->filtro = " WHERE  `tipo` = 'informacoes' AND lang = '".LANG."' ";
				$info = $this->read_unico('configs');
				$return .= '<link rel="preload" href="'.DIR.'/plugins/style.css?'.cod('asc->html', $info->nome).'" as="style" /> ';
				$return .= '<link rel="preload" href="'.DIR.'/plugins/js.js?'.cod('asc->html', $info->nome).'" as="script" /> ';
			// PRELOAD

			return($return);

		}


	}


?>