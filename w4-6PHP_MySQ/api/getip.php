<?php 

    $content = file_get_contents('http://2021.ip138.com/');

    preg_match('/\[<a.+>(.+)<\/a>\]/', $content,$res);// [全部匹配,第1个分组,第2个分组内容....]

    // var_dump($res);

    echo $res[1];
?>