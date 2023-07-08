import React from 'react';
import BasketItem from './BasketItem';

const Basket = ({basket}) => {

    const basketItemNodes = basket.map(basketItem => {

        if (!basket){
            return (
                <p>No items in cart</p>
            )
        }

        return (
            <BasketItem basketItem={basketItem}></BasketItem>

        );

        });

  return (

    <>
    <p>Shopping Cart</p>
    {basketItemNodes}
    </>
  )
}

export default Basket;