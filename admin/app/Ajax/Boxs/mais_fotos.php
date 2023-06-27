<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';
	require_once DIR_F.'/app/Funcoes/funcoesAdmin.php';

	$mysql = new Mysql();
	$mysql->ini();

	$arr = array();
	$arr['html'] = '';


	if(isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id){


		$mysql->prepare = array($_POST['modulos']);
		$mysql->filtro = " WHERE `id` = ? ";
		$modulos = $mysql->read_unico('menu_admin');

		$verificacoes = new Verificacoes();
		$verificacoes->modulos = $modulos;
		$verificacoes->permissoes_all(0, 'lista');


		$arr['title'] = 'Mais Fotos';
		$_POST['rand'] = isset($_POST['rand'])? $_POST['rand'] : 0;

		$arr['html'] .= '<div class="w700 w-a_700 itens mb10"> ';

			$form = "form_mais_fotos_".rand();
			$arr['html'] .= '<div form="'.$form.'"></div> ';

			$arr['html'] .= '<div class="pl10 pr10"> ';
				$arr['html'] .= '<form id="'.$form.'" class="fll mr5" action="'.DIR.'/admin/app/Ajax/Boxs_acoes/mais_fotos_gravar_fotos.php?modulos='.$_POST['modulos'].'&item='.$_POST['item'].'&col='.$_POST['col'].'" method="post" enctype="multipart/form-data"> ';

					$arr['html'] .= '<label for="multifotos" class="botao dibi h34 pb8 ba0 br0 input file"> ';
						$arr['html'] .= '<span class="vm c-p limit"> <i class="faa-file-image-o ml2 mr3 c_azul"></i> <span>Selecionar Fotos</span> </span> ';
						$arr['html'] .= '<input type="file" name="multifotos[]" id="multifotos" class="design " onchange="input_file(this)" multiple=""> ';
					$arr['html'] .= '</label> ';
					$arr['html'] .= '<input type="submit" class="dni"> ';

				$arr['html'] .= '</form> ';

				$arr['html'] .= '<button form="form_mais_fotos" onclick="submitt('.A.'#'.$form.A.')" class="botao fll mr5"> <i class="icon mr5 faa-check c_verde"></i> Salvar </button> ';
				$arr['html'] .= '<button form="form_mais_fotos" onclick="$('.A.'input[name=tipo]'.A.').val('.A.'delete'.A.')" class="botao fll mr5"> <i class="icon mr5 faa-times c_vermelho"></i> Deletar Selecionados </button> ';
				$arr['html'] .= '<button form="form_mais_fotos" onclick="$('.A.'input[name=tipo]'.A.').val('.A.'crop'.A.')" class="botao fll"> <i class="icon mr5 faa-crop c_amarelo"></i> Recortar Selecionados </button> ';
				$arr['html'] .= '<div class="clear"></div> ';
			$arr['html'] .= '</div> ';

			$arr['html'] .= '<form id="form_mais_fotos" action="javascript:void(0)" onsubmit="mais_fotos_gravar('.A.$_POST['modulos'].A.', '.A.$_POST['item'].A.', '.A.$_POST['col'].A.', this)" method="post" enctype="multipart/form-data"> ';
				$arr['html'] .= ' <script> mais_fotos_update('.A.$modulos->modulo.A.', '.A.$_POST['item'].A.', '.A.$_POST['modulos'].A.', '.A.$_POST['col'].A.'); </script> ';
				$arr['html'] .= ' <div class="mais_fotos_update"></div> ';
				$arr['html'] .= '<input type="hidden" name="tipo" /> ';
			$arr['html'] .= '</form> ';
		
		$arr['html'] .= '</div> ';

		$arr['html'] .= '<style> .botao { padding: 8px 12px; } </style> ';

		$arr['evento'] = 'ajaxForm('.A.$form.A.')';


	}


	$mysql->fim();
	echo json_encode($arr); 

?>