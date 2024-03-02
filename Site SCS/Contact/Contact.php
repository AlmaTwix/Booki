<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];

    $to = "joan.airault@hotmail.fr"; // Remplacez par l'adresse e-mail de réception
    $subject = "Message de $name";
    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        $response = ["success" => true];
    } else {
        $response = ["success" => false];
    }

    echo json_encode($response);
}
?>
