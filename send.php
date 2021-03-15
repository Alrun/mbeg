<?php

//// Подключаем библиотеку PHPMailer
//use PHPMailer\PHPMailer\PHPMailer;
//require 'PHPMailer/PHPMailer.php';
//
//// Создаем письмо
//$mail = new PHPMailer();
//$mail->setFrom('test@domain.ru', 'Иван Иванов'); // от кого (email и имя)
//$mail->addAddress('test@yandex.ru', 'Вася Петров');  // кому (email и имя)
//$mail->Subject = 'Тест';                         // тема письма
//// html текст письма
//$mail->msgHTML("<html><body>
//                <h1>Здравствуйте!</h1>
//                <p>Это тестовое письмо.</p>
//                </html></body>");
//// Отправляем
//if ($mail->send()) {
//    echo 'Письмо отправлено!';
//} else {
//    echo 'Ошибка: ' . $mail->ErrorInfo;
//}


// Подключаем библиотеку PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

//
$name = $_POST['InputName'];
$phone = $_POST['InputPhone'];
$email = $_POST['InputEmail'];
$message = $_POST['InputMessage'];

// Создаем письмо
$mail = new PHPMailer();
$mail->isSMTP();                  // Отправка через SMTP
$mail->Host = 'smtp.yandex.ru';   // Адрес SMTP сервера
$mail->SMTPAuth = true;           // Enable SMTP authentication
$mail->Username = 'info@mbeg.ru'; // ваше имя пользователя (без домена и @, если почта для домена, то логин это полный адрес почты)
$mail->Password = '1A2B3C';       // ваш пароль
$mail->SMTPSecure = 'ssl';        // шифрование ssl
$mail->Port = 465;                // порт подключения

$mail->setFrom('info@mbeg.ru', 'Mbeg');   // от кого
$mail->addAddress('info@mbeg.ru'); // кому

$mail->Subject = 'Письмо с сайта mbeg.ru от ' . $name . ' '. $phone;

$mail->msgHTML("<html>
<body>
    <p><b>Имя:</b> $name</p>
    <p><b>Телефон:</b> $phone</p>
    <p><b>E-mail:</b> $email</p>
    <p><b>Сообщение:</b> $message</p>
</body>
</html>");
// Отправляем
if ($mail->send()) {
    echo 'Письмо отправлено!';
} else {
    echo 'Ошибка: ' . $mail->ErrorInfo;
}