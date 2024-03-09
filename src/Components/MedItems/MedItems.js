import React, { useContext, useState } from "react";
import Card from "../UI/Card";
import CartContext from "../../Store/CartContext";
import Button from "../UI/Button";
import classes from "./MedItems.module.css";
import { v4 as uuidv4 } from 'uuid';// Import the CSS module

const MedItems = (props) => {
    const cartCtx = useContext(CartContext);
    const [isButtonDisabled, setIsButtonDisabled] = useState(false); // Initialize button disabled state to false

    const addItemToCartHandler = (medicine) => {
        // Convert quantity to a number
        const quantity = parseInt(medicine.quantity);

        // Check if quantity is a valid number
        if (!isNaN(quantity)) {
            // Create a new medicine object with the correct quantity
            const medicineWithQuantity = { ...medicine, quantity };

            // Add the medicine to the cart if quantity is greater than zero
            if (quantity > 0) {
                cartCtx.addItems(medicineWithQuantity);
            }

            // Update button disabled state based on quantity
            setIsButtonDisabled(quantity <= 0); // Disable the button if quantity is less than or equal to zero
        } else {
            console.error('Invalid quantity:', medicine.quantity);
        }
    };




    return (
        <Card className={classes.card}>
            <div>
                <ul>
                    {cartCtx.medicines.map((medicine) => (
                        <li key={uuidv4()}>
                            <span>{medicine.name}</span> - <span>{medicine.description}</span> - <span>{medicine.price}$</span> - <span>{medicine.quantity} {medicine.quantity === 0 && <span className={classes.outOfStock}>Out of Stock</span>}</span>
                            <Button type='submit' onClick={() => addItemToCartHandler(medicine)} disabled={isButtonDisabled}>Add to cart</Button>
                        </li>
                    ))}
                </ul>
            </div>
        </Card>
    );
}

export default MedItems;
