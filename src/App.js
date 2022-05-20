import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./Components/Login";
import Main from "./Components/Main";
import Join from "./Components/Join";
import Product from "./Components/Product";
import Order from './pages/Order';
import User from './pages/User';
import UserLogin from "./Components/UserLogin";
import FindId from "./Components/FindId";
import FindPw from "./Components/FindPw";
import OrderLogin from "./Components/OrderLogin";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/join" element={<Join/>}/>
              <Route path="/product" element={<Product/>}/>
              <Route path="/login" element={<UserLogin/>}/>
              <Route exact path="/find-id" element={<FindId/>}/>
              <Route exact path="/find-pw" element={<FindPw/>}/>
              <Route exact path="/order" element={<OrderLogin/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
