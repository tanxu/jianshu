import React, { Component } from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
import Download from './components/Download'
import { actionCreators } from './store'
class Home extends Component {

  componentDidMount() {
    axios.get('https://www.fastmock.site/mock/7d93730d50b7ddbcac726b3b517934eb/jianshu/home').then(res => {
      if (res.data.success) {
        const action = {
          type: "change_home_data",
          topicList: res.data.result.topicList,
          articleList: res.data.result.articleList,
          recommendList: res.data.result.recommendList,
          writerList: res.data.result.writerList,
        }
        this.props.changeHomeData(action)
      }

    }).catch(error => {
      console.log('error', error)
    })
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
    changeHomeData(action) {
      dispatch(action)
    }
  }
}

export default connect(null, mapDispatchToProps)(Home);