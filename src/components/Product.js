import styled from 'styled-components';
import React from "react";
import SelectProductButton from './SelectProductButton';

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



const Product = ({product, onProductSelected}) => {




    return (
  
    <li>
        <ItemBox>
        <Img src={require(`../images/${product.image}`)}/>
        <BigParagraph>{product.name}</BigParagraph>
        <DescriptionBox>
        <Paragraph>{product.description}</Paragraph>
        </DescriptionBox>
        <PriceText>£{product.price.toFixed(2)}</PriceText>
        <SelectProductButton onProductSelected={onProductSelected} product={product} />
        <br></br>
        <br></br>
        </ItemBox>
    </li>
    )

};

export default Product;