export function showDrawer(){
  return (dispatch)=>{
    dispatch({type:'showDrawer'});
  }
}

export function changeCata(currentCata){
  return dispatch => dispatch({type:'changeCata',currentCata})
}

export function hideDrawer(){
  return (dispatch)=>{
    dispatch({type:'hideDrawer'});
  }
}

