import * as types from './type'
export let increaseAction = (num = 1) => {
  return {type: types.INCREASE, num}
}
export let themeAction = () => {
  return {type: types.THEME}
}
