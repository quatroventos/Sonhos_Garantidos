
/* Eventos */


	// NOVO

	// NOVO


	// --------------------------------------------------------------------


	// EVENTOS UTEIS

		// HIDE TEMP (BANNER)
			$(document).ready(function() {
				setTimeout(function(){
					$(".dn_temp").hide();
				}, 200);
			});
		// HIDE TEMP (BANNER)

		// DELETE ALERT
			function deletee($url){
				if(confirm('Deseja realmente deletar o(s) iten(s) selecionado(s)?')){
					window.parent.location = $url;
				}
			}
		// DELETE ALERT

	// EVENTOS UTEIS


	// --------------------------------------------------------------------


	// EVENTS COM AJAX E OUTROS
		// Auto Complete
			function autocomplete(){
				/*
				$("input.autocomplete").autocomplete({
					minLength: 1,
					source: function( request, response ) {
						$.ajax( {
							type: "POST",
							url: DIR+"/app/Ajax/Autocomplete/a.php",
							dataType: "json",
							data: { pesq: request.term },
							success: function( data ) {
								response(data.itens);
							}
						});
					},
					//select: function( event, ui ) { alert("selected!"); },
    				//change: function (e, ui) { alert("changed!"); },
				});
				*/
			};

			// Select2
				function autocomplete_select2($table, $rand){
					$("select.autocomplete_"+$rand).select2({
						minimumInputLength: 2,
						ajax: {
							type: "POST",
							url: DIR+"/app/Ajax/Autocomplete/select2.php",
							dataType: "json",
							delay: 250,
							data: function (params) {
								$('.carregando').show();
								return { pesq: params.term, table: $table };
							},
							processResults: function (data, params) {
								$('.carregando').hide();
								var more = (params.page * 10) < data.total;
								return {
									results: data.itens,
									more: more
								};
							},
							cache: true
						},
						escapeMarkup: function (markup) { return markup; },
						templateResult: ResultadoNome,
						templateSelection: Display
					});
					function ResultadoNome(data) { return data.value; }
					function Display (data) { return data.value || data.text; }
				}
			// Select2
		// Auto Complete


		// Tooltip
		function tooltip(){			
			// rel="tooltip" data-original-title=""
			$('[rel="tooltip"]').tooltip({html:true});
		}

	// EVENTS COM AJAX E OUTROS


	// --------------------------------------------------------------------


	// INI
		$(document).ready(function() {
			menu_hover_e_click();
			mascaras();
			$('select.design').select2();
			tooltip();
			criar_css();
			setTimeout(function(){ img_loading(); }, 100);

			autocomplete();
			autocomplete_select2()

			Plugin1();
			Plugin2();
			Plugin3();
			Plugin_Galeria();
			ImageLightBox();
			setTimeout(function(){ Plugin_Zoom() }, 500);
		});
	// INI


	// --------------------------------------------------------------------


	// PRODUTOS LOJA
		$(document).ready(function() {
			$('.PP_cronometro').trigger('click');
		});

	    // Atributos Produto
	    function PP_atributos($id, $ini=0, $atributo=0){
			$qtd = $('[name="qtd"][dir="'+$id+'"]').val() ? $('[name="qtd"][dir="'+$id+'"]').val() : 1;

			if($atributo == 1){
				$(".PP_atributos select.atributos_2").val(0);
				$(".PP_atributos select.atributos_3").val(0);
			}

	    	$atributos = '';
			$(".PP_atributos select").each(function() {
				$name = $(this).attr('name');
				$value = $(this).val();
	    		$atributos += '&'+$name+'='+$value;
			});

			$.ajax({
				type: "POST",
				url: DIR+"/app/Ajax/Produtos/PP_atributos.php",
				data: 'id='+$id+'&qtd='+$qtd+'&atributos_thumbs='+$atributos_thumbs+$atributos,
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$(".carregando").hide();

					// ATRIBUTOS
						$('.PP_atributos').html($json.PP_atributos);
					// ATRIBUTOS

					// FOTO
						if($json.PP_foto_thumbs != undefined && $json.PP_foto_thumbs){
							Img_Maior($json.PP_foto_thumbs, $('.Plugin1.Img_Menor li'));
						}
					// FOTO

					// PLUGIN ATRIBUTOS (FOTOS) - APARECER CARROCEL SOMENTE COM AS FOTOS DOS ATRIBUTOS
						$('.FOTOS_ATRIBUTOS_').hide();
						if($json.PP_foto_atributos_plugin != undefined && $json.PP_foto_atributos_plugin){
							$('.FOTOS_ATRIBUTOS_'+$json.PP_foto_atributos_plugin).show();
							if($json.PP_foto_atributos_thumbs != undefined && $json.PP_foto_atributos_thumbs){
								$('.produtos_combinacoes_'+$json.PP_foto_atributos_thumbs).trigger('click');
							}
						} else {
							$('.FOTOS_ATRIBUTOS_0').show();
						}
					// PLUGIN ATRIBUTOS (FOTOS) - APARECER CARROCEL SOMENTE COM AS FOTOS DOS ATRIBUTOS

					// DADOS
						$('.PP_nome').html($json.PP_nome);
						$('.PP_codigo').html($json.PP_codigo);
						$('.PP_categorias').html($json.PP_categorias);
						$('.PP_marcas').html($json.PP_marcas);
						$('.PP_preco').html($json.PP_preco);
						$('.PP_preco0').html($json.PP_preco0);
						$('.PP_preco1').html($json.PP_preco1);
						$('.PP_parcela').html($json.PP_parcela);
						$('.PP_preco_parcelado').html($json.PP_preco_parcelado);
						$('.PP_preco_juros').html($json.PP_preco_juros);
						$('.PP_preco_economize').html($json.PP_preco_economize);
						$('.PP_preco_parcelado_all').html($json.PP_preco_parcelado_all);

						if($json.PP_preco)				$('.PP_precox').show();				else	$('.PP_precox').hide();
						if($json.PP_preco1)				$('.PP_preco1x').show();			else	$('.PP_preco1x').hide();
						if($json.PP_parcela)			$('.PP_parcelasx').show();			else	$('.PP_parcelasx').hide();
						if($json.PP_preco_economize)	$('.PP_preco_economizex').show();	else	$('.PP_preco_economizex').hide();

						if($json.PP_parcelas_varios){
							$('.PP_parcelas_varios').show().html($json.PP_parcelas_varios);
						} else {
							$('.PP_parcelas_varios').hide().html();
						}


						$('.PP_descontos_qtd').html($json.PP_descontos_qtd);

						if($json.PP_comprar){
							$('.PP_comprar').show();
							$('.PP_indisponivel').hide().attr('onclick', '');
						} else {
							$('.PP_comprar').hide();
							$('.PP_indisponivel').show().attr('onclick', $json.PP_link_indisponivel);
						}
					// DADOS
				}
			});
		}
	    function PP_atributos_selecionar($id, $n_select, $value, $pre, $e){
	    	$('select[name="atributos_'+$pre+$n_select+'"]').val($value).trigger('change');
	    	if($pre){
	    		$($e).parent().parent().find('li').removeClass('bd_ativo');
	    		$($e).parent().addClass('bd_ativo');
	    	}
	    }

		// cronometro
		function PP_cronometro($data, $id, $e){
			val = $data.replaceAll(" ", "-");
			val = val.replaceAll(":", "-");
			val = val.split("-");

			$data_fim = new Date(val[0], val[1]-1, val[2], val[3], val[4], $data[5], 0);
			$seg1 = $data_fim.getTime();

			$today = new Date();
			$today.setMilliseconds(0);
			$seg2 = $today.getTime();

			$segs = $seg1 - $seg2;
			$tempo = new Date($segs);
			$tempo.setMilliseconds(0);

			$return = sub_data($tempo);

			$html = '';
			if($return['dias'] > 0){
				$($e).find("span.dias").html($return['dias']);
				$($e).find("span.diasx").show();
			} else {
				$($e).find("span.dias").html($return['dias']);
				$($e).find("span.diasx").hide();
			}
			$($e).find("span.hora").html($return['hora']);
			$($e).find("span.min").html($return['min']);
			$($e).find("span.seg").html($return['seg']);

			if($return['seg_total']>0){
				$($e).show();
				$($e).parent().parent().find(".PP_cronometro_preco").hide();
				$($e).parent().parent().find(".PP_cronometro_preco3").show();
				setTimeout(function(){ PP_cronometro($data, $id, $e); }, 1000);
			} else {
				$($e).hide();
				$($e).parent().parent().find(".PP_cronometro_preco3").hide();
				$($e).parent().parent().find(".PP_cronometro_preco").show();
			}
		}
	// PRODUTOS LOJA



	// ------------------------------------------------------------------------



	// CARRINHO

	    // Gravar
	    function CC_gravar($id, $no_popup){
			$erro = 0;
	    	$qtd = $('[name="qtd"][dir="'+$id+'"]').val() ? $('[name="qtd"][dir="'+$id+'"]').val() : 1;

	    	$atributos = '';
			$(".PP_atributos select").each(function() {
				$name = $(this).attr('name');
				$value = $(this).val();
	    		$atributos += '&'+$name+'='+$value;
			});
			$(".PP_atributos_adicionais select").each(function() {
				$name = $(this).attr('name');
				$value = $(this).val();
	    		$atributos += '&'+$name+'='+$value;
			});
			$(".PP_atributos_outros select").each(function() {
				$name = $(this).attr('name');
				$value = $(this).val();
	    		$atributos += '&'+$name+'='+$value;
			});
			$(".PP_gravacoes input").each(function() {
				$name = $(this).attr('name');
				$value = $(this).val();
	    		$atributos += '&'+$name+'='+$value;
			});

			$x=0;
			$atributos += '&atributos_extra=';
			$(".PP_atributos_extra select, .PP_atributos_extra input").each(function() { 
				if($(this).val()){
					$atributos += $x ? ' / ' : '';
					$atributos += $(this).attr('dir') ? $(this).attr('dir') : '';
					$atributos += $(this).val();
					$x++;
				}
			});

			$.ajax({
				type: "POST",
				url: DIR+"/app/Ajax/Carrinho/gravar.php",
				data: 'id='+$id+'&qtd='+$qtd+'&no_popup='+$no_popup+$atributos,
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$(".carregando").hide();
					if($json.evento!=null)
						eval($json.evento);
					if($json.erro){
						$.each($json.erro, function($key, $val) {
							alerts(0, $val, 1);
						});	
					} else if($json.alert){
						if($json.alert!='z'){
							alerts(1, $json.alert);
						}
						if($json.alert_boxs==1){
							boxs('carrinho_alert', 'id='+$id);
						} else {
							CC_atualizar();
						}
					} else {
						window.parent.location = DIR+'/carrinho/';
					}
				}
			});
	    }

		// Deletar Item
		function carrinho_deletar_item($ref, $no_carrinho){
			if($no_carrinho != undefined){
				$ref = $($ref).find_parent('tags', 'li').attr('class').replace('CC_item_', '');
			}
			$.ajax({
				type: "POST",
				url: DIR+"/app/Ajax/Carrinho/deletar_item.php",
				data: { ref: $ref },
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$(".carregando").hide();
					if($no_carrinho == undefined){
						window.location.reload();
					} else {
						$('.CC_item_'+$json.rel_classe).fadeOut(500);
						setTimeout(function(){ $('.CC_item_'+$json.rel_classe).remove() }, 500);
						CC_atualizar();
					}
				}
			});
		};


		// Atualizar All
		function CC_atualizar($tipo, $variavel, $this, $no_click, $pagamento){
			$tipo = $tipo ? $tipo : '';
			if($tipo == 'qtd'){
				$variavel += '&val='+$($this).val();
			} else if($tipo == 'frete'){
				$variavel += '&val='+$($this).val();
			}
			$variavel += $('input[name="frete"]:checked').val() ? '&tipo_frete_atual='+$('input[name="frete"]:checked').val() : '';
			setTimeout(function(){
				$.ajax({
					type: "POST",
					url: DIR+"/app/Ajax/Carrinho/atualizar.php",
					data: 'tipo='+$tipo+'&'+$variavel,
					dataType: "json",
					beforeSend: function(){ ajaxIni(0); },
					error: function($request, $error){ ajaxErro($request, $error); },
					success: function($json){
						if($pagamento){
							Pagamento_sucess($pagamento);

						} else {
							$(".carregando").hide();
							if($json.evento!=null)
								eval($json.evento);

							// Itens no Carrinho
							if($json.itens!=null){
								$.each($json.itens, function($key, $val){
									$rel_classe = $val.rel_classe;

									if( !$('.CC_carrinho_topo .CC_item_'+$rel_classe).html() ){
										$html = $('.CC_carrinho_topo li:nth-child(1)').html();
										if($rel_classe.indexOf("xxxx") >= 0){
											$html = $html.replaceAll('xxxx', $rel_classe);
										}
										$html = '<li class="CC_item_'+$rel_classe+'">'+$html+'</li>';
										$('.CC_carrinho_topo').append($html);

										if($val['foto'] != DIR+'/web/fotos/'){
											$('.CC_item_'+$rel_classe+' .CC_item_img').html('<img src="'+$val['foto']+'" class="br5">');
										}
									}

									$('.CC_item_'+$rel_classe+' .CC_item_nome').html($val['nome']+$val['descricao']);
									if($val['foto'] != DIR+'/web/fotos/'){
										$('.CC_item_'+$rel_classe+' .CC_item_foto img').attr('src', $val['foto']);
									}
									$('.CC_item_'+$rel_classe+' .CC_item_preco').html($val['preco']);
									$('.CC_item_'+$rel_classe+' input[name="qtd"]').val($val['qtd']);
									$('.CC_item_'+$rel_classe+' .CC_item_qtd').html($val['qtd']);
									$('.CC_item_'+$rel_classe+' .CC_item_subtotal').html($val['subtotal']);
								});	
							} else {
								//window.location.reload();
							}

							// Endereco
							if($json.endereco_atual!=null){
								$('.box_endereco .enderecos').show();
								$('.endereco_atual').html($json.endereco_atual);
							} else {
								$('.box_endereco .enderecos').hide();
								$('.endereco_atual').html('');
							}

							// Frete
							$('.CC_box_frete').html($json.frete_html);

							// Cartao Parcelamento
							$('.CC_cartao_parcelamento select').html($json.cartao_parcelamento);

							// Selecionar Tipo de Frete
							if($json.tipo_frete_atual!=null){
								$('input[value="'+$json.tipo_frete_atual+'"]').attr('checked', true)
							}

							// Confirmar So o Frete esta calulando corretamente
							if( ($json.frete_n<=0 && $no_click!=1) || $json.atualizar_frete ){
								$('input[name="frete"]:checked').trigger('click');
							}


							// Valores Finais e Topo
							$('.CC_count').html($json.count);
							$('.CC_subtotal').html($json.subtotal);
							$('.CC_desconto').html($json.desconto);
							$('.CC_frete').html($json.frete);
							$('.CC_total').html($json.total);
							$('.CC_total_numero').val($json.total_numero);
							if($json.desconto_n<=0){
								$('.CC_desconto').parent().hide();
							} else {
								$('.CC_desconto').parent().show();
							}

							$valor_total = $json.total_numero; // para calcular parcelamento PagSeguro
						}
					}
				});
			}, 0.5);
		}

		// PRODUTOS
		    // Setas para Mudar Qtd
			function PP_qtd_setas(e, $soma){
				if($soma)	$qtd = parseInt($(e).parent().find('[name=qtd]').val())+$soma;
				else		$qtd = $(e).parent().find('[name=qtd]').val();
				$qtd = $qtd*1;
				$qtd = $qtd>0 ? $qtd : 1;
				$(e).parent().find('[name=qtd]').val($qtd).trigger('keyup');
			}

			// Produtoss Frete
			function PP_frete($id, e){
				$preco = $('.PP_preco').html().replace('R$ ', '').replace('R$&nbsp;', '');
				$.ajax({
					type: "POST",
					url: DIR+"/app/Ajax/Produtos/frete.php?id="+$id+"&preco="+$preco,
					data: $(e).serialize(),
					dataType: "json",
					beforeSend: function(){ ajaxIni(0); },
					error: function($request, $error){ ajaxErro($request, $error); },
					success: function($json){
						$(".carregando").hide();
						
						$(".PP_fretes").show();
						$('.CC_box_frete').html($json.frete.html);

						if($json.frete['endereco']!=null){
							$(".PP_endereco").html($json.frete['endereco']);
						}
					}
				});
			};
		// PRODUTOS

	// CARRINHO



	// ------------------------------------------------------------------------



	// PAGAMENTOS

		// PAGAMENTOS PLANOS
		    function pagar_plano($metodo, $id){
				$.ajax({
					type: "POST",
					url: DIR+"/app/Ajax/Pagamentos/pagamento_plano.php",
					data: { metodo: $metodo, id: $id },
					dataType: "json",
					beforeSend: function(){ ajaxIni(0); },
					error: function($request, $error){ ajaxErro($request, $error); },
					success: function($json){
						if($json.erro != null){
							$delay = $json.delay ? $json.delay : '';
							alerts(0, $json.erro, 1, $delay);
							$(".carregando").hide(); fechar_all();
						} else if($json.alert){
							alerts(0 ,$json.alert);
							$(".carregando").hide(); fechar_all();
						} else {
							if($json.evento!=undefined){
								eval($json.evento);
							}
						}
					}
				});
			}
		// PAGAMENTOS PLANOS
	
		// PAGAMENTO CARRNHO
		    function Pagamento($metodo, $id){
	    		fundoo1();
		    	if(!$id){
					CC_atualizar('Pagamento', '', '', '', $metodo);
				} else {
					Pagamento_sucess($metodo, $id);
				}
			}
		    function Pagamento_sucess($metodo, $id){
		    	$id = $id ? $id : 0;
				$obs = $('textarea[name="obs"]').val();
				$cartao_nome = $('input.cartao_nome[name="cartao_nome"]').val();
				$cartao_numero = $('input.cartao_numero[name="cartao_numero"]').val();
				$cartao_validade = $('input.cartao_validade[name="cartao_validade"]').val();
				$cartao_cvv = $('input.cartao_cvv[name="cartao_cvv"]').val();
				$cartao_parcelamento = $('select.cartao_parcelamento[name="cartao_parcelamento"]').val();

				// PAGSEGURO
					$SenderHash_ = '';
					if($metodo == 'PagSeguro_cartao' || $metodo == 'PagSeguro_boleto'){
						$SenderHash_ = PagSeguroDirectPayment.getSenderHash();
					}
				// PAGSEGURO

				$.ajax({
					type: "POST",
					url: DIR+"/app/Ajax/Pagamentos/pagamento.php",
					data: { metodo: $metodo, id: $id, obs: $obs, cartao_nome: $cartao_nome, cartao_numero: $cartao_numero, cartao_validade: $cartao_validade, cartao_cvv: $cartao_cvv, cartao_parcelamento: $cartao_parcelamento, PagSeguro_SenderHash: $SenderHash_, PagSeguro_parcela_final: $parcela_final, PagSeguro_cartao_token: $cart_token },
					dataType: "json",
					beforeSend: function(){ ajaxIni(0); },
					error: function($request, $error){ ajaxErro($request, $error); },
					success: function($json){
						if($json.erro != null){
							$delay = $json.delay ? $json.delay : '';
							alerts(0, $json.erro, 1, $delay);
							$(".carregando").hide(); fechar_all();
						} else if($json.alert){
							alerts(0 ,$json.alert);
							$(".carregando").hide(); fechar_all();
						} else {
							if($json.evento!=undefined){
								eval($json.evento);
							}
						}
					}
				});
		    }
		// PAGAMENTO CARRNHO


		// PAGSEGURO
			var $cart_token = '';
			var $valor_total = 0;
			var $pagseguro_session = 0;
			var $pagseguro_brand = '';
			var $parcela_final = '';

			// SESSAO
				function PagSeguro_sessao(){
					$.ajax({
						type: "POST",
						url: DIR+"/app/Ajax/Pagamentos/PagSeguro/login.php",
						dataType: "json",
						beforeSend: function(){ ajaxIni(0); },
						error: function($request, $error){ ajaxErro($request, $error); },
						success: function($json){
							PagSeguroDirectPayment.setSessionId($json.session);
						}
					});
				}
			// SESSAO

			// PARCELAMENTO
				function PagSeguro_parcelamento(){
					$(".cartao_numero").on("keyup", function() {
						if($(".cartao_numero").val()){
							if(!$pagseguro_brand){
								$pagseguro_brand = 1;
								$val = $valor_total.toFixed(2)
								$('.CC_cartao_parcelamento_PagSeguro select').html('<option value="1">1x de R$&nbsp;'+$val+' sem juros (R$&nbsp;'+$val+')</option>');
								$('.CC_cartao_parcelamento_PagSeguro').show();
							}
		
							PagSeguroDirectPayment.getBrand({
							    cardBin: $(".cartao_numero").val().replace(" ", ""),
							    success: function(response) {
									$brand = response.brand.name;
		
									if($pagseguro_brand != $brand){
										$pagseguro_brand = $brand;

										PagSeguroDirectPayment.getInstallments({
									        amount: $valor_total,
									        maxInstallmentNoInterest: $pagseguro_parcelas_sem_juros ? $pagseguro_parcelas_sem_juros : 1,
											brand: $brand,
									        success: function(response){
												pre(response);
												$.each(response.installments, function($key1, $value1) {
													if($key1 == $brand){
														$html = '';
														$parcela_final = '';
														$.each($value1, function($key, $value) {
															$val = $value.installmentAmount.toFixed(2);
															$val_total = $value.totalAmount.toFixed(2);
															$html += '<option value="'+$value.quantity+'">'+$value.quantity+'x de R$&nbsp;'+$val+' '+($value.interestFree ? 'sem' : 'com')+' juros (R$&nbsp;'+$val_total+')</option>';

															$parcela_final += '&&&'+$value.quantity+'---'+$value.installmentAmount+'---'+$value.totalAmount+'---'+$value.interestFree;
														});
														$('.CC_cartao_parcelamento_PagSeguro select').html($html);
														$('.CC_cartao_parcelamento_PagSeguro').show();
													}
												});
									       	}
										});
									}
							    },
							});
						}
					})
				}
			// PARCELAMENTO

			// CARTAO TOKEN (VALIDAR)
				function PagSeguro_cartao_token(){
					fundoo1();
					$('.carregando').show();

					$cart_token = '';
					$cartao_nome = $('input.cartao_nome[name="cartao_nome"]').val();
					$cartao_numero = $('input.cartao_numero[name="cartao_numero"]').val();
					$cartao_validade = $('input.cartao_validade[name="cartao_validade"]').val();
					$cartao_cvv = $('input.cartao_cvv[name="cartao_cvv"]').val();
					$ex = $cartao_validade.split('/');
					PagSeguroDirectPayment.createCardToken({
						cardNumber: $cartao_numero.replaceAll(' ', ''),
						brand: $pagseguro_brand,
						cvv: $cartao_cvv,
						expirationMonth: $ex[0],
						expirationYear: $ex[1],
						success: function(response) {
							$cart_token = response.card.token;
							Pagamento('PagSeguro_cartao');
						},
						error: function(response) {
							$cart_token = 123;
							Pagamento('PagSeguro_cartao');
						},
					});
				}
			// CARTAO TOKEN (VALIDAR)
		// PAGSEGURO



		// CIELO
			// BOLETO
			    function Cielo_Boleto_pagar($id){
					$.ajax({
						type: "POST",
						url: DIR+"/app/Ajax/Pagamentos/Cielo/Boleto/pagar.php?id="+$id,
						data: { id: $id },
						dataType: "json",
						beforeSend: function(){ ajaxIni(0); },
						error: function($request, $error){ ajaxErro($request, $error); },
						success: function($json){
							$(".carregando").hide();
							if($json.erro){
								$.each($json.erro, function($key, $val) {
									alerts(0, $val, 1);
								});	

							} else if($json.boleto_link){
								$('.Cielo_boxs.boleto .gerar_boleto').html('<a href="'+$json.boleto_link+'" target="_blank"> <button class="hover db w100p p15 m-a fz20 ttu cor_fff bdw2 bd_DA0404 back_DA0404 br6">Gerar Boleto</button> </a>').slideDown();

							} else {
								$('.Cielo_boxs.boleto .gerar_boleto').html('<div class="tac">Erro...</div>').slideDown();
							}

							if($json.evento!=undefined){
								eval($json.evento);
							}
						}
					});
				}
			// BOLETO

			// CREDITO
				function Cielo_Credito_pagar($id, e){
					$.ajax({
						type: "POST",
						url: DIR+"/app/Ajax/Pagamentos/Cielo/Credito/pagar.php",
						data: $(e).serialize(),
						dataType: "json",
						success: function($json){
							$(".carregando").hide();
							if($json.erro){
								$.each($json.erro, function($key, $val) {
									alerts(0, $val, 1);
								});
							}

							if($json.evento!=undefined){
								eval($json.evento);
							}
						}
					});
				};
			// CREDITO
		// CIELO

		// PLANOS
		    function Pagamento_planos($id, $id_edit){
				$.ajax({
					type: "POST",
					url: DIR+"/app/Ajax/Pagamentos/pagamento_planos.php",
					data: { id: $id, id_edit: $id_edit },
					dataType: "json",
					beforeSend: function(){ ajaxIni(0); },
					error: function($request, $error){ ajaxErro($request, $error); },
					success: function($json){
						$(".carregando").hide();
						if($json.alert){
							alerts(0 ,$json.alert);
						} else {
							$('.events_externos .outros').html($json.form);
							$('.events_externos .outros #form_pagamento').submit();

							if($json.evento!=undefined){
								eval($json.evento);
							}
						}
					}
				});
		    }
	    // PLANOS

	// PAGAMENTOS



	// ------------------------------------------------------------------------



	// COTACAO

	    // Gravar
	    function cotacao_gravar($id, $banco){
	    	$qtd = $('input[name=qtd][dir="'+$id+'"]').val();
			$.ajax({
				type: "POST",
				url: DIR+"/app/Ajax/Cotacao/gravar.php",
				data: { id: $id, banco: $banco, qtd: $qtd },
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					window.parent.location = DIR+'/cotacao/';
				}
			});
		};

		// Cotacao Comprimento
		function cotacao_comprimento(e){
			$.ajax({
				type: 'POST',
				url: DIR+"/app/Ajax/Cotacao/gravar_comprimento.php",
				data: $(e).serialize(),
				dataType: "json",
				success: function(json){
					if(json.resposta){
						$(".alerts_orca, .alerts_orca .alert_01").stop(true, true).fadeIn();
						$('.fundoo').fadeIn();
					} else {
						$(".alerts_orca, .alerts_orca .alert_02").stop(true, true).fadeIn(500).delay(2000).fadeOut(1000);
						$('.fundoo').stop(true, true).fadeIn(500).delay(2000).fadeOut(1000);
					}
				}
			});			
		};

		// Cotacao Comprimento Alerts
		function cotacao_comprimento_alerts(){
            $(".comprimento").click(function() {
                if($(this).is(":checked")){
                    $(this).parent().parent().find('.qtd').val('1');
                } else {
                    $(this).parent().parent().find('.qtd').val('');
                }
            })
            setTimeout(function(){ 
	            $html  = '<div class="alerts_orca fechar_hide"> ';
					$html += '<div class="alert alert_01 tac"> ';
						$html += '<b class="fz16">O que deseja Fazer?</b> ';
						$html += '<a class="p10 fz14" style="color: #fff; background: #aaa" href="javascript:fechar_cc()" role="button">Continuar Comprando</a> ';
						$html += '<a class="p10 fz14" style="color: #fff; background: #aaa" href="'+DIR+'/cotacao/" role="button">Finalizar Orçamento</a> ';
					$html += '</div> ';
					$html += '<div class="alert alert_02 tac"> ';
						$html += '<b class="c_vermelho fz18 lh24"> ';
							$html += 'Você não selecionou nenhuma medida ou aconteceu algum erro! Tente novamente! ';
						$html += '</b> ';
					$html += '</div> ';
				$html += '</div> ';
				$('.events_externos').append($html);
			 }, 2000);
		}

		// Fechar Cotacao Comprimento
		function fechar_cc(){
			$('.alert').fadeOut();
			$('.fundoo').fadeOut();
		}

	// COTACAO



	// ------------------------------------------------------------------------



	// PIN GEOMAPEAMENTO
		function geomapeamento(){
			navigator.geolocation.getCurrentPosition(geomapeamento_success, geomapeamento_error);
		}
		function geomapeamento_success(position) {
			atualizar_mapa(position.coords.latitude, position.coords.longitude);
			//$.ajax({
				//type: "POST",
				//url: DIR+"/app/Ajax/Pin/geomapeamento.php",
				//data: { lat: position.coords.latitude, lng: position.coords.longitude },
				//context: { lat: position.coords.latitude, lng: position.coords.longitude },
				//dataType: "json",
				//success: function($json){
					//if($json.cidades){ $("#estados").attr('cidade', $json.cidades); }
					//if($json.estados){ $("#estados").val($json.estados).trigger('change'); }
				//}
			//});
		};
		function geomapeamento_error() {
			atualizar_mapa();
			//$("#estados").val('SP').trigger('change');
		};


		function atualizar_mapa($lat_usuario, $lng_usuario, $id){
			if($id){ $("#idd").val($id); }

			$lat = $lat_usuario ? $lat_usuario : '';
			$lng = $lng_usuario ? $lng_usuario : '';

			$idd = 0; //$("#idd").val();
			$representantes = ''; $("#representantes").val();
			$estados = ''; $("#estados").val();
			$cidades = ''; $("#cidades").val();
			$order = 'nome'; // $("#order").val();

			$('.INI').removeClass('INI');
			$.ajax({
				type: "POST",
				url: DIR+"/app/Ajax/Pin/atualizar_mapa.php",
				data: { lat: $lat, lng: $lng, idd: $idd, representantes: $representantes, estados: $estados, cidades: $cidades, order: $order },
				context: { idd: $idd, representantes: $representantes, estados: $estados, cidades: $cidades, order: $order },
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$('.alert').hide();

					var latlngbounds = new google.maps.LatLngBounds();

	        		$('.mapa_html').html($json.html_final);

					$x = 0;
					$n = 0;
					$('.box_representantes').html('');
					$.each($json.array, function($key, $value) {
						$('.box_representantes').append($value.html);

						var marker = new google.maps.Marker({
							position: new google.maps.LatLng($value.lat, $value.lng),
							title: $value.nome+'112',
							map: map,
							icon: $value.valido==1 ? 'plugins/Google/Pin/img/localizacao.png' : 'plugins/Google/Pin/img/pin.png',
						});
						
						var myOptions = {
							content: $value.txt,
							pixelOffset: new google.maps.Size(-150, 0)
			        	};

			        	// HTML
							if($value.html){
								//$('.mapa_html').append($value.html);
								$n++;
							}
			        	// HTML

						infoBox[$value.id] = new InfoBox(myOptions);
						infoBox[$value.id].marker = marker;

						infoBox[$value.id].listener = google.maps.event.addListener(marker, 'click', function (e) {
							$.each($json.array, function($key1, $value1) {
								infoBox[$value1.id].close();
							});

							abrirInfoBox($value.id, marker);
						});

						markers.push(marker);
						latlngbounds.extend(marker.position);

						$x++;
					});

					$('.mapa_html_x').html($n+' lojas encontradas perto de você');

					// MAPS
						//var markerCluster = new MarkerClusterer(map, markers);
						map.fitBounds(latlngbounds);

						setTimeout(function(){
							map.setZoom(map.getZoom())
							console.log($x);
							if($x == 1){ map.setZoom(map.getZoom()-1) }
							if($x == 1){ map.setZoom(map.getZoom()-1) }
							if($x == 1){ map.setZoom(map.getZoom()-1) }
							if($x == 1){ map.setZoom(map.getZoom()-1) }
							if($x == 1){ map.setZoom(map.getZoom()-1) }
							if($x <= 2){ map.setZoom(map.getZoom()-1) }
							if($x == 3){ map.setZoom(map.getZoom()-1) }
							if($x == 4){ map.setZoom(map.getZoom()-1) }
						}, 500);

						if($x == 0){
							alerts(0, 'Nenhuma Loja Encontrada para Essa Cidade!');
						}
					// MAPS

					//$url  = DIR+'/lojas/?';
					//$url += '&idd='+this.idd;
					//$url += '&representantes='+this.representantes;
					//$url += '&estados='+this.estados;
					//$url += '&cidades='+this.cidades;
					//$url += '&order='+this.order;
					//window.history.pushState($idd, document.title, $url);

					//ir('header');

					$(".carregando").hide();
				}
			});

		}
	// PIN GEOMAPEAMENTO





    // FORMULA DE HAVERSINE
	    //var $distancia = formula_haversine({lat: -16.735460432673857, lng: -43.838077142888984}, {lat: -16.735419335028414, lng: -43.850179269207786});
	    function formula_haversine(position1, position2) {
	        "use strict";
	        var deg2rad = function (deg) { return deg * (Math.PI / 180); },
	            R = 6371,
	            dLat = deg2rad(position2.lat - position1.lat),
	            dLng = deg2rad(position2.lng - position1.lng),
	            a = Math.sin(dLat / 2) * Math.sin(dLat / 2)
	                + Math.cos(deg2rad(position1.lat))
	                * Math.cos(deg2rad(position1.lat))
	                * Math.sin(dLng / 2) * Math.sin(dLng / 2),
	            c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
	        return ((R * c *1000).toFixed());
	    }
    // FÓRMULA DE HAVERSINE


	// ------------------------------------------------------------------------



	// CRONOMETRO
		function cronometro($data){
			cronometro1($data);
			setInterval(function () {
				cronometro1($data);
			}, 1000);
		}
		function cronometro1($data){
			$falta = (new Date($data).getTime() - new Date().getTime()) / 1000;
			$falta = parseInt($falta);
			dias = 60 * 60 * 24;
			horas = 60 * 60;
			minutos = 60;

			$dias = parseInt($falta / dias);
			$falta = $falta - ($dias*dias);

			$horas = parseInt($falta / horas);
			$falta = $falta - ($horas*horas);

			$horas_all = $dias * 24 + $horas;

			$minutos = parseInt($falta / minutos);
			$falta = $falta - ($minutos*minutos);

			$segundos = $falta;

			$dias = $dias<10 ? '0'+$dias : $dias;
			$horas = $horas<10 ? '0'+$horas : $horas;
			$minutos = $minutos<10 ? '0'+$minutos : $minutos;
			$segundos = $segundos<10 ? '0'+$segundos : $segundos;

			$('.cronometro_dias1').html($dias>0 ? $dias : 'menos de 1');
			$('.cronometro_dias').html($dias);
			$('.cronometro_horas').html($horas);
			$('.cronometro_horas_all').html($horas_all);
			$('.cronometro_mins').html($minutos);
			$('.cronometro_segs').html($segundos);
		}
	// CRONOMETRO



	// ------------------------------------------------------------------------



	// RESPONSIVO
		$(document).ready(function() {
			$html  = '';
			$cor = $(".menuu_resp ul").attr('cor');
			$bd = $(".menuu_resp ul").attr('bd');
			$back = $(".menuu_resp ul").attr('back');

			$x=0;
			$y=0;
			$("ul.menuu > li:not('.no') > a").each(function() { $x++;
				$nome = $(this).html();
				$href = $(this).attr('href') ? 'href="'+$(this).attr('href')+'"' : 'onclick="'+$(this).attr('onclick')+'"';
				$bd_menu = $x!=1 ? 'bdt_'+$bd : '';

				// VERIFICANDO SE EXISTE SUBMENU
				if($(this).parent().find('ul').attr('class') == undefined){
					$html += '<li> ';
							$html += '<a '+$href+' class="limit db p10 cor_'+$cor+' '+$bd_menu+' ">'+$nome+'</a> ';
					$html += '</li> ';

				// COM SUBMENU
				} else { $y++;
					$html += '<li> ';
							$html += '<a onclick="menuu_resp_submenu('+$y+')" class="limit db p10 cor_'+$cor+' '+$bd_menu+' ">'+$nome+'</a> ';
					$html += '</li> ';
					// SUBMENU
						$z=0;
						$(this).parent().find("li a").each(function() { $x++;
							$nome = $(this).html();
							$href = $(this).attr('href') ? 'href="'+$(this).attr('href')+'"' : 'onclick="'+$(this).attr('onclick')+'"';
							$submenu = '&nbsp;&raquo;&nbsp;';
							if($(this).parent().find('ul').attr('class') != undefined){
								$submenu = '&nbsp;&nbsp;&nbsp;&nbsp;&raquo;&nbsp;';
							}
							$bd_menu = $x!=1 ? 'bdt_'+$bd : '';
							$html += '<li class="dn menuu_resp_submenu_ menuu_resp_submenu_'+$y+' menu_cate_'+$z+'"> ';
									$html += '<a '+$href+' class="limit db p10 cor_'+$cor+' '+$bd_menu+' ">'+$submenu+strip_tags($nome)+'</a> ';
							$html += '</li> ';
							$z++;
						});
					// SUBMENU
				}
			});

			$html += '		<div class="clear"></div> ';

			$(".menuu_resp ul").html($html);
			criar_css(".menuu_resp ul");
		});
		function menuu_resp_submenu($x){
			if($('.menuu_resp_submenu_'+$x).css('display') == 'none'){
				$('.menuu_resp_submenu_').hide();
				$('.menuu_resp_submenu_'+$x).show();
			} else {
				$('.menuu_resp_submenu_').hide();
			}
		}
	// RESPONSIVO



	// ------------------------------------------------------------------------



	// SAIR (LOGIN)
		function sair(){
			ajaxNormal('ajaxForm/login.php?sair=1')
		}
	// SAIR (LOGIN)


	// FOOTER
		$(window).scroll(function(){
			if($(window).scrollTop() > 200){
				$("headerxx").addClass('fixed');
			} else  {
				$("headerxx").removeClass('fixed');
			}
			//if($(window).scrollTop() > (($("footer").offset().top)-400)){
				//$(".busca-flutuante").fadeOut();
			//} else  {
				//$(".busca-flutuante").fadeIn();
			//}

			if($(window).scrollTop() > 200){
				$(".footer_seta").fadeIn();
			} else  {
				$(".footer_seta").fadeOut();
			}
		});
		$(document).ready(function() {
			$('.footer_seta').on('click', function() {
				$("html,body").animate( {scrollTop: $("html").offset().top}, "slow" );
			});
		});

		// FOOTER_COOKIES
			$(document).ready(function() {
				if(lerCookie('footer_cookies')==undefined){
					$('.FOOTER_COOKIES').show();
				}
			});
			function footer_cookies(){
				$('.FOOTER_COOKIES').hide();
				gravarCookie('footer_cookies', 'ok', 365);
			}
		// FOOTER_COOKIES
	// FOOTER



	// ------------------------------------------------------------------------



	// VERIFICACOES
		$(document).ready(function() {
			setTimeout(function(){
				// Cadastro Online
				$.ajax({
					type: "POST",
					url: DIR+"/app/Ajax/Verificacoes/cadastro_online.php",
					data: '',
					dataType: "json",
					success: function($json){
					}
				});
			}, 5000);
		});
	// VERIFICACOES



	// ------------------------------------------------------------------------



	// PLUGINS SITE
		$(document).ready(function (){

			// DataTable
			$(".datatable").each(function() {
				var oTable = $(".datatable").DataTable({
					"order": [ [1, 'desc'] ],
					"iDisplayLength" : 25,
					"sPaginationType": "full_numbers",
	        		"processing": true,
				});
			});

		});
	// PLUGINS SITE


	// ANIMACOES
		$(document).ready(function (){
			$("[animated_ini]").each(function() {
				$(this).addClass('animated_ini');
				$(this).wrap("<div></div>");
				animated_on('ini', 1);
			});

			$x=0;
			var $animated = [];
			$("[animated]").each(function() { $x++;
				$(this).addClass('animated_'+$x);
				$(this).wrap("<div></div>");
			});
			$(window).scroll(function(){
				for (var $i=1; $i<=$('[animated]').length; $i++) {
					animated_scroll($i)
				};
			});
			function animated_scroll($n){
				$altura_tela = $(window).scrollTop() + $(window).height();
				// ON
				if($('.animated_'+$n).attr('animated_status')==null || $('.animated_'+$n).attr('animated_status')==0){
					if($altura_tela > ($('.animated_'+$n).parent().offset().top + 240) ){
						animated_on($n);
					}

				// OFF
				} else if($('.animated_'+$n).attr('animated_status')==2){
					if($altura_tela < ($('.animated_'+$n).parent().offset().top + 230) ){
						animated_off($n);
					}
				}
			}
			function animated_on($n, $tipo){
				tirar_efeitos_atuais($('.animated_'+$n));
				$efeito = efeitosIn($('.animated_'+$n), $tipo);
				shuffle($efeito);
				$('.animated_'+$n).removeClass('animated').parent().css('overflow', 'hidden');
				setTimeout(function(){
					$('.animated_'+$n).addClass('animated '+$efeito[0]).css('opacity', 1);
					setTimeout(function(){ $('.animated_'+$n).parent().css('overflow', ''); }, 1500);
				}, 0.5);
				if($('.animated_'+$n).attr('animated_loop'))
					$('.animated_'+$n).attr('animated_status', 2)
				else
					$('.animated_'+$n).attr('animated_status', 1);
			}
			function animated_off($n){
				tirar_efeitos_atuais($('.animated_'+$n));
				$efeito = efeitosOut($('.animated_'+$n), $tipo);
				shuffle($efeito);
				$.each($efeito, function($key, $val) {
					$('.animated_'+$n).removeClass($val);
				});	
				$('.animated_'+$n).removeClass('animated').parent().css('overflow', 'hidden');
				setTimeout(function(){
					$('.animated_'+$n).addClass('animated '+$efeito[0]).css('opacity', '');
					setTimeout(function(){ $('.animated_'+$n).parent(); }, 1500);
				}, 0.5);
				$('.animated_'+$n).attr('animated_status', 0)
			}

			function efeitosIn($e, $tipo){
				if($tipo==1)
					return $e.attr('efeito') ? [$e.attr('efeito')] : ['fadeIn'];
				else
					return $e.attr('efeito') ? [$e.attr('efeito')] : ['fadeIn'];

				//return $e.attr('efeito') ? [$e.attr('efeito')] : ['fadeIn', 'lightSpeedIn', 'zoomIn', 'zoomInUp']; // flipInX
			}
			function efeitosOut($e, $tipo){
				return $e.attr('efeito') ? [$e.attr('efeito')] : ['fadeOut', 'fadeOutUpBig', 'lightSpeedOut', 'zoomOut', 'zoomOutUp']; // flipOutX
			}
			function tirar_efeitos_atuais($e){
				$.each(efeitosIn($e), function($key, $val) {
					$e.removeClass($val);
				});	
				$.each(efeitosOut($e), function($key, $val) {
					$e.removeClass($val);
				});	
			}

		});
	// ANIMACOES


	// OUTROS EVENTOS NOVOS
		function catee($id, $e){
			if($id){
				hide('.catee');
				fshow('.catee_'+$id);
			} else {
				fshow('.catee');
			}
			$($e).parent().find('> li,> a').removeClass('selected').removeClass('active');
			$($e).addClass('selected active');
			img_carregar();
		}
		function catee1($id, $e){
			$($e).parent().find('li').removeClass('active');
			$($e).addClass('active');

			$('.catee').hide();
			$('.catee_'+$id).show();
		}

		function cate_carrocel($id){
			$carrocel = ajaxRapido('../../views/z_carrecel.php', 'id='+$id);
			$('.z_carrecel').html($carrocel);
			img_carregar();
			$(".carregando").hide();
		}

		$(document).ready(function() {
			setTimeout(function(){
				$(".dn_time").each(function() {
					$(this).hide();
				});
			}, 1000);
		});


    	$(document).ready(function() {
			setTimeout(function(){ $('.dnn_700x').addClass('dnn_700'); }, 1000);
		});

		$(document).ready(function() {
			$(".faqq").on("click", function(){
				$(this).parent().find("> .faqq1").slideToggle();
			})
		});
	// OUTROS EVENTOS NOVOS


/* Eventos */
