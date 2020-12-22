<?php
    // jsonp请求需要服务器的支持
    $callback = isset($_GET['callback']) ? $_GET['callback'] : 'getData';
    $user = array(
        'username' => 'laoxie',
        'password' => '123654',
        'role' => 'admin'
    );

    $result = json_encode($user);
    echo "$callback($result)";

?>