<?
	$DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$Login = new Login();
	$Login->Esqueci_senha();
	$Login->Logout();

    // Eliminar Bug de LUGAR != admin
    if(LUGAR != 'admin' AND !isset($admins)){
    	echo '<script>window.parent.location="'.DIR.'/admin/";</script>';
    	exit();
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
	</head>

	<body class="back_000">

		<? if( !(isset($_GET['q']) and $_GET['q']) ){ ?>
			<div class="w520 w-a_500 pt100 pb50 m-a">
				<div class="h50 dn_700"></div>
				<h1 class="pt25 pb18 back_2FACD8">
					<p class="cor_fff tac fz28 ttu ts"><?=LUGAR=='admin' ? 'Administração do Site' : 'Área de '.ucfirst(LUGAR)?></p>
				</h1>

		        <form action="" method="post">
		        	<div class="pt30 pl25 pr25 pb10 back_F8F8F8">
						<label class="db mb16 bd_E6E6E6">
							<i class="faa-user w43 h47 posa pt15 pl13 pr13 fz18 bdr_E6E6E6"></i>
							<div class="calc43">
								<input type="text" name="login" id="login" class="design w100p h47 pl10 pr10 ml42 bdt0 bdb0 bdr0 bdl_E6E6E6 back_fff" placeholder="<?=LUGAR=='admin' ? 'Login' : 'Email'?>" />
							</div>
			            </label>

						<label class="db mb16 bd_E6E6E6">
							<i class="faa-key w43 h47 posa pt15 pl13 pr13 fz18 bdr_E6E6E6"></i>
							<div class="calc42">
								<input type="password" name="senha" id="senha" class="design w100p h47 pl10 pr10 ml42 bdt0 bdb0 bdr0 back_fff" placeholder="Senha" />
							</div>
			            </label>
					</div>

					<div class="p20 tar back_F1F1F1">
						<button type="button" class="botao p15 pl20 pr20 mr10 fz11 ttu cor_fff hoverr br5 back_9E9E9E" onclick="boxs('esqueci_senha');"> Esqueci minha senha? </button>
						<button type="submit" class="botao p15 pl20 pr20 fz11 ttu cor_fff hoverr br5 back_2EADD4"> Entrar </button>
			            <div class="clear"></div>
		            </div>
		        </form>
		    </div>

		<? } else { ?>
			<div class="w420 w-a_400 pt100 pb50 m-a">
				<div class="h50 dn_700"></div>
				<h1 class="pt25 pb18 back_2FACD8">
					<p class="cor_fff tac fz28 ttu ts">Alterar Senha</p>
				</h1>

		        <form action="" method="post">
		        	<div class="pt30 pl25 pr25 pb10 back_F8F8F8">
						<label class="db mb16">
							<input type="password" name="senha" id="senha" class="design w100p h47 pl10 pr10 bd_E6E6E6 back_fff" placeholder="Nova Senha*" />
			            </label>

						<label class="db mb16">
							<input type="password" name="c_senha" id="c_senha" class="design w100p h47 pl10 pr10 bd_E6E6E6 back_fff" placeholder="Confirmar Senha*" />
			            </label>
					</div>

					<div class="p20 tar back_F1F1F1">
						<button type="submit" class="botao fz11 ttu cor_fff hoverr br5 back_2EADD4"> Salvar </button>
			            <div class="clear"></div>
		            </div>
		        </form>
		    </div>
		<? } ?>

		<script> $(document).ready(function() { criar_css(); }); </script>

		<? if(isset($_GET['error']) and $_GET['error']){ ?>
			<div class="events_externos">
				<div class="alerts">
					<div class="acao_0 alert dbi">
						<p> <?=$_GET['error']?> </p>
					</div>			
				</div>
			</div>
		<? } ?>

	</body>
	</html>