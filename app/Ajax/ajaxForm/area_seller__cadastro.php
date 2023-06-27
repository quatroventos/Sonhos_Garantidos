<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = 'z';


		$ex = explode('/area_', DIR_ALL);
		if(isset($ex[1]) AND $ex[1]){
			$ex = explode('__', $ex[1]);
			if(isset($ex[1]) AND $ex[1]){
				$seller = $ex[0];
			}
		}


		if( (isset($_POST['gravar']) or isset($_POST['update'])) AND isset($seller) AND $seller){
			$table = $seller;

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
		            	$id = $_SESSION[$seller];
		            validacoes($table, array(), $id, $modulos_site);
		        }
            // VALIDACOES


			$arr['html'] = '';
            include '../../../admin/views/Individual/variaveis.php';




            // Datas
            data_firefox();

            if(isset($_POST['dia']) and isset($_POST['mes']) and isset($_POST['ano'])){
            	$_POST['nascimento'] = $_POST['ano'].'-'.$_POST['mes'].'-'.$_POST['dia'];
            	unset($_POST['dia']);
            	unset($_POST['mes']);
            	unset($_POST['ano']);
            }
            // Datas



			if(!isset($_POST['update'])){
				//$mysql->campo['status'] = 0;
	        }

            $mysql->campo['dataup'] = date('c');


            if(isset($_POST['nome'])){ 				$mysql->campo['nome'] = $_POST['nome']; }
            if(isset($_POST['nascimento'])){ 		$mysql->campo['nascimento'] = $_POST['nascimento']; }
            if(isset($_POST['email'])){ 			$mysql->campo['email'] = $_POST['email']; }
            if(isset($_POST['telefone'])){ 			$mysql->campo['telefone'] = $_POST['telefone']; }
            if(isset($_POST['celular'])){ 			$mysql->campo['celular'] = $_POST['celular']; }
            if(isset($_POST['cpf'])){ 				$mysql->campo['cpf'] = $_POST['cpf']; }
            if(isset($_POST['rg'])){ 				$mysql->campo['rg'] = $_POST['rg']; }
            if(isset($_POST['especializacoes'])){ 	$mysql->campo['especializacoes'] = '-'.implode('-', $_POST['especializacoes']).'-'; }
            if(isset($_POST['registro'])){ 			$mysql->campo['registro'] = $_POST['registro']; }
            if(isset($_POST['doc1_txt'])){ 			$mysql->campo['doc1_txt'] = $_POST['doc1_txt']; }
            if(isset($_POST['doc2_txt'])){ 			$mysql->campo['doc2_txt'] = $_POST['doc2_txt']; }

            if(isset($_POST['cep'])){ 				$mysql->campo['cep'] = $_POST['cep']; }
            if(isset($_POST['rua'])){ 				$mysql->campo['rua'] = $_POST['rua']; }
            if(isset($_POST['numero'])){ 			$mysql->campo['numero'] = $_POST['numero']; }
            if(isset($_POST['complemento'])){ 		$mysql->campo['complemento'] = $_POST['complemento']; }
            if(isset($_POST['bairro'])){ 			$mysql->campo['bairro'] = $_POST['bairro']; }
            if(isset($_POST['cidades'])){ 			$mysql->campo['cidades'] = $_POST['cidades']; }
            if(isset($_POST['estados'])){ 			$mysql->campo['estados'] = $_POST['estados']; }

            if(isset($_POST['banco_codigo'])){ 		$mysql->campo['banco_codigo'] = $_POST['banco_codigo']; }
            if(isset($_POST['banco_agencia'])){		$mysql->campo['banco_agencia'] = $_POST['banco_agencia']; }
            if(isset($_POST['banco_agencia_dv'])){	$mysql->campo['banco_agencia_dv'] = $_POST['banco_agencia_dv']; }
            if(isset($_POST['banco_conta'])){		$mysql->campo['banco_conta'] = $_POST['banco_conta']; }
            if(isset($_POST['banco_conta_dv'])){	$mysql->campo['banco_conta_dv'] = $_POST['banco_conta_dv']; }
            if(isset($_POST['banco_tipo'])){		$mysql->campo['banco_tipo'] = $_POST['banco_tipo']; }

            // Gravando no Banco
            if(isset($_POST['update'])){
            	$mysql->prepare = array($_SESSION[$seller]);
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

	            $_SESSION[$seller] = $arr['ult_id'];

				$arr['evento'] = 'window.parent.location = "'.DIR.'/area_'.$seller.'/"; ';

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