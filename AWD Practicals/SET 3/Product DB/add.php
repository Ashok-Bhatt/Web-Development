<?php

include "config.php";

$productName = $_POST["product-name"];
$productPrice = $_POST["product-price"];
$productBrand = $_POST["product-brand"];
$productQuantity = $_POST["product-quantity"];

$query = "INSERT INTO  `products` (`product-name`, `product-price`, `product-brand`, `product-quantity`) VALUES ('$productName', $productPrice, '$productBrand', $productQuantity)";
mysqli_query($conn, $query);

$conn->close();

?>