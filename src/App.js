import React,{useState} from "react";
import MedItemForm from "./Components/MedItems/MedItemForm";
import MedItems from "./Components/MedItems/MedItems";
import Header from "./Components/Layout/Header";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Store/CartProvider";
import './App.css'; // Import your CSS file

function App() {
  const [cartIsShown, setCartIsShown] = useState(false)

  const showCartHandler = () => {
    setCartIsShown(true);
  }
  const hideCartHandler = () => {
    setCartIsShown(false);
  }
  return (
    <CartProvider>
        {cartIsShown && <Cart onClose={hideCartHandler}/>}
        <Header onShowCart={showCartHandler} className="header" /> {/* Applying header class */}
        <main className="main"> {/* Applying main class */}
          <MedItemForm />
          <MedItems />
        </main>
    </CartProvider>
  );
}

export default App;