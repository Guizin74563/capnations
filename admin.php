<?php
$host = "localhost";
$user = "root";
$password = "";
$db = "capnations_quiz";

$conn = new mysqli($host, $user, $password, $db);

if ($conn->connect_error) {
  die("Erro de conexão: " . $conn->connect_error);
}

$sql = "SELECT id, nome, curso, acertos FROM usuarios";
$result = $conn->query($sql);
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Painel Admin - Usuários</title>
    <link rel="stylesheet" href="admin.css">
</head>
<body>
    <h1 class="titu">Painel de Administração</h1>
    <h2 class="subt">Usuários e Resultados</h2>
    <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Curso</th>
                <th>Acertos</th>
                <th>Ações</th>
            </tr>
        </thead>
        <tbody>
            <?php
            if ($result->num_rows > 0) {
                while($row = $result->fetch_assoc()) {
                    echo "<tr>";
                    echo "<td>" . $row['id'] . "</td>";
                    echo "<td>" . $row['nome'] . "</td>";
                    echo "<td>" . $row['curso'] . "</td>";
                    echo "<td>" . $row['acertos'] . "</td>";

                    echo "</tr>";
                }
            } else {
                echo "<tr><td colspan='5'>Nenhum usuário encontrado.</td></tr>";
            }
            ?>
        </tbody>
    </table>
</body>
</html>

<?php
$conn->close();
?>
