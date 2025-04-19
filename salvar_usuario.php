<?php
$host = "localhost";
$user = "root";
$password = "";
$db = "capnations_quiz";

$conn = new mysqli($host, $user, $password, $db);
if ($conn->connect_error) {
  die("Erro de conexão: " . $conn->connect_error);
}

$nome = $_POST['nome'];
$curso = $_POST['curso'];

$sql = "INSERT INTO usuarios (nome, curso) VALUES ('$nome', '$curso')";

if ($conn->query($sql) === TRUE) {
  $id = $conn->insert_id;
  header("Location: quiz.html?id=$id");
  exit();
} else {
  echo "Erro: " . $conn->error;
}

$conn->close();
?>
