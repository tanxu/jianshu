import axios from 'axios'
import * as actionTypes from './actionTypes'

const changeLogin = (status) => {
  return {
    type: actionTypes.CHANGE_LOGIN,
    status
  }
}

export const loginAction = (username, password) => {
  return (dispatch) => {
    axios.get('https://www.fastmock.site/mock/7d93730d50b7ddbcac726b3b517934eb/jianshu/login?username=' + username + '&password=' + password).then(res => {
      if (res.data.success) {
        dispatch(changeLogin(true))
      }
    })
  }
}

export const logout = () => {
  return (dispatch) => {
    dispatch(changeLogin(false))
  }
}