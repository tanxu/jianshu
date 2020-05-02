import React, { Component } from 'react'
import { connect } from 'react-redux'
import { DetailWrapper, Header, Content } from './style'
import { actionCreators } from './store'
class Detail extends Component {

  componentDidMount() {
    this.props.getDetail()
  }

  render() {
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
    getDetail() {
      dispatch(actionCreators.getDetailData())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);