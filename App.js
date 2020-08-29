import React from 'react';
import LoginBox from '.Components/login/credentials'
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    };
  }

  render() {

    return (
      <div className="root-container">
      <LoginBox />
      </div>
    );
  }
}


export default App;
