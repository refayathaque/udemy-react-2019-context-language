import React, { Component } from 'react';
import UserCreate from 'components/UserCreate';

class App extends Component {
  state = { language: 'english' };

  render() {
    console.log('this.state :', this.state)
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.setState({ language: 'english' })} />
          <i className="flag nl" onClick={() => this.setState({ language: 'dutch' })} />
        </div>
        <UserCreate />
      </div>
    )
  }
}

export default App
