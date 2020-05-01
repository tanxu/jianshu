import React, { Component } from 'react'
import { connect } from 'react-redux'
import { WriterWrapper, WrapperTitle, WriterList, WriterItem, WriterMore } from '../style'
// 作者
class Writer extends Component {
  render() {
    const { list } = this.props
    return (
      <WriterWrapper>
        <WrapperTitle>
          <span className="writer-title">推荐作者</span>
          <a href='#!' onClick={e => e.preventDefault()} className="writer-page-change">
            <i className="iconfont">&#xe851;</i>
            换一批
          </a>
        </WrapperTitle>
        <WriterList>
          {
            list.map((item) => {
              return (
                <WriterItem key={item.get('id')}>
                  <a className="writer-avator" href='#!' onClick={e => e.preventDefault()}>
                    <img src={item.get('avator')} alt="" />
                  </a>
                  <a className="writer-follow" href='#!' onClick={e => e.preventDefault()}>
                    <i className="iconfont">&#xe617;</i>
                    关注
                  </a>
                  <a className="writer-name" href='#!' onClick={e => e.preventDefault()}>{item.get('name')}</a>
                  <p className="writer-desc">{item.get('desc')}</p>
                </WriterItem>
              )
            })
          }
        </WriterList>
        <WriterMore href='#!' onClick={e => e.preventDefault()}>
          查看全部
          <i className="iconfont">&#xe628;</i>
        </WriterMore>
      </WriterWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'writerList'])
  }
}

export default connect(mapStateToProps, null)(Writer)