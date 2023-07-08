import styled from 'styled-components';
import React from 'react';
import Product from './Product';

const ItemContainer = styled.ul`
list-style: none;
display: flex;
flex-wrap: wrap;
justify-content: space-around;
padding:10px;
` 

const ProductList = ({products, onProductSelected}) => {

const productComponents = products.map((product) => {
    return (<Product 
        key={product.id} 
        product={product}
        onProductSelected={onProductSelected}
            />);
  
            }
);

    return (
<>
<h4>&nbsp;&nbsp;&nbsp;Recommended products:</h4>
        <ItemContainer>
         {productComponents}
        </ItemContainer>

        </>
    );
}

export default ProductList;