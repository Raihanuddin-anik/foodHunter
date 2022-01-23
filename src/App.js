import logo from './logo.svg';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
