// import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  writerList: [],
  articlePage: 1,
  scrollTopShow: false
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
        writerList: fromJS(action.writerList),
      })
    case actionTypes.LOAD_MORE_DATA:
      return state.merge({
        articleList: state.get('articleList').concat(fromJS(action.data)),
        articlePage: action.nextPage
      })
    case actionTypes.WINDOW_SCROLL:
      return state.set('scrollTopShow', action.show)

    default:
      return state;
  }
}