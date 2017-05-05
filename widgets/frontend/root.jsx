import React from 'react';
import Clock from './clock';
import Weather from './weather';
import AutoComplete from './autocomplete';
import Tabs from './tabs';


class Root extends React.Component {
  constructor() {
    super();
  }

  render() {
    const names = [	'phrase', 'express', 'put', 'couch', 'frame', "formulate", "style"];
    const tabs = [
      {title: "home", content: "Go Home!"},
      {title: "second base", content: "Safe!"},
      {title: "first base", content: "YEEEERRRRR OUTTTTAAA HEEERRREEE"}
    ];
    return (
      <div>
        <Clock />
        <Weather />
        <AutoComplete names={ names } />
        <Tabs tabs={ tabs }/>
      </div>
    );
  }
}

export default Root;
