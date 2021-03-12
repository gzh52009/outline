import React,{useState} from 'react'


function UseState(){
    // useState(initState)
    const [qty,changeQty] = useState(1);
    const [num,changeNum] = useState(1);

    console.log('render')
    return (
        <div className="container">
            <h4>useState()</h4>
            <button onClick={()=>{
                changeQty(qty+1)
            }} className="btn btn-success">qty:{qty}</button>
            <button onClick={()=>{
                changeNum(num+1)
            }} className="btn btn-warning">num:{num}</button>
            <button onClick={()=>{
                // changeQty(qty+1)
                // changeNum(num+1)
                changeQty(prev=>prev+1)
                changeNum(prev=>prev+1)
            }} className="btn btn-danger">（num/qty）+1</button>
        </div>
    )
}

export default UseState;