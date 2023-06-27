<?

	class Upload extends Mysql {


		// Gerar Nome
		private function gerar_nome($extensao, $nome, $table, $ult_id){
			global $configg_img;
		
			// Gera um nome único para a imagem
			$temp = substr(md5(uniqid(time())), 0, 10);
			$imagem_nome = $temp . "." . $extensao;
			
			// Verifica se o arquivo já existe, caso positivo, chama essa função novamente
			if(isset($configg_img["diretorio"]) AND file_exists($configg_img["diretorio"] . $imagem_nome)){
				$imagem_nome = $this->gerar_nome($extensao, $nome, $table, $ult_id);

			} else {
				$nome_da_img = sem('acentos_all', $table).'_'.sem('acentos_all', $ult_id).'_';

				$this->colunas = 'nome';
				$this->prepare = array($ult_id);
				$this->filtro = " WHERE `id` = ? ";
				$consulta = $this->read_unico($table);
				if($table == 'imoveis'){
					$this->colunas = 'cidades, estados, categorias';
					$this->prepare = array($ult_id);
					$this->filtro = " WHERE `id` = ? ";
					$consulta = $this->read_unico($table);
					$nome_da_img .= sem('acentos_all', rel('imoveis1_cate', $consulta->categorias).'-'.$consulta->cidades.'-'.$consulta->estados);
				} elseif(isset($consulta->nome)){
					$nome_da_img .= sem('acentos_all', $consulta->nome);
				} else {
					$ex = explode('.', $nome);
					$nome_da_img .= sem('acentos_all', $ex[0]);
				}
				$nome_da_img =  substr($nome_da_img, 0, 50);

				return $nome_da_img.'_'.sem('url', $_SERVER['HTTP_HOST']).'_zz'.$imagem_nome;
			}
		}


		// Gravar File
		private function gravar_file($key, $ult_id, $array=0, $k=0){
			global $table;

			$erro = array();
			$configg_img = array();
			$configg_img["diretorio"] = DIR_F."/web/fotos/".FOTOS;

			if($array)
				$arquivo = isset($_FILES[$key][$k]) ? $_FILES[$key][$k] : FALSE;
			else
				$arquivo = isset($_FILES[$key]) ? $_FILES[$key] : FALSE;
	
			if($arquivo AND $this->upload_file($arquivo["type"])){
				$ext_fim = '';
				$ex = explode('.', $arquivo["name"]);
				foreach ($ex as $k => $v) {
					$ext_fim = $v;
				}
				$ext = explode('.'.$ext_fim, $arquivo["name"]);
				$imagem_nome = $this->gerar_nome($ext_fim, $arquivo["name"], $table, $ult_id);

				$imagem_dir = $configg_img["diretorio"].$imagem_nome;
				if( move_uploaded_file($arquivo["tmp_name"], $imagem_dir) and $ult_id and !$array){

					// CONVERTENDO PARA WEBP E JPG SE FOR PNG
						if($table != 'configs' AND $table != 'banner'){
							$imagem_nome = new_file_upload_nopng_webp($imagem_nome, $configg_img["diretorio"]);
						}
					// CONVERTENDO PARA WEBP E JPG SE FOR PNG

					unset($this->campo);
					$this->campo[$key] = $imagem_nome;
					$this->filtro = " where id = '".$ult_id."' ";
					$this->update($table);
				}
				return $imagem_nome;
			}

		}

		private function upload_file($arquivo){
			$return = 0;
			if($arquivo == 'image/jpeg') $return = 1; // jpeg ou jpg
			if($arquivo == 'image/jpg') $return = 1; // jpg
			if($arquivo == 'image/pjpeg') $return = 1; // jpeg ou jpg
			if($arquivo == 'image/png') $return = 1; // png
			if($arquivo == 'image/x-png') $return = 1; // png
			if($arquivo == 'image/gif') $return = 1; // gif
			if($arquivo == 'image/svg+xml') $return = 1; // svg
			if($arquivo == 'image/webp') $return = 1; // webp
			if($arquivo == 'image/x-icon') $return = 1; // ico

			if($arquivo == 'application/pdf') $return = 1; // pdf

			if($arquivo == 'text/csv') $return = 1; // csv
			if($arquivo == 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet') $return = 1; // xls ou xlsx
			if($arquivo == 'application/vnd.ms-excel') $return = 1; // xls ou xlsx

			if($arquivo == 'video/mp4') $return = 1; // mp4
			if($arquivo == 'video/quicktime') $return = 1; // mov
			if($arquivo == 'video/avi') $return = 1; // avi

			if($arquivo == 'application/x-shockwave-flash') $return = 1; // swf

			if($arquivo == 'audio/mpeg') $return = 1; // mp3
			if($arquivo == 'audio/vnd.dlna.adts') $return = 1; // acc
			if($arquivo == 'audio/x-ms-wma') $return = 1; // wma
			if($arquivo == 'audio/x-m4a') $return = 1; // m4a

			return $return;
		}


		// Verificar Files
		public function fileUpload($ult_id, $caminho, $mais_fotos=0, $multifotos_no=0, $table1=''){
			global $table;
			$table = $table1 ? $table1 : $table;



			// Fotos
            foreach ($_FILES as $key => $value){
                if(preg_match('(foto)', $key)){
                	$ex = explode('foto', $key);
                	if(!$ex[0] and isset($_FILES[$key]) and $_FILES[$key]['type']){
						$return[] = $this->gravar_file($key, $ult_id);
					}
				}
			}

			// Multi Fotos
            foreach ($_FILES as $key => $value){
                if(preg_match('(multifotos)', $key) and !$multifotos_no){
                	$itens = array();
                	$ex = explode('multifotos', $key);
                	if(!$ex[0] and is_array($value)){
                		$_FILES[$key] = inverter_key($_FILES[$key]);
                		foreach ($_FILES[$key] as $k => $v) {
                			$itens[] = $this->gravar_file($key, $ult_id, 1, $k);
                		}
					}
					if($itens and !$mais_fotos){
						$this->colunas = $key;
						$this->prepare = array($ult_id);
						$this->filtro = " WHERE `id` = ? ";
						$consulta = $this->read_unico($table);
						if(isset($consulta->$key)){
							$array = unserialize(base64_decode($consulta->$key));
							$itens = (is_array($array) and $array) ? array_merge($array, $itens) : $itens;
							unset($this->campo);
							$this->campo[$key] = base64_encode(serialize($itens));
							$this->filtro = " where id = '".$ult_id."' ";
							$this->update($table);
						}
					} elseif($itens and $mais_fotos){
						$return = $itens;
					}

				}
			}

			// Excluir Fotos
            foreach ($_POST as $key => $value){
                if($key == 'sem_foto'){
		            foreach ($value as $k => $v){
		            	if(preg_match('(foto)', $k)){
		            		unset($this->campo);
							$this->campo[$k] = '';
							$this->filtro = " where id = '".$ult_id."' ";
							$this->update($table);
						} else {
							// boxx
							if(is_array($v)){
								$k = str_replace('boxx[', '', $k);
								foreach ($v as $k1 => $v1){
					            	if(preg_match('(foto)', $k1)){
					            		foreach ($v1 as $k2 => $v2){
					            			unset($this->campo);
											$this->campo[$k1] = '';
											$this->filtro = " where id = '".$k2."' ";
											$this->update($k);
										}
									}
								}
							}
							// boxx
						}
					}
				}
			}

			// Excluir Multi Fotos
            foreach ($_POST as $key => $value){
                if($key == 'sem_multifotos'){
		            foreach ($value as $k => $v){
						$this->colunas = $k;
						$this->prepare = array($ult_id);
						$this->filtro = " WHERE `id` = ? ";
						$consulta = $this->read_unico($table);
						$array = isset($consulta->$k) ? unserialize(base64_decode($consulta->$k)) : array();
			            foreach ($v as $k1 => $v1){
							foreach ($array as $k2 => $v2) {
								if($v1 == $k2){
									unset($array[$k2]);
								}
							}
						}
						unset($this->campo);
						$this->campo[$k] = base64_encode(serialize($array));
						$this->filtro = " where id = '".$ult_id."' ";
						$this->update($table);
					}
				}
			}
		

			if(isset($return))
				return $return;

		}

	}

?>