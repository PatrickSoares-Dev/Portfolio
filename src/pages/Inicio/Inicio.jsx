import Navbar from "../../Componentes/Navbar/Navbar";
import Introducao from "../../Componentes/Introducao/Introducao";
import Sobre from "../../Componentes/Sobre/Sobre";
import Experiencia from "../../Componentes/Experiencia/Experiencia";
import Projetos from "../../Componentes/Projetos/Projetos";
import Educacao from "../../Componentes/Experiencia/Educacao";
import Contato from "../../Componentes/Contato/Contato";
import Footer from "../../Componentes/Footer/Footer";



export default function Inicio(){
    return (        

        <section id="Home" className="bg-gray-800 bg-opacity-50">

            <Navbar />  
            <Introducao/> 
            <Sobre/>
            <Experiencia /> 
            <Educacao />
            <Projetos /> 
            <Contato /> 
            <Footer />

        </section>             
               
    );
}
