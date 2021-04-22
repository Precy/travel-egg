import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class index extends Component {

  static defaultProps = {
    demo: 'dddd'
  }

  static propTypes = {
    demo: PropTypes.string
  }

  constructor(props){
    super(props);
    this.state = {

    };
  }

  handleClick = () => {
    this.props.handleItem('item1')
  }

  render() {
    return (
      <div>
        <h1 onClick={this.handleClick}>
          lists-item1-{this.props.demo}
        </h1>
      </div>
    )
  }
}