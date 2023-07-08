
import React from "react";
import './BasketItem.css';

const BasketItem = ({basketItem}) => {

    if (!basketItem){
        return (
            <p>No items in cart</p>
        )
    }else{


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

  )}
};

export default BasketItem;