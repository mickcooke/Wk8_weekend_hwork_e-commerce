import styled from 'styled-components';
import React from "react";

const Img = styled.img`
width:100px;
`
const Paragraph = styled.p`
margin:0;
padding: 1em;
font-size:0.5em;
`
const Div = styled.div`
width: 120px;
text-align: center;
outline: solid 1px black;
`

const Product = ({product}) => {

    return (
  
    <li>
        <Div>
        <Img src={require(`../images/${product.image}`)}/>
        <Paragraph>{product.name}</Paragraph>
        <Paragraph>£{product.price}</Paragraph>
        </Div>
    </li>
    )

};

export default Product;