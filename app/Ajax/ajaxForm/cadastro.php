<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = 'z';


		if(isset($_POST['gravar']) or isset($_POST['update'])){
			$table = 'cadastro';

			$x = 0;
			$modulos_site['abas'][0]['check'] = '1';
			$modulos_site['campos'] = array();

            // Verificar validacoes
            if(isset($_POST['cpf']) AND $_POST['cpf']){
				$x++;
				$modulos_site['campos'][0]['outros_'.$x]['check'] = 1;
				$modulos_site['campos'][0]['outros_'.$x]['nome'] = 'CPF';
				$modulos_site['campos'][0]['outros_'.$x]['input']['nome'] = 'cpf';
				$modulos_site['campos'][0]['outros_'.$x]['input']['tags'] = 'required validar="cpf"';
			}
            if(isset($_POST['cnpj']) AND $_POST['cnpj']){
				$x++;
				$modulos_site['campos'][0]['outros_'.$x]['check'] = 1;
				$modulos_site['campos'][0]['outros_'.$x]['nome'] = 'CNPJ';
				$modulos_site['campos'][0]['outros_'.$x]['input']['nome'] = 'cnpj';
				$modulos_site['campos'][0]['outros_'.$x]['input']['tags'] = 'required validar="cnpj"';
			}

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
            	//if(!isset($_POST['update_endereco'])){
		            $validades = array('nome', 'telefone');
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
		            if(isset($_POST['update'])){
		            	$id = $_SESSION['x_site']->id;
		            }
		            validacoes($table, array(), $id, $modulos_site);
		        //}
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


            // Enderecos
            if(isset($_POST['cep'])){
            	$cep = $_POST['cep'];
            	$rua = $_POST['rua'];
            	$numero = $_POST['numero'];
            	$complemento = $_POST['complemento'];
            	$bairro = $_POST['bairro'];
            	$cidades = $_POST['cidades'];
            	$estados = $_POST['estados'];
            }
            // Enderecos


            $mysql->campo['dataup'] = date('c');


            if(isset($_POST['nome'])){			$mysql->campo['nome'] = $_POST['nome']; }
            if(isset($_POST['cpf'])){			$mysql->campo['cpf'] = $_POST['cpf']; }
            if(isset($_POST['cnpj'])){			$mysql->campo['cnpj'] = $_POST['cnpj']; }

            if(isset($_POST['email'])){			$mysql->campo['email'] = $_POST['email']; }
            if(isset($_POST['telefone'])){		$mysql->campo['telefone'] = $_POST['telefone']; }
            if(isset($_POST['celular'])){		$mysql->campo['celular'] = $_POST['celular']; }
			if(isset($_POST['whatsapp'])){		$mysql->campo['whatsapp'] = $_POST['whatsapp']; }

            //if(isset($_POST['sobrenome'])){ 	$mysql->campo['sobrenome'] = $_POST['sobrenome'];
            //if(isset($_POST['nascimento'])){ 	$mysql->campo['nascimento'] = $_POST['nascimento'];
            //if(isset($_POST['sexo'])){ 		$mysql->campo['sexo'] = $_POST['sexo'];
            //if(isset($_POST['rg'])){ 			$mysql->campo['rg'] = $_POST['rg'];

            if(isset($_POST['cep'])){ 			$mysql->campo['cep'] = $_POST['cep']; }
            if(isset($_POST['rua'])){ 			$mysql->campo['rua'] = $_POST['rua']; }
            if(isset($_POST['numero'])){ 		$mysql->campo['numero'] = $_POST['numero']; }
            if(isset($_POST['complemento'])){ 	$mysql->campo['complemento'] = $_POST['complemento']; }
            if(isset($_POST['bairro'])){ 		$mysql->campo['bairro'] = $_POST['bairro']; }
            if(isset($_POST['cidades'])){ 		$mysql->campo['cidades'] = $_POST['cidades']; }
            if(isset($_POST['estados'])){ 		$mysql->campo['estados'] = $_POST['estados']; }

            if(isset($_POST['pix_tipo'])){ 		$mysql->campo['pix_tipo'] = $_POST['pix_tipo']; }
            if(isset($_POST['pix_chave'])){ 	$mysql->campo['pix_chave'] = $_POST['pix_chave']; }

            if(isset($_POST['cep'])){
	            $endereco_google = mapa_google($_POST['rua'].' '.$_POST['numero'].' '.$_POST['cidades'].' '.$_POST['cidades'].' '.cep_numero($_POST['cep']));
            	if(isset($endereco_google['lat']) AND $endereco_google['lat'] AND isset($endereco_google['lng']) AND $endereco_google['lng']){
	            	//$mysql->campo['lat'] = $endereco_google['lat'];
            		//$mysql->campo['lng'] = $endereco_google['lng'];
	        	}
	        }

            // Gravando no Banco
            if(isset($_POST['update'])){
            	$mysql->prepare = array($_SESSION['x_site']->id);
                $mysql->filtro = " WHERE `id` = ? ";
                $arr['ult_id'] = $mysql->update($table);
            } else {
	            $mysql->campo['senha'] = isset($_POST['senha']) ? md5($_POST['senha']) : '';
                $arr['ult_id'] = $mysql->insert($table);
            }


            // Gravando Enderecos
            if(isset($cep)){
				unset($mysql->campo);
				$mysql->campo['cadastro'] = $arr['ult_id'];
				$mysql->campo['principal'] = 1;
				$mysql->campo['cep'] = $cep;
				$mysql->campo['rua'] = $rua;
				$mysql->campo['numero'] = $numero;
				$mysql->campo['complemento'] = $complemento;
				$mysql->campo['bairro'] = $bairro;
				$mysql->campo['estados'] = $estados;
				$mysql->campo['cidades'] = $cidades;
				$mysql->insert('cadastro_enderecos');
            }
            // Gravando Enderecos


            // Fotos
            $upload = new Upload();
            if(isset($_FILES)) $upload->fileUpload($arr['ult_id'], '../../../');


			if(!isset($_POST['update'])){

				$mysql->filtro = " WHERE ".STATUS." AND id = '".$arr['ult_id']."' ";
				$cadastro = $mysql->read_unico('cadastro');

	            // Newsletter
	            if(isset($_POST['newsletter']) and $_POST['newsletter']){
	            	unset($mysql->campo);
	            	$mysql->campo['nome'] = $cadastro->nome;
	            	$mysql->campo['email'] = $cadastro->email;
	                $mysql->insert('newsletter');
	            }


		        // Enviar Email
				$mysql->filtro = " WHERE `id` = 50 ";
				$textos = $mysql->read_unico('textos');
				$var_email = 'nome->'.$cadastro->nome.'&email->'.$cadastro->email.'&senha->'.$_POST['senha'];

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


			} else {
				$arr['alert'] = 'CADASTRO EDITADO COM SUCESSO!';
				$arr['evento']  = 'fechar_all();';
				$arr['evento'] .= 'setTimeout(function(){ window.location.reload(); }, 200); ';
			}

		}


	echo json_encode($arr); 
?>