import React, { Component } from 'react';
import LanguageContext from 'contexts/LanguageContext';

class Button extends Component {
  static contextType = LanguageContext;
  // ^ How we hook up a Context object to a class component
  // `static` adds a property to the class itself, does the same thing as `Button.contextType`

  render() {
    console.log('this.context :', this.context);
    const text = this.context.language === 'english' ? 'Submit' : 'Voorleggen';
    // ^ Ternary Expression
    return (
      <button className="ui button primary">
        {text}
      </button>
    );
  };
};

export default Button;
