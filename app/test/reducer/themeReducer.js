import * as types from '../action/type'
const whiteColor = '#aabede'
const grayColor = '#fccfcc'

let reducer = (state = {color: whiteColor}, action)=> {
  switch (action.type) {
    case types.THEME:
      console.log(state.color)
      if (state.color == whiteColor) {
        console.log("return gray...")
        return {color: grayColor}
      } else {
        console.log("return withe")
        return {color: whiteColor}
      }
      break;
    default:
      return state;
  }
}
export default reducer;
