<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
  
// importando os arquivos necessarios
include_once '../config/database.php';
include_once '../objects/funcionario.php';
  
// Inicializando o banco
$database = new Database();
$db = $database->getConnection();
  
//Inicializando o objeto
$funcionario = new Funcionario($db);
  
//Setta o id
$funcionario->id = isset($_GET['id']) ? $_GET['id'] : die();
  
// Pega o funcionario a ser visualizado
$funcionario->readOne();
  
if($funcionario->name!=null){
    // Cria um array
    $funcionario_arr = array(
        "id" =>  $funcionario->id,
        "name" => $funcionario->name,
        "cpf" => $funcionario->cpf,
        "gender" => $funcionario->gender,
        "birthDate" => $funcionario->birthDate,
  
    );

    http_response_code(200);
  
    echo json_encode($funcionario_arr);
}
  
else{
    http_response_code(404);
  
    echo json_encode(array("message" => "Employee does not exist."));
}
?>