import React from "react";

const Product = ({product}) => {

    return (
  
    <li>
        <article>
        <p>{product.name}: £{product.price}</p>
        <img src={require(`../images/${product.image}`)}/>
        </article>

    </li>
    )

}

export default Product;