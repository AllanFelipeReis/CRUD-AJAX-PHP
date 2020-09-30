<?php
class Pessoa{

    //Conexão com o banco e a table name
    private $conn;
    private $table_name = "people";

    //Propriedades do objeto
    public $id;
    public $name;
    public $cpf;
    public $gender;
    public $birthDate;

    // O construtor faz gera uma conexão com a base
    public function __construct($db){
        $this->conn = $db;
    }

    //Lê as pessoas
    function read(){

        // Query seleciona tudo
        $query = "SELECT * FROM ". $this->table_name;

        // Prepara a query
        $stmt = $this->conn->prepare($query);

        // Executa a query
        $stmt->execute();

        return $stmt;

    }

    // Cria a pessoa
    function create(){
    
        // query para inserir
        $query = "INSERT INTO
                    " . $this->table_name . "
                SET
                    name=:name, cpf=:cpf, birthDate=:birthDate, gender=:gender";
    
        // preparando a query
        $stmt = $this->conn->prepare($query);
    
        // Limpando os dados
        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->cpf=htmlspecialchars(strip_tags($this->cpf));
        $this->gender=htmlspecialchars(strip_tags($this->gender));
        $this->birthDate=htmlspecialchars(strip_tags($this->birthDate));
    
        // settando os valores
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":cpf", $this->cpf);
        $stmt->bindParam(":gender", $this->gender);
        $stmt->bindParam(":birthDate", $this->birthDate);
    
        // executando a query
        if($stmt->execute()){
            return true;
        }
        
        return false;
        
    }

    //Selecionado apenas um registro
    function readOne(){
    
        //Query para pegar o registro unico
        $query = "SELECT * FROM " . $this->table_name . " 
                WHERE id = ? LIMIT 0,1";
    
        // Preparando a query
        $stmt = $this->conn->prepare( $query );
    
        // Settando os valores
        $stmt->bindParam(1, $this->id);
    
        // executando a query
        $stmt->execute();
    
        // recebendo o unico valor
        $row = $stmt->fetch(PDO::FETCH_ASSOC);
    
        // Settando os valores no objeto
        $this->name = $row['name'];
        $this->cpf = $row['cpf'];
        $this->birthDate = $row['birthDate'];
        $this->gender = $row['gender'];
    }

    // update pessoa
    function update(){
    
        // Query para atualização
        $query = "UPDATE " . $this->table_name . "
                SET
                    name = :name,
                    cpf = :cpf,
                    birthDate = :birthDate,
                    gender = :gender
                WHERE
                    id = :id";
    
        // Preparando a query
        $stmt = $this->conn->prepare($query);
    
        // Limpando os dados
        $this->name=htmlspecialchars(strip_tags($this->name));
        $this->cpf=htmlspecialchars(strip_tags($this->cpf));
        $this->gender=htmlspecialchars(strip_tags($this->gender));
        $this->birthDate=htmlspecialchars(strip_tags($this->birthDate));
    
        // Settando os valores
        $stmt->bindParam(":name", $this->name);
        $stmt->bindParam(":cpf", $this->cpf);
        $stmt->bindParam(":gender", $this->gender);
        $stmt->bindParam(":birthDate", $this->birthDate);
        $stmt->bindParam(':id', $this->id);
    
        // executando a query
        if($stmt->execute()){
            return true;
        }
    
        return false;
    }
    
    // delete a pessoa
    function delete(){
    
        // Query de delete
        $query = "DELETE FROM " . $this->table_name . " WHERE id = ?";
    
        // prepararando a query
        $stmt = $this->conn->prepare($query);
    
        // Limpando os dados
        $this->id=htmlspecialchars(strip_tags($this->id));
    
        // Settando os valores
        $stmt->bindParam(1, $this->id);
    
        // executando a query
        if($stmt->execute()){
            return true;
        }
    
        return false;
    }
}

?>