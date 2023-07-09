import React from "react";
import './ProductDetailsButton.css';
import {Link} from "react-router-dom";


const ProductDetailsButton = ({product}) => {

    return (


        <>
        <Link to={`/product/${product.id}`}><button className="btn" key={product.id}>PRODUCT DETAIL</button></Link> 
        </>


            )


};

export default ProductDetailsButton;