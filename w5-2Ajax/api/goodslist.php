<?php
    include "../db/connect.php";
    include "../utils/tools.php";

    header('Access-Control-Allow-Origin:*');

    $page = isset($_GET['page']) ? $_GET['page'] : 1;
    $size = isset($_GET['size']) ? $_GET['size'] : 10;

    // 计算index
    $index = ($page-1)*$size;

    $sql = "select * from goods limit $index,$size";

    $result = $conn->query($sql);

    if($result->num_rows>0){
        $rows = $result->fetch_all(MYSQLI_ASSOC);
        // $data = array(
        //     'code'=> 200,
        //     'data'=>$rows,
        //     'msg'=>'success'
        // )
        
        echo formatData(200,$rows);
    }else{
        // $data = array(
        //     'code'=> 400,
        //     'data'=>array(),
        //     'msg'=>'fail'
        // )
        
        // echo json_encode($data,JSON_UNESCAPED_UNICODE);
        echo formatData(400);
    }
?>