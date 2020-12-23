<?php

    // 链接数据库
    include '../db/connect.php';

    // 接收前端传来的数据
    $username = $_POST['username'];
    $password = $_POST['password'];

    // 编写sql语句
    $sql = "insert into user(username,password) values('$username','$password')";

    $result = $conn->query($sql);

    if($result){
        echo 'success';
    }else{
        echo 'fail';
    }

    //释放查询结果集，避免资源浪费
    // $result->close();
    // 关闭数据链接，避免资源占用
    $conn->close();

?>