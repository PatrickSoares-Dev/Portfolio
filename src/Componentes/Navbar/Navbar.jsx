export default function Navbar() {
    return (
        <section id="navbar" className="bg-gray-800 bg-opacity-50">
            <nav className="border-b border-gray-200 rounded text-lg justify-center items-center fixed w-full z-50" id="navbar">
                <div className="mx-auto max-w-5xl flex flex-wrap items-center justify-center p-4">
                    <div className="w-full md:w-auto" id="navbar-default">
                        <ul className="font-medium text-md flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-10 rtl:space-x-reverse md:mt-0 md:border-0">
                            <li>
                                <a href="#sobre" className="block py-2 px-3 text-white  rounded md:bg-transparent md:hover:text-lime-400  md:p-0 dark:text-white md:dark:hover:text-lime-300" aria-current="page">Sobre</a>
                            </li>
                            <li>
                                <a href="#technologies" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-400 md:p-0">Tecnologias</a>
                            </li>
                            <li>
                                <a href="#experience" className="block py-2 px-3 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-400 md:p-0 text-white">Experiência</a>
                            </li>
                            <li>
                                <a href="#projects" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-400 md:p-0">Projetos</a>
                            </li>
                            <li>
                                <a href="#contato" className="block py-2 px-3 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-400 md:p-0">Contatos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </section>        
    );
}
