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
const BigParagraph = styled(Paragraph)`
font-weight: bold;
font-size: 0.6em;
`

const PriceText = styled(Paragraph)`
font-weight: bold;
font-size: 1em;
`

const ItemBox = styled.div`
width: 160px;
text-align: center;
// outline: solid 1px black;
`

const DescriptionBox = styled(ItemBox)`
// outline: solid 1px black;
text-align: left;
`

const Button = styled.button`
font-size: 0.5em;
font-weight: bold;
  padding: 1em;
  margin: 0.5em;
  border: 2px solid black;
`

const Product = ({product}) => {

    return (
  
    <li>
        <ItemBox>
        <Img src={require(`../images/${product.image}`)}/>
        <BigParagraph>{product.name}</BigParagraph>
        <DescriptionBox>
        <Paragraph>{product.description}</Paragraph>
        </DescriptionBox>
        <PriceText>£{product.price}</PriceText>
        <Button>ADD TO CART</Button>
        <br></br>
        <br></br>
        </ItemBox>
    </li>
    )

};

export default Product;