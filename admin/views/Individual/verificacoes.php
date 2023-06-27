<?


        // CADASTRO
        if($modulos->id == 'cadastro'){

            // Idade
                if(isset($_POST['nascimento'])){
                    $_POST['idade'] = idade($_POST['nascimento']);
                }
            // Idade


        }


?>