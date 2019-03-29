import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { connect } from '@tarojs/redux'

// import { add, minus, asyncAdd } from '../../actions/counter'
import { add, closeAdd } from '../../actions/qusList'

import AddQus from './addQus';

import './index.less'


// @connect(({ counter }) => ({
//   counter
// }), (dispatch) => ({
//   add () {
//     dispatch(add())
//   },
//   dec () {
//     dispatch(minus())
//   },
//   asyncAdd () {
//     dispatch(asyncAdd())
//   }
// }))
@connect(({ QusList }) => ({
  QusList
}), (dispatch) => ({
  addQus () {
    dispatch(add())
  },
  closeQus () {
    dispatch(closeAdd())
  }
}))
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillReceiveProps (nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  // render () {
  //   return (
  //     <View className='index'>
  //       <Button className='add_btn' onClick={this.props.add}>+</Button>
  //       <Button className='dec_btn' onClick={this.props.dec}>-</Button>
  //       <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
  //       <View><Text>{this.props.counter.num}</Text></View>
  //       <View><Text>Hello, World</Text></View>
  //     </View>
  //   )
  // }
  render () {
      let { showAddQus , addQus } =this.props.QusList;
      return (
        <View class={'index'}>
          <View className={'title'}>问答列表</View>
          <Button className={'btn'} onClick={addQus}>提问</Button>
          {showAddQus?<AddQus></AddQus>:null}
        </View>
      )
  }
}

export default Index
