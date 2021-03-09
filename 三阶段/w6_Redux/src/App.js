import React from 'react'

import { Route, Switch, Redirect, Link, NavLink, withRouter } from 'react-router-dom'

import Home from './views/Home'
import Reg from './views/Reg'
import Login from './views/Login'
import Mine from './views/Mine'
import Classlist from './views/ClassList'
import ClassDetail from './views/ClassDetail'

import { withUser } from './utils/hoc';
import { Menu, Layout,Row,Col,Button } from 'antd';
import { HomeOutlined, UserOutlined,UnorderedListOutlined } from '@ant-design/icons'
import 'antd/dist/antd.css';

class App extends React.Component{
    state = {
        menu: [{
            path: '/home',
            text: '首页',
            icon: <HomeOutlined />
        },
        {
            path: '/classlist',
            text: '班级',
            icon: <UnorderedListOutlined />
        }, 
        // {
        //     path: '/reg',
        //     text: '注册'
        // },
        {
            path: '/mine',
            text: '我的',
            icon: <UserOutlined />
        }],
        current: '/home'
    }
    changeMenu = ({ item, key, keyPath, domEvent })=> {
        console.log('changeMenu',item, key)
        this.props.history.push(key);
        this.setState({
            current:key
        })

    }
    goto = (path)=>{
        const {history} = this.props;
        history.push(path);
    }
    UNSAFE_componentWillMount(){
        console.log('componentDidMount=',this.props)
        const {pathname} = this.props.location
        this.setState({
            current:pathname
        })
    }
    render() {
        console.log('App.props', this.props);
        
        const {menu,current} = this.state;
        
        return (
            <Layout>
                <Layout.Header style={{padding:0}}>
                    <Row>
                        <Col span={16}>
                            <Menu onClick={this.changeMenu} selectedKeys={[current]} mode="horizontal" theme="dark">
                            {
                                menu.map(item => (
                                    //<li key={item.path}><NavLink to={item.path} activeStyle={{color:'#f00',fontSize:20}}>{item.text}</NavLink></li>
                                    <Menu.Item key={item.path} icon={item.icon}>
                                        {item.text}
                                    </Menu.Item>
                                ))
                            }
                        </Menu>
                        </Col>
                        <Col span={8} style={{textAlign:'right'}}>
                            <Button type="link" onClick={this.goto.bind(null,'/reg')}>注册</Button>
                            <Button type="link" onClick={this.goto.bind(null,'/login')}>登录</Button>
                        </Col>
                    </Row>
                    
                </Layout.Header>
                <Layout.Content style={{padding:20}}>
                    {/* 路由配置 */}
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/classlist" component={Classlist} />
                        <Route path="/class/:id" component={ClassDetail} />
                        <Route path="/mine" component={Mine} />
                        <Route path="/reg" component={Reg} />
                        {/* <Route path="/login" component={Login}/> */}
                        <Route path="/login" component={Login}>
                            {/* <Login /> */}
                        </Route>
                        <Route path="/notfound">
                            <div style={{ textAlign: 'center' }}>
                                <h1 style={{ color: '#999', fontSize: 50 }}>404</h1>
                                <div>The page you visited is not found</div>
                            </div>
                        </Route>
                        {/* <Route path="/" component={Home} exact/> */}
                        <Redirect from="/" to="/home" exact />
                        <Redirect to="/notfound" />
                    </Switch>
                </Layout.Content>
                <Layout.Footer>Footer</Layout.Footer>
            </Layout>
    
        )
    }
}

App = withRouter(App)
// App = withUser(App)

export default App;