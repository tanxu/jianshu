import React, { Component } from 'react'
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import Topic from './components/Topic'
import List from './components/List'
import Recommend from './components/Recommend'
import Writer from './components/Writer'
class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img alt="图片" src="https://upload-images.jianshu.io/upload_images/2021661-17d336d190883e7a.jpg?imageMogr2/auto-orient/strip|imageView2/2/w/1200/format/webp" />
          <Topic></Topic>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <Writer></Writer>
        </HomeRight>
      </HomeWrapper>
    )
  }
}

export default Home