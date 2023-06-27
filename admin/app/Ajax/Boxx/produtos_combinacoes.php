<?

	if(isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id){

		$input1 = new Input();
		if(isset($value1->id)){
			$id = $value1->id;
			// Values
			$val = (object)array();
			$v = 'boxx['.$rel.'][nome]['.$id.']';		$val->$v = isset($value1->nome) ? $value1->nome : '';
			$v = 'boxx['.$rel.'][codigo]['.$id.']';		$val->$v = isset($value1->codigo) ? $value1->codigo : '';
			$v = 'boxx['.$rel.'][foto]['.$id.']';		$val->$v = isset($value1->foto) ? $value1->foto : '';
			$v = 'boxx['.$rel.'][estoque]['.$id.']';	$val->$v = isset($value1->estoque) ? $value1->estoque : '';

			$v = 'boxx['.$rel.'][preco1]['.$id.']';		$val->$v = isset($value1->preco1) ? $value1->preco1 : '';
			$v = 'boxx['.$rel.'][preco]['.$id.']';		$val->$v = isset($value1->preco) ? $value1->preco : '';
			$v = 'boxx['.$rel.'][preco2]['.$id.']';		$val->$v = isset($value1->preco2) ? $value1->preco2 : '';
			$v = 'boxx['.$rel.'][parcelas]['.$id.']';	$val->$v = isset($value1->parcelas) ? $value1->parcelas : '';

			$v = 'boxx['.$rel.'][produtos_atributos1]['.$id.']';	$val->$v = isset($value1->produtos_atributos1) ? sem('acentos_all_carrinho1', $value1->produtos_atributos1) : '';
			$v = 'boxx['.$rel.'][produtos_atributos2]['.$id.']';	$val->$v = isset($value1->produtos_atributos2) ? sem('acentos_all_carrinho1', $value1->produtos_atributos2) : '';
			$v = 'boxx['.$rel.'][produtos_atributos3]['.$id.']';	$val->$v = isset($value1->produtos_atributos3) ? sem('acentos_all_carrinho1', $value1->produtos_atributos3) : '';
			$v = 'boxx['.$rel.'][produtos_atributos4]['.$id.']';	$val->$v = isset($value1->produtos_atributos4) ? sem('acentos_all_carrinho1', $value1->produtos_atributos4) : '';
			$v = 'boxx['.$rel.'][produtos_atributos5]['.$id.']';	$val->$v = isset($value1->produtos_atributos5) ? sem('acentos_all_carrinho1', $value1->produtos_atributos5) : '';
			$v = 'boxx['.$rel.'][produtos_atributos6]['.$id.']';	$val->$v = isset($value1->produtos_atributos6) ? sem('acentos_all_carrinho1', $value1->produtos_atributos6) : '';
			$v = 'boxx['.$rel.'][produtos_atributos7]['.$id.']';	$val->$v = isset($value1->produtos_atributos7) ? sem('acentos_all_carrinho1', $value1->produtos_atributos7) : '';
			$v = 'boxx['.$rel.'][produtos_atributos8]['.$id.']';	$val->$v = isset($value1->produtos_atributos8) ? sem('acentos_all_carrinho1', $value1->produtos_atributos8) : '';
			$v = 'boxx['.$rel.'][produtos_atributos9]['.$id.']';	$val->$v = isset($value1->produtos_atributos9) ? sem('acentos_all_carrinho1', $value1->produtos_atributos9) : '';
			$v = 'boxx['.$rel.'][produtos_atributos10]['.$id.']';	$val->$v = isset($value1->produtos_atributos10) ? sem('acentos_all_carrinho1', $value1->produtos_atributos10) : '';

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

		        $input1->tags = ' class="design" ';
		        //$return .= '<li class="wr6 h40"> '.$input1->text('Nome', 'boxx['.$rel.'][nome]['.$id.']').'</li> ';

		        //$return .= '<li class="wr6 h40"> '.$input1->text('Código', 'boxx['.$rel.'][codigo]['.$id.']').'</li> ';

		        $mysql = new Mysql();
				$mysql->filtro = " WHERE ".STATUS." ORDER BY ".ORDER." ";
				$produtos_atributos1_cate = $mysql->read('produtos_atributos1_cate');
				foreach ($produtos_atributos1_cate as $key1 => $value1) {

					$name = 'boxx['.$rel.'][produtos_atributos'.($key1+1).']['.$id.']';
					$return .= '<li class="wr4 h40"> ';
						$return .= '<div class="finput finput_'.$name.'"> ';
							$return .= '<label class="lnome" for="'.$name.'"><p> '.$value1->nome.': </p> </label> ';
							//$return .= '<label class="lnome" for="'.$name.'"><p> Atributo '.($key1+1).': </p> </label> ';
							$return .= '<div class="input" rel="tooltip" data-original-title=""> ';
								$return .= '<select name="'.$name.'" id="boxx_produtos_combinacoes_produtos_atributos'.($key1+1).'_'.$id.'" class="designx"> ';
									$return .= '<option value="">- - -</option> ';

										$mysql->filtro = " WHERE ".STATUS." AND categorias = '".$value1->id."' ORDER BY ".ORDER." ";
										$consulta = $mysql->read('produtos_atributos');
										foreach ($consulta as $key3 => $value3) {
											$return .= '<option value="'.$value3->id.'" '.((isset($input1->value->$name) AND $input1->value->$name==$value3->id) ? 'selected' : '').'>'.$value3->nome.'</option> ';
										}

									// APARECER TODOS
									/*
										foreach ($produtos_atributos1_cate as $key2 => $value2) {
											$return .= '<optgroup label="'.$value2->nome.'"> ';
												$mysql->filtro = " WHERE ".STATUS." AND categorias = '".$value2->id."' ORDER BY ".ORDER." ";
												$consulta = $mysql->read('produtos_atributos');
												foreach ($consulta as $key3 => $value3) {
													$return .= '<option value="'.$value3->id.'" '.((isset($input1->value->$name) AND $input1->value->$name==$value3->id) ? 'selected' : '').'>'.$value3->nome.' ('.$value2->nome.')</option> ';
												}
											$return .= '</optgroup> ';
										}
									*/
									// APARECER TODOS

								$return .= '</select> ';
							$return .= '</div> ';
						$return .= '</div>  ';
					$return .= '</li> ';
				}



				if(LUGAR == 'site'){
			        $return .= '<li class="wr4 h40 pt5 o-h"><div class="posa pl10">Foto:</div> <input type="file" name="boxx['.$rel.'][foto]['.$id.']" id="boxx_produtos_combinacoes_foto_'.$id.'" class=" pl50 fz12 vam"></li> ';
				} else {
		        	$input1->tags = ' class="design" ';
			        $return .= '<li class="wr4 h40"> '.$input1->file('Foto', 'boxx['.$rel.'][foto]['.$id.']').'</li> ';
				}




		        $input1->tags = ' class="design preco" ';
		        $input1->extra = 'Ex: R$ 100,00 ';
		        $return .= '<li class="wr4 h40"> '.$input1->text('Preço Antigo', 'boxx['.$rel.'][preco1]['.$id.']', 'search').'</li> ';

		        $input1->extra = 'Ex: R$ 100,00 ';
		        $return .= '<li class="wr4 h40"> '.$input1->text('Preço Atual', 'boxx['.$rel.'][preco]['.$id.']', 'search').'</li> ';

		        $input1->tags = ' class="design" value="0" min="0" ';
		        $return .= '<li class="wr4 h40"> '.$input1->text('Estoque', 'boxx['.$rel.'][estoque]['.$id.']', 'number').'</li> ';


		        //$input1->extra = 'Ex: R$ 100,00 ';
		        //$return .= '<li class="wr3 h40"> '.$input1->text('Preço Parcelado', 'boxx['.$rel.'][preco2]['.$id.']', 'search').'</li> ';

		        //$input1->tags = ' class="design" value="0" min="0" ';
		        //$return .= '<li class="wr3 h40"> '.$input1->text('Nº de Parcelas', 'boxx['.$rel.'][parcelas]['.$id.']', 'number').'</li> ';

			$return .= '</fieldset>';

	}

?>

