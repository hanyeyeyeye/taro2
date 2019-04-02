const TOPICLIST_STATE = {
  limit: 20,
  page:1,
  data:[]
};

export default function TopicList (prestate = TOPICLIST_STATE, action) {
  switch (action.type) {
    case 'getTopics':
      return {
        ...prestate,
        data:action.data
      };
    default:
       return {...prestate}
  }
}
