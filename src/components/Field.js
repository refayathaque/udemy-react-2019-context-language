import React, { Component } from 'react';
import LanguageContext from 'contexts/LanguageContext';

class Field extends Component {
  static contextType = LanguageContext;
  // ^ How we hook up a Context object to a class component (alternatively, you can use a Context Consumer component, to see how look at <Button />)
  // `static` adds a property to the class itself, does the same thing as `Button.contextType`

  render() {
    console.log('this.context :', this.context);
    const text = this.context === 'english' ? 'Name' : 'Naam';
    // ^ Ternary Expression
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  };
};

export default Field;
