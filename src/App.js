import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Register from './components/Register';
import ImageEditor from './components/ImageEditor';
import Header from './components/Header';
import Home from './components/Home';
import {Toaster} from "react-hot-toast"






function App() {
  return (
    <div>
      <Toaster/>
      <BrowserRouter >
      <Header/>
        <Routes>
          <Route element={<Home></Home>} path=""></Route>
          <Route element={<Home></Home>} path="/home"></Route>
          <Route element={<Login></Login>} path="/login" />
          <Route element={<Register />} path="/register" />
          <Route element={<ImageEditor />} path="/imageeditor" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
