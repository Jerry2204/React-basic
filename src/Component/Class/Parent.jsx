import Button from 'react-bootstrap/Button';
import React, { Component } from 'react'
import Child1 from './Child1';
import Child2 from './Child2';


export default class Parent extends Component {
    constructor(props){
        super(props);
        this.state = {
            stok: 15
        }
    }

    beliProduk = (jumlah) => {
        this.setState({
            stok: this.state.stok - jumlah
        });
    }

    render() {
        return (
            <div>
                <Child1 
                stok={this.state.stok}
                beliProduk={this.beliProduk.bind(this)}
                />
                <Child2 
                stok= {this.state.stok}
                />
                <Button variant="danger">Danger</Button>
            </div>
        )
    }
}
