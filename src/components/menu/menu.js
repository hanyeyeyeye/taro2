import Taro, { Component } from '@tarojs/taro';
import { View, Text,Image} from '@tarojs/components';
import { connect } from '@tarojs/redux';
import {AtDrawer} from 'taro-ui';
// import "~taro-ui/dist/style/components/drawer.scss";
// import "~taro-ui/dist/style/components/list.scss";

import { showDrawer,changeCata ,hideDrawer} from '../../actions/menu'
import './menu.less';

@connect( (store) =>{
  return {...store.Menu}
}, (dispatch)=>{
  return {
    showMenu:function(){
      //redux异步回调示例，showDrawer返回一个方法，通过dispatch执行这个返回的方法
      dispatch(showDrawer())
    },
    hideDrawer(){
      dispatch(hideDrawer())
    },
    selectCata(cata){
      dispatch(changeCata(cata))
    },

  }
})

export default class Menu extends Component{
  showDrawer (){
    
    this.props.showMenu&&this.props.showMenu();
  }

  hideDrawer(){
    this.props.hideDrawer&&this.props.hideDrawer();
  }

  getCatas(list){
    return list.map( ( item) => item.value );
  }

  selectCata(index) {
    let {cataList} = this.props;
    let clickCata = cataList[index];
    this.props.selectCata&&this.props.selectCata(clickCata)
  }
  render (){
    let {showDrawer,cataList} = this.props;
    let catas=this.getCatas(cataList);
    return (
      <View className='topiclist-menu'>
        <Image onClick={this.showDrawer.bind(this)} src={require('../../assets/img/menu-btn.png')} className='image' />
        <Text>{this.props.currentCata?this.props.currentCata.value:''}</Text>
        <Image src={require('../../assets/img/user.png')} className='image' />
        <AtDrawer onClose={this.hideDrawer.bind(this)} onItemClick={this.selectCata.bind(this)} style='position:absolute' show={showDrawer} items={catas} />
      </View>
    )
  }
}
