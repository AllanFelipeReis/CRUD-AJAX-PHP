<?php
class Database{

    //Credenciais
    private $host = "localhost";
    private $db_name = "empresa";
    private $username = "root";
    private $password = "admin";
    public $conn;

    //Faz a conexão com o database
    public function getConnection(){
        $this->conn = null;

        try {
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }

        return $this->conn;
    }
}
?>