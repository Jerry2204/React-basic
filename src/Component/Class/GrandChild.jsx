import React, { Component } from 'react'

export default class GrandChild extends Component {
    render() {
        return (
            <div>
                <h5>Grand Child</h5>
                <p>Stok: {this.props.stok}</p>
            </div>
        )
    }
}
