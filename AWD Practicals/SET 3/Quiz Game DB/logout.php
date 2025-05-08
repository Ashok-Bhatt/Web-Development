<?php

include "config.php";

$query1 = "UPDATE `quiz` SET `sign_in`=FALSE WHERE `sign_in`=TRUE";
$result1 = mysqli_query($conn, $query1);

if (!$result1){
    echo "query unsuccessful".mysqli_error($conn);
} else {
    echo "1";
}

$conn->close();

?>
