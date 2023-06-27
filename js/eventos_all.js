/* Eventos All */


	// EVENTOS INICIAIS
		// Events Externos
		$(document).ready(function(){
			$divs  = '<div class="events_externos"> ';
				$divs += '<div class="boxs"></div> ';
				$divs += '<div class="alerts"></div> ';
				$divs += '<div class="modals"></div> ';
				$divs += '<div class="requireds dni"></div> ';
				$divs += '<div class="carregando dn"> <img src="'+DIR+'/web/img/outros/carregando/loader.gif" class="dib w32 h27" /> <span> <span class="porcentagem m0 p0"></span> Carregando... </span> </div> ';
				$divs += '<div class="carregando1 dn"><div style="position: fixed; top: 50%; left: 50%; z-index: -1; padding: 10px; margin: -110px 0 0 -110px; font-size: 0;"><div class="lds-css ng-scope"><div style="width:100%;height:100%" class="lds-eclipse"><span class="posa w100p pt88 fz20 tac cor_fff">Carregando...</span><div style="box-shadow: 0 4px 0 0 #fff;"></div></div></div></div></div> ';
				$divs += '<div class="carregando_endereco dn"><div style="position: fixed; top: 50%; left: 50%; z-index: -1; padding: 10px; margin: -110px 0 0 -110px; font-size: 0;"><div class="lds-css ng-scope"><div style="width:100%;height:100%" class="lds-eclipse"><span class="posa w100p pt88 fz20 tac cor_fff">Buscando <br> Endereço...</span><div style="box-shadow: 0 4px 0 0 #fff;"></div></div></div></div></div> ';
				$divs += '<div class="outros dni"></div> ';
				$dni = (HOST=='localhost:4000') ? '' : 'dni';
				$divs += '<div class="tela_full posf t0 l0 w100p h100p z-1 op0 dn"></div> ';
				$divs += '<div class="erros_ajax fechar_hide '+$dni+'"></div> ';
				$divs += '<div class="style dni"></div> ';
			$divs += '</div> ';
			$divs += '<div class="fundoo" onclick="fechar_all()"></div> ';
			$divs += '<div class="fundoo1"></div> ';

			if(LUGAR == 'admin'){
				$divs  += '<div class="posa t0 l0 mt50"> ';
					$divs += '<a href="'+DIR+'/admin/?pg=1&m=0" class="db w20 h10 mb2"></a> ';
				$divs += '</div> ';
			}
			$('body').append($divs);
		});
	// EVENTOS INICIAIS



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------




	// FUNCOES IMPORTANTES
		// IMG Load
			function img_load($img, $width, $height){
				$('img[img_load="'+$img+'"]').parent().addClass('img_load_pai');
				$classe_img = $('img[img_load="'+$img+'"]').attr('class') ? $('img[img_load="'+$img+'"]').attr('class') : '';
				$('img[img_load="'+$img+'"]').before('<div class="posa w100p img_loading"><div class="dib max-w100p o-h '+$classe_img+'" wh="'+$width+'_'+$height+'"><div class="max-w100p c_flex jc" wh="'+$width+'_'+$height+'"><img src="'+DIR+'/web/img/outros/carregando/loader1.gif" class="dib w32 h32" /> <style>[wh="'+$width+'_'+$height+'"]{width:'+$width+'px;height:'+$height+'px}</style></div></div></div>');

				$('img[img_load="'+$img+'"]').attr('wh', $width+'_'+$height);
			}
			function img_loading(){
				$('img[src_load]').each(function() {				
					var $scrollBottom = $(window).scrollTop() + $('.tela_full').height();
					if($scrollBottom >= $(this).offset().top){
						$src = $(this).attr('src_load');
						$(this).attr('src', $src);
						img_load_remove(this);
					}
				});
			}
			function img_load_remove($val){
				$($val).bind('load', function() {
					setTimeout(function(){ img_load_remove1($val); }, 0.5);
					setTimeout(function(){ img_load_remove1($val); }, 15000);
					//console.log($($val).attr('img_load'));
				});
			}
			function img_load_remove1($val){
				$($val).removeAttr('src_load');
				$($val).parent().find('.img_loading').remove();
				$($val).parent().removeClass('img_load_pai');
				$($val).removeAttr('wh');
			}
			// IMG Carregamento Scroll
			$(window).scroll(function(){
				img_loading();
			});
			// IMG Carregar quando voce quiser
			function img_carregar(){
				setTimeout(function(){ img_loading(); }, 500);
			}
			// IMG Statics
			$(document).ready(function() {
				$('img[src_load][w][h]').each(function() {
					$width = $(this).attr('w') ? $(this).attr('w')+'px' : '100%';
					$height = $(this).attr('h') ? $(this).attr('h')+'px' : '100%';
					$classe_img = $(this).attr('class') ? $(this).attr('class') : '';
					$(this).before('<div class="posa w100p img_loading"><div class="dib o-h '+$classe_img+'" wh="'+$width+'_'+$height+'"><div class="c_flex jc" wh="'+$width+'_'+$height+'"><img src="'+DIR+'/web/img/outros/carregando/loader1.gif" class="dib w32 h32" /> <style>[wh="'+$width+'_'+$height+'"]{width:'+$width+';height:'+$height+'}</style></div></div></div>');
				});
			});
		// IMG Load
	
		// Alerts
			function alerts($acao, $txt, $varios, $delay){
				if(!$varios){
					$('.alerts .alert').hide();
				}
				if(!$txt){
					$txt = $acao ? 'Operação Realizada com Sucesso!' : 'Ocorreu algum erro inesperado!';
				}
				$n = parseInt(Math.random()*10000000);
				$html  = '<div class="acao_'+($acao ? 1 : 0)+' alert alert_'+$n+'"> ';
					$html += '<i class="faa-times c_vermelho" onclick="fechar_alerts('+$n+')"></i> ';
					$html += '<p> '+$txt+' </p> ';
				$html += '</div> ';

				$(".alerts").append($html);
				$delay = $delay ? $delay : 5000;
				$(".alerts .alert_"+$n).stop(true, true).fadeIn(500).delay($delay).fadeOut(1000);
				$(".alerts .alert").each(function() {
					if( !$(this).is(":visible") ){
						$(this).remove()
					}
				});
			};
			function fechar_alerts($n){
				$(".alerts .alert_"+$n).stop(true, true).fadeOut(200);
			};
		// Alerts

		// Modals
			function modals($txt, $varios){
				if(!$varios){
					$('.modals .modal').hide();
				}
				if(!$txt){
					$txt = 'Operação Realizada com Sucesso!';
				}
				$n = parseInt(Math.random()*10000000);
				$html  = '<div class="modal modal_'+$n+' fechar_fade"> ';
					$html += '<i class="faa-times c_vermelho fechar_modals" onclick="fechar_modals('+$n+')"></i> ';
					$html += '<h4> Informações </h4> ';
					$html += '<div class="contextoo"> '+$txt+' </div> ';
					$html += '<div class="button"> <button class="design fechar_modals cor_fff hover2 hoverr4 bd_2e6da4 back_337ab7" onclick="fechar_modals('+$n+')">Fechar</button> </div> ';
				$html += '</div> ';

				$(".modals").append($html);
				$(".modals .modal_"+$n).stop(true, true).fadeIn(500);
				fundoo();
			};
			function fechar_modals($n){
				$(".modals .modal_"+$n).stop(true, true).fadeOut(1000);
				fechar_all();
			};
		// Modals

		// Boxs
			function boxs($classe, $itens, $t10, $url, $tipo){
				$admin = (LUGAR!='site' && $url!='site') ? '/admin' : '';
				if($classe.indexOf("/") > 0){
					$ex = $classe.split("/");
					if($ex[2]){
						$url = 'Boxs/'+$ex[0]+'/'+$ex[1]+'/';
						$classe = $url_final = $ex[2];
					} else {
						$url = 'Boxs/'+$ex[0]+'/';
						$classe = $url_final = $ex[1];
					}
				} else {				
					if($classe=='filtro_avancado'){
						$_GET = converter_gets($itens);
						if($_SESSION['filtro_avancado['+$_GET['id']+']'])
							$itens = $itens+'&'+$_SESSION['filtro_avancado['+$_GET['id']+']'];
					}
					$url = ($url && $url!='site') ? $url : 'Boxs/';
					$url_final = $classe;
				}
				if($classe.indexOf(".php") < 0){
					$url_final = $classe+'.php';
				}
				$.ajax({
					type: "POST",
					url: DIR+$admin+"/app/Ajax/"+$url+$url_final,
					data: $itens!=undefined ? $itens+'&classe='+$classe+'&lugar='+LUGAR+'&dir_d='+DIR_D : 'classe='+$classe+'&lugar='+LUGAR+'&dir_d='+DIR_D,
					dataType: "json",
					beforeSend: function(){ ajaxIni(0); },
					error: function($request, $error){ ajaxErro($request, $error); },
					success: function($json){
						if($json.evento != null){
							eval($json.evento);
						}
						if($json.erro != null){
							$delay = $json.delay ? $json.delay : '';
							$.each($json.erro, function($key, $val) {
								alerts(0, $val, 1, $delay);
							});	

						} else if($json.title && $json.html) {
							// boxs
								$html = $json.script!=null ? $json.script+$json.html : $json.html;
								$('.events_externos .boxs').html('<div class="'+$classe+' fechar_fade dn br2 no_efeito"> <a href="javascript:fechar_all()" class="fechar hh rubberBand"><i class="uii-close"></i></a> <h3> '+$json.title+' </h3> <div class="contextoo"> '+$html+' </div> <div class="clear"></div> </div>');
							// boxs

							// fundo
								if($url_final == 'webcam.php'){
									fundoo1();
								} else {
									fundoo($tipo!=undefined ? $tipo : '');
								}
							// fundo

							// margin
							if($t10==1){
								$('.events_externos .boxs > .'+$classe).css('marginTop', 0).css('top', 10);
								topoo();
							} else if($t10==2){
								$('.events_externos .boxs > .'+$classe).css('marginTop', 0).css('top', 0).css('position', 'fixed').css('height', '100%');
							} else if($t10){
								$('.events_externos .boxs > .'+$classe).css('marginTop', 0).css('top', $t10+'%');
								topoo();
							} else {
								$top = $(window).scrollTop();
								$marginTop = (window.innerHeight/2) + ((-1*($('.events_externos .boxs > .'+$classe).css('height').replace("px", "")))/2);
								$marginTop = ($top+$marginTop < 0) ? 0 : $marginTop;
								$('.events_externos .boxs > .'+$classe).css('marginTop', $marginTop).css('top', $top-100);
							}
							// margin

							$('.events_externos .boxs > .'+$classe).css('marginLeft', (-1*($('.events_externos .boxs > .'+$classe).css('width').replace("px", "")))/2);
							$('.events_externos .boxs > .'+$classe).stop(true, true).slideDown();
							//$('.events_externos .boxs > .'+$classe).draggable();

							mascaras();
							criar_css('.events_externos .boxs');
							if($json.no_select2 == undefined) $('select.design').select2();
							//$('[rel="tooltip"]').tooltip({html:true});

						} else if($json.okkkk) {
						} else if($json.logar) {
							window.parent.location = $json.logar;
						} else {
							alerts(0, 'Pagina Não Encontrada!');
						}
						$(".carregando").hide();
					}
				});
			}
			function boxs_preto($classe, $itens, $t10, $url){
				boxs($classe, $itens, $t10, $url, '_preto')
			}
			function boxs_branco($classe, $itens, $t10, $url){
				boxs($classe, $itens, $t10, $url, 1)
			}
		// Boxs

		// Boxxs
			function boxxs(func){
				$("ul.boxxs ul.sortable").sortable({
					connectWith: "ul.boxxs ul.sortable",
					beforeStop: function(event, ui) {
						e = ui.item;
						eval(func);
					}
				}).disableSelection();
			}
		// Boxxs

		// Fechar All
			function fechar_all(){
				$('.carregando').stop(true, true).hide();
				$('.carregando1').stop(true, true).hide();
				$('.carregando_endereco').stop(true, true).hide();
				$('.fechar_hide').stop(true, true).hide();				
				$('.fechar_fade').stop(true, true).delay(50).slideUp();
				$('.fundoo').stop(true, true).delay(50).fadeOut();
				$('.fundoo1').stop(true, true).delay(50).fadeOut();
				$('.events_externos > .boxs > .ver').remove();
				$('.events_externos > .boxs > .videos').remove();
				$('.events_externos > .boxs > .videos_player').remove();
			}
			function fechar_item(){
				$('.fechar_item').stop(true, true).hide();
			}
			function fundoo_fechar(){
				$(document).on('click', function(e) {
					e.stopPropagation();
					fechar_item();
				});
				$('.fechar_item').parent().on('click', function(e) {
					e.stopPropagation();
				});
			};
		// Fechar All

		// Menu Hover e Click
			function menu_hover_e_click($lugar){
				$lugar = $lugar ? $lugar : '';
				// Menu Hover
				    $($lugar+' ul[hover="true"] > li').hover(function(e) {
				    	e.stopPropagation();
						$(this).find('> ul').stop(true, true).delay(100).slideDown();
						$(this).addClass('ativo');
				    }, function() {
						$(this).find('> ul').stop(true, true).delay(200).slideUp();
						$(this).parent().find('> li').removeClass('ativo');
				    });
				// Menu Hover

				// Menu Click
					$($lugar+' ul[click="true"] > li a, '+$lugar+' ul[click1="true"] > li a').on('click', function(e) {
						e.stopPropagation();
						if(!$(this).parent().is('.ativo')){
							$($lugar+' ul[click="true"] > li a').parent().find('ul').stop(true, true).slideUp();
							$($lugar+' ul[click="true"] > li a').parent().parent().find('li').removeClass('ativo');
							$(this).parent().find('> ul').slideDown();
							$(this).parent().addClass('ativo');
						} else {
							$(this).parent().find('ul').stop(true, true).slideUp();
							$(this).parent().parent().find('li').removeClass('ativo');
						}
				    });
				// Menu Click
			};
		// Menu Hover e Click

		// Menu Click (onclick)
			var $_MENU_CLICK = 0;
			function menu_click($e, $lugar){
				$($e).find_parent('tags', 'ul').attr('click', 'true');
				$_MENU_CLICK = 1;
				$lugar = $lugar ? $lugar : '';
				if(!$($e).parent().is('.ativo')){
					$($lugar+' ul[click="true"] > li a').parent().find('ul').stop(true, true).slideUp();
					$($lugar+' ul[click="true"] > li a').parent().parent().find('li').removeClass('ativo');
					$($e).parent().find('> ul').slideDown();
					$($e).parent().addClass('ativo');
				} else {
					$($e).parent().find('ul').stop(true, true).slideUp();
					$($e).parent().parent().find('li').removeClass('ativo');
				}
			}
			function menu_click_nulo(){
				$_MENU_CLICK = 1;
			}
		// Menu Click (onclick)

		// Click Body
			function click_body(){
				if($_MENU_CLICK){
					$_MENU_CLICK = 0;
				} else {
					$('ul[click="true"] > li a').parent().find('ul').stop(true, true).slideUp();
					$('ul[click="true"] > li a').parent().parent().find('li').removeClass('ativo');
				}
			}
		// Click Body

		// Tabs
			function tabs(e){
				if(!$(e).parent().hasClass('disabled')){
					$(e).parent().parent().find('li').removeClass('ativo');
					$(e).parent().addClass('ativo');
					$(e).parent().parent().parent().parent().parent().find('ul.tabs').find('> li').removeClass('ativo').css('display', 'none');
					$(e).parent().parent().parent().parent().parent().find('ul.tabs').find('li[tabs='+$(e).parent().attr('tabs')+']').addClass('ativo').css('display', 'block');
				}
			};
		// Tabs

		// Safona
			function sanfona(e){
				if($(e).hasClass("faa-plus") == true){
					$(e).hide();
					$(e).parent().find(".faa-minus").show();
					$(e).parent().find(".sanfona").slideDown();
				} else {
					$(e).hide();
					$(e).parent().find(".faa-plus").show();				
					$(e).parent().find(".sanfona").slideUp();
				}
			};
		// Safona

		// Copiar
			function copyy($e){ // copyy('input.coppy')
				document.querySelector($e).select();
				var successful = document.execCommand('copy');
				alerts(1, 'Link Copiado com Sucesso!')
			};
		// Copiar

		// Geomapeamento
			function geomapeamento_all(){
				carregarPontos('ini', 0); // Mostrar todos os pins  na primeira chamada
			}
			function geomapeamento(){
				navigator.geolocation.getCurrentPosition(geomapeamento_success, geomapeamento_error);
			}
			function geomapeamento_success(position) {
		  		carregarPontos(position.coords.latitude, position.coords.longitude);
			};
			function geomapeamento_error(err) {
				alert('ERROR(' + err.code + '): ' + err.message);
				carregarPontos(0, 0);
			};
		// Geomapeamento

		// Erros Ajax
	 		function erros_ajax($txt){
				$(".erros_ajax").show();
				$html  = '<span><i class="faa-times c_vermelho" onclick="fechar_erros_ajax()"></i></span> ';
				$html += '<div> '+$txt+' </div> ';
				$(".erros_ajax").html($html);
			};
			function fechar_erros_ajax(){
				$(".erros_ajax").hide();
			};
		// Erros Ajax
	// FUNCOES IMPORTANTES



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



	// AJAX
		// Ajax Json
		function ajaxJson($url, $data, $n_carregando){
			var $return = $.ajax({
				type: "POST",
				url: DIR+"/app/Ajax/"+$url,
				data: $data ? $data+'&lugar='+LUGAR+'&dir_d='+DIR_D : '&lugar='+LUGAR+'&dir_d='+DIR_D,
				async: false,
				beforeSend: function(){ ajaxIni($n_carregando); },
				error: function($request, $error){ ajaxErro($request, $error); },
			}).responseText;
			var $return = $.parseJSON($return);
			return $return;
		}
		function ajaxJsonAdmin($url, $data, $n_carregando){
			return ajaxJson('../../admin/app/Ajax/'+$url, $data, $n_carregando)
		}

		// Ajax Rapido
		function ajaxRapido($url, $data, $n_carregando){
			var $return = $.ajax({
				type: "POST",
				url: DIR+"/app/Ajax/"+$url,
				data: $data ? $data+'&lugar='+LUGAR+'&dir_d='+DIR_D : '&lugar='+LUGAR+'&dir_d='+DIR_D,
				async: false,
				beforeSend: function(){ ajaxIni($n_carregando); },
				error: function($request, $error){ ajaxErro($request, $error); },
			}).responseText;
			return($return);
		}
		function ajaxRapidoAdmin($url, $data, $n_carregando){
			return ajaxRapido('../../admin/app/Ajax/'+$url, $data, $n_carregando)
		}

		// Ajax Normal
		function ajaxNormal($url, $data, $n_carregando){
			$.ajax({
				type: "POST",
				url: DIR+"/app/Ajax/"+$url,
				data: $data ? $data+'&lugar='+LUGAR+'&dir_d='+DIR_D : '&lugar='+LUGAR+'&dir_d='+DIR_D,
				dataType: "json",
				beforeSend: function(){ ajaxIni($n_carregando); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$(".carregando").hide();
					if($json.evento != null){
						eval($json.evento);
					}
					if($json.erro != null){
						$.each($json.erro, function($key, $val) {
							alerts(0, $val, 1);
						});	
					} else if($json.modal){
						modals($json.modal);
					} else {
						if($json.alert=='z')	'';
						else if($json.msg)		alerts($json.alert, $json.msg);
						else if($json.alert==1)	alerts(1);
						else if($json.alert)	alerts(1, $json.alert);
						else					alerts(0);
					}
				}
			});
		}
		function ajaxNormalAdmin($url, $data, $n_carregando){
			ajaxNormal('../../admin/app/Ajax/'+$url, $data, $n_carregando)
		}

		// AjaxForm * Nao mudar id para $id por causa desse arquivo (Ajax/Boxs_acoes/mais_fotos_gravar_fotos.php)
		function ajaxForm(id, $url, $n_carregando){
			setTimeout(function(){
				if($url){
					$('#'+id).attr('action', DIR+'/app/Ajax/ajaxForm/'+$url);
				}
				$(document).ready(function(){
					$('#'+id).ajaxForm({
						data: { lugar: LUGAR, dir_d: DIR_D },
						dataType: 'json',
						//resetForm: true,
						beforeSend: function(){ ajaxIni1($n_carregando); },
						error: function($request, $error){ ajaxErro($request, $error); },
						success: function($json){
							if($json.boxs_msg != null){
								$(".carregando1").hide();
								boxs('boxs_msg', 'html='+$json.boxs_msg);
							} else {
								if($json.evento != null){
									eval($json.evento);
								}
								if($json.erro != null){
									$(".carregando1").hide();
									$.each($json.erro, function($key, $val) {
										alerts(0, $val, 1);
									});
								} else if($json.modal){
									$(".carregando1").hide();
									modals($json.modal);
								} else {
									if($json.alert!='z'){
										$(".carregando1").hide();
										if($json.msg)			alerts($json.alert, $json.msg);
										else if($json.alert==1)	alerts(1);
										else if($json.alert)	alerts(1, $json.alert);
										else					alerts(0);
									}
								}
							}
							if($json.carregando_hide){
								$(".carregando1").hide();
							}
							if(!$json.erro && !$json.no_reset){
								$('#'+id).find('[type="reset"]').trigger('click');
								//$('#'+id).find('select').trigger('change');
							}
						}
		            });
				});
			}, 0.5);
		}
		function ajaxFormAdmin(id, $url, $n_carregando){
			ajaxForm(id, '../../../admin/app/Ajax/'+$url, $n_carregando)
		}

		function ajaxIni($n_carregando){
			if(!$n_carregando) $('.carregando').show();
		}
		function ajaxIni1($n_carregando){
			if(!$n_carregando) $('.carregando1').show();
		}
		function ajaxIni_endereco($n_carregando){
			if(!$n_carregando) $('.carregando_endereco').show();
		}

		function ajaxErro($request, $error){
			alerts(0); $(".carregando").hide(); erros_ajax($request.responseText);
		}
		function ajaxForm_editor(id, $url, $n_carregando){ // repetir 2 vezes a gravação por causa do editor
			setTimeout(function(){
				if($url){
					$('#'+id).attr('action', DIR+'/app/Ajax/ajaxForm/'+$url);
				}
				$(document).ready(function(){
					$('#'+id).ajaxForm({
						data: { lugar: LUGAR },
						dataType: 'json',
						//resetForm: true,
						beforeSend: function(){ ajaxIni($n_carregando); },
						error: function($request, $error){ ajaxErro($request, $error); },
						success: function($json){
							if($('#'+id).attr('vez')!=1){
								$('#'+id).attr('vez', 1);
								$('#'+id).submit();

							} else {
								if($json.email != null){
									$('.sistema_mautic input[name="mauticform[email]"]').val($json.email);
									$('.sistema_mautic input[name="mauticform[return]"]').val($json.dir);
									setTimeout(function(){ $(".sistema_mautic button").trigger('click') }, 0.5);
								}
	
								if($json.boxs_msg != null){
									boxs('boxs_msg', 'html='+$json.boxs_msg);
								} else {
	
									if($json.evento != null){
										eval($json.evento);
									}
									if($json.erro != null){
										$.each($json.erro, function($key, $val) {
											alerts(0, $val, 1);
										});	
									} else if($json.modal){
										modals($json.modal);
									} else {
										if($json.alert=='z')	'';
										else if($json.msg)		alerts($json.alert, $json.msg);
										else if($json.alert==1)	alerts(1);
										else if($json.alert)	alerts(1, $json.alert);
										else					alerts(0);
									}
								}
								$(".carregando").hide();
								if(!$json.erro && !$json.no_reset){
									$('#'+id).find('[type="reset"]').trigger('click');
									$('#'+id).find('select').trigger('change');
								}
							}
						}
		            });
				});
			}, 0.5);
		}
	// AJAX



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



	// DATAS E NUMEROS
		// Mes
		function mes($mes, $ab){
			switch($mes){
				case 1: ($return = $ab!=undefined  ? 'Jan'  : 'Janeiro');	break;
				case 2: ($return = $ab!=undefined  ? 'Fev'  : 'Fevereiro');	break;
				case 3: ($return = $ab!=undefined  ? 'Mar'  : 'Março');		break;
				case 4: ($return = $ab!=undefined  ? 'Abr'  : 'Abril');		break;
				case 5: ($return = $ab!=undefined  ? 'Mai'  : 'Maio');		break;
				case 6: ($return = $ab!=undefined  ? 'Jun'  : 'Junho');		break;
				case 7: ($return = $ab!=undefined  ? 'Jul'  : 'Julho');		break;
				case 8: ($return = $ab!=undefined  ? 'Ago'  : 'Agosto');	break;
				case 9: ($return = $ab!=undefined  ? 'Set'  : 'Setembro');	break;
				case 10: ($return = $ab!=undefined ? 'Out' : 'Outubro');	break;
				case 11: ($return = $ab!=undefined ? 'Nov' : 'Novembro');	break;
				case 12: ($return = $ab!=undefined ? 'Dez' : 'Dezembro');	break;
			}
			return($return);
		}

		// Somar Data
		function somar_data($n, $tipo, $ano, $mes, $dia){
			$return = new Array();
			if($ano!=undefined && $mes!=undefined && $dia!=undefined)
				var $data = new Date($ano, $mes, $dia);
			else
				var $data = new Data_Atual();
			if($tipo == 'dia')
				$data.setDate($data.getDate() + $n);
			else if($tipo == 'mes')
				$data.setMonth($data.getMonth() + $n);
			else if($tipo == 'ano')
				$data.setFullYear($data.getFullYear() + $n);
			$return['dia'] = $data.getDate();
			$return['mes'] = $data.getMonth()+1;
			$return['ano'] = $data.getFullYear();
			return $return;
		}

		// Subtrair Data
	    function sub_data($tempo){
			var $return = {dias: 0, hora: '00', min: '00', seg: '00', hora_total: '00', seg_total: '00'};
			if($segs > 0){
				// Segundos
				$data_s = $tempo.getSeconds();
				$return['seg'] = $data_s<10 ? '0'+$data_s : $data_s;

				// Minutos
				$data_i = $tempo.getMinutes();
				$return['min'] = $data_i<10 ? '0'+$data_i : $data_i;

				// Horas
				$data_h = $segs - (($data_s*1000)+($data_i*60*1000));
				for (var $i = $data_h; $i >= (86400*1000);) {
					$i = $i - (86400*1000);
				}
				$data_h = parseInt($i/(60*60*1000));
				$return['hora'] = $data_h<10 ? '0'+$data_h : $data_h;

				// Dias
				$seg_d = ($data_h*60*60)+($data_i*60)+$data_s;
				$data_d = ($segs-(86400*1000)) > 0 ? parseInt(($segs-$seg_d)/(86400*1000)) : 0;
				$return['dias'] = $data_d<10 ? '0'+$data_d : $data_d;

				// Horas Total
				$data_ht = (($data_d*24)+$data_h);
				$return['hora_total'] = $data_ht<10 ? '0'+$data_ht : $data_ht;

				$return['seg_total'] = $segs/1000;
			}
			return $return;
		}

		// Cronomatro Tempo
		function cronometro_tempo($val, $all){
			$val = $all ? $all : $val;
			//console.log($val);

			$data_fim = new Date($val.ano, $val.mes-1, $val.dia, $val.hora, $val.min, $val.seg, 0);
			$seg1 = $data_fim.getTime();

			$today = Data_Atual();
			$today.setMilliseconds(0);
			$seg2 = $today.getTime();

			$segs = $seg1 - $seg2;
			$tempo = new Date($segs);
			$tempo.setMilliseconds(0);

			var $return = {dias: 0, hora: '00', min: '00', seg: '00', hora_total: '00', seg_total: '00'};
			if($segs > 0){
				if($all){
					// Segundos
					$data_s = $tempo.getSeconds();
					$return['seg'] = $data_s<10 ? '0'+$data_s : $data_s;

					// Minutos
					$data_i = $tempo.getMinutes();
					$return['min'] = $data_i<10 ? '0'+$data_i : $data_i;

					// Horas
					$data_h = $segs - (($data_s*1000)+($data_i*60*1000));
					for (var $i = $data_h; $i >= (86400*1000);) {
						$i = $i - (86400*1000);
					}
					$data_h = parseInt($i/(60*60*1000));
					$return['hora'] = $data_h<10 ? '0'+$data_h : $data_h;

					// Dias
					$seg_d = ($data_h*60*60)+($data_i*60)+$data_s;
					$data_d = ($segs-(86400*1000)) > 0 ? parseInt(($segs-$seg_d)/(86400*1000)) : 0;
					$return['dias'] = $data_d<10 ? '0'+$data_d : $data_d;

					// Horas Total
					$data_ht = (($data_d*24)+$data_h);
					$return['hora_total'] = $data_ht<10 ? '0'+$data_ht : $data_ht;

					//console.log($return);
				}

				$return['seg_total'] = $segs/1000;
			}
			return $return;
		}

		// Relogio
		function relogio(){
			$today = Data_Atual();
			$('.RELOGIO_DIA').html( zeros_left($today.getDate(), 2)+'/'+zeros_left($today.getMonth()+1, 2)+'/'+zeros_left($today.getFullYear(), 2) );
			$('.RELOGIO_HORA').html( zeros_left($today.getHours(), 2)+':'+zeros_left($today.getMinutes(), 2)+':'+zeros_left($today.getSeconds(), 2) );
			setTimeout(function(){ relogio(); }, 1000);
		}

		// Zeros Left
		function zeros_left($val, $n){
			$val = String($val);
			$x = $val.length;
			$zeros = '';
			for (i=$x; i<$n; i++) {
				$zeros += '0';
			}
			$return = $zeros+$val;
			return $return;
		}

		// DATA PHP
		function Data_PHP($classe){
			$.ajax({
				type: "POST",
				url: DIR+"/app/Ajax/Tempo/Data_PHP.php",
				dataType: "json",
				success: function($json){
					$($classe+'.date').html($json.date);
					$($classe+'.time').html($json.time);
				}
			});
			setTimeout(function(){ Data_PHP($classe); }, 500);
		}

		// DATA JS
		function Data_JS(){
			$time_php = parseInt($_DATA_PHP['time']*1000);
			$time_js = $_DATA_JS.getTime();
			$diff = $time_php-$time_js;

			$today_js = new Date();
			$today_js.setMilliseconds(0);

			$today = new Date($today_js.getTime()+$diff);
			$today.setMilliseconds(0);

			$return = $today;
			return $return;

			setTimeout(function(){ Data_JS($classe); }, 500);
		}
	// DATAS



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



	// FUNCOES UTEIS
		// eye password
		function eye_password($x){
			if($x){
				$('.eye_password .faa-eye-slash').hide();
				$('.eye_password .faa-eye').show();
				$('.eye_password input').attr('type', 'text');
			} else {
				$('.eye_password .faa-eye').hide();
				$('.eye_password .faa-eye-slash').show();
				$('.eye_password input').attr('type', 'password');
			}
		}

		// Categorias Box
	    function categorias_box($id, $e){
		    $('section#home .cate').addClass('no_efeito');
	    	$($e).parent().parent().find('a').removeClass('active');
	    	$($e).addClass('active');

	    	if($id==0){
		    	$('section#home .cate').fadeIn();
	    	} else {    		
		    	$('section#home .cate_'+$id).fadeIn();
		    	$('section#home .cate:not(.cate_'+$id+')').fadeOut();
	    	}
	    }

		// Tabs
	    function tabss(e, $parent=1){
	    	$e = $(e);
	    	for (var i=0; i<$parent; i++){
	    		$e = $e.parent();
	    	}
	    	$tabs_atual = $e.find('.tabs');
	    	$e.parent().parent().find('.tabs').slideUp();
	    	if($tabs_atual.css("display") == 'none'){
	    		$e.find('.tabs').slideDown();
	    	}
	    }

		function select_relacao($e, $gerenciar_atualizando, $id, $pai, $pai_val, $extra){
			// Atualizar Dados Quando Salvar ou Fechar um Item em Gerenciar
			if($gerenciar_atualizando){
				$table = $($e).attr('id');
				$rel = $($e);
				$rel_val = $id;
				if($rel.attr('relacao1')){
					$pai = $rel.attr('relacao1');
					$pai_val = $($e).parent().parent().parent().parent().parent().parent().parent().find( 'select#'+$pai ).val();
				}

			// Relacao Normal
			} else {
				$extra = $extra ? $extra : 'relacao';
				$table = $($e).attr($extra);
				$rel = $($e).parent().parent().parent().parent().parent().parent().parent().find( 'select#'+$table );
				$rel_val = $rel.attr('rel_val');
				$pai = $($e).attr('name');
				$pai_val = $($e).val();
			}

			$.ajax({
				type: "POST",
				url: DIR+"/app/Ajax/Padroes/select_relacao.php",
				data:  { table: $table, pai: $pai, pai_val: $pai_val, rel_val: $rel_val },
				dataType: "json",
				context: { rel: $rel },
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$(".carregando").hide();
					this.rel.html($json.html).trigger("change").attr('rel_val', '');
				}
			});
		}


		// Select Rel Estados
		function rel_estados(e, $boxx){
			$(".carregando_endereco").show();
			$tipoo = $(e).attr('rel_estados');
			$boxx = $boxx ? '.boxx' : '';
			if($tipoo == 'cidades'){
				$tipo = $(e).attr('id').replace('estados', 'cidades');
				$dir = $(e).attr('dir') ? '[dir="'+$(e).attr('dir')+'"]' : '';
				$val = $(e).attr('cidade') ? '&val='+$(e).attr('cidade').replaceAll(" ", "%20") : '';
				$rell = $boxx+' #'+$tipo+$dir;
				if($(e).val()){
					$($rell).load(DIR+"/app/Ajax/Padroes/select_rel_estados_cidades.php?estados="+$(e).val()+$val, function(){
						$($rell).trigger("change");
						$(".carregando_endereco").hide();
					});
				}
			} else if($tipoo == 'bairros'){
				$tipo = $(e).attr('id').replace('cidades', '');
				$dir = $(e).attr('dir') ? '[dir="'+$(e).attr('dir')+'"]' : '';
				$uf = $boxx+' #estados'+$tipo+$dir;
				$cidades = $($uf).attr('cidade') ? $($($uf)).attr('cidade').replaceAll(" ", "%20") : '';;
				$val = $($uf).attr('bairro') ? '&val='+$($($uf)).attr('bairro').replaceAll(" ", "%20") : '';
				$val += '&uf='+$($uf).val();
				$rell = $boxx+' #bairros'+$tipo+$dir;
				if($cidades){
					$($rell).load(DIR+"/app/Ajax/Padroes/select_rel_estados_cidades.php?cidades="+$cidades+$val, function(){
						$($rell).trigger("change");
						$(".carregando_endereco").hide();
					});
				}
			}
		}

 		// Select Rel (Site)
		function select_rel($e, $table, $pre, $extra){
			$rel = select_rel_interno($table);
			$rel_val = $rel.attr('rel_val') ? $rel.attr('rel_val') : 0;
			$pai_val = $($e).val() ? $($e).val() : 0;
			$extra_val = $('select[name="'+$extra+'"').val() ? $('select[name="'+$extra+'"').val() : 0;
			$selecione = $rel.find('option[value=""]').html() ? $rel.find('option[value=""]').html() : '- - - -';

			$pre = $pre ? $pre : '';
			$.ajax({
				type: "POST",
				url: DIR+"/app/Ajax/Padroes/select_rel/"+$pre+$table+".php",
				data:  { table: $table, rel_val: $rel_val, pai_val: $pai_val, extra_val: $extra_val, selecione: $selecione },
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$(".carregando").hide();
					$rel = select_rel_interno($json.table);
					$rel.html($json.html).removeAttr('rel_val').trigger("change");

					if($json.evento != null){
						eval($json.evento);
					}
				}
			});
		}
		function select_rel_interno($table){
			$return = $('select#'+$table);
			if(!$return.html()){
				$return = $('select[name="'+$table+'"]' );
			}
			return $return;
		}

		// Ir
		function ir($class){
			$("html,body").animate( {scrollTop: $($class).offset().top}, "slow" );
		}

	    // Downloadd downloadd('<?=$value->foto?>', 0, 'nome')
		function downloadd($arquivo, $caminho, $nome){ // downloadd('<?=$value->foto?>')
			$caminho = $caminho ? $caminho : 0;
			window.parent.location = DIR+'/app/Exportacoes/z_download.php?caminho='+$caminho+'&arquivo='+$arquivo+'&nome='+$nome;
		}

	    // Downloadd1
		function downloadd1(){
			$arquivo = $('.container-plantas .Plugin1 .owl-item.ativo figure img').attr('src');
			$caminho = '../../web/fotos/thumbnails/';
			window.parent.location = DIR+'/app/Exportacoes/z_download.php?caminho='+$caminho+'&arquivo='+$arquivo;
		}

	    // href
		function hreff($link){
			window.open($link, '_blank');
		}
		function hreff1($link){
			window.parent.location = $link;
		}

		// Fundoo
		function fundoo($op){
			if($op!=undefined) $('.fundoo').stop(true, true).css('background', 'rgba(0, 0, 0, .'+$op+')');
			$('.fundoo').stop(true, true).fadeIn();
		}
		function fundoo1($op){
			if($op!=undefined) $('.fundoo1').stop(true, true).css('background', 'rgba(0, 0, 0, .'+$op+')');
			$('.fundoo1').stop(true, true).fadeIn();
		}

		// Topoo
		function topoo(){
			$("html,body").animate( {scrollTop: $("html").offset().top}, "fast" );
		}


		// PRECO
			function preco($value){
				$return = $value/100;
				$return = $return.toFixed(2);
				//$return = $return.replaceAll('x', ',');
				$return = replace($return, '.', ',');
				$return = 'R$ '+$return;
				return $return;
			}
		// PRECO


		// REPLACE
			function replace($txt, $de, $para){
				if($txt.indexOf($de) >= 0){
					var $pos = $txt.indexOf($de);
					while ($pos > -1){
						$return = $return.replace($de, $para);
						$pos = $return.indexOf($de);
					}
				}
				return $return;
			}
		// REPLACE

		// Replece All
		String.prototype.replaceAll = function($de, $para){
			var $return = this;
			var $pos = $return.indexOf($de);
			while ($pos > -1){
				$return = $return.replace($de, $para);
				$pos = $return.indexOf($de);
			}
			return $return;
		}

		// Strip Tags
		function strip_tags (input, allowed) {
			allowed = (((allowed || '') + '').toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('')
			var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi
			var commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi
			return input.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
				return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : ''
			})
		}
		// Gets
		function converter_gets($gets){
			var $return = new Array();
			$array = $gets.split("&");
			$.each($array, function(key, val) {
				value = val.split("=");
				$return[value[0]] = value[1];
			});	
			return $return;
		}

		// Get Java
		function getUrlVars(){
			var $return = [], $hash;
			var $hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		 
			for(var i = 0; i < $hashes.length; i++)
			{
				$hash = $hashes[i].split('=');
				$hash[1] = unescape($hash[1]);
				$return.push($hash[0]);
				$return[$hash[0]] = $hash[1];
			}
		 
			return $return;
		}

	    // Votar Star
	    function votar_star(){
			$(".votar_star").hover(function (){
				for (var i = 1; i <= $(this).attr('dir'); i++) {
					$('.votar_star[dir='+i+']').removeClass('fa-star-o');
					$('.votar_star[dir='+i+']').addClass('fa-star');
				};
			}, function(){
				$('.votar_star').removeClass('fa-star');
				$('.votar_star').addClass('fa-star-o');
			});
			$(".votar_star").on("click", function(){
				$('input[name=star]').val($(this).attr('dir'));

				$('.votar_star').addClass('votar_star1');
				$('.votar_star').removeClass('votar_star');

				$('.votar_star1').removeClass('fa-star');
				$('.votar_star1').addClass('fa-star-o');
				for (var i = 1; i <= $(this).attr('dir'); i++) {
					$('.votar_star1[dir='+i+']').removeClass('fa-star-o');
					$('.votar_star1[dir='+i+']').addClass('fa-star');
				};
			});
	    }

		// Ordenar div
		function ordenar_div($id){
			var $container = document.getElementById($id);
			var $elements = $container.childNodes;
			var $sortMe = [];
			for (var i=0; i<$elements.length; i++) {
				if(!$elements[i].id)
					continue;
				var $sortPart = $elements[i].id.split("-");
				if($sortPart.length > 1)
					$sortMe.push([1*$sortPart[1], $elements[i]]);
			}
			$sortMe.sort(function(x, y){
				return x[0]-y[0];
			});
			for(var i=0; i<$sortMe.length; i++)
				$container.appendChild($sortMe[i][1]);
		}

		function ordenar_select($id) {
			/*
			var lb = document.getElementById($id);
			arr = new Array();
			$val = 0;

			for(i=0; i<lb.length; i++)  {
				arr[i] = lb.options[i].text+';;z;;'+lb.options[i].value+';;z;;'+lb.options[i].selected;
			}
			arr.sort();

			for(i=0; i<lb.length; i++)  {
				$ex = arr[i].split(';;z;;');
			  	lb.options[i].text = $ex[0];
			  	lb.options[i].value = $ex[1];
			  	if($ex[2] == 'true'){
			  		$val = $ex[1];
			  	}
			}
			$('#'+$id).val($val).trigger('change');
			*/
		}

		// Sem Acento
		function sem_acento($strToReplace) {
		    $str_acento = "áàãâäéèêëíìîïóòõôöúùûüçÁÀÃÂÄÉÈÊËÍÌÎÏÓÒÕÖÔÚÙÛÜÇ";
		    $str_sem_acento = "aaaaaeeeeiiiiooooouuuucAAAAAEEEEIIIIOOOOOUUUUC";
		    var $return = "";
		    for (var i = 0; i < $strToReplace.length; i++) {
		        if ($str_acento.indexOf($strToReplace.charAt(i)) != -1) {
		            $return += $str_sem_acento.substr($str_acento.search($strToReplace.substr(i, 1)), 1);
		        } else {
		            $return += $strToReplace.substr(i, 1);
		        }
		    }
		    return $return;
		}

		// Widht Resp
		function widht_resp(){
			$return = $('body').width();
			var userAgent = navigator.userAgent.toLowerCase();
			if( userAgent.search(/(android|avantgo|blackberry|bolt|boost|cricket|docomo|fone|hiptop|mini|mobi|palm|phone|pie|tablet|up\.browser|up\.link|webos|wos)/i)!= -1 ){
				$return = 300;
			}
		    return $return;
		}

		// Browser
		function browser(){
			if(/*@cc_on!@*/false || typeof ScriptEngineMajorVersion === "function"){
			    $return = 'ie';
			} else if(window.chrome) {
				$return = 'chrome';
			} else if(window.opera) {
				$return = 'opera';
			} else if('MozBoxSizing' in document.body.style) {
				$return = 'firefox';
			} else if({}.toString.call(window.HTMLElement).indexOf('Constructor')+1) {
				$return = 'safari';
			} else {
				$return = 'outros';
			}
			return $return;
		}


	    // Limit Char
	    function progreso_tecla($obj, $max, $id) {
			var $ancho=300;
			var $progreso = document.getElementById('progreso_'+$id);
			$cor = '';
			if ($obj.value.length < $max){
				var pos = $ancho-parseInt(($ancho*parseInt($obj.value.length))/300);
				$progreso.style.backgroundPosition = '-'+pos+'px 0px';
			} else {
				$cor = 'color:#f00';
				//alert('Use somente '+$max+' caracteres');
			} 
			$progreso.innerHTML = '<span style="'+$cor+'">('+$obj.value.length+' caracteres usados de '+$max+')</span>';
	    } 

		// Input design
        function input_file_site(e, $classe){
            $itens = 0;
            for (var i = 0; i < e.files.length; i++) {
                $itens += 1;
            }
            if($itens == 1){
    	        $("."+$classe).html( $itens+" Arquivo Selecionado" );
	        } else {
    	        $("."+$classe).html( $itens+" Arquivos Selecionados" );
	        }
        };
		function input_file(e, $classe){
			$itens = 0;
			for (var i = 0; i < e.files.length; i++) {
				$itens += 1;
			}
			if($itens == 1){
				$(e).parent().find("span>span").html( $itens+' Arquivo Selecionado' );
			} else {
				$(e).parent().find("span>span").html( $itens+' Arquivos Selecionados' );
			}
		};
		function input_file_hover(){
			$('.input.file, .pop_file').hover(function (){
				$(this).parent().find('.pop_file').stop().show();
			}, function () {
				$(this).parent().find('.pop_file').stop().hide();
			});
		};

		// Shuffle -> Array Aleatorio
		function shuffle($array) {
		    var j, x, i;
		    for (i = $array.length; i; i -= 1) {
		        j = Math.floor(Math.random() * i);
		        x = $array[i - 1];
		        $array[i - 1] = $array[j];
		        $array[j] = x;
		    }
		}

		// Cep
		function cep(e){
			cepp(e);
		}
		function cepp(e, $pre, $n_alert){
			$pre = $pre  ? $pre : '';
			$cep = $(e).val().trim().replace('.', '').replace('-', '');
			if($cep.length >= 8){
				$.ajax({
					type: "POST",
					url: DIR+"/app/Ajax/Padroes/cep.php",
					data:  { cep: $cep },
					dataType: "json",
					beforeSend: function(){ ajaxIni_endereco(0); },
					error: function($request, $error){ ajaxErro($request, $error); },
					success: function($json){
						cepp_vals(e, $pre, $json.rua, $json.estados, $json.cidades, $json.bairros);

						if($json.erro == 1){
							$.ajax({
								type: "POST",
								url: HTTP+'://www.republicavirtual.com.br/web_cep.php?formato=json&cep='+$cep,
								data: '',
								error: function($request, $error){ cepp_nao_encontrado(); $(".carregando").carregando_endereco(); },
								success: function($json){
									if($json.uf){
										var $uf = unescape($json.uf).split(" ");
										cepp_vals(e, $pre, $json.tipo_logradouro+' '+$json.logradouro, $uf[0], $json.cidade.replaceAll("%20", " "), $json.bairro);
									} else {
										cepp_nao_encontrado();
										$(".carregando_endereco").show();
									}
								}
							});
						} else {
							$(".carregando_endereco").show();
						}
					}
				});
			} else if(!$n_alert) {
				alerts(0, 'Digite o CEP Corretamente Para Buscar o Endereço Automaticamente!');
			}
		}
		function cepp_nao_encontrado(){
			$("#cidades_html, #estados_html").hide();
			$("#cidades, #estados").attr('type', 'text');
		}
		function cepp_fields(e){ /*(boxx) */
			cepp(e, '.boxx ');
		}

		function cepp_vals(e, $pre, $rua, $estados, $cidades, $bairros){

			$tipo = $(e).attr('id').replace('cep', '');
			$($pre+'#rua'+$tipo).val($rua);

			// Rel
			$($pre+'#estados'+$tipo).attr('cidade', $cidades).attr('bairro', $bairros);

			$($pre+'#bairro'+$tipo).val($bairros);
			$($pre+'#bairros'+$tipo).val($bairros);

			$($pre+'#cidades_html'+$tipo).html($cidades);
			$($pre+'#cidades'+$tipo).val($cidades);

			if($estados){
				$($pre+'#estados_html'+$tipo).html($estados);
				$($pre+'#estados'+$tipo).val($estados).trigger('change');
			}

		}

		//$json = ajaxRapido("../Lang/default.json");
		//var $langgs = jQuery.parseJSON($json);
		function langg($palavra){
			$return = $palavra;
			$.each($langgs, function($key, $value) {
				if($palavra == $key && $value){
					$return = $value;
				}
			});	
			return $return;
		}

		// Video
		function videoo($acao, $id){
			if($acao == 'play'){
				$_Video[$id].play();
				$('.video_banner.video_'+$id+' .videoo').show();
				$('.video_banner.video_'+$id+' .faa-times').show();
				$('.video_banner.video_'+$id+' .faa-play').hide();
				$('.video_banner.video_'+$id+' .faa-pause').show();

			} else if($acao == 'pause'){
				$_Video[$id].pause();
				$('.video_banner.video_'+$id+' .faa-pause').hide();
				$('.video_banner.video_'+$id+' .faa-play').show();

			} else if($acao == 'volume_on'){
				$_Video[$id].muted = true;
				$('.video_banner.video_'+$id+' .faa-volume-up').addClass('dn');
				$('.video_banner.video_'+$id+' .faa-volume-off').removeClass('dn');

			} else if($acao == 'volume_off'){
				$_Video[$id].muted = false;
				$('.video_banner.video_'+$id+' .faa-volume-off').addClass('dn');
				$('.video_banner.video_'+$id+' .faa-volume-up').removeClass('dn');
			}

		}
		function videoo_fechar($id){
			$_Video[$id].currentTime = 99999999999;
			$('.video_banner .videoo').hide();
			$('.video_banner .faa-times').hide();
			videoo_zera();
		}
		function videoo_zera(){
			$('.video_banner .faa-pause').hide();
			$('.video_banner .faa-play').show();
		}

		function checkboxx($e){
			console.log($e);
			if($($e).hasClass("checked") == true){
				$($e).removeClass("checked");
				$($e).find('input[type="checkbox"]').prop("checked", false);
			} else {
				$($e).addClass("checked");
				$($e).find('input[type="checkbox"]').prop("checked", true);
			}
		}
	// FUNCOES UTEIS



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



	// EDITOR
		// Preencher Campos Corretos (date, editor, etc...) Antes do Submit
		function preencher_campos_corretos(){
			// Date
			$('[type=date][navegador=firefox]').each(function(){
				$ex = $(this).val().split("/");
				$(this).parent().find('[type1=date]').val( $ex[2]+'-'+$ex[1]+'-'+$ex[0] );
			});

			// Editor
			$('.finput.finput_editor').each(function(){
				$id = $(this).find('textarea').attr('id');
		        $('#'+$id).val( CKEDITOR.instances[$id].getData() );
			});
		};

		// Editor Criar Textarea
		function editor_criar_extarea($id) {
			CKEDITOR.replace($id);

			CKEDITOR.config.toolbar = [
										{ name: 'document', items: [ 'Source', '-', 'NewPage', 'Templates', 'Preview', 'Print', '-' ] },
										{ name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike' ] },
										{ name: 'clipboard', items: [ 'Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo', '-', 'Find', 'Replace', 'SelectAll', ] },
										{ name: 'forms', items: [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button', 'ImageButton', 'HiddenField' ] },
										'/',
										{ name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
										{ name: 'colors', items: [ 'TextColor', 'BGColor' ] },
										{ name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock' ] },
										{ name: 'insert', items: [ 'Image', 'Flash', 'Table', 'Link', 'Iframe' ] },
										{ name: 'tools', items: [ 'Maximize' ] },
									];

			// Atualizando textarea
			var $editor = CKEDITOR.instances[$id] ;
			$editor.on('contentDom', function() {
			    var $editable = $editor.editable();
			    $editable.attachListener( $editor.document, 'keyup', function() {
			        $('#'+$id).val( CKEDITOR.instances[$id].getData() );
			    });
				CKEDITOR.on( 'instanceReady', function( ev ) { // Focus quando clicar em qualquer lugar onde insere o texto
					$('iframe.cke_wysiwyg_frame', ev.editor.container.$).contents().on('click', function() {
					    ev.editor.focus();
					});
				});
			});
		}
		function editor_criar_normal($id, $html) {
			var $config = {};
			$editor = CKEDITOR.appendTo( $id, $config, $html );
		}
	// EDITOR


	// VALIDACOES
		function required_invalid($classe, $tempo){
			setTimeout(function(){
		        $($classe).find('[required]').on("invalid", function(event) {
		        	$nome = $(this).find_parent('class', 'finput').find('label p').html();
		        	if(!$nome || $nome==undefined)
		        		$nome = $(this).find_parent('tags', 'fieldset').find('legend').html();
	        		$tabs = $(this).find_parent('class', 'itens').parent().attr('tabs');
	        		$tabs = $(this).find_parent('class', 'tabs').find('ul li[tabs="'+$tabs+'"] > a').html();
	        		$aba = $tabs ? '(Aba: '+$tabs+')' : '';
		        	$nome = !$nome ? $(this).attr("name") : $nome;
		        	alerts(0, 'Preencha o campo: '+$nome.replaceAll(':', '')+' '+$aba, 1);
		        });
			}, $tempo ? $tempo : 0.5);
		}
		/*
		function requireds_ini($classe, $tipo){
			setTimeout(function(){
				$html = $($classe).html().replaceAll('script', 'div class="dni"');
				$('.requireds').html( $html );
				if($tipo) requireds($classe, ".req_tipo_1", ".req_tipo_0");
				else	  requireds($classe, ".req_tipo_0", ".req_tipo_1");
			}, 0.5);
		}			
		function requireds($classe, $valide, $guardar){
			$($classe+' '+$valide).html( $('.requireds '+$valide).html() );
			$($classe+' '+$guardar).html('');
			required_invalid($classe);
			mascaras();
		}
		*/
	// VALIDACOES



	// CROPPERJS
		function cropp($id_img, $width=1, $height=1){
		    var image = document.getElementById($id_img);
		    var button = document.getElementById($id_img+'_button');
		    var result = document.getElementById($id_img+'_result');
		    var croppable = false;
		    var cropper = new Cropper(image, {
		        aspectRatio: $width/$height,
		        viewMode: 1,
		        zoomable: false,
		        ready: function() {
		            croppable = true;
		        },
				//crop: function(event) { },
		    });

			button.onclick = function () {
				result.innerHTML = '';
				result.appendChild(cropper.getCroppedCanvas());
			};
		}
	// CROPPERJS



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------




	// CRIANDO CSS
		var $respondivooo  = new Array('dn_', 			'dnn_',				'db_',				'dib_',						'dii_',						'w100p_',		'h100p_',		'w-a_',			'h-a_',			'p0_',			'pt0_',				'pb0_',					'pl0_',				'pr0_',				'm0_',			'mt0_',				'mb0_',				'ml0_',				'mr0_',				'm-a_',			'fln_',			'fll_',			'flr_',			'posa_',				'posf_',			'poss_',			'tac_',					'tal_',				'tar_',					'jc_',						'jr_',							'bd0_',			'back0_');
		var $respondivooo1 = new Array('display:none', 	'display:block',	'display:block',	'display:inline-block',		'display:inline-block',		'width: 100%',	'height: 100%',	'width: auto',	'height: auto',	'padding: 0',	'padding-top: 0',	'padding-bottom: 0',	'padding-left: 0',	'padding-right: 0',	'margin: 0',	'margin-top: 0',	'margin-bottom: 0',	'margin-left: 0',	'margin-right: 0',	'margin: auto',	'float: none',	'float: left',	'float: right',	'position: absolute',	'position: fixed',	'position: static',	'text-align: center',	'text-align: left',	'text-align: right',	'justify-content: center',	'justify-content: flex-end',	'border:0',		'background: none');
		function criar_css($classe_paii){
			$classe_all = '';

			$classe_paii = $classe_paii ? $classe_paii+' *' : '*';
			$classe_pai = classe_pai($classe_paii);

			var $css = new Array();
			$x=0;
			$y=0;
			$($classe_pai).each(function(){
				$classe = $(this).attr('class');
				if($classe){
					$array = $classe.split(" ");
					$.each($array, function($key, $val) {
						$val = $val.trim();
						if(verificando_classes($val)){
							if($css.indexOf($val) < 0){
								$css[$x] = $val;
								$x++;
							}
						}
						// Respondivo
						$.each($respondivooo, function($key1, $val1) {
							$val = $val.trim();
							if($val.match($val1)){
								if($css.indexOf($val) < 0){
									$css[$x] = $val;
									$x++;
								}
							}
						});	
					});	
					$y++;
					$classe_all += $classe+' || ';
				}
			});

			var $css_final = '';
			$.each($css, function($key, $val) {
				$css_final += criando_css($val);
				//console.log($val);
			});	
			//console.log($classe_paii+' '+$y+' - '+$classe_all);

			$('.events_externos .style').append('<style>'+$css_final+'</style>');
		}
		// IMPORTANT
		function css_important($ex){
			$return = '';
			for ($i=0; $i < 10; $i++) { 
				$return += ($ex[$i] && $ex[$i]=='i') ? ' !important' : '';
			}
			return $return;
		}
		// CRIANDOOO
		function criando_css($value){
			$css = '';
			$attr = '';
			$val = '';
			$style = '';
			$outros = '';
			$outros1 = $value.match("hover_") ? ':hover' : '';
			$mdeia = '';

			// BACKGROUND
				if($value.match("back_")){
					$attr = 'background';
					$ex = $value.split("_");
					if($ex[1]){
						if($ex[1] == 'hover' && $ex[2]){
							$val = '#'+$ex[2]+css_important($ex);
						} else 	if($ex[2] && $ex[2] != 'i') {
						    $val = 'filter:progid:DXImageTransform.Microsoft.gradient(startColorstr="'+"#"+$ex[1]+'", endColorstr="'+"#"+$ex[2]+'");  background:-moz-linear-gradient(top, '+"#"+$ex[1]+', '+"#"+$ex[2]+'); background:-webkit-gradient(linear, left top, left bottom, from('+"#"+$ex[1]+'), to('+"#"+$ex[2]+'));'; 
						} else {
							$val = '#'+$ex[1]+css_important($ex);
						}
					}
				}
			// BACKGROUND

			// BORDER
				else if($value.match("bd_") || $value.match("bdt_") || $value.match("bdb_") || $value.match("bdr_") || $value.match("bdl_")){
					$attr = 'border';
					if($value.match('bdt_'))			$attr = 'border-top';
					else if($value.match('bdb_'))	$attr = 'border-bottom';
					else if($value.match('bdl_'))	$attr = 'border-left';
					else if($value.match('bdr_'))	$attr = 'border-right';
					$ex = $value.split("_");
					if($ex[1]){
						if($ex[1] == 'hover' && $ex[2]){
							$val = '1px solid #'+$ex[2]+css_important($ex);
						} else {
							$val = '1px solid #'+$ex[1]+css_important($ex);
						}
					}
				}
			// BORDER

			// BORDER WIDTH
				else if($value.match("bdw")){
					$attr = 'border-width';
					$ex = $value.split("bdw");
					if($ex[1]){
						$val = $ex[1]+'px !important';
					}
				}
			// BORDER WIDTH

			// COLOR
				else if($value.match("cor_")){
					$attr = 'color';
					$outros = 'a.'+$value+$outros1+', ';
					$ex = $value.split("_");
					if($ex[1]){
						if($ex[1] == 'hover' && $ex[2]){
							$val = '#'+$ex[2]+css_important($ex);
						} else {
							$val = '#'+$ex[1]+css_important($ex);
						}
					}
				}
			// COLOR


			// MIN, MAX, W E H
				else if($value.match("min-w") || $value.match("max-w") || $value.match("min-h") || $value.match("max-h")){
					if($value.match('min-w')){
						$attr = 'min-width';
						$attr1 = 'min-w';
					} else if($value.match('max-w')){
						$attr = 'max-width';
						$attr1 = 'max-w';
					} else if($value.match('min-h')){
						$attr = 'min-height';
						$attr1 = 'min-h';
					} else if($value.match('max-h')){
						$attr = 'max-height';
						$attr1 = 'max-h';
					}
					$ex = $value.split($attr1);
					if($ex[1]){
						$val = $ex[1]+'px !important';
					}
				}
			// MIN, MAX, W E H

			// CALC
				else if($value.match("calc") && !$value.match("max-") && !$value.match("min-")){
					$attr = 'width';
					$ex = $value.split("calc");
					if($ex[1]){
						$val = '-webkit-calc(100% - '+$ex[1]+'px) !important;width:-moz-calc(100% - '+$ex[1]+'px) !important;width:calc(100% - '+$ex[1]+'px) !important';
					}
				}
			// CALC


			// BORDER RADUIS
				else if($value.match("brt")){
					$ex = $value.split("brt");
					if($ex[1]){
						$style = '.brt'+$ex[1]+'{-webkit-border-radius:'+$ex[1]+'px '+$ex[1]+'px 0 0 !important;-moz-border-radius: '+$ex[1]+'px '+$ex[1]+'px 0 0 !important;border-radius: '+$ex[1]+'px '+$ex[1]+'px 0 0 !important}';
					}
				}
				else if($value.match("brb")){
					$ex = $value.split("brb");
					if($ex[1]){
						$style = '.brb'+$ex[1]+'{-webkit-border-radius:0 0 '+$ex[1]+'px '+$ex[1]+'px !important;-moz-border-radius: 0 0 '+$ex[1]+'px '+$ex[1]+'px !important;border-radius: 0 0 '+$ex[1]+'px '+$ex[1]+'px !important}';
					}
				}
				else if($value.match("brl")){
					$ex = $value.split("brl");
					if($ex[1]){
						$style = '.brl'+$ex[1]+'{-webkit-border-radius:'+$ex[1]+'px 0 0 '+$ex[1]+'px !important;-moz-border-radius: '+$ex[1]+'px 0 0 '+$ex[1]+'px !important;border-radius: '+$ex[1]+'px 0 0 '+$ex[1]+'px !important}';
					}
				}
				else if($value.match("brr")){
					$ex = $value.split("brr");
					if($ex[1]){
						$style = '.brr'+$ex[1]+'{-webkit-border-radius:0 '+$ex[1]+'px '+$ex[1]+'px 0 !important;-moz-border-radius: 0 '+$ex[1]+'px '+$ex[1]+'px 0 !important;border-radius: 0 '+$ex[1]+'px '+$ex[1]+'px 0 !important}';
					}
				}
				else if($value.match("br")){
					$ex = $value.split("br");
					if($ex[1]){
						$style = '.br'+$ex[1]+'{-webkit-border-radius:'+$ex[1]+'px !important;-moz-border-radius: '+$ex[1]+'px !important;border-radius: '+$ex[1]+'px !important}';
					}
				}
			// BORDER RADUIS


			// RESPONSIVO
				$.each($respondivooo, function($key1, $val1) {
					if($value.match($val1)){
						$ex = $value.split($val1);
						if($ex[1]){
							$style = '@media(max-width: '+$ex[1]+'px){.'+$value+'{'+$respondivooo1[$key1]+' !important;}} ';
						}
						if($value.match("dnn_") || $value.match("dib_") || $value.match("dii_")){
							$style = '.'+$value+'{display: none !important;}'+$style;
						}
					}
				});	
			// RESPONSIVO



			if($attr && $val){
				$style = $outros+'.'+$value+$outros1+'{'+$attr+':'+$val+'}';
			}
			if($mdeia){
				$style = '@media(max-width: '+$mdeia+'px){'+$style+'} ';
				if($mdeia_extra){
					$style = $mdeia_extra+$style;
				}
			}

			//console.log($style);
			return $style;
		}

		// Classe Pai
		function classe_pai($classe){
			$return  = $classe+'[class*="back_"],';
			$return += $classe+'[class*="bd_"],';
			$return += $classe+'[class*="bdt_"],';
			$return += $classe+'[class*="bdb_"],';
			$return += $classe+'[class*="bdl_"],';
			$return += $classe+'[class*="bdr_"],';
			$return += $classe+'[class*="bdw"],';
			$return += $classe+'[class*="cor_"],';

			$return += $classe+'[class*="min-w"],';
			$return += $classe+'[class*="max-w"],';
			$return += $classe+'[class*="min-h"],';
			$return += $classe+'[class*="max-h"],';

			$.each($respondivooo, function($key1, $val1) {
				$return += $classe+'[class*=" '+$val1+'"],';
			});

			for ($i=1; $i<=60; $i++) {
				$return += $classe+'[class~="br'+$i+'"],';
				$return += $classe+'[class~="brt'+$i+'"],';
				$return += $classe+'[class~="brb'+$i+'"],';
				$return += $classe+'[class~="brl'+$i+'"],';
				$return += $classe+'[class~="brr'+$i+'"],';
				if($i==10 || $i==15 || $i==20 || $i==25 || $i==30 || $i==35 || $i==40 || $i==45 || $i==50){
					$i = $i+4;
				}
			}

			$return += $classe+'[class*="calc"]';

			return $return;
		}

		// Verificando Classes
		function verificando_classes($val){
			$return = 0;
			if($val.match('back_'))			$return = 1;
			else if($val.match('bd_'))		$return = 1;
			else if($val.match('bdt_'))		$return = 1;
			else if($val.match('bdb_'))		$return = 1;
			else if($val.match('bdl_'))		$return = 1;
			else if($val.match('bdr_'))		$return = 1;
			else if($val.match('bdw'))		$return = 1;
			else if($val.match('cor_'))		$return = 1;

			else if($val.match('min-w'))	$return = 1;
			else if($val.match('max-w'))	$return = 1;
			else if($val.match('min-h'))	$return = 1;
			else if($val.match('max-h'))	$return = 1;

			else if($val.match('calc'))		$return = 1;

			else if($val.match('br1')  || $val.match('br2')  || $val.match('br3')  || $val.match('br4')  || $val.match('br5')  || $val.match('br6')  || $val.match('br7')  || $val.match('br8')  || $val.match('br9'))		$return = 1;
			else if($val.match('brt1') || $val.match('brt2') || $val.match('brt3') || $val.match('brt4') || $val.match('brt5') || $val.match('brt6') || $val.match('brt7') || $val.match('brt8') || $val.match('brt9'))		$return = 1;
			else if($val.match('brb1') || $val.match('brb2') || $val.match('brb3') || $val.match('brb4') || $val.match('brb5') || $val.match('brb6') || $val.match('brb7') || $val.match('brb8') || $val.match('brb9'))		$return = 1;
			else if($val.match('brl1') || $val.match('brl2') || $val.match('brl3') || $val.match('brl4') || $val.match('brl5') || $val.match('brl6') || $val.match('brl7') || $val.match('brl8') || $val.match('brl9'))		$return = 1;
			else if($val.match('brr1') || $val.match('brr2') || $val.match('brr3') || $val.match('brr4') || $val.match('brr5') || $val.match('brr6') || $val.match('brr7') || $val.match('brr8') || $val.match('brr9'))		$return = 1;

			return $return;					
		}
	// CRIANDO CSS




	// ----------------------------------------------------------------------------------------------------------------------------------------------------------




	// JQUERY ATALHOS
		// Find Parent
		$.fn.find_parent = function($classe, $nome){
			$return = $(this)
			if($classe == 'tags' || $classe == 'tag'){
				$parent = $(this);
				$x=0;
				for (var $i=0; ($i<100 && $x<1); $i++){
					$parent = $parent.parent();
					if($parent.prop("tagName")){
						if( $parent.prop("tagName").toLowerCase() == $nome )
							$x++;
					}
				};
				$return = $parent;
			} else if($classe=='class'){
				$parent = $(this);
				$x=0;
				for (var $i=0; ($i<100 && $x<1); $i++){
					$parent = $parent.parent();
					if($parent.hasClass($nome))
						$x++;
				};
				$return = $parent;
			} else {
				$parent = $(this);
				$x=0;
				for (var $i=0; ($i<100 && $x<1); $i++){
					$parent = $parent.parent();
					if( $parent.attr($classe) == $nome )
						$x++;
				};
				$return = $parent;
			}
			return $return;
		}

		function trg($classe){					trigger($classe) };
		function trigger($classe){				$($classe).stop(true, true).trigger("click");	};

		function show($classe, $tempo){			$($classe).stop(true, true).show($tempo ? $tempo : ''); }
		function hide($classe, $tempo){ 		$($classe).stop(true, true).hide($tempo ? $tempo : ''); };
		function toggle($classe, $tempo){ 		$($classe).stop(true, true).toggle($tempo ? $tempo : ''); };

		function fshow($classe, $tempo){		fadeIn($classe); };
		function fhide($classe, $tempo){		fadeOut($classe); };
		function ftoggle($classe, $tempo){		fadeToggle($classe); };
		function fadeIn($classe, $tempo){		$($classe).stop(true, true).fadeIn($tempo ? $tempo : ''); };
		function fadeOut($classe, $tempo){		$($classe).stop(true, true).fadeOut($tempo ? $tempo : ''); };
		function fadeToggle($classe, $tempo){	$($classe).stop(true, true).fadeToggle($tempo ? $tempo : ''); }

		function sshow($classe, $tempo){		slideDown($classe); };
		function shide($classe, $tempo){		slideUp($classe); };
		function stoggle($classe, $tempo){		slideToggle($classe); };
		function slideUp($classe, $tempo){		$($classe).stop(true, true).slideUp($tempo ? $tempo : ''); };
		function slideDown($classe, $tempo){	$($classe).stop(true, true).slideDown($tempo ? $tempo : ''); };
		function slideToggle($classe, $tempo){	$($classe).stop(true, true).slideToggle($tempo ? $tempo : ''); }

		function submitt($classe){				setTimeout(function(){ $($classe).submit(); }, 0.5); };
		function css($classe, $acao1, $acao2){	$($classe).css($acao1, $acao2); };
		function setTime($funcao, $tempo){		setTimeout(function(){ $funcao }, $tempo ? $tempo*1000 : 1000); };

		function enter($evento, ev, e){
			if(ev.keyCode == 13) // ev.which esc = 27  // enter('evento', event, this)
				eval($evento);
		};
		function enter_click($classe, ev){ // enter_click('classe', event)
			if(ev.keyCode == 13)
				$($classe).trigger('click');
		};
	// JQUERY ATALHOS



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



	// ABA ATIVA
		$ativa_atual = 0;
		$(window).on("blur focus", function(e) {
		    var prevType = $(this).data("prevType");
		    if (prevType != e.type) {   //  reduce double fire issues
		        switch (e.type) {
		            case "focus":
		            	setTimeout(function(){
			            	$ABA_ATIVA = 1;
			            	$('.ABA_PARADA').hide();
		            	}, 200);
		                break;
		            case "blur":
		            	$ativa_atual++;
		            	$ABA_ATIVA = 0;
		            	aba_parada($ativa_atual);
		                break;
		        }
		    }
		    $(this).data("prevType", e.type);
		})
		function aba_parada($x){
	    	setTimeout(function(){
	    		if(!$ABA_ATIVA && $x == $ativa_atual){
        	    	$('.ABA_PARADA').show();
    			}
	    	}, 10*1000);
		}
		function aba_ativa(){
	    	$ABA_ATIVA = 0;
		}
	// ABA ATIVA

	// IFF
		function iff($condicao, $resp1='', $resp2=''){
			$return = $condicao ? $resp1 : $resp2;
			return $return;
		}
	// IFF

	// COOKIES
		function lerCookie($c_name){
			var i,x,y,ARRcookies=document.cookie.split(";");
			for (i=0;i<ARRcookies.length;i++){
				x=ARRcookies[i].substr(0,ARRcookies[i].indexOf("="));
				y=ARRcookies[i].substr(ARRcookies[i].indexOf("=")+1);
				x=x.replace(/^\s+|\s+$/g,"");
				if (x==$c_name){
					return unescape(y);
				}
			}
		}
		function gravarCookie($c_name, $value, $exdays){
			var $exdate=new Date();
			$exdate.setDate($exdate.getDate() + $exdays);
			var $c_value=escape($value) + (($exdays==null) ? "" : "; expires="+$exdate.toUTCString());
			document.cookie=$c_name + "=" + $c_value;
		}
	// COOKIES


	// CHAMANDO CLASS
		function neww($classe, $admin='') {
			$(document).ready(function() {
				$script = '<script type="text/javascript" src="'+DIR+'/'+$classe+'.js"></script>';
				$("body").append($script);
			});
		}
	// CHAMANDO CLASS

	// ECHO
		function echo($txt) {
			return document.write($txt);
		}
	// ECHO

	// PRINT_R
		function pre($text){
			console.log($text);
		}
		function pre1($obj) {
 			var $return = '';
			Object.keys($obj).forEach(function($key) {
			    $return += $obj[$key]+'<br>';
			});
			return $return;
		}
		function pre2($obj) {
 			var $return = '';
			Object.keys($obj).forEach(function($key) {
			    $return += key+' => '+$obj[$key]+'<br>';
			});
			return $return;
		}
	// PRINT_R



	// ----------------------------------------------------------------------------------------------------------------------------------------------------------



	// PLUGINS

		// OwlCarousel -> https://owlcarousel2.github.io/OwlCarousel2/demos/demos.html
		function Plugin1(){
			//$(".Plugin1").before('<div class="Plugin1_temp" style="height: '+$(".Plugin1 img").css('max-height')+';"></div>');
			//$(".Plugin1").hide();
			//setTimeout(function(){
				$(".Plugin1").each(function() {
					// CARROCEL MOBILE
						if($(this).hasClass("Plugin_mobile") == true){
							$(this).addClass('dn_1000');
							$(this).after('<div class="Plugin1_mobile dnn_1000">'+$(this).html()+'</div>');
						}
					// CARROCEL MOBILE

					$(this).addClass('Plugin owl-carousel');
					$itens = $(this).attr('itens') ? $(this).attr('itens') : 5;
					$banner = $(this).attr('itens')==1 ? true : false;
					$no_loop = $(this).attr('no_loop')==1 ? false : true;
					$auto = $(this).attr('auto')==0 ? false : true;
					$auto_time = $(this).attr('auto')==0 ? false : $(this).attr('auto')*1000;
					$altura_flexcivel = $(this).attr('altura_flexcivel')==0 ? false : true;

					//$resp_450 = $(this).attr('resp_450') ? $(this).attr('resp_450') : (parseInt($itens)==1 ? 1 : 2 );
					$resp_700 = $(this).attr('resp_700') ? $(this).attr('resp_700') : parseInt($itens);
					$resp_1000 = $(this).attr('resp_1000') ? $(this).attr('resp_1000') : parseInt($itens);

					$itens_mysql = $(this).find("> *").length;
					if($itens_mysql <= $itens){
						$no_loop = false;
						$(this).addClass("no_seta");
						$(this).addClass("no_pagg");
					}

					$responsiveClass = true;

					var owl = $(this).owlCarousel({
				      	nav: true,
						items: parseInt($itens),
						loop: $no_loop,
				      	singleItem: $banner,
					    autoplay: $auto,
					    autoplayTimeout: $auto_time,
					    autoplayHoverPause: true,
	      				autoHeight: $altura_flexcivel, // Altura Flexcivel

					    smartSpeed: 550,

    					responsiveClass:true,
						responsive:{
					        0:{
					            items:1,
					        },
					        450:{
					            items: $resp_700,
					        },
					        700:{
					            items: $resp_1000,
					        },
					        1000:{
					            items: parseInt($itens),
					        }
						}
					});


					// EFEITO ANIMATED
						owl.on('change.owl.carousel', function(event) {
						    var $currentItem = $('.owl-item', owl).eq(event.item.index);
						    var $elemsToanim = $currentItem.find("[data-animation-out]");
						    Plugin1_setAnimation($elemsToanim, 'out');
						});

						var round = 0;
						owl.on('changed.owl.carousel', function(event) {

						    var $currentItem = $('.owl-item', owl).eq(event.item.index);
						    var $elemsToanim = $currentItem.find("[data-animation-in]");

						    Plugin1_setAnimation($elemsToanim, 'in');
						})

						owl.on('translated.owl.carousel', function(event) {
						    //console.log(event.item.index, event.page.count);

						    if (event.item.index == (event.page.count - 1)) {
						        if (round < 1) {
						            round++
						            //console.log(round);
						        } else {
						            owl.trigger('stop.owl.autoplay');
						            var owlData = owl.data('owl.carousel');
						            owlData.settings.autoplay = false;
						            owlData.options.autoplay = false;
						            owl.trigger('refresh.owl.carousel');
						        }
						    }
						});
					// EFEITO ANIMATED
				});
				//$(".Plugin1").show();
				//$(".Plugin1_temp").hide();
			//}, 1000);
		}
		function Plugin1_a($n){
			$('.Plugin1').data('owl.carousel').to($n, 300, true);
		}
		function Plugin1_setAnimation(_elem, _InOut) {
		    var animationEndEvent = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

		    _elem.each(function() {
		        var $elem = $(this);
		        var $animationType = 'animated ' + $elem.data('animation-' + _InOut);

		        $elem.addClass($animationType).one(animationEndEvent, function() {
		            $elem.removeClass($animationType);
		        });
		    });
		}



		function Plugin2(){
		}
		function Plugin2_a($n){
			$('.Plugin2').trigger('owl.goTo', $n)
		}




		// Lightslider -> http://sachinchoolur.github.io/lightslider/
		function Plugin3(){
			$(".Plugin3").each(function() { // Nao colocar Width fixa
				$itens = $(this).attr('itens') ? $(this).attr('itens') : 0;
				$auto = $(this).attr('auto') ? $(this).attr('auto')*1000 : false;
				$direction = false;
				if($(this).attr('vertical')==1){
					$width = false;
					$direction = true;
				}
				$galeria = false;
				$thumb = 0;
				if($(this).attr('galeria')){
					$galeria = true;
					$thumb = $(this).attr('galeria');
				}
				$(this).lightSlider({
					//autoWidth: 200, // Nao se adapta mto bem (recomendo n usar, so se precisar mesmo de uma altura fixa)
    				item: $itens, // Itens por vez
    				auto: $auto,
    				pause: $auto,
				    vertical: $direction, // Vertical ou Horizontal
				    //verticalHeight: 200, // Altura Vertical

				    // Galeria
					gallery: $galeria,
	                thumbItem: $thumb,
	                onSliderLoad: function() {
	                    $(this).removeClass('cS-hidden');
	                }  
	            });
            });
		}

		// Waterfall -> http://raphamorim.com/waterfall.js/
		function Plugin_Galeria(){
			setTimeout(function(){
				$(".Plugin_Galeria").each(function() { // Nao colocar padding e nem margin no li
					waterfall(this);
				});
			}, 1000);
		}

		// ElevateZoom -> http://www.elevateweb.co.uk/image-zoom/examples
		function Plugin_Zoom(){
			$(".Plugin_Zoom").each(function() {
				$zoom_w = $(this).attr('zoom_w') ? $(this).attr('zoom_w') : 300;
				$zoom_h = $(this).attr('zoom_h') ? $(this).attr('zoom_h') : 300;
				$(this).elevateZoom({
					zoomWindowWidth: $zoom_w,
					zoomWindowHeight: $zoom_h,
					cursor: "crosshair",
					easing : true, // Movimento leve apos para a imagem
					tint:true, // Fundo na Imagem
					tintColour:'#000', // Cor do Fundo na Imagem
					tintOpacity:0.5, // Opacity do Fundo na Imagem
					scrollZoom : true, // Zoom com o Mouse
					zoomWindowFadeIn: 500, // FadeIn na hora de Abrir a Imagem Zoom
					zoomWindowFadeOut: 500, // FadeOut na hora de Abrir a Imagem Zoom
					lensFadeIn: 500, // FadeIn na hora de Fechar a Imagem Zoom
					lensFadeOut: 500, // FadeOut na hora de Fechar a Imagem Zoom
				});
			});
		}

		// Mostrar Img Maior
		function Img_Maior($n, $e){
			$($e).parent().parent().parent().parent().parent().parent().parent().parent().find('.Plugin1.Img_Maior').data('owl.carousel').to($n, 300, true);

			// ZOOM
				$data_zoom_image = $($e).parent().parent().parent().parent().parent().parent().parent().parent().find('.Plugin1.Img_Maior .owl-item.active img').attr('data-zoom-image');
				if($data_zoom_image != undefined){
					$($e).parent().parent().parent().parent().parent().parent().parent().parent().find('.Plugin1.Img_Maior .owl-item img').removeClass('Plugin_Zoom');
					$($e).parent().parent().parent().parent().parent().parent().parent().parent().find('.Plugin1.Img_Maior .owl-item.active img').addClass('Plugin_Zoom');
					$('.zoomContainer').remove();
					Plugin_Zoom();
				}
			// ZOOM
		}
		function Img_Maior1($e, $src, $atributos){
			if($atributos == 1){
				$Galeria_Produtos_Img_Maior = $(".Galeria_Produtos_Img_Maior");
			} else {
				$Galeria_Produtos_Img_Maior = $($e).find_parent("class", "Galeria_Produtos_Img_Maior")
			}
			$figure = $Galeria_Produtos_Img_Maior.find("figure");

			$link = $Galeria_Produtos_Img_Maior.attr('link') ? 1 : 0;
			$zoom = $Galeria_Produtos_Img_Maior.attr('zoom') ? 1 : 0;

			$html  = $link==1 ? ' <a href="'+$src+'" data-imagelightbox="b"> ' : '';
				$html += '<img src="'+$src+'" class="'+$figure.find('img').attr('class')+'" ';
				$html += $zoom==1 ? ' data-zoom-image="'+$src+' ' : '';
				$html += '" /> ';
			$html += $link ? '</a> ' : '';

			$figure.stop(true, true).html($html);
			$('.zoomContainer').remove();
			Plugin_Zoom();
		}

		// Full Calendar
		function fullcalendar($table){
			$(document).ready(function() {
				if($(".fullcalendar").attr('class')){
					$(".fullcalendar").each(function() {
						$(this).before('<div class="fullcalendar"></div>');
						$(this).remove();
					});

					$fullcalendar = $table ? $table : $fullcalendar;
					$.ajax({
						type: "POST",
						url: DIR+"/admin/app/Ajax/FullCalendar/datas.php",
						data: { table: $fullcalendar },
						dataType: "json",
						beforeSend: function(){ ajaxIni(0); },
						error: function($request, $error){ ajaxErro($request, $error); },
						success: function($json){
							$(".carregando").hide();

		                    $(".fullcalendar").fullCalendar({
		                        header: {
		                            left: "prev,next today",
		                            center: "title",
		                            right: "month,agendaWeek,agendaDay,listWeek"
		                        },
		                        defaultDate: $json.hoje,
		                        locale: "pt-br",
		                        buttonIcons: true,
		                        weekNumbers: false,
		                        navLinks: false, // pode clicar em nomes de dia / semana para navegar em exibições
		                        editable: false,
		                        eventLimit: false, // permitir "mais" link quando muitos eventos
		                        events: $json.datas,
								eventRender: function(event, element) {
							    	element.bind('click', function() {
							    		$('.fc-event').removeClass('ativo')
							    		$('.fc-list-item td').removeClass('ativo')

							    		if($(element).attr('class') == 'fc-list-item'){
							    			$(element).addClass('ativo')
							    		} else {
							    			$(element).addClass('ativo')
							    		}

						    			$(element).attr('dir', event.id);
										$(".conteudo .lista .acoes .edit").removeAttr('disabled');
										$(".conteudo .lista .acoes .delete").removeAttr('disabled');
										$(".conteudo .lista .acoes .extra").removeAttr('disabled');
							    	});
							    	element.bind('dblclick', function() {
							    		boxs('calendario', 'table='+$fullcalendar+'&id='+event.id);
							    	});
								}
		                    });
							setTimeout(function(){ tooltip(); }, .5);

						}
					});
				}
			});
		}
		var $fullcalendar = "";
	// PLUGINS



/* Eventos All


----------------------------------------------------------------------------------------------------------------------------------


*/