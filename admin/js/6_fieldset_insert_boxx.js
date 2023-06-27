
	// Fieldset button (Inserir box (campos) de Enderecos, Contatos, etc...)
	function fieldset_ini(e, $table, $id){
		$tipo = $(e).attr('name');
		$extra = $(e).parent().find('.extra');
		$extra.load(DIR+"/admin/app/Ajax/Boxx/"+$tipo.replace("inserir_box_", "")+".php?tipo="+$tipo+"&table="+$table+"&id="+$id);
		fieldset_scripts($tipo);
	}
	function fieldset(e){
		$tipo = $(e).attr('name');
		$extra = $(e).parent().find('.extra');
		$rand = 'boxx_'+parseInt(Math.random()*10000000);
		$extra.append( $('<div class="boxx '+$rand+'">').load(DIR+"/admin/app/Ajax/Boxx/"+$tipo.replace("inserir_box_", "")+".php?novo=1&tipo="+$tipo) );
		required_invalid('.'+$rand, 1000);
		fieldset_scripts($tipo);
		fieldset_principal_posicao($extra);
	}
	function fieldset_fechar(e){
		$item = $(e).find_parent('class', 'boxx');
		$extra = $(e).find_parent('class', 'extra');
		if($item.hasClass("boxx_pinc") == false)
			$item.remove();
		fieldset_principal_posicao($extra);

		$checked = 0;
		if($extra.find('.topo input:radio').is(':checked')){
			$checked = 1;
		}
		if(!$checked)
			$extra.find('.boxx_pinc .topo input:radio').trigger('click');
	};
	function fieldset_principal_posicao($extra){
		setTimeout(function(){
			$x = 0;
			$($extra).find(".boxx").each(function() {
				$(this).find('input, select, textarea').attr('dir', $x);
				//$(this).find('.topo input:radio').val($x);
				$x++;
			});
		}, 500);
	};
	function fieldset_scripts($tipo){
		setTimeout(function(){
			mascaras();
			$(".fbutton .extra."+$tipo+" .boxx select.designx").select2();
		}, 500);
	};