import React,{useState,useEffect,useMemo,useCallback,useContext,useReducer,useRef} from 'react'

// const initState = [
//     { id:1, name: "goods1", price: 98, qty: 2 },
//     { id:2,name: "goods2", price: 198, qty: 2 },
//     { id:3,name: "goods3", price: 998, qty: 1 },
//   ];

// const reducer = (state, action) => {
//     switch (action.type) {
//       case 'add':
//         return [action.goods, ...state];
//       case 'remove':
//         return state.filter(item => item.id != action.id);
//       case 'change':
//         return state.map(item=>{
//           if(item.name === action.name){
//             item.qty = action.qty;
//           }
//           return item;
//         })
//         case 'clear':
//             return []
//       default:
//         throw new Error('type error');
//     }
// }
import {myContext} from './store'

const arrRef = []
function UseReducer(){
    const [name,changeName] = useState('');
    const [price,changePrice] = useState(100);

    // const [state,dispatch] = useReducer(reducer,initState)
    const [state,dispatch] = useContext(myContext);
    console.log('state',state)

    // React.createRef每次更新时会创建一个ref对象
    // const input = React.createRef()
    const input = useRef()
    arrRef.push(input);
    console.log('arrRef[0]===arrRef[1]',arrRef[0]===arrRef[1],arrRef);

    // 计算总价
    const totalPrice = useMemo(()=>{
        return state.reduce((prev,item)=>prev+item.price*item.qty,0)
    },[state])

    const handleQty = useCallback(()=>{
        console.log('qty=',qty);
        changeQty(prev=>prev+1);
    },[]);
    const handleNum = useCallback(()=>{
        console.log('num=',num);
        changeNum(prev=>prev+1)
    },[])

    const removeItem = useCallback((id)=>{
        dispatch({type:'remove',id})
    },[])

    const clearCart = useCallback(()=>{
        dispatch({type:'clear'})
    },[]);

    // 添加商品事件处理函数
    const handleChangeName = useCallback((e)=>{
        changeName(e.target.value)
    },[])
    const handleChangePrice = useCallback((e)=>{
        changePrice(e.target.value)
    },[])

    // 添加到购物车
    const add2Cart = useCallback(()=>{
        const goods = {
            id:Math.ceil(Math.random()*10000),
            name,
            price,
            qty:1
        }
        dispatch({type:'add',goods})

        // 清空并获得焦点
        changeName('')
        input.current.focus()
    },[name,price])

    return (
        <div className="container">
            <h4>useReducer()</h4>
            <p>商品名称：<input type="text" ref={input} value={name} onChange={handleChangeName} /></p>
            <p>价格：<input type="number" value={price} onChange={handleChangePrice} /></p>
            <button className="btn btn-success" onClick={add2Cart}>添加商品</button>
            <ul>
                {
                    state.map(item=>(<li key={item.id}>
                        <h5>{item.name}</h5>
                        <p className="price">{item.price} &times; {item.qty}</p>
                        <button className="btn btn-outline-danger btn-sm" onClick={removeItem.bind(null,item.id)}>删除</button>
                    </li>))
                }
            </ul>
            <div className="row">
                <div className="col-sm-6">
                    <button className="btn btn-outline-danger" onClick={clearCart}>清空</button>
                </div>
                <div className="col-sm-6">
                    总价：{totalPrice.toFixed(2)}
                </div>

            </div>
           {/* <button onClick={handleQty} className="btn btn-outline-success">qty:{qty}</button>
            <button onClick={handleNum} className="btn btn-outline-warning">num:{num}</button> */}
        </div>
    )
}

export default UseReducer;