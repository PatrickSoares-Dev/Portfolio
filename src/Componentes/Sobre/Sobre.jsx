import Tecnologias from "../../Componentes/Tecnologias/Tecnologias";
import Laptop from "/src/assets/img/laptop.png"
import CurriculumPDF from "/src/assets/Curriculo_Patrick.pdf";

export default function Sobre(){
    const handleDownload = () => {        
        const link = document.createElement("a");
        link.href = CurriculumPDF;
        link.download = "Curriculo_Patrick_Oliveira.pdf";
        link.click();
      };
    return (
        <section id="sobre">
            <div className="justify-center items-center bg-gray-900 pb-12 ">
                <div className="mx-auto max-w-5xl">
                    <h2 className="xl:text-lg 2xl:text-xl font-medium align-center b-opacity-20 rounded-lg pt-16 text-white text-justify max-w-5xl">
                        Olá! Sou o Patrick Oliveira, um desenvolvedor fullstack apaixonado de 21 anos, do Rio de Janeiro, RJ, Brasil.<br/>
                        <br/>

                        Com 2 anos de experiência em React e .NET Core, construo sistemas completos. Meu inglês intermediário/avançado foi aprimorado ao longo da vida, entre cursos dedicados a conteúdos em inglês.<br/>
                        <br/>

                        Além do desenvolvimento, sou um entusiasta de conteúdos geek e jogos para PC. Vejo a tecnologia como um universo de possibilidades e estou sempre pronto para novos desafios.
                    </h2>  
                    
                    <div className='flex col-2 items-center mt-8 justify-center'>
                        <div>
                            <a href="https://www.linkedin.com/in/patricksoares-dev/" target="_blank" rel="noopener noreferrer">
                                <button class="bg-lime-600 hover:bg-lime-700 py-3 px-4 text-white cursor-pointer text-center inline-flex items-center me-2 mb-2 font-medium rounded-lg text-md">                                            
                                    Visite-me no Linkedin  
                                </button>
                            </a>
                        </div>

                        <div>
                            <a href="https://github.com/PatrickSoares-Dev" target="_blank" rel="noopener noreferrer">
                                <button type="button" className="text-white cursor-pointer bg-transparent hover:border-lime-400 focus:ring-4 focus:outline-none  font-medium rounded-lg text-md px-6 py-3 text-center inline-flex items-center border me-2 mb-2 shadow-md">                               
                                        Visite-me no Github
                                </button>  
                            </a>  
                        </div>                          
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 rounded-2xl bg-gray-800 bg-opacity-50 mt-8">   

                        <div class="flex pt-24 pl-8 pb-16">

                            <div class="mb-auto max-w-lg">

                                <h1 class="xl:text-4xl 2xl:text-5xl font-bold text-white">Patrick Oliveira</h1>
                                <h1 class="xl:text-2xl 2xl:text-2xl font-semi-bold text-lime-400 mb-6"> (Profissional)</h1>

                                <p className="text-white xl:text-lg 2xl:text-lg">Desenvolvedor FullStack experiente, com especialização na criação de portais de soluções CPaaS (As a Service), e profundo conhecimento no desenvolvimento de aplicações web utilizando React, .NET CORE API's RestFul. Além disso, possuo expertise na criação de soluções E-commerce, na elaboração de websites empresariais usando WordPress e na eficaz manutenção de sistemas ativos no setor de Telecomunicações.</p>

                                <button
                                    onClick={handleDownload}
                                    className="bg-lime-600 hover:bg-lime-700 py-3 px-4 text-white cursor-pointer text-center inline-flex items-center me-2 mb-2 font-medium rounded-lg text-md mt-12"
                                >
                                    Currículo completo
                                </button>
                            </div>
                            
                        </div>

                        <div class="pt-8 pb-8">
                            <img class="w-screen object-cover object-top rounded-2xl " 
                            src={Laptop} alt=""/>
                        </div>

                    </div>
                </div>         
                
                <div className="mt-12">
                    <Tecnologias/>  
                </div>                     
            </div>
        </section>
    )
}