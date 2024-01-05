//Front-end
import reactImage from '../../assets/icons/React-icon.png';
import jsImage from '../../assets/icons/js.png';
import htmlImage from '../../assets/icons/html.png';
import aspnetMvcImage from '../../assets/icons/ASPNETCOREMVC.png';

//Backend
import entityImage from '../../assets/icons/entity.png';
import dotNetImagem from '../../assets/icons/dotnet.png';
// import dotNetImagem from '/vercel/path0/src/assets/icons/dotnet.png';
import sqlServeImage from '../../assets/icons/sqlserver.png';
import restImage from '../../assets/icons/RESTFulAPI.png';

//Ferramentas
import gitImage from '../../assets/icons/git.png';
import dockerImage from '../../assets/icons/docker.png';
import postmanImage from '../../assets/icons/postman.png';
import swaggerImage from '../../assets/icons/swagger.png';
import figmaImage from '../../assets/icons/figma.png';
import wordpressImage from '../../assets/icons/wordpress.png';

export default function Tecnologias() {
    return (
        <section id='technologies'>
            <div className="justify-center items-center ">
                <h2 className="text-4xl md:text-2xl sm:text-4xl text-center align-center font-bold b-opacity-20 rounded-lg p-4 text-white">
                    Tecnologias e Ferramentas
                </h2>   
                <div className="text-gray-100 text-center align-center mt-8 mb-8">
                    <div class="grid grid-cols-2 xl:ml-48 xl:mr-48 2xl:ml-64 2xl:mr-64">
                        <h2 className="text-center font-bold align-center bg-opacity-10 mb-8 text-3xl md:text-2xl sm:text-4xl">
                            Front-end
                        </h2> 

                        <h2 className="text-center font-bold align-center bg-opacity-10 mb-8 text-3xl md:text-2xl sm:text-4xl">
                            Backend
                        </h2> 

                        <div className="shadow-lg bg-gray-800 rounded-2xl bg-opacity-50 border-b border-lime-400 border-opacity-100 2xl:ml-6 2xl:mr-6 xl:mr-6">
                            <div className='grid grid-cols-4 p-6 content-normal justify-items-center'>  
                            
                                <div><img src={reactImage} height="40" width="80" alt="" /></div>
                                <div><img src={jsImage} height="40" width="80" alt=""/></div>
                                <div><img src={aspnetMvcImage} height="40" width="80" alt=""/></div>
                                <div><img src={htmlImage} height="40" width="80" alt=""/></div>
                                                                                                                    
                            </div>
                        </div>
                    
                        <div className="shadow-lg bg-gray-800 rounded-2xl bg-opacity-50 border-b border-lime-400 border-opacity-100 2xl:ml-6 xl:ml-6 pr-2">
                            <div className='grid grid-cols-4 p-6 content-normal justify-items-center'>  
                            
                                <div><img src={dotNetImagem} height="40" width="80" alt="" /></div>
                                <div><img src={entityImage} height="40" width="80" alt=""/></div>      
                                <div><img src={restImage} height="40" width="80" alt=""/></div>
                                <div><img src={sqlServeImage} height="40" width="92" alt=""/></div>
                                                                                                                    
                            </div>
                        </div>

                    </div>                                              
                </div>

                <h2 className="text-center text-white font-bold align-center bg-opacity-10 mb-8 text-3xl md:text-2xl sm:text-4xl">
                        Ferramentas
                </h2>                    
                <div class="text-white text-center align-center justify-center items-center xl:mt-8 xl:mr-60 xl:ml-48 2xl:mt-8 2xl:mr-64 2xl:ml-64">                    
                    <div className="shadow-lg bg-gray-800 xl:ml-0 ml-6 mr-6 rounded-2xl bg-opacity-50 border-b border-lime-400 border-opacity-100 xl:w-full">
                        <div className='grid grid-cols-6 p-6 content-normal justify-items-center'>                          
                            <div><img src={gitImage} height="40" width="80" alt="" /></div>
                            <div><img src={dockerImage} height="40" width="80" alt=""/></div>
                            <div><img src={postmanImage} height="40" width="80" alt=""/></div>
                            <div><img src={swaggerImage} height="40" width="80" alt=""/></div>
                            <div><img src={figmaImage} height="40" width="80" alt=""/></div>
                            <div><img src={wordpressImage} height="40" width="80" alt=""/></div>                             
                        </div>
                    </div>                                       
                </div>   
            </div>
        </section>        
    );
}
