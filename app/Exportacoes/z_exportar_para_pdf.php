<?

	$codificacao = 'no';
	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$ex_topo = explode('z-z', $_POST['exportar_top'].'z-z');
	$ex_center = explode('z-z', $_POST['exportar_center']);
	$html = '';

	$caminho_extra = isset($caminho_extra) ? $caminho_extra : '';

	// Tabela Redes
		if(isset($_POST['exportar_tabela_redes']) and $_POST['exportar_tabela_redes']){
			$ex = explode('.', $_POST['exportar_tabela_redes_foto']);
			$html .= '<table style="width:100%;" border="0" cellspacing="3" cellpadding="3"> ';
				$html .= '<tr> ';
					$html .= '<td style="width: 1px" > <img src="'.$caminho_extra.'../../web/fotos/'.FOTOS.'/thumbnails/'.$ex[0].'_100x100.'.($ex[1]=='webp' ? 'jpg' : $ex[1]).'" style="height: 50px;" /> </td> ';
					$html .= '<td align="center"> <b style="font-size:28px;">'.$_POST['exportar_tabela_redes'].'</b> </td> ';
				$html .= '</tr> ';
			$html .= '</table> ';
		}
	// Tabela Redes


	// Variavais
		$html .= '<table style="width:100%;" border="0" cellspacing="3" cellpadding="3"> ';
					foreach ($ex_topo as $key => $value){
						if($value){
							$html .= '<tr> ';
								$value = substr($value, 0, -3);
								$ex_topo_01 = explode('z|z', $value);
								$ex_center_01 = explode('z|z', $ex_center[$key]);
								foreach ($ex_topo_01 as $k => $v){
									if(isset($ex_center_01[$k]) and $ex_center_01[$k] != '(nao_mostrar)'){
										if($k == 0 or $k == 1) $align = 'left'; else $align = 'center';
										$v = $v == 'NOME DA CATEGORIA' ? 'Categorias' : $v;
										$html .= '<td align="'.$align.'" style="border:#aaa 1px solid; background:#ddd; padding:5px; font-size:14px"><div style="padding:2px 5px;">'.$v.'</div></td> ';
									}
								}
							$html .= '</tr> ';
						}
					}

					foreach ($ex_center as $key => $value){
						if($value){
							$html .= '<tr> ';
								$value = substr($value, 0, -3);
								$ex_center_01 = explode('z|z', $value);
								foreach ($ex_center_01 as $k => $v){
									if($v != '(nao_mostrar)'){
										if($k == 0 or $k == 1) $align = 'left'; else $align = 'center';
										if(preg_match('(web/fotos/)', $v) AND $v){
											$ex = explode('web/fotos/', $v);
											if(file_exists($caminho_extra.'../../web/fotos/'.$ex[1]) AND $ex[1]!=FOTOS){
												if(preg_match('(.webp)', $ex[1])){
													$ex[1] = str_replace('.webp', '.jpg', $ex[1]);
												}
												$v = '<img src="'.$caminho_extra.'../../web/fotos/'.$ex[1].'" style="height: 50px; border: 1px solid #ccc" /> ';
											} else {
												$v = '';
											}
										}
										$html .= '<td align="'.$align.'" style="border:#ccc 1px solid; padding:5px; font-size:14px"><div style="padding:2px 5px;">'.$v.'</div></td> ';
									}
								}
							$html .= '</tr> ';
						}
					}
		$html .= '</table>';



	//echo $html; exit();


	$_POST['paper'] = 'A4'; //'letter';
	$_POST['orientation'] = 'landscape'; //'portrait';
	$_POST['html'] = '
						<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
						<html xmlns="http://www.w3.org/1999/xhtml">
							<head>
								<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
								<title>Dados Exportados em PDF</title>
							</head>
							<body>
								'.$html.'
							</body>
						</html>
	';


	use Dompdf\Dompdf;

	require_once(DIR_F.'/plugins/Exportacoes/pdf/dompdf_config.inc.php');

	if(isset($_POST["html"])){
		//if(get_magic_quotes_gpc()){
			$_POST["html"] = stripslashes($_POST["html"]);
		//}		  

		//$dompdf = new DOMPDF();
    	$dompdf = new DOMPDF(["enable_remote" =>true]);


		$dompdf->getOptions()->setChroot(DIR_F);
		$dompdf->load_html($_POST["html"]);
		$dompdf->set_paper($_POST["paper"], $_POST["orientation"]);
		$dompdf->render();

		$dompdf->stream($_POST['exportar_table'].'_'.date('d_m_Y').'.pdf');
		//$dompdf->stream($_POST['exportar_table'].'_'.date('d_m_Y').'.pdf', ["Attachment" => false]); // ver na pagina
		exit(0);
	}

?>