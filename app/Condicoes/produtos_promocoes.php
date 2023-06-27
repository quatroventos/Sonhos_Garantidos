<?

	if(isset($condicoes['conecta']) AND $condicoes['conecta']==1){
		/*
		if(LUGAR == 'site'){
			$_GET['banco_produtos_promocao'] = array();
			$_GET['banco_produtos_promocao']['id'] = array(0);
			$mysql = new Mysql();
			$mysql->colunas = 'produtos, porc';
			$mysql->filtro = " WHERE `lang` = '".LANG."' AND `tipo` = 'informacoes' AND data_ini BETWEEN ('0') AND ('".date('c')."') AND data_fim BETWEEN ('".date('c')."') AND ('4000-12-31') ";
			$produtos_promocao = $mysql->read_unico('configs');
			if(isset($produtos_promocao->produtos)){
				$_GET['banco_produtos_promocao']['porc'] = $produtos_promocao->porc;
				$ex = explode('-', $produtos_promocao->produtos);
				foreach ($ex as $key => $value) {
					if($value){
						$_GET['banco_produtos_promocao']['id'][] = $value;
					}
				}
			}
		}
		*/
	}

?>