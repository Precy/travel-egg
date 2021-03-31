import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class index extends Component {

  static propTypes = {
    demo: PropTypes.string
  }

  static defaultProps = {
    demo: 'dddd'
  }


  constructor(props){
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div>
          lists-item1-{this.props.name}
      </div>
    )
  }
}