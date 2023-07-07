import styled from 'styled-components';
import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; //NEW
import ProductList from '../components/ProductList';
import NavBar from '../components/NavBar';
import Basket from '../components/Basket';

const Title = styled.h1`
font-family: 'Open Sans';
text-align: center;
font-size:1.5em;
color: #fff;
background-color: black;
margin:0;
padding-top: 10px;
// padding:0.5em;
`
const Paragraph = styled.p`
margin:0;
padding: 1em;
font-size:1em;
`

const ShopContainer = () => {
    const [products, setProducts] = useState([]);
    const [selectedProductId, setSelectedProductId] = useState("");
    const [basket, setBasket] = useState([]);

    const productInventory = [
        {
            name: "Spitfire Studio Brass",
            price: 160.00,
            description: "Captured in a space with almost no natural reverb, this versatile library brings out the fine detail of instruments and lets you choose your own reverbs. Ideal for classical, jazz, pop and more.",
            image: "image1.jpeg",
            id: 1

        },

        {
            name: "Spitfire Symphonic Strings",
            price: 699.00,
            description: "Part of our flagship orchestral range. 60 players performing 175 articulations, including legatos, in the reverberant surroundings of The Hall at AIR Studios, the home of blockbuster film scores.",
            image: "image2.jpeg",
            id: 2

        },

        {
            name: "Spitfire Studio Woodwinds",
            price: 169.00,
            description: "Captured in a space with almost no natural reverb, this versatile library brings out the fine detail of instruments and lets you choose your own reverbs. Ideal for classical, jazz, pop and more.",
            image: "image3.jpeg",
            id: 3

        },

        {
            name: "Eric Whitacre Choir",
            price: 549.00,
            description: "Crafted and conducted by Grammy winner Eric Whitacre and showcasing his elite family of singers, this encyclopaedia of the voice will enrich your compositions.",
            image: "image4.jpeg",
            id: 4

        },



    ]

const getProducts = () => {
  setProducts(productInventory);
}
   
useEffect(() => {
  getProducts();
}, [])

const findProductById = (id) => {
  return products.find((product) => {
    return product.id === id;
  });
}

// const handleProductSelected = id => {
//     const selectedProduct = findProductById(id);
//     if (basket.includes(selectedProduct)){
//         return null
//     }else{
//         const updatedBasket = [...basket, selectedProduct];
//         setBasket(updatedBasket);
//         console.log(basket.length);
//     }
// }

const handleProductSelected = id => {
    console.log(id);

}

    return (

        <>
        <Title>SPITFIRE AUDIO</Title>

    <Router>
        <NavBar/>
    <Routes>
      <Route path="/" element={<ProductList products={products} onProductSelected={handleProductSelected}/>}/>
      <Route path="/basket" element={<Basket/>} />
    </Routes>
  </Router>

        
        </>
    )


}

export default ShopContainer;