import axios from 'axios'
import * as actionTypes from './actionTypes'
const changeData = (title, content) => {
  return {
    type: actionTypes.CHANGE_DETAIL_DATA,
    title, content
  }
}

export const getDetailData = () => {
  return (dispatch) => {
    axios.get('https://www.fastmock.site/mock/7d93730d50b7ddbcac726b3b517934eb/jianshu/detailData').then(res => {
      if (res.data.success) {
        const { title, content } = res.data.result
        dispatch(changeData(title, content))
      }
    })
  }
}