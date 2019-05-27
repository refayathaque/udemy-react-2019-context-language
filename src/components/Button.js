import React, { Component } from 'react';
import LanguageContext from 'contexts/LanguageContext';
import ColorContext from 'contexts/ColorContext';

class Button extends Component {
  renderSubmit = ({ language }) => {
    return language === 'english' ? 'Submit' : 'Voorleggen'
  };

  renderButton = (value) => {
    console.log(value.color)
    return (
      <button className={`ui button ${value.color}`}>
        {/* ^ ES6 Syntax for Template Literals */}
        <LanguageContext.Consumer>
          {(value) => this.renderSubmit(value)}
        </LanguageContext.Consumer>
      </button>
    );
  };

  render() {
    return (
      <ColorContext.Consumer>
        {(value) => this.renderButton(value)}
      </ColorContext.Consumer>
    );
  };
};

export default Button;

// Notes:

// Context Consumer component gets only one child, and it is always going to be a function (in essence, we are providing a function as a child to a React component)
// ^ Child function will get automatically called by the Consumer, and it will get called with whatever is the current `value` (specific to Context Consumer, you cannot use any other argument) of the Context object

// Why use Context Consumer instead of `contextType` like we have in <Field />?
// You should use Context Consumer anytime you need to get information out of MULTIPLE DIFFERENT CONTEXT OBJECTS inside of a single component, `contextType` should be used only when you want to access only a SINGLE CONTEXT OBJECT inside of a single component
