<?

    $DIR_F = explode(DIRECTORY_SEPARATOR.'admin'.DIRECTORY_SEPARATOR, __DIR__.DIRECTORY_SEPARATOR);
    require_once $DIR_F[0].'/system/conecta.php';

    $mysql = new Mysql();
    $arr['itens'] = array();

    if(isset($_POST['pesq']) AND LUGAR == 'admin' AND isset($_SESSION['x_admin']->id) AND $_SESSION['x_admin']->id){
        $mysql->colunas = 'id, nome';
        $mysql->filtro = " where `nome` REGEXP '".cod('busca', $_POST['pesq'])."' GROUP BY `nome` ORDER BY `nome` ASC ";
        $consulta = $mysql->read('produtos');

        $row_array['id'] = 0;
        $row_array['value'] = '- - - -';
        array_push($arr['itens'], $row_array);

        foreach ($consulta as $key => $value) {
            $row_array['id'] = $value->id;
            $row_array['value'] = $value->nome;
            array_push($arr['itens'], $row_array);  
        }
    }

    echo json_encode($arr);

?>