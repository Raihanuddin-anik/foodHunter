import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import DetailsFood from './Pages/DetailsFood/DetailsFood';
import Recipe from './Pages/Recipe/Recipe';
import FoodCart from './Pages/FoodCart/FoodCart';
import LogIn from './Pages/LogIn/LogIn';
import Profile from './Components/Profile/Profile';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Success from './Pages/Success/Success';


function App() {



 
  return (
    
      <BrowserRouter>
       
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={ <Success/>}/>
          <Route path="foodCart" element={<FoodCart/>}/>
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
 
  );
}

export default App;
