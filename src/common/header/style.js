import styled from 'styled-components'
import LogoPic from '../../static/nav-logo.png'

export const NavHeaderWrapper = styled.div`
    background-color: #fff;
    top: 0;
    border-width: 0 0 1px;
    position: fixed;
    right: 0;
    left: 0;
    z-index: 1030;
    height: 56px;
    min-height: 50px;
    margin-bottom: 20px;
    border-bottom: 1px solid #f0f0f0;
`

export const HeaderWrapper = styled.div`
    height: 56px;
    position: relative;
    min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;
`

export const Logo = styled.a`
    width: 100px;
    height: 56px;
    padding: 0;
    background-image: url(${LogoPic});
    background-size: contain;
    float: left;
`

export const WriteBtn = styled.a.attrs({ className: 'btn' })`
    float: right;
    width: 100px;
    height: 40px;
    line-height: 24px;
    margin: 8px 12px 0;
    border-radius: 20px;
    font-size: 15px;
    color: #fff;
    background-color: #ea6f5a;
`

export const WriteIcon = styled.i`

`

export const SignUpBtn = styled.a.attrs({ className: 'btn' })`
    float: right;
    width: 80px;
    height: 38px;
    line-height: 24px;
    margin: 9px 5px 0 15px;
    border: 1px solid rgba(236,97,73,.7);
    border-radius: 20px;
    font-size: 15px;
    color: #ea6f5a;
    background-color: transparent;
`

export const LogInBtn = styled.a.attrs({ className: 'btn' })`
    float: right;
    margin: 11px 6px 0 10px;
    font-size: 15px;
    color: #969696;
`

export const Container = styled.div.attrs({ className: 'container' })`
    width: 960px;
`

export const StyleMode = styled.div`
    float: right;
`
export const ModeBtn = styled.a`
    float: right;
    line-height: 20px;
    padding: 17px 10px;
    font-size: 24px;
    color: #969696;
`

export const NavBar = styled.ul`
    float: left;
    li{
        margin-right: 10px;
        float: left;
        position: relative;
        display: block;
    }
`

export const NavItem = styled.li`
    line-height: 20px;
    &.active{
        a{
            color: #ea6f5a;
            background: none;
        }
    }
    &.search{
        padding-left: 15px;
    }
`

export const NavItemA = styled.a`
    height: 56px;
    line-height: 26px;
    padding: 15px;
    color: #333;
    display: block;
`
export const NavItemText = styled.span``
export const NavItemIcon = styled.i`
    margin-right: 5px;
    display: inherit;
    float: left;
    font-size: 20px;
`

export const NavForm = styled.form`
    position: relative;
    top: 9px;
`
export const NavSearch = styled.input.attrs({ placeholder: '搜索' })`
    padding: 0 40px 0 20px;
    width: 240px;
    height: 38px;
    font-size: 14px;
    border: 1px solid #eee;
    border-radius: 40px;
    background: #eee;
    transition: width .5s;
    -moz-transition: width .5s;
    -webkit-transition: width .5s;
    -o-transition: width .5s;
    transition-delay: .1s;
    -moz-transition-delay: .1s;
    -webkit-transition-delay: .1s;
    -o-transition-delay: .1s;
    &::placeholder{
        color: #ccc;
    }
`

export const NavSearchBtn = styled.a`
    position: absolute;
    top: 4px;
    right: 5px;
    width: 30px;
    height: 30px!important;
    line-height: normal!important;
    padding: 0!important;
    color: #969696!important;
    text-align: center;
`

export const NavSearchIcon = styled.i`
    margin: 5px -1px 0 0;
    display: block;
`