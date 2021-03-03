import React from 'react'

function TodoStatus({ todolist }) {
    const completeList = todolist.filter(item=>item.complete);
    const unCompleteList = todolist.filter(item=>!item.complete);
    return (
        <tr>
            <td colSpan="6">
                待办事项：{todolist.length}，完成：{completeList.length}，未完成：{unCompleteList.length}
            </td>
        </tr>
    )
}
export default TodoStatus;