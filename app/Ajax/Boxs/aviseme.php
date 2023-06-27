<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = 0;


		if(isset($_POST['email']) and $_POST['email']){

        	$mysql->campo['produtos'] = $_POST['produtos'];
        	$mysql->campo['produtos_nome'] = $_POST['produtos_nome'];
        	$mysql->campo['nome'] = $_POST['nome'];
        	$mysql->campo['email'] = $_POST['email'];
        	$mysql->campo['celular'] = $_POST['celular'];
        	$mysql->campo['telefone'] = $_POST['telefone'];
        	$mysql->campo['whatsapp'] = $_POST['whatsapp'];
        	$mysql->campo['ref'] = $_POST['ref']=='()' ? '' : $_POST['ref'];
            $mysql->insert('produtos_aviseme');

			$arr['alert'] = 'Enviado com Sucesso!';
			$arr['evento'] = ' fechar_all(); ';


		} else {

			if(isset($_SESSION['x_site']->id)){
				$mysql->filtro = " where id = '".$_SESSION['x_site']->id."' ";
				$cadastro = $mysql->read_unico('cadastro');
			}
			$nome = isset($cadastro->nome) ? $cadastro->nome : '';
			$email = isset($cadastro->email) ? $cadastro->email : '';
			$telefone = isset($cadastro->telefone) ? $cadastro->telefone : '';
			$celular = isset($cadastro->celular) ? $cadastro->celular : '';
			$whatsapp = isset($cadastro->whatsapp) ? $cadastro->whatsapp : '';

			$mysql->filtro = " where status = 1 and lang = '".LANG."' and id = '".$_POST['id']."' order by ordem asc, id desc ";
			$produtos = $mysql->read_unico('produtos');

			$ref = isset($_POST['atributos']) ? '('.$_POST['atributos'].')' : '';

			$arr['title'] = 'Avise-me Quando Chegar';
			$arr['html']  = '<div class="w360 m-a p25 pt15 cor_333 w100p_360">
								<form id="Aviseme" method="post" action="'.$_SERVER['SCRIPT_NAME'].'">

									<input type="hidden" name="produtos" value="'.$produtos->id.'" >
									<input type="hidden" name="produtos_nome" value="'.$produtos->nome.'" >
									<input type="hidden" name="ref" value="'.$ref.'">

									<div class="linha mb10">
										<b class="db mb5">Nome:</b>
										<input type="text" name="nome" value="'.$nome.'" class="w300 design" required >
									</div>
									<div class="linha mb10">
										<b class="db mb5">Email:</b>
										<input type="email" name="email" value="'.$email.'" class="w300 design" required >
									</div>
									<div class="linha mb10">
										<b class="db mb5">Telefone:</b>
										<input type="tel" name="telefone" value="'.$telefone.'" class="w300 design" >
									</div>
									<div class="linha mb10">
										<b class="db mb5">Celular:</b>
										<input type="tel" name="celular" value="'.$celular.'" class="w300 design">
									</div>
									<div class="linha mb15">
										<b class="db mb5">Whatsapp:</b>
										<input type="tel" name="whatsapp" value="'.$whatsapp.'" class="w300 design">
									</div>

									<input type="hidden" name="gravar" value="1">								
									<button class="botao"> <i class="mr2 faa-check c_verde"></i> Enviar</button>
									<div class="clear"></div>
								</form>
								<script>ajaxForm('.A.'Aviseme'.A.');</script>
							</div> ';

		}

	echo json_encode($arr); 

?>