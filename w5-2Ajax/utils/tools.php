<?php
    function formatData($code=200,$data=array(),$msg='success'){
        if($code === 400 && $msg==='success'){
            $msg = 'fail';
        }
        $result = array(
            'code'=> $code,
            'data'=>$data,
            'msg'=>$msg
        );
        return json_encode($result,JSON_UNESCAPED_UNICODE);
    }
    //formatData([],400)
?>