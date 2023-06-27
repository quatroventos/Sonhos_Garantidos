<?


	// DEFINES
		define('CKFINDER', "../ckfinder");
		define('FOTOS', "");
		define('IMG', "");

		define('VIEWS', 'views'); // Views_url
		define('DIALOG_MAX', 0); // Dialog Maximizado
		define('FF', 'ff;;'); // Filtro Avancado Admin
		define('A', "'"); define('A2', '"');
		define('AA', A.'+A+'.A); define('AA2', A.'+A2+'.A);
	// DEFINES






	// UTIES
		function barra(){
			return DIRECTORY_SEPARATOR;
		}

		function ir(){
			if(isset($_GET['ir']) AND $_GET['ir']){
				echo ' <script> $(document).ready(function() { setTimeout(function(){ $("html,body").animate( {scrollTop: $(".'.$_GET['ir'].'").offset().top}, "slow" ); }, 1000); });</script> ';
			}
		}

		function limit($text, $limit, $ellipsis='...', $tirm=1){
			if( mb_strlen($text) > $limit ) {
				$text = mb_substr($text, 0, $limit);
				if($tirm){
					$text = trim($text);
				}
				$text .= $ellipsis;
			}
			return $text;
		}

		function browser(){
			$user_agente = $_SERVER["HTTP_USER_AGENT"];

			$return = "outros";
			if(preg_match("(Chrome)",$user_agente)){
				$return = "chrome";

			} elseif(preg_match("(Firefox)",$user_agente)){
				$ex = explode('Firefox/', $user_agente);
				if((int)$ex[1]>=50){
					$return = "firefox";
				}

			} elseif(preg_match("(Safari)",$user_agente)){
				$return = "safari";

			} elseif(preg_match("(Opera)",$user_agente)){
				$return = "opera";

			} elseif(preg_match("(MSIE)",$user_agente)){
				$return = "ie";
			}
			return $return;
		}

		function titulos_nome($item, $pg, $tipo=0){
			$return = '';
			if($tipo==1 AND isset($item->nome) AND $item->nome){
				$return = $item->nome;
			} elseif($_GET['pg']=='noticias' OR $_GET['pg']=='noticia'){
				$return = 'Notícias';
			} elseif($_GET['pg']=='materias'){
				$return = 'Matérias';
			} elseif($_GET['pg']=='processo_seletivo_unidade'){
				$return = 'Processo Seletivo';
			} elseif($_GET['pg']=='fale'){
				$return = 'Fale Conosco';
			} elseif(isset($item->table)) {
				$return = ucfirst(str_replace('_', ' ', $item->table));
			} elseif(isset($_GET['pg'])) {
				$return = ucfirst(str_replace('_', ' ', $_GET['pg']));
			}
			return $return;
		}
	// UTIES







	// CODIFICACOES
		function asc($txt){
			$return = cod('asc->html', $txt);
			return $return;
		}
		function sem($tipo, $txt){
			switch ($tipo) {
				case 'tags':
					$return = strip_tags($txt, '');
					break;

				case 'url':
					$trocarIsso	= array(' ',);
					$porIsso 	= array('-');
					$txt = str_replace($trocarIsso, $porIsso, $txt);
					$trocarIsso	= array('à','á','â','ã','ä','å','ç','è','é','ê','ë','ì','í','î','ï','ñ','ò','ó','ô','õ','ö','ù','ü','ú','ÿ','À','Á','Â','Ã','Ä','Å','Ç','È','É','Ê','Ë','Ì','Í','Î','Ï','Ñ','Ò','Ó','Ô','Õ','Ö','Ù','Ü','Ú','Ÿ',);
					$porIsso 	= array('a','a','a','a','a','a','c','e','e','e','e','i','i','i','i','n','o','o','o','o','o','u','u','u','y','A','A','A','A','A','A','C','E','E','E','E','I','I','I','I','N','O','O','O','O','O','U','U','U','Y',);
					$txt = str_replace($trocarIsso, $porIsso, $txt);
					$trocarIsso	= array('°', 'º', 'ª', 'ª', '#', '%', '&', '?', '\ ', '\\', '\\\ ', "\"", '\'', '/', '"', "'", '´', '`', '~', '^', '!', '@', '#', '$', '%', '¨', '&', '=',  ':', ';', '*', '<', '>', '(', ')', '|', ' ',);
					$porIsso 	= array('-');
					$return = str_replace($trocarIsso, $porIsso, $txt);
					break;

				case 'acentos':
					$trocarIsso	= array('à','á','â','ã','ä','å','ç','è','é','ê','ë','ì','í','î','ï','ñ','ò','ó','ô','õ','ö','ù','ü','ú','ÿ','À','Á','Â','Ã','Ä','Å','Ç','È','É','Ê','Ë','Ì','Í','Î','Ï','Ñ','Ò','Ó','Ô','Õ','Ö','Ù','Ü','Ú','Ÿ',);
					$porIsso 	= array('a','a','a','a','a','a','c','e','e','e','e','i','i','i','i','n','o','o','o','o','o','u','u','u','y','A','A','A','A','A','A','C','E','E','E','E','I','I','I','I','N','O','O','O','O','O','U','U','U','Y',);
					$return = str_replace($trocarIsso, $porIsso, $txt);
					break;

				case 'acentos_all':
					//cod('asc->html', $txt);
				    $txt = str_replace(array('[\', \']'), '', $txt);
				    $txt = preg_replace('/\[.*\]/U', '', $txt);
				    $txt = preg_replace('/&(amp;)?#?[a-z0-9]+;/i', '-', $txt);
				    $txt = htmlentities($txt, ENT_COMPAT, 'utf-8');
				    $txt = preg_replace('/&([a-z])(acute|uml|circ|grave|ring|cedil|slash|tilde|caron|lig|quot|rsquo);/i', '\\1', $txt );
				    $txt = preg_replace(array('/[^a-z0-9]/i', '/[-]+/') , '-', $txt);
				    $return = strtolower(trim($txt, '-'));
					break;

				case 'acentos_all_carrinho':
					$txt = str_replace('_', 'zxzxzxzxzxzxzxzxzxzxz', $txt);
				    $txt = str_replace(array('[\', \']'), '', $txt);
				    $txt = preg_replace('/\[.*\]/U', '', $txt);
				    $txt = preg_replace('/&(amp;)?#?[a-z0-9]+;/i', '', $txt);
				    $txt = preg_replace(array('/[^a-z0-9]/i', '/[-]+/') , '', $txt);
				    $txt = strtolower(trim($txt, ''));
				    $txt = str_replace('zxzxzxzxzxzxzxzxzxzxz', '_', $txt);
				    $return = $txt;
					break;

				case 'acentos_all_carrinho1':
					$trocarIsso	= array('&', '=', '+', '-', '_', '\ ', '\\', '\\\ ', "\"", '\'', '/', '"', "'", '´', '`', '~', '^', '¨', '#39;',	'#34;',	'#180;',	'#96;',	'#63;',	'#61;', '#39;',	'#34;',	'#180;',	'#96;',	'#63;',	'#61;',);
					//$trocarIsso	= array('#', '%', '&', '?', '\ ', '\\', '\\\ ', "\"", '\'', '/', '"', "'", '´', '`', '~', '^', '!', '@', '#', '$', '%', '¨', '&', '=',  ':', ';', '*', '<', '>', '(', ')', '|', '.', ';', ',', '-');
					$porIsso 	= array('');
					$return = str_replace($trocarIsso, $porIsso, $txt);
					break;

				case 'simbolos':
					$trocarIsso	= array(' ','à','á','â','ã','ä','å','ç','è','é','ê','ë','ì','í','î','ï','ñ','ò','ó','ô','õ','ö','ù','ü','ú','ÿ','À','Á','Â','Ã','Ä','Å','Ç','È','É','Ê','Ë','Ì','Í','Î','Ï','Ñ','Ò','Ó','Ô','Õ','Ö','Ù','Ü','Ú','Ÿ', '\ ', '\\', '\\\ ', "\"", '\'', '/',);
					$porIsso 	= array('_','a','a','a','a','a','a','c','e','e','e','e','i','i','i','i','n','o','o','o','o','o','u','u','u','y','A','A','A','A','A','A','C','E','E','E','E','I','I','I','I','N','O','O','O','O','O','U','U','U','Y', '_',  '_',  '_',    '_',  '_',  '_',);
					$return = str_replace($trocarIsso, $porIsso, $txt);
					$return = preg_replace("/[^a-zA-Z0-9\s]/", "_", $return);
					break;

			}
			return $return;
		}

		function cod($tipo, $txt){
			switch ($tipo) {
				case 'busca':
					$txt 		= sem('acentos', $txt);
					$trocarIsso	= array('a', 					'e', 				'i',				'o',					'u',				'c',			'n',			'A',								'E',						'I',						'O',							'U',					'C',			'N',);
					$porIsso1 	= array('(a|à|á|â|ã|ä|å|A)',	'(e|è|é|ê|ë|E)',	'(i|ì|í|î|ï|I)',	'(o|ò|ó|ô|õ|ö|O)',		'(u|ù|ü|ú|U)',		'(c|ç|C)',		'(n|ñ|N)',		'(a|à|á|â|ã|ä|å|A|À|Á|Â|Ã|Ä|Å)',	'(e|è|é|ê|ë|E|È|É|Ê|Ë)',	'(i|ì|í|î|ï|I|Ì|Í|Î|Ï)',	'(o|ò|ó|ô|õ|ö|O|Ò|Ó|Ô|Õ|Ö)',	'(u|ù|ü|ú|U|Ù|Ü|Ú)',	'(c|ç|C|Ç)',	'(n|ñ|N|Ñ)',);
					$porIsso = array();
					foreach ($porIsso1 as $key => $value) {
						$porIsso[] = utf8_decode($value);
					}
					//$trocarIsso	= array('',);
					//$porIsso 	= array('',);
					break;

				case 'html->asc': // https://ascii.cl/htmlcodes.htm
					$trocarIsso	= array("'",		'"',		"´",		"`",		"?",		"=",);
					$porIsso 	= array('&#39;',	'&#34;',	'&#180;',	'&#96;',	'&#63;',	'&#61;',);
					break;

				case 'asc->html':
					$trocarIsso = array('&#39;',	'&#34;',	'&#180;',	'&#96;',	'&#63;',	'&#61;',);
					$porIsso	= array("'",		'"',		"´",		"`",		"?",		"=",);
					break;

				case 'html->iso': // htmlentities
					$trocarIsso	= array('à',		'á',		'â',		'ã',		'ä',		'å',		'ç',		'è',		'é',		'ê',		'ë',		'ì',		'í',		'î',		'ï',		'ñ',		'ò',		'ó',		'ô',		'õ',		'ö',		'ù',		'ü',		'ú',		'ÿ',		'À',		'Á',		'Â',		'Ã',		'Ä',		'Å',		'Ç',		'È',		'É',		'Ê',		'Ë',		'Ì',		'Í',		'Î',		'Ï',		'Ñ',		'Ò',		'Ó',		'Ô',		'Õ',		'Ö',		'Ù',		'Ü',		'Ú',		'Ÿ',);
					$porIsso	= array('&agrave;',	'&aacute;',	'&acirc;',	'&atilde;',	'&auml;',	'&aring;',	'&ccedil;',	'&egrave;',	'&eacute;',	'&ecirc;',	'&euml;',	'&igrave;',	'&iacute;',	'&icirc;',	'&iuml;',	'&ntilde;',	'&ograve;',	'&oacute;',	'&ocirc;',	'&otilde;',	'&ouml;',	'&ugrave;',	'&uuml;',	'&Uacute;',	'&yuml;',	'&Agrave;',	'&Aacute;',	'&Acirc;',	'&Atilde;',	'&Auml;',	'&Aring;',	'&Ccedil;',	'&Egrave;',	'&Eacute;',	'&Ecirc;',	'&Euml;',	'&Igrave;',	'&Iacute;',	'&Icirc;',	'&Iuml;',	'&Ntilde;',	'&Ograve;',	'&Oacute;',	'&Ocirc;',	'&Otilde;',	'&Ouml;',	'&Ugrave;',	'&uuml;',	'&Uacute;',	'&Yuml;',);
					break;

				case 'html->iso1': // htmlentities
					$trocarIsso	= array(' ',		'à',		'á',		'â',		'ã',		'ä',		'å',		'ç',		'è',		'é',		'ê',		'ë',		'ì',		'í',		'î',		'ï',		'ñ',		'ò',		'ó',		'ô',		'õ',		'ö',		'ù',		'ü',		'ú',		'ÿ',		'À',		'Á',		'Â',		'Ã',		'Ä',		'Å',		'Ç',		'È',		'É',		'Ê',		'Ë',		'Ì',		'Í',		'Î',		'Ï',		'Ñ',		'Ò',		'Ó',		'Ô',		'Õ',		'Ö',		'Ù',		'Ü',		'Ú',		'Ÿ',		'&',		'<', 		'>',		'¡',		'¤',		'¢',		'£',		'¥',		'¦',		'§',		'¨',		'©',		'ª',		'«',		'¬',		'®',		'¯',		'°',		'±',		'²',			'³',		'µ',		'¶',		'·',		'¸',		'¹',		'º',		'»',		'¼',		'½',		'¾',		'¿',		'×',		'÷',);
					$porIsso	= array('&nbsp;',	'&agrave;',	'&aacute;',	'&acirc;',	'&atilde;',	'&auml;',	'&aring;',	'&ccedil;',	'&egrave;',	'&eacute;',	'&ecirc;',	'&euml;',	'&igrave;',	'&iacute;',	'&icirc;',	'&iuml;',	'&ntilde;',	'&ograve;',	'&oacute;',	'&ocirc;',	'&otilde;',	'&ouml;',	'&ugrave;',	'&uuml;',	'&Uacute;',	'&yuml;',	'&Agrave;',	'&Aacute;',	'&Acirc;',	'&Atilde;',	'&Auml;',	'&Aring;',	'&Ccedil;',	'&Egrave;',	'&Eacute;',	'&Ecirc;',	'&Euml;',	'&Igrave;',	'&Iacute;',	'&Icirc;',	'&Iuml;',	'&Ntilde;',	'&Ograve;',	'&Oacute;',	'&Ocirc;',	'&Otilde;',	'&Ouml;',	'&Ugrave;',	'&uuml;',	'&Uacute;',	'&Yuml;',	'&amp;',	'&lt;',		'&gt;',		'&iexcl;',	'&curren;',	'&cent;',	'&pound;',	'&yen;',	'&brvbar;',	'&sect;',	'&uml;',	'&copy;',	'&ordf;',	'&laquo;',	'&not;',	'&reg;',	'&macr;',	'&deg;',	'&plusmn;',	'	&sup2;',	'&sup3;',	'&micro;',	'&para;',	'&middot;',	'&cedil;',	'&sup1;',	'&ordm;',	'&raquo;',	'&frac14;',	'&frac12;',	'&frac34;',	'&iquest;',	'&times;',	'&divide;',);
					break;

				case 'iso->html': // html_entity_decode
					$trocarIsso	= array('&agrave;',	'&aacute;',	'&acirc;',	'&atilde;',	'&auml;',	'&aring;',	'&ccedil;',	'&egrave;',	'&eacute;',	'&ecirc;',	'&euml;',	'&igrave;',	'&iacute;',	'&icirc;',	'&iuml;',	'&ntilde;',	'&ograve;',	'&oacute;',	'&ocirc;',	'&otilde;',	'&ouml;',	'&ugrave;',	'&uuml;',	'&uacute;',	'&yuml;',	'&Agrave;',	'&Aacute;',	'&Acirc;',	'&Atilde;',	'&Auml;',	'&Aring;',	'&Ccedil;',	'&Egrave;',	'&Eacute;',	'&Ecirc;',	'&Euml;',	'&Igrave;',	'&Iacute;',	'&Icirc;',	'&Iuml;',	'&Ntilde;',	'&Ograve;',	'&Oacute;',	'&Ocirc;',	'&Otilde;',	'&Ouml;',	'&Ugrave;',	'&Uuml;',	'&Uacute;',	'&Yuml;',	'&amp;',	'&lt;',		'&gt;',		'&iexcl;',	'&curren;',	'&cent;',	'&pound;',	'&yen;',	'&brvbar;',	'&sect;',	'&uml;',	'&copy;',	'&ordf;',	'&laquo;',	'&not;',	'&reg;',	'&macr;',	'&deg;',	'&plusmn;',	'	&sup2;',	'&sup3;',	'&micro;',	'&para;',	'&middot;',	'&cedil;',	'&sup1;',	'&ordm;',	'&raquo;',	'&frac14;',	'&frac12;',	'&frac34;',	'&iquest;',	'&times;',	'&divide;',);
					$porIsso	= array('à',		'á',		'â',		'ã',		'ä',		'å',		'ç',		'è',		'é',		'ê',		'ë',		'ì',		'í',		'î',		'ï',		'ñ',		'ò',		'ó',		'ô',		'õ',		'ö',		'ù',		'ü',		'ú',		'ÿ',		'À',		'Á',		'Â',		'Ã',		'Ä',		'Å',		'Ç',		'È',		'É',		'Ê',		'Ë',		'Ì',		'Í',		'Î',		'Ï',		'Ñ',		'Ò',		'Ó',		'Ô',		'Õ',		'Ö',		'Ù',		'Ü',		'Ú',		'Ÿ',		'&',		'<', 		'>',		'¡',		'¤',		'¢',		'£',		'¥',		'¦',		'§',		'¨',		'©',		'ª',		'«',		'¬',		'®',		'¯',		'°',		'±',		'²',			'³',		'µ',		'¶',		'·',		'¸',		'¹',		'º',		'»',		'¼',		'½',		'¾',		'¿',		'×',		'÷',);
					break;

				case 'especial':
					$trocarIsso	= array('º',);
					$porIsso 	= array('&deg;',);
					break;

				case 'msql->html':
					$trocarIsso		= array('Ã ',	'Ã¡',	'Ã¢',	'Ã£',	'Ã¤',	'Ã¥',	'Ã§',	'Ã¨',	'Ã©',	'Ãª',	'Ã«',	'Ã¬',	'Ã­',	'Ã®',	'Ã¯',	'Ã±',	'Ã²',	'Ã³',	'Ã´',	'Ãµ',	'Ã¶',	'Ã¹',	'Ã¼',	'Ãº',	'Ã¿',	'Ã',	'Ã',	'Ã',	'Ã',	'Ã',	'Ã' ,	'Ã',	'Ã',	'Ã',	'Ã',	'Ã',	'Ã',	'Ã',	'Ã',	'Ã',	'Ã',	'Ã',	'Ã',	'Ã',	'Ã',	'Ã',	'Ã',	'Ã',	'Ã',	'Å¸',	'Âº',	'â',);
					$porIsso		= array('à',	'á',	'â',	'ã',	'ä',	'å',	'ç',	'è',	'é',	'ê',	'ë',	'ì',	'í',	'î',	'ï',	'ñ',	'ò',	'ó',	'ô',	'õ',	'ö',	'ù',	'ü',	'ú',	'ÿ',	'À',		'Á',		'Â',		'Ã',		'Ä',		'Å' ,		'Ç',		'È',		'É',		'Ê',		'Ë',		'Ì',		'Í',		'Î',		'Ï',		'Ñ',		'Ò',		'Ó',		'Ô',		'Õ',		'Ö',		'Ù',		'Ü',		'Ú',		'Ÿ',	'º',	"&#34;",);
					break;

				case 'html->msql':
					$trocarIsso		= array('à' ,'á' ,'â' ,'ã' ,'ä' ,'å' ,'ç' ,'è' ,'é' ,'ê' ,'ë' ,'ì' ,'í' ,'î' ,'ï' ,'ñ' ,'ò' ,'ó' ,'ô' ,'õ' ,'ö' ,'ù' ,'ü' ,'ú' ,'ÿ' ,'À' ,'Á','Â' ,'Ã', 'Ä','Å'  ,'Ç' ,'È' ,'É' ,'Ê' ,'Ë' ,'Ì' ,'Í','Î' ,'Ï','Ñ' ,'Ò' ,'Ó' ,'Ô' ,'Õ' ,'Ö' ,'Ù' ,'Ü' ,'Ú' ,'Ÿ', 'º',);
					$porIsso		= array('Ã ','Ã¡','Ã¢','Ã£','Ã¤','Ã¥','Ã§','Ã¨','Ã©','Ãª','Ã«','Ã¬','Ã­','Ã®','Ã¯','Ã±','Ã²','Ã³','Ã´','Ãµ','Ã¶','Ã¹','Ã¼','Ãº','Ã¿','Ã€','Ã','Ã‚','Ãƒ','Ã"','Ã…','Ã‡','Ãˆ','Ã‰','ÃŠ','Ã‹','ÃŒ','Ã','ÃŽ','Ã',"Ã'","Ã'",'Ã"','Ã"','Ã•','Ã–','Ã™','Ãœ','Ãš','Å¸', 'Âº',);
					break;

			}
			$return = str_replace($trocarIsso, $porIsso, $txt);
			return $return;
		}

		// acentos uft8 (comentar tbm na funcao cod() em case 'busca':)
		function acento_uft8_read($array, $key, $value){
			$return = $array;
			foreach ($value as $k => $v) {
				if($return[$key]->table != 'menu_admin' AND !is_array($v) AND !is_object($v)){
					$return[$key]->$k = utf8_encode($v); // PROBLEMA DE ACENTUAÇÃOOOOOOOOOOOOOO
					if(($k == 'txt') AND LUGAR == 'site'){
						$return[$key]->$k = nl2br($return[$key]->$k);
					}
				}
			}
			return $return;
		}

		function acento_uft8_gravando($texto){
			$return = $texto;
			$return = utf8_decode($return); // PROBLEMA DE ACENTUAÇÃOOOOOOOOOOOOOO
			return $return;
		}

		function gravando_no_mysql($table, $name, $value){
			$return = $value;
			//if($name!='multifotos' AND $table!='usuarios_config' AND $table!='z_txt'){
			if($table!='menu_admin' AND $table!='z_txt' AND $table!='pedidos' AND $table!='pedidos_zretorno'){
				$return = cod('html->asc', $return); // htmlspecialchars
			} else {
				$return = stripslashes($return);
			}
			//$return = utf8_decode($return);
			return $return;
		}

		function voltar_cod($txt){
			$return = cod('asc->html', $txt);
			$return = cod('iso->html', $return);
			return $return;
		}
		function vc($txt){
			$return = voltar_cod($txt);
			return $return;
		}

	// CODIFICACOES






	// LESS
	function less($admin='', $mostrar_css_ou_js=0){
		$quebra = "\n";

		$pre = $admin ? '_admin' : '';


		// Verificar se Style e Js Existe
			$css_site = DIR_F.'/plugins/style.css';
			$js_site = DIR_F.'/plugins/js.js';
			$css_admin = DIR_F.'/plugins/style_admin.css';
			$js_admin = DIR_F.'/plugins/js_admin.js';
			if(!file_exists($css_site) OR !file_exists($js_site) OR !file_exists($css_admin) OR !file_exists($js_admin)){
				$_GET['less'] = 1;
			}
		// Verificar se Style e Js Existe


		$mysql = new Mysql();
		$mysql->colunas = 'nome';
		$mysql->filtro = " WHERE  `tipo` = 'informacoes' AND lang = '".LANG."' ";
		$info = $mysql->read_unico('configs');

		// Atualizando Version
		if(isset($_GET['less']) AND $_GET['less'] AND isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id==1){
			$versao = str_replace('v&#61;', '', $info->nome);
		    $versao = str_replace('v=', '', $versao);
		    $versao = (int)$versao;
		    $info->nome = 'v='.preco($versao+1, '', 1, '.', '');

			$mysql->campo['nome'] = $info->nome;
			$mysql->filtro = " WHERE  `tipo` = 'informacoes' AND lang = '".LANG."' ";
			$ult_id = $mysql->update('configs');
		}
		// Atualizando Version


		$js_ini  = '<script> ';
			include DIR_F.'/js/var.php';
		$js_ini .= '</script> ';





		// CSS E JS QUE SERAO USADOS
			$css_site = array();
			$js_site = array();
			$css_admin = array();
			$js_admin = array();

			// SITE
				// CSS
					// Fonts
					$css_site[] = '/plugins/Fonts/Fonts_Faa/font_faa.css';
					//$css_site[] = '/plugins/Fonts/Fonts_Faa/font_faas.css';
					$css_site[] = '/plugins/Fonts/Fonts_Uii/font_uii.css';

					// Plugins
					$css_site[] = '/plugins/Jquery/Cropperjs/cropper.css';
					$css_site[] = '/plugins/Jquery/Plugins/ImageLightBox/css/imagelightbox.css';
					$css_site[] = '/plugins/Jquery/Plugins/LightSlider/css/lightslider.css';
					$css_site[] = '/plugins/Jquery/Plugins/OwlCarousel/css/animate.css';
					$css_site[] = '/plugins/Jquery/Plugins/OwlCarousel/css/style.css';
					$css_site[] = '/plugins/Jquery/Plugins/PrecoMinMax/css/style.css';
					$css_site[] = '/plugins/Jquery/Select2/css/select2.css';

					// Padrao
					$css_site[] = '/css/animate.css';
					$css_site[] = '/css/css.css';
					$css_site[] = '/css/style.css';
					$css_site[] = '/css/resp.css';

					// UI (Calenadrio e outros)
					//$css_site[] = '/plugins/Jquery/UI/css/ui.css';

					// DataTabel
					//$css_site[] = '/plugins/Jquery/Datatables/css/dataTable.css';
				// CSS

				// JS
					$js_site[] = '/plugins/Jquery/jquery-1.11.3.min.js'; //94kb
					$js_site[] = '/plugins/Jquery/jquery.form.min.js'; //15kb
					//$js_site[] = '/plugins/Jquery/smoothscroll.min.js';
					$js_site[] = '/plugins/Jquery/Cropperjs/cropper.min.js'; //15kb

					$js_site[] = '/plugins/Jquery/Plugins/ImageLightBox/js/imagelightbox.min.js'; //10kb
					$js_site[] = '/plugins/Jquery/Plugins/OwlCarousel/js/owl.carousel.js'; //22kb

					$js_site[] = '/plugins/Jquery/Mascara/js/jquery.priceformat.2.2.min.js';  //3kb
					$js_site[] = '/plugins/Jquery/Mascara/js/jquery.mask.min.js'; //3.5kb
					$js_site[] = '/plugins/Jquery/Mascara/js/mascara_events.js'; //3.5kb
					$js_site[] = '/plugins/Jquery/Select2/js/select2.min.js'; //69kb
					//$js_site[] = '/plugins/Jquery/UI/Draggable/draggable-ui.min.js'; // Boxs (Move)  //30kb

					// Zoom
					//$js_site[] = '/plugins/Jquery/Plugins/ElevateZoom/js/jquery.elevatezoom.min.js';

					// Preco Min e Max
					$js_site[] = '/plugins/Jquery/Plugins/PrecoMinMax/js/jquery.slider.min.js';

					// Plugins Carrocel
					$js_site[] = '/plugins/Jquery/Plugins/LightSlider/js/lightslider.min.js';
					//$js_site[] = '/plugins/Jquery/Plugins/WaterFall/js/waterfall-1.0.2.min.js';

					// Balao (ativar na funcao tooltip eventos.js) e PopOver
					$js_site[] = '/plugins/Jquery/bootstrap(popover-tooltip).min.js';

					// Parallax
					//$js_site[] = '/plugins/Jquery/parallax.min.js';

					// Auto Complete
					//$js_site[] = '/plugins/Jquery/UI/Autocomplete/autocomplete-ui.min.js';

					// UI (Calenadrio e outros)
					//$js_site[] = '/plugins/Jquery/UI/jquery-ui.min.js';

					// DataTable
					//$js_site[] = '/plugins/Jquery/Datatables/js/jquery.dataTables.min.js';

					// Wow
					$js_site[] = '/plugins/Jquery/Wow/js/imagesloaded.pkgd.min.js';
					$js_site[] = '/plugins/Jquery/Wow/js/wow.min.js';


					// Padroes
					$js_site[] = '/js/eventos_all.js'; //68kb
					$js_site[] = '/js/eventos.js'; //25kb
				// JS
			// SITE


			// ADMIN
				// CSS
					// Fonts
					$css_admin[] = '/plugins/Fonts/Fonts_Faa/font_faa.css';
					$css_admin[] = '/plugins/Fonts/Fonts_Faa/font_faas.css';
					$css_admin[] = '/plugins/Fonts/Fonts_Uii/font_uii.css';

					// Events Importantes
					$css_admin[] = '/plugins/Jquery/Cropperjs/cropper.css';
					$css_admin[] = '/plugins/Jquery/Datatables/css/dataTable.css';
					$css_admin[] = '/plugins/Jquery/Select2/css/select2.css';
					$css_admin[] = '/plugins/Jquery/UI/css/ui.css';

					// Padrao
					$css_admin[] = '/css/animate.css';
					$css_admin[] = '/css/css.css';
					$css_admin[] = '/admin/css/style.css';
					$css_admin[] = '/css/resp.css';
				// CSS

				// JS
					$js_admin[] = '/plugins/Jquery/jquery-1.11.3.min.js';
					$js_admin[] = '/plugins/Jquery/jquery.form.min.js';
					//$js_admin[] = '/plugins/Jquery/smoothscroll.min.js';
					$js_admin[] = '/plugins/Jquery/Cropperjs/cropper.min.js'; //15kb

					$js_admin[] = '/plugins/Jquery/UI/jquery-ui.min.js';
					$js_admin[] = '/plugins/Jquery/Datatables/js/jquery.dataTables.min.js';

					$js_admin[] = '/plugins/Jquery/bootstrap(popover-tooltip).min.js';
					$js_admin[] = '/plugins/Jquery/Mascara/js/jquery.priceformat.2.2.min.js';
					$js_admin[] = '/plugins/Jquery/Mascara/js/jquery.mask.min.js';
					$js_admin[] = '/plugins/Jquery/Mascara/js/mascara_events.js';
					$js_admin[] = '/plugins/Jquery/Select2/js/select2.min.js'; // http://select2.github.io/select2/

					$js_admin[] = '/js/eventos_all.js';
					$js_admin[] = '/admin/js/eventos.js';
					
					$js_admin[] = '/admin/js/1_views.js';
					$js_admin[] = '/admin/js/2_datatable.js';
					$js_admin[] = '/admin/js/3_dialog.js';
					$js_admin[] = '/admin/js/4_select2.js';
					$js_admin[] = '/admin/js/5_gerenciar_e_pop.js';
					$js_admin[] = '/admin/js/6_fieldset_insert_boxx.js';
					$js_admin[] = '/admin/js/7_menu_admin.js';
					$js_admin[] = '/admin/js/8_boxxs.js';
				// JS

			// ADMIN

			if(!$admin){
				// SITE
					$css = $css_site;
					$js = $js_site;
				// SITE
			} else {
				// ADMIN
					$css = $css_admin;
					$js = $js_admin;
				// ADMIN
			}
		// CSS E JS QUE SERAO USADOS




		// ARQUIVOS CSS E JS
			$return = '';
			if((isset($_GET['less']) AND $_GET['less'] AND isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id==1) OR $_SERVER['HTTP_HOST']!='localhost:4000'){
				if($mostrar_css_ou_js==0 OR $mostrar_css_ou_js=='css'){
					$return .= $js_ini.$quebra;
					$return .= '<link rel="stylesheet" type="text/css" href="'.DIR.'/plugins/style'.$pre.'.css?'.cod('asc->html', $info->nome).'" />'.$quebra;
				}

				if($mostrar_css_ou_js==0 OR $mostrar_css_ou_js=='js'){
					if(browser() == 'chrome' OR browser() == 'firefox'){
						$return .= '<script type="text/javascript" src="'.DIR.'/plugins/js'.$pre.'.js?'.cod('asc->html', $info->nome).'"></script> '.$quebra;

					 } else {
						foreach ($js as $key => $value) {
							$value = str_replace(DIRECTORY_SEPARATOR, '/', $value);
							$return .= '<script type="text/javascript" src="'.DIR.$value.'?v='.time().'"></script>';
						}
					}
				}
			}
		// ARQUIVOS CSS E JS








		// CRIANDO ARQUIVOS
			if(isset($_GET['less']) AND $_GET['less'] AND isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id==1){
				define('LESS_1', 1);
				require DIR_F.'/plugins/Less/lessc.inc.php';

				// SITE
					// CSS
						$css_txt = '';
						foreach ($css_site as $key => $value) {
							$css_txt .= file_get_contents(DIR_F.$value);
						}

						$css_txt .= get_include_contents(DIR_F.'/css/css.php');
						include DIR_F.'/css/config.php';

					    $file = fopen(DIR_F.'/plugins/Temp/style.css', 'w');
					    fwrite($file, $css_txt);
					    fclose($file);

						$less = new lessc;
						$less->setFormatter('compressed');
						$less->checkedCompile(DIR_F.'/plugins/Temp/style.css', DIR_F.'/plugins/style.css');
					// CSS

					// JS
						$js_txt = '';
						foreach ($js_site as $key => $value) {
							$js_txt .= file_get_contents(DIR_F.$value);
						}

					    $file = fopen(DIR_F.'/plugins/js.js', 'w');
					    fwrite($file, $js_txt);
					    fclose($file);
					// JS
				// SITE

				// ADMIN
					// CSS
						$css_txt = '';
						foreach ($css_admin as $key => $value) {
							$css_txt .= file_get_contents(DIR_F.$value);
						}

						$css_txt .= get_include_contents(DIR_F.'/css/css.php');
						include DIR_F.'/css/config.php';

					    $file = fopen(DIR_F.'/plugins/Temp/style_admin.css', 'w');
					    fwrite($file, $css_txt);
					    fclose($file);

						$less = new lessc;
						$less->setFormatter('compressed');
						$less->checkedCompile(DIR_F.'/plugins/Temp/style_admin.css', DIR_F.'/plugins/style_admin.css');
					// CSS

					// JS
						$js_txt = '';
						foreach ($js_admin as $key => $value) {
							$js_txt .= file_get_contents(DIR_F.$value);
						}

					    $file = fopen(DIR_F.'/plugins/js_admin.js', 'w');
					    fwrite($file, $js_txt);
					    fclose($file);
					// JS
				// ADMIN

				echo '<div class="p10 tac">ok -> '.cod('asc->html', $info->nome).'</div>';


			} elseif($_SERVER['HTTP_HOST']=='localhost:4000'){
				$return = $js_ini;
				include 'D:\wamp64\www\Configs\css_js_novo.php';
			}
		// CRIANDO ARQUIVOS

		return $return;
	}
	// LESS


?>