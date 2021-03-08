import React from 'react'

import TodoList from './components/Todolist'
import Lifecycle from './components/Lifecycle'

class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            show:true
        }
    }
    render(){
        const {show} = this.state;
        return (
            <div>
                App
                {/* <TodoList/> */}
                {
                    show ? 
                    <Lifecycle data={[10,20,30]} idx="10" age={36}/>
                    :
                    null
                }
                <button onClick={()=>{
                    this.setState({
                        show:!show
                    })
                }}>显示/隐藏</button>
            </div>
        )
    }

}

export default App