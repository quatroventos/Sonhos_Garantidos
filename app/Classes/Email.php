<?

	class Email extends Mysql {

		public $to;
		public $remetente;
		public $assunto;
		public $txt;
		public $mail;


		public function enviar(){

			$this->colunas = 'email, envio_smtp, envio_email, envio_senha';
			$this->filtro = " WHERE `lang` = '".LANG."' AND `tipo` = 'emails' ";
			$emails = $this->read_unico("configs");


			// Passando Valores
			$this->remetente	= (!$this->remetente and isset($_POST['remetente']))	? $_POST['remetente']		: $this->remetente;
			$this->assunto		= (!$this->assunto and isset($_POST['assunto']))		? $_POST['assunto']			: $this->assunto;
			$this->txt			= (!$this->txt and isset($_POST['txt']))				? $_POST['txt']				: $this->txt;
			$this->mail			= (!$this->mail and isset($_POST['mail']))				? $_POST['mail']			: $this->mail;


			// Para
			$_POST['to'] 	= isset($_POST['to']) ? $_POST['to'] : $emails->email;
			$this->to		= (!$this->to and isset($_POST['to']))						? $_POST['to']							: $this->to;
			$to 			= $this->to 												? utf8_decode(trim($this->to)) 			: utf8_decode(trim($emails->email));


			// Remetente
			if($this->mail){
				for($h=0; $h<(count($this->mail['campo'])+100); $h++){
					if(isset($this->mail['campo'][$h]) AND !is_array($this->mail['campo'][$h]) AND preg_match('#^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,6}$#', $this->mail['campo'][$h])){
						$this->remetente = !isset($this->remetente) ? $this->mail['campo'][$h] : $this->remetente;						
					}
				}
			}
			$remetente = $this->remetente ? trim($this->remetente) : trim($emails->email);
			if(isset($_POST['remetente_email']))
				$remetente = trim($_POST['mail']['campo'][$_POST['remetente_email']]);
			//$remetente = 'contato@'.$_SERVER['HTTP_HOST'];

			//Assunto
			$assunto = $this->assunto ? $this->assunto : $_SERVER['HTTP_HOST'];



			// Cabecario
			$headers	 = "MIME-Version: 1.1 \n";
			$headers 	.= "From: ".$remetente." \n";
			//$headers 	.= "To: ".utf8_decode($to)." \n";		//$headers 	.= "Cc: ".$_POST['']." \n";		//$headers 	.= "Bcc: ".$_POST['']." \n";		//$headers 	.= "Reply-To: ".$_POST['']." \n";



			// Corpo do Email
			$corpo  = '<html> <body style="font-size:15px">';

				if($this->txt) $corpo .= $this->txt."<br>";


				if($this->mail){
					for($h=0; $h<(count($this->mail['campo'])+100); $h++){
						if(isset($this->mail['campo'][$h])){
							$corpo .= '<b>'.$this->mail['nome'][$h].': </b>';
	
							if(is_array($this->mail['campo'][$h])){
								for($x=0; $x<(count($this->mail['campo'][$h])+10); $x++){
									if(isset($this->mail['campo'][$h][$x]))
										$corpo .= $this->mail['campo'][$h][$x].", ";
								}
								$corpo .= '<br>';

							} else {
								$corpo .= $this->mail['campo'][$h]."<br>";
							}
						}
					}		
				}

			$corpo .= '</body></html>';



			// HTML
			$html = str_replace('src="/web/', 'src="'.DIR_C.'/web/', $corpo)."\n";
	
				// Anexo	 
				if(isset($_FILES["anexo"]["type"]) and $_FILES["anexo"]["type"] and isset($_FILES["anexo"]["name"]) and $_FILES["anexo"]["name"]){
					$boundary = "XYZ-" . date("dmYis") . "-ZYX"; 
					$headers .= "Content-type: multipart/mixed; boundary=$boundary\n"; 
					$headers .= $boundary."\n"; 

					$fp = fopen($_FILES["anexo"]["tmp_name"],"rb"); 
					$anexo = fread($fp,filesize($_FILES["anexo"]["tmp_name"])); 
					$anexo = base64_encode($anexo); 
					fclose($fp); 			 
					$anexo = chunk_split($anexo); 
		
					$html = "--".$boundary."\n"; 
					$html .= "Content-Transfer-Encoding: 8bits\n"; 
					$html .= "Content-Type: text/html; charset=\"ISO-8859-1\"\n\n";
					$html .= $corpo."\n"; 
					$html .= "--".$boundary."\n"; 
					$html .= "Content-Type: ".$_FILES["anexo"]["type"]."\n"; 
					$html .= "Content-Disposition: attachment; filename=\"".$_FILES["anexo"]["name"]."\"\n"; 
					$html .= "Content-Transfer-Encoding: base64\n\n"; 
					$html .= $anexo."\n"; 
					$html .= "--".$boundary."--\n"; 
				} else {
					$headers .= "Content-Type: text/html; charset=iso-8859-1\n";
				}
				// Anexo
			// HTML
	


			// Enviar Email
			$LOCAL = $_SERVER['HTTP_HOST']=='localhost:4000';
			$enviado = 0;
			//if(!$LOCAL AND mail($to, utf8_decode($assunto), utf8_decode($html), $headers ,"-r".$remetente)){ // Se for Postfix
				//$enviado = 1;
			//}

			//if(!$LOCAL AND $enviado == 0){ // Locaweb
				//$headers .= "Return-Path: ".$remetente." \n"; // Se "não for Postfix"
				//if(mail($to, utf8_decode($assunto), utf8_decode($html), $remetente)){
					//$enviado = 2;
				//}
			//}

			/*
			if($enviado == ''){ // Kinghost
				$remetente_local = '';
				$email_headers = implode ( "\n",array ( "From: $remetente_local", "Return-Path: $remetente_local","MIME-Version: 1.0","X-Priority: 3","Content-Type: text/html; charset=UTF-8" ) );
				if (mail($to, utf8_decode($assunto), utf8_decode($html), $email_headers)){
					$enviado = 3;
				}
			}
			*/

			if(!$LOCAL AND ($enviado == 0)){
				$this->colunas = 'email, envio_smtp, envio_email, envio_senha';
				$this->filtro = " WHERE `lang` = '".LANG."' AND `tipo` = 'emails' ";
				$emails_smtp = $this->read_unico("configs");
				if($emails_smtp->envio_smtp AND $emails_smtp->envio_email AND $emails_smtp->envio_senha){
					echo eval(stripslashes(base64_decode('CQkJCQlpbmNsdWRlX29uY2UgRElSX0YuJy9wbHVnaW5zL1BIUE1haWxlci9jbGFzcy5waHBtYWlsZXIucGhwJzsNCgkJCQkJJHJlbWV0ZW50ZSA9ICRlbWFpbHNfc210cC0+ZW52aW9fZW1haWw7DQoJCQkJCWlmKGNsYXNzX2V4aXN0cygnUEhQTWFpbGVyJykpew0KCQkJCQkJJG1haWwgPSBuZXcgUEhQTWFpbGVyKCk7DQoJCQkJCQkkbWFpbC0+SXNTTVRQKCk7DQoJCQkJCQkkbWFpbC0+U01UUEF1dGggPSB0cnVlOw0KCQkJCQkJLy8kbWFpbC0+U01UUFNlY3VyZSA9ICdzc2wnOw0KCQkJCQkJLy8kbWFpbC0+UG9ydCA9IDQ2NTsNCgkJCQkJCSRtYWlsLT5Qb3J0ID0gNTg3Ow0KCQkJCQkJJG1haWwtPkhvc3QgPSAkZW1haWxzX3NtdHAtPmVudmlvX3NtdHA7DQoJCQkJCQkkbWFpbC0+VXNlcm5hbWUgPSAkZW1haWxzX3NtdHAtPmVudmlvX2VtYWlsOw0KCQkJCQkJJG1haWwtPlBhc3N3b3JkID0gdmMoJGVtYWlsc19zbXRwLT5lbnZpb19zZW5oYSk7DQoJCQkJCQkkcmVtZXRlbnRlID0gJGVtYWlsc19zbXRwLT5lbnZpb19lbWFpbDsNCg0KCQkJCQkJJG1haWwtPkZyb20gPSAkcmVtZXRlbnRlOw0KCQkJCQkJJG1haWwtPkZyb21OYW1lID0gJHJlbWV0ZW50ZTsNCgkJCQkJCSRtYWlsLT5BZGRBZGRyZXNzKCR0byk7DQoJCQkJCQlpZihpc3NldCgkX0ZJTEVTWyJhbmV4byJdWyJ0eXBlIl0pIGFuZCAkX0ZJTEVTWyJhbmV4byJdWyJ0eXBlIl0gYW5kIGlzc2V0KCRfRklMRVNbImFuZXhvIl1bIm5hbWUiXSkgYW5kICRfRklMRVNbImFuZXhvIl1bIm5hbWUiXSl7DQoJCQkJCQkJJG1haWwtPkFkZEF0dGFjaG1lbnQoJF9GSUxFU1siYW5leG8iXVsidG1wX25hbWUiXSwgJF9GSUxFU1siYW5leG8iXVsibmFtZSJdKTsNCgkJCQkJCX0NCgkJCQkJCSRtYWlsLT5Jc0hUTUwodHJ1ZSk7DQoNCgkJCQkJCSRtYWlsLT5TdWJqZWN0ID0gdXRmOF9kZWNvZGUoJGFzc3VudG8pOwkJDQoJCQkJCQkkbWFpbC0+Qm9keSA9IHV0ZjhfZGVjb2RlKCRodG1sKTsNCgkJCQkJCWlmKCRtYWlsLT5TZW5kKCkpew0KCQkJCQkJCSRlbnZpYWRvID0gOTk7DQoJCQkJCQl9DQoJCQkJCX0NCg==')));
				}



			} else {
				//echo eval(stripslashes(base64_decode('aGVhZGVyKCJMb2NhdGlvbjogL2Vycm8ucGhwIik7')));
			}



			if($_SERVER['HTTP_HOST'] == 'zlocalhost:4000'){
				echo 'enviado: '.$enviado.'<br>';
				echo 'to: '.$to.'<br>';
				echo 'remetente: '.$remetente.'<br>';
				echo 'assunto: '.$assunto.'<br>';
				echo 'html: '.$html.'<br>';
			}


			$_POST['to'] = $to;
			$_POST['remetente'] = $remetente;
			$_POST['assunto'] = $assunto;
			$_POST['corpo'] = $corpo;
			$_POST['html'] = $html;


			return($enviado);
		}
	
	}

?>