import React from 'react';
import BasketItem from './BasketItem';

const Basket = ({basket, total}) => {

 
    const basketItemNodes = basket.map((basketItem) => {
    return (<BasketItem 
        key={basketItem.id} 
        basketItem={basketItem}
        />);

                    }
        
    );



  return (

    <>
    <p>Shopping Cart</p>
    {basketItemNodes}
    <p>Total: £{total.toFixed(2)}</p>
    </>
  );


};

export default Basket;