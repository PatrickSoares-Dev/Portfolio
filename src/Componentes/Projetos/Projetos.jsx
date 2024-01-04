import { faCode } from "@fortawesome/free-solid-svg-icons";
import projetosData from "/src/Json/projetos.json"; // Importar o arquivo JSON
import Carousel from "../Carousel/Carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



export default function Projetos() {
  return (
    <section id="projects">
      <div className="bg-gray-900 pb-8">
        <h2 className="xl:text-2xl 2xl:text-4xl text-center align-center  font-bold b-opacity-20 rounded-lg p-4 mt-16 text-white">
          Projetos
        </h2>
        <div className="mx-auto max-w-5xl mb-8 mt-8 ">
          <div className="grid-cols-1 sm:grid md:grid-cols-2">
            {projetosData.map((project) => (
              <div key={project.id}
                className="mx-4 mb-6 flex flex-col self-start rounded-2xl bg-gray-800 bg-opacity-50 border-l border-b border-lime-400">

                  <div className="mt-6 mr-2 ml-2 mb-6">
                    <Carousel
                      img1={project.img_1}
                      img2={project.img_2}
                      img3={project.img_3}
                      img4={project.img_4}
                    />
                  </div>
                  
                  <div className="p-6">
                    <h5 className="mb-2 text-2xl font-semibold leading-tight text-white">
                      {project.Título} -{" "}
                      <span className="text-2xl text-lime-400">
                        {project.SubTítulo}
                      </span>
                    </h5>
                    <p className="mb-4 text-lg text-neutral-200 text-justify">
                      {project.sinopse}
                    </p>
                    <div className="flex justify-between items-center">
                      {project.link2 && (
                        <a
                          href={project.link2}
                          target="_blank"
                          rel="noopener noreferrer"
                          id="link"
                        >
                          <button
                            className="text-white cursor-pointer bg-lime-600 hover:bg-lime-700 focus:ring-4 focus:outline-none font-medium rounded-lg text-md px-4 py-2 text-center inline-flex items-center me-2 mb-2 shadow-md"
                          >
                            Ver mais
                          </button>
                        </a>
                      )}
                      <div className="text-xl px-4 py-2 text-white cursor-pointer hover:text-lime-400">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            id="link"
                          >
                            <FontAwesomeIcon icon={faCode} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
              </div>            
            ))}
          </div>
        </div>
      </div>      
    </section>
  );
}
