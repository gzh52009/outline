import React from 'react'

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
export default Home;