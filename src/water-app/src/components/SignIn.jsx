import React, { Component } from 'react';
import '../stylesheets/SignIn.css';
import Info from './Info.jsx';
import Footer from './Footer.jsx';
import logo from '../assets/logo.jpg'


class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    let name= event.target.name;
    let value= event.target.value

    this.setState({
      [name]: value
    })
  }

  handleSubmit =(event) => {
    // alert('A name was submitted: ' + this.state.username);      Add function as per requirement
    event.preventDefault();
  }

  render() {
    return (
      <>
        <div className="signIn-main">
          <div className="signIn-left-side">
            <section className="signIn-first-part">
              <div className="signIn-upperHalf">
                <img src={logo} alt="Logo" className='signIn-logo' />
                <h1> Water Monitoring System</h1>
              </div>
              <div className="signIn-bottomHalf">
                <p className='signIn-welcome'>Welcome To,</p><br />
                <br />
                <h1>Water Monitor System</h1>
              </div>
            </section>
            <section className="signIn-second-part">\
              <form onSubmit={this.handleSubmit}>
                <text className="signIn-login">SIGN IN</text>
                <hr />
                <label>Username:
                  <input type='text' className='signIn-form-1'
                    name='username' placeholder='Username*'
                    value={this.state.username}
                    onChange={this.handleChange}
                  /><br/>
                </label>

                <label>Password:
                  <input type='password' className='signIn-form-1'
                    name='password' placeholder='Password*'
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </label>
                
                <label className='signIn-checkbox'>Remember Me
                  <input type='checkbox' 
                  />
                </label>
                <a href='' className='signIn-link'>Forget Password?</a><br/>

                

                <input type='submit' className='signIn-btn-submit' value='SIGN-UP' />
              </form>
              <br />
              <p style={{textAlign:'center'}}>Don't have an account?
              <a href='' style={{color:'#24a0ed',marginLeft:'5px'}}>Sign Up</a>
              </p>
            </section>

          </div>
          <div className="signIn-right-side">
            <Info />
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default SignIn
