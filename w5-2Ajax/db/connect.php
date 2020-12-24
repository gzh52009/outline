<?php
    $_servername = 'localhost';
    $_username = 'root';
    $_password = '';
    $_dbname = 'h52009';

    // 链接mysql
    $conn = new mysqli($_servername, $_username, $_password, $_dbname);

    // 检测连接
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    } 

    //查询前设置编码，防止输出乱码
    $conn->set_charset('utf8');
?>