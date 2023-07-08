
import React from "react";

const BasketItem = ({basketItem}) => {

    if (!basketItem){
        return (
            <p>No items in cart</p>
        )
    }else{


  return (
    <>
    {/* <p>{basketItem.name}</p>
    <img src={require(`../images/${basketItem.image}`)}/>
    <p>{basketItem.price.toFixed(2)}</p> */}
    <p>{basketItem}</p>
    </>

  )}
};

export default BasketItem;