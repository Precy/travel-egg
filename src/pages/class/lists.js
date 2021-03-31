import React, { Component } from 'react'
import ListItem1 from './lists-item1'

export default class Lists extends Component {
    constructor (props) {
        super(props)
        this.state = {
					name: 'demos'
        }
    }
    
    render() {
        return (
            <div>
                <ListItem1 ></ListItem1>
            </div>
        )
    }
}