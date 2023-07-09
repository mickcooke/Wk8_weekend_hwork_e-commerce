import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useParams} from "react-router-dom";

const ProductDetails = ({products}) => {
  
 const {id} = useParams();
 const productId = parseInt(id)

 const selectedProduct = products.find((product) => {
    return product.id === productId;
 });

 console.log(selectedProduct);



 return (
    <>
    <p>This is a product page</p>
    </>
 )

}

export default ProductDetails;