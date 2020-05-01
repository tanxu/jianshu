import React from 'react'
import {
  HeaderWrapper, Logo, NavHeaderWrapper, WriteBtn, SignUpBtn, LogInBtn,
  Container, StyleMode, ModeBtn, NavBar, NavItem, NavItemA, NavItemText, NavForm, NavSearch, SearchInfo,
  SearchInfoTitle, SearchInfoSwitch, SearchInfoItem, SearchInfoList
} from './style'
import { connect } from "react-redux";
import { actionCreators } from './store'

const getListArea = (show) => {
  if (show) {
    return (
      <SearchInfo>
        <SearchInfoTitle>
          热门搜索
          <SearchInfoSwitch>换一批</SearchInfoSwitch>
        </SearchInfoTitle>
        <SearchInfoList>
          <SearchInfoItem>简述</SearchInfoItem>
          <SearchInfoItem>简述</SearchInfoItem>
          <SearchInfoItem>简述</SearchInfoItem>
          <SearchInfoItem>简述</SearchInfoItem>
          <SearchInfoItem>简述</SearchInfoItem>
          <SearchInfoItem>简述</SearchInfoItem>
        </SearchInfoList>
      </SearchInfo>
    )
  } else {
    return null
  }
}

const Header = (props) => {
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
                <NavSearch onBlur={props.handleInputBlur} onFocus={props.handleInputFocus}
                  className={props.focused ? 'focus' : ''} />
                <div className="search-btn">
                  <i className="iconfont">&#xe60b;</i>
                </div>
                {getListArea(props.focused)}
              </NavForm>
            </NavItem>
          </NavBar>
        </Container>
      </HeaderWrapper>
    </NavHeaderWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    // focused: state.get('header').get('focused')
    focused: state.getIn(['header', 'focused'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleInputBlur() {
      dispatch(actionCreators.searchBlurAction())
    },
    handleInputFocus() {
      dispatch(actionCreators.searchFocusAction())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);