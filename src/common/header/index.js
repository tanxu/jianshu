import React, { Component } from 'react'
import {
    HeaderWrapper, Logo, NavHeaderWrapper, WriteBtn, WriteIcon, SignUpBtn, LogInBtn,
    Container, StyleMode, ModeBtn, NavBar, NavItem, NavItemA, NavItemText, NavItemIcon, NavForm, NavSearch, NavSearchBtn, NavSearchIcon

} from './style'
class Header extends Component {

    render() {
        return (
            <NavHeaderWrapper>
                <HeaderWrapper>
                    {/* 左上角Logo */}
                    <Logo href="/" />
                    {/* 右上角 - 登录注册写文章 */}
                    <WriteBtn><WriteIcon />写文章</WriteBtn>
                    <SignUpBtn>注册</SignUpBtn>
                    <LogInBtn>登录</LogInBtn>
                    <StyleMode>
                        <ModeBtn>Aa</ModeBtn>
                    </StyleMode>
                    {/* 容器 */}
                    <Container>
                        <NavBar>
                            <NavItem className="active">
                                <NavItemA href="/">
                                    <NavItemText>首页</NavItemText>
                                    <NavItemIcon></NavItemIcon>
                                </NavItemA>
                            </NavItem>
                            <NavItem>
                                <NavItemA href="/">
                                    <NavItemText>下载App</NavItemText>
                                    <NavItemIcon></NavItemIcon>
                                </NavItemA>
                            </NavItem>
                            <NavItem className="search">
                                <NavForm>
                                    <NavSearch></NavSearch>
                                    <NavSearchBtn>
                                        <NavSearchIcon></NavSearchIcon>
                                    </NavSearchBtn>
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