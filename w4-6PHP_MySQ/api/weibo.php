<?php
    /**
     * php文件操作
        * fopen(path,mode)
     */
    // 获取前端传入的参数
    $type = isset($_GET['type']) ? $_GET['type'] : null;
    $guid = isset($_GET['guid']) ? $_GET['guid'] : null;

    header('Access-Control-Allow-Origin:*');
    // header('Access-Control-Allow-Methods:GET,POST');
    // header('Access-Control-Allow-Headers:x-requested-with,content-type'); 


    $path = '../data/weibo.json';

    $myfile = fopen($path,'r');
    $fileSize = filesize($path);

    $content = fread($myfile,$fileSize); // json字符串
    fclose($myfile);

    if($type === 'like'){
        // 点赞
        $data = json_decode($content,true);
        
        foreach($data as $key=>$item){
            if($item['id'] == $guid){
                $data[$key]['likecnt']++;
            }
        }
        
        // 写入文件
        $myfile = fopen($path,'w');
        fwrite($myfile,json_encode($data,JSON_UNESCAPED_UNICODE));
        echo 'success';
        fclose($myfile);
    }else{
        // 获取数据
        
    
        echo $content;
    }

?>