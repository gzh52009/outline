import React,{Component} from 'react'
import { withAuth, withStorage, withUser } from '../utils/hoc';

class ClassDetail extends Component{
    componentDidMount(){
        // ajax
        console.log('ajax')
        this.props.history.listen((location)=>{
            console.log('listen',location);
            // ajax
        })
    }
    render(){
        console.log('ClassDetail.props',this.props);
        return (
            <div>
                ClassDetail
            </div>
        )
    }
}


export default ClassDetail;