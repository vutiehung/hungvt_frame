
const init_state = {
    isBlue:true
  }
  const test =  function (state=init_state, action) {
 
    if(action.type==="click")    return {isBlue:!state.isBlue}
    return state;
  }
  export default test