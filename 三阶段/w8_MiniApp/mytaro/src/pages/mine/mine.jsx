import { Component } from 'react'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from 'mobx-react'

import './style.scss'


class Mine extends Component {
  state = {
    num:1
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick = ()=>{
    // this.setState({
    //   num:this.state.num+1
    // })
    this.setState((prevState)=>{
      return {
        num:prevState.num+1
      }
    })
  }

  render () {
    const {num} = this.state;
    return (
      <View className='Mine'>
        <View>Mine Page</View>
        <Button onClick={this.handleClick}>点我 {num}</Button>
      </View>
    )
  }
}

export default Mine
