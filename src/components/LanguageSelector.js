import React, { Component } from 'react';

class LanguageSelector extends Component {
  render() {
    return (
      <div>
        Select a language:
        <i className="flag us" onClick={() => this.props.onLanguageChange({ language: 'english', color: 'red' })} />
        <i className="flag nl" onClick={() => this.props.onLanguageChange({ language: 'dutch', color: 'primary' })} />
      </div>
    );
  };
};

export default LanguageSelector;
