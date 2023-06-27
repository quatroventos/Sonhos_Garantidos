<?
	ob_start(); if(!isset($no_session_start)) session_start();
	ini_set('display_errors', 1);
?>

	<form method="post" action="">
		<div style="">To: <input name="to" value="<?=isset($_POST['to']) ? $_POST['to'] : ''?>" /></div>
		<div style="">SMPT (host): <input name="smtp" value="<?=isset($_POST['smtp']) ? $_POST['smtp'] : ''?>" /></div>
		<div style="">Email: <input name="email" value="<?=isset($_POST['email']) ? $_POST['email'] : ''?>" /></div>
		<div style="">Senha: <input name="senha" value="<?=isset($_POST['senha']) ? $_POST['senha'] : ''?>" /></div>
		<div style=""><button>Enviar</button></div>
	</form>

<?
	function pre($array){
		echo '<pre>';
		print_r($array);
		echo '</pre>';
	}

	if(isset($_POST['to']) AND isset($_POST['smtp']) AND isset($_POST['email']) AND isset($_POST['senha'])){
		include_once '../../plugins/PHPMailer/class.phpmailer.php';

		$assunto = 'teste';
		$html = 'teste';

		$to = $_POST['to'];
		$remetente = $_POST['email'];

		$enviado = 0;
		if(class_exists('PHPMailer')){
			$mail = new PHPMailer();
			$mail->IsSMTP();
			$mail->SMTPAuth = true;
			//$mail->SMTPSecure = 'ssl';
			//$mail->Port = 465;
			$mail->SMTPSecure = 'tls';
			$mail->Port = 587;
			$mail->Host = $_POST['smtp'];
			$mail->Username = $_POST['email'];
			$mail->Password = $_POST['senha'];
	
			$mail->From = $remetente;
			$mail->FromName = $remetente;
			$mail->AddAddress($to);
			if(isset($_FILES["anexo"]["type"]) and $_FILES["anexo"]["type"] and isset($_FILES["anexo"]["name"]) and $_FILES["anexo"]["name"]){
				$mail->AddAttachment($_FILES["anexo"]["tmp_name"], $_FILES["anexo"]["name"]);
			}
			$mail->IsHTML(true);

			$mail->Subject = utf8_decode($assunto);
			$mail->Body = utf8_decode($html);
			if($mail->Send()){
				$enviado = 99;
			}
		}

		echo 'Enviado: '.$enviado.'<br>';

		pre($mail);

	}
?>