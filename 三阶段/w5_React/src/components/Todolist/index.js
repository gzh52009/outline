import React from 'react'

import TodoForm from './TodoForm'
import TodoContent from './TodoContent'
import myContext from './context';

import './style.css';
import 'bootstrap/dist/css/bootstrap.css';


class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todolist: [{
                id: 1,
                todo: '定个小目标睡一整天',
                complete: true,
                checked: true,
                addtime: Date.now()
            }, {
                id: 2,
                todo: '赚他一个亿津巴布韦币',
                complete: false,
                checked: false,
                addtime: Date.now() + 3600
            }, {
                id: 3,
                todo: '迎娶白富美，达到人生巅峰',
                complete: false,
                checked: false,
                addtime: Date.now() + 360 * 1000
            }],
            test:"<strong>abcd</strong>efg"
        }

        // 改变this指向
        this.addItem = this.addItem.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.completeItem = this.completeItem.bind(this)
        this.selectItem = this.selectItem.bind(this)
        this.selectAll = this.selectAll.bind(this)
    }

    // 写在这里的方法自定称为原型方法，自定义函数默认没有this指向（this为undefined）
    addItem(todo){
        console.log('add')
        const {todolist} = this.state;
        const newItem = {
            id: Math.ceil(Math.random()*10000),
            todo,
            complete: false,
            checked: false,
            addtime: Date.now()
        }
        const newData = [newItem,...todolist]
        this.setState({
            todolist:newData
        })
    }
    removeItem(id,e){
        console.log('removeItem.id=',id)
        let {todolist} = this.state;
        todolist = todolist.filter(item=>item.id!=id)
        this.setState({
            todolist
        })
        e.stopPropagation();
    }
    completeItem(id,e){
        let {todolist} = this.state;
        let newTodolist = todolist.map(item=>{
            if(item.id === id){
                item.complete = !item.complete
            }
            return item;
        })
        this.setState({
            todolist:newTodolist
        })

        e.stopPropagation();
    }
    selectItem(id){console.log('selectItem.id=',id)
        let {todolist} = this.state;
        let newTodolist = todolist.map(item=>{
            if(item.id === id){
                item.checked = !item.checked
            }
            return item;
        })
        this.setState({
            todolist:newTodolist
        })
    }
    selectAll(e){
        let {todolist} = this.state;
        let newTodolist = todolist.map(item=>{
            item.checked = e.target.checked
            return item;
        })
        this.setState({
            todolist:newTodolist
        })
    }
    render() {
        const {todolist} = this.state;
        const data = {
            remove:this.removeItem,
            complete:this.completeItem,
            select:this.selectItem,
            add:this.addItem,
        }
        return (
            <myContext.Provider value={data}>
                <div className="todolist container">
                    <h4>待办事项</h4>
                    <TodoForm />
                    <TodoContent todolist={todolist} selectAll={this.selectAll} />
                </div>
            </myContext.Provider>
        )
    }
}

export default TodoList;