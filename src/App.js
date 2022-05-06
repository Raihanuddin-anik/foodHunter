import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import DetailsFood from './Pages/DetailsFood/DetailsFood';
import Recipe from './Pages/Recipe/Recipe';
import Header from './Components/Header/Header';
import { createContext, useState } from 'react';
import FoodCart from './Pages/FoodCart/FoodCart';
import Shipment from './Pages/Shipment/Shipment';
import LogIn from './Pages/LogIn/LogIn';
import Profile from './Components/Profile/Profile';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Success from './Pages/Success/Success';


export  const cartContext = createContext();
export  const InfoContext = createContext();
function App() {

  const [CartInfo, SetCartInfo] = useState([]);
  const [LoggedInInfo, setLoggedInInfo] = useState([])
  console.log(CartInfo)
  console.log(LoggedInInfo.isSignedIn)
 
  return (
    <cartContext.Provider  value={[CartInfo,SetCartInfo]}>
      <InfoContext.Provider  value={[LoggedInInfo,setLoggedInInfo]}>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={ <Success/>}/>
          <Route path="/details/:key" element={<DetailsFood/>}/>
          <Route path="/recipe/:id" element={<Recipe />}/>
          <Route path="/foodCart" element={<PrivateRoute> 
            <FoodCart/>
            </PrivateRoute> }/>
            <Route path="/profile" element={<PrivateRoute> 
            <Profile/>
            </PrivateRoute> }/>
          <Route path="/login" element={<LogIn/>}/>
        </Routes>
      </BrowserRouter>
      </InfoContext.Provider>
     </cartContext.Provider>
  );
}

export default App;
