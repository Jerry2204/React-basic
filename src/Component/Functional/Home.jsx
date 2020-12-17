import React from 'react'
import Product from '../Class/Product'
import Blog from './Blog'

const Home = () => {
    return (
        <div>
            {/* <Blog 
            tanggal="15 Desember 2020"
            judul="Teknologi Block chain"
            summary="lorem ipsum dolor sit amet, generate lorem ipsum example"
            />
            <Blog 
            tanggal="14 Oktober 2020"
            judul="Big Data"
            summary="lorem ipsum dolor sit amet, generate lorem ipsum example"
            />
            <Blog 
            tanggal="22 April 2020"
            judul="React Js"
            summary="lorem ipsum dolor sit amet, generate lorem ipsum example"
            /> */}
            <Product 
            nama= "Macbook Pro 2020"
            stok= "10"
            harga= "26000000"
            />
            <Product 
            nama= "Macbook Pro 2021"
            stok= "7"
            harga= "70000000"
            />
            <Product 
            nama= "Macbook Pro 2019"
            stok= "3"
            harga= "35000000"
            />
            <Product 
            nama= "Macbook Pro 2018"
            stok= "1"
            harga= "27000000"
            />
            <Product 
            nama= "Macbook Pro 2017"
            stok= "9"
            harga= "90000000"
            />
            <Product 
            nama= "Macbook Pro 2010"
            stok= "5"
            harga= "56000000"
            />
        </div>
    );
}

export default Home;