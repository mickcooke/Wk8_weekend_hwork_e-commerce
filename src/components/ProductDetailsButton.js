import React from "react";
import './ProductDetailsButton.css';


const ProductDetailsButton = ({product}) => {


    const handleClick = event => {
        onProductSelected(event.target.value);

                                };

    return (


    <>
        <button className='btn' onClick={handleClick} key={product.id} value={product.id}>GO TO PRODUCT</button>  
    </>


            )


};

export default ProductDetailsButton;