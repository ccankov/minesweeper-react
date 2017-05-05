import React from 'react';

class AutoComplete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      names: this.props.names
    };
    this.match = this.match.bind(this);
  }

  match(e) {
    this.setState({
      input: e.currentTarget.value
    }, () => {
      this.setState({
        names: this.props.names.filter((name) => {
          return name.match(new RegExp(this.state.input));
        })
      });
    });
  }

  render() {
    let names = this.state.names.map((name, idx) => <li key={idx}>{name}</li>);
    return (
      <section className='autocomplete'>
        <input onChange={this.match} type="text" value={this.state.input}></input>
        <ul>
          {names}
        </ul>
      </section>
    );
  }
}

export default AutoComplete;
