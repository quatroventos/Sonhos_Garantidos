/* Datatables */

// ----------------------------------------------------------------------------------------------------------------------------------

// Eventos Admin


	// NOVO

		function autocomplete(){
			/*
			$("input.autocomplete_cidades").autocomplete({
				minLength: 1,
				source: function( request, response ) {
					$.ajax( {
						type: "POST",
						url: DIR+"/app/Ajax/Autocomplete/cidades.php",
						dataType: "json",
						data: { pesq: request.term, estados: 0 }, // estados: $('select#estados').val()
						success: function( data ) {
							response(data.itens);
						}
					});
				},
			});
			*/
		};

	// NOVO



// ----------------------------------------------------------------------------------------------------------------------------------




	// EVENDO QUANDO APERTAR ALGUMA TECLA NO TECLADO
		document.addEventListener('keyup', taclado);
		function taclado(){
			//if(event.keyCode == 27){ // ESC
				//$id = 0;
				//$zindex = 0;
				//$(".ui-dialog").each(function() {
					//if($zindex < $(this).css('zIndex')){
						//$id = $(this).attr('dir');
						//$zindex = $(this).css('zIndex');
					//}
				//});
				//dialog_fechar($id);
			//}
		};
	// EVENDO QUANDO APERTAR ALGUMA TECLA NO TECLADO




// ----------------------------------------------------------------------------------------------------------------------------------




	// INCICIANDO ADMIN
		function iniciar_events_admin($table, $lugar, $gerenciar=''){
			$(document).ready(function() {
				//if(!$lugar) setTimeout(function(){ menu_hover_e_click('') }, 0.5);
				menu_hover_e_click('');
				mascaras();
				mascaras1();
				fundoo_fechar();
				input_file_hover();
				criar_css($lugar);
				tooltip();

				autocomplete();


				$('.campos_menu_admin .sortable').sortable();
				$('select.design').select2();
				$('[rel="draggable"]').draggable();

				// Icone no select2
					$(".select2_inicial").on("click", function() {
						setTimeout(function(){
							$('.select2-results__option:not(.icon_ok)[id*="icone"]').each(function() {
								if($(this).html() && $(this).html()!='- - -'){
									$val = '<i class="'+$(this).html()+'"></i> '+$(this).html();
									$(this).html($val).addClass('icon_ok');
								}
							});
						}, 2000);
						
					})
				// Icone no select2

				// Criar ou Gerenciar Itens no Select2
					if(!$gerenciar){ // Para n Abrir esse evento 2 vezes e atrapalhar no pop
						$("select.design").on("select2:select", function (ev) {
							select2_select(this, ev);
						});
					}
				// Criar ou Gerenciar Itens no Select2
			});
		};
		function tooltip(){			
			$('[rel="tooltip"]').tooltip({html:true});
		}
	// INCICIANDO ADMIN



	// DEFAULTT
		function defaultt($tipo, $cate='', $gets=''){
			$.ajax({
				type: "POST",
				url: DIR+"/admin/views/default.php",
				data: { menu: 1, tipo: $tipo, cate: $cate, gets: $gets, lugar: LUGAR },
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$(".carregando").hide();
					history.pushState('Administração','Administração', DIR+'/'+LUGAR+'/'+($json.tipo ? '?tipo='+$json.tipo : ''	)+($cate ? '&cate='+$cate : ''	)+($gets ? '&'+$gets : ''	) );

					if($json.evento != null){
						eval($json.evento);
					}

					$(".principal .views .conteudo .lista").html($json.html);
					criar_css('.principal .views .conteudo .lista')

					$('.principal > .menu > ul.menu_left li').removeClass('sel').removeClass('sel_item');
					$('.principal > .menu > ul.menu_left li.menu_'+$json.modulo).parent().parent().addClass('sel');
					$('.principal > .menu > ul.menu_left li.menu_'+$json.modulo).addClass('sel').addClass('sel_item');
					topoo();

					voltarr_historico("defaultt("+A+$tipo+A+", "+A+$cate+A+", "+A+$gets+A+")");
				}
			});
		}
	// DEFAULTT



	// VOLTARR
		function voltarr(){
			eval($_VOLTAR[ $_VOLTAR.length-2 ]);

			var $_VOLTAR_TEMP = new Array();
			$.each($_VOLTAR, function($key, $value) {
				if( $key != ($_VOLTAR.length-1) && $key != ($_VOLTAR.length-2) )
				$_VOLTAR_TEMP[$key] = $value;
			});	

			$_VOLTAR = $_VOLTAR_TEMP;		
		}
		function voltarr_historico($funcao){
			$_VOLTAR[ $_VOLTAR.length ] = $funcao;
		}
	// VOLTARR



	// INPUT DISABLE
		function input_disable(){
			$('.dialog form ul.nav li').each(function() {
				e = $(this).parent().parent().find('ul.campos.box li[tabs="'+$(this).attr('tabs')+'"]');
				if($(this).hasClass("disabled") == true){
					e.find('input[required], select[required], textarea[required]').addClass('requiredx').removeAttr('required');
				} else {
					e.find('input.requiredx, select.requiredx, textarea.requiredx').each(function() {
						$(this).removeClass('requiredx');
						$(this).attr('required', '');
					});
				}
			});
		}
	// INPUT DISABLE

	// ATUALIZAR TODA TABLE DATATABLE QUANDO FECHAR
		function table_datatable_atualizar_quando_fechar($modulo){
			$return = 0;
			if($modulo==1 || $modulo==19){
				$return = 1;
			}
			return $return;
		}
	// ATUALIZAR TODA TABLE DATATABLE QUANDO FECHAR


	// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


	// MAIS CAMPOS
		// <a onclick="mais_campos(this, 'veiculos_tipo', 'veiculos_txt')" class="c_azul link">Adicionar mais</a>
		var $mais_campos_n = 100 // Mudar tbm em CamposModulos.php, padrao.php, select_relacao.php, func.php, eventos_all.js
		function mais_campos($e, $campo_1, $campo_2, $campo_3, $campo_4, $campo_5, $campo_6, $values){
			$pai = $($e).parent().parent().parent();

			$count = 0;
			for ($i=1; $i<=$mais_campos_n; $i++){
				$campo = $campo_1+'_'+$i;
				if( $('[name="'+$campo+'"]').attr('name') ){
					$count++;
				}
			}

			$html = '';
			$campos = new Array($campo_1, $campo_2, $campo_3, $campo_4, $campo_5, $campo_6);
			$campos_select = new Array();

			$script = '';
			$.each($campos, function($key, $value) {
				if($value){
					$campo_class = $pai.find('.finput.finput_'+$value+'_1').parent().attr('class');
					$campo_html = $pai.find('.finput.finput_'+$value+'_1').parent().html();

					if($campo_html){
						$campo_html = $campo_html.replaceAll('_1 ', '_'+($count+1)+' ');
						$campo_html = $campo_html.replaceAll('_1"', '_'+($count+1)+'"');
						$campo_html = $campo_html.replaceAll("_1'", "_"+($count+1)+"'");
						$campo_html = $campo_html.replaceAll('&nbsp;1:', '&nbsp;'+($count+1)+':');

						// SCRIPTS
							$campo_html_js = $campo_html.replaceAll('<script>', '</script>');
							var $array = $campo_html_js.split('</script>');
							$x=0;
							$.each($array, function($key, $value) { $x++;
								if(!($x%2)){
									$script += $value+';';
								}
							});	
						// SCRIPTS

						$campo_html = $campo_html.replaceAll('.trigger("change")', '');
						$html += '<li class="'+$campo_class+'">'+$campo_html+'</li> ';
						$campos_select[$key] = $value+'_'+($count+1);
					}
				}
			});
			$($e).parent().parent().before($html);

			if($count >= $mais_campos_n-1){
				$($e).hide();
			}

			$.each($campos_select, function($key, $value) {
				if($value){
					mais_campos_val($key, $value, $values, $script);
				}
			});
		}
		function mais_campos_edit($n, $values, $campo_1, $campo_2, $campo_3, $campo_4, $campo_5, $campo_6){
			setTimeout(function(){
				$e = $('.finput.finput_'+$campo_1+'_1').parent().parent().find('.linhas_inputs.mais_campos a');
				mais_campos($e, $campo_1, $campo_2, $campo_3, $campo_4, $campo_5, $campo_6, $values);
			 }, 100*$n);
		}
		function mais_campos_val($key, $value, $values, $script){
			setTimeout(function(){
				$('.finput.finput_'+$value).find('.select2').remove();
				$val = $values ? $values[$key] : '';
				// DataTime
					if($val && $('#'+$value).attr('type') == 'datetime-local'){
						$data = $val.split(" ");
						$hora = $data[1].split(":");
						$val = $data[0]+'T'+$hora[0]+':'+$hora[1];
					}
				// DataTime
				$('#'+$value).val($val);
				$('select#'+$value).select2();
				$('select#'+$value).on("select2:select", function (ev) {
					select2_select(this, ev);
				});

				$('select#'+$value).attr('rel_val', $val);
				eval($script);

				if($values && $script.indexOf("select_autocomplete") >= 0){
					$array = $script.split('select_autocomplete("');
					$array = $array[1].split('"');
					setTimeout(function(){
						$.ajax({
							type: "POST",
							url: DIR+"/admin/app/Ajax/Autocomplete/"+$array[0]+".php",
							data: { id: $values[$key] },
							dataType: "json",
							success: function($json){
								if($json.html){
									$('select[name="'+$value+'"]').html($json.html).trigger("change");
								}
							}
						});
					}, .5);
				}
			 }, .5);
		}
		function mais_campos_remove($e, $campo_1, $campo_2, $campo_3, $campo_4, $campo_5, $campo_6){
			$count = 0;
			for ($i=1; $i<=$mais_campos_n; $i++){
				$campo = $campo_1+'_'+$i;
				if( $('[name="'+$campo+'"]').attr('name') ){
					$count++;
				}
			}
			if($count>1){
				$('[name="'+$campo_1+'_'+$count+'"]').find_parent('tags', 'li').remove();
				$('[name="'+$campo_2+'_'+$count+'"]').find_parent('tags', 'li').remove();
				$('[name="'+$campo_3+'_'+$count+'"]').find_parent('tags', 'li').remove();
				$('[name="'+$campo_4+'_'+$count+'"]').find_parent('tags', 'li').remove();
				$('[name="'+$campo_5+'_'+$count+'"]').find_parent('tags', 'li').remove();
				$('[name="'+$campo_6+'_'+$count+'"]').find_parent('tags', 'li').remove();
			}
			$('.mais_campos a').show();
		}
	// MAIS CAMPOS


	// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


	// MAIS FOTOS
		function mais_fotos_update($tabelas, $item, $modulos, $col){
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Boxs_acoes/mais_fotos_update.php",
				data: { item: $item, tabelas: $tabelas, modulos: $modulos, col: $col },
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$(".carregando").hide();
					$('.mais_fotos_update').html($json.html);
					if($json.n != undefined){
						$('table.datatable').find('.td_datatable[dir="'+$item+'"]').parent().parent().find('.n_'+$col+' span').html($json.n);
					}
				}
			});
		}
		function mais_fotos_gravar($modulos, $item, $col, e){
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Boxs_acoes/mais_fotos_gravar.php?modulos="+$modulos+"&col="+$col,
				data: $(e).serialize(),
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					// crop
					if($json.ids_crop != undefined){
						boxs('crop', 'ids='+$json.ids_crop+'&table=mais_fotos&modulos='+$json.modulos, 1);

					} else {
						mais_fotos_update($json.tabelas, $item, $modulos, $col);
					}
				}
			});
		}
		function mais_fotos_update_boxxs(){
			$(".mais_fotos_update").sortable({
				connectWith: ".mais_fotos_update",
				beforeStop: function(event, ui) {
					e = ui.item;
					$x=0;
					$(".mais_fotos_update input.ordem").each(function() { $x++;
						$(this).val($x);
					});
					$('button[form="form_mais_fotos"]').trigger('click');
				}
			}).disableSelection();
		}
	// MAIS FOTOS

	// MAIS MAPAS
		function mapa_google(e){
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Boxs_acoes/mapa_google.php",
				data: $(e).serialize(),
				dataType: "json",
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$('div.mapa_google').html($json.html);
					$('[name="acao_mapa_google"]').val('gravar');
				}
			});
		}
	// MAIS MAPAS

	// NEWSLETTER
		// Newsletter -> Marcar Todos checkbox
		function selecionar_checkbox(){
			if($('#marcar_todos:checked').val()){
				$('#formNewsletter input').prop("checked", true);
			} else {
				$('#formNewsletter input').prop("checked", false);
			}
		}
	
		// Newsletter -> Marcar Todos checkbox da categorias
		function selecionar_checkbox_categorias(id){
			if($('#categorias_'+id).is(':checked'))
				$('.selecionar_'+id).prop("checked", true);
			else
				$('.selecionar_'+id).prop("checked", false);
		}
	// NEWSLETTER




	// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------



	// OUTRAS FUNCOES
		// Menu Left Responsivo
			// Menu Listas (hide)
				function menu_resp(){
				if($('.principal aside.menu').hasClass('hide')){
					show_menu_resp();
					gravarCookie('menu_hide', 0, 365);
				} else {
					hide_menu_resp();
					gravarCookie('menu_hide', 1, 365);
				}
				}
			    function hide_menu_resp(){
					$('.principal > aside.menu').addClass('hide');
					$('.principal > aside.views').css('marginLeft', '63px');
					$('.principal > aside.menu > ul > li > ul').hide();			    	
			    }
			    function show_menu_resp(){
					$('.principal > aside.menu').removeClass('hide');
					$('.principal > aside.views').css('marginLeft', '235px');
			    }
			// Menu Listas

			// Menu Responsivo
			    $('.principal > aside.menu > ul.menu_left li').hover(function() {
					if($('.principal > aside.menu').hasClass('hide')){
						$(this).addClass('ativo');
						$(this).find('ul').	show();
					}
			    }, function() {
					if($('.principal > aside.menu').hasClass('hide')){
						$(this).removeClass('ativo');
						$(this).find('ul').hide();
					}
			    });
			// Menu Responsivo

			// Verificar se o menu eh hide (Responsivo)
				setTimeout(function(){
				    if(lerCookie('menu_hide')==1){
				    	hide_menu_resp();
					}
				}, 1000);

			// Menu < 900px
			$(document).ready(function() {
				$(window).resize(function(){
					if(window.innerWidth < 900){
						hide_menu_resp();
					}
				});
				if(window.innerWidth < 900){
					hide_menu_resp();
				}
				$(window).resize(function(){
					if(window.innerWidth > 900){
						show_menu_resp();
					}
				});
				if(window.innerWidth > 900){
					show_menu_resp();
				}
			});
		// Menu Left Responsivo

		// Footer Seta
		$(window).scroll(function(){
			if  ($(window).scrollTop() > 200)
				$("footer .seta").stop(true, true).delay(200).fadeIn(200);
			else 
				$("footer .seta").stop(true, true).delay(200).fadeOut(200);
		});
		$('footer .seta').on('click', function() {
			$("html,body").animate( {scrollTop: $("html").offset().top}, "fast" );
		});

		// Temas
		function temas(e){
			var $cor = $(e).attr('class');
			$('#style_color').attr('href', DIR+'/admin/css/cores/'+$cor+'.css');
			gravarCookie('temas', $cor, 365);
			//fechar_all();					
		}
	// OUTRAS FUNCOES



/* Eventos Admin


----------------------------------------------------------------------------------------------------------------------------------


*/
