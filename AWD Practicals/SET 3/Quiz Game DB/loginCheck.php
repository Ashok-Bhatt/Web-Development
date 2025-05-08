<?php

include "config.php";

$query = "SELECT * FROM `quiz` WHERE `sign_in`=TRUE";
$result = mysqli_query($conn, $query);

if (!$result){
    echo "query unsuccessful".mysqli_error($conn);
} else {

    if (mysqli_num_rows($result) > 0) {
        echo "1";
    } else {
        echo "0";
    }

}

$conn->close();

?>