<?

	if($modulos->id == 19){

		$arr['html'] .= '<div class="pb10">';

			$arr['html'] .= '<div class="dib">';
				$arr['html'] .= '<form method="post" action="javascript:void(0)" onsubmit="datatable_filtro('.$modulos->id.', this)" autocomplete="off"> ';
					$arr['html'] .= '<b class="dib">Data:</b>';
					$arr['html'] .= '<div class="dib"> ';
						$arr['html'] .= 'de <input type="date" name="datatable_filtro[value][ff;;data][from]" class="w140 h30 design required"> ';
						$arr['html'] .= 'até <input type="date" name="datatable_filtro[value][ff;;data][to]" class="w140 h30 design required"> ';
						$arr['html'] .= '<button class="botao">OK</button> ';
					$arr['html'] .= '</div> ';
					$arr['html'] .= '<input type="hidden" name="datatable_filtro[nome][ff;;data]" value="Data"> ';
					$arr['html'] .= '<input type="hidden" name="datatable_filtro[tipo][ff;;data]" value="date"> ';
					$arr['html'] .= '<button class="dni button_filtro_novo_situacao"></button> ';
				$arr['html'] .= '</form>';
			$arr['html'] .= '</div>';


			$arr['html'] .= '<div class="dib pl40">';
				$mysql->filtro = " WHERE 1 ";
				$situacoes = $mysql->read('pedidos_situacoes');
				$opcoes = '0->'.SITUACAO_PD.'; ';
				$arr['html'] .= '<form method="post" action="javascript:void(0)" onsubmit="datatable_filtro('.$modulos->id.', this)" autocomplete="off"> ';
					$arr['html'] .= '<b class="dib">Status:</b>';
					$arr['html'] .= '<div onclick="$('.A.'.input_filtro_novo_situacao'.A.').val(0); $('.A.'.button_filtro_novo_situacao'.A.').trigger('.A.'click'.A.')" class="dib p5 m5 c-p" style="border: 1px solid #ccc"><i class="mr5 fz14 faa-clock-o"></i>'.SITUACAO_PD.'</div> ';
					foreach ($situacoes as $key => $value) {
						$opcoes .= $value->id.'->'.$value->nome.'; ';
						$arr['html'] .= '<div onclick="$('.A.'.input_filtro_novo_situacao'.A.').val('.$value->id.'); $('.A.'.button_filtro_novo_situacao'.A.').trigger('.A.'click'.A.')" class="dib p5 m5 c-p" style="border: 1px solid #ccc"><i class="mr5 fz14 fa '.$value->icon.'" style="color:'.$value->cor.'"></i>'.$value->nome.'</div>';
					}
					$arr['html'] .= '<input type="hidden" name="datatable_filtro[value][ff;;situacao]" class="input_filtro_novo_situacao" /> ';
					$arr['html'] .= '<input type="hidden" name="datatable_filtro[nome][ff;;situacao]" value="Situação"> ';
					$arr['html'] .= '<input type="hidden" name="datatable_filtro[tipo][ff;;situacao]" value="select"> ';
					$arr['html'] .= '<input type="hidden" name="datatable_filtro[opcoes][ff;;situacao]" value="'.$opcoes.'"> ';
					$arr['html'] .= '<button class="dni button_filtro_novo_situacao"></button> ';
				$arr['html'] .= '</form>';
			$arr['html'] .= '</div>';


		$arr['html'] .= '</div>';

	}

?>