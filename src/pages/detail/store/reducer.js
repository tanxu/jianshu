import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'
const defaultState = fromJS({
  title: '做人，不要自作多情，生活中真的没有人在乎你',
  content: `<img src="https://upload-images.jianshu.io/upload_images/11864358-2c5f48f03dffb247.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/640/format/webp" alt="" />
  <p>父母永远都是孩子最亲近的人，特别是妈妈从怀孕到生孩子这个过程，她们给了孩子生命，同时也时刻守护着孩子们的成长。</p>
  <p>父母永远都是孩子最亲近的人，特别是妈妈从怀孕到生孩子这个过程，她们给了孩子生命，同时也时刻守护着孩子们的成长。</p>
  <p>父母永远都是孩子最亲近的人，特别是妈妈从怀孕到生孩子这个过程，她们给了孩子生命，同时也时刻守护着孩子们的成长。</p>
  <p><b>父母永远都是孩子最亲近的人</b>，特别是妈妈从怀孕到生孩子这个过程，她们给了孩子生命，同时也时刻守护着孩子们的成长。</p>`
})

export default (state = defaultState, action) => {
  switch (action.type) {

    default:
      return state;
  }
}