<?

	class criarMysql extends Mysql {

		public $consulta = array();

		protected function conecta1(){

			global $localhost_config, $nome_config, $senha_config, $banco_config;
			$this->conecta($localhost_config, $nome_config, $senha_config, $banco_config);

		}


		// Criar Colunas
		public function criarTabelas($table, $itens=1){

			if($table != 'senha' AND $table != 'fundo' AND $table != 'mapa' AND $table != 'mais_senhas'){

				$publicMysql = new publicMysql();
				$publicMysql->nao_existe = 1;
				$publicMysql->colunas = 'id';
				$publicMysql->filtro = " LIMIT 1 ";
				if($publicMysql->read($table) == "Tabela ".$table." nao existe"){
	
					$sql = "CREATE TABLE IF NOT EXISTS `{$table}` (
							  `id` int NOT NULL AUTO_INCREMENT,
							  `status` int NOT NULL DEFAULT '1',
							  `lang` int NOT NULL DEFAULT '1',
							  `nome` text NOT NULL,
							  `foto` text NOT NULL,
							  `data` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
							  `dataup` datetime NOT NULL,
							  `ordem` int(3) unsigned zerofill NOT NULL DEFAULT '999',
							  `nome_meta` text NOT NULL,
							  `txt_meta` text NOT NULL,
							  PRIMARY KEY (`id`)	) ENGINE=InnoDB; ";
					$publicMysql->db->query($sql);

					if(preg_match('(1_cate)', $table)){
						$sql  = " ALTER TABLE  `{$table}` ADD  `tipo` INT NOT NULL; ";
						$sql .= " ALTER TABLE  `{$table}` ADD  `subcategorias` INT NOT NULL; ";
						$sql .= " ALTER TABLE  `{$table}` ADD  `vcategorias` text NOT NULL; ";
						$sql .= " ALTER TABLE  `{$table}` ADD  `star` INT NOT NULL; ";
						$publicMysql->db->query($sql);

						if($itens){
							$sql = "INSERT INTO `{$table}` (`id`, `nome`, `foto`, `dataup`) VALUES
										(1, 'Categorias 01', '01.jpg', '".date("c")."'),
										(2, 'Categorias 02', '02.jpg', '".date("c")."'),
										(3, 'Categorias 03', '03.jpg', '".date("c")."'); ";
							$publicMysql->db->query($sql);
						}

					} elseif($itens) {
						$sql = "INSERT INTO `{$table}` (`id`, `nome`, `foto`, `dataup`) VALUES
									(1, 'Item 01', '01.jpg', '".date("c")."'),
									(2, 'Item 02', '02.jpg', '".date("c")."'),
									(3, 'Item 03', '03.jpg', '".date("c")."'),
									(4, 'Item 04', '04.jpg', '".date("c")."'),
									(5, 'Item 05', '05.jpg', '".date("c")."'),
									(6, 'Item 06', '06.jpg', '".date("c")."'); ";
						$publicMysql->db->query($sql);
					}
	
				}

			}
		}




		// Criar Colunas
		public function criarColunas($table, $coluna, $tipo='text'){

			$variaveis = 'nome, id_atual, c_senha, sem_foto, sem_multifotos, lugar, campos_gravar, mais_comentarios, boxx, txt_editor, txt_editor1, txt_editor2, txt_editor3, txt_editor4, txt_editor5, webcam';
			$variaveis = str_replace(' ', '', $variaveis);
			$array_ex = explode(',', $variaveis);

			if(preg_match('(_hidden)', $coluna) OR preg_match('(_button)', $coluna) OR preg_match('(inserir_box_)', $coluna)){
				$array_ex[] = $coluna;
			}

			if(!in_array($coluna, $array_ex) AND !preg_match('(_temp_)', $coluna)){

				$consulta = $this->colunas($table);
				$cols = array();
				foreach ($consulta as $key => $value) {
					$cols[$value->Field] = $value->Field;
				}
				if($coluna AND $cols AND !array_key_exists($coluna, $cols)){
					$this->conecta1();
					$colunas = array('pago', 'categorias', 'subcategorias');
					$tipos = array('int');
					if(in_array($tipo, $tipos) OR in_array($coluna, $colunas)){
						$tipo = 'int(11)';
					} elseif(preg_match('(data_)', $coluna) AND $tipo != 'datetime'){
						$tipo = 'date';
					} elseif(preg_match('(datetime_)', $coluna) AND $tipo != 'datetime'){
						$tipo = 'datetime';
					}
					$array = $this->db->query(" ALTER TABLE `".$table."` ADD `".$coluna."` ".$tipo." NOT NULL ");
				}

			}

		}


		// Criar colunas (Array)
		public function criarColunasArray($table, $post, $variaveis=''){
			foreach($post as $nome_get => $valor_get){
				if(!is_object($valor_get) OR !is_array($valor_get)){
					if(!array_key_exists($nome_get, $this->consulta)){
						if($nome_get == 'cidades'){
							$this->criarColunas($table, 'estados');
						} elseif($nome_get == 'nascimento'){
							$this->criarColunas($table, 'idade', 'int');
						}
						$this->criarColunas($table, $nome_get);
					}
				}
			}
		}

	}

?>