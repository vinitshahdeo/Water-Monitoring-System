import React, { Component } from 'react';
import '../stylesheets/SignUp.css';
import Info from './Info.jsx';
import Footer from './Footer.jsx';
import logo from '../assets/logo.jpg';

class SignUp extends Component {
  constructor() {
    super();

    this.state = {
      username: '',
      email: '',
      password: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {

    let name = event.target.name;
    let value = event.target.value

    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event) => {
    // alert('A name was submitted: ' + this.state.email);
    // console.log(this.state)                                 Add functions as per requirement
    event.preventDefault();
  }

  render() {
    return (
      <>
        <div className="signUp-main">
          <div className="signUp-left-side">
            <section className="signUp-first-part">
              <div className="signUp-upperHalf">
                <img src={logo} alt="Logo" className='signUp-logo' />
                <h1> Water Monitoring System</h1>
              </div>
              <div className="signUp-bottomHalf">
                <p className='signUp-msg'>Don't have an account? No Worry!!<br />Create An Account Now</p><br />
              </div>
            </section>
            <section className="signUp-second-part">\
              <form onSubmit={this.handleSubmit}>
                <hr />
                <label>Username:
                  <input type='text' className='signUp-form-1'
                    name='username' placeholder='Username*'
                    value={this.state.username}
                    onChange={this.handleChange}
                  /><br />
                </label>

                <label>Email:
                  <input type='email' className='signUp-form-1'
                    name='email' placeholder='Email*'
                    value={this.state.email}
                    onChange={this.handleChange}
                  /><br />
                </label>

                <label>Password:
                  <input type='password' className='signUp-form-1'
                    name='password' placeholder='Password*'
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
                </label>

                <input type='submit' className='signUp-btn-submit' value='SIGN-UP' />
              </form>
              <br />
              <br />
              <p style={{ textAlign: 'center' }}>Already have an account?
              <a href='' style={{ color: '#24a0ed', marginLeft: '5px' }}>Sign In</a>
              </p>
            </section>

          </div>
          <div className="signUp-right-side">
            <Info />
          </div>
        </div>
        <Footer />
      </>
    )
  }
}

export default SignUp
