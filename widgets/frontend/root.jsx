import React from 'react';
import Clock from './clock';
import Weather from './weather';
import AutoComplete from './autocomplete';


class Root extends React.Component {
  constructor() {
    super();
  }

  render() {
    const names = [	'phrase', 'express', 'put', 'couch', 'frame', "formulate", "style"];
    return (
      <div>
        <Clock />
        <Weather />
        <AutoComplete names={ names } />
      </div>
    );
  }
}

export default Root;
