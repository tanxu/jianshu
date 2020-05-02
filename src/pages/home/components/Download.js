import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DownloadWrapper } from '../style'
class Download extends Component {
  render() {
    return (
      <DownloadWrapper>
        <img src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt="" />
        <div className="info">
          <div className="title">
            下载简书手机App
            <i className="iconfont">&#xe628;</i>
          </div>
          <div className="description">随时随地发现和创作内容</div>
        </div>
      </DownloadWrapper>
    )
  }
}

export default connect(null, null)(Download);