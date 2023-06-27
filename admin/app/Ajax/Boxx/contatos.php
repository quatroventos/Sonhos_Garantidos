<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';
	require_once DIR_F.'/app/Funcoes/funcoesAdmin.php';

	$mysql = new Mysql();
	$input = new Input();

	$tipo = $_GET['tipo'];


	if(isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id){


		if(isset($_GET['id']) and $_GET['id']){
			$mysql->prepare = array($_GET['id']);
			$mysql->filtro = " WHERE ".STATUS." AND `cadastro` = ? ";
			$enderecos = $mysql->read($_GET['table'].'_'.str_replace('inserir_box_', '', $tipo));
		} else {

			$mysql->logs = 0;
			$mysql->campo['lang'] = LANG;
			$_GET['id'] = $mysql->insert('cadastro_'.str_replace('inserir_box_', '', $tipo));

			$mysql->prepare = array($_GET['id']);
			$mysql->filtro = " WHERE ".STATUS." AND `id` = ? ";
			$enderecos = $mysql->read('cadastro_'.str_replace('inserir_box_', '', $tipo));
		}


		$x=0;
		foreach ($enderecos as $key => $value){

			// Values
			$val = (object)array();
			$v = $tipo.'['.$value->id.'][nome]';			$val->$v = isset($value->nome) ? $value->nome : '';
			$v = $tipo.'['.$value->id.'][depto]';			$val->$v = isset($value->depto) ? $value->depto : '';
			$v = $tipo.'['.$value->id.'][telefone]';		$val->$v = isset($value->telefone) ? $value->telefone : '';
			$v = $tipo.'['.$value->id.'][celular]';			$val->$v = isset($value->celular) ? $value->celular : '';
			$input->value = $val;
			// Values


			echo !isset($_GET['novo']) ? '<div class="boxx ml10 '.iff(!$x, 'boxx_pinc').'"> ' : '';

				echo '<div class="topo"> ';
					echo '<div class="fll"> <div class="input"> <label class="w200 pb5"> <input type="radio" name="'.$tipo.'[principal]" '.iff($value->principal, 'checked').' value="'.$value->id.'" class="design "> <p>&nbspPrincipal</p> </label> </div> </div> ';
					echo ($x OR isset($_GET['novo'])) ? '<span class="flr m5 c-p" onclick="fieldset_fechar(this)"> <i class="faa-times fz16 m0 c_vermelho"></i> </span> ' : '';
					echo '<div class="clear"></div> ';
				echo '</div> ';

				echo '<div class="item"> ';

			        $input->tags = ' class="nome design" required ';
			        echo '<li class="wr3"> '.$input->text('Nome', $tipo.'['.$value->id.'][nome]').'</li> ';

			        $input->tags = ' class="design" required ';
			        echo '<li class="wr3"> '.$input->text('Depto', $tipo.'['.$value->id.'][depto]').'</li> ';

			        $input->tags = ' class="design" required ';
			        echo '<li class="wr3"> '.$input->text('Telefone', $tipo.'['.$value->id.'][telefone]').'</li> ';

			        $input->tags = ' class="design" ';
			        echo '<li class="wr3"> '.$input->text('celular', $tipo.'['.$value->id.'][celular]').'</li> ';

					echo '<div class="clear"></div> ';
				echo '</div> ';

			echo !isset($_GET['novo']) ? '</div> ' : '';

			$x++;

		}

	}


?>

