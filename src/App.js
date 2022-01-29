import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import DetailsFood from './Pages/DetailsFood/DetailsFood';
import Recipe from './Pages/Recipe/Recipe';
import Header from './Components/Header/Header';
import { createContext, useState } from 'react';
import Cart from './Pages/Cart/Cart';


export  const cartContext = createContext();
function App() {

  const [CartInfo, SetCartInfo] = useState([])
  console.log(CartInfo)
 
  return (
    <cartContext.Provider  value={[CartInfo,SetCartInfo]}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:key" element={<DetailsFood/>}/>
          <Route path="/recipe/:id" element={<Recipe />}/>
          <Route path="/cart" element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
     </cartContext.Provider>
  );
}

export default App;
