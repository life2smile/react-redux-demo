import {combineReducers} from 'redux'
import Increase from './increaseCounter'
import Theme from './themeReducer'
const rootReducer = combineReducers({
  Increase,
  Theme
});
export default rootReducer;
