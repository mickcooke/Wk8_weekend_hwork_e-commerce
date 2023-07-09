
import React from "react";
import './BasketItem.css';

const BasketItem = ({basketItem}) => {

   


  return (
   
    <>
    <div className="grid-columns">
        <div>
            {basketItem.name}
        </div>
        <div>  
            £{basketItem.price.toFixed(2)}    
        </div>
    </div>
    </>



  )
};

export default BasketItem;