import React,{useState} from 'react'
import {useStorage} from '../../utils/hooks';

function MyHook(){

    const [user,changeUser] = useStorage('currentUser');
    console.log('user=',user)

    return (
        <div className="container">
            <h4>自定hook: useStorage()</h4>
            <p>user: {JSON.stringify(user)}</p>
            {/* <button onClick={()=>{
                changeQty(qty+1)
            }} className="btn btn-success">qty:{qty}</button>
            <button onClick={()=>{
                changeNum(num+1)
            }} className="btn btn-warning">num:{num}</button> */}
            <button className="btn btn-success" onClick={()=>{
                user.username = user.username + ' plus'
                changeUser(user)
            }}>修改user</button>
            
        </div>
    )
}

export default MyHook;