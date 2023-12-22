import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export default function Introducao(){
    return (
        <div className="">          
            <div className="text-gray-100">
                <div class="grid grid-cols-2 md:grid-cols-2 gap-32 justify-center items-center h-screen">
                    <div className="justify-center items-center text-justify ml-24">
                        <h2 className="xl:text-4xl 2xl:text-6xl">
                            Olá, eu sou o 
                            <span className="xl:text-4xl 2xl:text-6xl text-justify text-lime-400 "> Patrick Oliveira</span> 
                        </h2>  
                        <h2 className="xl:text-2xl 2xl:text-4xl mt-2">                            
                            <span className="xl:text-xl 2xl:text-2xl text-justify text-lime-400 "> React <span className="text-white">|</span> .NET Core <span className="text-white">|</span> API's RestFul <span className="text-white">|</span> SQL  </span> 
                        </h2>  
                        <h2 className="xl:text-xl 2xl:text-2xl 2xl:mt-12 text-justify font-normal align-center xl:mt-8">
                            Sou um desenvolvedor
                            <span className="xl:text-xl 2xl:text-2xl  text-lime-400 "> FullStack </span> 
                            apaixonado por transformar linhas de código em experiências incríveis! Especialista em soluções
                            <span className="xl:text-xl 2xl:text-2xl  text-lime-400 "> As A Service</span>
                            , mestre em 
                            <span className="xl:text-xl 2xl:text-2xl  text-lime-400 "> React e Web API </span>
                            e entusiasta de inovação. 
                        </h2>
                        <div className="mt-8 cursor-pointer ">
                            <button type="button" className="text-white cursor-pointer bg-lime-600 hover:bg-lime-700 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-md px-6 py-3 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55 me-2 mb-2 shadow-md">
                                <FontAwesomeIcon icon={faDownload} className="w-4 h-4 me-2" />
                                Baixar Currículo
                            </button>
                        </div>
                       
                    </div>       

                    <div>
                        <img className="2xl:h-auto 2xl:max-w-lg 2xl:ml-32 xl:h-96 xl:max-w-lg xl:ml-32 rounded-3xl border-2 border-gray-400 dark:border-gray-400" src="src\assets\patrickimage.jpg" alt=""/>
                    </div>            
                </div>
            </div>                   
        </div>                
    );
}
