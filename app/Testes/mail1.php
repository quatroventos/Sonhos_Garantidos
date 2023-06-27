<?

	$codificacao = 'no';
	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	if(isset($_GET['to']) AND $_GET['to']){


		include_once DIR_F.'/plugins/PHPMailer/class.phpmailer.php';

		$enviado = 0;
		if(class_exists('PHPMailer')){
			$mail = new PHPMailer();
			$mail->IsSMTP();
			$mail->SMTPAuth = true;
			//$mail->SMTPSecure = 'ssl';
			//$mail->Port = 465;
			$mail->Port = 587;
			$mail->Host = $_GET['smtp'];
			$mail->Username = $_GET['email'];
			$mail->Password = $_GET['senha'];

			$remetente = $_GET['email'];
			$to = $_GET['to'];

			$mail->From = $remetente;
			$mail->FromName = $remetente;
			$mail->AddAddress($to);
			$mail->IsHTML(true);

			$mail->Subject = utf8_decode('teste');		
			$mail->Body = utf8_decode('teste');
			if($mail->Send()){
				$enviado = 99;
			}
		}


		echo 'Enviado: '.$enviado.'<br>';
		echo 'To: '.$_GET['to'].'<br>';
		echo 'Remetente: '.$_GET['email'].'<br>';
		echo 'Assunto: teste<br>';
		echo 'HTML: teste<br>';

		exit();

	} else {


		echo '<form method="get" action="" >';
			echo '<div style="padding:10px">Para: <input name="to" ></div>';
			echo '<div style="padding:10px">SMPT: <input name="smtp" ></div>';
			echo '<div style="padding:10px">Email: <input name="email" ></div>';
			echo '<div style="padding:10px">Senha: <input name="senha" ></div>';
		echo '</form> ';

	}

?>