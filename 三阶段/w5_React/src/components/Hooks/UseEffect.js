import React,{useState,useEffect, useLayoutEffect} from 'react'


function UseEffect(){
    const [qty,changeQty] = useState(1);
    const [num,changeNum] = useState(1);

    // 用法一：默认用法（等效于componentDidMount+componentDidUpdate）
    useEffect(()=>{
        // 这里的代码在初始化与组件刷新时执行
        console.log('useEffect默认用法')
        // setInterval(()=>{
        //     console.log('timer')
        // },2000)

        // request()
    })

    // 用法二：指定依赖（等效于componentDidMount+shouldComponentUpdate）
    useEffect(()=>{
        // 这里的代码在初始化与qty被修改时执行
        console.log('指定qty依赖')
    },[qty]);

    // 用法三：指定空依赖（等效于componentDidMount）
    useEffect(()=>{
        // 这里的代码在初始化时执行
        console.log('指定空依赖')
    },[]);

    // 用法四：回掉函数中返回一个函数（等效与componentWillUnmount）
    useEffect(()=>{
        // 发起ajax
        // const aj = ajax()
        return function(){
            // 这里的代码在组件销毁时执行

            // 取消ajax
            // aj.abort()
        }
    })

    // useLayoutEffect为useEffect的同步版本，在useEffect前面执行
    useLayoutEffect(()=>{
        console.log('useLayoutEffect')
    })

    console.log('render')
    return (
        <div className="container">
            <h4>useEffect()</h4>
            <button onClick={()=>{
                changeQty(qty+1)
            }} className="btn btn-outline-success">qty:{qty}</button>
            <button onClick={()=>{
                changeNum(num+1)
            }} className="btn btn-outline-warning">num:{num}</button>
            
        </div>
    )
}

export default UseEffect;