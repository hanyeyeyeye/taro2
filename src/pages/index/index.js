import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'
import 'taro-ui/dist/style/index.scss'; // 全局引入一次即可

import Menu from '../../components/menu/menu';
import TopicList from '../../components/topiclist/topiclist';

import './index.less'

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

  render () {
      return (
        <View class='index'>
          <Menu />
          <TopicList />
        </View>
      )
  }
}

export default Index
