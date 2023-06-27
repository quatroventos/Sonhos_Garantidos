
	// ABRIR VIEWS CARREGANDO A PAGINA
		function views_url($modulo){
			window.parent.location = DIR+'/admin/?pg='+$modulo;
		};
	// ABRIR VIEWS CARREGANDO A PAGINA

	// VIEWS
		function views($modulo, $acao, $gets, $gets_data){
			$ids = '-';
			$tables = '-';
			if($acao==1){
				$_GET = converter_gets($gets);
				if($_GET['tipo']){
					$ids = '-'+$_GET['tipo']+'-';
				} else {
					$ids = '-'+$_GET['id']+'-';
				}
			} else {
				// Ids para edicao e exclusao
				$gerenciar = datatable_gerenciar() ? '_gerenciar' : '';
				$('.datatable'+$gerenciar+' .ui-selected td:first-child > div').each(function() {
					$dir = $(this).attr('dir');
					if($dir != undefined)
						$ids += $dir+'-';
					$table = $(this).attr('table');
					if($table != undefined)
						$tables += $table+'-';
				});
			}

			// Acoes
			if(!$acao || $acao==0)	$acao = 'lista';
			else if($acao==1)	 	$acao = 'edit';
			else if($acao==2)		$acao = 'boxxs';
			else if($acao==3)		$acao = 'gerenciar';

			// Url
			url = $acao=='lista' ? window.location.href.replaceAll('&', ';;z;;') : '';

			$gets = $gets ? '&gets='+$gets.replaceAll('&', ';;z;;') : '';
			$gets_data = $gets_data ? '&'+$gets_data : '';

			$pg_atual = ($modulo==1) ? 'menu_admin' : 'padrao';

			$.ajax({
				type: "POST",
				url: DIR+"/admin/views/"+$pg_atual+".php?lugar="+LUGAR+"&modulo="+$modulo+"&acao="+$acao+$gets,
				data: 'ids='+$ids+'&tables='+$tables+$gets_data+'&url='+url+'&lugar='+LUGAR,
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					if($json.evento != null)
						eval($json.evento);
					if($json.erro != null){
						$delay = $json.delay ? $json.delay : '';
						$.each($json.erro, function($key, $val) {
							if($val != 'zzz'){
								alerts(0, $val, 1, $delay);
							}
						});	

					} else {
						// LISTA
						if($acao == 'lista' || $acao == 'filtro'){
							if($acao == 'lista' && $_SESSION['filtro_avancado['+$modulo+']']){
								datatable_filtro($modulo, '', $gets);
							} else if($gets.indexOf('gerenciar=1') >= 0){
								$(".events_externos .boxs .contextoo .contextooo").html($json.html);
								$(".datatable_gerenciar tbody").selectable({ filter: "tr", selected: function(event, ui){ datatable_button_disabled(); } });
								if($json.editar_item == 1){
									$('.datatable_gerenciar tbody').on('dblclick', 'tr', function () { views($modulo, 'edit', $gets); });
								}
								datatable_filtro_itens($modulo, $gets);
								iniciar_events_admin($json.modulo, '.events_externos .boxs .contextoo .contextooo', 1);
							} else {
								$(".principal .views .conteudo .lista").html($json.html);
								$(".datatable tbody").selectable({ filter: 'tr[role="row"]', selected: function(event, ui){ datatable_button_disabled(); } });
								if($json.editar_item == 1){
									$('.datatable tbody').on('dblclick', 'tr[role="row"]', function () { views($modulo, 'edit', $gets); });
									$('.datatable tbody').on('click', 'tr[role="row"] .info_seta', function () { datatable_tr_extra(this); });
								}
								datatable_filtro_itens($modulo, $gets);
								iniciar_events_admin($json.modulo, '.principal .views .conteudo .lista');
								history.pushState('Administração','Administração', $json.url);
								topoo();
							}
						// LISTA


						// BOXXS
						} else if($acao == 'boxxs'){
							$(".principal .views .conteudo .lista").html($json.html);
							boxxs('booxs_mudar_status(e)');
							history.pushState('Administração','Administração', $json.url);
							topoo();
						// BOXXS


						// NOVO OU EDIT
						} else if($acao == 'novo' || $acao == 'edit'){
							if($(".ui-dialog").hasClass("pg_"+$modulo) == true){
								dialog_abrir($modulo);
								setTimeout(function(){ $('.ui-dialog.pg_'+$modulo+' form input[name="nome"]').focus(); }, 0.5);
								alerts(0, "Esta Janela já se Encontra em Uso!");
							} else {
								div = ".principal .views .conteudo .events";
								$(div).html(' <div id="dialog" title="'+$json.title+'">'+$json.html+'</div> ');
								$z_index = datatable_gerenciar() ? 'gerenciar z9' : '';
								$(div+' #dialog').dialog({ dialogClass: "pg_"+$modulo+" pg_"+$json.modulo+" "+$z_index, });
								$('.ui-dialog.pg_'+$modulo).attr('dir', $modulo);
								js = 'dialog_click('+$modulo+')';
								$('.ui-dialog.pg_'+$modulo).attr('onClick', js);
								$('footer .abas li').removeClass('ativo');
								$('footer .abas').append('<li class="ativo aba_'+$modulo+' limit" onclick="dialog_click_aba('+$modulo+')">'+$json.title+'</li>');
								dialog_click($modulo);
								iniciar_events_admin($json.modulo, '.ui-dialog.pg_'+$modulo+' .campos_do_modulo');
								setTimeout(function(){ $('.ui-dialog.pg_'+$modulo+' .campos_do_modulo form input[name="nome"]').focus(); }, 0.5);
								//setTimeout(function(){ criar_css(); }, 0.5);
							}
						// NOVO OU EDIT


						// EXCLUIR
						} else if($acao == 'delete'){
							alerts(1);
							datatable_update('delete', $ids);
						}
						// EXCLUIR

						// SELECIONANDO MENU
							if(!datatable_gerenciar()){
								$('.principal > .menu > ul.menu_left li').removeClass('sel').removeClass('sel_item');
								$('.principal > .menu > ul.menu_left li.menu_'+$modulo).parent().parent().addClass('sel');
								$('.principal > .menu > ul.menu_left li.menu_'+$modulo).addClass('sel').addClass('sel_item');
							}
						// SELECIONANDO MENU
					}
					$(".carregando").hide();
				}
			});

			// HIDE NO MENU TOPO
				$('header .barra .menu_topo > a').parent().find('ul').stop(true, true).delay(200).slideUp();
				$('header .barra .menu_topo > a').parent().parent().find('li').removeClass('ativo');
			// HIDE NO MENU TOPO

			if($acao == 'lista' || $acao == 'filtro'){
				voltarr_historico("views("+A+$modulo+A+", "+A+$acao+A+", "+A+$gets+A+", "+A+$gets_data+A+")");
			}
		};

	// GRAVAR ITEM
		function gravar_item($modulo, $id, $classe, $gets){
			$pg_atual = ($modulo==1) ? 'menu_admin' : 'padrao';
			$gets = $gets ? '&gets='+$gets.replaceAll('&', ';;z;;') : '';
			$($classe).attr('action', DIR+"/admin/views/"+$pg_atual+".php?acao=gravar&id="+$id+"&modulo="+$modulo+$gets);

			$($classe).ajaxForm({
				data: { lugar: LUGAR },
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					if($json.evento != null)
						eval($json.evento);
					if($json.erro != null){
						$delay = $json.delay ? $json.delay : '';
						$.each($json.erro, function($key, $val) {
							if($val != 'zzz'){
								alerts(0, $val, 1, $delay);
							}
						});
					} else if($json.datatable_boxs){
						$('.datatable_campos_boxs').html('');
						datatable_boxs_atualuzar_selects($json.table, $json.rand);

					} else if($json.acao == 'gerenciar'){ // Gerenciar
						gerneciar_fechar($classe.replace('form.form_', ''), $json.ult_id);

					} else {
						alerts(1);

						if($json.modulo_tipo == 2){
							boxxs_atualizar(this.modulo, 1);
						}

						if($json.dataup){
							$($classe).find("#dataup").val($json.dataup);
						}

						// Atualizar
						if(table_datatable_atualizar_quando_fechar($modulo)){
							datatable_update();
						} else if($id!=0){ // Edit
							datatable_update('row', $id);
						} else { // Novo
							datatable_update();
						}

						if($json.acao == 1){
							if($json.ult_id!=undefined){
								$($classe).attr('onSubmit', "gravar_item("+$modulo+", '"+$json.ult_id+"', this)");

								dialog_fechar($modulo);
								views($modulo, 1, 'id='+$json.ult_id);
							}
						} else if($json.acao == 2){
							if($id){
								dialog_fechar($modulo);
								views($modulo, 'novo', '');
							} else {
								$($classe).find("input[name=reset_button]").trigger('click');
								$($classe).find("select").trigger('change');
							}
						} else if($json.acao == 3){
							dialog_fechar($modulo);
						} else if($json.acao == 4){
							$(".ui-dialog.pg_"+$modulo+" #dialog").dialog("destroy");
							$('footer .abas li.aba_'+$modulo).remove();
							gerneciar_fechar();
						}
						$($classe).find('.input.file input').val('');
						$($classe).find('.input.file span>span').html('Selecionar Arquivo');
					}
					$(".carregando").hide();
				}

			});
		};
	// GRAVAR ITEM

	// DELETAR ITEM
		function deletar_item($modulo, item){
			$pg_atual = ($modulo==1) ? 'menu_admin' : 'padrao';
			$.ajax({
				type: "POST",
				url: DIR+"/admin/views/"+$pg_atual+".php?modulo="+$modulo+"&acao=delete",
				data:  { ids: '-'+item+'-', lugar: LUGAR },
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					if($json.evento != null)
						eval($json.evento);
					if($json.erro != null){
						$delay = $json.delay ? $json.delay : '';
						$.each($json.erro, function($key, $val) {
							alerts(0, $val, 1, $delay);
						});	
					} else {
						alerts(1);
						datatable_update();
						dialog_fechar($modulo);
					}
					$(".carregando").hide();
				}
			});
		};
	// DELETAR ITEM
