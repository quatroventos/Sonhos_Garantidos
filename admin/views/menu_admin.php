<?

    $DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
    require_once $DIR_F[0].'/admin/system/head.php';

    if($_SESSION['x_admin']->id == 1){





        // GRAVAÇÃO
        if($_GET['acao'] == 'gravar' AND $_POST){

            include DIR_F.'/plugins/Sql/backup.php';

            // Tirando char especiais dos names
            $_POST = menu_admin_names($_POST);

            // MODULOS RELACIONADOS
                $modulos_rel = array();
                foreach ($_POST['colunas'] as $key => $value) {
                    if(isset($value['check']) AND $value['check']){
                        if(preg_match('(->mais_comentarios)', $value['value'])){
                            $modulos_rel[] = 44;
                        }
                        if(preg_match('(->itens->)', $value['value'])){
                            $ex = explode('->', $value['value']);
                            if(isset($ex[4]) AND $ex[4]){
                                $modulos_rel[] = $ex[4];
                            }
                        }
                    }
                }
                foreach ($_POST['campos'] as $k => $v) {
                    foreach ($v as $key => $value) {
                        if(isset($value['check']) AND $value['check']){
                            if(preg_match('(categorias)', $value['input']['opcoes'])){
                                $ex = explode('->', $value['input']['opcoes']);
                                if(isset($ex[1]) AND $ex[1]){
                                    $modulos_rel[] = $ex[1];
                                }
                            } elseif($value['input']['opcoes']){
                                $ex = explode('(banco)->', $value['input']['opcoes']);
                                if(isset($ex[1]) and $ex[1]){
                                    $ex = explode('->', $value['input']['opcoes']);
                                    if(isset($ex[2]) AND $ex[2]){
                                        $modulos_rel[] = $ex[2];
                                    }
                                }

                            }
                        }
                    }
                }
                $_POST['modulos_rel'] = '-'.implode('-', $modulos_rel).'-';
            // MODULOS RELACIONADOS

            $mysql1 = new Mysql();

            $mysql->logs = 0;
            unset($mysql1->campo);
            $mysql1->campo['dataup'] = date('c');
            $mysql1->campo = gravar_campos($table, $mysql1->campo);

            // Tirando Barras
            $campos_menuadmin = new CamposMenuAdmin();
            $_POST['colunas'] = $campos_menuadmin->tirando_barras($_POST['colunas']);
            $_POST['abas'] = $campos_menuadmin->tirando_barras($_POST['abas']);
            $_POST['campos'] = $campos_menuadmin->tirando_barras($_POST['campos']);

            $mysql1->campo['colunas'] = base64_encode(serialize($_POST['colunas']));
            $mysql1->campo['abas'] = base64_encode(serialize($_POST['abas']));
            $mysql1->campo['campos'] = base64_encode(serialize($_POST['campos']));

            unset($mysql->campo);
            $mysql->campo['dataup'] = $mysql1->campo['dataup'];
            $mysql->campo['nome'] = $mysql1->campo['nome'];
            $mysql->campo['foto'] = $mysql1->campo['foto'];
            $mysql->campo['modulo'] = $mysql1->campo['modulo'];
            $mysql->campo['modulos_rel'] = $mysql1->campo['modulos_rel'];
            $mysql->campo['admins'] = $mysql1->campo['admins'];
            $mysql->campo['tipo'] = $mysql1->campo['tipo'];
            $mysql->campo['categorias'] = $mysql1->campo['categorias'];
            $mysql->campo['informacoes'] = $mysql1->campo['informacoes'];

            // Gravando no Banco
            if(isset($_GET['id']) AND $_GET['id']){
                $mysql->filtro = " where id = '".$_GET['id']."' ";
                $arr['ult_id'] = $mysql->update($table);
                $arr['dataup'] = date('d/m/Y H:i');
            } else {
                $arr['ult_id'] = $mysql->insert($table);
            }
            $arr['acao'] = $_POST['acao_button'];


            // Gravando Json
            $caminho = "../../app/Json/menu_admin";
                // Back-up
                    if(file_exists($caminho."/".$arr['ult_id'].".json")){
                        rename($caminho."/".$arr['ult_id'].".json", "../../plugins/Json/back-up/menu_admin/".$arr['ult_id']."__".date('Y-m-d-H-i-s').".json");
                    }
                // Back-up
            $file = fopen($caminho."/".$arr['ult_id'].".json", 'w');
            fwrite($file, json_encode($mysql1->campo));
            fclose($file);
            // Gravando Json


            // Criando Table
            $criarMysql = new criarMysql();
            $modulo = explode('(&)', $_POST['modulo']);
            $criarMysql->criarTabelas($modulo[0]);

            // Criando Colunas
            $mysql->colunas = 'informacoes';
            $mysql->prepare = array($arr['ult_id']);
            $mysql->filtro = " WHERE `id` = ? ";
            $tabela = $mysql->read_unico($table);
            if(isset($tabela->informacoes)){
                // Informacoes
                $ex = explode('-', $tabela->informacoes);
                foreach ($ex as $key => $value) {
                    if($value AND ($value=='categorias' OR $value=='vcategorias' OR $value=='subcategorias' OR $value=='star' OR $value=='lanc' OR $value=='promocao') ){
                        $tipo = $value=='vcategorias' ? 'text' : 'int';
                        $criarMysql->criarColunas($modulo[0], $value, $tipo);
                        if($value=='categorias' OR $value=='varias_categorias'){
                            $criarMysql->criarTabelas($modulo[0].'1_cate');
                        }
                    }
                }

                // Campos
                foreach ($_POST['campos'] as $k1 => $v1) {
                    foreach ($v1 as $k2 => $v2) {
                        if(isset($v2['check']) AND $v2['check'] AND $v2['tipo']!='button' AND $v2['tipo']!='editor' AND $v2['tipo']!='info'){
                            $tipo = $campos_menuadmin->criar_colunas_tipo($v2);
                            $coluna = str_replace('[]', '', $v2['input']['nome']);
                            $criarMysql->criarColunas($modulo[0], $coluna, $tipo);
                        }
                    }
                }

                // Boxxs
                if(isset($_POST['tipo']) AND $_POST['tipo'] == 2){
                    $criarMysql->criarColunas($modulo[0], 'boxxs');


                // Colunas
                } else {
                    foreach ($_POST['colunas'] as $k1 => $v1) {
                        if(isset($v1['check']) AND $v1['check'] AND $v1['value'] != 'relacionamento_categoria_automatico'){
                            $ex = explode('->', $v1['value']);
                            $coluna = str_replace('[]', '', $ex[0]);
                            $criarMysql->criarColunas($modulo[0], $coluna);
                        }
                    }
                }
            }





        // VIEWS Lista
        } elseif($_GET['acao'] == 'lista' AND $_POST){
            $arr['html'] .= '<div>
                                <div class="mapa_url">
                                    '.$datatable->script().'
                                    '.$datatable->title().'
                                </div>
                                <ul class="pb5">
                                    <li class="fll pl10"><a href="javascript:views(1, 0, '.A.A.')" class="c_azul link">Todos</a></li>
                                    <li class="fll pl10"><a href="javascript:views(1, 0, '.A.'m=0'.A.')" class="c_azul link">Modulos</a></li>
                                    <li class="fll pl10"><a href="javascript:views(1, 0, '.A.'m=1'.A.')" class="c_azul link">Modulo Únicos</a></li>
                                    <li class="fll pl10"><a href="javascript:views(1, 0, '.A.'m=2'.A.')" class="c_azul link">Modulo Boxxs</a></li> ';
                                    $admins = array();
                                    $mysql->filtro = " WHERE admins != '' GROUP BY admins ORDER BY `ordem` ASC, `nome` ASC, `id` DESC ";
                                    $menu_admin = $mysql->read('menu_admin');
                                    foreach ($menu_admin as $k => $v){
                                        $arr['html'] .= '<li class="fll pl10"><a href="javascript:views(1, 0, '.A.'admins='.$v->admins.A.')" class="c_azul link">(Admin '.ucfirst($v->admins).')</a></li> ';
                                    }
                                    $arr['html'] .= '<div class="clear"></div>
                                </ul>
                                <div class="box_table p15 pl20 pr20 bd_ddd back_fff">
                                    '.$datatable->acoes().'
                                    <form onSubmit="datatable_ordenar('.A.$modulos->id.A.', this)" method="post" action="javascript:void()" enctype="multipart/form-data">
                                        <table cellpadding="0" cellspacing="0" border="0" class="calc_1 datatable_css datatable">
                                            '.$datatable->top().'
                                            </tbody>
                                        </table>
                                        <button class="dni"></button>
                                        <div class="clear"></div>
                                    </form>
                                </div>
                                <div class="resultado_extra"></div>
                            </div> ';

                $arr['editar_item'] = 1;





        // VIEWS Novo e Edição
        } elseif(($_GET['acao'] == 'novo' OR $_GET['acao'] == 'edit') AND $_POST){
            $arr['title'] = 'Cadastro de '.$modulos->nome;

            $campos_menuadmin = new CamposMenuAdmin();
            $campos_menuadmin->modulos = $modulos;
            $campos_menuadmin->ids = (isset($ids) AND $_GET['acao'] == 'edit') ? $ids : array(0);

            $arr['html'] .= $campos_menuadmin->conteudo($table);









        // DELETAR
        } elseif($_GET['acao'] == 'delete' AND $_POST){
            foreach ($ids as $k => $v) {
                $mysql->logs = 0;
                $mysql->filtro = " where id = '".$v."' ";
                $mysql->delete($table);
            }
        }









    }

    echo eval(stripslashes(base64_decode('aWYoICEoJF9TRVNTSU9OWyd4X2FkbWluJ10tPmlkPT0xIG9yICRfU0VSVkVSWydIVFRQX0hPU1QnXT09J2xvY2FsaG9zdDo0MDAwJykgKQ0KbG9jYXRpb25fanMoRElSLicvJy5BRE1JTi4nLycpOw==')));
    echo json_encode(limpa_espacoes($arr));

?>