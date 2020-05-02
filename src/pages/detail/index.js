import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { DetailWrapper, Header, Content } from './style'
import { actionCreators } from './store'
class Detail extends Component {

  componentDidMount() {
    this.props.getDetail(this.props.match.params.id)
  }

  render() {
    console.log(this.props)
    // console.log(this.props.match.params) // 动态参数
    // console.log(this.props.location.search) // 查询字符串
    const { title, content } = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <Content dangerouslySetInnerHTML={{ __html: content }} />
      </DetailWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getDetail(id) {
      dispatch(actionCreators.getDetailData(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Detail));