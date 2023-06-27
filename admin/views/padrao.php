<?

    $DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
    require_once $DIR_F[0].'/admin/system/head.php';


        // GRAVAÇÃO
        if($_GET['acao'] == 'gravar' AND $_POST){

            // MODULOS TIPO (BOXXS)
                $arr['modulo_tipo'] = rel('menu_admin', $_GET['modulo'], 'tipo');
            // MODULOS TIPO (BOXXS)

            // ADAPTACOES
                // DATAS FIREFOX
                    data_firefox();
                // DATAS FIREFOX

                // RETIRAR POSTS Q DEVEM SER FILES
                    remover_posts_files();
                // RETIRAR POSTS Q DEVEM SER FILES

                // BOXX
                    if(isset($_POST['boxx'])){ $boxx = $_POST['boxx']; unset($_POST['boxx']); }
                // BOXX
            // ADAPTACOES

            // VERIFICAR TAMANHO DA IMG
                foreach ($_FILES as $key => $value) {
                    if($key != 'boxx'){
                        if(is_array($value['size'])){
                            for ($i=0; $i < count($value['size']); $i++) { 
                                if($value['size'][$i] > MAX_UPLOAD){
                                    $arr['erro'][] = 'A imagem ('.$value['name'][$i].') deve ser menor que '.(MAX_UPLOAD/1000000).'MB'.'!';
                                    echo json_encode($arr);
                                    exit();
                                }
                                
                            }

                        } else {
                            if($value['size'] > MAX_UPLOAD){
                                $arr['erro'][] = 'A imagem ('.$value['name'].') deve ser menor que '.(MAX_UPLOAD/1000000).'MB'.'!';
                                echo json_encode($arr);
                                exit();
                            }
                        }
                    }
                }
            // VERIFICAR TAMANHO DA IMG

            // VERIFICANDO CAMPOS
                campos_gravar($table);
            // VERIFICANDO CAMPOS

            // VALIDADES
                validacoes($table, $modulos, (isset($_GET['id']) ? $_GET['id'] : 0) );
            // VALIDADES

            include 'Individual/gravar_pre.php';

            // CRIANDO COLUNAS
                $criarMysql = new criarMysql();
                $criarMysql->criarColunasArray($table, $_POST);
                $criarMysql->criarColunasArray($table, $_FILES);

                unset($mysql->campo);
                //$mysql->campo['data'] = date('Y-m-d H:i:s');
                $mysql->campo['dataup'] = date('Y-m-d H:i:s');
                $mysql->campo['lang'] = LANG;
                $mysql->campo = gravar_campos($table, $mysql->campo);
                unset($mysql->campo['lugar']);
                unset($mysql->campo['webcam']);
            // CRIANDO COLUNAS

            // GRAVANDO...
                if(isset($_GET['id']) AND $_GET['id']){
                    include 'Individual/update.php';
                    if(!isset($arr['ult_id'])){
                        $id = $table!='textos' ? $_GET['id'] : ((LANG*10000)-10000)+$_GET['id'];

                        $coluna = $table=='configs' ? 'tipo' : 'id';
                        $mysql->prepare = array($id);
                        $mysql->filtro = " WHERE lang = '".LANG."' AND `".$coluna."` = ? ";
                        $arr['ult_id'] = $mysql->update($table);
                        $arr['dataup'] = date('d/m/Y H:i');
                        if( !(isset($arr['ult_id']) AND $arr['ult_id']) ){
                            $arr['erro'][] = 'Ação não Permitida! (Item não Existe)';
                            echo json_encode($arr);
                            exit();
                        }
                    }
                } else {
                    include 'Individual/insert.php';
                    if(!isset($arr['ult_id'])){
                        $arr['ult_id'] = $mysql->insert($table);
                    }
                }
                $arr['acao'] = $_POST['acao_button'];
            // GRAVANDO...


            // OUTRAS GRAVACOES
                // INSERIR_BOX (FIELDSET)
                    inserir_box_gravar($arr['ult_id'], $table);
                // INSERIR_BOX (FIELDSET)

                // GRAVANDO DO EDITOR
                    editor_gravar($table, $arr['ult_id']);
                // GRAVANDO DO EDITOR

                // FOTOS
                    $upload = new Upload();
                    if(isset($_FILES)){
                        $upload->fileUpload($arr['ult_id'], 0, 0, 0);
                    }

                    // WEBCAM
                        if(isset($_POST['webcam'])){
                            foreach ($_POST['webcam'] as $key => $value) {
                                if($value){
                                    webcam_gravar($key, $value, $table, $arr['ult_id'], $_POST['nome']);
                                }
                            }
                        }
                    // WEBCAM
                // FOTOS

                // Varias Categorias - Categorias (Niveis) 
                //vcategorias_categorias_nivels_gravar($table);
            // OUTRAS GRAVACOES



            // ATRIBUTOS BOXX
                if(isset($boxx)){
                    $table_temp = $table;
                    // Organizando POST
                    foreach ($boxx as $k1 => $v1) {
                        $boxx[$k1] = array();
                        foreach ($v1 as $k2 => $v2) {
                            foreach ($v2 as $key => $value) {
                                $boxx[$k1][$key][$k2] = $value;
                            }

                        }
                    }
                    // Organizando FILES
                    $boxx_files = array();
                    if(isset($_FILES['boxx'])){
                        foreach ($_FILES['boxx'] as $k1 => $v1) {
                            foreach ($v1 as $k2 => $v2) {
                                foreach ($v2 as $k3 => $v3) {
                                    foreach ($v3 as $key => $value) {
                                        $boxx_files[$k2][$key][$k3][$k1] = $value;
                                    }
                                }

                            }
                        }
                    }

                    $foto_anterior = array();
                    $foto_anterior1 = array();
                    foreach ($boxx as $k1 => $v1) {
                        // Pegando o cmapo Foto gravado anteriomente
                        $mysql->Colunas = 'id, foto';
                        $mysql->filtro = " where ".$table_temp." = '".$arr['ult_id']."' ";
                        $consulta = $mysql->read($k1);
                        foreach ($consulta as $kk => $vv) {
                            $foto_anterior[$vv->id] = $vv->foto;
                            if(isset($vv->foto1)){
                                $foto_anterior1[$vv->id] = $vv->foto1;
                            }
                        }
                        // Deletando Itens Atuais
                        $mysql->filtro = " where ".$table_temp." = '".$arr['ult_id']."' ";
                        $mysql->delete($k1);

                        $x=0;
                        foreach ($v1 as $k2 => $v2) { $x++;
                            if($x != count($v1)){ // Nao Gravar o ultimo item (boox_zerado)
                                $boxx_id = '';
                                unset($mysql->campo);
                                $mysql->campo['lang'] = LANG;
                                $mysql->campo[$table_temp] = $arr['ult_id'];
                                foreach ($v2 as $key => $value) {
                                    $mysql->campo[$key] = $value;
                                }
                                if(isset($foto_anterior[$k2])){
                                    $mysql->campo['foto'] = $foto_anterior[$k2];
                                }
                                if(isset($foto_anterior1[$k2])){
                                    $mysql->campo['foto1'] = $foto_anterior1[$k2];
                                }
                                // Gravando Dados
                                $ult_id = $mysql->insert($k1);

                                // Foto
                                    $table = $k1;
                                    if(isset($boxx_files[$k1][$k2])){
                                        foreach ($boxx_files[$k1][$k2] as $k3 => $v3) {
                                            if($v3){
                                                $_FILES[$k3] = $v3;
                                                if(isset($_FILES)) $upload->fileUpload($ult_id, $caminho, 0, 0);
                                            }
                                        }
                                    }
                                // Foto
                            }

                        }
                    }
                    unset($_FILES['boxx']);
                    $table = $table_temp;
                }
            // ATRIBUTOS BOXX

            // MAIS FOTOS
                if(isset($_FILES['mais_fotos'])){
                    $table_temp = $table;
                    $itens = array();
                    $table = 'mais_fotos';
                    $upload = new Upload();
                    $caminho = LUGAR == 'admin' ? '../' : '../../';
                    if(isset($_FILES)){
                        $_FILES['multifotos'] = $_FILES['mais_fotos'];
                        unset($_FILES['mais_fotos']);
                        $itens = $upload->fileUpload(0, $caminho, 1);
                    }
                    if($itens){
                        foreach ($itens as $key => $value) {
                            unset($mysql->campo);
                            $mysql->campo['foto'] = $value;
                            $mysql->campo['tabelas'] = $modulos->modulo;
                            $mysql->campo['item'] = $arr['ult_id'];
                            $arr['id'][] = $mysql->insert('mais_fotos');
                        }
                    }
                    unset($_FILES['multifotos']);
                    $table = $table_temp;
                }
            // MAIS FOTOS

            // MAIS CAMPOS
                if(isset($_GET['id']) AND $_GET['id']){
                    $mysql1 = new mysql();
                    $mysql1->filtro = " WHERE id = '".$_GET['id']."' ";
                    $consulta = $mysql1->read_unico($table);
                    foreach ($mysql->campo as $key => $value) {
                        if(preg_match('(_1)', $key)){
                            for ($i=1; $i <= 100; $i++) { 
                                $val = str_replace('_1', '_'.$i, $key);
                                if(!isset($mysql->campo[$val]) AND isset($consulta->$val)){
                                    $mysql1->campo[$val] = '';
                                    $mysql1->filtro = " WHERE id = '".$_GET['id']."' ";
                                    $mysql1->update($table);
                                }
                            }
                        }
                    }
                }
            // MAIS CAMPOS

            // CROP
                $arr['crop_fotos'] = array();
                if(isset($_FILES) AND $_FILES){
                    foreach ($_FILES as $key => $value) {
                        $arr['crop_fotos'][] = $key;
                    }
                }
            // CROP


            include 'Individual/gravar_pos.php';









        // VIEWS Lista
        } elseif($_GET['acao'] == 'lista' AND $_POST){
            if($modulos->id != 0){
                if(!isset($lista)){
                    $gerenciar = (isset($_GET['gets']) AND preg_match('(gerenciar=1)', $_GET['gets'])) ? '_gerenciar' : '';
                    $arr['html'] .= '<div class="lista_'.$modulos->modulo.' lista_'.$modulos->id.'">
                                        '.$datatable->script($gerenciar).'
                                        '.$datatable->title($gerenciar).'
                                        <div class="box_table box_table'.$gerenciar.' p15 pl20 pr20 bd-Admin_ddd back-Admin_fff"> ';
                                            include 'Individual/lista.php';
                    $arr['html'] .=         $datatable->acoes($gerenciar).'
                                            <form onSubmit="datatable_ordenar('.A.$modulos->id.A.', this)" method="post" action="javascript:void(0)" enctype="multipart/form-data">
                                                <div class="clear"></div>
                                                <table cellpadding="0" cellspacing="0" border="0" class="calc_1 datatable_css datatable'.$gerenciar.'">
                                                    '.$datatable->top().'
                                                    </tbody>
                                                </table>
                                                <button class="dni"></button>
                                                <div class="clear"></div>
                                            </form>
                                        </div>
                                        <div class="resultado_extra pt15"></div>
                                    </div> ';
                    }
                    $arr['editar_item'] = preg_match('(edit)', $modulos->informacoes) ? 1 : 0;



            } else {
                if($modulos->id == 0){
                    $table = 'agendas';
                }

                $arr['html'] .= '<div class="fullcalendar_css lista_'.$modulos->modulo.' lista_'.$modulos->id.'"> ';
                    $arr['html'] .= $datatable->title();

                    $arr['html'] .= '<div class="p15 pl20 pr20 bd-Admin_ddd back-Admin_fff"> ';
                        $arr['html'] .= $datatable->acoes('', 1);
                        $arr['html'] .= '<link href="'.DIR.'/plugins/Jquery/Plugins/FullCalendar/css/fullcalendar.min.css" rel="stylesheet" /> ';
                        $arr['html'] .= '<link href="'.DIR.'/plugins/Jquery/Plugins/FullCalendar/ccs/fullcalendar.print.min" rel="stylesheet" media="print" /> ';
                        $arr['html'] .= '<div class="fullcalendar"></div> ';
                        $arr['html'] .= '<script>fullcalendar('.A.$table.A.', '.A.$_GET['gets'].A.');</script> ';
                    $arr['html'] .= '</div> ';
                $arr['html'] .= '</div> ';

            }






        // VIEWS Novo e Edição
        } elseif(($_GET['acao'] == 'novo' OR $_GET['acao'] == 'edit') AND $_POST){
            $arr['title'] = 'Cadastro de '.$modulos->nome.' '.iff($ids[0], '#'.$ids[0]);

            $camposmodulos = new CamposModulos();
            $camposmodulos->modulos = $modulos;
            $camposmodulos->ids = $ids;
            $camposmodulos->linhas = $linhas;

            include 'Individual/campos.php';
            $arr['html'] .= '<div class="campos_do_modulo">';
                $arr = $camposmodulos->conteudo($campos, $arr);
            $arr['html'] .= '</div>';

            include 'Individual/script.php';









        // DELETAR
        } elseif($_GET['acao'] == 'delete' AND $_POST){
            foreach ($ids as $key => $value) {
                if( ($value==1 OR $value==2) AND $modulos->id==6){ // Usuarios
                    $arr['erro'][] = 'Você não pode excluir esse item!';

                } else {
                    $verificacoes = new Verificacoes();
                    $verificacoes->modulos = $modulos;
                    $mysql->filtro = " WHERE id = '".$value."' ".$verificacoes->filtro_admins_ajax_datatable($table)." ";
                    $ult_id = $mysql->delete($table);
                    if($ult_id){
                        unset($arr['erro']);                        
                    }
                }
            }













        // VIEWS Boxx
        } elseif($_GET['acao'] == 'boxxs'){

            $arr['html'] .= '<div class="lista_'.$modulos->modulo.' lista_'.$modulos->id.'">
                                '.$datatable->title().'
                                <div class="box_table box_table p15 pl20 pr20 bd-Admin_ddd back-Admin_fff">
                                    <ul class="boxxs">
                                        '.boxxs_admin($modulos).'
                                        <li class="flni clear"></li>
                                    </ul>
                                </div>
                                <div class="resultado_extra pt15"></div>
                            </div> ';

        }









    echo json_encode(limpa_espacoes($arr));

?>