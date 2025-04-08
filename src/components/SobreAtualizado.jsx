import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { appleImg } from '../utils';

gsap.registerPlugin(ScrollTrigger);

const SobreAtualizado = () => {
  const boxRef = useRef();
  
  useGSAP(() => {
    gsap.from(boxRef.current, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: boxRef.current,
        start: "top 80%"
      }
    });
  }, []);

  return (
    <section ref={boxRef} className="max-width py-16 px-4">
      <div className="bg-gradient-to-b from-black to-gray-900 rounded-3xl p-8 md:p-16 text-center max-w-6xl mx-auto border border-gray-800 shadow-2xl">
        <div className="flex justify-center mb-8">
          <img src={appleImg} alt="Logo" width={60} height={60} className="opacity-90" />
        </div>
        
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-red-300">
            Sobre o Warhounds
          </span>
        </h3>
        
        <p className=" text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit incidunt illum natus id odit omnis dolor, unde sint quos vitae reprehenderit. Assumenda iure nemo fugiat, accusamus quibusdam ullam numquam quam.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a 
            href="https://www.youtube.com/@Warhounds-tg4bj" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full text-lg transition-all duration-300 hover:scale-105"
          >
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
            </svg>
            Visite Nosso Canal
          </a>
        </div>
      </div>
    </section>
  );
};

export default SobreAtualizado;
