import Navbar from "../../Componentes/Navbar/Navbar";
import Introducao from "../../Componentes/Introducao/Introducao";
import Sobre from "../../Componentes/Sobre/Sobre";
import Tecnologias from "../../Componentes/Tecnologias/Tecnologias";


export default function Inicio(){
    return (        
        <div>
            <Navbar />  
            <div>
                <Introducao/> 
                <Sobre /> 
                <Tecnologias />
            </div>                                             
        </div>                      
    );
}
