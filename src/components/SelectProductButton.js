import React from "react";
import './SelectProductButton.css';


const SelectProductButton = ({product, onProductSelected}) => {


    const handleClick = event => {
        onProductSelected(event.target.value);

                                };

    return (


    <>
        <button className='btn' onClick={handleClick} key={product.id} value={product.id}>ADD TO CART</button>  
    </>


            )


};

export default SelectProductButton;