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

if(!selectedProduct){
    return null
}

 return (
    <>
    
 <p>{selectedProduct.name}</p>
 <p>{selectedProduct.description}</p>
 </>
    // <>
   
    // <p>£{selectedProduct.price.toFixed(2)}</p>
    // <img src={require(`../images/${selectedProduct.image}`)}/>
    // </>
 )

}

export default ProductDetails;