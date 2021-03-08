import React from 'react';
import propTypes from 'prop-types'

class Lifecycle extends React.PureComponent{
    // static propType = {}
    // static defaultProps = {}
    // 初始化阶段
    constructor(props){
        super(props);
        this.state = {
            qty:1
        }
        console.log('constructor')
    }

    UNSAFE_componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')
    }

    // 更新阶段
    UNSAFE_componentWillUpdate(){
        console.log('componentWillUpdate')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    // 特殊生命周期函数
    // 不写时默认返回true
    // shouldComponentUpdate一般用于性能优化
    // shouldComponentUpdate(nextProps,nextState){
    //     // nextProps/nextState: 将要更新的值
    //     // this.props/this.state: 当前值
    //     console.log('qty=',nextState.qty);
    //     return nextState.qty%5===0
    // }

    UNSAFE_componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps')
    }

    render(){
        console.log('render')
        const {data} = this.props;
        const result = data.reduce((prev,item)=>prev+item,0)
        return (
            <div>
                <button className="btn btn-outline-success" onClick={()=>{
                    this.setState({
                        qty:this.state.qty+1
                    })
                }}>qty:{this.state.qty}</button>
            </div>
        )
    }
}

// props类型校验
Lifecycle.propTypes = {
    data:propTypes.array.isRequired,
    idx:propTypes.oneOfType([
        propTypes.number,
        propTypes.string
    ]),
    age: (props, propName, comName) => {
        // age只能在18-30之间
        if (props[propName] < 18 || props[propName]>30) {
            return new Error(propName + "必须大在18到30岁之间");
        }
    },
}

// props默认值
Lifecycle.defaultProps = {
    data:[],
    idx:0
}

export default Lifecycle;