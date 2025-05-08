<?php
    include config.php;

    $first_name = $_POST['first_name'];
    $last_name = $_POST['last_name'];

    $query = $conn->execute("INSERT INTO `users` (`first_name`, `last_name`) VALUES ($first_name, $last_name)");

    if (!$query) {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
    $conn->close();
?>