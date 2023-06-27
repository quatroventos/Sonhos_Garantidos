<?
    $DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
    require_once $DIR_F[0].'/system/conecta.php';
    require_once DIR_F.'/app/Funcoes/funcoesAdmin.php';
    require_once DIR_F.'/plugins/Tng/tng/tNG.inc.php';

    // Verificar Sessao
    verificar_sessao();

    // Iniciando Classes
    $mysql = new Mysql();
    $input = new Input();
    $img = new Imagem();
    $verificacoes = new Verificacoes();


    // Convertando GETS para GET
    if(isset($_GET['gets'])){
        $_GET['gets'] = str_replace('gets=', '', $_GET['gets']);
        $gets = explode(';;z;;', $_GET['gets']);
        foreach ($gets as $key => $value) {
            $ex = explode('=', $value);
            if(isset($ex[1])){
                //$_GET['get'][$ex[0]] = $ex[1];
                $_GET[$ex[0]] = $ex[1];
            }
        }
    }




    // CONFIGURACOES
        // Pegando dados em menu_admin
        if(LUGAR == 'admin'){
            $mysql->prepare = array($_GET['modulo']);
            $mysql->filtro = " WHERE `id` = ? AND admins = '' ".$verificacoes->liberar_permissoes_menu_inicial()." ";
            $modulos = $mysql->read_unico('menu_admin');
            if(!isset($modulos->id)){
                $modulos = $verificacoes->liberar_permissoes_modulos_relacionados();
            }

        } else {
            $mysql->prepare = array($_GET['modulo']);
            $mysql->filtro = " WHERE `id` = ? AND admins = '".LUGAR."' ";
            $modulos = $mysql->read_unico('menu_admin');
        }


        if(isset($modulos->id)){
            $_GET['pg'] = $table = $modulos->modulo;
        } else {
            $arr['violacao_de_regras'] = 2;
            $verificacoes->violacao_de_regras($arr);
        }


        // Logs de Acoes
        define('LOGS_ACOES', 'usuarios');
        define('LOGS_ACOES_ID', $_SESSION['x_'.LUGAR]->id);


        // Filtro
            $filtro = '';
    // CONFIGURACOES




    // DATATABLES
        if(isset($_GET['pg'])){
            $datatable = new Datatable();
            $datatable->modulos = $modulos;
            $datatable->passando_para_ajax($filtro);
        }
    // DATATABLES




    // VARIAVEIS DO AJAX
        if(isset($modulos->id)){

            $urll['pg'] = 'pg='.$modulos->id;
            $urll['mod'] = 'mod='.$modulos->modulo;
            if(isset($_GET['gets'])){
                $ex = explode(';;z;;', $_GET['gets']);
                foreach($ex as $k => $v){
                    $ex1 = explode('=', $v);
                    if($ex1[0]!='pg')
                        $urll[$ex1[0]] = $v;
                    if($ex1[0]=='table')
                        $_POST['tables'] = '-'.$ex1[1].'-';
                }
            }

            $arr = array();
            $arr['html'] = "<script> GETS = '?".implode('&', $urll)."'; </script>";
            $arr['title'] = '';
            $arr['modulo'] = $modulos->modulo;
            $arr['url'] = DIR.'/'.LUGAR.'/?'.implode('&', $urll);


            // IDS PARA EDIT E DELETE
                $ids = array();
                if($_GET['acao'] == 'edit' or $_GET['acao'] == 'delete'){
                    $table = $modulos->modulo;
                    $ex = isset($_POST['ids']) ? explode('-', $_POST['ids']) : array();
                    foreach ($ex as $v) {
                        if($v) $ids[] = $v;
                    }

                    $ex = isset($_POST['tables']) ? explode('-', $_POST['tables']) : array();
                    $tables = array();
                    foreach ($ex as $v) {
                        if($v) $tables[] = $v;
                    }
                    $table = isset($tables[0]) ? $tables[0] : $table;
                }
                $ids[0] = isset($ids[0]) ? $ids[0] : 0;

                $_GET['acao'] = $_GET['acao']=='filtro' ? 'lista' : $_GET['acao'];
            // IDS PARA EDIT E DELETE


            // ACOES DE PERMISSAO (VIOLACAO DE REGRAS)
                $verificacoes->modulos = $modulos;
                $linhas = $verificacoes->permissoes_all($ids);
            // ACOES DE PERMISSAO (VIOLACAO DE REGRAS)

        }
    // VARIAVEIS DO AJAX


?>