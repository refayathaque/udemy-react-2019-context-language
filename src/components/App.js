import React, { Component } from 'react';
import UserCreate from 'components/UserCreate';
import { LanguageStore } from 'contexts/LanguageContext';
import { ColorStore } from 'contexts/ColorContext';
import LanguageSelector from 'components/LanguageSelector';

class App extends Component {
  render() {
    console.log('this.state :', this.state)
    return (
      <div className="ui container">
        <ColorStore>
          <LanguageStore>
            <LanguageSelector />
            <UserCreate />
          </LanguageStore>
        </ColorStore>
      </div>
    )
  }
}

export default App

// Notes:

// Purpose of the Context system in React is to share information

// We have two ways of getting information into a Context object (Default Values and Context Provider)

// We have two ways of getting information out of a Context object (contextType [only for accessing a SINGLE Context object in a component] and Context Consumer [for accessing MULTIPLE Context objects in a component])

// Context Provider component here is not the same as the `Provider` component we use when wiring up Redux
// `value` is a specific property to the Context Provider, and this is used to update the Context object (you cannot use your own property to achieve this, you must use `value`)

// Context Provider creates a SEPARATE 'pipe' of information every single time you use it
// ^ e.g., if the Context Provider above is duplicated but the value is hard-coded and set to `{ language: 'dutch' }` then you will see on your screen the <UserCreate /> rendered, with <Field /> and <Button />, displaying 'Naam' and 'Voorleggen' (there is a SEPARATE 'pipe' of information flowing down to those components), changing `this.state` will have no impact in components wrapped around this second instance of the Context Provider
// And if you call <UserCreate /> without the Context Provider wrapper then you will see 'Name' and 'Submit', because the Default Value in the LanguageContext.js object is `{ language: 'english' }`
