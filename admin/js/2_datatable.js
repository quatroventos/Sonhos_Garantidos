

	function datatable_tr_extra($e){
        var tr = $($e).closest('tr');
        var row = $dataTable_oTable.row(tr);
 
        if(row.child.isShown()){
            row.child.hide();
        } else {
            row.child( format(tr) ).show();
        }
	};
	function format($tr) {
	    $return  = '<table cellspacing="0" border="0" class="w100p" style="border: 1px solid #ccc !important;"> ';
			$return += '<tr> ';
				$return += '<td class="tal">'+$tr.find('.info_seta').attr('info')+'</td> ';
			$return += '</tr> ';
		$return += '</table> ';
		return $return;
	}


	// FILTROS
		function datatable_filtro_itens($modulo){
			if($_SESSION['filtro_avancado['+$modulo+']']){
				$.ajax({
					type: "POST",
					url: DIR+"/admin/app/Ajax/Boxs/filtro_avancado.php",
					data: 'acao=itens&modulo='+$modulo+'&'+$_SESSION['filtro_avancado['+$modulo+']']+'&lugar='+LUGAR,
					dataType: "json",
					error: function($request, $error){ ajaxErro($request, $error); },
					success: function($json){
						$('.datatable_filtro_itens').html($json.html);
					}
				});
			}
		};
		function datatable_filtro($modulo, e, $gets){
			if(e){
				$_SESSION['filtro_avancado['+$modulo+']'] = $(e).serialize();
				$gets = $(e).find('input[name="gets"]').val();
			}
			views($modulo, 'filtro', $gets, $_SESSION['filtro_avancado['+$modulo+']']);
		};
		function datatable_filtro_itens($modulo, $gets){
			if($_SESSION['filtro_avancado['+$modulo+']']){
				$.ajax({
					type: "POST",
					url: DIR+"/admin/app/Ajax/Boxs/filtro_avancado.php",
					data: 'acao=itens&modulo='+$modulo+'&'+$_SESSION['filtro_avancado['+$modulo+']']+'&gets='+$gets+'&lugar='+LUGAR,
					dataType: "json",
					error: function($request, $error){ ajaxErro($request, $error); },
					success: function($json){
						$('.datatable_filtro_itens').html($json.html);
					}
				});
			}
		};
		function datatable_filtro_add_item($modulo, $itens, $acao){
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Boxs/filtro_avancado.php",
				data: 'acao='+$acao+'&modulo='+$modulo+'&'+$itens+'&lugar='+LUGAR,
				dataType: "json",
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					if($acao=='filtro_inicial'){
						if($json.post){
							$_SESSION['filtro_avancado['+$modulo+']'] = $json.post;
							datatable_filtro_itens($modulo);
						} else {
							boxs($json.boxs, 'modulos='+$modulo);
						}
					} else {
						$_SESSION['filtro_avancado['+$modulo+']'] = $json.post;
						views($modulo, 'lista', '', $_SESSION['filtro_avancado['+$modulo+']']);
					}
				}
			});
		};
		function datatable_filtro_delete_item($modulo, $name, e, $gets){
			if($_SESSION['filtro_avancado['+$modulo+']']){
				$.ajax({
					type: "POST",
					url: DIR+"/admin/app/Ajax/Boxs/filtro_avancado.php",
					data: 'acao=delete&modulo='+$modulo+'&name='+$name+'&'+$_SESSION['filtro_avancado['+$modulo+']']+'&lugar='+LUGAR,
					dataType: "json",
					error: function($request, $error){ ajaxErro($request, $error); },
					success: function($json){
						$(e).find_parent('tags', 'li').fadeOut();
						$_SESSION['filtro_avancado['+$modulo+']'] = $json.post;
						views($modulo, 'lista', $gets, $_SESSION['filtro_avancado['+$modulo+']']);
					}
				});
			}
		};
	// FILTROS


	// ACOES
		function datatable_acoes($acao, $modulos, $id, $table, $item){
			// Ids para edicao e exclusao
			if($id != undefined){
				$ids = '-'+$id+'-';
			} else {
				$ids = '-';
				$(".ui-selected td:first-child > div").each(function() {
					$dir = $(this).attr('dir');
					if($dir != undefined)
						$ids += $dir+'-';
				});				
			}

			$table = $table ? $table : '';
			$item = $item ? $item : '';
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Acoes/acoes.php",
				data: { ids: $ids, modulos: $modulos, acao: $acao, table: $table, item: $item, lugar: LUGAR },
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
						if(!$table){
							$ids = $ids.split("-");
							$.each($ids, function($key, $val) {
								if($val){
									if($acao == 'clonar' || table_datatable_atualizar_quando_fechar($modulos))
										datatable_update();
									else
										datatable_update('row', $val);
								}
							});	
							datatable_mais_acoes_fechar();
						} else if($table == 'mais_fotos'){
							mais_fotos_update($json.table, $item, $modulos, 'mais_fotos');
						}
					}
					$(".carregando").hide();
				}
			});
		};
		function datatable_mais_acoes_abrir(){
			$('.box_table .acoes ul.mais_acoes, .fullcalendar_css .acoes ul.mais_acoes').css('display', 'inline-block');
		}		
		function datatable_mais_acoes_fechar(){
			$('.box_table .acoes ul.mais_acoes, .fullcalendar_css .acoes ul.mais_acoes').hide();
		}		
		function datatable_selecionar_todos(){
			$('.datatable tbody tr').addClass('ui-selected');
			datatable_button_disabled();
			datatable_mais_acoes_fechar();
		};
	// ACOES


	// UPDATE
		function datatable_update($tipo, $id){
			if(datatable_gerenciar()){
				if($('table.datatable_gerenciar').html()){
					$.atualizar_datatable_gerenciar();
				};
			} else {
				if($('table.dataTable').html()){
					if($tipo == 'row'){
						$.atualizar_datatable_row($id);
					} else {
						$.atualizar_datatable();
					}
				};
			}
			$(".box_table .acoes .edit").attr('disabled', true);
			$(".box_table .acoes .delete").attr('disabled', true);
			$(".box_table .acoes .selecionar").attr('disabled', true);
			$(".box_table .acoes .extra").attr('disabled', true);

			setTimeout(function(){  $("[rel=tooltip]").tooltip() }, 500);
			fullcalendar();
		};
		function ajax_reload($oTable, $tipo, $modulo, $id){
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Datatables/atualizar_session_javascript.php",
				data: {
					financeiro_tipos : $_SESSION['financeiro_tipos'],
					financeiro_conta_atual : $_SESSION['financeiro_conta_atual'],
					financeiro_mes_atual : $_SESSION['financeiro_mes_atual'],
					financeiro_ano_atual : $_SESSION['financeiro_ano_atual'],
				},
				dataType: "json",
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					if($tipo && $modulo && $id){
						ajax_reload_rows1($tipo, $oTable, $modulo, $id);
					} else if($oTable){
						$oTable.ajax.reload(null, false);
					}
				}
			});
		};
		function ajax_reload_rows($tipo, $oTable, $modulo, $id){
			ajax_reload($oTable, $tipo, $modulo, $id);
		}
		function ajax_reload_rows1($tipo, $oTable, $modulo, $id){
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Datatables/ajax.php?"+$tipo,
				data: { modulo: $modulo, row: $id, lugar: LUGAR },
				dataType: "json",
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$json = datatable_valores_do_ajax($json);
					if($tipo == 'row'){
						$oTable.row( $('[dir="'+$id+'"]').parent().parent() ).data( $json.data[0] );
					}
				}
			});
		};
	// UPDATE

	// GERENCIAR
		function datatable_gerenciar(){
			$return = 0;
			$("table.datatable_gerenciar").each(function() {
				$return = 1;
			});
			return $return;
		}
	// GERENCIAR

	// ARRAYS DOS VALORES DO AJAX
		function datatable_valores_do_ajax($json){
			$data = $json.data;
			$.each($data, function($key, $val){
				$.each($val, function($key1, $val1){
					$classe = 'td_datatable td_'+$key1;

					$json.data[$key][$key1]  = '<div ';
					$json.data[$key][$key1] += $val1['class']!=null ? ' class="'+$classe+' '+$val1['class']+'" ' : 'class="'+$classe+'" ';
					$json.data[$key][$key1] += $val1['exportar']!=null ? ' exportar="'+$val1['exportar']+'" ' : '';
					$json.data[$key][$key1] += $val1['dir']!=null ? ' dir="'+$val1['dir']+'" ' : '';
					$json.data[$key][$key1] += '> ';
						$json.data[$key][$key1] += $val1['onclick']!=null ? '<a onclick="'+$val1['onclick']+'" class="'+$val1['onclick_class']+'">' : '';
							$json.data[$key][$key1] += $val1['span']!=null ? '<span class="'+$val1['span']+'">' : '';
								//if($json.modulos != '00'){
									$json.data[$key][$key1] += ($val1['dir']!=null && '#'+$val1['dir']!=$val1['value']) ? ' <span class="posa l0 fz10" style="bottom: -4px; color: #999">#'+$val1['dir']+'</span> ' : '';
								//}
								//$json.data[$key][$key1] += $val1['data']!=null ? ' <span class="posa t0 r0 fz10">'+$val1['data']+'</span> ' : '';
								$json.data[$key][$key1] += $val1['value'];
							$json.data[$key][$key1] += $val1['span']!=null ? '</span> ' : '';
						$json.data[$key][$key1] += $val1['onclick']!=null ? '</a> ' : '';
					$json.data[$key][$key1] += '</div> ';
				});
			});
			return $json;
		};
	// ARRAYS DOS VALORES DO AJAX

	// AJAX EXTRAS (FUNCAO CHAMADA NO JS DO DATATABLE)
		function datatable_ajax_extras($json){
			if($json.oTable == '_gravar_datatable'){
				alert('Olhar na funcao datatable_ajax_extras($json) a area comentada');
				/*
				$.ajax({
					type: "POST",
					url: DIR+"/admin/app/Ajax/Datatables/gravar_datatable.php",
					data: { acao: 'gravar', dados: $json.data, table: $json.gravar_dados_table, lugar: LUGAR },
					dataType: "json",
					error: function($request, $error){ ajaxErro($request, $error); },
					success: function($json){
						$(".carregando").hide();
						alerts(1, 'Gravado com Sucesso!');
						$(".events_externos .outros").html('');
					}
				});
				*/

			} else if($json.oTable == '_boxs'){

			} else {
				datatable_button_disabled(0, $json.oTable);
			}
			$_SESSION['datatable_filtro_return'] = $json.filtro_exportar;
			$('.conteudo .resultado_extra').html($json.html);
		};
	// AJAX EXTRAS (FUNCAO CHAMADA NO JS DO DATATABLE)

	// EXPORTAR
		function datatable_exportar_txt(){
			$('#exportarr').attr('action', DIR+'/app/Exportacoes/z_exportar_para_txt.php?f='+$_SESSION['datatable_filtro_return']);
			datatable_exportar_formatando();
			setTimeout(function(){ submitt('#exportarr'); }, 0.5);
		};
		function datatable_exportar_excel(){
			$('#exportarr').attr('action', DIR+'/app/Exportacoes/z_exportar_para_excel.php');
			datatable_exportar_formatando();
			setTimeout(function(){ submitt('#exportarr'); }, 0.5);
		};
		function datatable_exportar_pdf(){
			$('#exportarr').attr('action', DIR+'/app/Exportacoes/z_exportar_para_pdf.php');
			datatable_exportar_formatando();
			setTimeout(function(){ submitt('#exportarr'); }, 0.5);
		};
		function datatable_exportar_all($modulo, $tipo){
			$('#exportarr').attr('action', DIR+'/admin/app/Ajax/Acoes/exportar.php?tipo='+$tipo+'&modulo='+$modulo+'&f='+$_SESSION['datatable_filtro_return']);
			datatable_mais_acoes_fechar();
			setTimeout(function(){ submitt('#exportarr'); }, 0.5);
		};

		function datatable_exportar_formatando(){
			$('#exportarr .exportar_center').val('');
			$("table.datatable tbody tr").each(function() {
				$(this).find('.td_datatable').each(function() {
					$dados = $(this).attr('exportar') != null ? $(this).attr('exportar') : strip_tags($(this).html()).trim();
					$('#exportarr .exportar_center').val( $('#exportarr .exportar_center').val() + $dados + 'z|z' );
				});
				$('#exportarr .exportar_center').val(  $('#exportarr .exportar_center').val() + 'z-z');
			});
			datatable_mais_acoes_fechar();
		}

		/*
		function datatable_exportar_excel(){
			$('#exportarr').attr('action', DIR+'/app/Exportacoes/z_exportar_para_excel.php');
			datatable_exportar_formatando();
			setTimeout(function(){ submitt('#exportarr'); }, 0.5);
		};
		function datatable_exportar_excel_all($modulo){
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Acoes/exportar.php",
				data: { modulo: $modulo },
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$(".carregando").hide();
					$('#exportarr').attr('action', DIR+'/app/Exportacoes/z_exportar_para_excel.php');
					datatable_exportar_formatando_all($json);
					setTimeout(function(){ submitt('#exportarr'); $(".carregando").hide(); }, 0.5);
				}
			});
		};
		function datatable_exportar_pdf(){
			$('#exportarr').attr('action', DIR+'/app/Exportacoes/z_exportar_para_pdf.php');
			datatable_exportar_formatando()
			setTimeout(function(){ submitt('#exportarr'); }, 0.5);
		};
		function datatable_exportar_pdf_all($modulo){
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Acoes/exportar.php",
				data: { modulo: $modulo },
				dataType: "json",
				beforeSend: function(){ ajaxIni(0); },
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					$('#exportarr').attr('action', DIR+'/app/Exportacoes/z_exportar_para_pdf.php');
					datatable_exportar_formatando_all($json);
					setTimeout(function(){ submitt('#exportarr'); $(".carregando").hide(); }, 0.5);
				}
			});
		};

		function datatable_exportar_formatando(){
			$('#exportarr .exportar_top').val('');
			$("table.datatable thead tr").each(function() {
				$(this).find('th b').each(function() {
					$dados = $(this).attr('exportar') != null ? $(this).attr('exportar') : strip_tags($(this).html()).trim();
					$('#exportarr .exportar_top').val( $('#exportarr .exportar_top').val() + $dados + 'z|z' );
				});
				$('#exportarr .exportar_top').val(  $('#exportarr .exportar_top').val() + 'z-z');
			});
			$('#exportarr .exportar_center').val('');
			$("table.datatable tbody tr").each(function() {
				$(this).find('.td_datatable').each(function() {
					$dados = $(this).attr('exportar') != null ? $(this).attr('exportar') : strip_tags($(this).html()).trim();
					$('#exportarr .exportar_center').val( $('#exportarr .exportar_center').val() + $dados + 'z|z' );
				});
				$('#exportarr .exportar_center').val(  $('#exportarr .exportar_center').val() + 'z-z');
			});
			datatable_mais_acoes_fechar();
		}*/
	// EXPORTAR

	// ORDENAR
		function datatable_ordenar($modulos, e){
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Acoes/ordenar.php?modulos="+$modulos,
				data: $(e).serialize(),
				dataType: "json",
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					if($json.evento!= null)
						eval($json.evento);
					if($json.erro != null){
						$delay = $json.delay ? $json.delay : '';
						$.each($json.erro, function($key, $val) {
							alerts(0, $val, 1, $delay);
						});	

					} else {
						$(".carregando").hide();
						alerts(1);
						datatable_update();
					}
					$(".carregando").hide();
				}
			});
		};
	// ORDENAR

	// DISABILITAR BOTOES DA ACAO (NOVO, EDIT, ETC...) SE PRECISAR
	function datatable_button_disabled($n_datatable, $oTable){
		if(!$oTable){
			fechar_all();
		}
		//$n = $(".dataTable tbody tr.ui-selected").length;
		if($n_datatable == undefined){
			$n_datatable = $(".dataTable tbody tr.ui-selected td").length;
		}
		if($n_datatable >= 1){
			$(".box_table .acoes .edit").removeAttr('disabled');
			$(".box_table .acoes .delete").removeAttr('disabled');
			$(".box_table .acoes .selecionar").removeAttr('disabled');
			$(".box_table .acoes .extra").removeAttr('disabled');
		} else{
			$(".box_table .acoes .edit").attr('disabled', true);
			$(".box_table .acoes .delete").attr('disabled', true);
			$(".box_table .acoes .selecionar").attr('disabled', true);
			$(".box_table .acoes .extra").attr('disabled', true);
		}
	};
	// DISABILITAR BOTOES DA ACAO (NOVO, EDIT, ETC...) SE PRECISAR

	// MUDAR POSICAO DA ACAO (NOVO, EDIT, ETC...)
		function datatable_acao_pos($gerenciar){
			setTimeout(function(){
				$gerenciar = $gerenciar ? '_gerenciar' : '';
				$html = $('.box_table'+$gerenciar+' .acoes').html();
	        	$('.box_table'+$gerenciar+' .dataTables_filter').after(' <div class="clear"></div> <div class="acoes acoes_visivel'+$gerenciar+'_ acoes_visivel'+$gerenciar+'_'+$(".acoes_visivel"+$gerenciar+"_").length+'"> '+$html+' </div> ');
	        	$('.box_table'+$gerenciar+' .acoes_temp').remove();
	        	$('.box_table'+$gerenciar+' table.dataTable').wrap('<div class="table_mobile"></div>');
	        	fundoo_fechar();
	    	}, 0.5);
		}
	// MUDAR POSICAO DA ACAO (NOVO, EDIT, ETC...)

	// DATATABLE COLUNAS (BOXXS)
		function datatable_colunas_gravar($modulos){
			$('.carregando').show();
			$cols = "modulos="+$modulos;
			$x=0;
			$('ul.boxxs .colunas ul[boxxs="1"] li').each(function() {
				if($(this).attr('dir')){ $x++
					$cols += '&cols[]='+$(this).attr('dir');
				}
			});
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Boxxs/datatable_colunas_gravar.php",
				data: $cols+'&lugar='+LUGAR,
				dataType: "json",
				success: function($json){
					if($json.id){
						alerts(1);
					}
					$('.carregando').hide();
				}
			});
		};
		function datatable_colunas_delete($modulos){
			$('.carregando').show();
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Boxxs/datatable_colunas_delete.php",
				data: { modulos: $modulos, lugar: LUGAR },
				dataType: "json",
				success: function($json){
					if($json.id){
						alerts(1);
					}
					$('.carregando').hide();
					datatable_update();
				}
			});
		};
	// DATATABLE COLUNAS (BOXXS)

	// DATATABLE BOXS (DATATABLE EXTRA)
		function datatable_acoes_boxs($acao, $modulos, $rand, $id){
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Acoes/acoes.php",
				data: 'acao='+$acao+'&modulos='+$modulos+'&id='+$id+'&lugar='+LUGAR,
				dataType: "json",
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
						$(".carregando").hide();
						datatable_boxs_atualuzar_selects($json.table, $rand);
					}
				}
			});
		}
		function datatable_ordenar_boxs(e){
			$modulos = $(e).attr('modulos');
			$rand = $(e).attr('rand').replace('ordemm_', '');
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Acoes/ordenar.php?modulos="+$modulos+"&rand="+$rand+'&lugar='+LUGAR,
				data: $('.boxs_'+$rand+' input.datatable_ordem').serialize(),
				dataType: "json",
				error: function($request, $error){ ajaxErro($request, $error); },
				success: function($json){
					alerts(1);
					datatable_boxs_update();
				}
			});
		}
		function datatable_boxs_atualuzar_selects($table, $rand){
			$('.gravar_item_0').hide();
			$('.boxs .form_0_'+$rand+' input[type=reset]').trigger('click');
			$('.boxs .form_0_'+$rand+' select').trigger('change');
			$('.gravar_item_1').hide();
			$('.boxs .form_1_'+$rand+' input[type=reset]').trigger('click');
			$('.boxs .form_1_'+$rand+' select').trigger('change');
			$('.boxs .form_0_'+$rand+' [name=subcategorias]').load(DIR+"/admin/app/Ajax/Boxs_acoes/edit_categorias.php?acao=novo&table="+$table+"&niveis="+$('.boxs .form_1_'+$rand+' .niveis_edit').html());
			datatable_boxs_update();
			pop_mostrar_categoria($table, $rand, 0);
		}

		function datatable_campos_boxs($modulos, $rand, $id){
			$.ajax({
				type: "POST",
				url: DIR+"/admin/app/Ajax/Acoes/campos_boxs.php",
				data: 'modulos='+$modulos+'&id='+$id+'&rand='+$rand+'&lugar='+LUGAR,
				dataType: "json",
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
						$('.datatable_campos_boxs').html($json.html);
						$('.datatable_campos_boxs form input[name=nome]').focus();
						$('.boxs .datatable_campos_boxs').draggable();
						mascaras();
						//criar_css();
						$('select.design').select2();
						$('[rel="tooltip"]').tooltip();
					}
				}
			});
		}
		function datatable_boxs_update(){
			$.atualizar_datatable_boxs();
		};
		function datatable_campos_boxs_fechar(){
			$('.datatable_campos_boxs').html('');
		}
		function datatable_campos_boxs_selecionar_select2($rand, e){
			$val = $(e).parent().parent().find('.td_datatable.td_0').attr('dir');
			$('select[rand='+$rand+']').val($val).trigger('change');
		}

		function datatable_acoes_botao_extra($link){
			$ids = '-';
			$(".ui-selected td:first-child > div").each(function() {
				$dir = $(this).attr('dir');
				if($dir != undefined)
					$ids += $dir+'-';
			});
			window.open($link+'?ids='+$ids, '_blank');
		}
	// DATATABLE BOXS (DATATABLE EXTRA)