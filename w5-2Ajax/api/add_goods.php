<?php
    include "../db/connect.php";

    $qty = $_GET['qty'];

    $sql = "insert into goods(name,price,sale_price,imgurl) values";
    // 价格
    $prices = array(19.99,29.00,59.98,99.00,199.98,299.80,599.99,999.99,1000.00);
    for($i=0;$i<$qty;$i++){
        $idx = $i+1;
        $price = $prices[array_rand($prices)];
        $sale_price = $price*0.8;
        $sql = $sql . "('goods$idx',$price,$sale_price,'img/goods$idx.jpg'),";
    }

    //最后删除多余逗号
    $sql = substr($sql,0,-1);

    $result = $conn->query($sql);

    if($result){
        echo 'success';
    }else{
        echo 'fail';
    }
?>