<?


	class Mysql  {
 
		protected $db;

		public $colunas = "*";
		public $prepare = array();
		public $filtro;
		public $campo;
		public $logs=1;
		public $transacao;
		public $json;

        
        public function __construct() {
			global $localhost_config, $nome_config, $senha_config, $banco_config;
			try {
				$this->db = new PDO('mysql:host='.$localhost_config.';dbname='.$banco_config, $nome_config, $senha_config, array(PDO::MYSQL_ATTR_INIT_COMMAND => 'SET sql_mode=""'));
				$this->db->setAttribute( PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION );
			} catch (PDOException $e) {
				global $LOCAL;
				if($LOCAL){
					LOCAL();
					echo ('O servidor esta fora do ar! Aguarde em alguns instantes o site voltara a funcionar! <span style="display:none">'.$e->getMessage().'</span>');
					echo '<script>setTimeout(function(){ window.location.reload() }, 2000);</script>';
					exit();
				} else {
					$t = isset($_GET['t']) ? $_GET['t']+1 :0;
					if($t < 5){
						echo 'carregando...';
						echo '<script>setTimeout(function(){ window.parent.location = "'.(DIR_ALL.($t==0 ? '?' : '&').'t='.$t).'"; }, 2000);</script>';
						exit();
					} else {
						die('O servidor esta fora do ar! Aguarde em alguns instantes o site voltara a funcionar! <span style="display:none">'.$e->getMessage().'</span>');
					}
				}
			}		
		}


		public function conecta($localhost_config, $nome_config, $senha_config, $banco_config){
			try {
				$this->db = new PDO('mysql:host='.$localhost_config.';dbname='.$banco_config, $nome_config, $senha_config);
				$this->db->setAttribute( PDO::ATTR_ERRMODE , PDO::ERRMODE_EXCEPTION );
			} catch (PDOException $e) {
				die('O servidor esta fora do ar! Aguarde em alguns instantes o site voltara a funcionar! <span style="display:none">'.$e->getMessage().'</span>');
			}		
		}



		// Read
		public $nao_existe;
		public $nao_existe_all;
		public function read($tabela, $pags=0){
			try {
				if($pags){
					$pagg = new Paginacao();
					$pagg->pags = $pags;
					$pagg->colunas = $this->colunas;
					$pagg->prepare = $this->prepare;
					$pagg->filtro = $this->filtro;
					return($pagg->pag($tabela));

				} else {
					if($this->prepare){
						try{
							foreach ($this->prepare as $key => $value) {
								$this->prepare[$key] = sem('acentos', $value);
							}
							$sql = $this->db->prepare(" SELECT {$this->colunas} FROM `{$tabela}` {$this->filtro} ");
							$sql->execute($this->prepare);
						} catch (PDOException $e){
							if($_SERVER['HTTP_HOST'] == 'localhost:4000' AND !$this->nao_existe AND !$this->nao_existe_all){
								echo implode(' - ', $this->prepare).'<br>';
								echo " SELECT {$this->colunas} FROM `{$tabela}` {$this->filtro} <br><br>";
								die($e);
							}
						}
					} else {
						$this->filtro = sem('acentos', $this->filtro);
						$sql = $this->db->query(" SELECT {$this->colunas} FROM `{$tabela}` {$this->filtro} ");
					}
					$sql->setFetchMode(PDO::FETCH_OBJ);
					$this->nao_existe = '';
					$this->colunas = '*';
					$this->prepare = array();
					$this->filtro = '';
					$array = $sql->fetchAll();
					foreach ($array as $key => $value){
						$array = $this->modificando_objeto($key, $value, $tabela, $array);
						$array = acento_uft8_read($array, $key, $value);
					}
					return $array;
				}

			} catch (PDOException $e) {
				if($_SERVER['HTTP_HOST'] == 'localhost:4000' AND !$this->nao_existe AND !$this->nao_existe_all) echo "Tabela '".$tabela."' nao existe";
				$this->nao_existe = '';
				return("Tabela ".$tabela." nao existe");
			}
		}
		public function read1($tabela){
			$limit = 9000;
			for ($i=0; $i < 10; $i++) {
				$mysql_1 = new Mysql();
				$mysql_1->colunas = $this->colunas;
				$mysql_1->filtro = $this->filtro." LIMIT ".($limit*$i).", ".$limit." ";
				$banco[$i] = $mysql_1->read($tabela);
				if(!$banco[$i]){
					$i = 1000000000;
				}
			}
			$return = array();
			foreach ($banco as $key => $value) {
				$return = array_merge($return, $value);
			}
			return $return;
		}
		public function read_unico($tabela){
			$this->filtro = (preg_match('(LIMIT)', $this->filtro) OR preg_match('(limit)', $this->filtro)) ? $this->filtro : $this->filtro." LIMIT 1 ";
			$return = $this->read($tabela);
			$return = isset($return[0]) ? $return[0] : array();
			return $return;
		}
		public function read_livre($codigo_sql){
			try {
				$sql = $this->db->query($codigo_sql);
				$sql->setFetchMode(PDO::FETCH_OBJ);
				$array = $sql->fetchAll();
				return $array;

			} catch (PDOException $e) {
				if($_SERVER['HTTP_HOST'] == 'localhost:4000' AND !$this->nao_existe AND !$this->nao_existe_all) echo $codigo_sql;
				$this->nao_existe = '';
				return($codigo_sql);
			}
		}
		public function existe($tabela){
			$this->nao_existe = 1;
			$this->colunas = "id";
			$this->filtro = preg_match('( LIMIT )', $this->filtro) ? $this->filtro : $this->filtro." LIMIT 1 ";
			$return = $this->read($tabela);
			$return = $return == "Tabela ".$tabela." nao existe" ? 0 : 1;
			return $return;
		}

		public function modificando_objeto($key, $value, $tabela, $array){
			$array[$key]->table = $tabela;
			if($tabela == 'menu_admin' AND isset($value->id) AND !$this->json){
				$file = DIR_F.'/app/Json/menu_admin'.BARRA.$value->id.'.json';
				if(file_exists($file)){
					$json = json_decode(file_get_contents($file));
					foreach ($json as $k => $v){
						$array[$key]->$k = $v;
					}
					if($value->id==6 AND $_SESSION['x_admin']->id >= 3){ // usuarios >= 3
						$array[$key]->informacoes = '-acoes-edit-';
					}
				}
			}

			if($tabela == 'pedidos' AND isset($value->id) AND !$this->json){
				$file = DIR_F.'/plugins/Json/pedidos'.BARRA.$value->id.'.json';
				if(file_exists($file)){
					$json = json_decode(file_get_contents($file));
					$array[$key]->json = (object)array();
					foreach ($json as $k => $v){
						$array[$key]->json->$k = $v;
					}
				}
			}

			// PRODUTOS PROMOCOES
				if($tabela == 'produtos' AND isset($_GET['banco_produtos_promocao']['id']) AND isset($array[$key]->id)){
					if(in_array($array[$key]->id, $_GET['banco_produtos_promocao']['id'])){
						if(isset($array[$key]->preco)){
							if(isset($array[$key]->preco1)){ $array[$key]->preco1 = $array[$key]->preco; }
							$array[$key]->preco = $array[$key]->preco - ($array[$key]->preco*$_GET['banco_produtos_promocao']['porc']/100);
						}
					}
				}

				if($tabela == 'produtos_combinacoes' AND isset($_GET['banco_produtos_promocao']['id']) AND isset($array[$key]->produtos)){
					if(in_array($array[$key]->produtos, $_GET['banco_produtos_promocao']['id'])){
						if(isset($array[$key]->preco)){
							if(isset($array[$key]->preco1)){ $array[$key]->preco1 = $array[$key]->preco; }
							$array[$key]->preco = $array[$key]->preco - ($array[$key]->preco*$_GET['banco_produtos_promocao']['porc']/100);
						}
					}
				}
			// PRODUTOS PROMOCOES

			/*****
			// PRODUTOS PRECO PROMOCIONAL
				if($tabela == 'produtos' AND LUGAR == 'site'){
					if(isset($array[$key]->preco3) AND isset($array[$key]->data_promocional)){
						if($array[$key]->preco3 > 0 AND $array[$key]->data_promocional > date('Y-m-d H:i:s')){
							$array[$key]->preco1 = $array[$key]->preco;
							$array[$key]->preco = $array[$key]->preco - $array[$key]->preco3;
						}
					}
				}
			// PRODUTOS PRECO PROMOCIONAL

			// DESCONTO POR QTD
				if($tabela == 'produtos' AND LUGAR == 'site'){
					$mysql_1 = new Mysql();
					if(isset($array[$key]->preco)){
						$preco = $array[$key]->preco;
						$descontos_qtd = array();
						// EM TODO SITE
							$mysql_1->filtro = " WHERE  `tipo` = 'informacoes' AND lang = '".LANG."' ";
							$info = $mysql_1->read_unico('configs');
							if(isset($info->porc) AND $info->porc>0){
								$preco = $preco - ($preco*$info->porc)/100;
							}
						// EM TODO SITE

						// Categorias
						if(isset($array[$key]->categorias)){
							$mysql_1->coluna = 'id, qtd, preco, preco1';
							$mysql_1->filtro = " WHERE ".STATUS." AND `produtos1_cate` = '".$array[$key]->categorias."' AND produtos = 0 ORDER BY ".ORDER." ";
							$produtos_descontos_qtd = $mysql_1->read('produtos_descontos_qtd');
							foreach ($produtos_descontos_qtd as $key1 => $value1) {
								if($value1->preco>0){
									$descontos_qtd[$value1->qtd] = $value1->preco;
								} elseif($value1->preco1>0){
									$descontos_qtd[$value1->qtd] = ($preco*$value1->preco1)/100;
								}
							}
						}
		
						// Produtos
						$mysql_1->coluna = 'id, qtd, preco';
						$mysql_1->filtro = " WHERE ".STATUS." AND `produtos` = '".$array[$key]->id."' AND produtos1_cate = 0 ORDER BY ".ORDER." ";
						$produtos_descontos_qtd = $mysql_1->read('produtos_descontos_qtd');
						foreach ($produtos_descontos_qtd as $key1 => $value1) {
							$descontos_qtd[$value1->qtd] = $value1->preco;
						}
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
						$array[$key]->preco = $preco;
					}
				}
				*/
			// DESCONTO POR QTD

			return $array;
		}

		public function menu_admin_admins($array, $tabela){
			if($tabela == 'menu_admin'){
				foreach ($array as $key => $value) {
					if(isset($_GET['m']) AND isset($value->admins) AND $value->admins){
						unset($array[$key]);
					} elseif(isset($_GET['admins']) AND (!isset($value->admins) OR (isset($value->admins) AND $value->admins!=$_GET['admins'])) ){
						unset($array[$key]);
					}
				}
			}

			// PRODUTOS PROMOCOES
			/*
				if($tabela == 'produtos' AND isset($_GET['banco_produtos_promocao']['id']) AND isset($array[$key]->id)){
					if(in_array($array[$key]->id, $_GET['banco_produtos_promocao']['id'])){
						if(isset($array[$key]->preco)){
							if(isset($array[$key]->preco1)){ $array[$key]->preco1 = $array[$key]->preco; }
							$array[$key]->preco = $array[$key]->preco*$_GET['banco_produtos_promocao']['porc']/100;
						}
					}
				}

				if($tabela == 'produtos_combinacoes' AND isset($_GET['banco_produtos_promocao']['id']) AND isset($array[$key]->produtos)){
					if(in_array($array[$key]->produtos, $_GET['banco_produtos_promocao']['id'])){
						if(isset($array[$key]->preco)){
							if(isset($array[$key]->preco1)){ $array[$key]->preco1 = $array[$key]->preco; }
							$array[$key]->preco = $array[$key]->preco*$_GET['banco_produtos_promocao']['porc']/100;
						}
					}					
				}
			*/
			// PRODUTOS PROMOCOES
			return $array;
		}


		// Insert
		public function insert($tabela){
			if($this->campo){
				if($tabela != 'pedidos_status'){
					$this->campo['data'] = date('Y-m-d H:i:s');
					$this->campo['dataup'] = date('Y-m-d H:i:s');
				}
				foreach( $this->campo as $name => $value ){
					$name = addslashes($name);
					$value = gravando_no_mysql($tabela, $name, $value);
					$campos[] = '`'.$name.'`';
					$valores[] = "?";
					$prepare[] = acento_uft8_gravando(trim($value));
				}

				/* MYSQL sql_mode nao esta zerado
				foreach( $this->colunas($tabela) as $name => $value ){
					if(!in_array('`'.$value->Field.'`', $campos) AND $value->Field!='id'){
						$campos[] = '`'.$value->Field.'`';
						$valores[] = "?";
						if($value->Field=='status' OR $value->Field=='lang'){
							$prepare[] = 1;
						} elseif($value->Field=='ordem'){
							$prepare[] = 999;
						} else if($value->Type == 'int(11)') {
							$prepare[] = 0;
						} else if($value->Type == 'date') {
							$prepare[] = 0000-00-00;
						} else if($value->Type == 'datetime') {
							$prepare[] = 0000-00-00 00:00:00;
						} else {
							$prepare[] = '';
						}

					} else {
						if($value->Type == 'int(11)') {
							$x=0;
							foreach( $this->campo as $name1 => $value1 ){
								if($value->Field == $name1 AND $value1==''){
									$prepare[$x] = 0;
								}
								$x++;
							}
						}
					}
				}
				*/

				$campos = implode(", ", array_values($campos));
				$valores = implode(",", array_values($valores));
				$prepare = array_merge($prepare, $this->prepare);

				try{
					$sql = $this->db->prepare(" INSERT INTO `{$tabela}` ({$campos}) VALUES ({$valores}) ");
					$sql->execute($prepare);
				} catch (PDOException $e){
					if($this->transacao) $this->db->rollBack();
					if($_SERVER['HTTP_HOST'] == 'localhost:4000' AND !$this->nao_existe AND !$this->nao_existe_all){
						echo implode(' - ', $prepare).'<br>';
						echo " INSERT INTO `{$tabela}` ({$campos}) VALUES ({$valores}) <br><br>";
						die($e);
					}
				}

				$id = $this->db->lastInsertId();
				if(isset($id)){
					if($this->logs) $this->logs_acoes($tabela, $id, 'Criação', $this->campo);
				
					return $id;
				}
				$this->prepare = array();
				unset($this->campo);
			}
		}


		// Update
		public function update($tabela){
			if($this->campo){
				foreach( $this->campo as $name => $value ){
					$name = addslashes($name);
					if(!$this->json) $value = gravando_no_mysql($tabela, $name, $value);
					$campos[] = "`{$name}` = ?";
					$prepare[] = acento_uft8_gravando(trim($value));
				}

				/* MYSQL sql_mode nao esta zerado
				foreach( $this->colunas($tabela) as $name => $value ){
					if($value->Type == 'int(11)') {
						$x=0;
						foreach( $this->campo as $name1 => $value1 ){
							if($value->Field == $name1 AND $value1==''){
								$prepare[$x] = 0;
							}
							$x++;
						}
					}
				}
				*/

				$prepare = array_merge($prepare, $this->prepare);
				$campos = implode(", ", $campos);

				if($this->filtro){
					try{
						$sql = $this->db->prepare(" UPDATE `{$tabela}` SET {$campos} {$this->filtro} ");
						$sql->execute($prepare);
					} catch (PDOException $e){
						if($this->transacao) $this->db->rollBack();
						if($_SERVER['HTTP_HOST'] == 'localhost:4000' AND !$this->nao_existe AND !$this->nao_existe_all){
							echo implode(' - ', $prepare).'<br>';
							echo " UPDATE `{$tabela}` SET $campos {$this->filtro} <br><br>";
							die($e);
						}
					}
				} else {
					return 0;
					exit();
					die('Update Sem Filtro');
				}

				$this->colunas = "id";
				$id = $this->read($tabela);
				if(isset($id[0]->id)){
					if($this->logs) $this->logs_acoes($tabela, $id[0]->id, 'Edicão', $this->campo);

					return $id[0]->id;
				}
				$this->prepare = array();
				$this->filtro = '';
				unset($this->campo);
			}
		}


		// Delete
		public function delete($tabela){
			$prepare = $this->prepare;
			$filtro = $this->filtro;
			$id = $this->read($tabela);
			if(isset($id[0]->id)){
				if($this->logs) $this->logs_acoes($tabela, $id[0]->id, 'Exclusão', '');

				// DELETANDO IMGS
					for ($i=0; $i <= 1; $i++) { 
						if($i == 0){ // FOTOS
							$pasta = DIR_F.'/web/fotos';
						} elseif($i == 1){ // THUMBNAILS
							$pasta = DIR_F.'/web/fotos/thumbnails';
						}

						$dir_fotos = array();
						$diretorio  = dir($pasta);
						while($arquivo = $diretorio ->read()){
							if($arquivo!='.' AND $arquivo!='..'){
								$dir_fotos[] = $arquivo;
							}
						}
						$diretorio ->close();

						foreach ($dir_fotos as $key => $value) {
							if(isset($id[0]->table) AND $id[0]->table AND isset($id[0]->id) AND $id[0]->id AND preg_match('('.$id[0]->table.'_'.$id[0]->id.'_)', $value)){
								unlink($pasta.'/'.$value);
							}
						}
					}
				// DELETANDO IMGS

				if($filtro){
					try{
						$sql = $this->db->prepare(" DELETE FROM `{$tabela}` {$filtro} ");
						$sql->execute($prepare);
					} catch (PDOException $e){
						if($this->transacao) $this->db->rollBack();
						if($_SERVER['HTTP_HOST'] == 'localhost:4000' AND !$this->nao_existe AND !$this->nao_existe_all){
							echo implode(' - ', $prepare).'<br>';
							echo " DELETE FROM `{$tabela}` {$filtro} <br><br> ";
							die($e);
						}
					}
				} else {
					return 0;
					exit();
					die('Delete Sem Filtro');
				}
				return $id[0]->id;
			}
			$this->prepare = array();
			$this->filtro = '';
		}


		// Transacoes
		public function ini(){
			$this->transacao = 1;
			$this->db->beginTransaction();
		}
		public function rollBack(){
			$this->db->rollBack();
		}
		public function fim(){
			$this->db->commit();
		}


		// OUTROS
			public function tables(){
				$array = $this->db->query(" SHOW TABLES ");
				$array = $array->fetchAll();
				return $array;
			}
			public function colunas($tabela){
				$sql = $this->db->query(" SHOW COLUMNS FROM `{$tabela}` ");
				$sql->setFetchMode(PDO::FETCH_OBJ);
				//$this->colunas = '*';
				//$this->filtro = '';
				$this->nao_existe = '';
				$array = $sql->fetchAll();
				return $array;
			}
			public function colunas_sql($tabela){
				$sql = $this->db->query(" SHOW CREATE TABLE `{$tabela}` ");
				$sql->setFetchMode(PDO::FETCH_OBJ);
				$this->colunas = '*';
				$this->filtro = '';
				$this->nao_existe = '';
				$array = $sql->fetchAll();
				return $array;
			}
			public function delete_table($tabela){
				//$this->db->query(" DROP TABLE `{$tabela}` ");
			}
		// OUTROS


		// Logs Acoes
		public $logs_caminho = '';
		private function logs_acoes($tabela, $id, $acao, $campo){
			if($this->logs==1 AND $id AND LUGAR != 'site' AND $tabela!='log_acoes' AND $tabela!='z_txt' AND isset($_SESSION['x_'.LUGAR]->id) AND $_SESSION['x_'.LUGAR]->id!=1){

				$logs_acoes 	= (isset($_SESSION['x_'.LUGAR]->table) AND $_SESSION['x_'.LUGAR]->table)	? $_SESSION['x_'.LUGAR]->table 	: 'site';
				$logs_acoes_id 	= (isset($_SESSION['x_'.LUGAR]->id) AND $_SESSION['x_'.LUGAR]->id)			? $_SESSION['x_'.LUGAR]->id 	: 0;

				$item = '';
				$sql = $this->db->query(" SELECT `id` FROM `{$tabela}`  where `id` = '{$id}'  ");
				$sql->setFetchMode(PDO::FETCH_OBJ);
				foreach( $sql->fetchAll() as $row ){
					$item = '#'.$row->id;
				}

				$idd = time().$logs_acoes_id.$id;

				$this->logs = 0;
				unset($this->campo);
				$this->campo['id'] = $idd;
				$this->campo['acoes'] = $acao;
				$this->campo['usuarios'] = $logs_acoes;
				$this->campo['usuarios_id'] = $logs_acoes_id;
				$this->campo['tabelas'] = $tabela;
				$this->campo['item_id'] = $id;
				$this->campo['item'] = $item;
				$this->campo['ip'] = $_SERVER['REMOTE_ADDR'];
				$ult_id = $this->insert('log_acoes');

				$campo = str_replace('<iframe', 'iframe', $campo);
				$campo_array[$idd] = $campo;

	            // Gravando Json
	            $file = file(DIR_F.'/plugins/Json/log_acoes/0.json');
	            $txt = '';
	            if($file){
		            $txt .= implode('', $file).",\n";
		        }
	            $txt .= json_encode($campo_array);

	            $file = fopen(DIR_F.'/plugins/Json/log_acoes/0.json', 'w');
	            fwrite($file, $txt);
	            fclose($file);

				$this->logs = 1;
			}
		}


	}
	

?>
