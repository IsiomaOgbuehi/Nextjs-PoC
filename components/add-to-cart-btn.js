import React from 'react';

export function AddToCartBtn({showCart}) {
    return (
             <button className={showCart} type="button" style={{fontSize: "0.8rem"}}>ADD TO CART</button>
    );
}