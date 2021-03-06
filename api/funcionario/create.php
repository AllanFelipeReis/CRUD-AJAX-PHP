<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  
// importando os arquivos necessarios
include_once '../config/database.php';
include_once '../objects/funcionario.php';
  
// Inicializando o banco
$database = new Database();
$db = $database->getConnection();
  
//Inicializando o objeto
$funcionario = new Funcionario($db);
  
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
    $funcionario->name = $data->name;
    $funcionario->cpf = $data->cpf;
    $funcionario->gender = $data->gender;
    $funcionario->birthDate = $data->birthDate;
  
    // Criando o funcionario
    if($funcionario->create()){
  
        http_response_code(201);
  
        echo json_encode(array("message" => "Employee was created."));
    }
  
    else{
  
        http_response_code(503);
  
        echo json_encode(array("message" => "Unable to create employee."));
    }
}
  
else{
  
    http_response_code(400);
  
    echo json_encode(array("message" => "Unable to create employee. Data is incomplete."));
}
?>