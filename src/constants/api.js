const rootHost = 'https://cnodejs.org/api/v1';

const ApiObj = {
  getTopics:`${rootHost}/topics`,//主题首页列表
  getTopicDetail:`${rootHost}/topic/`,//主题详情
  getAccessToken:`${rootHost}/accesstoken/`,//获取登陆token
  getUserInfo:`${rootHost}/user/`,//获取用户信息
  createTopic:`${rootHost}/topics/`,//新建话题
  replyTopic:`${rootHost}/topic/`,//回复话题
  upReply:`${rootHost}/reply/`,//点赞
};

export default ApiObj
