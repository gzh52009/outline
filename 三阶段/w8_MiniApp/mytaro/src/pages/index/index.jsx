import { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react';// react-redux -> connect
import Taro from '@tarojs/taro'

import './index.scss'


@inject('counterStore','userStore') // 设置注入组件的数据，等效于connect(mapStateToProps)
@observer       // 包装函数，让React组件能监听到mobox数据的改变，并自动更新组件，等效于connnect()(Index)
class Index extends Component {
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props
    // counterStore.increment();
    counterStore.counter++;
  }

  decrement = () => {
    const { counterStore } = this.props
    // counterStore.decrement()
    counterStore.counter--;
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  render () {
    console.log('props=',this.props);
    const { counterStore: { counter } } = this.props
    return (
      <View className='index'>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>

        <Button onClick={()=>{
          Taro.navigateTo({
            url:'/pages/mine/mine'
          })
        }}>我的111</Button>
      </View>
    )
  }
}

export default Index
