<?php

include "config.php";

$score = (int)$_POST["score"];
echo $score;
$query = "SELECT `score` FROM `quiz` WHERE `sign_in`=TRUE";
$result = mysqli_query($conn, $query);

if (!$result){
    echo "query unsuccessful".mysqli_error($conn);
} else {

    if (mysqli_num_rows($result) > 0) {

        $data = array();
        $response = "";

        if (mysqli_num_rows($result) > 0) {

            while ($row = mysqli_fetch_assoc($result)) {
                $data[] = $row;
            }

            mysqli_free_result($result);

            $rowLength = sizeof($data);
            $columnNames = array_keys($data[0]);
            $columnLength = sizeof($columnNames);

            foreach ($data as $row) {
                foreach ($columnNames as $columnName) {
                    $response .= $row[$columnName];
                    if ($columnName !== end($columnNames)) {
                        $response .= ",";
                    }
                }
                if ($row !== end($data)){
                    $response .= "\n";
                }
            }
        }

        $currentScore = (int)$response;
        if ($score > $currentScore){
            $currentScore = $score;
        }

        $query2 = "UPDATE `quiz` SET `score`=$currentScore WHERE `sign_in`=TRUE";
        $result2 = mysqli_query($conn, $query2);

        if (!$result){
            echo "query unsuccessful".mysqli_error($conn);
        }
    }
}

$conn->close();

?>