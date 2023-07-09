import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {useParams} from "react-router-dom";
import SelectProductButton from './SelectProductButton';
import './ProductDetails.css';


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
    <div className='details-container'>
 <p><b>{selectedProduct.name}</b></p>
 <p>{selectedProduct.description}</p>
 <h3>£{selectedProduct.price.toFixed(2)}</h3>
 <SelectProductButton onProductSelected={onProductSelected} product={selectedProduct} />
 </div>
 </>
   
 )

}

export default ProductDetails;