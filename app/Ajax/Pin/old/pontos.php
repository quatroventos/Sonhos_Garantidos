<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();
	$arr = array();


		// LOCALIZACAO ATUAL
			$localizacao = array('rua'=>'', 'bairro'=>'', 'cidades'=>'', 'estados'=>'');
			if($_GET['longitude']){
				$geocode = file_get_contents('https://maps.googleapis.com/maps/api/geocode/json?latlng='.$_GET['latitude'].','.$_GET['longitude'].'&key='.KEY_GOOGLE);
			} elseif($_GET['latitude'] AND $_GET['latitude']!='ini') {
				$geocode = file_get_contents('https://maps.googleapis.com/maps/api/geocode/json?address='.urlencode($_GET['latitude']).'&components=country:BR&key='.KEY_GOOGLE);
			}
			if(isset($geocode) AND $geocode){
				$localizacao = geomapeamento($geocode);
			}
		// LOCALIZACAO ATUAL


		// FUNCOES
			function consulta_pin($filtro){
				$return = array();
				$x=1;
				$mysql = new Mysql();
				$mysql->colunas = 'id, nome, lat, lon, endereco, bairro, cidades, estados';
				$mysql->filtro = " WHERE ".STATUS." ".$filtro." ORDER BY rand() ";
				$cadastro = $mysql->read('lojas');
				foreach ($cadastro as $key => $value) {
					$return[$x]['n'] = $x;
					$return[$x]['valido'] = 2;
					$return[$x]['id'] = $value->id;
					$return[$x]['lat'] = $value->lat;
					$return[$x]['lng'] = $value->lon;
					$return[$x]['nome'] = $value->nome;
					$return[$x]['txt']  = '<div class="p10"> ';
					$return[$x]['txt'] .= 	'<div class="fwb">'.$value->nome.'</div>';
					$return[$x]['txt'] .= 	$value->endereco.' '.$value->bairro.' '.$value->cidades.'/'.$value->estados;
					$return[$x]['txt'] .= '<div> ';
					$return[$x]['lojas']  = '<li class="pt5"> ';
					//$return[$x]['lojas'] .= '	<a href="https://www.google.com.br/maps/search/'.$value->lat.','.$value->lon.'" target="_blank" class="fwb cor_fff">'.$value->nome.'</a>';
					$return[$x]['lojas'] .= '	<div class="fwb cor_fff">'.$value->nome.'</div>';
					$return[$x]['lojas'] .= '<li> ';
					$x++;
				}
				return $return;
			}
		// FUNCOES


		// PIN (EMPRESAS)
			// Ini
			$ini = $_GET['latitude']=='ini' ? 'AND 1=2' : '';

			// Por Cidade
			$filtro = " and cidades = '".$localizacao['cidades']."' ".$ini;
			$arr = consulta_pin($filtro);

			// Por Estado
			if(!$arr){
				$filtro = " and estados = '".$localizacao['estados']."' ".$ini;
				$arr = consulta_pin($filtro);
			}

			// Todos
			if(!$arr){
				$filtro = " ";
				$arr = consulta_pin($filtro);
			}
		// PIN (EMPRESAS)


		// PIN (LOCALIZACAO ATUAL)
			if(isset($_GET['latitude']) and $_GET['latitude'] and isset($_GET['longitude']) and $_GET['longitude']){
				$arr[0]['n'] = 0;
				$arr[0]['valido'] = 1;
				$arr[0]['id'] = 0;
				$arr[0]['lat'] = $_GET['latitude'];
				$arr[0]['lng'] = $_GET['longitude'];
				$arr[0]['nome'] = 'Minha Localização ';
				$arr[0]['txt']  = '<div class="p10"> ';
				$arr[0]['txt'] .= 	'<b>Minha Localização</b><div class="h3"></div> ';
				//$arr[0]['txt'] .= 	$localizacao['rua'].', '.$localizacao['bairro'].' '.$localizacao['cidades'].'/ '.$localizacao['estados'];
				$arr[0]['txt'] .= '</div> ';
				$arr[0]['home'] = 0;
			}
			$arr['extra']['minha_localizacao'] = $localizacao;
		// PIN (LOCALIZACAO ATUAL)


		$arr['ini'] = $ini;


	echo json_encode($arr);

?>