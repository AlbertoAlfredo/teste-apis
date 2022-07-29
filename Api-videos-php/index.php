
    <?php
        include('api/api.php')
    ?>
<?php
    header('Content-Type: application/json; charset=utf-8');
    if ($_SERVER['REQUEST_METHOD'] == 'POST'){
        echo "POST";
    }elseif ($_SERVER['REQUEST_METHOD'] == 'GET'){
        if (empty($_GET)){
            echo listarUsuarios();
        }else{
            $id = $_GET["id"];
            echo getUsuario($id);
        }
    }elseif ($_SERVER['REQUEST_METHOD'] == 'DELETE'){
        parse_str(file_get_contents('php://input'), $_DELETE);
        $id =  $_DELETE['id'];
        deleteUsuario($id);
        echo "usuário Apagado";
    }else{
        echo "Método não definido";
    }

?>
