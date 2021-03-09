import React from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import request from '../utils/request'

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 6, span: 16 },
};

const checkUsername = function(rule, value){
    return new Promise((resolve,reject)=>{
        request.get('/user/check',{username:value}).then((res)=>{
            console.log('checkuser',res);
            if(res.code === 400){
                reject('用户名已存在')
            }else{
                resolve();
            }
        })

    })
}

function Reg(props) {
    const onFinish = (values) => {
        console.log('Success:', values);
        request.post('/reg',values).then(res=>{
            if(res.code === 201){
                props.history.replace({
                    pathname:'/login',
                    search:'username='+values.username,
                    params:{
                        a:10,b:20
                    }
                })
            }
        })
      };
    const rules = {
        username:[
            { required: true, message: '用户名不能为空' },
            { max:12,min:3, message: '用户名必须为3到12位字符' },
            {validator:checkUsername,validateTrigger:'onBlur'}
        ],
        password:[
            { required: true, message: '密码不能为空' },
            { max:18,min:6, message: '密码必须为6到18位字符' },
        ]
    }
    return (
        <div>
            <h1>免费注册</h1>
            <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={onFinish}
            >
                <Form.Item
                    label="用户名"
                    name="username"
                    rules={rules.username}
                    validateTrigger={['onChange','onBlur']}
                    hasFeedback
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="密码"
                    name="password"
                    rules={rules.password}
                >
                    <Input.Password />
                </Form.Item>


                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        注册
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}
export default Reg;