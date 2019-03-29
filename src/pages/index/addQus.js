import Taro, {Component} from '@tarojs/taro';
import {View,Text,Input,Textarea} from '@tarojs/components';
import Dialog from './dialog';
import './addQus.less';

export default class AddQus extends Component{

  render () {
    return (
      <View>
        <Dialog >
          <View className={'add-qus'}>
            <View className={'qus-body'}>
              <Input placeholder={'请输入标题'} className={'qus-title'}/>
              <Textarea placeholder={'请输入内容'} className={'qus-des'}></Textarea>
              <View className={'btn-group'}>
                <Button className={'btn-qus btn-ok'}>确定</Button>
                <Button className={'btn-qus btn-cancel'}>取消</Button>

              </View>
            </View>
          </View>
        </Dialog>

      </View>
    )
  }
}

