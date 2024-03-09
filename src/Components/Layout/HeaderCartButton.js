import React from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css'


const HeaderCartButton = (props)=>{
    return <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon></CartIcon>
        </span>
        <span>Medicine Cart</span>
    </button>
}

export default HeaderCartButton;