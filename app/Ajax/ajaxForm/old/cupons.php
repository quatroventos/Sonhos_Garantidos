<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();
	$mysql->ini();

	$arr = array();
	$arr['alert'] = 'z';
	$arr['evento'] = '';


		unset($_SESSION['desconto']['cupons']);

		$descontos = array();
		if(isset($_SESSION['x_site']->id)){
			//$mysql->colunas = 'nascimento';
			//$mysql->prepare = array($_SESSION['x_site']->id);
			//$mysql->filtro = " WHERE `id` = ? ";
			//$cadastro_pd = $mysql->read_unico('cadastro');

			// Cupons
			if(isset($_POST['cupons']) and $_POST['cupons']){

				$mysql->filtro = " where ".STATUS." AND nome = '".$_POST['cupons']."' ".cupons_filtro_data()." AND seller IN (".implode(', ', carrinho_seller()).") ";
				$cupons = $mysql->read_unico('cupons');
				if(isset($cupons->id)){ //and ($cupons->id!=1 or ($cupons->id==1 and $cadastro_pd->nascimento == date('Y-m-d')) ) ){
					$arr['id'] = $_SESSION['desconto']['cupons']['id'] = $cupons->id;

					if(numero($cupons->preco)>0){
						$descontos[] = preco($cupons->preco, 1);
					}
					if(numero($cupons->preco1)>0){
						$descontos[] = preco($cupons->preco1, 0, 2, ',', '.', 1).'%';
					}
					if($cupons->frete){
						$descontos[] = 'Frete grátis';
						$_SESSION['desconto']['cupons']['frete_gratis'] = 1;
					}

					$preco2 = '';
					if($cupons->preco2>0){
						$preco2 = ' *Para compras acima ou igual à '.preco($cupons->preco2, 1);
					}
					$arr['evento'] .= '$('.A.'#carrinho_endereco .fretes .carrinho_all_pac_input'.A.').trigger('.A.'click'.A.'); ';
				}
			}
		}


		if($descontos){
			$arr['evento'] .= '$('.A.'.cupons_desconto_info'.A.').html('.A.'(Você acaba de ganhar: '.implode(' + ', $descontos).' de desconto'.$preco2.')'.A.'); ';
			$arr['evento'] .= "$('.alert_cupom').show(); ";
		} else {
			$arr['evento'] .= '$('.A.'.cupons_desconto_info'.A.').html('.A.'Cupom não encontrado!'.A.'); ';
		}

		$arr['evento'] .= 'CC_atualizar(); ';


	$mysql->fim();
	echo json_encode($arr); 
?>