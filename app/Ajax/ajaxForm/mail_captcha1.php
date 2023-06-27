<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();

	$arr = array();
	$arr['alert'] = 0;


		// Log Gravacoes (Formularios)
		if(isset($_POST['log_gravacoes'])){

			if(captcha1_confirmar()){

				$email = new Email();
				$enviado = $email->enviar();

				unset($mysql->campo);
				$mysql->campo['pagina'] = 'fale';
				$mysql->campo['nome'] = $_POST['to'];
				$mysql->campo['assunto']  = $_POST['assunto'];

				$mysql->campo['txt']  = '';
				if(isset($_FILES["anexo"]["name"])){
					$_FILES['foto'] = $_FILES["anexo"];
					$upload = new Upload();
					$foto = $upload->fileUpload(0, '../../../');
					$mysql->campo['txt'] .= '<b>Axeno:</b>&nbsp;<a href="'.DIR_C.'/web/fotos/'.FOTOS.$foto[0].'" target="_blank" class="azul">'.DIR_C.'/web/fotos/'.FOTOS.$foto[0].'</a> <br>';
				}
				$mysql->campo['txt'] .= '<b>Para:</b>&nbsp;'.$_POST['to'].' <br>';
				$mysql->campo['txt'] .= '<b>Remetente:</b>&nbsp;'.$_POST['remetente'].' <br>';
				$mysql->campo['txt'] .= '<b>Assunto:</b>&nbsp;'.$_POST['assunto'].' <br>';
				$mysql->campo['txt'] .= $_POST['corpo'];
				$mysql->insert('log_gravacoes');

				if($enviado>0){
					$arr['alert'] = "Enviado com sucesso!";
					$arr['evento'] = ' fechar_all(); ';
					$arr['evento'] = ' setTimeout(function(){ window.location.reload(); }, 1000); ';

				} else {
					$arr['erro'][] = "Erro ao enviar...";
				}


				// Email
				foreach($_POST['mail']['campo'] as $key => $value){
					if( preg_match('(@)', $value) ){
						$arr['email'] = $value;
					}
				}


			} else {
				//$arr['evento'] = "carregar_captcha_img()";
				$arr['erro'][] = "Seleciona a opção: Não sou um robô!";
			}

		}

	echo json_encode($arr); 
?>