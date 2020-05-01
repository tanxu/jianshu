import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ListItem, ListInfo } from '../style'
// 列表
class List extends Component {
  render() {
    const { list } = this.props
    return (
      <div>
        {
          list.map((item) => {
            return (
              <ListItem key={item.get('id')}>
                <img className="list-pic" alt={item.get('title')} src={item.get('imgUrl')} />
                <ListInfo>
                  <h3 className="list-title">{item.get('title')}</h3>
                  <p className="list-desc">{item.get('desc')}</p>
                </ListInfo>
              </ListItem>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'articleList'])
  }
}

export default connect(mapStateToProps, null)(List);