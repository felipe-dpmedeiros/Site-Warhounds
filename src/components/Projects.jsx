import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TeamAndYoutube = () => {
  const teamRef = useRef(null);
  const youtubeRef = useRef(null);
  
  useGSAP(() => {
    // Animação para a seção da equipe
    gsap.from(teamRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      scrollTrigger: {
        trigger: teamRef.current,
        start: 'top 80%',
      }
    });
    
    // Animação para o botão do YouTube
    gsap.from(youtubeRef.current, {
      scale: 0.8,
      opacity: 0,
      duration: 0.6,
      delay: 0.3,
      scrollTrigger: {
        trigger: youtubeRef.current,
        start: 'top 90%',
      }
    });
  }, []);
  
  return (
    <div className="py-16 px-4 max-w-4xl mx-auto">
      {/* Seção Sobre a Equipe */}
      <div ref={teamRef} className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Nossa Equipe</h2>
        
        <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
          <p className="text-gray-700 text-lg mb-6">
            Nossa equipe é formada por profissionais apaixonados por tecnologia e inovação. Reunimos talentos de diferentes áreas como desenvolvimento de software, design, engenharia e ciência de dados, todos trabalhando de forma colaborativa para criar soluções que realmente fazem a diferença.
          </p>
          
          <p className="text-gray-700 text-lg mb-6">
            Contamos com especialistas em inteligência artificial, desenvolvimento web, sistemas embarcados e experiência do usuário. Essa diversidade de conhecimentos nos permite abordar desafios tecnológicos complexos de forma criativa e eficiente.
          </p>
          
          <p className="text-gray-700 text-lg">
            Valorizamos o aprendizado contínuo, a experimentação e a excelência técnica. Nossa missão é desenvolver tecnologias inovadoras que transformem o futuro e melhorem a vida das pessoas.
          </p>
        </div>
      
        {/* Botão para o canal do YouTube */}
        <div className="text-center">
          <a 
            ref={youtubeRef}
            href="https://www.youtube.com/c/seucanal" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center justify-center bg-red-600 text-white font-bold py-4 px-10 rounded-full text-lg shadow-lg hover:bg-red-700 transition-all transform hover:scale-105"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-3">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
            Conheça Nosso Canal no YouTube
          </a>
          <p className="mt-4 text-gray-600">
            Acompanhe todos os nossos projetos, tutoriais e novidades no canal.
          </p>
        </div>
      </div>
    </div>
  );
};
        
export default TeamAndYoutube;
