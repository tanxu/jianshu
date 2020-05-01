import * as actionTypes from './actionTypes'
import axios from 'axios'


const getListAction = (data) => {
  return {
    type: actionTypes.CHANGE_LIST,
    data: data,
    totalPage: Math.ceil(data.length / 10)
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

export const mouseChange = (flag) => {
  return {
    type: actionTypes.MOUSE_STATUS_CHANGE,
    flag
  }
}

export const pageChange = (page) => {
  return {
    type: actionTypes.CHANGE_PAGE,
    page
  }
}


export const getList = () => {
  return (dispatch) => {
    axios.get('https://www.fastmock.site/mock/7d93730d50b7ddbcac726b3b517934eb/jianshu/list?t=' + Math.random()).then(res => {
      if (res.data.success) {
        dispatch(getListAction(res.data.result))
      }

    }).catch(error => {
      console.log('error', error)
    })

  }
}