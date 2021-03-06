const MENU_STATE = {
  cataList: [
    {key:'all',value:'全部'},
    {key:'good',value:'精华'},
    {key:'share',value:'分享'},
    {key:'ask',value:'问答'},
    {key:'job',value:'招聘'},
    {key:'dev',value:'客户端测试'}
  ],
  currentCata:{
    key:'all',value:'全部'
  },
  showDrawer:false,
};

export default function Menu ( prestate = MENU_STATE, action) {
  switch (action.type){
    case 'showDrawer':
      return {
        ...prestate,
        showDrawer:true
      };
    case 'hideDrawer':
      return {
        ...prestate,
        showDrawer:false
      };
    case 'changeCata':
      return {
        ...prestate,
        currentCata:action.currentCata
      };
    default:
      return prestate
  }
}
