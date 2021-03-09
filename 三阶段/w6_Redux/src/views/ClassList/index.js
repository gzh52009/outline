import React, { Component } from 'react'
import { withAuth, withStorage, withUser } from '../../utils/hoc';
import request from '@/utils/request'
import { Switch, Route, Redirect } from 'react-router-dom'
import { Card, Row, Col, Tabs, Layout, Menu } from 'antd'

import Html5 from './Html5'
import Java from './Java'
import Python from './Python'
import UI from './UI'
import Ios from './Ios'
import Android from './Android'

class Classlist extends Component {
    state = {
        classList: [],
        total: 0,
        categories: [],
        current: 'HTML5',
        category: '',
    }
    gotoDetail = (id) => {
        const { history } = this.props
        history.push({
            pathname: '/class/' + id,
            // 自定数据
            testData: 123,
            state: {
                a: 10, b: 20
            }
        })
    }
    changeMenu = ({ item, key }) => {
        const {history,match} = this.props
        // this.setState({
        //     current: key,
        //     category: key
        // }, () => {
        //     this.getClass()
        // })
        history.push(match.path + '/' + key.toLowerCase())
    }
    async getClass() {
        const { category } = this.state;
        const data = {}
        if (category) {
            data.category = category;
        }
        const { data: classData } = await request('/class', data);
        this.setState({
            classList: classData.result,
            total: classData.total,
        })
    }
    // 生命周期函数：初始化时且首次渲染后执行
    async componentDidMount() {
        const { data: categoryData } = await request('/category');

        this.setState({
            categories: categoryData.result
        })

        this.getClass();
    }
    render() {
        const { classList, categories, current } = this.state;
        const {match} = this.props;
        console.log('Classlist.render', this.props)
        return (
            <div>
                <Layout>
                    <Layout.Sider theme="light" width={160}>
                        {/* <Tabs defaultActiveKey="1" onChange={this.tabChange} tabPosition="left">
                            {
                                categories.map(item=>(
                                    <Tabs.TabPane tab={item.name} key={item._id}></Tabs.TabPane>
                                ))
                            }
                            
                            
                        </Tabs> */}
                        <Menu onClick={this.changeMenu} selectedKeys={[current]}>
                            {
                                categories.map(item => (
                                    //<li key={item.path}><NavLink to={item.path} activeStyle={{color:'#f00',fontSize:20}}>{item.text}</NavLink></li>
                                    <Menu.Item key={item.name}>
                                        {item.name}
                                    </Menu.Item>
                                ))
                            }
                        </Menu>
                    </Layout.Sider>
                    <Layout.Content style={{ paddingLeft: 20 }}>
                        {/* <Row gutter={[20, 20]}>
                            {
                                classList.map(item => (
                                    <Col key={item._id}>
                                        <Card title={item.name} onClick={this.gotoDetail.bind(null, item._id)}>
                                            <p>学科：{item.category}</p>
                                            <p>城市：{item.city}</p>
                                        </Card>
                                    </Col>
                                ))
                            }
                        </Row> */}
                        <Switch>
                            <Route path={match.path+'/html5'} component={Html5} />
                            <Route path={match.path+'/java'} component={Java} />
                            <Route path={match.path+'/python'} component={Python} />
                            <Route path={match.path+'/ui'} component={UI} />
                            <Route path={match.path+'/ios'} component={Ios} />
                            <Route path={match.path+'/android'} component={Android} />
                            <Redirect from={match.path} to={match.path+'/html5'} exact />
                        </Switch>
                        
                    </Layout.Content>
                </Layout>

            </div>
        )
    }
}


export default Classlist;