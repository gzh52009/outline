import React from 'react'

import { Form, Input, Button, Checkbox } from 'antd';
import querystring from 'querystring';
import { withRedux } from '../utils/hoc';
import {connect} from 'react-redux'

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
  };

function Login(props){
    const onFinish = (values) => {
        console.log('Success:', values);
        fetch('/api/login',{
            body: JSON.stringify(values), // must match 'Content-Type' header
            headers: {
            'content-type': 'application/json'
            },
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
   
        })
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
            console.log('data',data);
            if(data.code === 200){
                
                // props.dispatch({type:'login',user:data.data})
                props.login(data.data)
                props.history.replace('/mine')
                
            }
        });
      };

      const query = querystring.parse(props.location.search.slice(1));
      console.log(props.location.search,query)
    return (
        <Form
        {...layout}
        name="basic"
        initialValues={{ remember: true,username:query.username }}
        onFinish={onFinish}
        >
        <Form.Item
            label="用户名"
            name="username"
            rules={[{ required: true, message: '用户名不能为空' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="密码"
            name="password"
            rules={[{ required: true, message: '密码不能为空' }]}
        >
            <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>7天免登录</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
            登录
            </Button>
        </Form.Item>
        </Form>
    )
}
// Login = withRedux(Login)
Login = connect(state=>{
    return {}
},dispatch=>{
    return {
        login(user){
            dispatch({type:'login',user})
        }
    }
})(Login)
export default Login;