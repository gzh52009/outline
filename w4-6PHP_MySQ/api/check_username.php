<?php
    // 接收前端传来的数据
    $username = $_GET['username'];
    $users = array('laoxie','admin','tiantian');

    $result = 1;
    if(in_array($username,$users)){
        $result = 0;
    }

    echo $result;

    // {code:200,data:[],msg:''}
?>