<?php
    // 数值数据
    $arr = array("Volvo","BMW","Toyota"); // 等效于js中的：['Volvo','BMW','Toyota']


    // 关联数组（键值对）
    $user=array(
        // key      =>  value
        "username"  =>  "laoxie",
        "age"       =>  18,
        'gender'    =>  "男",
        'price'     =>  998.8
    );

    print_r($arr);
    print_r($user);
    var_dump($arr);
    var_dump($user);

    echo json_encode($arr);
    echo json_encode($user,JSON_UNESCAPED_UNICODE);
    echo $user['username'];
?>