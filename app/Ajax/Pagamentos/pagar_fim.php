
	<? if($_GET['categorias'] == 'Boleto'){ ?>

		<div class="pl40 pr40 fz16 tac cor_666 ">
			<? if($pedidos->preco>0){ ?>
				<div class="pt20 fz16 fwb">Valor <?=preco($pedidos->preco, 1)?></div>
			<? } ?>
			<? if($pedidos->boleto_vencimento != '0000-00-00'){ ?>
				<div class="pt20 fz16 fwb">Vencimento <?=data($pedidos->boleto_vencimento)?></div>
			<? } ?>
			<? if($pedidos->boleto_barcode){ ?>
				<div class="pt40 fz14">Utilize o número do código de barras abaixo para realizar o pagamento</div>
				<div class="pt20 fz16 fwb"><?=$pedidos->boleto_barcode?></div>
			<? } ?>
			<div class="pt40 fz14"><a href="<?=$pedidos->boleto_url?>" class="link c_azul" target="_blank">Clique aqui para visualizar o boleto</a></div>
		</div>



	<? } elseif($_GET['categorias'] == 'Pix'){ ?>

		<? if(isset($pedidos->pix_qr_code) AND $pedidos->pix_qr_code){ ?>

			<script src='<?=DIR?>/plugins/Jquery/Qrcode/qrcode.js'></script>
	
			<div class="qrcode pl40 pr40 fz16 tac cor_666 ">
				<? if($pedidos->preco>0){ ?>
					<div class="pt20 pb40 fz16 fwb">Valor <?=preco($pedidos->preco, 1)?></div>
				<? } ?>
				<div class="wr6 pr20 p0_700">
					<div class="bd_ccc br10">
						<div class="p20">
							<div class="fz18 fwb">Pague com Pix</div>
							<div class="pt10">Abra o app da sua instituição financeira e selecione o Pix.</div>
							<div class="pt5 pb20">Em seguida, capture a imagem abaixo</div>
							<div class="code dib p20 bdw2 bd_EBBE4B br10"></div>
							<div class="pt10">Destinatário: <?=NOME?></div>
							<? if($info->cnpj){ ?>
								<div class="pt10 pb10">CNPJ: <?=$info->cnpj?></div>
							<? } ?>
						</div>
						<div class="p10 back_E5E5E5">
							<div class="pb10">Ou copie o código e pague no seu Internet Banking.</div>
							<div class="p10 bdw2 bd_EBBE4B back_fff br10"><textarea class="w100p h100 fz16 back0 bd0 code_txt coppy"><?=$pedidos->pix_qr_code?></textarea></div>
							<div class="p10">
								<a onclick="copyy('textarea.coppy')" class="dib p10 pl20 pr20 fwb back_EBBE4B br20">Copiar código Pix</a>
							</div>
						</div>
					</div>
				</div>
				<div class="h20 dnn_700"></div>
				<div class="wr6 pl20 p0_700">
					<div class="bd_ccc br10">
						<div class="p20">
							<div class="fz18 fwb tac">Veja, é facil:</div>
							<div class="posr pt20 pl50 fz14 tal"><div class="posa l0 w35 h35 fz22 c_flex jc cor_fff back_EBBE4B br50p">1</div> <div class="pt6">Abra o app da sua instituição financeira e selecione o Pix.</div></div>
							<div class="posr pt35 pl50 fz14 tal"><div class="posa l0 w35 h35 fz22 c_flex jc cor_fff back_EBBE4B br50p">2</div> Faça um Pix lendo o QR Code ou copiando o código para pagamento. na opção PIX COPIA E COLA</div>
							<div class="posr pt30 pl50 fz14 tal"><div class="posa l0 w35 h35 fz22 c_flex jc cor_fff back_EBBE4B br50p">3</div> Revise as informações, aguarde a confirmação e pronto! Tá pago :) é só aguardar o e-mail com seu pedido!</div>
						</div>
					</div>
				</div>
				<div class="clear"></div>
			</div>
			<script>
				$(document).ready(function() {
		    		$('.qrcode .code').qrcode({
		    			width: 150,
		    			height: 150,
		    			text: '<?=$pedidos->pix_qr_code?>'
		    		});
				});
			</script>

		<? } else { ?>
			<div class="fz18 tac c_vermelho">Erro ao Gerar em Pix</div>
		<? } ?>

	<? } ?>
