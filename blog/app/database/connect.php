<?php

$host = 'us-cdbr-east-04.cleardb.com';
$user = 'bdf9ac0ba9f37e';
$pass = '25b2415f';
$db_name = 'heroku_1489984d079c4ae';

$conn = new MySQLi($host, $user, $pass, $db_name);

if ($conn->connect_error) {
    die('Database connection error: ' . $conn->connect_error);
}