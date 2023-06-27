<?

    $DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
    require_once $DIR_F[0].'/system/conecta.php';
    require_once DIR_F.'/app/Funcoes/funcoesAdmin.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = 'z';


		/* Especificacoes do Menu */
			$return = index_admin_menu();
			$menu_cate = isset($return['menu_cate']) ? $return['menu_cate'] : array();
			$menu = isset($return['menu']) ? $return['menu'] : array();
			$menu_subcate = isset($return['menu_subcate']) ? $return['menu_subcate'] : array();
			$menu_sub = isset($return['menu_sub']) ? $return['menu_sub'] : array();;
		/* Especificacoes do Menu */


		/* MENU */
			$html = '';
			$html_menu = '';

			$html .= '<div class="menu_fundo posf t0 z-1 h100p"></div> ';

			$html .= '<a class="menu_lista w30 h27 flr m10 ml20 mr20" onclick="menu_resp()">  </a> ';
			$html .= LUGAR=='admin' ? '<a href="'.DIR.'/" class="visitar_site flr mt15 fz12 ttu cor-Admin_fff" target="_blank">Visitar meu site</a> ' : '';
			$html .= '<div class="clear"></div> ';
			$html .= '<hr> ';

			$html .= '<ul class="menu_left pb50 mb0 dbi" click="true"> ';

				foreach ($menu as $key => $value) {

					// Categorias
					if($menu_cate[$key]->nome){
						$html_menu .= '<li class="heading fz16 ttu"> ';
							$html_menu .= '<b>'.$menu_cate[$key]->nome.'</b> ';
							//$html_menu .= '<i onclick="$('.A.'.faa-plus'.A.').hide();$('.A.'.faa-minus'.A.').show();$('.A.'.menu_cate_'.$menu_cate[$key]->id.A.').slideDown();" class="faa-plus p3 pl5 pr5 c-p bd-Admin_ccc back-Admin_fff"></i> ';
							//$html_menu .= '<i onclick="$('.A.'.faa-minus'.A.').hide();$('.A.'.faa-plus'.A.').show();$('.A.'.menu_cate_'.$menu_cate[$key]->id.A.').slideUp();" class="faa-minus dn p3 pl5 pr5 c-p bd-Admin_ccc back-Admin_fff"></i> ';
						$html_menu .= '</li> ';
						//$html_menu .= '<ul class="dn menu_cate_'.$menu_cate[$key]->id.'"> ';
					}

					// Sub Categorias
					if(isset($menu_subcate[$key])){
						$html_menu .= '<li> ';
							$html_menu .= '<a> ';
								$html_menu .= '<i class="'.iff($menu_subcate[$key]->foto, $menu_subcate[$key]->foto, 'faa-asterisk').'"></i> ';
								$html_menu .= '<span class="open"></span> ';
									$html_menu .= '<i class="seta up faa-angle-left"></i> ';
									$html_menu .= '<i class="seta down faa-angle-down"></i> ';
								$html_menu .= '<span class="nome"> '.$menu_subcate[$key]->nome.' </span> ';
							$html_menu .= '</a> ';

							// Menus Sub
							if(isset($menu_sub[$key])){
								$html_menu .= '<ul class="dn"> ';
									foreach ($menu_sub[$key] as $k => $v) {
										$html_menu .= '<li class="menu_'.$v->id.'" > ';
											if($v->url){
												$url = ' href="'.$v->url.'" ';
											} else {
												$url = ' href="javascript:'.VIEWS.'('.A.$v->id.A.', '.$v->tipo.', '.A.$v->gets.A.')" ';
											}
											$html_menu .= '<a '.$url.' > ';
												$html_menu .= '<span class="nome"> '.$v->nome.' </span> ';
											$html_menu .= '</a> ';
										$html_menu .= '</li> ';
									}
								$html_menu .= '</ul> ';
							}

						$html_menu .= '</li> ';
					}

					// Menus
					foreach ($value as $k => $v) {
						$html_menu .= '<li class="menu_'.$v->id.'" > ';
							if($v->url){
								$url = ' href="'.$v->url.'" ';
							} else{
								$url = ' href="javascript:'.VIEWS.'('.A.$v->id.A.', '.$v->tipo.', '.A.$v->gets.A.')" ';
							}
							$html_menu .= '<a '.$url.' > ';
								$html_menu .= '<i class="'.iff($v->foto, $v->foto, iff($menu_cate[$key]->foto, $menu_cate[$key]->foto, 'faa-asterisk') ).'"></i> ';
								$html_menu .= '<span class="open"></span> ';
								$html_menu .= '<span class="nome"> '.str_replace(' (Email)', '', $v->nome).' </span> ';
							$html_menu .= '</a> ';
						$html_menu .= '</li> ';
					}

				}

			$html .= $html_menu.'</ul> ';
			//$html .= '</ul> ';
		/* MENU */


	$arr['evento']  = "$('.principal aside.menu').html('".str_replace("'", AA, $html)."');";
	$arr['evento'] .= "$('header .boxx_menu').html('".str_replace("'", AA, $html)."');";

	echo json_encode($arr); 

?>