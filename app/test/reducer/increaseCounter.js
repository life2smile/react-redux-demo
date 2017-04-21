/**
 * Created by wenzhi on 17/4/14.
 */
import * as types from '../action/type'
export default function counter(state = {count: 0}, action) {
  const count = state.count;
  switch (action.type) {
    case types.INCREASE:
      return {count: count + action.num};
      break;
    default:
      return state;
  }
}
