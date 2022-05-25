<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'srcphp/Exception.php';
require 'srcphp/PHPMailer.php';
require 'srcphp/SMTP.php';

if(isset( $_POST['name']))
$name = $_POST['name'];
if(isset( $_POST['email']))
$email = $_POST['email'];
if(isset( $_POST['message']))
$message = $_POST['message'];
if(isset( $_POST['subject']))
$subject = $_POST['subject'];
header('Content-Type: application/json');
if ($name === ''){
    print json_encode(array('message' => 'Le nom doit être renseigné.', 'code' => 0));
    exit();
}
if ($email === ''){
    print json_encode(array('message' => 'Lemail doit être renseigné.', 'code' => 0));
    exit();
} else {
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
        print json_encode(array('message' => 'Le format de lemail est invalide.', 'code' => 0));
        exit();
    }
}
if ($subject === ''){
    print json_encode(array('message' => 'Le sujet doit être renseigné.', 'code' => 0));
    exit();
}
if ($message === ''){
    print json_encode(array('message' => 'Le message doit être renseigné.', 'code' => 0));
    exit();
}


$today = date('d/m/Y');
// Attachment file
$file = "Content/files/clignotant_rond_1.pdf";

$htmlContent = "
<html>
<head>
<title>Service client Acrrostore</title>
</head>
<body>
<span>
<img src='https://accrostore.go.yj.fr/Content/img/logo50.png' />
</span>
<h1>Merci de votre confiance!</h1>
<p>Votre garantie de deux ans pour l'article <strong>" . $message . "</strong> relatif à la commande numéro <strong>" . $subject . "</strong> à bien été activée par notre service client.</p>
    <p>Veuillez trouver en pièce jointe la notice du produit.</p>
<br/>
<p>Cordialement.</p>
<table cellspacing='0' style='border: 2px dashed #FB4314; width: 100%;'>
<tr>
<th>Boutique:</th><td>Acrrostore</td>
</tr>
<tr style='background-color: #e0e0e0;'>
<th>Email:</th><td>lksa.co60@gmail.com</td>
</tr>
<tr>
<th>Website:</th><td><a href='https://accrostore.go.yj.fr/'>www.accrostore.go.yj.fr</a></td>
</tr>
</table>

</body>
</html>";

$recipient = $email;

$subject2 = "Enregistrement de produit pour la commande numéro " . $subject;

$email = new PHPMailer();
$email->CharSet = 'UTF-8';
$email->SetFrom('lksa.co60@gmail.com', 'Acrrostore'); //Name is optional
$email->Subject   = $subject2;
$email->Body      = $htmlContent;
$email->AddAddress( $recipient );
$email->IsHTML(true);

$file_to_attach = $file;

$email->AddAttachment( $file_to_attach , 'Notice.pdf' );


if (!$email->send()) {
      echo $mail->ErrorInfo;
} else{
      print json_encode(array('message' => 'Email envoyé avec succés. Pensez à vérifier dans vos spams.', 'code' => 1));
}

$htmlContent = "
<html>
<head>
<title>Service client Acrrostore</title>
</head>
<body>
<span>
<img src='https://accrostore.go.yj.fr/Content/img/logo50.png' />
</span>
<p>Le client " . $recipient . " à demander l'activation de la garantie de deux ans pour l'article <strong>" . $message . "</strong> relatif à la commande numéro <strong>" . $subject . "</strong> à partir du " . $today . " .</p>

</body>
</html>";

$email = new PHPMailer();
$email->CharSet = 'UTF-8';
$email->SetFrom('lksa.co60@gmail.com', 'Acrrostore'); //Name is optional
$email->Subject   = $subject2;
$email->Body      = $htmlContent;
$email->AddAddress( 'mchergui68@yahoo.fr' );
$email->AddAddress('Lahouiri.karim@hotmail.com');
$email->IsHTML(true);

if (!$email->send()) {
      echo $mail->ErrorInfo;
}

exit();
?>