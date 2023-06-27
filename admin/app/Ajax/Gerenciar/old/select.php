<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();
	$arr = array();

		$mysql->filtro = " WHERE lang = '".LANG."' ORDER BY nome ASC, id ASC ";
		$consulta = $mysql->read($_POST['table']);

		$_POST['relacao'] = (isset($_POST['relacao']) AND $_POST['relacao'] AND $_POST['relacao']!='undefined') ? str_replace('select#', '', $_POST['relacao']) : '';


		$arr['html'] = '';
		$selected = 0;
		foreach ($consulta as $key => $value) {
	        $arr['html'] .= '<option value="'.$value->id.'" ';
	        	if($_POST['relacao']){
	        		$arr['html'] .= ' '.$_POST['relacao'].'="'.$value->$_POST['relacao'].'" ';
	        	}
	        	if((!$selected OR $_POST['multiple']!='undefined') AND preg_match('(-'.$value->id.'-)', '-'.$_POST['value'].'-')){
	        		$arr['html'] .= 'selected';
	        		$selected++;
	        	}
	         $arr['html'] .= '>'.$value->nome.'</option> ';
	    }


	     // CADASTRAR NOVO
	    if($_POST['gerenciar']){
	    	$html = $arr['html'];

			$arr['html']  = '<option value="">- - -</option> ';
			$arr['html'] .= '<optgroup label="Ações" id="acoes"> ';
				if($_POST['gerenciar']==1 OR $_POST['gerenciar']==3){
					$arr['html'] .= '<option value="(cn)">Cadastrar Novo</option> ';
				}
				if($_POST['gerenciar']==2 OR $_POST['gerenciar']==3){
					$arr['html'] .= '<option value="(gi)">Gerenciar Itens</option> ';
				}
		    $arr['html'] .= '</optgroup> ';
		    $arr['html'] .= '<optgroup label="Itens" id="itens"> ';
				$arr['html'] .= $html;
		    $arr['html'] .= '</optgroup> ';
		}
	     // CADASTRAR NOVO

	echo json_encode($arr);
?>
