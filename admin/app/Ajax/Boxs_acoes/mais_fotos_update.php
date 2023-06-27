<?	ob_start();

	$DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';
	require_once DIR_F.'/app/Funcoes/funcoesAdmin.php';

	$mysql = new Mysql();
	$mysql->ini();

	$arr = array();

	if(isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id){

		$arr['html'] = '<span class="bd_ccc dn"></span>';

		$mysql->prepare = array($_POST['tabelas'], $_POST['item']);
		$mysql->filtro = " WHERE `tabelas` = ? AND `item` = ? ORDER BY `ordem` ASC, `id` ASC ";
		$mais_fotos = $mysql->read('mais_fotos');
		foreach ($mais_fotos as $key => $value) {

			$arr['html'] .= '<div class="wf4 p10"> ';
				$arr['html'] .= '<div class="p10 br5" style="background:#fff; border: 1px solid #ccc;"> ';

					$arr['html'] .= '<div class="wr6 fll pr10"> <label for="imgFoto_'.$value->id.'"> <a href="'.DIR_C.'/web/fotos/'.FOTOS.$value->foto.'" target="_blank"> <img src="'.DIR.'/web/fotos/'.FOTOS.$value->foto.'" class="w100p" style="max-height: 80px !important;"> </a> </label> </div> ';
					$arr['html'] .= '<div class="wr6 fll"> ';
						$arr['html'] .= '<input name="nome['.$value->id.']" type="text" class="design w100p h24" value="'.$value->nome.'" placeholder="Nome" > ';
						$arr['html'] .= '<div class="h05"></div> ';
						$arr['html'] .= '<input name="ordem['.$value->id.']" type="text" class="ordem design w50p h24 tac" value="'.$value->ordem.'" maxlength="3" onclick="this.select()" > ';
						$arr['html'] .= '<div class="h05"></div> ';
						$arr['html'] .= '<label class="fll p5" title="Selecione os itens que deseja excluir!" > <input type="checkbox" name="delete['.$value->id.']" id="imgFoto_'.$value->id.'" value="1" class="design vm"> </label> ';
						$arr['html'] .= '<a class="fll p5" onclick="datatable_acoes('.A.'block'.A.', '.A.$_POST['modulos'].A.', '.A.$value->id.A.', '.A.'mais_fotos'.A.', '.A.$_POST['item'].A.')">    <i class="di fz16  faa-check '.iff($value->status, 'c_verde', 'n_ativo').'"></i> </a> ';
						$arr['html'] .= '<a class="fll p5" onclick="datatable_acoes('.A.'delete'.A.', '.A.$_POST['modulos'].A.', '.A.$value->id.A.', '.A.'mais_fotos'.A.', '.A.$_POST['item'].A.')">    <i class="di fz16 faa-times c_vermelho"></i> </a> ';
						$arr['html'] .= '<div class="clear"></div> ';
					$arr['html'] .= '</div> ';
					$arr['html'] .= '<div class="clear"></div> ';

				$arr['html'] .= '</div> ';
			$arr['html'] .= '</div> ';

		}
		$arr['html'] .= '<div class="clear"></div> ';


		$arr['html'] .= '<script> setTimeout(function(){ mais_fotos_update_boxxs(); }, .5); </script> ';

		$arr['n'] = count($mais_fotos);

	}

	$mysql->fim();
	echo json_encode($arr); 

?>