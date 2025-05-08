<?php

include "config.php";

$productName = $_POST["product-name"];
$productPrice = $_POST["product-price"];
$productBrand = $_POST["product-brand"];
$productQuantity = $_POST["product-quantity"];
$index = $_POST["index"] + 1;

// (`product-name`, `product-price`, `product-brand`, `product-quantity`)
$query = "UPDATE  `products` SET `product-name`='$productName', `product-price`=$productPrice, `product-brand`='$productBrand', `product-quantity`=$productQuantity WHERE `product-id`=$index";
mysqli_query($conn, $query);

$conn->close();

?>