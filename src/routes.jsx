import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio.jsx";
import Sobre from "./pages/Sobre/Sobre.jsx";

function AppRoutes(){
    return (
        <BrowserRouter>
            <Router>
                <Route path="/" element={<Inicio /> }> </Route>
                <Route path="/sobre" element={<Sobre /> }> </Route>
            </Router>
        </BrowserRouter>
    )
}

export default AppRoutes;