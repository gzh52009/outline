<?php
    $ip = $_GET['ip'];    

    $content = file_get_contents('http://whois.pconline.com.cn/ip.jsp?ip='.$ip);

    $content = iconv('gbk','utf-8',$content);

    echo $content;
?>