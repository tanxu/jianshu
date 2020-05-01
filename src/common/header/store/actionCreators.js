import * as actionTypes from './actionTypes'
import axios from 'axios'


const getListAction = (data) => {
  return {
    type: actionTypes.CHANGE_LIST,
    data: data
  }
}


export const searchFocusAction = () => {
  return {
    type: actionTypes.SEARCH_FOCUS,
  }
}
export const searchBlurAction = () => {
  return {
    type: actionTypes.SEARCH_BLUR,
  }
}


export const getList = () => {
  return (dispatch) => {
    axios.get('https://www.fastmock.site/mock/7d93730d50b7ddbcac726b3b517934eb/jianshu/list?t=' + Math.random()).then(res => {
      if (res.data.success) {
        const action = getListAction(res.data.result)
        dispatch(action)
      }

    }).catch(error => {
      console.log('error', error)
    })

  }
}