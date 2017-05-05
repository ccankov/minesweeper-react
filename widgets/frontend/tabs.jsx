import React from 'react';

class Tabs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0
    };
  }

  changeActive(key) {
    this.setState({ activeTab: key });
  }

  render() {
    let tabs = this.props.tabs.map((tab, idx) => {
      return idx === this.state.activeTab ?
        <li className="selected" onClick={this.changeActive.bind(this, idx)} key={idx}><p>{tab.title}</p></li> :
        <li onClick={this.changeActive.bind(this, idx)} key={idx}><p>{tab.title}</p></li>;
    });
    return (
      <section className="tabs">
        <ul>
          {tabs}
        </ul>
        <article>
          {this.props.tabs[this.state.activeTab].content}
        </article>
      </section>
    );
  }
}

export default Tabs;
