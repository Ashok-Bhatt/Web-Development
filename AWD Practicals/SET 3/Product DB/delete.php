<?php

include "config.php";

$productName = $_POST["product-name"];
$productPrice = $_POST["product-price"];
$productBrand = $_POST["product-brand"];
$productQuantity = $_POST["product-quantity"];
$index = $_POST["index"] + 1;

// (`product-name`, `product-price`, `product-brand`, `product-quantity`)
$query = "DELETE FROM `products` WHERE `product-id`=$index";
$result = mysqli_query($conn, $query);

$query = "SET @new_product_id := 0";
mysqli_query($conn, $query);

$query = "UPDATE `products` SET `product-id` = (@new_product_id := @new_product_id + 1) ORDER BY `product-id`";
mysqli_query($conn, $query);

$query = "ALTER TABLE `products` AUTO_INCREMENT = 1";
mysqli_query($conn, $query);

$conn->close();

?>