<?
 
 	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$ex = explode('/', $_GET["arquivo"]);
	$_GET["arquivo"] = end($ex);

	if(!$_GET["caminho"]){
		$_GET["caminho"] = '../../web/fotos/'.FOTOS;
	}

	$link = $_GET["caminho"].$_GET["arquivo"];
	$nome_da_foto = nome_da_foto($_GET["arquivo"]);
	$nome = ($_GET["nome"] AND $_GET["nome"]!='undefined') ? $_GET["nome"].'.'.$nome_da_foto['ext'] : $_GET["arquivo"];

	header ("Content-Disposition: attachment; filename=".$nome."");
	header ("Content-Type: application/octet-stream");
	header ("Content-Length: ".filesize($link));
	readfile($link);

?>