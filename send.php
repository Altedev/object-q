<?php
if($_POST['name']  && $_POST['email'] && $_POST['phone']) {

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $message = 'На сайте object-q была создана заявка';
    $message .= '<br>Имя: '.$name;
    $message .= '<br>E-mail: '.$email;
    $message .= '<br>Телефон: '.$phone;


    $headers= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8"."\r\n";
    $headers .= "From: info@object-q.by <info@object-q.by>"."\r\n";

    mail('info@ariol.by', 'Заявка object-q', $message, $headers);
    mail('object-qk@mail.ru', 'Заявка object-q', $message, $headers);

    echo json_encode(array('msg'=>'Ваша заявка отправлена'));
}

if($_POST['nameStart']  && $_POST['emailStart'] && $_POST['phoneStart'] && $_POST['tarif']) {

    $nameStart = $_POST['nameStart'];
    $emailStart = $_POST['emailStart'];
    $phoneStart = $_POST['phoneStart'];
    $startMessage = $_POST['startMessage'];
    $tarif = $_POST['tarif'];


    $message = 'На сайте object-q была создана заявка';
    $message .= '<br>Имя: '.$nameStart;
    $message .= '<br>E-mail: '.$emailStart;
    $message .= '<br>Телефон: '.$phoneStart;
    $message .= '<br>Дополнительная информация: '.$startMessage;
    $message .= '<br>Тариф: '.$tarif;


    $headers= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8"."\r\n";
    $headers .= "From: info@object-q.by <info@object-q.by>"."\r\n";

    mail('info@ariol.by', 'Заявка object-q', $message, $headers);
    mail('object-qk@mail.ru', 'Заявка object-q', $message, $headers);

    echo json_encode(array('msg'=>'Ваша заявка отправлена'));

}

if($_POST['nameNormal']  && $_POST['emailNormal'] && $_POST['phoneNormal'] && $_POST['tarif']) {

    $nameNormal = $_POST['nameNormal'];
    $emailNormal = $_POST['emailNormal'];
    $phoneNormal = $_POST['phoneNormal'];
    $normalMessage = $_POST['normalMessage'];
    $tarif = $_POST['tarif'];

    $message = 'На сайте object-q была создана заявка';
    $message .= '<br>Имя: '.$nameNormal;
    $message .= '<br>E-mail: '.$emailNormal;
    $message .= '<br>Телефон: '.$phoneNormal;
    $message .= '<br>Дополнительная информация: '.$normalMessage;
    $message .= '<br>Тариф: '.$tarif;


    $headers= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8"."\r\n";
    $headers .= "From: info@object-q.by <info@object-q.by>"."\r\n";

    mail('info@ariol.by', 'Заявка object-q', $message, $headers);
    mail('object-qk@mail.ru', 'Заявка object-q', $message, $headers);

    echo json_encode(array('msg'=>'Ваша заявка отправлена'));
}
if($_POST['nameProfi']  && $_POST['emailProfi'] && $_POST['phoneProfi'] && $_POST['tarif']) {

    $nameProfi = $_POST['nameProfi'];
    $emailProfi = $_POST['emailProfi'];
    $phoneProfi = $_POST['phoneProfi'];
    $profiMessage = $_POST['profiMessage'];
    $tarif = $_POST['tarif'];

    $message = 'На сайте object-q была создана заявка';
    $message .= '<br>Имя: '.$nameProfi;
    $message .= '<br>E-mail: '.$emailProfi;
    $message .= '<br>Телефон: '.$phoneProfi;
    $message .= '<br>Дополнительная информация: '.$profiMessage;
    $message .= '<br>Тариф: '.$tarif;


    $headers= "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/html; charset=UTF-8"."\r\n";
    $headers .= "From: info@object-q.by <info@object-q.by>"."\r\n";

    mail('info@ariol.by', 'Заявка object-q', $message, $headers);
    mail('object-qk@mail.ru', 'Заявка object-q', $message, $headers);

    echo json_encode(array('msg'=>'Ваша заявка отправлена'));
}