import Taro, { Component } from '@tarojs/taro';
import { View, Text,Image} from '@tarojs/components';

import './topic.less';

export default class Topic extends Component{

    render () {
        let {info} = this.props;
        return (
            <View className='topic-info'>
                <Image className='topic-img' src={info.author?info.author.avatar_url:''} />
                <View className='topic-right'>
                    <View className='topic-top'>
                        <Text className='topic-up'>置顶</Text>
                        <Text className='topic-title'>{info.title}</Text>
                        
                    </View>
                    <View className='topic-bottom'>
                        <Text className='bottom-text'>{info.author.loginname}</Text>
                        <Text className='bottom-text'>{info.reply_count+'/'+info.visit_count}</Text>
                        <Text className='bottom-text'>{info.create_at}</Text>
                    </View>
                </View>
            </View>
        )

    }
}