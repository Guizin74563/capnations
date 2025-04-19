<?php
$servername = "localhost";
$username = "root";
$password = "";

// Criar conexão
$conn = new mysqli($servername, $username, $password);

// Verificar conexão
if ($conn->connect_error) {
  die("Conexão falhou: " . $conn->connect_error);
}

// Criar banco de dados
$sql = "CREATE DATABASE IF NOT EXISTS capnations_quiz";
if ($conn->query($sql) === TRUE) {
  echo "Banco de dados criado com sucesso!";
} else {
  echo "Erro ao criar banco: " . $conn->error;
}

$conn->close();
?>
