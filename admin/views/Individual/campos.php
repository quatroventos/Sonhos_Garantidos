<?

    $campos = array('ini'=>array(''), 'centro_ini'=>array(''), 'centro'=>array(''), 'centro_fim'=>array(''), 'fim'=>array(''), 'fimm'=>array(''));


        // Melhor Envio
        $mysql->filtro = " where tipo = 'frete' ";
        $frete = $mysql->read_unico('configs');
        if($modulos->modulo == 'configs' AND isset($frete->melhor_envio_client_id) AND $frete->melhor_envio_client_id AND isset($frete->melhor_envio_client_secret) AND $frete->melhor_envio_client_secret){

            $melhor_envio_client_id = $frete->melhor_envio_client_id;
            $link_autenticar = 1;
            $campos['centro_ini'][0] .= '<div class="p10">
                                            <div class="pb10 fz16 fwb">AUTENTICAÇÃO COM O MELHOR ENVIO</div> ';
                                            if($frete->melhor_envio_token AND $frete->melhor_envio_refresh_token){
                                                $frete = verificar_token__atualizar_token($frete, 0);
                                                if($frete->melhor_envio_token_data <= date('Y-m-d')){
            $campos['centro_ini'][0] .= '           <b>STATUS:</b> <span class="c_vermelho">AUTENTICAÇÃO EXPIROU, AUTENTIQUE NOVAMENTE!</span> ';
                                                } else {
                                                    $link_autenticar = 0;
            $campos['centro_ini'][0] .= '           <b>STATUS:</b> <span class="c_verde">AUTENTICADO!</span> ';
                                                }
                                            } else {
            $campos['centro_ini'][0] .= '       <b>STATUS:</b> <span class="c_vermelho">NÃO AUTENTICADO!</span> ';
                                            }
                                            if($link_autenticar){
            $campos['centro_ini'][0] .= '       <div class="pt10">Autencicar: <a href="'.URL_MELHOR_ENVIO.'/oauth/authorize?client_id='.$melhor_envio_client_id.'&redirect_uri='.DIR_C.'/app/Melhor_Envio/autenticar.php&response_type=code&state=teste&scope=cart-read cart-write companies-read companies-write coupons-read coupons-write notifications-read orders-read products-read products-write purchases-read shipping-calculate shipping-cancel shipping-checkout shipping-companies shipping-generate shipping-preview shipping-print shipping-share shipping-tracking ecommerce-shipping transactions-read users-read users-write" class="c_azul link">Clique aqui para autenticar sua Conta com o Melhor Envio</a></div> ';
                                            }
            $campos['centro_ini'][0] .= '</div> ';
                                
        }



	
		if($modulos->id == 88){
			if(isset($_POST['situacao'])){
				$mysql->filtro = " WHERE id = '".$_GET['id']."' ";
				$doacoes_pagamentos = $mysql->read_unico('doacoes_pagamentos');
	
				$mysql->campo['situacao_data'] = date('c');
				$mysql->campo['situacao_usuarios'] = $_SESSION['x_admin']->id;
				$mysql->filtro = " WHERE id = '".$_GET['id']."' ";
				$mysql->update('doacoes_pagamentos');
	
				if($_POST['situacao'] == 1){
					$situacao = 1;
					include DIR_F.'/app/Ajax/Pagamentos/retorno_doacoes_pagamentos.php';
				}
			}
		}




        if($modulos->modulo == ''){






        // Cadastro
        } elseif($modulos->modulo == 'cadastro'){

            if($linhas){
                if(LUGAR == 'admin' or LUGAR == 'clientes'){
                    $campos['ini'][0] .= '<li class="wr12 ml12"> <a onclick="boxs('.A.'alterar_senha'.A.', '.A.'modulos='.$modulos->id.'&id='.$linhas->id.A.');" class="c_azul">Alterar senha</a> </li> ';
                }

            } else {
                $input->tags = ' class="design" required ';
                $campos['ini'][0] .= '<li class="wr6 linhas_inputs"> '.$input->text('Senha', 'senha', 'password').'</li> ';
                $campos['ini'][0] .= '<li class="wr6 linhas_inputs"> '.$input->text('Confirmar Senha', 'c_senha', 'password').'</li> ';
            }


            if( (isset($linhas->cnpj) AND $linhas->cnpj) OR (isset($_GET['tipo']) AND $_GET['tipo'] == 1) ){
                $campos['fim'][0] .= '<script> ';
                    $campos['fim'][0] .= 'setTimeout(function(){ $("input.pf").find_parent("class", "linhas_inputs").remove(); $("select.pf").find_parent("class", "linhas_inputs").remove(); }, 100); ';
                    $campos['fim'][0] .= 'setTimeout(function(){ $("input.pf").find_parent("class", "linhas_inputs").remove(); $("select.pf").find_parent("class", "linhas_inputs").remove(); }, 1000); ';
                $campos['fim'][0] .= '</script> ';

            } else {
                $campos['fim'][0] .= '<script> ';
                    $campos['fim'][0] .= 'setTimeout(function(){ $("input.pj").find_parent("class", "linhas_inputs").remove(); $("select.pj").find_parent("class", "linhas_inputs").remove(); }, 100); ';
                    $campos['fim'][0] .= 'setTimeout(function(){ $("input.pj").find_parent("class", "linhas_inputs").remove(); $("select.pj").find_parent("class", "linhas_inputs").remove(); }, 1000); ';
                $campos['fim'][0] .= '</script> ';
            }



            // HISTORICO DE COMPRAS
                if($linhas and 1==2){

                    $campos['fim'][0] .= '<div class="clear"></div>';
                    $campos['fim'][0] .= '<div class="p20"> ';

                        $campos['fim'][0] .= '<table class="w100p" border="0" cellspacing="2" cellpadding="2"> ';
                          $campos['fim'][0] .= '<tr class="cor_777"> ';
                            $campos['fim'][0] .= '<td class="w50 tal p5 pl10 pr10 back_FFE5AA bd_E0D5C3"><b>Código</b></td> ';
                            $campos['fim'][0] .= '<td class="tac p5 pl10 pr10 back_FFE5AA bd_E0D5C3"><b>Data da Compra</b></td> ';
                            $campos['fim'][0] .= '<td class="tac p5 pl10 pr10 back_FFE5AA bd_E0D5C3"><b>Data da Aprovação</b></td> ';
                            $campos['fim'][0] .= '<td class="tac p5 pl10 pr10 back_FFE5AA bd_E0D5C3"><b>Valor Total</b></td> ';
                            $campos['fim'][0] .= '<td class="tac p5 pl10 pr10 back_FFE5AA bd_E0D5C3"><b>Situação</b></td> ';
                            $campos['fim'][0] .= '</tr> ';

                            $x=0;
                            for ($i=0; $i <= 1; $i++) { 
                                $tabela = !$i ? 'pedidos' : 'pedidos1';
                                $mysql->nao_existe = 1;
                                $mysql->prepare = array($linhas->id);
                                $mysql->filtro = " WHERE `cadastro` = ? ORDER BY `id` DESC ";
                                $pedidos = $mysql->read($tabela);
                                if($pedidos and is_array($pedidos)){
                                    foreach ($pedidos as $key => $value) { $x++;

                                        $situacao = $value->situacao ? rel('pedidos_situacoes', $value->situacao) : SITUACAO_PD;
                                        $situacao_cor = $value->situacao ? rel('pedidos_situacoes', $value->situacao, 'cor') : '';
                                        $situacao_icon = $value->situacao ? rel('pedidos_situacoes', $value->situacao, 'icon') : 'fa-clock-o';

                                        $mysql->filtro = " where `modulo` = 'pedidos' ";
                                        $menu_admin = $mysql->read_unico("menu_admin");

                                        $campos['fim'][0] .= '<tr class="hover_table" ondblclick="views('.$menu_admin->id.', 1, '.A.'table='.$tabela.'&id='.$value->id.A.')"> ';
                                            $campos['fim'][0] .= '<td class="tal p5 pl10 pr10 bd_E0D5C3"> #'.$value->id.' </td> ';
                                            $campos['fim'][0] .= '<td class="tac p5 pl10 pr10 bd_E0D5C3">'.data($value->data, 'd/m/Y H:i').'</td> ';
                                            $campos['fim'][0] .= '<td class="tac p5 pl10 pr10 bd_E0D5C3">'.iff($value->data_aprovacao!='0000-00-00 00:00:00', data($value->data_aprovacao, 'd/m/Y H:i:s'), '. . .').'</td> ';
                                            $campos['fim'][0] .= '<td class="tac p5 pl10 pr10 bd_E0D5C3">'.preco($value->valor_total, 1).'</td> ';
                                            $campos['fim'][0] .= '<td class="tac p5 pl10 pr10 bd_E0D5C3"><i class="mr5 fz14 fa '.$situacao_icon.'" style="color:'.$situacao_cor.'"></i> '.$situacao.'</td>';
                                        $campos['fim'][0] .= '</tr> ';

                                    }
                                }
                            }

                            if(!$x){
                                $campos['fim'][0] .= '<tr class="hover_table"> ';
                                    $campos['fim'][0] .= '<td class="tal p5 pl10 pr10 tac bd_E0D5C3" colspan="5"> Nenhum pedido encontrado... </td> ';
                                $campos['fim'][0] .= '</tr> ';
                            }

                        $campos['fim'][0] .= '</table> ';

                    $campos['fim'][0] .= '</div> ';



                    /* // CASHBACK
                    $campos['fim'][0] .= '<div class="p20"> ';

                        $campos['fim'][0] .= '<div class="pb10 fz14 fwb">CASHBACK</div> ';

                        $campos['fim'][0] .= '<table class="w100p" border="0" cellspacing="2" cellpadding="2"> ';
                          $campos['fim'][0] .= '<tr class="cor_777"> ';
                            $campos['fim'][0] .= '<td class="w50 tal p5 pl10 pr10 back_FFE5AA bd_E0D5C3"><b>Código</b></td> ';
                            $campos['fim'][0] .= '<td class="tac p5 pl10 pr10 back_FFE5AA bd_E0D5C3"><b>Data da Compra</b></td> ';
                            $campos['fim'][0] .= '<td class="tac p5 pl10 pr10 back_FFE5AA bd_E0D5C3 dni"><b>Data da Aprovação</b></td> ';
                            $campos['fim'][0] .= '<td class="tac p5 pl10 pr10 back_FFE5AA bd_E0D5C3"><b>Valor Total</b></td> ';
                            $campos['fim'][0] .= '<td class="tac p5 pl10 pr10 back_FFE5AA bd_E0D5C3"><b>Situação</b></td> ';
                            $campos['fim'][0] .= '</tr> ';

                            $x=0;
                            for ($i=0; $i <= 1; $i++) { 
                                $tabela = !$i ? 'pedidos' : 'pedidos1';
                                $mysql->nao_existe = 1;
                                $mysql->prepare = array($linhas->id);
                                $mysql->filtro = " WHERE `cadastro` = ? AND cacheback > 0 ORDER BY `id` DESC ";
                                $pedidos = $mysql->read($tabela);
                                if($pedidos and is_array($pedidos)){
                                    foreach ($pedidos as $key => $value) { $x++;

                                        $situacao = $value->situacao ? rel('pedidos_situacoes', $value->situacao) : SITUACAO_PD;
                                        $situacao_cor = $value->situacao ? rel('pedidos_situacoes', $value->situacao, 'cor') : '';
                                        $situacao_icon = $value->situacao ? rel('pedidos_situacoes', $value->situacao, 'icon') : 'fa-clock-o';

                                        $mysql->filtro = " where `modulo` = 'pedidos' ";
                                        $menu_admin = $mysql->read_unico("menu_admin");

                                        $campos['fim'][0] .= '<tr class="hover_table" ondblclick="views('.$menu_admin->id.', 1, '.A.'table='.$tabela.'&id='.$value->id.A.')"> ';
                                            $campos['fim'][0] .= '<td class="tal p5 pl10 pr10 bd_E0D5C3"> #'.$value->id.' </td> ';
                                            $campos['fim'][0] .= '<td class="tac p5 pl10 pr10 bd_E0D5C3">'.data($value->data, 'd/m/Y H:i').'</td> ';
                                            $campos['fim'][0] .= '<td class="tac p5 pl10 pr10 bd_E0D5C3">'.preco($value->valor_total, 1).'</td> ';
                                            $campos['fim'][0] .= '<td class="tac p5 pl10 pr10 bd_E0D5C3">'.preco($value->cacheback, 1).'</td> ';
                                        $campos['fim'][0] .= '</tr> ';

                                    }
                                }
                            }

                            if(!$x){
                                $campos['fim'][0] .= '<tr class="hover_table"> ';
                                    $campos['fim'][0] .= '<td class="tal p5 pl10 pr10 tac bd_E0D5C3" colspan="5"> Nenhum pedido encontrado... </td> ';
                                $campos['fim'][0] .= '</tr> ';
                            }

                        $campos['fim'][0] .= '</table> ';

                    $campos['fim'][0] .= '</div> ';
                    // CASHBACK */

                }
            // HISTORICO DE COMPRAS









        // Cadastro_planos_faturas
        } elseif($modulos->modulo == 'cadastro_planos_faturas'){

            if($linhas){
                $campos['fim'][0] .= '<script> ';
                    $campos['fim'][0] .= 'setTimeout(function(){ $(".finput_data_vencimento").find_parent("class", "linhas_inputs").remove(); }, 100); ';
                $campos['fim'][0] .= '</script> ';

            } else {
                $campos['fim'][0] .= '<script> ';
                    $campos['fim'][0] .= 'setTimeout(function(){ $(".finput_situacao").find_parent("class", "linhas_inputs").remove(); }, 100); ';
                $campos['fim'][0] .= '</script> ';
            }







        // Afiliados
        } elseif($modulos->modulo == 'afiliados'){

            if($linhas){
                if(LUGAR == 'admin' or LUGAR == 'afiliados'){
                    $campos['centro_ini'][0] .= '<li class="wr12 pb10 ml12"> <a onclick="boxs('.A.'alterar_senha'.A.', '.A.'modulos='.$modulos->id.'&id='.$linhas->id.A.');" class="c_azul">Alterar senha</a> </li> ';
                }

            } else {
                $input->tags = ' class="design" required ';
                $campos['centro_ini'][0] .= '<li class="wr6 linhas_inputs"> '.$input->text('Senha', 'senha', 'password').'</li> ';
                $campos['centro_ini'][0] .= '<li class="wr6 linhas_inputs"> '.$input->text('Confirmar Senha', 'c_senha', 'password').'</li> ';
            }


            if( (isset($linhas->tipo) AND $linhas->tipo == 1) OR (isset($_GET['tipo']) AND $_GET['tipo'] == 1) ){
                $campos['fim'][0] .= '<script> ';
                    $campos['fim'][0] .= 'setTimeout(function(){ $("input.pf").find_parent("class", "linhas_inputs").remove(); $("select.pf").find_parent("class", "linhas_inputs").remove(); }, 100); ';
                    $campos['fim'][0] .= 'setTimeout(function(){ $("input.pf").find_parent("class", "linhas_inputs").remove(); $("select.pf").find_parent("class", "linhas_inputs").remove(); }, 1000); ';
                $campos['fim'][0] .= '</script> ';                

            } else {
                $campos['fim'][0] .= '<script> ';
                    $campos['fim'][0] .= 'setTimeout(function(){ $("input.pj").find_parent("class", "linhas_inputs").remove(); $("select.pj").find_parent("class", "linhas_inputs").remove(); }, 100); ';
                    $campos['fim'][0] .= 'setTimeout(function(){ $("input.pj").find_parent("class", "linhas_inputs").remove(); $("select.pj").find_parent("class", "linhas_inputs").remove(); }, 1000); ';
                $campos['fim'][0] .= '</script> ';
            }






        // Pedidos
        } elseif($modulos->modulo == 'pedidos'){

            $pedidos = $linhas;
            $mysql->prepare = array($pedidos->cadastro);
            $mysql->filtro = " WHERE `id` = ? ";
            $cadastro = $mysql->read_unico("cadastro");

            $carrinho = json_decode(file_get_contents(DIR_F.'/plugins/Json/pedidos/'.$pedidos->id.'.json'));

            if(SELLER_OK){
                $mysql->filtro = " WHERE id < 10 ORDER BY `id` ASC ";
            } else {
                $mysql->filtro = " WHERE 1 ORDER BY `id` ASC ";
            }
            $pedidos_situacoes = $mysql->read("pedidos_situacoes");

            if(SELLER_OK){
                $itens = itens($pedidos->seller);
                $mysql->filtro = " WHERE ".STATUS." AND id IN (".$itens.") ";
                $seller = $mysql->read(SELLER);
            }

            $campos['ini'][0] .= '  <div class="pedidos_edit"> ';
                                        if($pedidos->imprimiu){
            $campos['ini'][0] .= '          <div class="pb10"><b>Pedido imprimido por:</b> '.$pedidos->imprimiu.'</div> ';
                                        }
                                        $link = ' href="'.DIR.'/imprimir_pedido?idd='.$pedidos->id.'" target="_blank" ';
                                        if( preg_match('('.rel('usuarios', $_SESSION['x_admin']->id).')', $pedidos->imprimiu) ){
                                            $link = ' onclick="if(confirm('.A.'Você já imprimiu esse pedido. Deseja imprimir denovo?'.A.')) location_aaxx(); "';
                                        }
            $campos['ini'][0] .= '      <div class="pb10"><a '.$link.' class="c_azul">Imprimir Pedido</a></div>
                                        <script>
                                            function location_aaxx(){
                                                window.parent.location = "'.DIR.'/imprimir_pedido?idd='.$pedidos->id.'";
                                            }
                                        </script> ';
            $campos['ini'][0] .= '      <div class="wr6">
                                            <fieldset>
                                                <legend> <i class="fz14 mr3 faa-th-list c_verde"></i> Status da Compra </legend>
                                                <div class="status mb10">
                                                    <ul></ul>
                                                    <script> ajaxNormalAdmin("Acoes/pedidos_situacoes.php", "table='.$table.'&id='.$pedidos->id.'&ini=1", 1) </script>
                                                    <div class="clear"></div>
                                                </div> ';
                                                if($pedidos->ja_foi_pago != 2){
            $campos['ini'][0] .= '                  <form id="pedidos_situacoes" action="'.DIR.'/admin/app/Ajax/Acoes/pedidos_situacoes.php" method="post">
                                                        <select name="pedidos_situacoes" class="designx" required > ';
                                                            if(LUGAR=='admin')
                                                                $campos['ini'][0] .= '<option value="0" '.iff($pedidos->situacao==0, 'selected').'>'.SITUACAO_PD.'</option> ';
                                                            foreach ($pedidos_situacoes as $key => $value) {
                                                                if(LUGAR=='admin' or (LUGAR=='empresas' and $value->id==3) )
                                                                    $campos['ini'][0] .= '<option value="'.$value->id.'" '.iff($pedidos->situacao==$value->id, 'selected').'>'.$value->nome.'</option> ';
                                                            }
            $campos['ini'][0] .= '                  </select>
                                                        <button class="h24 pt0 pb0 ml5 botao"> <i class="mr5 faa-check"></i> Salvar</button>
                                                        <textarea name="txt" class="w100p h50 mt5 p5 design" placeholder="Observação do status"></textarea>
                                                        <input type="hidden" name="id" value="'.$pedidos->id.'">
                                                        <input type="hidden" name="table" value="'.$table.'">
                                                        <input type="hidden" name="gravar" value="1">
                                                    </form>
                                                    <script>ajaxForm('.A.'pedidos_situacoes'.A.'); </script> ';
                                                } else {
            $campos['ini'][0] .= '                  <style> .botao_excluir_pedidos_situacoes { display: none; } </style> ';
                                                }

                                                if(isset($seller) AND $seller){
            $campos['ini'][0] .= '                  <div class="p5"> ';
                                                        foreach ($seller as $key1 => $value1) {
            $campos['ini'][0] .= '                          <div class="">
                                                                <b>Seller: '.rel(SELLER, $value1->id).'</b> &nbsp;
                                                                (Cód. Rastreamento: '.($pedidos->rastreamento ? $pedidos->rastreamento : '').')
                                                            </div>
                                                            <div class="flexx pt5">
                                                                '.status_pedidoo($pedidos, $value1->id).'
                                                            </div> ';
                                                        }
            $campos['ini'][0] .= '                  </div> ';
                                                }
            $campos['ini'][0] .= '          </fieldset>

                                            <fieldset>
                                                <legend> <i class="fz14 mr3 faa-user cor_999"></i> Informações do Cliente </legend>
                                                <div class="pb2"><b>'.$cadastro->nome.' (#'.$cadastro->id.')</b></div>
                                                <div class="pb2"><b>Email:</b> '.$cadastro->email.'</div>
                                                <div class="pb2"><b>Telefone:</b> '.$cadastro->telefone.' '.($cadastro->celular ? '/ '.$cadastro->celular : '').''.($cadastro->whatsapp ? '/ '.$cadastro->whatsapp : '').'</div>
                                                <div class="pb2"><b>Conta registrada:</b> '.data($cadastro->data, 'd/m/Y').'</div>
                                            </fieldset> ';

                                            $multifotos = multifotos($pedidos);
                                            if($multifotos){
            $campos['ini'][0] .= '              <fieldset>
                                                    <legend> <i class="fz14 mr3 faa-user cor_999"></i> Comprovantes de Pagamento </legend>
                                                    <div class=""> ';
                                                    foreach ($multifotos as $key => $value) {
            $campos['ini'][0] .= '                      <div class="fll p5">
                                                            <a href="'.DIR.'/web/fotos/'.$value->foto.'" target="_blank">
                                                                <img src="'.DIR.'/web/fotos/'.$value->foto.'" class="max-w50 max-h50 bd_ccc" />
                                                            </a>
                                                        </div> ';
                                                    }
            $campos['ini'][0] .= '              </fieldset> ';
                                            }

            $campos['ini'][0] .= '      </div>

                                        <div class="wr6 pl20">
                                            <fieldset class="'.(SELLER_OK ? 'dni' : '').'">
                                                <legend> <i class="fz14 mr3 faa-truck cor_8F6849"></i> Informações do Rastreamento </legend>
                                                <form id="pedidos_rastreamento" action="'.DIR.'/admin/app/Ajax/Acoes/pedidos_situacoes.php" method="post">
                                                    <input type="text" name="rastreamento" value="'.$pedidos->rastreamento.'" class="w200 design">
                                                    <button class="h24 pt0 pb0 ml5 botao"> <i class="mr5 faa-check"></i> Salvar</button>
                                                    <input type="hidden" name="id" value="'.$pedidos->id.'">
                                                    <input type="hidden" name="table" value="'.$table.'">
                                                </form>
                                                <script>ajaxForm('.A.'pedidos_rastreamento'.A.');</script>
                                            </fieldset>

                                            <fieldset>
                                                <legend> <i class="fz14 mr3 faa-truck cor_8F6849"></i> Endereço do Cliente </legend>
                                                '.$carrinho->frete->rua.', '.$carrinho->frete->numero.' '.$carrinho->frete->complemento.'
                                                <div class="h02"></div>
                                                '.$carrinho->frete->bairro.' - '.$carrinho->frete->cidades.' / '.$carrinho->frete->estados.'
                                                <div class="h02"></div>
                                                CEP: '.$carrinho->frete->cep.'
                                            </fieldset>

                                            <fieldset>
                                                <legend> <i class="fz14 mr3 faa-file-text-o c_azul"></i> Detalhes da compra </legend>
                                                <div class="pb2">
                                                    <b>ID do Pedido:</b> #'.$pedidos->id.'
                                                </div>
                                                <div class="pb2">
                                                    <b>Data da Compra:</b> '.data($pedidos->data, 'd/m/Y H:i:s').'
                                                </div> ';
                                                if($pedidos->data_aprovacao!='0000-00-00 00:00:00'){
            $campos['ini'][0] .= '                  <div class="pb2"><b>Data da Aprovação:</b> '.data($pedidos->data_aprovacao, 'd/m/Y H:i:s').'</div>';
                                                }
            $campos['ini'][0] .= '              <div class="pb2">
                                                    <b>Método de Pagamento:</b> '.ucfirst(str_replace('_', ' ', $pedidos->metodo)).'
                                                </div>
                                                <div class="pb2">
                                                    <b>Tipo de Frete:</b> '.ucfirst(str_replace('_', ' ', $pedidos->tipo_frete)).' ';
                                                    if(preg_match('(melhor_envio_)', $pedidos->tipo_frete)){
                                                        if($pedidos->melhor_envio_pago == 0){
            $campos['ini'][0] .= '                          <a href="'.DIR.'/app/Melhor_Envio/pagar.php?id='.$pedidos->id.'" class="c_azul link">Pagar</a>';
                                                        } else {
            $campos['ini'][0] .= '                          <b class="c_verde">(PAGO)</b> ';
                                                        }
                                                    }
                                                    if($pedidos->melhor_envio_pago != 0){
                                                        if($pedidos->melhor_envio_etiqueta){
            $campos['ini'][0] .= '                          <a href="'.$pedidos->melhor_envio_etiqueta.'" class="c_azul link" target="_blank">Imprimir Etiqueta</a> ';
                                                        } else {
            $campos['ini'][0] .= '                          <a href="'.DIR.'/app/Melhor_Envio/pagar.php?id='.$pedidos->id.'&gerar_etiqueta=1" class="c_azul link">Gerar Etiqueta</a> ';
                                                        }
                                                    }
            $campos['ini'][0] .= '              </div> ';

                                                if(isset($seller) AND $seller){
            $campos['ini'][0] .= '                  <div class="pb2"><b>Seller:</b> ';
                                                        foreach ($seller as $key1 => $value1) {
            $campos['ini'][0] .=                            ($key1 ? ', ' : '');
            $campos['ini'][0] .=                            rel(SELLER, $value1->id);
                                                        }
            $campos['ini'][0] .= '                  </div>';
                                                }

                                                if($pedidos->desconto_info){
            $campos['ini'][0] .= '                  <div class="pb2"><b>Informações do Desconto:</b> '.$pedidos->desconto_info.'</div>';
                                                }
                                                if($pedidos->taxa_info){
            $campos['ini'][0] .= '                  <div class="pb2"><b>Informações da Taxa:</b> '.$pedidos->taxa_info.'</div>';
                                                }
                                                if($pedidos->obs){
            $campos['ini'][0] .= '                  <div class="pb2"><b>Observações:</b> '.$pedidos->obs.'</div>';
                                                }

            $campos['ini'][0] .= '              <ul class="bd_ccc mt10 ml20 mr20">
                                                    <li class="w50p pl5 pr5 pt2 pb2">Produtos</li>
                                                    <li class="w50p pl5 pr5 pt2 pb2 tar">'.preco($pedidos->valor_subtotal, 1).'</li>
                                                    <div class="clear"></div>
                                                </ul>
                                                <ul class="bd_ccc bdt0 ml20 mr20">
                                                    <li class="w50p pl5 pr5 pt2 pb2">Frete</li>
                                                    <li class="w50p pl5 pr5 pt2 pb2 tar">'.preco($pedidos->frete, 1).'</li>
                                                    <div class="clear"></div>
                                                </ul>
                                                <ul class="bd_ccc bdt0 ml20 mr20 '.($pedidos->credito>0 ? '' : 'dni').'">
                                                    <li class="w50p pl5 pr5 pt2 pb2">Crédito</li>
                                                    <li class="w50p pl5 pr5 pt2 pb2 tar">'.preco($pedidos->credito, 1).'</li>
                                                    <div class="clear"></div>
                                                </ul>
                                                <ul class="bd_ccc bdt0 ml20 mr20 '.($pedidos->desconto>0 ? '' : 'dni').'">
                                                    <li class="w50p pl5 pr5 pt2 pb2">Desconto</li>
                                                    <li class="w50p pl5 pr5 pt2 pb2 tar">'.preco($pedidos->desconto, 1).'</li>
                                                    <div class="clear"></div>
                                                </ul>
                                                <ul class="bd_ccc bdt0 ml20 mr20 '.(abs($pedidos->taxa)>0 ? '' : 'dni').'">
                                                    <li class="w50p pl5 pr5 pt2 pb2">Taxa</li>
                                                    <li class="w50p pl5 pr5 pt2 pb2 tar">'.preco($pedidos->taxa, 1).'</li>
                                                    <div class="clear"></div>
                                                </ul>
                                                <ul class="bd_ccc bdt0 ml20 mr20 '.($pedidos->valor_parcela_juros>0 ? '' : 'dni').'">
                                                    <li class="w50p pl5 pr5 pt2 pb2">Juros Cartão '.($pedidos->parcerlas>0 ? '('.$pedidos->parcerlas.'x)' : '').'</li>
                                                    <li class="w50p pl5 pr5 pt2 pb2 tar">'.preco($pedidos->valor_parcela_juros, 1).'</li>
                                                    <div class="clear"></div>
                                                </ul>
                                                <ul class="bd_ccc bdt0 ml20 mr20">
                                                    <li class="w50p pl5 pr5 pt2 pb2 fz16 c_verde"><b>Valor Total</b></li>
                                                    <li class="w50p pl5 pr5 pt2 pb2 fz16 c_verde tar"><b>'.preco($pedidos->valor_total, 1).'</b></li>
                                                    <div class="clear"></div>
                                                </ul>
                                            </fieldset>
                                        </div>

                                        <div class="wr12">
                                            <fieldset>
                                                <legend> <i class="fz14 mr3 faa-shopping-cart c_amarelo"></i> Produtos </legend>
                                                <table>
                                                    <thead>
                                                        <tr>
                                                            <th class="tal"><b>Nome</b></th>
                                                            <th class="tac"><b>Preço</b></th>
                                                            <th class="tac"><b>Qtd</b></th>
                                                            <th class="tac"><b>Total</b></th>
                                                        </tr>
                                                    </thead>
                                                    <tbody> ';
                                                    $nome = explode('<z></z>', asc($pedidos->nome));
                                                    $produtos = explode('-', $pedidos->produtos);
                                                    $qtds = explode('-', $pedidos->qtds);
                                                    $precos = explode('-', $pedidos->precos);
                                                    foreach ($produtos as $key => $value) {
                                                        if($qtds[$key]>0){
                                                            $campos['ini'][0] .= '<tr> ';
                                                                $campos['ini'][0] .= '<td class="tal">'.str_replace('>> ', '', $nome[$key-1]).'</td> ';
                                                                $campos['ini'][0] .= '<td class="tac">'.preco($precos[$key], 1).'</td> ';
                                                                $campos['ini'][0] .= '<td class="tac">'.$qtds[$key].'</td> ';
                                                                $campos['ini'][0] .= '<td class="tac">'.preco($qtds[$key]*$precos[$key], 1).'</td>';
                                                            $campos['ini'][0] .= '</tr> ';
                                                        }
                                                    }
            $campos['ini'][0] .= '                </tbody>
                                                </table>
                                            </fieldset>
                                            <style>fieldset table .qtdd, fieldset table .precoo, fieldset table .precoo_all { display: none }</style>
                                        </div>
                                        <div class="clear"></div>

                                    </div>';










        // Produtos Atributos
        } elseif($modulos->modulo == 'produtos_atributos'){
            $tipo = 0;
            if($linhas){
                $tipo = rel('produtos_atributos1_cate', $linhas->categorias, 'tipo1');
            }

            if($tipo!=1){
                $campos['fim'][0] .= '<script> ';
                    $campos['fim'][0] .= 'setTimeout(function(){ $(".finput_cor").parent().hide(); }, 100); ';
                $campos['fim'][0] .= '</script> ';
            }

            $campos['fim'][0] .= '<script> ';
                $campos['fim'][0] .= '$(document).ready(function() { ';
                    $campos['fim'][0] .= '$("#produtos_atributos1_cate").on("change", function() { ';
                        $campos['fim'][0] .= 'if($(this).find("option:selected").attr("tipo1") == 1){ ';
                            $campos['fim'][0] .= '$(".finput_cor").parent().show(); ';
                        $campos['fim'][0] .= '} else { ';
                        $campos['fim'][0] .= '$(".finput_cor").parent().hide(); ';
                        $campos['fim'][0] .= '} ';
                    $campos['fim'][0] .= '}) ';
                $campos['fim'][0] .= '}); ';
            $campos['fim'][0] .= '</script> ';









        // Usuarios
        } elseif($modulos->modulo == 'usuarios'){

            if($linhas){
                $campos['fim'][0] .= '<li class="wr12 ml56 linhas_inputs"> <a onclick="boxs('.A.'alterar_senha'.A.', '.A.'modulos='.$modulos->id.'&id='.$linhas->id.A.');" class="c_azul">Alterar senha</a> </li> ';

            } else {
                $input->tags = ' class="design" required ';
                $campos['fim'][0] .= '<li class="wr6 linhas_inputs"> '.$input->text('Senha', 'senha', 'password').'</li> ';
            }

            // Permissoes
            if($_SESSION['x_admin']->id == 1 or $_SESSION['x_admin']->id == 2){
                if(!isset($linhas->id)){
                    $linhas = (object)array();
                    $linhas->id = 0;
                }
                if(!isset($linhas->permissoes)) $linhas->permissoes = '';

                if($linhas->id != 2){
                    $campos['fim'][0] .= '<div class="pl10 "> ';
                        $campos['fim'][0] .= '<fieldset class="w100p fll p5 pl10 pr10 mt5 mb5 br1 "> ';
                            $campos['fim'][0] .= '<legend class="pl5 pr5 ml5 mr5"> <b>Permissões</b> </legend> ';

                            $campos['fim'][0] .= '<input type="checkbox" checked value="" name="permissoes_all" class="dni"> ';
                            $campos['fim'][0] .= '<li class="wr12 h-a"> ';
                                $campos['fim'][0] .= '<div class="finput finput_classificacao"> ';
                                    $campos['fim'][0] .= '<div class="input"> ';
                                        $campos['fim'][0] .= '<label class="classificacao_1 lclassificacao"> ';
                                            $check = (isset($linhas->permissoes_all) and $linhas->permissoes_all=='t') ? 'checked' : '';
                                            $campos['fim'][0] .= '<input '.$check.' type="checkbox" name="permissoes_all" id="permissoes_all" value="t" class="design" /> ';
                                            $campos['fim'][0] .= '<p class="pl20">Todos</p> ';
                                        $campos['fim'][0] .= '</label> ';
                                    $campos['fim'][0] .= '</div> ';
                                $campos['fim'][0] .= '</div> ';
                            $campos['fim'][0] .= '</li> ';
                            $campos['fim'][0] .= '<div class="clear bdt_ccc"></div> ';
                            $campos['fim'][0] .= '<input type="checkbox" checked value="" name="permissoes[]" class="dni"> ';


                            $mysql->filtro = " WHERE `status` = 1 ORDER BY `ordem` ASC, `nome` ASC, `id` DESC ";
                            $consulta = $mysql->read('menu_admin1_cate');
                            foreach ($consulta as $key => $value) {

                                $mysql->prepare = array($value->id);
                                $mysql->filtro = " WHERE `status` = 1 AND `lang` = '".LANG."' AND `id` != 1 AND `categorias` = ? ORDER BY `ordem` ASC, `nome` ASC, `id` DESC ";
                                $menu_admin = $mysql->read("menu_admin");
                                if($menu_admin){
                                    $campos['fim'][0] .= '<li class="wr12 pb0 h-a"> <b>'.$value->nome.'</b> </li> ';

                                    foreach($menu_admin as $k => $v) {
                                        $campos['fim'][0] .= '<li class="wr3 h-a"> ';
                                            $campos['fim'][0] .= '<div class="finput finput_permissoes"> ';
                                                $campos['fim'][0] .= '<div class="input"> ';
                                                    $permissoes = explode('-', $linhas->permissoes);
                                                    $z=0;
                                                    for($i=0; $i<count($permissoes); $i++){
                                                        if($permissoes[$i] == $v->id) $z++;
                                                    }    
                                                    $check = $z ? 'checked' : '';
                                                    $campos['fim'][0] .= '<label class="permissoes_'.$v->id.' lpermissoes"> ';
                                                        $campos['fim'][0] .= '<input type="checkbox" value="'.$v->id.'" name="permissoes[]" id="permissoes_'.$v->id.'" class="design " '.$check.' > ';
                                                        $campos['fim'][0] .= '<p class="pl20">'.$v->nome.'</p> ';
                                                    $campos['fim'][0] .= '</label> ';
                                                $campos['fim'][0] .= '</div> ';
                                            $campos['fim'][0] .= '</div> ';
                                        $campos['fim'][0] .= '</li> ';
                                    }

                                    $campos['fim'][0] .= '<div class="clear bdt_ccc"></div> ';
                                }
                            }

                        $campos['fim'][0] .= '</fieldset> ';
                    $campos['fim'][0] .= '</div> ';
                    $campos['fim'][0] .= '<div class="clear"></div> ';
                }
            }

      }






        // ALL
            if($_GET['acao'] == 'novo'){
                // MAIS FOTOS
                    $mais_fotos = 0;
                    foreach ($modulos->colunas as $k => $v) {
                        if(isset($v['check']) AND $v['check'] == 1 AND ($v['value'] == 'mais_fotos' OR $v['value'] == 'id->mais_fotos')){
                            $mais_fotos = 1;
                        }
                    }
                    if($mais_fotos){
                        $input->tags = ' class="design" multiple ';
                        $campos['centro'][0] .= '<li class="wr12 linhas_inputs file multiple"> '.$input->file('Mais Fotos', 'mais_fotos[]').'</li> '.$campos['ini'][0];
                    }
                // MAIS FOTOS

                // MAIS XXXX
                    if(preg_match('(mais_)', $modulos->modulo) AND ( (isset($_GET['table']) AND isset($_GET['item'])) OR (isset($_POST['tabelas']) AND isset($_POST['item'])) ) ){
                        $_GET['table'] = isset($_GET['table']) ? $_GET['table'] : '';
                        $_GET['item'] = isset($_GET['item']) ? $_GET['item'] : '';
                        $campos['centro'][0] .= '<input type="text" name="tabelas" value="'.$_GET['table'].'" class="dni">';
                        $campos['centro'][0] .= '<input type="text" name="item" value="'.$_GET['item'].'" class="dni">';
                    }
                // MAIS XXXX
            }
        // ALL

?>