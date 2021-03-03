import React from 'react'

import TodoItem from './TodoItem'
import TodoStatus from './TodoStatus'


function TodoContent({todolist,selectAll}) {
    const checkAll = todolist.every(item => item.checked);

    return (
        <table className="table">
            <thead>
                <tr>
                    <th><input type="checkbox" checked={checkAll} onChange={selectAll} />全选</th>
                    <th>#</th>
                    <th>代办事项</th>
                    <th>添加时间</th>
                    <th>是否完成</th>
                    <th>操作</th>
                </tr>
            </thead>
            <tbody>
                {
                    todolist.map((item, idx) => (
                        <TodoItem key={item.id} item={item} idx={idx} />
                    ))
                }

            </tbody>

            <tfoot>
                <TodoStatus todolist={todolist} />
            </tfoot>
        </table>
    )
}
export default TodoContent;