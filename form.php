<?php
    $name =$_POST['name'];
    $visitor_email = $_POST['email'];
    $maessage = $_POST['message'];

    $email_form = 'rahulremo2000@gmail.com';

    $email_subject = "New form Submission";

    $email_body = "User Name: $name.\n"."User Email: $email.\n"."User Message: $message.\n";

    $to = "rahulduraisamy2@gmail.com";

    $headers = "From: $email_form \r\n";

    $headers .= "Reply-To: $visitor_email \r\n";

    mail($to,$email_subject,$email_body,$headers);

    header("Location: index.html");



?>  