import {ADD} from '../constants/qusList'

const INITIAL_STATE = {
  qusList: [],
  showAddQus: false
};

export default function QusList ( state = INITIAL_STATE, action) {
  switch (action.type){
    case 'ADDQUS':
      return {
        ...state,
        showAddQus:true
      }
    case 'CLOSEADD':
      return {
        ...state,
        showAddQus:false
      }
    default:
      return state
  }
}
