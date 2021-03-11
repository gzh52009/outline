import React,{useState,useEffect,useMemo} from 'react'


function UseMemo(){
    const initData = [
        { id:1,name: "goods1", price: 98, qty: 2 },
        { id:2,name: "goods2", price: 198, qty: 2 },
        { id:3,name: "goods3", price: 998, qty: 1 },
      ];
    const [cartlist,changeCart] = useState(initData);
    const [num,changeNum] = useState(1);

    // 传统写法
    // const totalPrice = cartlist.reduce((prev,item)=>prev+item.price*item.qty,0);

    // 用法一：默认用法（不推荐）
    // const totalPrice = useMemo(()=>{
    //     // 这里的代码在初始化与组件刷新时执行（等效于传统写法）
    //     console.log('计算总价')
    //     return cartlist.reduce((prev,item)=>prev+item.price*item.qty,0)
    // })

    // 用法二：指定依赖
    const totalPrice = useMemo(()=>{
        // 这里的代码在初始化与cartlist被修改时执行并返回最新的值，否则返回缓存值
        console.log('计算总价')
        return cartlist.reduce((prev,item)=>prev+item.price*item.qty,0)
    },[cartlist])
    

    return (
        <div className="container">
            <h4>useMemo()</h4>
            <p>总价：{totalPrice}</p>
            {/* <button onClick={()=>{
                changeQty(qty+1)
            }} className="btn btn-outline-success">qty:{qty}</button> */}
            <button onClick={()=>{
                changeNum(num+1)
            }} className="btn btn-outline-warning">num:{num}</button>
            <button className="btn btn-outline-success" onClick={()=>{
                const id = parseInt(Math.random()*10000)
                const newGoods = {
                    id,
                    name:'goods'+ id,
                    price:parseInt(Math.random()*(100-10+1))+10,
                    qty:1
                }
                const newCartlist = [newGoods,...cartlist]
                changeCart(newCartlist)
            }}>添加到购物车</button>
        </div>
    )
}

export default UseMemo;