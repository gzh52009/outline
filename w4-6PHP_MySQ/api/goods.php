<?php
    $goods = array(
        "id" => 123,
        "name" => 'xiaoxie',
        "price" => 2000.00,
        "age" => 38,
        "gender"=> '男'
    );
    
    echo json_encode($goods,JSON_UNESCAPED_UNICODE); 

?>