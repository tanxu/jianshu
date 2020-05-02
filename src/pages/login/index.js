import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LoginWrapper, LoginBox, Input, Button } from './style'
import { actionCreators } from './store'
// import { actionCreators } from './store'
class Login extends PureComponent {

  render() {
    const { loginStatus } = this.props

    if (!loginStatus) {
      return (
        < LoginWrapper >
          <LoginBox>
            <Input innerRef={(username) => this.username = username} placeholder="账号"></Input>
            <Input innerRef={(password) => this.password = password} placeholder="密码" type="password"></Input>
            <Button onClick={() => this.props.handleLogin(this.username, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper >
      )
    } else {
      return (
        <Redirect to='/'></Redirect>
      )
    }


  }
}

const mapStateToProps = (state) => {
  return {
    loginStatus: state.getIn(['login', 'loginStatus'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin(username, password) {
      dispatch(actionCreators.loginAction(username.value, password.value))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);