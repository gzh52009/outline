import React from 'react';
import { Redirect } from 'react-router-dom';

export function withUser(InnerComponent){
    return function OuterComponent (props){
        let userInfo = localStorage.getItem('userInfo');
        try{
            userInfo = JSON.parse(userInfo) || {}
        }catch(err){
            userInfo = {}
        } 
        return (
            <InnerComponent user={userInfo} {...props} />
        )
    }
}

export function withStorage(...keys){
    // 返回值才是高阶组件
    return function withData(InnerComponent){
        // {token:xxx,current:10}
        const provide = keys.reduce((prev,key)=>{
            let data = localStorage.getItem(key);
            try{
                data = JSON.parse(data)
            }catch(err){
                data = data;
            }

            prev[key] = data
            return prev;
        },{});

        return class OuterComponent extends React.Component{
            render(){
                return (
                    <InnerComponent {...provide} {...this.props} ></InnerComponent>
                )

            }
        }
    }
}


// 反向继承（只适用于类组件）
// export function withAuth(InnerComponent){
//     class OuterComponent extends InnerComponent{
//         render(){
//             console.log('Outer.render');
//             if(this.props.user.username){
//                 return super.render()
//             }else{
//                 return <Redirect to="/login" />
//             }
//         }
//     }

//     OuterComponent = withUser(OuterComponent)
//     return OuterComponent;
// }

// 用户登录权限控制
export function withAuth(InnerComponent){
    @withUser
    class OuterComponent extends React.Component{
        render(){
            if(this.props.user.username){
                return <InnerComponent {...this.props} />
            }else{
                return <Redirect to="/login" />
            }
        }
    }

    // OuterComponent = withUser(OuterComponent)
    return OuterComponent;
}

