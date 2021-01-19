<?php
    // https://api.bilibili.com/x/web-interface/nav'

    $content = file_get_contents('http://api.bilibili.com/x/web-interface/nav');

    echo $content;
?>