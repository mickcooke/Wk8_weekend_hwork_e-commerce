import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useParams} from "react-router-dom";
import SelectProductButton from './SelectProductButton';

const ProductDetails = ({products, onProductSelected}) => {
  
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
 <SelectProductButton onProductSelected={onProductSelected} product={selectedProduct} />
 </>
   
 )

}

export default ProductDetails;