import React, { useState, useEffect} from 'react';
import ProductList from '../components/ProductList';


const ShopContainer = () => {
    const [products, setProducts] = useState([]);
    const [basket, setBasket] = useState([]);

    const productInventory = [
        {
            name: "Brass",
            price: 160,
            description: "blah",
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
        <p>This is the Shop Container</p>
        <ProductList products={products}/>
        </>
    )


}

export default ShopContainer;