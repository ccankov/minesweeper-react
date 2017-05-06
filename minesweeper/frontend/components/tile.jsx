import React from 'react';

class Tile extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    if (!this.props.tile.explored) {
      this.props.updateGame(this.props.tile, true);
    }
  }

  render() {
    let symbol = this.props.tile.explored ? this.props.tile.adjacentBombCount() : " ";
    return (
      <button className="tile" onClick={this.handleClick}>{symbol}</button>
    );
  }
}

export default Tile;
