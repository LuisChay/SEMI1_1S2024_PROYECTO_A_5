import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap'
import './App.css'
import Index from './pages';
import Registro from "./pages/registro";
import Login from "./pages/login";
import Home from "./pages/home";
function App() {
  return (
    <>
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index/>}></Route>
        <Route path="/registro" element={<Registro></Registro>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="*" element={<Navigate to="/" replace={true}></Navigate>} exact={true}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
