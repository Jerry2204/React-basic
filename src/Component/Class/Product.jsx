import React, { Component } from 'react'
import './css/Product.css'

class Product extends Component{
    constructor(props){
        super(props);
        this.state = {
            stok: this.props.stok,
            sub: "Beli",
            status: "Tersedia",
            disabled: false,
            jumlah_bayar: 0
        }
    }

    buttonBeli(){
        this.setState({
            stok: this.state.stok - 1,
            jumlah_bayar: this.state.jumlah_bayar + Number(this.props.harga)
        });

        if(this.state.stok === 1){
            this.setState({
                disabled: true,
                status: "Stok Habis"
            })
        }

        if(this.state.stok > 0){
            this.setState({
                disabled: true,
                status: "Stok Habis"
            });
        }

    }

    render(){
        return(
            <div className="blog-stock">
                <h2>{this.props.nama}</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0yGgp6sWr1-UFEq-1dd_6Cl3fBYMhprVZmikg26F-rQj-EfHyFykviLmrv6XwDZMRuFEvyFXG&usqp=CAc" alt=""/>
                <p>Harga: <b>{this.props.harga}</b></p>
                <p>Stok: {this.state.stok}</p>
                <button className="btn-click" onClick={() => {this.buttonBeli()}} disabled={this.state.disabled}>Beli</button>
                <p>{this.state.status}</p>
                <p>Jumlah Bayar: {this.state.jumlah_bayar}</p>
            </div>
        );
    }
}

export default Product;