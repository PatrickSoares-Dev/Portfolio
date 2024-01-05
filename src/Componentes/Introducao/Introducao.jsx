import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Introducao(){
    return (
        <section id="home">                  
            <div className="text-gray-100 justify-center h-screen items-center bg-gray-800 bg-opacity-50">
                <div class="mx-auto max-w-5xl">
                    <div className="flex h-screen flex-col items-center justify-center gap-3">

                        <h2 className='text-center text-6xl font-bold md:text-5xl sm:text-5xl text-white '>
                            Patrick Oliveira
                        </h2>
                        
                        <h2 className="text-center text-4xl sm:text-4xl mb-0">
                            Desenvolvedor
                            <span class="font-bold text-lime-400"> Full-Stack</span>
                        </h2>                                                                          
                        <h2 className="text-center text-4xl sm:text-3xl">                            
                            <span className="xl:text-xl 2xl:text-xl text-center text-lime-400 "> React <span className="text-white">|</span> .NET Core <span className="text-white">|</span> API's RestFul <span className="text-white">|</span> SQL  </span> 
                        </h2>                        
                    </div>   
                                              
                </div>
            </div>                   
        </section>                               
    );        
}
