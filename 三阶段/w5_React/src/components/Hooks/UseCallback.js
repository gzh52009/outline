import React,{useState,useEffect,useMemo,useCallback} from 'react'

const arr = []
function UseCallback(){
    const [qty,changeQty] = useState(1);
    const [num,changeNum] = useState(1);

    // 传统用法：每次都会创建一个函数
    // const fn = ()=>{}

    // 用法一：默认用法（等效于传统用法，不推荐）
    // const fn = useCallback(()=>{
    // })

    // 用法二：指定依赖（等qty改变时fn得到一个新的函数，否则得到缓存函数）
    // const fn = useCallback(()=>{
    // },[qty])

    // 用法三：指定空依赖（初始化创建后，每次更新都得到缓存函数）
    // 配合setState(prev=>xxx)用法，多用于定义事件处理函数
    const fn = useCallback(()=>{
    },[])
    arr.push(fn);
    console.log('arr[0] === arr[1]：',arr[0] === arr[1],arr);

    const handleQty = useCallback(()=>{
        console.log('qty=',qty);
        changeQty(prev=>prev+1);
    },[]);
    const handleNum = useCallback(()=>{
        console.log('num=',num);
        changeNum(prev=>prev+1)
    },[])

    return (
        <div className="container">
            <h4>useCallback()</h4>
            {/* 传统用法实现事件绑定：每次渲染都会创建一个新的事件处理函数
            <button onClick={()=>{
                changeQty(qty+1)
            }} className="btn btn-outline-success">qty:{qty}</button>
            <button onClick={()=>{
                changeNum(num+1)
            }} className="btn btn-outline-warning">num:{num}</button> */}
           
           <button onClick={handleQty} className="btn btn-outline-success">qty:{qty}</button>
            <button onClick={handleNum} className="btn btn-outline-warning">num:{num}</button>
        </div>
    )
}

export default UseCallback;