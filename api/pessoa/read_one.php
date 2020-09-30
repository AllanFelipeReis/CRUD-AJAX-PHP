<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET");
header("Access-Control-Allow-Credentials: true");
header('Content-Type: application/json');
  
// importando os arquivos necessarios
include_once '../config/database.php';
include_once '../objects/pessoa.php';
  
// Inicializando o banco
$database = new Database();
$db = $database->getConnection();
  
//Inicializando o objeto
$pessoa = new Pessoa($db);
  
//Setta o id
$pessoa->id = isset($_GET['id']) ? $_GET['id'] : die();
  
// Pega a pessoa a ser editada
$pessoa->readOne();
  
if($pessoa->name!=null){
    // Cria um array
    $pessoa_arr = array(
        "id" =>  $pessoa->id,
        "name" => $pessoa->name,
        "cpf" => $pessoa->cpf,
        "gender" => $pessoa->gender,
        "birthDate" => $pessoa->birthDate,
  
    );

    http_response_code(200);
  
    echo json_encode($pessoa_arr);
}
  
else{
    http_response_code(404);
  
    echo json_encode(array("message" => "Person does not exist."));
}
?>