import React from "react";
import classes from './CartItem.module.css'

const CartItem = (props)=>{
    const price = `$${props.price}`;
    return (
        <li className={classes['cart-item']}>
            <div>
                <h2 className={classes.h2}>{props.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>Price: {price} </span>
                    <span className={classes.quantity}>Quantity: {props.quantity}</span>
                </div>
            </div>
        </li>
    )
}

export default CartItem;