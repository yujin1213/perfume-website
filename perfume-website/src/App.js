import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import Header from './Components/Header';
import Login from "./Components/Login";
import Main from "./Components/Main";
import Join from "./Components/Join";


function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/login" element={<Login/>}/>
              <Route path="/join" element={<Join/>}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
