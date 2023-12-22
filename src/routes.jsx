import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio";


function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Inicio /> } /> 
            </Routes>
        </Router>
    )
}

export default AppRoutes;