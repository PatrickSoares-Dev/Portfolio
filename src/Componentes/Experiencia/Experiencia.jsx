import { useState } from 'react';


export default function Experiencia() {
    const [mostrarMais, setMostrarMais] = useState(false);

    const handleToggleMais = () => {
        setMostrarMais(!mostrarMais);
    };

    return (
        <section id='experience'>
            <div className="justify-center items-center bg-gray-800 bg-opacity-50">
                <div className="text-gray-100">
                    <div className="">
                        <h2 className="text-3xl md:text-2xl sm:text-4xl text-center align-center  font-bold b-opacity-20 rounded-lg p-4 mt-8">
                            Experiência
                        </h2>                    
                            <ol className="border-l border-neutral-300 dark:border-lime-400 bg-black p-4 bg-opacity-10 xl:ml-48 xl:mr-48 xl:mt-12 xl:mb-12 2xl:ml-72 2xl:mr-72 2xl:mt-12 2xl:mb-12 rounded-2xl shadow-md ">
                                <li>
                                    <div class="flex-start flex items-center pt-3">
                                        <div
                                            class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                                        <p class="text-md text-neutral-500 dark:text-neutral-300">
                                            08 / 2023 - O momento
                                        </p>
                                    </div>
                                    <div className="mb-2 ml-4 mt-2">
                                        <h4 className="mb-1.5 text-xl font-semibold">Telecall - Analista de Sistemas I</h4>
                                        <p className="mb-3 text-white dark:text-white">
                                            <p className='text-lime-400 font-semibold mb-2'>Linguagens e Tecnologias Utilizadas:</p>
                                            <p className='text-white font-semibold'>C#, .NET CORE, Entity Framework, ASP.NET MVC, JavaScript, React, Node.js, SQL Server</p>
                                            <br />
                                            {mostrarMais ? (
                                                <div>
                                                    <p className=''>
                                                    <span className='text-lime-400'>•</span>  Coordenador de desenvolvimento do portal CPaaS, abrangendo APIs de SMS, Campanhas SMS, Painéis, Autenticação de Dois Fatores (2FA), Portabilidade Numérica, Text-To-Speech e interconexão com C#. NET Core e JavaScript.
                                                    </p>
                                                    <p className='mt-2'>
                                                    <span className='text-lime-400'>•</span> Manutenção e sustentação de sistemas críticos.
                                                    </p>
                                                    <p className='mt-2'>
                                                        <span className='text-lime-400'>•</span> Desenvolvi um BOT de verificação para gateways de pagamento integrados ao WordPress e bancos de dados, otimizando a gestão de créditos e validações bancárias.
                                                    </p>
                                                    <p className='mt-2'>
                                                        <span className='text-lime-400'>•</span> Criei scripts e consultas SQL para geração estratégica de relatórios.
                                                    </p>
                                                    <p className='mt-2'>
                                                        <span className='text-lime-400'>•</span> Construí com sucesso uma plataforma de E-commerce para comercializar os serviços CPaaS.
                                                    </p>
                                                    <p className='mt-2'>
                                                        <span className='text-lime-400'>•</span> Elaborei um sistema de criptografia de arquivos para garantir a segurança de dados sensíveis.
                                                    </p>
                                                    <p className='mt-2'>
                                                        <span className='text-lime-400'>•</span> Criei scripts e consultas SQL para geração estratégica de relatórios.
                                                    </p>
                                                    <button
                                                        onClick={handleToggleMais}
                                                        className="bg-lime-600 text-white px-4 py-2 rounded-md mt-6"
                                                    >
                                                        Ver menos
                                                    </button>
                                                </div>
                                            ) : (
                                                <div>
                                                    <p>
                                                        • Coordenador de desenvolvimento do portal CPaaS, abrangendo APIs de SMS, Campanhas SMS, Painéis, Autenticação de Dois Fatores (2FA), Portabilidade Numérica, Text-To-Speech e interconexão com C#. NET Core e JavaScript.
                                                    </p>
                                                    <button
                                                        onClick={handleToggleMais}
                                                        class="bg-lime-600 text-white px-4 py-2 rounded-md mt-6"
                                                    >
                                                        Ver mais
                                                    </button>
                                                </div>
                                            )}
                                        </p>
                                    </div>

                                    <div class="flex-start flex items-center pt-3">
                                        <div
                                            class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                                        <p class="text-md text-neutral-500 dark:text-neutral-300">
                                            11 / 2022 - 08 / 2023
                                        </p>
                                    </div>
                                    <div className="mb-6 ml-4 mt-2">
                                        <h4 className="mb-1.5 text-xl font-semibold">Assistente de Desenvolvimento</h4>                               
                                    </div>

                                    <div class="flex-start flex items-center pt-3">
                                        <div
                                            class="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500"></div>
                                        <p class="text-md text-neutral-500 dark:text-neutral-300">
                                            07 / 2022 - 11 / 2023
                                        </p>
                                    </div>
                                    <div className="mb-6 ml-4 mt-2">
                                        <h4 className="mb-1.5 text-xl font-semibold">Estagiário de Desenvolvimento de Software</h4>                               
                                    </div>
                                </li>
                            </ol>     
                                    
                    </div>
                </div>
            </div>
        </section>
    );
}
