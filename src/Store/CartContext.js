import React from "react";

const CartContext = React.createContext({
    items: [],
    medicines:[],
    addItems : (item)=>{},
    addMedicine: (newMed)=>{}
})

export default CartContext;