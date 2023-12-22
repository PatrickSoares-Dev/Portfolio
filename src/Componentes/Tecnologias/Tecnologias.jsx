import dotNet from '../../assets/icons/dotNet.png';
import cssImage from '../../assets/icons/css.png'
import figmaImage from '../../assets/icons/figma.png';
import gitImage from '../../assets/icons/git.png';
import htmlImage from '../../assets/icons/html.png';
import jsImage from '../../assets/icons/js.png';
import mysqlImage from '../../assets/icons/mysql.png';
import reactImage from '../../assets/icons/React-icon.png';
import sqlServeImage from '../../assets/icons/sqlserver.png';
import tailwindImage from '../../assets/icons/tailwind.png';
import viteJsImage from '../../assets/icons/Vitejs-logo.png';
import nodeJsImage from '../../assets/icons/nodejs.png';
import wordpressImage from '../../assets/icons/wordpress.png';

export default function Tecnologias() {
    return (
        <div className="justify-center items-center align mb-8">
            <div className="text-gray-100 text-center align-center">
                <div class="grid grid-cols-2 xl:ml-48 xl:mr-48 2xl:ml-64 2xl:mr-64">
                    <h2 className="text-center font-normal align-center bg-opacity-10 mb-8 2xl:text-2xl xl:text-2xl">
                        Front-end
                    </h2> 

                    <h2 className="text-center font-normal align-center bg-opacity-10 mb-8 2xl:text-2xl xl:text-2xl">
                        Backend
                    </h2> 

                    <div className="shadow-lg bg-black ml-6 mr-6 rounded-lg bg-opacity-10 border border-black border-opacity-15">
                        <div className='grid grid-cols-4 p-6 align-center text-center items-center align'>  
                        
                            <div><img src={reactImage} height="40" width="80" alt="" /></div>
                            <div><img src={jsImage} height="40" width="80" alt=""/></div>
                            <div><img src={htmlImage} height="40" width="80" alt=""/></div>
                            <div><img src={cssImage} height="40" width="80" alt=""/></div>
                                                                                                                
                        </div>
                    </div>
                   
                    <div className="shadow-lg bg-black ml-6 mr-6 rounded-lg bg-opacity-10 border border-black border-opacity-15">
                        <div className='grid grid-cols-4 p-6 align-center text-center items-center align'>  
                        
                            <div><img src={dotNet} height="40" width="80" alt="" /></div>
                            <div><img src={nodeJsImage} height="40" width="80" alt=""/></div>
                            <div><img src={sqlServeImage} height="40" width="80" alt=""/></div>
                            <div><img src={cssImage} height="40" width="80" alt=""/></div>
                                                                                                                
                        </div>
                    </div>

                </div>                           
            </div>
        </div>
    );
}
