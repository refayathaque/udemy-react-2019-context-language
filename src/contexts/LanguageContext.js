import React, { Component } from 'react';

const LanguageContext = React.createContext('english');
// ^ We passed in a Default Value of 'english'
// Important to have the variable name CAPITALIZED since it is a component we will render, JSX will not recognize as component if not capitalized

export class LanguageStore extends Component {
  state = { language: 'english' };

  onLanguageChange = (language) => {
    console.log(language)
    this.setState({ language: language })
  };

  render() {
    return (
      <LanguageContext.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
        {this.props.children}
      </LanguageContext.Provider>
    );
  };
};

export default LanguageContext
