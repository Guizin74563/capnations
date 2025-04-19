<?php
if (isset($_POST['id']) && isset($_POST['acertos'])) {
  $id = $_POST['id'];
  $acertos = $_POST['acertos'];

  $conn = new mysqli("localhost", "root", "", "capnations_quiz");

  if ($conn->connect_error) {
    die("Conexão falhou: " . $conn->connect_error);
  }

  $stmt = $conn->prepare("UPDATE usuarios SET acertos = ? WHERE id = ?");
  $stmt->bind_param("ii", $acertos, $id);
  $stmt->execute();
  $stmt->close();
  $conn->close();

  echo "Resultado salvo com sucesso!";
} else {
  echo "Erro: Dados não recebidos corretamente.";
}
?>
