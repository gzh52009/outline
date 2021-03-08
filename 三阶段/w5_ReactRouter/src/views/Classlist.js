import React,{Component} from 'react'
import { withAuth, withStorage, withUser } from '../utils/hoc';
import request from '@/utils/request'

import {Card,Row,Col,Tabs,Layout,Menu } from 'antd'

class Classlist extends Component{
    state = {
        classList:[],
        total:0,
        categories:[],
        current:'',
        category:'',
    }
    gotoDetail = (id)=>{
        const {history} = this.props
        history.push({
            pathname:'/class/'+id,
            // 自定数据
            testData:123,
            state:{
                a:10,b:20
            }
        })
    }
    changeMenu = ({item,key})=>{
        this.setState({
            category:key
        },()=>{
            this.getClass()
        })
    }
    async getClass(){
        const {category} = this.state;
        const data = {}
        if(category){
            data.category = category;
        }
        const {data:classData} = await request('/class',data);
        this.setState({
            classList:classData.result,
            total:classData.total,
        })
    }
    // 生命周期函数：初始化时且首次渲染后执行
    async componentDidMount(){
        const {data:categoryData} = await request('/category');
        
        this.setState({
            categories:categoryData.result
        })
        
        this.getClass();
    }
    render(){
        const {classList,categories,current} = this.state;
        console.log('Classlist.render')
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
                    <Layout.Content style={{paddingLeft:20}}>
                    <Row gutter={[20,20]}>
                    {
                        classList.map(item=>(
                            <Col key={item._id}>
                                <Card title={item.name} onClick={this.gotoDetail.bind(null,item._id)}>
                                    <p>学科：{item.category}</p>
                                    <p>城市：{item.city}</p>
                                </Card>
                            </Col>
                        ))
                    }
                </Row>
                    </Layout.Content>
                </Layout>
                
            </div>
        )
    }
}


export default Classlist;