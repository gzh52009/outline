import React from 'react'
import myContext from './context'

class TodoForm extends React.Component{
    // 静态属性与静态方法（ES6只支持静态方法，不支持静态属性）
    // static show = function(){

    // }
    // static type = 'ReactComponent';
    static contextType = myContext;

    // 实例属性
    state = {
        todo:''
    }
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         todo:''
    //     }
       

    //     // this.changeTodo = this.changeTodo.bind(this);
    //     // this.add = this.add.bind(this);
    // }
    
    changeTodo = (e)=>{
        this.setState({
            todo:e.target.value
        })
    }
    add = ()=>{
        const {add} = this.context;
        const {todo} = this.state;
        add(todo);
        this.setState({
            todo:''
        });

        // 自动获得焦点
        this.input.focus();
    }
    enter = (e)=>{
        if(e.keyCode === 13){
            this.add()
        }
    }
    render() {
        const {todo} = this.state;
        console.log('todoForm',this)
        return (
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="输入代办事项" value={todo} onChange={this.changeTodo} ref={el=>this.input = el} onKeyUp={this.enter} />
                <div className="input-group-append">
                    <button className="btn btn-success" onClick={this.add}>添加</button>
                </div>
            </div>
        )
    }
}
// TodoForm.contextType = myContext;


export default TodoForm;