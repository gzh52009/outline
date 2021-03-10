import React from 'react'

import { Route, Switch, Redirect, Link, NavLink, withRouter } from 'react-router-dom'

import Home from './views/Home'
import Reg from './views/Reg'
import Login from './views/Login'
import Mine from './views/Mine'
import Classlist from './views/ClassList'
import ClassDetail from './views/ClassDetail'

import { withUser, withRedux } from './utils/hoc';
import { Menu, Layout, Row, Col, Button } from 'antd';
import { HomeOutlined, UserOutlined, UnorderedListOutlined } from '@ant-design/icons'
import {connect} from 'react-redux';
import {logout as logoutActionCreator} from '@/store/actions/user'
import 'antd/dist/antd.css';

@withRedux
class App extends React.Component {
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
        current: '/home',
    }
    changeMenu = ({ item, key, keyPath, domEvent }) => {
        console.log('changeMenu', item, key)
        this.props.history.push(key);
        this.setState({
            current: key
        })

    }
    goto = (path) => {
        const { history } = this.props;
        history.push(path);
    }
    UNSAFE_componentWillMount() {
        console.log('componentDidMount=', this.props)
        const { pathname } = this.props.location
        this.setState({
            current: pathname
        })
    }
    // componentDidMount(){
    //     const userInfo = store.getState();
    //     this.setState({
    //         userInfo
    //     })
    //     store.subscribe(()=>{
    //         const state = store.getState();
    //         console.log('subscribe',state)
    //         this.setState({
    //             userInfo:state.userInfo
    //         })
    //     })

    // }

    render() {
        const { logout,user } = this.props;
        const { menu, current } = this.state;

        console.log('App.props', this.props);
        return (
            <Layout>
                <Layout.Header style={{ padding: 0 }}>
                    <Row>
                        <Col span={16}>
                            <Menu onClick={this.changeMenu} selectedKeys={[current]} mode="horizontal" theme="dark">
                                {
                                    menu.map(item => (
                                        <Menu.Item key={item.path} icon={item.icon}>
                                            {item.text}
                                        </Menu.Item>
                                    ))
                                }
                            </Menu>
                        </Col>
                        <Col span={8} style={{ textAlign: 'right' }}>
                            {
                                user.authrization ?
                                    <Button type="link" onClick={logout}>{user.username} 退出</Button>
                                    :
                                    <>
                                        <Button type="link" onClick={this.goto.bind(null, '/reg')}>注册</Button>
                                        <Button type="link" onClick={this.goto.bind(null, '/login')}>登录</Button>
                                    </>
                            }

                        </Col>
                    </Row>

                </Layout.Header>
                <Layout.Content style={{ padding: 20 }}>
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

// mapStateToProps：用于定义传入组件的数据
const mapStateToProps = function(state){
    console.log('state==',state);
    return {
        user:state.user.userInfo
    }
}
// mapDispatchToProps: 用于定义修改state的方法
const mapDispatchToProps = function(dispatch){
    return {
        logout(){
            // dispatch({type:'logout'})
            dispatch(logoutActionCreator())
        }
    }
}
App = connect(mapStateToProps,mapDispatchToProps)(App)

export default App;