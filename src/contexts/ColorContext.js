import React, { Component } from 'react';

const ColorContext = React.createContext('primary');
// ^ We passed in a Default Value of 'primary'
// Important to have the variable name CAPITALIZED since it is a component we will render, JSX will not recognize as component if not capitalized

export class ColorStore extends Component {
  state = { color: 'primary' };

  onLanguageChangeColor = ({ color }) => {
    this.setState(color)
  };

  render() {
    return (
      <ColorContext.Provider value={{ ...this.state, onLanguageChangeColor: this.onLanguageChangeColor }}>
        {this.props.children}
      </ColorContext.Provider>
    );
  };
};

export default ColorContext
