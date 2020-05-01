import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
const defaultState = fromJS({
  topicList: [
    {
      id: 1,
      title: '社会热点',
      imgUrl: 'https://user-gold-cdn.xitu.io/1588177067222972f6f9c1ded073f3399c59e8ec79233.jpg?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1',
    },
    {
      id: 2,
      title: '手绘',
      imgUrl: 'https://user-gold-cdn.xitu.io/2020/5/1/171cfe001a630347?imageView2/1/w/120/h/120/q/85/format/webp/interlace/1',
    }
  ]
})

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_FOCUS:
      return state.set('focused', true)

    default:
      return state;
  }
}