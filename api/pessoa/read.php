<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
  
// importando os arquivos necessarios
include_once '../config/database.php';
include_once '../objects/pessoa.php';

// Inicializando o banco
$database = new Database();
$db = $database->getConnection();

//Inicializando o objeto
$pessoa = new Pessoa($db);

// query pessoa
$stmt = $pessoa->read();
$num = $stmt->rowCount();

// verifica se existe dados
if($num>0){
  
    // array pessoa
    $pessoa_arr=array();
    $pessoa_arr["records"]=array();
  
    // Recuperando dados da table
    while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
        // extair linha
        extract($row);
  
        $pessoa_item=array(
            "id" => $id,
            "name" => $name,
            "cpf" => $cpf,
            "gender" => $gender,
            "birthDate" => $birthDate
        );
  
        array_push($pessoa_arr["records"], $pessoa_item);
    }
  
    http_response_code(200);
  
    echo json_encode($pessoa_arr);
}else{
  
    http_response_code(404);
  
    echo json_encode(
        array("message" => "No person found.")
    );
}