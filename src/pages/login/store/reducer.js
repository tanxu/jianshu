// import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
  loginStatus: false, // 用户是否登录
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_LOGIN:
      return state.set('loginStatus', action.status)
    default:
      return state;
  }
}