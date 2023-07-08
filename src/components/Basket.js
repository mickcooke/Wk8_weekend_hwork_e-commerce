import React from 'react';
import BasketItem from './BasketItem';

const Basket = ({basket}) => {

 
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
    </>
  );
};

export default Basket;