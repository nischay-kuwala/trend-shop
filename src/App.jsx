import { useState } from "react";
import Productpage from "./Productpage";
import Detail from "./Detail";
import Topbar from "./Topbar";
import Bottombar from "./Bottombar";
import FileError from "./FileError";
import { Route, Routes } from "react-router-dom";
import Cartpage from "./Cartpage";
import Login from "./Login";
import Register from "./Register";

function App() {
  const [productcart, setproductcart] = useState(0);
  const savedItems = localStorage.getItem("my-Cart") || "{}";
  const savedItemsconvert = JSON.parse(savedItems);

  console.log("items are", productcart);
  const [cart, setCart] = useState(savedItemsconvert);

  function cartItems(productId, count) {
    const oldCount = cart[productId] || 0;
    const newCart = { ...cart, [productId]: oldCount + count };
    setCart(newCart);
    const cartItem = JSON.stringify(newCart);
    localStorage.setItem("my-Cart", cartItem);
  }
  const totalCount = Object.keys(cart).reduce(function (output, current) {
    return output + cart[current];
  }, 0);

  return (
    <>
      <Topbar ItemCount={totalCount} />
      <div className="grow">
        <Routes>
          <Route index element={<Login />}></Route>
          <Route
            path="/Detail/:id/"
            element={<Detail onAddToCart={cartItems} />}
          ></Route>
          <Route path="/Productpage" element={<Productpage />}></Route>
          <Route path="/*/*" element={<FileError />}></Route>
          <Route path="/Cartpage" element={<Cartpage />}></Route>
          <Route path="/Register" element={<Register />}></Route>
        </Routes>
      </div>
      <Bottombar />
    </>
  );
}

export default App;
