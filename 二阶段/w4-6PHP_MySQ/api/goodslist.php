<?php
    $goodslist = array();// [{},{}]
    
    $price = array(19,90,199,998,228,598,4998,29,198);

    //循环写入数据
    for($i=0;$i<20;$i++){
        $idx = array_rand($price);//
        // 生成一个商品（关联数据）
        $goods = array(
            'name'=> 'goods'.$i,
            'price'=> $price[$idx],
            'imgurl'=> 'img/goods'.$i.'.jpg',
            'kucun' => 100
        );
       array_push($goodslist,$goods);
    }

    // var_dump($goodslist);
    $data = json_encode($goodslist,JSON_UNESCAPED_UNICODE);
    echo $data;
?>