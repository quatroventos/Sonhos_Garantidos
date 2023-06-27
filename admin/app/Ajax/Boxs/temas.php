<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';
	require_once DIR_F.'/app/Funcoes/funcoesAdmin.php';

	$mysql = new Mysql();
	$mysql->ini();

	$arr = array();


		$arr['title'] = 'Temas';

		$arr['html']  = '<div class="p20 pt15">
							<ul class="style_color">
								<li><a onclick="temas(this)" class="azul"></a></li>
								<li><a onclick="temas(this)" class="azul_escuro"></a></li>
								<li><a onclick="temas(this)" class="azul_escuro1"></a></li>
								<li><a onclick="temas(this)" class="cinza"></a></li>
								<li><a onclick="temas(this)" class="branco"></a></li>
								<li><a onclick="temas(this)" class="branco1"></a></li>
								<div class="clear"></div>
							</ul>
						</div>';


	$mysql->fim();
	echo json_encode($arr); 

?>