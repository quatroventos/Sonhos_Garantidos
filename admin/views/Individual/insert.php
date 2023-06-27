<?

	if(isset($arr['ult_id'])){
		unset($arr['ult_id']);
    }


    // CADASTRO_PLANOS_FATURAS
        if($table == 'cadastro_planos_faturas'){
            $mysql->prepare = array($_GET['item']);
            $mysql->filtro = " WHERE ".STATUS." AND id = ? ";
            $cadastro = $mysql->read_unico('cadastro');
            if(isset($cadastro->id)){
                if($cadastro->planos AND $cadastro->periodos){
                    $mysql->campo['situacao'] = 1;
                    $mysql->campo['ja_foi_pago'] = 1;
                    $mysql->campo['cadastro'] = $cadastro->id;
                    $mysql->campo['planos'] = $cadastro->planos;
                    $mysql->campo['periodos'] = $cadastro->periodos;
                    $mysql->campo['metodo'] = 'Cupom';

                } else {
                    unset($_POST['data_vencimento']);
                }
            }
        }
    // CADASTRO_PLANOS_FATURAS





    // Financeiro
    if($table == 'financeiro'){
    	$arr['ult_id'] = 0;

        // Acoes de Parcelamento
        if(isset($_POST['se_repete']) and $_POST['se_repete']){

            // Tempo do Parcelamento
            $dias = 0;
            $meses = 0;
            $anos = 0;
            switch ($_POST['se_repete']) {
                case 1: $dias = 7;  break; // Semanalmente
                case 2: $dias = 15; break; // Quinzenalmente
                case 3: $meses = 1; break; // Mensalmente
                case 4: $meses = 2; break; // Bimestralmente
                case 5: $meses = 3; break; // Trimestralmente
                case 6: $meses = 6; break; // Semestralmente
                case 7: $anos = 1;  break; // Anualmente
            }

            // Pacelamento Fixado
            if(isset($_POST['data_acabar']) and $_POST['data_acabar']){
                $campo = $mysql->campo;

                $mysql->campo = array();
                $mysql->logs = 0;
                $mysql->campo['se_repete'] = $_POST['se_repete'];
                $mysql->campo['data_acabar'] = $_POST['data_acabar'];
                $mysql->campo['qtd_parcelas'] = $_POST['qtd_parcelas'];
                $mysql->campo['data_data'] = $campo['data_data'];
                $ult_id_parc = $mysql->insert('financeiro_parcelamentos');

                for ($i=0; $i < $_POST['qtd_parcelas']; $i++) { 
                    $mysql->campo = array();
                    $mysql->campo = $campo;
                    $mysql->campo['financeiro_parcelamentos'] = $ult_id_parc;
                    $mysql->campo['data_data'] = somar_datas($mysql->campo['data_data'], $i*$anos, $i*$meses, $i*$dias);
                    $mysql->campo['parcela_atual'] = ($i+1).'/'.$_POST['qtd_parcelas'];
                    $arr['ult_id'] = $mysql->insert($table);                            
                }

            // Parcelamento Infinito
            } else {
                $campo = $mysql->campo;
                $datas = array($campo['data_data']);

                // Datas gravada
                for ($i=$campo['data_data']; $i < data(somar_datas($mysql->campo['data_data'], 0, 2, 0), 'Y-m-').'01';) { 
                    $data_gravada = $i = somar_datas($i, $anos, $meses, $dias);
                    $datas[] = $i;
                }

                $mysql->campo = array();
                $mysql->logs = 0;
                $mysql->campo['se_repete'] = $_POST['se_repete'];
                $mysql->campo['data_acabar'] = $_POST['data_acabar'];
                $mysql->campo['data_data'] = $campo['data_data'];
                $mysql->campo['data_gravada'] = $data_gravada;
                $mysql->campo['info'] = serialize($campo);
                $ult_id_parc = $mysql->insert('financeiro_parcelamentos');

                sort($datas);
                foreach ($datas as $key => $value) {
                    $mysql->campo = array();
                    $mysql->campo = $campo;
                    $mysql->campo['data_data'] = $value;
                    $mysql->campo['financeiro_parcelamentos'] = $ult_id_parc;
                    $arr['ult_id'] = $mysql->insert($table);
                }
            }
        } else {
            $arr['ult_id'] = $mysql->insert($table);
        }
        // Acoes de Parcelamento





    } elseif($table == ''){


    }


?>