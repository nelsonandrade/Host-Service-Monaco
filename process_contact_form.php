<?php
    $nome = addslashes($_POST('name'));
    $email = addslashes($_POST('email'));
    $telephone = addslashes($_POST('telephone'));
    $message = addslashes($_POST('message'));

    $pour = "nelsondevs0@gmail.com";
    $assunto = "Message - HS Monaco";

    $donnes = "Nom: " .$nome. "\n". "E-mail: ".$email. "\n". "Telephone: ". $telephone;

    $cabeca = "From: nelsonandrade7771@gmail.com"."\n"."Reply-to: ".$email. "\n"."X=Mailer:PHP/".phpversion();

    if(mail($pour,$assunto,$donnes,$cabeca)){
        echo("E-mail envoyer avec sucess!");
    }else{
        echo("Erreur lors de l'envoi du mail");
    }




?>