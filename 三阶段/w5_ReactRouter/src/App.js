import React from 'react'

import {Route,Switch,Redirect,Link,NavLink,withRouter} from 'react-router-dom'

import Home from './views/Home'
import Reg from './views/Reg'
import Login from './views/Login'

function App(props){
    console.log('App.props',props);
    const nav = [{
        path:'/home',
        text:'首页'
    },{
        path:'/login',
        text:'登录'
    },{
        path:'/reg',
        text:'注册'
    },{
        path:'/mine',
        text:'我的'
    }]
    return (
        <div>
            App
                <nav>
                    <ul>
                        {
                            nav.map(item=><li key={item.path}><NavLink to={item.path} activeStyle={{color:'#f00',fontSize:20}}>{item.text}</NavLink></li>)
                        }

                    </ul>
                </nav>
                {/* 路由配置 */}
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/mine" render={()=><div>Mine</div>}/>
                    <Route path="/reg" component={Reg}/>
                    {/* <Route path="/login" component={Login}/> */}
                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/notfound">
                        <div style={{textAlign:'center'}}>
                            <h1 style={{color:'#999',fontSize:50}}>404</h1>
                            <div>The page you visited is not found</div>
                        </div>
                    </Route>
                    {/* <Route path="/" component={Home} exact/> */}
                    <Redirect from="/" to="/home" exact />
                    <Redirect to="/notfound" />
                </Switch>
        </div>
    )
}

App = withRouter(App)

export default App;