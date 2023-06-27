
	function dialog_mini($id){
		$('footer .abas li.aba_'+$id).addClass('mini');
		x = 0;
		$("ul.abas li").each(function(){
			if( !($(this).hasClass('ativo') || $(this).hasClass('mini')) && x==0 ){
				$(this).trigger('click');
			}
		});
		$(".ui-dialog.pg_"+$id+" #dialog").dialog("close");
		$('footer .abas li.aba_'+$id).removeClass('ativo');
	};
	function dialog_max($id){
		if($(".ui-dialog.pg_"+$id).hasClass("max") == true){
			$(".ui-dialog.pg_"+$id).removeClass('max');
		} else {
			$(".ui-dialog.pg_"+$id).addClass('max');
		}
	};
	function dialog_fechar($id, $ids){
		pop_fechar();
		$(".ui-dialog.pg_"+$id+" #dialog").dialog("destroy");
		$('footer .abas li.aba_'+$id).remove();
		//pop_fechar();
		if(table_datatable_atualizar_quando_fechar($id)){
			datatable_update();
		} else {
			datatable_update('row', $ids);
		}
	};
	function dialog_abrir($id){
		$('footer .abas li.aba_'+$id).removeClass('mini');
		$(".ui-dialog.pg_"+$id+" #dialog").dialog("open");
	};
	function dialog_click($id){
		$(".ui-dialog.pg_"+$id+" #dialog").on("dialogfocus", function( event, ui ){
			$('footer .abas li').removeClass('ativo')
			$('footer .abas li.aba_'+$id).addClass('ativo')			
		});
	};
	function dialog_click_aba($id){
		$('footer .abas li').removeClass('ativo')
		$('footer .abas li.aba_'+$id).addClass('ativo')
		dialog_abrir($id);
	};
	function dialog_button_form(e, $tipo){
		if($tipo){
			$(e).parent().parent().find('.tabs form input[name=acao_button]').val($tipo);
			$(e).parent().parent().find('.tabs form input[type=submit]').trigger('click');
		}
	};
