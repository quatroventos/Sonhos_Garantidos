<?

	$mysql->filtro = " where tipo = 'pagamentos' ";
	$pagamentos = $mysql->read_unico("configs");

	// PAGOOOOO
		// Verificar se ja veio algum retorno de pagamento
		if($situacao == 1 AND !$doacoes_pagamentos->ja_foi_pago){

			$taxa_doacao = $pagamentos->preco2;
			$taxa_plataforma = ($doacoes_pagamentos->preco*$pagamentos->preco4)/100;

			unset($mysql->campo);
			$mysql->campo['situacao'] = $situacao;
			$mysql->campo['situacao_data'] = date('Y-m-d H:i:s');
			$mysql->campo['ja_foi_pago'] = 1;
			$mysql->campo['taxa_doacao'] = $taxa_doacao;
			$mysql->campo['taxa_plataforma'] = $taxa_plataforma;
			$mysql->filtro = " WHERE id = '".$doacoes_pagamentos->id."' ";
			$mysql->update('doacoes_pagamentos');


			$mysql->filtro = " WHERE id = '".$doacoes_pagamentos->doacoes."' ";
			$doacoes = $mysql->read_unico('doacoes');

			if(isset($doacoes->id)){
				$mysql->filtro = " WHERE id = '".$doacoes->cadastro."' ORDER BY ".ORDER." ";
				$seller = $mysql->read_unico('cadastro');
				if(isset($seller->id)){

					unset($mysql->campo);
					$mysql->campo['saldo'] = $seller->saldo + $doacoes_pagamentos->preco - $taxa_doacao - $taxa_plataforma;
					$mysql->campo['taxa_doacao'] = $taxa_doacao;
					$mysql->campo['taxa_plataforma'] = $taxa_plataforma;
					$mysql->filtro = " WHERE id = '".$seller->id."' ";
					$mysql->update('cadastro');

				}
			}




		}

		/*
		if($situacao == 1){
			// EMAIL
				$email = new Email();

				$mysql->filtro = " WHERE ".STATUS." AND doacoes_pagamentos = '".$doacoes_pagamentos->id."' ";
				$cartelas = $mysql->read_unico('cartelas');

				$mysql->filtro = " WHERE ".STATUS." AND id = '".$cartelas->sorteios."' ORDER BY ".ORDER." ";
				$sorteios = $mysql->read_unico('sorteios');

				// EMAIL 52
					$mysql->filtro = " WHERE `id` = 52 ";
					$textos = $mysql->read_unico('textos');
					$enderecos = $CARRINHO['frete'];

					$var_email = 'nome->'.$cartelas->nome.'&email->'.$cartelas->email.'&cpf->'.$cartelas->cpf.'&telefone->'.$cartelas->telefone;
					$var_email .= '&sorteio->'.$sorteios->nome.'&sorteio_data->'.data($sorteios->data, 'd/m/Y H:i').'&sorteio_premio->'.preco($sorteios->preco, 1);
					$var_email .= '&link_cartelas-><a href="'.DIR.'/imprimir_cartelas_gerada?idd='.$doacoes_pagamentos->id.'z;z-z;zt=doacoes_pagamentos">Ver Cartelas</a>';
	
					// ENVIANDO PARA O DONO DO SITE
						$email->assunto		= var_email($textos->nome, $var_email);
						$email->txt 		= str_replace('z;z-z;z', '&', str_replace('src="/web/', 'src="'.DIR_C.'/web/', var_email(txt($textos), $var_email) ) );
						$email->enviar();
					// ENVIANDO PARA O DONO DO SITE
				// EMAIL 52
			// EMAIL
		}
		*/


	// PAGOOOOO


?>