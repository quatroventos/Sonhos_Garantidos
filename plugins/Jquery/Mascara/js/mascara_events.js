
	function mascaras(){

	    /* Mascara */
			$("input.cpf, input#cpf").mask("000.000.000-00");
			$("input.cnpj, input#cnpj").mask("00.000.000/0000-00");
			$("input.cep, input#cep").mask("00.000-000");		

			$('input.date').mask("00/00/0000");
			$('input.data').mask("00/00/0000");
			$('input.data_dia_mes').mask("00/00");
			$('input.hora').mask("00:00");

			$("input.placa").mask("SSS 0000");

			$("input.cartao_numero").mask("0000 0000 0000 0000");
			$('input.cartao_validade').mask("00/0000")
			$('input.cartao_cvv').mask("000")

			//, { reverse : true} preencher da esquerda para a direita

			// TELEFONE 8 OU 9 DIGITOS
				$("input[type=tel].telefone8").mask("(00) 0000-00000");
				$("input[type=tel].telefone9").mask("(00) 00000-0000");

				$("input[type=tel]").keyup(function (event) { tel_digitos(this); });
				$(document).ready(function() {
					$("input[type=tel]").each(function() {
						tel_digitos(this);
					})
				});

				function tel_digitos($e){
					setTimeout(function(){
						if($($e).val().length > 14){
							$($e).removeClass('telefone8').addClass('telefone9');
						} else {
							$($e).removeClass('telefone9').addClass('telefone8');
						}
					}, 500);
				}
        	// TELEFONE 8 OU 9 DIGITOS
	    /* Mascara */
	    
	    /* Preco */
			$("input.preco").each(function() {
				$limit = $(this).attr('limit') ? parseInt($(this).attr('limit')) : '';
				$casas = $(this).attr('casas') ? parseInt($(this).attr('casas')) : 2;
				$(this).priceFormat({
					prefix: '',
					suffix: '',
					centsSeparator: '.',
					thousandsSeparator: '',
					limit: $limit,
					centsLimit: $casas,
				});
			});

			$(".preco1").each(function() {
				$limit = $(this).attr('limit') ? parseInt($(this).attr('limit')) : '';
				$casas = $(this).attr('casas') ? parseInt($(this).attr('casas')) : 2;
				$(this).priceFormat({
					prefix: '',
					suffix: '',
					centsSeparator: ',',
					thousandsSeparator: '.',
					limit: $limit,
					centsLimit: $casas,
				});
			});

			$(".preco_xxx").each(function() {
				$limit = $(this).attr('limit') ? parseInt($(this).attr('limit')) : '';
				$casas = $(this).attr('casas') ? parseInt($(this).attr('casas')) : 2;
				$(this).priceFormat({
					prefix: 'R$ ',
					suffix: '',
					centsSeparator: ',',
					thousandsSeparator: '.',
					limit: $limit,
					centsLimit: $casas,
				});
			});
			$(".preco_temp").each(function() {
				$limit = $(this).attr('limit') ? parseInt($(this).attr('limit')) : '';
				$casas = $(this).attr('casas') ? parseInt($(this).attr('casas')) : 2;
				$(this).priceFormat({
					prefix: '',
					suffix: '',
					centsSeparator: ',',
					thousandsSeparator: '.',
					limit: $limit,
					centsLimit: $casas,
				});
			});
	    /* Preco */

			$(".notas_mask").each(function() {
				$limit = '';
				$casas = 1;
				$(this).priceFormat({
					prefix: '',
					suffix: '',
					centsSeparator: ',',
					thousandsSeparator: '',
					limit: $limit,
					centsLimit: $casas,
				});
			});

	};

	function mascaras1(){

	    /* Mascara */
			if(browser() != 'chrome'){
				$('input[type="text_date"]').mask("00/00/0000", {placeholder: "dd/mm/YYYY"}).datepicker();
				$('input[type="text_datetime-local"]').mask("00/00/0000 00:00", {placeholder: "dd/mm/YYYY --:--"});

			} else {
				//$(document).on('click','input[type="date"]',function(){
					//$(this).siblings('[type="date"]').removeClass('hidden').focus().click();
					//$(this).remove();
				//});
			}

			$("input.date").mask("00/00/0000").datepicker();
	    /* Mascara */

	};