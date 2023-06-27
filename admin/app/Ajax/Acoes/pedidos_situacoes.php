<?

	if(!isset($include)){
		$DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
		require_once $DIR_F[0].'/system/conecta.php';
		require_once DIR_F.'/app/Funcoes/funcoesAdmin.php';
	}

	$mysql = new Mysql();
	$mysql->ini();

	$arr = array();
	$arr['alert'] = 'z';


	if(isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id){


		// PEDIDO
			// GRAVAR NOVA SITUACAO
				if( (isset($_POST['gravar']) and $_POST['gravar']) or isset($_POST['ini']) ){

					// Atualizando Status
					if((isset($_POST['gravar']) and $_POST['gravar'])){
						$mysql->prepare = array($_POST['id']);
						$mysql->filtro = " WHERE `id` = ? ";
						$pedidos = $mysql->read_unico($_POST['table']);
						if($pedidos->id){
							$retorno_admin = 1;
							include '../../../../app/Ajax/Pagamentos/retorno_pedidos.php';
							$arr['alert'] = 1;
						}
					}


					// HTML do Item
					$mysql->prepare = array($_POST['id']);
					$mysql->filtro = " WHERE `id` = ? ";
					$pedidos = $mysql->read_unico($_POST['table']);

					$html = '';

					function pedidos_usuarios($usuarios){
						$return = '(automático)';
						if(preg_match('(->)', $usuarios)){
							$ex = explode('->', $usuarios);
							$return = '*'.limit(rel($ex[1], $ex[0], 'nome', '(usuario deletado)'), 15);
						} elseif($usuarios) {
							$return = limit(rel('usuarios', $usuarios, 'nome', '(usuario deletado)'), 15);
						}
						return $return;
					}

					function pedidos_status($pedidos, $value){
		                $situacao = $value->pedidos_situacoes ? rel('pedidos_situacoes', $value->pedidos_situacoes) : SITUACAO_PD;
		                $situacao_cor = $value->pedidos_situacoes ? rel('pedidos_situacoes', $value->pedidos_situacoes, 'cor') : '';
		                $situacao_icon = $value->pedidos_situacoes ? rel('pedidos_situacoes', $value->pedidos_situacoes, 'icon') : 'faa-clock-o';
		                $return  = '<li class="w100p p0" rel="tooltip" data-original-title="'.str_replace('
	', ' ', $value->txt).'" > ';
							$return .= '<div class="w30p h25 fll pt5 pb5 limit pl10 tal">'.data($value->data, 'd/m/Y - H:i').'</div> ';
			                $return .= '<div class="w40p h25 fll pt5 pb5 limit tal"><i class="ml5 fz14 '.$situacao_icon.'" style="color:'.$situacao_cor.'"></i> '.$situacao.iff($value->txt, '**').'</div> ';
			                $return .= '<div class="w30p h25 fll pt5 pb5 limit pr10 tar">'.pedidos_usuarios($value->usuarios).' <a onclick=ajaxNormalAdmin("Acoes/pedidos_situacoes.php","delete='.$value->id.'&table='.$_POST['table'].'&id='.$pedidos->id.'") class="botao_excluir_pedidos_situacoes"><i class="ml2 fz14 faa-times-circle c_vermelho"></i></a> </div> ';
		                $return .= '</li>';
		                return $return;
					}

					// Pedidos Status
					$mysql->prepare = array($pedidos->id);
		            $mysql->filtro = " WHERE `pedidos` = ? ORDER BY `id` ASC ";
		            $pedidos_status = $mysql->read("pedidos_status");
		            foreach ($pedidos_status as $key => $value){
		            	 $html .= pedidos_status($pedidos, $value);
		            }

		            // Status Atual
			        $situacao = $pedidos->situacao ? rel('pedidos_situacoes', $pedidos->situacao) : SITUACAO_PD;
			        $situacao_cor = $pedidos->situacao ? rel('pedidos_situacoes', $pedidos->situacao, 'cor') : '';
			        $situacao_icon = $pedidos->situacao ? rel('pedidos_situacoes', $pedidos->situacao, 'icon') : 'faa-clock-o';
			        $html .= '<li class="w100p p0" rel="tooltip" data-original-title="'.str_replace('
	', ' ', $pedidos->situacao_txt).'" > ';
			            $html .= '<div class="w30p h25 fll pt5 pb5 limit pl10 tal">'.iff($pedidos->situacao_data!='0000-00-00 00:00:00', data($pedidos->situacao_data, 'd/m/Y - H:i'), data($pedidos->data, 'd/m/Y - H:i')).'</div> ';
			            $html .= '<div class="w40p h25 fll pt5 pb5 limit tal"><i class="ml5 fz14 '.$situacao_icon.'" style="color:'.$situacao_cor.'"></i> '.$situacao.iff($pedidos->situacao_txt, '**').'</div> ';
			            $html .= '<div class="w30p h25 fll pt5 pb5 limit pr10 tar">'.pedidos_usuarios($pedidos->situacao_usuarios).' <a onclick=ajaxNormalAdmin("Acoes/pedidos_situacoes.php","delete=0&table='.$_POST['table'].'&id='.$pedidos->id.'") class="botao_excluir_pedidos_situacoes"><i class="ml2 fz14 faa-times-circle c_vermelho"></i></a> </div> ';
			        $html .= '</li>';

					$arr['evento']  = "$('.pedidos_edit #pedidos_situacoes textarea').html('').val(''); ";
					$arr['evento'] .= "$('.pedidos_edit .status ul').html('".$html."'); ";
					$arr['evento'] .= "$('[rel=tooltip]').tooltip(); ";
				}
			// GRAVAR NOVA SITUACAO




			// DELETAR SITUACAO
				elseif(isset($_POST['delete'])){
					if($_POST['delete']){
						$mysql->prepare = array($_POST['delete']);
						$mysql->filtro = " WHERE `id` = ? ";
						$mysql->delete('pedidos_status');
					} else {
						$mysql->prepare = array($_POST['id']);
			            $mysql->filtro = " WHERE `pedidos` = ? ORDER BY `id` DESC ";
			            $pedidos_status = $mysql->read_unico("pedidos_status");

						unset($mysql->campo);
						$mysql->logs_caminho = '../../';
						$mysql->prepare = array($_POST['id']);
						$mysql->filtro = " WHERE `id` = ? ";
						$mysql->campo['situacao'] = isset($pedidos_status->pedidos_situacoes) ? $pedidos_status->pedidos_situacoes : 0;
						$mysql->campo['situacao_data'] = isset($pedidos_status->data) ? $pedidos_status->data : 0;
						$mysql->campo['situacao_usuarios'] = isset($pedidos_status->usuarios) ? $pedidos_status->usuarios : 0;
						$mysql->campo['situacao_txt'] = isset($pedidos_status->txt) ? $pedidos_status->txt : '';
						$mysql->update($_POST['table']);

						if(isset($pedidos_status->id)){
							unset($mysql->campo);
							$mysql->prepare = array($pedidos_status->id);
							$mysql->filtro = " WHERE `id` = ? ";
							$mysql->delete('pedidos_status');
						}
					}

					$arr['alert'] = 1;
					$arr['evento'] = 'ajaxNormalAdmin("Acoes/pedidos_situacoes.php","table='.$_POST['table'].'&id='.$_POST['id'].'&ini=1"); ';
				}
			// DELETAR SITUACAO
		// PEDIDO











		// ASSINATURA
			// NOVA TRANSACAO
				elseif(isset($_POST['nova_transacao']) AND isset($_POST['situacao'])){
					$arr['alert'] = 1;

					$mysql->prepare = array($_POST['nova_transacao']);
					$mysql->filtro = " WHERE `id` = ? ";
					$pedidos = $mysql->read_unico("pedidos");

					$mysql->filtro = " where id = '".$pedidos->planos."' ";
					$planos = $mysql->read_unico("planos_assinantes");

					// Gravando Status do Pedido
					$mysql->logs = 0;
					$mysql->campo['situacao'] = $_POST['situacao'];
					$mysql->campo['pedidos'] = $pedidos->id;
					$mysql->campo['cadastro'] = $pedidos->cadastro;
					$mysql->campo['formas_pagamento'] = 0;
					$mysql->campo['planos'] = $pedidos->planos;
					$mysql->campo['valor_total'] = $pedidos->valor_total;

					$mysql->campo['tabelas'] = 'usuarios';
					$mysql->campo['usuarios'] = $_SESSION['x_admin']->id;
					$mysql->campo['txt'] = $_POST['txt'];

					if($_POST['situacao'] == 1){ // Data de Vencimento
						$table = 'pedidos_status_pago';
						$mysql->campo['data_vencimento'] = date('Y-m-d', mktime(0,0,0, date('m')+$planos->meses, date('d')+1, date('Y')));
						$arr['id'] = $mysql->insert($table);
					} else {
						$table = 'pedidos_status_outros';
						$arr['id'] = $mysql->insert($table);						
					}

					unset($mysql->campo);
					$mysql->filtro = " where id = '".$arr['id']."' ";
					$mysql->campo['transacao'] = transacao($table, $arr['id']);
					$mysql->update($table);

					// Add Item na Tabela
					$mysql->filtro = " where id = '".$arr['id']."' ";
					$pedidos = $mysql->read_unico($table);
					$arr['evento']  = "$('ul.historico_pagamentos').append('".historico_pagamentos($pedidos)."'); ";
					$arr['evento'] .= '$('.A.'[rel="tooltip"]'.A.').tooltip(); ';
					$arr['evento'] .= '$(".nenhuma_transacao").hide(); ';
				}
			// NOVA TRANSACAO

			// DELETAR TRANSACAO
				elseif(isset($_POST['delete_transacao'])){
					$arr['alert'] = 1;

					$mysql->filtro = " where id = '".$_POST['delete_transacao']."' ";
					$consulta = $mysql->read_unico($_POST['table']);

					if($consulta->status){
						$mysql->campo['status'] = 0;
						$arr['evento']  = '$(".historico_pagamentos_'.$_POST['table'].'_'.$_POST['delete_transacao'].'").css("color", "#ccc"); ';
						$arr['evento'] .= '$(".historico_pagamentos_'.$_POST['table'].'_'.$_POST['delete_transacao'].' i.acao").addClass("faa-check c_verde"); ';
						$arr['evento'] .= '$(".historico_pagamentos_'.$_POST['table'].'_'.$_POST['delete_transacao'].' i.acao").removeClass("faa-times-circle c_vermelho"); ';
					} else {
						$mysql->campo['status'] = 1;
						$arr['evento'] = '$(".historico_pagamentos_'.$_POST['table'].'_'.$_POST['delete_transacao'].'").css("color", "#666"); ';
						$arr['evento'] .= '$(".historico_pagamentos_'.$_POST['table'].'_'.$_POST['delete_transacao'].' i.acao").addClass("faa-times-circle c_vermelho"); ';
						$arr['evento'] .= '$(".historico_pagamentos_'.$_POST['table'].'_'.$_POST['delete_transacao'].' i.acao").removeClass("faa-check c_verde"); ';
					}

					$mysql->filtro = " where id = '".$_POST['delete_transacao']."' ";
					$mysql->update($_POST['table']);
				}
			// DELETAR TRANSACAO
		// ASSINATURA












		// RASTREAMENTO
			elseif(isset($_POST['rastreamento'])){

				$mysql->prepare = array($_POST['id']);
				$mysql->filtro = " WHERE `id` = ? ";
				$pedidos = $mysql->read_unico($_POST['table']);
				if($pedidos->id){

					// Atualizando Histrico de Status do Pedido
					if($pedidos->situacao != 100){
						unset($mysql->campo);
						$mysql->campo['pedidos_situacoes'] = $pedidos->situacao;
						$mysql->campo['pedidos'] = $pedidos->id;
						$mysql->campo['data'] = $pedidos->situacao_data!='0000-00-00 00:00:00' ? $pedidos->situacao_data : $pedidos->data;
						$mysql->campo['usuarios'] = $pedidos->situacao_usuarios;
						$mysql->campo['txt'] = $pedidos->situacao_txt;
						$mysql->insert('pedidos_status');
					}

					// Gravar o Rastreamento e Mudando Status
					unset($mysql->campo);
					$mysql->logs_caminho = '../../';
					$mysql->prepare = array($_POST['id']);
					$mysql->filtro = " WHERE `id` = ? ";
					$mysql->campo['rastreamento'] = $_POST['rastreamento'];
					if($pedidos->situacao != 100){
						$mysql->campo['situacao'] = 100;
						$mysql->campo['situacao_data'] = date('c');
						$mysql->campo['situacao_usuarios'] = $_SESSION['x_admin']->id;
						$mysql->campo['situacao_txt'] = $_POST['rastreamento'];
					}
					$mysql->update($_POST['table']);

					// ENVIAR EMAIL
					$mysql->prepare = array($pedidos->cadastro);
					$mysql->filtro = " WHERE `id` = ? ";
					$cadastro = $mysql->read_unico('cadastro');
					if(isset($cadastro->id) and $_POST['rastreamento']){
						$mysql->filtro = " WHERE id = 53 ";
						$textos = $mysql->read_unico('textos');
						$var_email = 'DIR->'.DIR.'&nome->'.$cadastro->nome.'&rastreamento->'.$_POST['rastreamento'].'&id->'.$pedidos->id.'&produtos->'.cod('asc->html', $pedidos->nome).'&valor->'.preco($pedidos->valor_total, 1);

						$email = new Email();
						$email->to			= $cadastro->email;
						//$email->remetente	= nome_site();
						$email->assunto		= var_email($textos->nome, $var_email);
						$email->txt 		= var_email(txt($textos), $var_email);
						$email->enviar();
					}
				}

				$arr['alert'] = 1;
				$arr['evento'] = 'ajaxNormalAdmin("Acoes/pedidos_situacoes.php","table='.$_POST['table'].'&id='.$_POST['id'].'&ini=1"); ';
				//$arr['evento'] .= "dialog_fechar(19); ";

			}
		// RASTREAMENTO

	}



	$mysql->fim();
	if(!isset($include))
		echo json_encode($arr); 

?>