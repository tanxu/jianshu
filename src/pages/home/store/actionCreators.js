import axios from 'axios'
import * as actionTypes from './actionTypes'

const changeHomeData = (result) => {
  return {
    type: actionTypes.CHANGE_HOME_DATA,
    topicList: result.topicList,
    articleList: result.articleList,
    recommendList: result.recommendList,
    writerList: result.writerList,
  }
}

const addHomeList = (result, nextPage) => {
  return {
    type: actionTypes.LOAD_MORE_DATA,
    data: result,
    nextPage
  }
}

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('https://www.fastmock.site/mock/7d93730d50b7ddbcac726b3b517934eb/jianshu/home').then(res => {
      if (res.data.success) {
        dispatch(changeHomeData(res.data.result))
      }
    }).catch(error => {
      console.log('error', error)
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('https://www.fastmock.site/mock/7d93730d50b7ddbcac726b3b517934eb/jianshu/article?page=' + page).then(res => {
      if (res.data.success) {
        dispatch(addHomeList(res.data.result, page + 1))
      }
    }).catch(error => {
      console.log('error', error)
    })
  }
}