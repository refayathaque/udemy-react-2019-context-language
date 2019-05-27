import React, { Component } from 'react';

class App extends Component {
  state = { language: 'english' };

  render() {
    console.log(this.state)
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i className="flag us" onClick={() => this.setState({ language: 'english' })} />
          <i className="flag nl" onClick={() => this.setState({ language: 'dutch' })} />
        </div>
      </div>
    )
  }
}

export default App
