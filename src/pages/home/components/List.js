import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { actionCreators } from '../store'
import { ListItem, ListInfo, LoadMore } from '../style'
// 列表
class List extends PureComponent {
  render() {
    const { list, handleLoadMore, page } = this.props
    return (
      <div>
        {
          list.map((item, index) => {
            return (
              <Link to="/detail">
                <ListItem key={index}>
                  <img className="list-pic" alt={item.get('title')} src={item.get('imgUrl')} />
                  <ListInfo>
                    <h3 className="list-title">{item.get('title')}</h3>
                    <p className="list-desc">{item.get('desc')}</p>
                  </ListInfo>
                </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => handleLoadMore(page)}>加载更多</LoadMore>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLoadMore(page) {
      dispatch(actionCreators.getMoreList(page))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);