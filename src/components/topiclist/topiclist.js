import Taro, { Component } from '@tarojs/taro';
import { ScrollView } from '@tarojs/components';
import {connect} from '@tarojs/redux';
import {getTopics} from '../../actions/topiclist';

import Topic from '../topic/Topic';

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
    let { data } =this.props;
    return (
      <ScrollView>{
        data.map((item) => <Topic info={item} key={item.author_id} />)
      }</ScrollView>
    )
  }
}
