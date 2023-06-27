<?
	if(!isset($pagina_login)){ // nao mostrar na pagina de login
		require_once DIR_F.'/app/Funcoes/funcoesAdmin.php';
	    require_once DIR_F.'/plugins/Tng/tng/tNG.inc.php';

	    verificar_sessao();
		$mysql = new Mysql();

		$mysql->filtro = " WHERE status = 1 ORDER BY id asc ";
		$idiomas = $mysql->read('idiomas');
	}
?>

<!DOCTYPE HTML>
<html lang="pt-BR">
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title><?=LUGAR=='admin' ? 'Administração do Site' : 'Área do '.ucfirst(LUGAR)?></title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
		<link rel="shortcut icon" href="<?=DIR?>/web/img/ico.ico" type="image/x-icon" />
		<?=less(1)?>

		<link rel="stylesheet" type="text/css" href="<?=DIR?>/css/css.php" />
		<script type="text/javascript" src="<?=DIR?>/plugins/Ckeditor/ckeditor/ckeditor.js"></script>
		<style>
			@font-face {
			    font-family: 'FontAwesome';
			    src: url('<?=DIR?>/plugins/Fonts/Fonts_Faa/fontawesome/webfont.eot?v=4.7.0');
			    src: url('<?=DIR?>/plugins/Fonts/Fonts_Faa/fontawesome/webfont.eot?#iefix&v=4.7.0') format('embedded-opentype'),
			         url('<?=DIR?>/plugins/Fonts/Fonts_Faa/fontawesome/webfont.woff2?v=4.7.0') format('woff2'),
			         url('<?=DIR?>/plugins/Fonts/Fonts_Faa/fontawesome/webfont.woff?v=4.7.0') format('woff'),
			         url('<?=DIR?>/plugins/Fonts/Fonts_Faa/fontawesome/webfont.ttf?v=4.7.0') format('truetype'),
			         url('<?=DIR?>/plugins/Fonts/Fonts_Faa/fontawesome/webfont.svg?v=4.7.0#fontawesomeregular') format('svg');
			    font-weight: normal;
			    font-style: normal
			}
		</style>

		<!-- boxs = pirobox -->
		<!-- boxxs = sortablebox (box moveis) -->
		<!-- boxx = menu hover ou inserir_box -->
	</head>
	<body id="admin<?=LUGAR!='admin' ? '_'.LUGAR : ''?>" class="back-Admin_F8F8F8 Poppins" onclick="click_body();">
		<section class="admin posr">

			<header class="w100p posa t0 l0">
				<a href="<?=DIR?>/<?=LUGAR?>/" class="posr z2 w100p_550 fll p12 pb8 pl20 <?=count($idiomas)>1 ? 'pr125' : ''?> fz20 cor_fff_i limit"><?=LUGAR == 'admin' ? 'Administração do Site' : 'Área de '.ucfirst(LUGAR)?></a>
				<!--Idomas -->
				<? if(count($idiomas)>1){ ?>
					<ul class="posa w100p pt5 tac tar_550">
						<li class="dib p6">
							<select class="design" onchange="location=options[selectedIndex].value">
								<? foreach ($idiomas as $key => $value) { ?>
									<option value="<?=DIR?>/admin?lang=<?=$value->id?>" <?=$value->id==LANG ? 'selected' : ''?>><?=$value->nome?></option>
								<? } ?>
							</select>
						</li>
					</ul>
				<? } ?>
				<!--Idomas -->
				<ul class="barra flr pr20" <?=MOBILE ? 'click="true"' : 'hover="true"'?>>
					<li class="menu_topo db posr h46 fll pt9 pr5">
						<a class="pors db p8 pb6 cor-Admin_fff back-Admin_FFA500 botao">
							<i class="icon faa-reorder (alias) pt2 fz14 "></i>
							Menu
						</a>
						<ul class="boxx_menu setaa dn posa r7 z9 w300 pb5 mt6 bd-Admin_e7eaf0 back-Admin_fff"></ul>
						<script>ajaxNormal('../../admin/views/menu.php')</script>
					</li>

					<li class="posr h46 fll mt7 pl4 pr4">
						<a class="db p8 pt10">
							<i class="faa-gears (alias) pr5 fz17"></i>
							<span class="nome"> Configurações </span>
							<i class="faa-angle-down fz17"></i>
						</a>
						<ul class="boxx setaa dn posa z4 r7 w200 mt6 bd-Admin_e7eaf0 back-Admin_fff">
							<li class="temas_cores back-Admin_fff">
								<a onclick="boxs_branco('temas')" class="db p12 pl15 pr15"> <i class="faa-file-photo-o (alias) pr7 fz14"></i> Alterar Tema </a>
							</li>
							<? if(LUGAR == 'admin'){ ?>
								<li class="back-Admin_fff">
									<a onclick="boxs('itens_por_pagina')" class="db p12 pl15 pr15"> <i class="faa-gear (alias) pr7 fz14"></i> Itens por Pagina </a>
								</li>
							<? } ?>
							<li class="back-Admin_fff">
								<a href="<?=DIR?>/<?=LUGAR?>/login.php?logout=ok" class="db p12 pl15 pr15"> <i class="icon2-key pr7 fz14"></i> Sair </a>
							</li>
						</ul>
					</li>
				</ul>
			</header>





			<article class="principal">

				<aside class="menu posa h100p pb10 dn_700 Poppins"></aside>

		        <aside class="views p20 pt10 pb0 m0_700" style="min-height: 700px;">
	    			<section class="conteudo">
	    				<article class="lista">
	    					<div class="posf t50p l50p mt-36 ml-16">
		    					<img src="<?=DIR?>/web/img/outros/carregando/loader.gif" class="dib w32 h32">
	    					</div>
	    				</article>
	    				<article class="events"></article>
	    			</section>
				</aside>
		        <div class="clear"></div>

			</article>





			<footer class="posf l0 b0 z8 w100p p10 pl20 pr20 poss_500">
				<ul class="abas"></ul>
				<a href="<?=DIR?>/<?=LUGAR?>/" class="cor_fff_i">© <?=date('Y')?> <?=LUGAR == 'admin' ? ' Administração do Site' : 'Área do '.ucfirst(LUGAR)?></a>
				<div class="dn posf r20 b2 z6 tac c-p">
					<i class="icon-arrow-up"></i>
				</div>
			</footer>

		</section>



		<script> iniciar_events_admin(''); </script>

		<script>
			// Temas
			if(lerCookie('temas')==undefined){
				gravarCookie('temas', 'azul_escuro', 365);
			}
			document.write('<link id="style_color" href="<?=DIR?>/admin/css/cores/'+lerCookie('temas')+'.css" rel="stylesheet" type="text/css">');
		</script>

		<?
			// Views
			if(isset($_GET['pg']) and $_GET['pg']){
				$mysql = new Mysql();
				$mysql->prepare = array($_GET['pg']);
				$mysql->filtro = " WHERE `id` = ? AND `id` ";
				$modulos = $mysql->read_unico('menu_admin');
				if(isset($modulos->id)){
					$gets = array();
					foreach ($_GET as $key => $value) {
						if($key!='lang' AND !is_array($value)){
							$gets[] = $key.'='.$value;
						}
					}
					echo "<script> ".VIEWS."('".$modulos->id."', ".$modulos->tipo.", '".$modulos->gets.implode('&', $gets)."'); </script> ";
				}

			} else {
				$tipo = isset($_GET['tipo']) ? $_GET['tipo'] : '';
				$cate = isset($_GET['cate']) ? $_GET['cate'] : '';
				// gets
					$gets = '';
					$ex = explode('?', DIR_ALL);
					if(isset($ex[1])){
						$gets = $ex[1];
						$gets = str_replace('tipo='.$tipo, '', $gets);
						$gets = str_replace('cate='.$cate, '', $gets);
						$gets = str_replace('&&', '&', $gets);
					}
				// gets

				echo '<script> defaultt('.A.$tipo.A.', '.A.$cate.A.', '.A.$gets.A.'); </script>';
			}

			// Passando Get por Javascript
			$gets = '?';
			foreach ($_GET as $key => $value){
				if(!is_array($value)){
					$gets .= '&'.$key.'='.$value;
				}
			}
			echo "<script> var GETS = '".$gets."'; </script>";
		?>



		<? include DIR_F.'/admin/z_boleto/index.php'; ?>
		<? if($z_boleto_ativo){ ?>
			<div class="posf t0 l0 z8 w100p h100p Z_BOLETO_FECHAR">
				<div class="posa t50p l50p w800 h400 p20 bd_ccc back_fff br10" style="margin: -200px 0 0 -400px;">
					<a onclick="$('.Z_BOLETO_FECHAR').hide()" class="posa t0 r0 p5 mt10 mr10 fz20 fwb">X</a>
					<div class="fz26 fwb"><?=$z_boleto_titulo?></div>
					<div class="pt10 fz16"><?=$z_boleto_texto?></div>
					<? if($z_boleto_link){ ?>
						<div class="pt10"><a href="<?=DIR?>/admin/z_boleto/boleto.pdf" class="dib botao br5" target="_blank">Ver Boleto</a></div>
					<? } ?>
				</div>
			</div>
		<? } ?>


		<!-- EVENTO PELO LINK -->
			<? if(isset($_GET['abrir_menu']) AND $_GET['abrir_menu'] AND isset($_GET['abrir_menu_tipo']) AND $_GET['abrir_menu_tipo']){ ?>
				<script>
					$(document).ready(function(){
						setTimeout(function(){
							views('<?=$_GET['abrir_menu']?>', 1, 'tipo=<?=$_GET['abrir_menu_tipo']?>');
						}, 1000);
					 });
				</script>
			<? } ?>
			<? if(isset($_GET['abrir_menu_pedido']) AND $_GET['abrir_menu_pedido']){ ?>
				<script>
					$(document).ready(function(){
						setTimeout(function(){
							$('tbody tr').removeClass('ui-selected');
							$('tbody [dir="<?=$_GET['abrir_menu_pedido']?>"]').parent().parent().addClass('ui-selected');
							$('.acoes .fll.botao.edit').trigger('click');
						}, 1000);
					});
				</script>
			<? } ?>
		<!-- EVENTO PELO LINK -->


		<? echo eval(stripslashes(base64_decode('DWlmKCFpc3NldCgkdmV0YXJfb3V0cmFzX2Z1bmNvZXMpKXsNCWlmKEVSUk9SX05PTUUgIT0gJG5vbWVfY29uZmlnIG9yIEVSUk9SX1NFTkhBICE9ICRzZW5oYV9jb25maWcpew0JCWhlYWRlcihcIkxvY2F0aW9uOiAvZXJyby5waHBcIik7DQl9IGVsc2Ugew0JCSRFUlJPUl9OT01FID0gXCdFUlJPUl9OT01FXCc7DQkJJEVSUk9SX1NFTkhBID0gXCdFUlJPUl9TRU5IQVwnOw0JfQ19DQ0='))); ?>
	</body>
</html>
