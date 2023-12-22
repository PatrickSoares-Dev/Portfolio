export default function Navbar(){
    return (
        <nav className="dark:bg-gray-900 border-b-2 border-gray-200 rounded dark:border-gray-700">
            <div class="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto p-4">
                             
                <div class="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul class="font-medium text-md flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-900 md:bg-gray-900 dark:border-gray-800">
                    <li>
                    <a href="#" class="block py-2 px-3 text-white bg-lime-400 rounded md:bg-transparent md:text-lime-400 md:p-0 dark:text-white md:dark:text-lime-300" aria-current="page">Sobre</a>
                    </li>
                    <li>
                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-400 md:p-0 dark:text-white md:dark:hover:text-lime-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Services</a>
                    </li>
                    <li>
                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-400 md:p-0 dark:text-white md:dark:hover:text-lime-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projetos</a>
                    </li>
                    <li>
                    <a href="#" class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-lime-400 md:p-0 dark:text-white md:dark:hover:text-lime-300 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contatos</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
}


