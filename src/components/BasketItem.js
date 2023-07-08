
import React from "react";

const BasketItem = ({basketItem}) => {

    if (!basketItem){
        return (
            <p>No items in cart</p>
        )
    }else{


  return (
    <>
    <p>
    <span>{basketItem.name}</span>
    <span>&nbsp;&nbsp;£{basketItem.price.toFixed(2)}</span>
    </p>
   
    </>

  )}
};

export default BasketItem;