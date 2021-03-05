import React,{Component} from 'react'
import { withAuth, withStorage, withUser } from '../utils/hoc';

class ClassDetail extends Component{

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