import React,{Component} from 'react'
import { withAuth, withStorage, withUser } from '../utils/hoc';

@withAuth
@withStorage('token')
class Mine extends Component{

    render(){
        console.log('Mine.render')
        return (
            <div>
                Mine
            </div>
        )
    }
}

// Mine = withAuth(Mine);

export default Mine;