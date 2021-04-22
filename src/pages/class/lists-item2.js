import React, { Component } from 'react';

export default class Item2 extends Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
          <h1>iteme-{this.props.name}</h1>
      </div>
    )
  }
}