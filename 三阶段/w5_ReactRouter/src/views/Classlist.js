import React,{Component} from 'react'
import { withAuth, withStorage, withUser } from '../utils/hoc';

class Classlist extends Component{

    render(){
        console.log('Classlist.render')
        return (
            <div>
                Classlist
            </div>
        )
    }
}


export default Classlist;