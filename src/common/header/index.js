import React, { Component } from 'react'
import {
    HeaderWrapper, Logo, NavHeaderWrapper, WriteBtn, SignUpBtn, LogInBtn,
    Container, StyleMode, ModeBtn, NavBar, NavItem, NavItemA, NavItemText, NavForm, NavSearch,

} from './style'
class Header extends Component {

    constructor(props) {
        super(props)
        this.handleInputFocus = this.handleInputFocus.bind(this)
        this.handleInputBlur = this.handleInputBlur.bind(this)
        this.state = {
            focused: false
        }
    }

    handleInputFocus() {
        this.setState({
            focused: true
        })
    }
    handleInputBlur() {
        this.setState({
            focused: false
        })
    }

    render() {
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
                                    <NavSearch onBlur={this.handleInputBlur} onFocus={this.handleInputFocus} className={this.state.focused ? 'focus' : ''}></NavSearch>
                                    <a className="search-btn">
                                        <i className="iconfont">&#xe60b;</i>
                                    </a>
                                </NavForm>
                            </NavItem>
                        </NavBar>
                    </Container>
                </HeaderWrapper>
            </NavHeaderWrapper>
        )
    }
}

export default Header