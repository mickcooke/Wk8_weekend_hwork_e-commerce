import styled from 'styled-components';
import React from "react";

const SelectProductButton = ({product, onProductSelected}) => {

    const Button = styled.button`
font-size: 0.5em;
font-weight: bold;
  padding: 1em;
  margin: 0.5em;
  border: 2px solid black;
  box-shadow: 7px 6px 28px 1px rgba(0, 0, 0, 0.24);
`

    const handleClick = event => {
        onProductSelected(event.target.value);

    };
  
    return (

       
    <>
   
        <Button onClick={handleClick} key={product.id} value={product.id}>ADD TO CART</Button>
        
    </>


    )


};

export default SelectProductButton;