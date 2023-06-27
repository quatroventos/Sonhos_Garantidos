<?

	// Verificando
	if(isset($_POST[$value['input']['nome']])){

		// Verificacao se existe
		if(!is_array($_POST[$value['input']['nome']])){
			$mysql = new Mysql();
			$mysql->colunas = "id";
			$mysql->prepare = array($id, $_POST[$value['input']['nome']]);
			$mysql->filtro = " WHERE `id` != ? AND `".$value['input']['nome']."` = ? ";
			$item = $mysql->read_unico($table);
			if(isset($item->id)){
				$arr['erro'][] = 'Este '.$value['nome'].' inserido já está cadastrado, insira outro '.$value['nome'].'!';
			}


			if($value['input']['nome'] == 'url'){

				$pastas = array();
				$diretorio = dir(DIR_F."/views/");
				while($arquivo = $diretorio->read()){
					$pastas[] = str_replace('.phtml', '', $arquivo);
				}
				$diretorio -> close();

				if( in_array($_POST[$value['input']['nome']], $pastas) ){
					$arr['erro'][] = 'Esta URL inserido já está cadastrado, insira outro URL!';
				}
			}
		}


	}
	// Verificando

?>