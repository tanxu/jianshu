import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RecommendWrapper, RecommendItem } from '../style'
// 推荐
class Recommend extends Component {
  render() {
    const { list } = this.props
    return (
      <RecommendWrapper>
        {
          list.map((item) => {
            return (
              <RecommendItem key={item.get('id')} href='#' onClick={e => e.preventDefault()}>
                <img className="recommend-pic" src={item.get('imgUrl')} alt={item.get('title')} />
              </RecommendItem>
            )
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'recommendList'])
  }
}

export default connect(mapStateToProps, null)(Recommend);