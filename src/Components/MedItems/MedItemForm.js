import React, { useRef, useContext} from "react";
import CartContext from "../../Store/CartContext";
import Button from "../UI/Button";
import classes from './MedItemForm.module.css';
import { v4 as uuidv4 } from 'uuid';

const MedItemForm = () => {

  const cartCtx = useContext(CartContext);
  const nameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();
  const quantityRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredName = nameRef.current.value;
    const enteredDesc = descriptionRef.current.value;
    const enteredPrice = priceRef.current.value;
    const enteredQuantity = quantityRef.current.value;


    if (enteredName.trim().length === 0 || enteredDesc.trim().length === 0 || enteredPrice.trim().length === 0 || enteredQuantity.trim().length === 0) {
      return;
    }
    if (enteredPrice < 1 || enteredQuantity < 1) {
      return;
    }
    const newMedicine = {
      id: uuidv4(),
      name: enteredName,
      description: enteredDesc,
      price: enteredPrice,
      quantity: enteredQuantity,
    };

    cartCtx.addMedicine(newMedicine);
    console.log(cartCtx.medicines);
    nameRef.current.value = '';
    descriptionRef.current.value = '';
    priceRef.current.value = '';
    quantityRef.current.value = '';
    
  }

  return (
    <form className={classes.formContainer} onSubmit={submitHandler}>
    <div className={classes.formGroup}>
      <label className={classes.label} htmlFor="name">
        Medicine Name
      </label>
      <input
        className={classes.inputField}
        id="name"
        type="text"
        ref={nameRef}
      />
    </div>
    <div className={classes.formGroup}>
      <label className={classes.label} htmlFor="description">
        Description
      </label>
      <input
        className={classes.inputField}
        id="description"
        type="text"
        ref={descriptionRef}
      />
    </div>
    <div className={classes.formGroup}>
      <label className={classes.label} htmlFor="price">
        Price
      </label>
      <input
        className={classes.inputField}
        id="price"
        type="number"
        ref={priceRef}
      />
    </div>
    <div className={classes.formGroup}>
      <label className={classes.label} htmlFor="quantity">
        Quantity
      </label>
      <input
        className={classes.inputField}
        id="quantity"
        type="number"
        ref={quantityRef}

      />
    </div>

    <Button className={classes.submitButton} type="submit">
      Add Medicine
    </Button>
  </form>
  );
}

export default MedItemForm;

