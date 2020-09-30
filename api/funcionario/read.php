<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
  
// importando os arquivos necessarios
include_once '../config/database.php';
include_once '../objects/funcionario.php';

// Inicializando o banco
$database = new Database();
$db = $database->getConnection();

//Inicializando o objeto
$funcionario = new Funcionario($db);

// query funcionario
$stmt = $funcionario->read();
$num = $stmt->rowCount();

// verifica se existe dados
if($num>0){
  
    // array funcionario
    $funcionario_arr=array();
    $funcionario_arr["records"]=array();
  
    // Recuperando dados da table
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extair linha
        extract($row);
  
        $funcionario_item=array(
            "id" => $id,
            "name" => $name,
            "cpf" => $cpf,
            "gender" => $gender,
            "birthDate" => $birthDate
        );
  
        array_push($funcionario_arr["records"], $funcionario_item);
    }
  
    http_response_code(200);
  
    echo json_encode($funcionario_arr);
}else{
  
    http_response_code(404);
  
    echo json_encode(
        array("message" => "No employee found.")
    );
}