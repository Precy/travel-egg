import React, { Component, PureComponent } from 'react';
import { List } from 'antd-mobile'
import { Link } from 'react-router-dom';

export default class ComponentOld extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
			text: 'demo'
    };
		console.log('constructor')
  }
	componentWillMount() {
		console.log('componentWillMount')
	}

	componentDidMount() {
		console.log('componentDidMount')
	}
	componentWillUpdate() {
		console.log('componentWillUpdate')
	}
	componentDidUpdate() {
		console.log('componentDidUpdate')
	}
	
	// shouldComponentUpdate(props, state) {
	// 	console.log('componentShouldUpdate')
	// 	if (state.text === 'demo2' && this.state.text !== state.text) {
	// 		return true
	// 	}
	// 	return false
	// }

	handerClick = () => {
		this.setState({
			text: 'demo2'
		})
	} 
  render() {
		console.log('render')
    return (

      <div>
        <h1 onClick={this.handerClick}>component-old-{this.state.text}</h1>  
        <List>
          <List.Item>
						<Link to='/class/component-old'>component-old</Link>
        	</List.Item>  
					<List.Item>
						<Link to='/class/component-new'>component-new</Link>
					</List.Item>
        </List>
      </div>
    )
  }
}