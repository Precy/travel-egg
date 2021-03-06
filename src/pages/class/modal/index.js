import React, { Component } from 'react';
// import CreatePortal from '@/components/createPortal'
import Modal from '@/components/Modal'
import { Button } from 'antd-mobile'

export default class Index extends Component {

  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }

  handleClick = () => {
    this.setState({
      show: true
    })
  }

  handleClose = () => {
    this.setState({
      show: false
    })
  }

  render() {
    return (
      <div>
        {/* <CreatePortal>modal</CreatePortal> */}
        <Button type='primary' onClick={this.handleClick}>Modal</Button>
        <Modal 
          show={this.state.show}
          onClose={this.handleClose}
        >modal</Modal>
      </div>
    )
  }
}