// Write your JS code here
import {Component} from 'react'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: true,
    errorMsg: '',
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  onSubmitSuccess = () => {
    const {history} = this.props
    history.replace('/')
  }

  onClickUsername = event => {
    this.setState({username: event.target.value})
  }

  onClickPassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'

    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }

    const response = await fetch(url, options)
    const data = await response.json()
    console.log(data)

    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  render() {
    const {username, password, showSubmitError, errorMsg} = this.state
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png "
          alt="website login"
          className="image"
        />
        <form onSubmit={this.onSubmitForm}>
          <div className="login-bg">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png "
              alt="website logo"
              className="logo-image"
            />
            <label htmlFor="username" className="label">
              USERNAME
            </label>
            <input
              type="text"
              id="username"
              placeholder="username"
              className="input"
              value={username}
              onChange={this.onClickUsername}
            />
            <label htmlFor="password" className="label">
              PASSWORD
            </label>
            <input
              type="password"
              id="password"
              placeholder="password"
              className="input"
              value={password}
              onChange={this.onClickPassword}
            />
            <button type="submit" className="login-button">
              Login
            </button>
          </div>
          {showSubmitError && <p>*{errorMsg}</p>}
        </form>
      </div>
    )
  }
}
export default LoginForm
