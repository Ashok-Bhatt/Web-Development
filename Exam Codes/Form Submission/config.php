<?php

    $servername = "localhost";
    $username = "root";
    $password = "";
    $database = "testing_database";

    $conn = mysql_connect($servername, $username, $password, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

?>