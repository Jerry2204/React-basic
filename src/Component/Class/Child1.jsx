import React, { Component } from 'react'

export default class Child1 extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }

    minBeli = 1;
    render() {
        return (
            <div>
                <h3>Child Component</h3>
                <p>Stock: {this.props.stok}</p>
                <button onClick={() => {this.props.beliProduk(this.minBeli)}}>Beli</button>
            </div>
        )
    }
}
