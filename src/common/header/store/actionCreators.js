import * as actionTypes from './actionTypes'

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