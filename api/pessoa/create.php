<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  
// importando os arquivos necessarios
include_once '../config/database.php';
include_once '../objects/pessoa.php';
  
// Inicializando o banco
$database = new Database();
$db = $database->getConnection();
  
//Inicializando o objeto
$pessoa = new Pessoa($db);
  
// Pega os dados
$data = json_decode(file_get_contents("php://input"));
  
if(
    // Verificando se os dados não estão vazios
    !empty($data->name) &&
    !empty($data->cpf) &&
    !empty($data->gender) &&
    !empty($data->birthDate)
){
  
    // settando os atributos
    $pessoa->name = $data->name;
    $pessoa->cpf = $data->cpf;
    $pessoa->gender = $data->gender;
    $pessoa->birthDate = $data->birthDate;
  
    // Criando o produto
    if($pessoa->create()){
  
        http_response_code(201);
  
        echo json_encode(array("message" => "Person was created."));
    }
  
    else{
  
        http_response_code(503);
  
        echo json_encode(array("message" => "Unable to create person."));
    }
}
  
else{
  
    http_response_code(400);
  
    echo json_encode(array("message" => "Unable to create person. Data is incomplete."));
}
?>