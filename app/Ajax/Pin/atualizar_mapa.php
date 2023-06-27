<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();
	$arr = array();


		// LOCALIZACAO ATUAL
			$localizacao = array('rua'=>'', 'bairro'=>'', 'cidades'=>'', 'estados'=>'');
			if($_POST['lng']){
				$geocode = file_get_contents('https://maps.googleapis.com/maps/api/geocode/json?latlng='.$_POST['lat'].','.$_POST['lng'].'&key='.KEY_GOOGLE);
			} elseif($_POST['lat']) {
				$geocode = file_get_contents('https://maps.googleapis.com/maps/api/geocode/json?address='.urlencode($_POST['lat']).'&components=country:BR&key='.KEY_GOOGLE);
				$_POST['lat'] = '';
				$_POST['lng'] = '';
			}
			if(isset($geocode) AND $geocode){
				$localizacao = geomapeamento($geocode);
				if(isset($localizacao['cidades']) AND $localizacao['cidades']){ $arr['cidades'] = $localizacao['cidades']; }
				if(isset($localizacao['estados']) AND $localizacao['estados']){ $arr['estados'] = $localizacao['estados']; }

				if(!$_POST['lng']){
					$_POST['lat'] = $localizacao['lat'];
					$_POST['lng'] = $localizacao['lng'];
				}
			}

			$_POST['cidades'] = $localizacao['cidades'];
			$_POST['estados'] = $localizacao['estados'];
		// LOCALIZACAO ATUAL


		// FUNCOES
			function consulta_pin($filtro){
				$mysql = new Mysql();

				//$representantes = array();
				//$mysql->colunas = 'id, telefone';
				//$mysql->filtro = " WHERE ".STATUS." ";
				//$consulta = $mysql->read('representantes');
				//foreach ($consulta as $key => $value) {
					//$representantes[$value->id] = $value->telefone;
				//}

				$return = array();
				$x=1;
				$mysql->colunas = 'id, nome, lat, lng, rua, numero, complemento, bairro, cidades, estados, cep';
				$_GET['xx'] = $mysql->filtro = " WHERE ".STATUS." ".$filtro." AND lat != '' AND lng != '' ORDER BY ".$_POST['order']." ASC LIMIT 10 ";
				$consulta = $mysql->read('lojas');
				foreach ($consulta as $key => $value) {
					$return[$x]['n'] = $x;
					$return[$x]['valido'] = 2;
					$return[$x]['id'] = $value->id;
					$return[$x]['lat'] = $value->lat;
					$return[$x]['lng'] = $value->lng;
					$return[$x]['nome'] = $value->nome;
					$return[$x]['txt']  = '<div class="p10"> ';
					$return[$x]['txt'] .= 	'<div class="fwb">'.$value->nome.'</div>';
					$return[$x]['txt'] .= 	$value->rua.' '.$value->bairro.' '.$value->cidades.'/'.$value->estados;
					$return[$x]['txt'] .= '<div> ';
					$return[$x]['html']  = '';
					$return[$x]['km']  = number_format(formula_haversine($value->lat, $value->lng, $_POST['lat'], $_POST['lng']), 2, '.', '');

					$return[$x]['html'] .= '<li class="p10 bdb_ccc"> ';
						$maps = 'https://maps.google.com/maps?f=d&daddr='.$value->rua.'+'.$value->numero.'+'.$value->cidades.'+'.$value->estados.'+BR';
						$return[$x]['html'] .= '<div class="fz14">'.$value->nome.'</div> ';
						$return[$x]['html'] .= '<div class="pt5 fz14"> ';
							$return[$x]['html'] .= '<i class="faa-map-marker"></i>  ';
							$endereco  = $value->rua;
							$endereco .= $value->numero ? ', '.$value->numero : '';
							$endereco .= $value->complemento ? ' '.$value->complemento : '';
							$endereco .= $value->bairro ? ' - '.$value->bairro : '';
							$endereco .= ' - '.$value->cidades.' / '.$value->estados;
							$endereco .= $value->cep ? ' - CEP: '.$value->cep : '';
							$return[$x]['html'] .= $endereco.' ('.number_format(formula_haversine($value->lat, $value->lng, $_POST['lat'], $_POST['lng']), 2, '.', '').' km)';
						$return[$x]['html'] .= '</div> ';
						$return[$x]['html'] .= '<div class="pt5"> ';
							$return[$x]['html'] .= '<a href="'.$maps.'" class="dib botao cor_fff back_336DAC" target="_blank">Como Chegar</a> ';
							$return[$x]['html'] .= '<a onclick="copyy_endereco_mapa('.A.$endereco.A.')" class="dib botao cor_fff back_336DAC">Copiar Endereço</a> ';
						$return[$x]['html'] .= '</div> ';
				    $return[$x]['html'] .= '</li> ';
					$x++;
				}
				return $return;
			}
		// FUNCOES


		// PIN
			$filtro = " AND estados != '' ";

			// Por Cidade
			if($_POST['cidades']){
				$filtro .= " AND cidades = '".$_POST['cidades']."' AND cidades != '' ";
			}

			// Por Estado
			if($_POST['estados']){
				$filtro_estado = " AND estados = '".$_POST['estados']."' AND estados != '' ";
				$filtro .= $filtro_estado;
			}

			//if(isset($_POST['representantes']) AND $_POST['representantes']){
				//$filtro .= " AND representantes = '".$_POST['representantes']."' AND estados != '' ";
			//}

			$arr['array'] = consulta_pin($filtro);

			if(!$arr['array']){
				$arr['array'] = consulta_pin($filtro_estado);

				if(!$arr['array']){
					$arr['array'] = consulta_pin("");
				}
			}
		// PIN


		// HTML FINAL
			$kms = array();
			foreach ($arr['array'] as $key => $value) {
				$kms[$key] = $value['km'];
			}

			asort($kms);

			$arr['html_final'] = '';
			foreach ($kms as $key => $value) {
				$arr['html_final'] .= '<div>'.$arr['array'][$key]['html'].'</div>';
			}
		// HTML FINAL



		$arr['filtros'] = $_GET['xx'];

		// ESTADOS E CIDADES
			$arr['cidades'] = $_POST['cidades'];
			$arr['estados'] = $_POST['estados'];
		// ESTADOS E CIDADES

		// PIN (LOCALIZACAO ATUAL)
			if(isset($_POST['lat']) and $_POST['lat'] and isset($_POST['lng']) and $_POST['lng']){
				$arr['array'][0]['n'] = 0;
				$arr['array'][0]['valido'] = 1;
				$arr['array'][0]['id'] = 0;
				$arr['array'][0]['lat'] = $_POST['lat'];
				$arr['array'][0]['lng'] = $_POST['lng'];
				$arr['array'][0]['nome'] = 'Minha Localização ';
				$arr['array'][0]['txt']  = '<div class="p10"> ';
				$arr['array'][0]['txt'] .= 	'<b>Minha Localização</b><div class="h3"></div> ';
				//$arr['array'][0]['txt'] .= 	$localizacao['rua'].', '.$localizacao['bairro'].' '.$localizacao['cidades'].'/ '.$localizacao['estados'];
				$arr['array'][0]['txt'] .= '</div> ';
				$arr['array'][0]['home'] = 0;
			}
			$arr['extra']['minha_localizacao'] = $localizacao;
		// PIN (LOCALIZACAO ATUAL)


	echo json_encode($arr);

?>