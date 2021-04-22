import React, { Component } from 'react';

export default class ErrorBoundary extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flag: false
    };
  }

  static getDerivedStateFromError(error) {
    
   return {
    flag: true
   }
  }

  componentDidCatch () {

  }

  render() {
    return (
      <div>
        {this.state.flag ? <h1>发生错误，请稍后再试！</h1> : this.props.children}
      </div>
    )
  }
}