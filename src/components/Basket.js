import React from 'react';
import BasketItem from './BasketItem';
import './BasketItem.css';

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
    <div className='grid-columns'>
        <div>
            <h4>Shopping Cart</h4>
        </div>
    </div>
    {basketItemNodes}
    <div className='grid-columns'>
        <div>&nbsp;</div>
        <div>&nbsp;</div>
        <div>
            <b>Total:</b> 
        </div>
        <div>
            <b>£{total.toFixed(2)}</b> 
        </div>
    </div>
    </>
  );


};

export default Basket;