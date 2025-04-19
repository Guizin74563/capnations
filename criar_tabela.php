<?php
$host = "localhost";
$user = "root";
$password = "";
$db = "capnations_quiz";

$conn = new mysqli($host, $user, $password, $db);
if ($conn->connect_error) {
    die("Erro de conexão: " . $conn->connect_error);
}

$sql = "CREATE TABLE IF NOT EXISTS usuarios (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  curso VARCHAR(100),
  acertos INT DEFAULT 0
)";
if ($conn->query($sql) === TRUE) {
    echo "Tabela criada com sucesso.";
} else {
    echo "Erro ao criar tabela: " . $conn->error;
}
$conn->close();
?>
