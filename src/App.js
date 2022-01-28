import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Pages/Home/Home';
import DetailsFood from './Pages/DetailsFood/DetailsFood';
import Recipe from './Pages/Recipe/Recipe';
import Header from './Components/Header/Header';



function App() {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:key" element={<DetailsFood/>}/>
          <Route path="/recipe/:id" element={<Recipe />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
