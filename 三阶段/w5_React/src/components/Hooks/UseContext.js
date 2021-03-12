import React,{useState,useEffect,useMemo,useCallback,useContext} from 'react'
import myContext from './context'

function UseContext(){
    const [qty,changeQty] = useState(1);
    const [num,changeNum] = useState(1);
    const user = useContext(myContext);
    console.log('user=',user);

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
            <h4>useContext()</h4>
           <p>{JSON.stringify(user)}</p>
           <button onClick={handleQty} className="btn btn-outline-success">qty:{qty}</button>
            <button onClick={handleNum} className="btn btn-outline-warning">num:{num}</button>
        </div>
    )
}

export default UseContext;