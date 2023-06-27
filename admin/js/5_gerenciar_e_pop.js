

	function gerenciar_novo_item($name, $modulo){
		$classe = '.popover .popover-content .gravar_categoria';
		$rand = 'gerenciar_'+parseInt(Math.random()*10000000);
		$('select#'+$name).attr('gerenciar_rand', $rand);

		$('select#'+$name).popover({
		    html: true,
			container: 'body',
		    placement: 'top',
		    title: 'Cadastrar Novo Item:',
		    content: function() {
				$return  = '<p style="margin:0 0 5px;">Digite abaixo o nome do item que você deseja cadastrar:</p> ';
				$return  = '<form class="form_'+$rand+'" action="" method="post" enctype="multipart/form-data"> ';
					$return += '<input type="text" name="nome" class="w100p mt3 design" placeholder="Digite aqui o nome..." autocomplete="off" required> ';
					$return += '<div class="pt10 tac"> ';
					$return += '	<button class="gravar_categoria dibi h-a pt5 pb5 mr5 botao"><i class="mr5 faa-check c_verde"></i> Salvar</button> ';
					$return += '	<button type="button" onclick="pop_fechar('+A+$rand+A+')"; class="dibi h-a pt5 pb5 ml5 botao"><i class="mr5 faa-times c_vermelho"></i> Cancelar</button> ';
					$return += '</div> ';
					$return += '<input type="hidden" name="acao_button" value="gerenciar">';
				$return += '</form> ';
				$return += '<script> gravar_item('+$modulo+', 0, "form.form_'+$rand+'") </script> ';
		        return $return;
		    }
		}).trigger('click');
		setTimeout(function(){ $('.popover .popover-content input[name=nome]').focus() }, 100);
	}


	function gerenciar_itens($name, $modulo){
			$val = $('select#'+$name).val();
			$rand = parseInt(Math.random()*10000000);
			$('select#'+$name).attr('gerenciar_rand', 'gerenciar_'+$rand);
			$('.events_externos .boxs').html('<div class="box_table gerenciar gerenciar_'+$rand+' dn posfi t1p l1p w98p br2" style="height: 98%;"> <a onclick="gerneciar_fechar('+A+'gerenciar_'+$rand+A+', '+A+$val+A+')" class="fechar t3 z1"><i class="faa-times"></i></a> <div class="contextoo p0"> <h3> Gerenciar Itens </h3> <div class="contextooo p20"></div> </div> <div class="clear"></div> </div>');
			$('.events_externos .boxs > .gerenciar_'+$rand).stop(true, true).slideDown();
			setTimeout(function(){ views($modulo, 0, 'gerenciar=1&rand='+$rand); }, .5);
	}


	function gerenciar_fechar_selecionado($rand){
		$ids = '-';
		$('.datatable_gerenciar .ui-selected td:first-child > div').each(function() {
			$dir = $(this).attr('dir');
			if($dir != undefined){
				$ids += $dir+'-';
			}
		});
		gerneciar_fechar($rand, $ids);
	}


	function gerneciar_fechar($rand, $value, $so_fechar){
		$('.events_externos > .boxs > .gerenciar').slideUp();
		$('.ui-dialog.gerenciar.z9').remove();
		setTimeout(function(){ $('.events_externos > .boxs > .gerenciar').remove(); }, 500);

		$('.popover').popover('destroy');

		if($rand && !$so_fechar){
			select_relacao($('select[gerenciar_rand="'+$rand+'"]'), 1, $value);
		}
	}

	function pop_fechar($rand, $value){
		//gerneciar_fechar($rand, $value, 1);
		$('.popover').popover('destroy');
	}
