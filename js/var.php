<?

	$js_ini .= 'var HOST = "'.$_SERVER["HTTP_HOST"].'"; ';
	$js_ini .= 'var DIR = "'.DIR.'"; ';
	$js_ini .= 'var DIR_F = "'.DIR_F.'"; ';
	$js_ini .= 'var DIR_C = "'.DIR_C.'"; ';
	$js_ini .= 'var DIR_D = "'.DIR_D.'"; ';
	$js_ini .= 'var DIR_ALL = "'.DIR_ALL.'"; ';
	$js_ini .= 'var HTTP = "'.HTTP.'"; ';
	$js_ini .= 'var LUGAR = "'.LUGAR.'"; ';
	$js_ini .= 'var A = "'.A.'"; ';
	$js_ini .= 'var A2 = '.A.(A2).A.'; ';
	$js_ini .= 'var $_GET = new Array(); ';
	$js_ini .= 'var $_SESSION = new Array(); ';
	$js_ini .= 'var $_VOLTAR = new Array(); ';
	$js_ini .= 'var $ABA_ATIVA = 1; ';
	

	$js_ini .= 'var $dataTable_oTable; ';

	if(defined('COR_B')){ $js_ini .= 'var COR_B = "#'.COR_B.'"; '; }
	if(defined('COR_P')){ $js_ini .= 'var COR_P = "#'.COR_P.'"; '; }
	if(defined('COR1')){ $js_ini .= 'var COR1 = "#'.COR1.'"; '; }
	if(defined('COR2')){ $js_ini .= 'var COR2 = "#'.COR2.'"; '; }
	if(defined('COR3')){ $js_ini .= 'var COR3 = "#'.COR3.'"; '; }
	if(defined('COR4')){ $js_ini .= 'var COR4 = "#'.COR4.'"; '; }
	if(defined('COR5')){ $js_ini .= 'var COR5 = "#'.COR5.'"; '; }
	if(defined('COR6')){ $js_ini .= 'var COR5 = "#'.COR6.'"; '; }
	if(defined('COR7')){ $js_ini .= 'var COR5 = "#'.COR7.'"; '; }
	if(defined('COR8')){ $js_ini .= 'var COR5 = "#'.COR8.'"; '; }
	if(defined('COR9')){ $js_ini .= 'var COR5 = "#'.COR9.'"; '; }
	if(defined('COR10')){ $js_ini .= 'var COR5 = "#'.COR10.'"; '; }



	// DATA E HORARIOS (PHP JS)
		$js_ini .= 'var $_DATA_PHP = new Array(); ';
		$js_ini .= '$_DATA_PHP["dia"] = "'.date('d').'"; ';
		$js_ini .= '$_DATA_PHP["mes"] = "'.(date('m')-1).'"; ';
		$js_ini .= '$_DATA_PHP["ano"] = "'.date('Y').'"; ';
		$js_ini .= '$_DATA_PHP["hora"] = "'.date('H').'"; ';
		$js_ini .= '$_DATA_PHP["min"] = "'.date('i').'"; ';
		$js_ini .= '$_DATA_PHP["seg"] = "'.date('s').'"; ';
		$js_ini .= '$_DATA_JS = new Date(); $_DATA_JS.setMilliseconds(0); ';
	// DATA E HORARIOS (PHP JS)

?>