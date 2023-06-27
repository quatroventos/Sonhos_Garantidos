<?

	if(isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id){

		$input1 = new Input();
		if(isset($value1->id)){
			$id = $value1->id;
			// Values
			$val = (object)array();
			$v = 'boxx['.$rel.'][qtd]['.$id.']';		$val->$v = isset($value1->qtd) ? $value1->qtd : '';
			$v = 'boxx['.$rel.'][preco]['.$id.']';		$val->$v = isset($value1->preco) ? $value1->preco : '';
			$v = 'boxx['.$rel.'][preco1]['.$id.']';		$val->$v = isset($value1->preco1) ? $value1->preco1 : '';

			$input1->value = $val;
			// Values
		} else {
			$id = '';
		}


		$rand = rand();
		$design = isset($boox_zerado) ? 'design_boxx' : 'design';

	    	$return .= '<fieldset class="posr w100p fll p5 pr10 mt5 mb5 br1">';

	    		if($id){
					$return .= '<input type="hidden" name="boxx['.$rel.'][id]['.$id.']" value="'.$id.'"> ';
	    		}

				$return .= '<span class="posa z2 pt2 pl4 pr4 c-p bd_ccc back_fff br50p" style="top: -10px; right: -8px;" onclick="boxx_remove(this)"> <i class="faa-times fz16 m0 c_vermelho"></i> </span> ';

		        $input1->tags = ' class="design" value="1" min="1" ';
		        $return .= '<li class="wr4 h40"> '.$input1->text('Qtd', 'boxx['.$rel.'][qtd]['.$id.']', 'number').'</li> ';

		        $input1->tags = ' class="design preco" ';
		        $return .= '<li class="wr4 h40"> '.$input1->text('Valor de Desconto', 'boxx['.$rel.'][preco]['.$id.']', 'search').'</li> ';

		        $input1->tags = ' class="design" min="0" ';
		        $return .= '<li class="wr4 h40"> '.$input1->text('Porcentagem de Desconto', 'boxx['.$rel.'][preco1]['.$id.']', 'number').'</li> ';

			$return .= '</fieldset>';

	}

?>

