import React,{Component} from 'react'
import { withAuth, withStorage, withUser } from '../utils/hoc';

class Classlist extends Component{
    gotoDetail = ()=>{
        const {history} = this.props
        history.push({
            pathname:'/class/2009',
            // 自定数据
            testData:123,
            state:{
                a:10,b:20
            }
        })
    }
    render(){
        console.log('Classlist.render')
        return (
            <div>
                Classlist
                <button onClick={this.gotoDetail}>
                    GZ-H5-2009
                </button>
            </div>
        )
    }
}


export default Classlist;