import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./../../Pages/Home";
import Login from "./../../Pages/Login";
import Produtos from "./../../Pages/Produtos";
import AddProduct from "./../../Pages/AddProduct";
import Produto from "./../../Pages/Produto";
import Cadastrar from "../../Pages/Cadastrar";

const MainRoutes = ()=> {
    return (
<BrowserRouter>
<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/produtos" element={<Produtos/>}/>
    <Route path="/addproduto" element={<AddProduct/>}/>
    <Route path="/produto" element={<Produto/>}/>
    <Route path="/cadastrar" element={<Cadastrar/>}/>
</Routes>
</BrowserRouter>
    )
}

export default MainRoutes;