<?php
    // 接收前端传来的数据
    $username = $_GET['username'];
    // $users = array('laoxie','admin','tiantian');

    // $result = 1;
    // if(in_array($username,$users)){
    //     $result = 0;
    // }

    // echo $result;

    // {code:200,data:[],msg:''}

    // 链接数据库
    include '../db/connect.php';

    // 编写sql语句
    $sql = "select username from user where username='$username'";


    $result = $conn->query($sql);

    if($result->num_rows > 0){
        echo 'no';
    }else{
        echo 'yes';
    }

    //释放查询结果集，避免资源浪费
    $result->close();
    // 关闭数据链接，避免资源占用
    $conn->close();

?>