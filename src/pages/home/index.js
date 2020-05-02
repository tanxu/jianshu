import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import Download from './components/Download'
import { actionCreators } from './store'
class Home extends Component {

  componentDidMount() {
    this.props.changeHomeData()
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
      </HomeWrapper>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeHomeData() {
      dispatch(actionCreators.getHomeInfo())
    }
  }
}

export default connect(null, mapDispatchToProps)(Home);