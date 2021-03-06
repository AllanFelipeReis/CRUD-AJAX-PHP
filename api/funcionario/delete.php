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
  
// Pega o id
$data = json_decode(file_get_contents("php://input"));
  
// Setta o id 
$funcionario->id = $data->id;
  
// Deleta o funcionario
if($funcionario->delete()){
  
    http_response_code(200);
  
    echo json_encode(array("message" => "Employee was deleted."));
}
  
else{
  
    http_response_code(503);
  
    echo json_encode(array("message" => "Unable to delete employee."));
}
?>