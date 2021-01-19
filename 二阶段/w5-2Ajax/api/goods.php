<?php
    include "../db/connect.php";
    include "../utils/tools.php";

    $id = isset($_GET['id']) ? $_GET['id'] : null;

    if($id){
        $sql = "select * from goods where id=$id";
    
        $result = $conn->query($sql);

        if($result->num_rows>0){
            $row = $result->fetch_assoc();
            
            echo formatData(200,$row);
        }else{
            echo formatData(400);
        }
    }else{
        echo formatData(400);
    }

?>