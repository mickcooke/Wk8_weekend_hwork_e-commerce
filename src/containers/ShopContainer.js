import styled from 'styled-components';
import React, { useState, useEffect} from 'react';
import ProductList from '../components/ProductList';

const Title = styled.h1`
font-family: 'Open Sans';
text-align: center;
font-size:1.5em;
color: #fff;
background-color: black;
margin:0;
padding:1em;
`

const ShopContainer = () => {
    const [products, setProducts] = useState([]);
    const [basket, setBasket] = useState([]);

    const productInventory = [
        {
            name: "Spitfire Studio Brass",
            price: 160,
            description: "Captured in a space with almost no natural reverb, this versatile library brings out the fine detail of instruments and lets you choose your own reverbs. Ideal for classical, jazz, pop and more.",
            image: "image1.jpeg",
            id: 1

        }
    ]

const getProducts = () => {
  setProducts(productInventory);
}
   
useEffect(() => {
  getProducts();
}, [])

    return (

        <>
        <Title>SPITFIRE AUDIO</Title>
        <p>This is the Shop Container</p>
        <ProductList products={products}/>
        </>
    )


}

export default ShopContainer;