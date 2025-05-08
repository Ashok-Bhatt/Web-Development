<?php

include "config.php";

$name = $_POST["username"];
$password = $_POST["password"];
$confirm = $_POST["confirm"];
$score = 0;

$query = "SELECT * FROM `quiz` WHERE `name`='$name'";
$result = mysqli_query($conn, $query);

if (!$result){
    echo "query unsuccessful".mysqli_error($conn);
} else {
    if (mysqli_num_rows($result) > 0) {
        echo "0";
    } else {
        $query = "INSERT INTO `quiz` (`name`, `score`, `password`, `sign_in`) VALUES ('$name', $score, '$password', FALSE)";
        $result = mysqli_query($conn, $query);
        echo "1";
    }

}

$conn->close();

?>