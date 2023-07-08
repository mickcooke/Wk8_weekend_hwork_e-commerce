
import React from "react";

const BasketItem = ({basketItem}) => {

    if (!basketItem){
        return (
            <p>No items in cart</p>
        )
    }else{


  return (
    <>
    <p>{basketItem.name}</p>
    <p>{basketItem.price.toFixed(2)}</p>
   
    </>

  )}
};

export default BasketItem;