import {getJSON} from '../utils/utils';
import ApiObj from '../constants/api';

// 异步的action
export function getTopics (params) {
  return async function (dispatch){
    let res = await getJSON(ApiObj.getTopics,params);
    if(res&&res.data){
      return dispatch({type:'getTopics',data:res.data.data})
    }

  }
}
