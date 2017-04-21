/**
 * Created by wenzhi on 17/4/14.
 */
import React from 'react'
import Counter from '../component/Counter'
import {connect} from 'react-redux'
import {Router, Route, browserHistory} from 'react-router'
import {increaseAction} from '../action/action'
import {bindActionCreators} from 'redux'
import * as actions from '../action/creator'

// let App = connect(mapStateToProps, mapDispatchToProps)(Counter)
/* mapStateToProps里面需要注意的是，由于我们的reducer是合并起来的，因此我们的state也是几个state拼起来。
 至于是哪几个state拼起来？     可以看回去rootReducer.js里面combineReducers的时候，里面的对象名字就是这里state的名字。    
 当然这里的return可以写成：return {state}也没所谓。但是为了大家能认清这个state里面有什么东西，这里写的稍微复杂一点 */
let mapStateToProps = (state) => {
  // return {count: 0};
  //以下代码可以用return {state}代替
  return {
    reduxState: {
      Increase: state.Increase,
      Theme: state.Theme}
  }
}
/*     mapDispatchToProps里面用到了bindActionCreators */
let mapDispatchToprops = (dispatch) => {
  // return {onIncreaseClick: ()=>dispatch(increaseAction)}
  return {reduxActions: bindActionCreators(actions, dispatch)}
}

let App = connect(mapStateToProps, mapDispatchToprops)(Counter)

export default (
  <Router history={browserHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>

);

