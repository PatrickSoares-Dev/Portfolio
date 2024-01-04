import UnisuamLogo from "../../assets/img/unisuam.png";
import KnnLogo from "../../assets/img/knnlogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Galery from "../Galery/Galery.jsx"

import unisuamFrontend from "../../assets/img/certificados/unisuam-frontend.png"
import unisuamInfraestrutura from "../../assets/img/certificados/unisuam-infraestrutura.png"
import unisuamGerencia from "../../assets/img/certificados/unisuam-gerencia-de-software.png"
import csharpAbstracao from "../../assets/img/certificados/csharp-abstracao-dio.png"

export default function Educacao() {

    const [mostrarMais, setMostrarMais] = useState(false);

    const handleToggleMais = () => {
        setMostrarMais(!mostrarMais);
    };

  return (
    <section id='education'>
      <h2 className="text-white xl:text-2xl 2xl:text-4xl text-center align-center  font-bold b-opacity-20 rounded-lg p-4 mt-8">
        Educação
      </h2> 
              
      <div className="justify-center items-center pb-12 bg-gray-800">
        <div className="mx-auto xl:max-w-4xl 2xl:max-w-7xl p-2">          
            <div class="bg-black bg-opacity-10 w-50 rounded-2xl rounded-b-none border-b border-lime-500 xl:w-5/12 2xl:w-4/12">
                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" data-tabs-toggle="#default-tab-content" role="tablist">
                    <li class="me-2" role="presentation">
                        <button class="inline-block p-4 border-l border-lime-500 hover:text-lime-400 rounded-t-lg text-white" id="profile-tab" data-tabs-target="#academico" type="button" role="tab" aria-controls="academico" aria-selected="false">Formação Acadêmica</button>
                    </li>
                    <li class="me-2" role="presentation">
                        <button class="inline-block p-4  rounded-t-lg text-white border-lime-500 hover:text-lime-400" id="dashboard-tab" data-tabs-target="#curso" type="button" role="tab" aria-controls="curso" aria-selected="false">Licenças e Certificados</button>
                    </li>               
                </ul>
            </div>
            <div id="default-tab-content" className="bg-black bg-opacity-5 rounded-r-2xl rounded-b-2xl">
                <div class="hidden p-4 rounded-lg" id="academico" role="tabpanel" aria-labelledby="profile-tab">
                    <div className="flex col rounded-2xl mt-2">            
                        <div className="flex items-center">
                            <div className="p-4">
                                <img
                                className="w-24 h-24 object-cover object-top rounded-2xl "
                                src={UnisuamLogo}
                                alt=""
                                />
                            </div>
                            <div className="text-white mt-6">
                                <h1 className="xl:text-xl font-bold">Centro Universitário Augusto Motta</h1>
                                <h1 className="xl:text-lg font-semi-bold">
                                Curso Superior de Tecnologia (CST), Análise e Desenvolvimento de Sistemas.
                                </h1>
                                <h1 className="xl:text-base mb-6 text-white/70">
                                Mar de 2022 - Set de 2024
                                </h1>
                            </div>              
                        </div>            
                    </div>
                    <div className="flex col rounded-2xl  mt-2">
                        <div className="flex items-center">
                            <div className="p-4">
                                <img
                                className="w-24 h-24  object-top rounded-2xl "
                                src={KnnLogo}
                                alt=""
                                />
                            </div>
                            <div className="text-white">
                                <h1 className="xl:text-xl font-bold">KNN Idiomas</h1>
                                <h1 className="xl:text-lg font-semi-bold">
                                Curso de Inglês como segundo idioma - Curso Livre
                                </h1>
                                <h1 className="xl:text-base mb-6 text-white/70">
                                Jan de 2022 - Julho de 2024
                                </h1>
                            </div>              
                        </div>                    
                    </div>
                </div>
                <div class="hidden p-4 rounded-lg bg-black bg-opacity-10 " id="curso" role="tabpanel" aria-labelledby="dashboard-tab"> 
                    <div className="p-4">
                        {mostrarMais ? (
                                <div className="flex flex-col items-center">
                                    <button
                                        onClick={handleToggleMais}
                                        className=" text-white px-2 py-2 rounded-md mb-6"
                                    >
                                        Ver menos <FontAwesomeIcon icon={faChevronUp} className="ml-2 text-lime-500" />
                                    </button>
                                    <Galery />
                                </div>
                            ) : (
                                <div className="flex flex-col items-center">

                                    <div className="grid grid-cols-4 gap-2">                                           
                                        <img class="h-auto max-w-full rounded-lg" src={unisuamFrontend} alt=""/>
                                        <img class="h-auto max-w-full rounded-lg" src={unisuamInfraestrutura} alt=""/>
                                        <img class="h-auto max-w-full rounded-lg" src={unisuamGerencia} alt=""/>
                                        <img class="h-auto max-w-full rounded-lg" src={csharpAbstracao} alt=""/>                                      
                                    </div>
                                    
                                    <div className="">
                                        <button
                                            onClick={handleToggleMais}
                                            className=" text-white px-4 py-2 rounded-md mt-6 flex items-center"
                                        >
                                            Ver mais <FontAwesomeIcon icon={faChevronDown} className="ml-2 text-lime-500" />
                                        </button>
                                    </div>
                                
                                </div>
                                
                            )}
                    </div>    
                </div>            
            </div>
        </div>
      </div>
    </section>
  );
}
