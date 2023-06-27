<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = 0;

		$pg_cadastro = get_include_contents('../../../views/cadastro.phtml');

		$mysql->prepare = array($_SESSION['x_site']->id);
		$mysql->filtro = " WHERE `id` = ? ";
		$cadastro = $mysql->read_unico('cadastro');

		$arr['title'] = 'Editando Cadastro';
		$arr['html']  = '<style>
							.cadastro_editar .centerr { width: auto !important; padding: 0 !important; margin: 0 !important; }
							.cadastro_editar .dados { padding: 0 !important; margin: 0 !important; border: none !important; background: none !important; }
							.cadastro_editar .botao_edit { width: auto !important; }
							.cadastro_editar .add_edit { display: block; }
						 </style>
						 <div class="p20 pt15">
						'.$pg_cadastro.'
						</div>';

		$arr['html'] .= '<script> var $dados = new Array(); </script> ';
						foreach ($cadastro as $key => $value){
							if(browser()!='chrome' and $key == 'nascimento'){
								$value = data($value, 'd/m/Y');
							}
							if($key == 'nascimento'){
								$ex = explode('-', $value);
								$arr['html'] .= '<script> $dados["dia"] =  "'.(int)$ex[2].'"; </script> ';
								$arr['html'] .= '<script> $dados["mes"] =  "'.(int)$ex[1].'"; </script> ';
								$arr['html'] .= '<script> $dados["ano"] =  "'.(int)$ex[0].'"; </script> ';
							}
							$arr['html'] .= '<script> $dados["'.$key.'"] =  "'.$value.'"; </script> ';
						}
		$arr['html'] .= '<script>
							setTimeout(function(){ 
							 	$(".cadastro_editar .remove_edit").remove();
								$(".cadastro_editar #form_cadastro input").each(function() {
									if($(this).attr("type") != "file" && $(this).attr("type") != "checkbox" && $(this).attr("type") != "radio"){
										$(this).val( $dados[$(this).attr("name")] );
									}
								});
								$(".cadastro_editar #form_cadastro select").each(function() {
									$(this).val( $dados[$(this).attr("name")] ).trigger("change");
								});
							 	$(".cadastro_editar #form_cadastro").append("<input type=hidden name=update value=1 >");
								setTimeout(function(){ $(".cadastro_editar #form_cadastro select#cidades").val( $dados["cidades"] ).trigger("change"); }, 800);
								setTimeout(function(){ $(".cadastro_editar #form_cadastro select#cidades").val( $dados["cidades"] ).trigger("change"); }, 1500);
							 	$(".cadastro_editar .botao_cadastrar").html("Salvar");
							}, 0.5);
						 </script> ';


	echo json_encode($arr); 
