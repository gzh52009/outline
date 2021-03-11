import React,{useState} from 'react'


function UseState(){
    // useState(initState)
    const [qty,changeQty] = useState(1);
    const [num,changeNum] = useState(1);

    return (
        <div className="container">
            <h4>useState()</h4>
            <button onClick={()=>{
                changeQty(qty+1)
            }} className="btn btn-success">qty:{qty}</button>
            <button onClick={()=>{
                changeNum(num+1)
            }} className="btn btn-warning">num:{num}</button>
        </div>
    )
}

export default UseState;