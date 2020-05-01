import React, { Component } from 'react'
import {
  HeaderWrapper, Logo, NavHeaderWrapper, WriteBtn, SignUpBtn, LogInBtn,
  Container, StyleMode, ModeBtn, NavBar, NavItem, NavItemA, NavItemText, NavForm, NavSearch, SearchInfo,
  SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList
} from './style'
import { connect } from "react-redux";
import { actionCreators } from './store'

class Header extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    const { handleInputBlur, handleInputFocus, focused } = this.props
    return (
      <NavHeaderWrapper>
        <HeaderWrapper>
          {/* 左上角Logo */}
          <Logo href="/" />
          {/* 右上角 - 登录注册写文章 */}
          <WriteBtn><i className="iconfont">&#xe6e5;</i>写文章</WriteBtn>
          <SignUpBtn>注册</SignUpBtn>
          <LogInBtn>登录</LogInBtn>
          <StyleMode>
            <ModeBtn>
              <i className="iconfont">&#xe636;</i>
            </ModeBtn>
          </StyleMode>
          {/* 容器 */}
          <Container>
            <NavBar>
              <NavItem className="active">
                <NavItemA href="/">
                  <NavItemText>首页</NavItemText>
                  <i className="iconfont">&#xe62f;</i>
                </NavItemA>
              </NavItem>
              <NavItem>
                <NavItemA href="/">
                  <NavItemText>下载App</NavItemText>
                  <i className="iconfont">&#xe608;</i>
                </NavItemA>
              </NavItem>
              <NavItem className="search">
                <NavForm>
                  <NavSearch onBlur={handleInputBlur} onFocus={handleInputFocus}
                    className={focused ? 'focus' : ''} />
                  <div className="search-btn">
                    <i className="iconfont">&#xe60b;</i>
                  </div>
                  {this.getListArea()}
                </NavForm>
              </NavItem>
            </NavBar>
          </Container>
        </HeaderWrapper>
      </NavHeaderWrapper>
    )
  }

  getListArea = () => {
    const { focused, list, totalPage, handleMouseEnter, handleChangePage, handleMouseLeave, mouseIn, page } = this.props

    const newList = list.toJS()
    const pageList = []
    if (newList.length) {
      for (let index = (page - 1) * 10; index < page * 10; index++) {
        pageList.push(
          <SearchInfoItem key={newList[index]}>{newList[index]}</SearchInfoItem>
        )
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch onClick={() => { handleChangePage(page, totalPage) }}>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    } else {
      return null
    }
  }
}


const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputBlur() {
      dispatch(actionCreators.searchBlurAction())
    },
    handleInputFocus() {
      dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocusAction())
    },
    handleMouseEnter() {
      dispatch(actionCreators.mouseChange(true))
    },
    handleMouseLeave() {
      dispatch(actionCreators.mouseChange(false))
    },
    handleChangePage(page, totalPage) {
      console.log(page, totalPage)
      if (page < totalPage) {
        dispatch(actionCreators.pageChange(page + 1))
      } else {
        dispatch(actionCreators.pageChange(1))
      }
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);