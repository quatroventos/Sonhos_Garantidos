<?

    $DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
    require_once $DIR_F[0].'/system/conecta.php';
    require_once DIR_F.'/app/Funcoes/funcoesAdmin.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = 'z';


	$_POST['tipo'] = $_POST['tipo'] ? $_POST['tipo'] : 'default';


		if($_POST['tipo'] == 'default'){
			/* Especificacoes do Menu */
				$return = index_admin_menu();
				$menu_cate = isset($return['menu_cate']) ? $return['menu_cate'] : array();
				$menu = isset($return['menu']) ? $return['menu'] : array();
				$menu_subcate = isset($return['menu_subcate']) ? $return['menu_subcate'] : array();
				$menu_sub = isset($return['menu_sub']) ? $return['menu_sub'] : array();;

				$default = array();
				// Categorias
				foreach ($menu as $key => $value) {
					// Sub Categorias
					if(isset($menu_subcate[$key])){
						// Menus Sub
						if(isset($menu_sub[$key])){
							foreach ($menu_sub[$key] as $k => $v) {
								$default[] = $v;
							}
						}
					}
					// Menus
					foreach ($value as $k => $v) {
						$default[] = $v;
					}
				}
			/* Especificacoes do Menu */


			/* MENU */
				$arr['html']  = '';
				$arr['html'] .= '<div class="default"> ';
		            $arr['html'] .= '<a onclick="defaultt('.A.A.')" class="mb10 cor-Admin_hover_108ee9"> ';
		                $arr['html'] .= '<i class="uii-home pr3"></i> Home ';
		            $arr['html'] .= '</a> ';

					$arr['html'] .= '<ul class="ml-10 mr-10"> ';
						foreach ($default as $k => $v){
							$arr['html'] .= '<li class="w180 h100 fll p10 mb5 tac"> ';
								$arr['html'] .= '<a onclick="'.iff($v->url, $v->url, VIEWS.'('.A.$v->id.A.', '.$v->tipo.', '.A.$v->gets.A.')').'" class="db bd-Admin_f4f4f4 back-Admin_fff hoverr-bs3 hoverr-op8" >';
									$arr['html'] .= '<div class="p7 pb2 bdb-Admin_f4f4f4 limit">'.$v->nome.'</div>'	;
									$icon_cate = rel('menu_admin1_cate', $v->categorias, 'foto');
									$arr['html'] .= '<i class="'.iff($v->foto, $v->foto, iff($icon_cate, $icon_cate, 'faa-asterisk') ).' fz30 p10 pb14"></i> ';
								$arr['html'] .= '</a> ';
							$arr['html'] .= '</li> ';
						}
						$arr['html'] .= '<li class="clear"></li> ';
					$arr['html'] .= '</ul> ';
				$arr['html'] .= '</div> ';
			/* MENU */



		} else {


			$post = gets_puro($_POST['gets']);
			$_POST['gets'] = default_gets_tipos($post);

			$arr['tipo'] = $_POST['tipo'];
			$arr['modulo'] = isset($post['modulo']) ? $post['modulo'] : $_POST['tipo'];

			/*
			if($_POST['tipo'] == 'professores' OR $_POST['tipo'] == 'alunos'){
				$coluna = '';

				if($post['tipo1'] == 'ano'){
					$titulo = 'Ano';
					$icone = 'faa-adjust';
					$coluna = 'ano';
					$mysql->filtro = " WHERE ".STATUS." GROUP BY ano ORDER BY ano DESC ";
					$consulta = $mysql->read('turmas');

				} elseif($post['tipo1'] == 'turmas'){
					$titulo = 'Turmas';
					$icone = 'faa-map';
					$mysql->filtro = " WHERE ".STATUS." AND ano = '".$post['ano']."' ORDER BY nome ASC ";
					$consulta = $mysql->read('turmas');

				}

				$arr['html']  = '';
				$arr['html'] .= '<div> ';
					$arr['html'] .= '<div class="posa r0 pt10 mr20"> ';
						$arr['html'] .= '<a onclick="voltarr();" class="cor-Admin_hover_108ee9 link dn_700"><i class="faa-reply"></i> Voltar</a> ';
					$arr['html'] .= '</div> ';
					$arr['html'] .= '<div class="mapa_url"> <div class="pt10 pb30 fz30 fwb"> '.$titulo.' </div> </div>';
					
					foreach ($consulta as $key => $value) {
						$col = $coluna ? $coluna : 'nome';
						$arr['html'] .= '<div class="menu_defaultt w200 h150 fll p10 mb5 tac fz16"> ';
							$veiws = default_link($value, $post, $coluna);
							$arr['html'] .= '<a onclick="'.$veiws.'" ><i class="'.$icone.' fz40"></i> <div class="pt5 fz14 lh16 fwb ttu">'.$value->$col.'</div> </a> ';
						$arr['html'] .= '</div> ';
					}

				$arr['html'] .= '</div> ';
			*/

		}


	echo json_encode($arr); 

?>