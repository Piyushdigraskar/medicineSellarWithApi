import React from "react";
import classes from './Header.module.css';
import HeaderCartButton from "./HeaderCartButton";
 

const Header = (props)=>{
    return <React.Fragment>
        <header className={classes.header}>
            <h1>Medical Store</h1>
        <HeaderCartButton onClick={props.onShowCart}/>
        </header>
    </React.Fragment>
}

export default Header;