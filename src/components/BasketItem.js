
import React from "react";
import './BasketItem.css';

const BasketItem = ({basketItem, delBasketItem, index}) => {

   const handleClick = event => {
    delBasketItem(event.target.value);
   }


  return (
   
    <>
    <div className="grid-columns">
        <div>
            {basketItem.name}{index}
        </div>
        <div>  
            £{basketItem.price.toFixed(2)} 
            &nbsp;<button onClick={handleClick} key={basketItem.id} value={basketItem.id}>del</button>  
        </div>
    </div>
    </>



  )
};

export default BasketItem;