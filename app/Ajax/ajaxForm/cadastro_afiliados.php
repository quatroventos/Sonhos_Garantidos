<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = 'z';


		if(isset($_POST['gravar']) or isset($_POST['update'])){
			$table = 'afiliados';

			$x = 0;
			$modulos_site['abas'][0]['check'] = '1';
			$modulos_site['campos'] = array();

            // Verificar validacoes
            if(isset($_POST['tipo']) AND $_POST['tipo']==1){
				$x++;
				$modulos_site['campos'][0]['outros_'.$x]['check'] = 1;
				$modulos_site['campos'][0]['outros_'.$x]['nome'] = 'CNPJ';
				$modulos_site['campos'][0]['outros_'.$x]['input']['nome'] = 'cnpj';
				$modulos_site['campos'][0]['outros_'.$x]['input']['tags'] = 'required validar="cnpj"';
			} else {
				$x++;
				$modulos_site['campos'][0]['outros_'.$x]['check'] = 1;
				$modulos_site['campos'][0]['outros_'.$x]['nome'] = 'CPF';
				$modulos_site['campos'][0]['outros_'.$x]['input']['nome'] = 'cpf';
				$modulos_site['campos'][0]['outros_'.$x]['input']['tags'] = 'required validar="cpf"';
			}

			$x++;
			$modulos_site['campos'][0]['outros_'.$x]['check'] = 1;
			$modulos_site['campos'][0]['outros_'.$x]['nome'] = 'URL';
			$modulos_site['campos'][0]['outros_'.$x]['input']['nome'] = 'url';
			$modulos_site['campos'][0]['outros_'.$x]['input']['tags'] = 'required validar';

			$x++;
			$modulos_site['campos'][0]['outros_'.$x]['check'] = 1;
			$modulos_site['campos'][0]['outros_'.$x]['nome'] = 'Email';
			$modulos_site['campos'][0]['outros_'.$x]['input']['nome'] = 'email';
			$modulos_site['campos'][0]['outros_'.$x]['input']['tags'] = 'required validar';

			$x++;
			$modulos_site['campos'][0]['outros_'.$x]['check'] = 1;
			$modulos_site['campos'][0]['outros_'.$x]['nome'] = 'Senha';
			$modulos_site['campos'][0]['outros_'.$x]['input']['nome'] = 'senha';
			$modulos_site['campos'][0]['outros_'.$x]['input']['tags'] = 'required comparar="c_senha"';

			$x++;
			$modulos_site['campos'][0]['outros_'.$x]['check'] = 1;
			$modulos_site['campos'][0]['outros_'.$x]['nome'] = 'Confirmar Senha';
			$modulos_site['campos'][0]['outros_'.$x]['input']['nome'] = 'c_senha';
			$modulos_site['campos'][0]['outros_'.$x]['input']['tags'] = 'required';


            // VALIDACOES
            	if(!isset($_POST['update_endereco'])){
		            $validades = array('nome');
		            if(!isset($_POST['update'])){
		            	$validades[] = 'url';
		            	$validades[] = 'whatsapp';
		            	$validades[] = 'senha';
		            	$validades[] = 'termos';
					}
		            foreach ($validades as $key => $value){
		            	if(!(isset($_POST[$value]) and $_POST[$value])){
							$value = $value=='txt' ? 'Descrição' : $value;
							$arr['erro'][] = 'Preencha o campo: '.ucfirst($value);
						}
		            }
		            if(isset($arr['erro'])){ echo json_encode($arr); exit(); }

					$id = 0;
		            if(isset($_POST['update']))
		            	$id = $_SESSION['afiliados'];
		            validacoes($table, array(), $id, $modulos_site);
		        }
            // VALIDACOES


			$arr['html'] = '';
            include '../../../admin/views/Individual/variaveis.php';




			if(!isset($_POST['update'])){
				$mysql->campo['status'] = 0;
	        }

            $mysql->campo['dataup'] = date('c');


            if(isset($_POST['nome'])){ 				$mysql->campo['nome'] = $_POST['nome']; }
            if(isset($_POST['cpf'])){ 				$mysql->campo['cpf'] = $_POST['cpf']; }
            if(isset($_POST['cnpj'])){ 				$mysql->campo['cnpj'] = $_POST['cnpj']; }
            if(isset($_POST['cnpj'])){ 				$mysql->campo['tipo'] = 1; }
            if(isset($_POST['url'])){ 				$mysql->campo['url'] = $_POST['url']; }

			if(!isset($_POST['update'])){
	            if(isset($_POST['email'])){ 			$mysql->campo['email'] = $_POST['email']; }
	            if(isset($_POST['whatsapp'])){ 			$mysql->campo['whatsapp'] = $_POST['whatsapp']; }
			}

            if(isset($_POST['banco'])){ 			$mysql->campo['banco'] = $_POST['banco']; }
            if(isset($_POST['banco_agencia'])){		$mysql->campo['banco_agencia'] = $_POST['banco_agencia']; }
            if(isset($_POST['banco_conta'])){		$mysql->campo['banco_conta'] = $_POST['banco_conta']; }
            if(isset($_POST['banco_titular'])){		$mysql->campo['banco_titular'] = $_POST['banco_titular']; }
            if(isset($_POST['pix'])){				$mysql->campo['pix'] = $_POST['pix']; }
            if(isset($_POST['pix_tipo'])){			$mysql->campo['pix_tipo'] = $_POST['pix_tipo']; }
            if(isset($_POST['banco_txt'])){			$mysql->campo['banco_txt'] = $_POST['banco_txt']; }

            if(isset($_POST['cep'])){ 				$mysql->campo['cep'] = $_POST['cep']; }
            if(isset($_POST['rua'])){ 				$mysql->campo['rua'] = $_POST['rua']; }
            if(isset($_POST['numero'])){ 			$mysql->campo['numero'] = $_POST['numero']; }
            if(isset($_POST['complemento'])){ 		$mysql->campo['complemento'] = $_POST['complemento']; }
            if(isset($_POST['bairro'])){ 			$mysql->campo['bairro'] = $_POST['bairro']; }
            if(isset($_POST['cidades'])){ 			$mysql->campo['cidades'] = $_POST['cidades']; }
            if(isset($_POST['estados'])){ 			$mysql->campo['estados'] = $_POST['estados']; }



            // Gravando no Banco
            if(isset($_POST['update'])){
            	$mysql->prepare = array($_SESSION['afiliados']);
                $mysql->filtro = " WHERE `id` = ? ";
                $arr['ult_id'] = $mysql->update($table);
            } else {
	            $mysql->campo['senha'] = isset($_POST['senha']) ? md5($_POST['senha']) : '';
                $arr['ult_id'] = $mysql->insert($table);
            }






            // Fotos
            $upload = new Upload();
            if(isset($_FILES)) $upload->fileUpload($arr['ult_id'], '../../../');


			if(!isset($_POST['update'])){

	            $_SESSION['afiliados'] = $arr['ult_id'];

				$arr['evento'] = 'window.parent.location = "'.DIR.'/area_afiliados/"; ';

		        // Enviar Email
		        /*
				$mysql->filtro = " WHERE `id` = 50 ";
				$textos = $mysql->read_unico('textos');
				$var_email = 'nome->'.$_POST['nome'].'&email->'.$_POST['email'].'&senha->'.$_POST['senha'];

				$email = new Email();
				$email->to = $_POST['email'];
				//$email->remetente = nome_site();
				$email->assunto = var_email($textos->nome, $var_email);
				$email->txt = var_email(txt($textos), $var_email);
				$email->enviar();


				// Fazendo Login
				fazer_login($arr['ult_id']);


				if(isset($_POST['direcionar']) AND $_POST['direcionar'] AND $_POST['direcionar']!='-'){
					$arr['evento'] = 'setTimeout(function(){ window.location.href="'.DIR.'/'.$_POST['direcionar'].'/"; }, 100); ';
				} else {					
					$arr['evento'] = 'setTimeout(function(){ window.location.href="'.DIR.'/minha_conta/meus_dados/"; }, 100); ';
				}
				*/


			} else {
				$arr['alert'] = 'CADASTRO EDITADO COM SUCESSO!';
				$arr['evento'] = 'setTimeout(function(){ window.location.reload(); }, 200); ';
			}

		}


	echo json_encode($arr); 
?>