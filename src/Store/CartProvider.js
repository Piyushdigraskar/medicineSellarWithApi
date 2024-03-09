import React, { useState,useEffect } from "react";
import axios from "axios";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  const [medicines, setMedicines] = useState([]);
  const [items, setItems] = useState([]);
  useEffect(() => {
    fetchItemFromServer();
    fetchmedFromServer();
  }, []);

  const fetchItemFromServer = async () => {
    try {
      const response = await axios.get(`https://crudcrud.com/api/7547159d09654bc6819c23089c275b98/cart`);

      if (response.status !== 200) {
        throw new Error('Failed to fetch cart items');
      }
      setItems(response.data || []);
    } catch (error) {
      console.log('Error fetching cart items',error);
    }
  }
  const fetchmedFromServer = async () => {
    try {
      const response = await axios.get(`https://crudcrud.com/api/7547159d09654bc6819c23089c275b98/med`);

      if (response.status !== 200) {
        throw new Error('Failed to fetch stock meds');
      }
      setMedicines(response.data || []);
    } catch (error) {
      console.log('Error fetching stock Meds',error);
    }
  }

  const addItemHandler = (newMed) => {
    setMedicines((prevMedicine) => {
      const updatedMedicines = [...prevMedicine, newMed];
      console.log("Updated Medicines:", updatedMedicines);
      updateMedonServer(newMed);
      return updatedMedicines;
    });
  };

  const addItemToCartHandler = (item) => {
    setItems((prevItems) => {
      const existingItemIndex = prevItems.findIndex((prevItem) => prevItem.id === item.id);
      const updatedItems = [...prevItems];

      if (existingItemIndex !== -1) {
        updatedItems[existingItemIndex].quantity += 1;
      } else {
        updatedItems.push({ ...item, quantity: 1 });
        updateitemonServer(item); 
      }
      return updatedItems;
    });

    setMedicines((prevMeds) => {
      const updatedMeds = [...prevMeds];
      // Update quantity in the medicine list
      const existingMedIndex = updatedMeds.findIndex((med) => med.id === item.id);
      if (existingMedIndex !== -1 && updatedMeds[existingMedIndex].quantity > 0) {
        updatedMeds[existingMedIndex].quantity -= 1;
      }
      return updatedMeds;
    });
  };


  const updateMedonServer = async (updatedMed) => {
    try {
      const response = await axios.post(`https://crudcrud.com/api/7547159d09654bc6819c23089c275b98/med`, updatedMed);

      if (response.status !== 201) {
        throw new Error('Failed to add med on server');
      } else {
        console.log('added med on server successfully');
      }
    } catch (error) {
      console.error('failed to add Meds', error);
    }
  }
  const updateitemonServer = async (updateditem) => {
    try {
      const response = await axios.post(`https://crudcrud.com/api/7547159d09654bc6819c23089c275b98/cart`, updateditem);

      if (response.status !== 201) {
        throw new Error('Failed to add Item on server');
      } else {
        console.log('added Item on server successfully');
      }
    } catch (error) {
      console.error('failed to add Items', error);
    }
  }

  const cartContext = {
    items: items,
    medicines: medicines,
    addItems: addItemToCartHandler,
    addMedicine: addItemHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
