import React from 'react'
import myContext from './context'

function TodoItem({item,idx}){
    return (
        <myContext.Consumer>
            {
                (value)=>{
                    const {select,remove,complete} = value;
                    return <tr className={item.complete ? 'table-success':''} onClick={select.bind(null,item.id)}>
                        <td><input type="checkbox" checked={item.checked} readOnly /></td>
                        <td>{idx + 1}</td>
                        <td>{item.todo}</td>
                        <td>{item.addtime}</td>
                        <td>{item.complete ? '是' : '否'}</td>
                        <td>
                            <button type="button" className="btn btn-sm btn-outline-success" onClick={complete.bind(null,item.id)}>完成</button>
                            <button type="button" className="btn btn-sm btn-outline-danger" onClick={remove.bind(null,item.id)}>删除</button>
                        </td>
                    </tr>
                }
            }
        
        </myContext.Consumer>
    )
}
export default TodoItem;