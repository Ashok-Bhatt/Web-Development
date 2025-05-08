<?php

include "config.php";
$query = "SELECT `name`,`score` FROM `quiz`";
$result = mysqli_query($conn, $query);

if (!$result){
    echo "query unsuccessful".mysqli_error($conn);
} else {
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

    echo $response;
}

?>