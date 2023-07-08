import React from 'react';
import BasketItem from './BasketItem';

const Basket = ({basket, index}) => {

 
    const basketItemNodes = basket.map(basketItem => {

    

        return (
            <BasketItem key={index} basketItem={basketItem}></BasketItem>

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