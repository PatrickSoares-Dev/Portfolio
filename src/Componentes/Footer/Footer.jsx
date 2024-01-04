import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export default function Footer() {
    return (
        <section id="Footer" className='bg-gray-900'>
            <footer className="border-b border-gray-200 fixed-bottom">
                <div className="w-full max-w-screen-xl mx-auto p-2 py-6">
                    <div className="flex items-center justify-center">                        
                        <ul className="flex align-center items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="https://www.linkedin.com/in/patricksoares-dev/" target="_blank" className="hover:underline me-4 md:me-6 text-white hover:text-lime-500">
                                    <FontAwesomeIcon icon={faLinkedin} size="2xl" />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/PatrickSoares-Dev" target="_blank" className="hover:underline me-4 md:me-6 text-white hover:text-lime-500">
                                    <FontAwesomeIcon icon={faGithub} size="2xl" />
                                </a>
                            </li>
                            <li>
                                <a href="mailto:patrickoliveiramoto@gmail.com" target="_blank" className="hover:underline hover:text-lime-500 me-4 md:me-6 text-white">
                                    <FontAwesomeIcon icon={faEnvelope} size="2xl" />
                                </a>
                            </li>
                        </ul>
                    </div>
                    <hr className=" border-gray-200 mx-auto dark:border-gray-700 my-4 mt-6" />
                    <span className="block text-sm text-lime-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://www.linkedin.com/in/patricksoares-dev/" className="hover:underline text-lime-400">Patrick Oliveira</a>. Todos os direitos reservados</span>
                </div>
            </footer>
        </section>        
    );
}
