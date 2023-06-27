
	// Abas
	function menu_admin_abas($acao, e){
		if($acao=='novo'){
			$n=0;
			$(e).parent().parent().parent().find('> li').each(function(e) {
				if($n <= parseInt($(this).attr('dir')))
					$n = parseInt($(this).attr('dir'));
			});
			$n++;
			$html = $('.abas_novo').html();
			$html = $html.replaceAll("-key-", $n);
			$(e).parent().parent().parent().append($html);
			$html = $('.colunas_campos_novo').html();
			$html = $html.replaceAll("-key-", $n);
			$(e).parent().parent().parent().parent().find('.campos_menu_admin').append($html);
			$(e).parent().parent().parent().parent().find('li[tabs="tabs_abas_'+$n+'"] ul.itens').html('<li dir="txt" class="menu_admin_campos_0_txt ui-sortable-handle">     <em class="ml5 mr10"></em>     <a onclick="menu_admin_outros_campos(this)" class="seta dni"> <i class="faa-chevron-down"></i> <i class="db mt-9 faa-chevron-down"></i> </a>      <div class="w15 fll finput finput_check">    <div class="input dbi mt7">    <input name="campos['+$n+'][txt][check]" id="campos_ckeck_0_TXT" type="checkbox" value="1" class="design" checked="">    </div>     </div>     <div class="dib fll pt6">    <label class="w40 db pl5 limit" for="campos_ckeck_0_TXT"> (TXT) </label>     </div>     <div class="w85 fll finput finput_temp">    <div class="input">    <div class="posr"><select name="campos['+$n+'][txt][tipo]" class="design menu_admin_select_tipo_0_txt select2-hidden-accessible" tabindex="-1" aria-hidden="true">   <option value="text">Text</option>   <option value="categorias">Categorias</option>   <option value="subcategorias">Subcategorias</option>   <option value="preco">Preço</option>   <option value="estados">Estados</option>   <option value="cidades">Cidades</option>   <option value="bairros">Bairros*</option>   <option value="password">Password</option>   <option value="email">Email</option>   <option value="date">Data</option>   <option value="datetime-local">Data e Hora</option>   <option value="color">Color</option>   <option value="number">Número</option>   <option value="range">Range</option>   <option value="url">Url</option>   <option value="tel">Telefone</option>   <option value="file">File</option>   <option value="checkbox">Checkbox</option>   <option value="radio">Radio</option>   <option value="select">Select</option>   <option value="textarea" selected="">Textarea</option>   <option value="button">Button</option>   <option value="editor">Editor</option>   <option value="file_editor">File Editor</option>   <option value="hidden">Hidden</option>   <option value="info">Info</option>   <option value="boxx">Boxx</option>    </select><div class="select2 select2-container p0 select2_inicial select2-container--default" dir="ltr" style="width: 100px;"><div class="selection"><div class="select2-selection select2-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-campos['+$n+'][txt][tipo]-vh-container"><div class="select2-selection__rendered" id="select2-campos['+$n+'][txt][tipo]-vh-container" title="Textarea">Textarea</div><div class="select2-selection__arrow" role="presentation"><b role="presentation"></b></div></div></div><div class="dropdown-wrapper" aria-hidden="true"></div></div></div>    <script>   $(document).ready(function(){     $(".menu_admin_select_tipo_0_txt").on("select2:select", function (e) {     menu_admin_select_temp("0_txt", e);     });   });    </script>    </div>     </div>     <div class="w95 fll ml7 finput finput_fields">    <div class="input">    <div class="input"> <input name="campos['+$n+'][txt][fields]" type="text" class="design" placeholder="Fields" value="1"> </div>    </div>     </div>     <div class="w80 fll ml7 finput finput_resp">    <div class="input">    <div class="posr"><select name="campos['+$n+'][txt][resp]" class="design select2-hidden-accessible" tabindex="-1" aria-hidden="true">   <option value="wr1">WR1</option>   <option value="wr15">WR1,5</option>   <option value="wr2">WR2</option>   <option value="wr25">WR2,5</option>   <option value="wr3">WR3</option>   <option value="wr35">WR3,5</option>   <option value="wr4">WR4</option>   <option value="wr45">WR4,5</option>   <option value="wr5">WR5</option>   <option value="wr55">WR5,5</option>   <option value="wr6">WR6</option>   <option value="wr65">WR6,5</option>   <option value="wr7">WR7</option>   <option value="wr75">WR7,5</option>   <option value="wr8">WR8</option>   <option value="wr85">WR8,5</option>   <option value="wr9">WR9</option>   <option value="wr95">WR9,5</option>   <option value="wr10">WR10</option>   <option value="wr105">WR10,5</option>   <option value="wr11">WR11</option>   <option value="wr115">WR11,5</option>   <option value="wr12" selected="">WR12</option>    </select><div class="select2 select2-container p0 select2_inicial select2-container--default" dir="ltr" style="width: 100px;"><div class="selection"><div class="select2-selection select2-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-campos['+$n+'][txt][resp]-u7-container"><div class="select2-selection__rendered" id="select2-campos['+$n+'][txt][resp]-u7-container" title="WR12">WR12</div><div class="select2-selection__arrow" role="presentation"><b role="presentation"></b></div></div></div><div class="dropdown-wrapper" aria-hidden="true"></div></div></div>    </div>     </div>     <div class="calc375 ml370">    <div class="wf15 finput finput_nome" title="Nome">    <label class="p0">&nbsp;</label>    <div class="input"> <input name="campos['+$n+'][txt][nome]" type="text" class="design" value="Descrição curta"> </div>    </div>    <div class="wf15 pl10 fll finput finput_input_nome" title="Name">    <label class="p0">&nbsp;</label>    <div class="input"> <input name="campos['+$n+'][txt][input][nome]" type="text" class="design" value="txt"> </div>    </div>    <div class="wf25 pl10 fll finput finput_input_tags" title="Tags">    <label class="p0">&nbsp;</label>    <div class="input"> <input name="campos['+$n+'][txt][input][tags]" type="text" class="design autocomplete" value=""> </div>    </div>    <div class="wf25 pl10 fll finput finput_input_opcoes" title="opçoes ou Onclick para Button">    <label class="p0">&nbsp;</label>    <div class="input"> <input name="campos['+$n+'][txt][input][opcoes]" type="text" class="design" value="0"> </div>    </div>    <div class="wf25 pl10 fll finput finput_input_extra" title="Extra">    <label class="p0">&nbsp;</label>    <div class="input"> <input name="campos['+$n+'][txt][input][extra]" type="text" class="design" placeholder="Extra" value=""> </div>    </div>    <div class="wf15 pl10 fll finput finput_input_gerenciar" title="Gerenciar"> 	   <div class="input"> 	   <div class="posr"><select name="campos['+$n+'][txt][gerenciar]" class="design select2-hidden-accessible" tabindex="-1" aria-hidden="true"> 	  <option value="0"> - - - </option> 	  <option value="1">Novo</option> 	  <option value="2">Gerenciar</option> 	  <option value="3">Novo e Gerenciar</option> 	   </select><div class="select2 select2-container p0 select2_inicial select2-container--default" dir="ltr" style="width: 100px;"><div class="selection"><div class="select2-selection select2-selection--single" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-campos['+$n+'][txt][gerenciar]-qe-container"><div class="select2-selection__rendered" id="select2-campos['+$n+'][txt][gerenciar]-qe-container" title=" - - - "> - - - </div><div class="select2-selection__arrow" role="presentation"><b role="presentation"></b></div></div></div><div class="dropdown-wrapper" aria-hidden="true"></div></div></div> 	   </div>    </div>    <div class="clear"></div>     </div>      <div class="dn outros_campos">    <a onclick="menu_admin_deletar_campos(this)" class="seta mt37 fz14 c_vermelho"> <i class="faa-times"></i> </a>    <div class="h10 clear"></div>    <div>    	<!-- Campos dn -->    </div>    <div class="clear"></div>     </div>      <div class="clear"></div>   </li>');

		} else if($acao=='check' || $acao=='disable'){
			$(e).find('i').toggle();
			$status = $(e).find('i.ativo').css('display');
			$status = $status=='none' ? 0 : 1;
			$(e).parent().find('.menu_admin_abas_nome .'+$acao).val($status);

		} else if($acao=='edit'){
			if($(e).parent().find('.menu_admin_abas_nome').is(":visible")){
				$(e).parent().find('.menu_admin_abas_nome').stop(true, true).fadeOut();
			} else {
				$(e).parent().find('.menu_admin_abas_nome').stop(true, true).fadeIn();
			}

		} else if($acao=='delete'){
			$(e).parent().parent().remove();
		}
	};
	function menu_admin_abas_nome(e, ev){
		if(ev.keyCode == 13)
			$(e).parent().stop(true, true).fadeOut();
		$(e).parent().parent().parent().find('.abas_nome').$html( $(e).val() );

	};


	// Colunas e Campos
	function menu_admin_mais_menos($acao, e){
		if($acao==1){
			$n=0;
			$(e).parent().parent().find('> ul > li').each(function(e) {
				if($n <= parseInt($(this).attr('dir')))
					$n = parseInt($(this).attr('dir'));
			});
			$n++;
			tipo = $(e).parent().parent().parent().attr('tipo');
			$html = $('.'+tipo+'_novo').html();
			if(tipo=='camposs'){
				kabas = $(e).parent().parent().parent().attr('dir');
				$html = $html.replaceAll("-kabas-", kabas);
			}
			$html = $html.replaceAll("-key-", $n);
			$html = $html.replaceAll("z-design-z", "design");
			$(e).parent().parent().find('> ul > li[dir=txt]').before($html);
			setTimeout(function(){ $('ul.menu_admin li.menu_admin_campos_'+kabas+'_'+$n+' select.design').select2() }, 100);
		} else if($acao==0){
			$(e).parent().parent().find('> ul > li[dir=txt]').prev().remove();
		}
	};


	// Outros Campos
	function menu_admin_outros_campos(e){
		if($(e).parent().find('> .outros_campos').is(":visible")){
			$(e).parent().find('> .outros_campos').hide();
			$(e).find('> i').removeClass('fa-chevron-up');
			$(e).find('> i').addClass('fa-chevron-down');
		} else {
			$('.menu_admin  .outros_campos').hide();
			$(e).parent().find('> .outros_campos').show();
			$(e).find('> i').removeClass('fa-chevron-down');
			$(e).find('> i').addClass('fa-chevron-up');
		}
	}
	function menu_admin_deletar_campos(e){
		var $apagar = confirm('Deseja excluir este item?');
		if($apagar)
			$(e).parent().parent().remove();
	}

	// menu_admin_select_temp
	function menu_admin_select_temp($key, ev){
		$val = select2_val(ev);

		$('.menu_admin_campos_'+$key+' .finput_check input').prop("checked", true);
		if($val == 'categorias'){
			$('.menu_admin_campos_'+$key+' .finput_nome input').val('Categorias');
			$('.menu_admin_campos_'+$key+' .finput_input_nome input').val('categorias');
			$('.menu_admin_campos_'+$key+' .finput_input_opcoes input').val('(categorias)');

		} else if($val == 'subcategorias'){
			$('.menu_admin_campos_'+$key+' .finput_nome input').val('Categorias');
			$('.menu_admin_campos_'+$key+' .finput_input_nome input').val('subcategorias');
			$('.menu_admin_campos_'+$key+' .finput_input_opcoes input').val('(subcategorias)');

		} else if($val == 'preco'){
			$('.menu_admin_campos_'+$key+' .finput_nome input').val('Preço');
			$('.menu_admin_campos_'+$key+' .finput_input_nome input').val('preco');
			$('.menu_admin_campos_'+$key+' .finput_input_tags input').val('class="preco"');

		} else if($val == 'estados'){
			$('.menu_admin_campos_'+$key+' .finput_nome input').val('Estados');
			$('.menu_admin_campos_'+$key+' .finput_input_nome input').val('estados');
			$('.menu_admin_campos_'+$key+' .finput_input_tags input').val('rel_estados="cidades"');
			$('.menu_admin_campos_'+$key+' .finput_input_opcoes input').val('(estados)');

		} else if($val == 'cidades'){
			$('.menu_admin_campos_'+$key+' .finput_nome input').val('Cidades');
			$('.menu_admin_campos_'+$key+' .finput_input_nome input').val('cidades');
			$('.menu_admin_campos_'+$key+' .finput_input_tags input').val('');
			$('.menu_admin_campos_'+$key+' .finput_input_opcoes input').val('(cidades)');

		} else if($val == 'mais_campos'){
			$('.menu_admin_campos_'+$key+' .finput_nome input').val('');
			$('.menu_admin_campos_'+$key+' .finput_input_nome input').val('');
			$('.menu_admin_campos_'+$key+' .finput_input_tags input').val('<a onclick="mais_campos(this, '+A+A+')" class="c_azul link">Adicionar mais</a>');
			$('.menu_admin_campos_'+$key+' .finput_input_opcoes input').val('');
		}

	}

	function boxx_novo($e){	
		$html = $($e).parent().find('.boox_zerado').html();
		$html = $html.replaceAll("design_boxx", "design");
		$($e).parent().find('.boox_zerado').before($html);
		mascaras();
		$('select.design').select2();
	}
	function boxx_remove($e){
		$($e).parent().remove();
	}
