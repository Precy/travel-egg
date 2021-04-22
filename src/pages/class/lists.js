import React, { Component } from 'react'
import ListItem1 from './lists-item1'
import ListItem2 from './lists-item2'
 
export default class Lists extends Component {
    constructor (props) {
        super(props)
        this.state = {
			name: 'demos',
            item2: 'item2'
        }
    }
    
    handleItem = (msg) => {
        this.setState({
            item2: 'item1'
        })
    }

    render() {
        return (
            <div>
                <ListItem1 demo={this.state.name} handleItem={this.handleItem}></ListItem1>
                <ListItem2 name={this.state.item2}/>
            </div>
        )
    }
}