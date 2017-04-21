/**
 * Created by wenzhi on 17/4/14.
 */
import React, {Component, PropTypes} from 'react'
class Counter extends Component {

  //组件待开发
  constructor(props) {
    super(props)
  }

  // onIncreaseClick() {
  //   this.props.onIncreaseClick();
  // }


  addHandler(num) {
    let {increaseAction} = this.props.reduxActions
    increaseAction(num)
  }

  themeHandler() {
    let {themeAction} = this.props.reduxActions
    themeAction()
  }

  render() {
    let {reduxState} = this.props;
    console.log(reduxState.Theme.color+"=============")
    return (
      <div style={{background: reduxState.Theme.color}}>
        <div>
          <span>{reduxState.Increase.count}</span>
          <button onClick={()=> {
            this.addHandler(1)
          }}>Increase
          </button>
        </div>
        <div>
          <button onClick={()=> {
            this.addHandler(1)
          }}>增加1
          </button>
        </div>
        <div>
          <button onClick={()=> {
            this.addHandler(2)
          }}>增加2
          </button>
        </div>
        <div>
          <button onClick={
            this.themeHandler.bind(this)
          }>切换主题
          </button>
        </div>
      </div>
    )
  }
}

export default Counter;

// export function mapDispatchToProps(dispatch) {
//   return {
//     onIncreaseClick: ()=> dispatch(increaseAction)
//   }
// }

// export function mapStateToProps(state) {
//   return {
//     value: state.count
//   }
// }




