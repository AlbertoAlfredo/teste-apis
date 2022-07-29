<?php
error_reporting(E_ALL);
ini_set('display_errors', '1');
?>
<?php
    include("conexao.php");
    
    // while ($row = $res->fetchArray()) {
    //     echo "{$row['id']} {$row['nome']} {$row['cpf']} \n </br>";
    // }

    function adicionarUsuario($usuario, $cpf){
        global $db;
        $res = $db->exec("INSERT INTO usuarios(nome, cpf) VALUES($usuario, $cpf)");
        return $res;
    }

    function listarUsuarios(){
        global $db;
        $res = $db->query('SELECT * FROM usuarios');
        $lista = array();
        while ($row = $res->fetchArray()) {
            array_push($lista, ["id"=>$row['id'], "nome"=>$row['nome'], "cpf"=>$row['cpf']]);
        }
        return json_encode($lista);
    }

    function getUsuario($id){
        global $db;
        $res = $db->query("SELECT nome, cpf, id FROM usuarios WHERE id=$id");
        $lista = array();
        while ($row = $res->fetchArray()) {
            array_push($lista, ["id"=>$row['id'], "nome"=>$row['nome'], "cpf"=>$row['cpf']]);
        }
        return json_encode($lista);
    }

    function deleteUsuario($id){
        global $db;
        $res = $db->query("DELETE FROM usuarios WHERE id=$id");
        return $res;
    }

    
?>