const imageImports = {
    'csharp-abstracao-dio.png': import('../../assets/img/certificados/unisuam-gerencia-de-software.png').default,
    'csharp-abstracao-dio.png': import('../../assets/img/certificados/unisuam-infraestrutura.png').default,
    'csharp-abstracao-dio.png': import('../../assets/img/certificados/unisuam-frontend.png').default,
    'csharp-abstracao-dio.png': import('../../assets/img/certificados/csharp-abstracao-dio.png').default,
    'csharp-dotnet-dio.png': import('../../assets/img/certificados/csharp-dotnet-dio.png').default,
    'csharp-estacionamento-dio.png': import('../../assets/img/certificados/csharp-estacionamento-dio.png').default,
    'csharp-explorando-alura.png': import('../../assets/img/certificados/csharp-explorando-alura.png').default,
    'csharp-heranca-dio.png': import('../../assets/img/certificados/csharp-heranca-dio.png').default,
    'csharp-metodos-dio.png': import('../../assets/img/certificados/csharp-metodos-dio.png').default,
    'csharp-nuget-dio.png': import('../../assets/img/certificados/csharp-nuget-dio.png').default,
    'csharp-stack-dio.png': import('../../assets/img/certificados/csharp-stack-dio.png').default,
    'csharp-tipos-dio.png': import('../../assets/img/certificados/csharp-tipos-dio.png').default,
    'csharp-tupla-dio.png': import('../../assets/img/certificados/csharp-tupla-dio.png').default,
    'git-github-dio.png': import('../../assets/img/certificados/git-github-dio.png').default,
    'http-web-alura.png': import('../../assets/img/certificados/http-web-alura.png').default,
    'php-arrays-alura.png': import('../../assets/img/certificados/php-arrays-alura.png').default,
    'php-conceitos-alura.png': import('../../assets/img/certificados/php-conceitos-alura.png').default,
    'wordpress-integracao-alura.png': import('../../assets/img/certificados/wordpress-integracao-alura.png').default,
    'wordpress-sites-alura.png': import('../../assets/img/certificados/wordpress-sites-alura.png').default,
    'wordpress-siteszero-alura.png': import('../../assets/img/certificados/wordpress-siteszero-alura.png').default,
    'wordpress-tema-alura.png': import('../../assets/img/certificados/wordpress-tema-alura.png').default,
  };


  import certificadosData from "/src/Json/imagesData.json"; // Importar o arquivo JSON
  
export default function Galery() {
    return (
        <div className="grid grid-cols-4 gap-2">                                           
            {Object.entries(certificadosData).map(([imageName, imageUrl]) => (
                <img
                key={imageName}
                className="h-auto max-w-full rounded-lg"
                src={imageUrl}
                alt={imageName}
                />
            ))}             
        </div>                                  
    );
 }