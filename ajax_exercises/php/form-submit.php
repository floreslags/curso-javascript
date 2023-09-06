<?php

if(isset($_POST)){

    error_reporting(0);

    // Variables de entrada de datos
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $comments = $_POST['comments'];

    $domain = $_SERVER['HTTP_HOST'];

    // Variables de envio de datos
    $to = 'sergiofol1093@gmail.com';
    $subject_mail = "Contacto desde el formulario del sitio $domain: $subject";
    $message = "
        <p>
            Datos enviados desde el formulario <b>$domain</b>
        </p>
        <ul>
            <li>Nombre: <b>$name</b></li>
            <li>Email: <b>$email</b></li>
            <li>Asunto: $subject</li>
            <li>Comentarios: $comments</li>
        </ul>
    ";
    $headers = "MIME-Version: 1.0\r\n" ."Content-Type:text/html; charset=utf-8\r\n" ."From: Envio Automatico No Responder <no-reply@$domain>";

    // Funcion para envio de correo
    $sentMail = mail($to,$subject_mail,$message,$headers);

    // Manejo de respuesta hacia el frontend
    if($sentMail){
        $res = [
            "err"=>false,
            "message"=>"Tus datos han sido enviados"
        ];
    }else{
        $res = [
            "err"=>true,
            "message"=>"Error al enviar tus datos, intenta nuevamente"
        ];
    }

    // Declaracion de cabeceras para acceso al recurso

    header("Access-Control-Allow-Origin:*");
    // header("Access-Control-Allow-Origin:https://jonmircha.com");
    header("Content-Type:application/json");

    echo json_encode($res);
    exit;
}

?>