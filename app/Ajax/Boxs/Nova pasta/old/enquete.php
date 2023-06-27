<?

	$DIR_F = explode(DIRECTORY_SEPARATOR.'app'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
	require_once $DIR_F[0].'/system/conecta.php';

	$mysql = new Mysql();
	$mysql->ini();

	$arr = array();
	$arr['alert'] = 0;


		$mysql->prepare = array($_POST['id']);
		$mysql->filtro = " WHERE ".STATUS." AND `id` = ? ORDER BY ".ORDER." ";
		$enquete = $mysql->read_unico('enquete');

		$arr['title'] = 'Enquete';
		$arr['html']  = '<div class="w300 pt20 pb40 pl40 pr40"> ';
							for ($i=0; $i < 20; $i++) {

								$col = $i ? 'opcao'.$i : 'opcao';
								$mysql->filtro = " WHERE ".STATUS." AND `voto` = '".$col."' ";
								$enquete_votos = $mysql->read('enquete_votos');

								if(isset($enquete->$col) AND $enquete->$col){
									$arr['html'] .= '<div class="pt10">
														<b>'.$enquete->$col.':</b>
														'.count($enquete_votos).' voto(s)
													 </div>';
								}
							}

		$arr['html'] .= '</div> ';



	$mysql->fim();
	echo json_encode($arr); 

?>