<?

	$codificacao = 'no';
	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	// Funcao Pronta
	function exportMysqlToXls($table,$filename){
        $xls_terminated = "\r\n";
        $xls_separator = "\t";
        $xls_enclosed = '';
        $xls_escaped = "\\";

		$ex_top = explode('z|z', $_POST['exportar_top']);
		$ex_center = explode('z|z', str_replace('&nbsp;', ' ', $_POST['exportar_center']));

		$top_all = '';
		foreach ($ex_top as $key => $value){
			if($value and isset($ex_center[$key]) and $ex_center[$key] != '(nao_mostrar)'){
				$value = $value == 'NOME DA CATEGORIA' ? 'Categorias' : $value;
				if($key == (count($ex_top)-2))
					$top_all .= $value.$xls_separator.$xls_terminated;
				else
					$top_all .= $value.$xls_separator;
			}
		}
		$out = str_replace('z-z', $xls_terminated.$xls_enclosed, $top_all);

		$center_all = '';
		foreach ($ex_center as $key => $value){
			if($value != '(nao_mostrar)'){
				if(preg_match('(web/fotos/'.FOTOS.'/)', $value)){
					$ex = explode('"', $value);
					$value = DIR_C.'/'.$ex[0];
				}
				if($key == (count($ex_center)-2))
					$center_all .= $xls_enclosed.$value.$xls_enclosed.$xls_separator.$xls_terminated;
				else
					$center_all .= $xls_enclosed.$value.$xls_enclosed.$xls_separator;
			}
		}

		$out .= str_replace('z-z', $xls_terminated.$xls_enclosed, $center_all);
		$txt =  sem('tags', $out);

	    $file = fopen('exportar.txt', 'w');
	    fwrite($file, $txt);
        fclose($file);

        //header("Content-type: application/x-msdownload");	    
		//header("Content-Disposition: attachment; filename=exportar.txt");
        //header("Pragma: no-cache");
        //header("Expires: 0");

		$link = "exportar.txt";
		header ("Content-Disposition: attachment; filename=exportar.txt");
		header ("Content-Type: application/txt");
		header ("Content-Length: ".filesize($link));
		readfile($link);


        //header("Location: ".DIR."/app/Exportacoes/exportar.txt");
		exit;
	}
	// Funcao Pronta

	
	exportMysqlToXls($_POST['exportar_table'], $_POST['exportar_table'].'_'.date('d_m_Y').'.xls');

?>