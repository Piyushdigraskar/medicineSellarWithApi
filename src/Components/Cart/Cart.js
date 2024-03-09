import React,{useContext} from "react";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from '../../Store/CartContext';
import classes from './Cart.module.css';
//import { v4 as uuidv4 } from 'uuid';


const Cart = (props)=>{
    const cartCtx = useContext(CartContext);
    const hasItems = cartCtx.items.length > 0;

    const cartItems = (
        <ul className={classes['cart-items']}>
            {cartCtx.items.map(item =>(
                <CartItem
                    key={props.id}
                    id= {item.id}
                    name={item.name}
                    price={item.price}
                    quantity={item.quantity} 
                />
            ))}
        </ul>
    )

    return <Modal onClose={props.onClose}>
        {cartItems}
        <div className={classes.action}>
            <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={classes.button}>Order</button>}
        </div>
    </Modal>
}

export default Cart;