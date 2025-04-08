import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

// Dados dos integrantes da equipe
const integrantes = [
  {
    nome: 'Pedro',
    cargo: '',
    imagem: '/assets/images/integrantePedro.jpeg',
    redes: [
      { nome: 'GitHub', url: 'https://github.com/pedro', icon: <FaGithub /> },
      { nome: 'LinkedIn', url: 'https://linkedin.com/in/pedro', icon: <FaLinkedin /> },
      { nome: 'Instagram', url: 'https://instagram.com/pedro', icon: <FaInstagram /> }
    ]
  },
  {
    nome: 'Gabriel',
    cargo: '',
    imagem: '/assets/images/integranteGabriel.jpg',
    redes: [
      { nome: 'GitHub', url: 'https://github.com/gabriel', icon: <FaGithub /> },
      { nome: 'LinkedIn', url: 'https://linkedin.com/in/gabriel', icon: <FaLinkedin /> },
      { nome: 'Instagram', url: 'https://instagram.com/gabriel', icon: <FaInstagram /> }
    ]
  },
  {
    nome: 'Vinicius',
    cargo: '',
    imagem: '/assets/images/integranteVinicius.jpg',
    redes: [
      { nome: 'GitHub', url: 'https://github.com/vinicius', icon: <FaGithub /> },
      { nome: 'LinkedIn', url: 'https://linkedin.com/in/vinicius', icon: <FaLinkedin /> },
      { nome: 'Instagram', url: 'https://instagram.com/vinicius', icon: <FaInstagram /> }
    ]
  },
  {
    nome: 'Felipe',
    cargo: '',
    imagem: '/assets/images/integranteFelipe.jpeg',
    redes: [
      { nome: 'GitHub', url: 'https://github.com/felipe', icon: <FaGithub /> },
      { nome: 'LinkedIn', url: 'https://linkedin.com/in/felipe', icon: <FaLinkedin /> },
      { nome: 'Instagram', url: 'https://instagram.com/felipe', icon: <FaInstagram /> }
    ]
  }
];

const Integrantes = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [imagesStatus, setImagesStatus] = useState({});
  
  // Gerenciamento de carregamento de imagens
  const handleImageLoad = (index) => {
    setImagesStatus(prev => ({ ...prev, [index]: 'loaded' }));
  };
  
  const handleImageError = (index) => {
    setImagesStatus(prev => ({ ...prev, [index]: 'error' }));
  };
  
  useEffect(() => {
    // Aplicar tema escuro
    document.body.classList.add('dark');
    
    // Definir variáveis CSS personalizadas
    const root = document.documentElement;
    root.style.setProperty('--color-primary', '#06b6d4');
    root.style.setProperty('--color-secondary', '#0891b2');
    root.style.setProperty('--color-bg-dark', '#0f172a');
    root.style.setProperty('--color-card', '#1e293b');
    root.style.setProperty('--color-text', '#f1f5f9');
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-bg-dark)] py-16 px-4 sm:px-6 lg:px-8 text-[var(--color-text)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-cyan-600 bg-clip-text text-transparent">
            Nossa Equipe
          </h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conheça o nosso time
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {integrantes.map((integrante, index) => (
            <div 
              key={index}
              className={`
                bg-[var(--color-card)] rounded-xl overflow-hidden 
                transition-all duration-300 ease-in-out
                ${activeCard === index 
                  ? 'shadow-lg shadow-cyan-500/20 transform scale-[1.03]' 
                  : 'shadow-xl hover:shadow-cyan-900/20'}
              `}
              onMouseEnter={() => setActiveCard(index)}
              onMouseLeave={() => setActiveCard(null)}
            >
              {/* Container da imagem com efeitos */}
              <div className="relative aspect-[3/4] overflow-hidden">
                {/* Placeholder/Skeleton loader */}
                <div 
                  className={`
                    absolute inset-0 bg-slate-700 
                    ${imagesStatus[index] === 'loaded' ? 'opacity-0' : 'animate-pulse opacity-100'}
                    transition-opacity duration-300
                  `}
                ></div>
                
                {/* Imagem principal */}
                <img 
                  src={integrante.imagem} 
                  alt={`Foto de ${integrante.nome}`}
                  className={`
                    w-full h-full object-cover 
                    transition-all duration-500 ease-out
                    ${activeCard === index ? 'scale-110 filter brightness-110' : 'scale-100'}
                    ${imagesStatus[index] === 'loaded' ? 'opacity-100' : 'opacity-0'}
                  `}
                  onLoad={() => handleImageLoad(index)}
                  onError={() => handleImageError(index)}
                  loading="lazy"
                />
                
                {/* Fallback para imagem não carregada */}
                {imagesStatus[index] === 'error' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-800 text-white">
                    <span className="text-4xl font-bold">{integrante.nome.charAt(0)}</span>
                  </div>
                )}
                
                {/* Gradiente de sobreposição */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-card)] via-slate-900/50 to-transparent opacity-90"></div>
                
                {/* Nome e cargo sobre a imagem */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform transition-transform duration-300">
                  <h2 className="text-2xl font-bold mb-1 text-white">{integrante.nome}</h2>
                  <p className="text-cyan-400 font-medium">{integrante.cargo}</p>
                </div>
              </div>
              
              {/* Seção de redes sociais */}
              <div className="p-5">
                <div className={`
                  flex justify-center items-center space-x-4 
                  py-2 px-4 rounded-lg bg-slate-800/80
                  transition-all duration-300
                `}>
                  {integrante.redes.map((rede, i) => (
                    <a
                      key={i}
                      href={rede.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`
                        p-3 rounded-full transition-all duration-200
                        hover:bg-slate-700 text-xl
                        ${activeCard === index 
                          ? 'text-cyan-400 transform hover:scale-110' 
                          : 'text-gray-400 hover:text-cyan-400'}
                      `}
                      aria-label={`${integrante.nome} no ${rede.nome}`}
                      title={rede.nome}
                    >
                      {rede.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Integrantes;
