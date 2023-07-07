import React from 'react';
import Product from './Product';


const ProductList = ({products}) => {

const productComponents = products.map((product) => {
    return (<Product 
        key={product.id} 
        product={product}
            />);
  
            }
);

    return (

        <ul>
         {productComponents}
        </ul>
    );
}

export default ProductList;