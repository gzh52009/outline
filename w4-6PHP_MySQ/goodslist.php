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

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>商品列表</title>
</head>
<body>
    <h1>商品列表</h1>
    <?php
        $len = count($goodslist);
        echo '<ul>';
        for($i=0;$i<$len;$i++){
            $goods = $goodslist[$i];
            echo "<li>
                <h4>".$goodslist[$i]['name']."</h4>
                <p>价格：".$goods['price']."</p>
                <p>库存：".$goods['kucun']."</p>
            </li>";
        }
        echo '</ul>';
    ?>
</body>
</html>