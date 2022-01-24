import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import Ingredient from './Pages/Ingredient/Ingredient';


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:key" element={<Ingredient/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
