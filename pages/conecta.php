<?php
$nome = $_POST["nome"];
$document = $_POST["cpf"];
$email = $_POST["email"];
$senha = $_POST["senha"];

$link = mysqli_connect('localhost', 'root', '1234');
$db = mysql_select_db("BDTESTE");
$db_selected = mysqli_select_db($link, "melhor_amigo");

if (!$db_selected) {
    die('Não foi possivel selecionar o esquema: ' . mysqli_error($link));
}
?>