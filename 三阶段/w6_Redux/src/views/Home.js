import React from 'react'
import { withAuth, withStorage, withUser } from '../utils/hoc';

function Home(props){
    console.log('Home.props',props);
    return (
        <div>
            Home

            <button onClick={()=>{
                props.history.push('/mine')
            }}>我的</button>
        </div>
    )
}
Home = withUser(Home);
Home = withStorage('current','token','userInfo')(Home);
export default Home;