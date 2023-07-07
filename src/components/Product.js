import React from "react";

const Product = ({product}) => {

    return (
  
    <li>
        <article>
        <p>{product.name}: £{product.price}</p>
        </article>

    </li>
    )

}

export default Product;