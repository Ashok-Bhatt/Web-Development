<?php

include "config.php";

$username = $_POST["username"];
$password = $_POST["password"];
$query = "SELECT * FROM `quiz` WHERE `name`='$username' AND `password`='$password'";
$result = mysqli_query($conn, $query);

if (!$result){
    echo "query unsuccessful".mysqli_error($conn);
} else {

    if (mysqli_num_rows($result) > 0) {

        // $query1 = "TRUNCATE TABLE `user`";
        $query1 = "UPDATE `quiz` SET `sign_in`=FALSE WHERE `sign_in`=TRUE";
        $result1 = mysqli_query($conn, $query1);

        $query2 = "UPDATE `quiz` SET `sign_in`=TRUE WHERE `name`='$username'";
        $result2 = mysqli_query($conn, $query2);

        if (!$result1 || !$result2){
            echo "query unsuccessful".mysqli_error($conn);
        }

        echo "1";
    } else {
        echo "0";
    }

}

$conn->close();

?>
