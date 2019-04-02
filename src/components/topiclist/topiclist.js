import Taro, { Component } from '@tarojs/taro';
import { View, Text,Button} from '@tarojs/components';
import {connect} from '@tarojs/redux';
import {getTopics} from '../../actions/topiclist';

@connect((store)=>{
  return {...store.TopicList,currentCata:store.Menu.currentCata}
},(dispatch)=>{
  return {
    getTopics(params){
      dispatch(getTopics(params))
    }
  }
})
export default class TopicList extends Component{
  componentWillMount(){
    let {limit,page,currentCata} = this.props;
    this.props.getTopics&&this.props.getTopics({limit,page,tab:currentCata.key,mdrender:true})
  }
  render (){
    return (
      <View>topiclist</View>
    )
  }
}
