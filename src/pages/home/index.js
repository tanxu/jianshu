import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import Download from './components/Download'
import { actionCreators, actionTypes } from './store'
class Home extends PureComponent {

  componentDidMount() {
    this.props.changeHomeData()
    this.bindEvent()
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.windowScroll)
  }

  bindEvent() {
    window.addEventListener('scroll', this.props.windowScroll)
  }

  handleBackTop() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img className="home-pic" alt="图片" src="https://upload-images.jianshu.io/upload_images/2021661-17d336d190883e7a.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp" />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Download></Download>
          <Writer></Writer>
        </HomeRight>
        {this.props.scrollTopShow ? <BackTop onClick={this.handleBackTop}>回顶</BackTop> : null}

      </HomeWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    scrollTopShow: state.getIn(['home', 'scrollTopShow'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData() {
      dispatch(actionCreators.getHomeInfo())
    },
    windowScroll() {
      if (document.documentElement.scrollTop > 100) {
        dispatch(actionCreators.windowScroll(true))
      } else {
        dispatch(actionCreators.windowScroll(false))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);