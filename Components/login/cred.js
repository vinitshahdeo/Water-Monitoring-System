import React from 'react';


class LoginBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  submitLogin(e) {}

  render() {
    return (
      <div className="inner-container">
        <div className="header">
          Welcome to PROJECT NAME
        </div>
        <div className="box">

          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text"
              name="username"
              className="login-input"
              placeholder="Username"/>
          </div>

          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="login-input"
              placeholder="Password"/>
          </div>

          <button
            type="button"
            className="login-btn"
            onClick={this
            .submitLogin
            .bind(this)}>Login</button>
        </div>
        
        <div>
        <label>Forgot Password</label>
        </div>
        <div>
        <label>Don't have an account? 
        Sign Up </label>
        </div>
      </div>
    );
  }

}

export default LoginBox;
