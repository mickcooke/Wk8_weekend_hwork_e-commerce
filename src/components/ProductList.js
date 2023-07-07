import styled from 'styled-components';
import React from 'react';
import Product from './Product';

const Ul = styled.ul`
list-style: none;
` 

const ProductList = ({products}) => {

const productComponents = products.map((product) => {
    return (<Product 
        key={product.id} 
        product={product}
            />);
  
            }
);

    return (

        <Ul>
         {productComponents}
        </Ul>
    );
}

export default ProductList;