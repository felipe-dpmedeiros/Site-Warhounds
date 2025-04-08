import { useState, useEffect, useRef } from 'react';
import { hightlightsSlides } from '../constants';

const VideoCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const maxSlides = hightlightsSlides.length;
  const carouselRef = useRef(null);
  const videoRefs = useRef([]);

  // Initialize videoRefs array
  useEffect(() => {
    videoRefs.current = videoRefs.current.slice(0, maxSlides);
  }, [maxSlides]);

  // Função para navegar para o próximo slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % maxSlides);
  };

  // Função para navegar para o slide anterior
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + maxSlides) % maxSlides);
  };

  // Função para selecionar um slide específico
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };

  // Pausar a reprodução automática quando o mouse estiver sobre o carrossel
  const handleMouseEnter = () => {
    setIsPlaying(false);
  };

  // Retomar a reprodução automática quando o mouse sair do carrossel
  const handleMouseLeave = () => {
    setIsPlaying(true);
  };

  // Set up video ended event listeners
  useEffect(() => {
    const videoElements = videoRefs.current;
    
    // Add event listeners to all videos
    videoElements.forEach((video, index) => {
      if (video) {
        // Remove any existing listeners first to prevent duplicates
        video.removeEventListener('ended', handleNext);
        
        // Only add the listener to the current video
        if (index === currentIndex && isPlaying) {
          // For videos that aren't set to loop
          video.addEventListener('ended', handleNext);
        }
      }
    });

    return () => {
      // Clean up event listeners
      videoElements.forEach(video => {
        if (video) {
          video.removeEventListener('ended', handleNext);
        }
      });
    };
  }, [currentIndex, isPlaying]);

  // Efeito para rolar até o slide atual e manipular reprodução de vídeo
  useEffect(() => {
    if (carouselRef.current) {
      const slideWidth = carouselRef.current.children[0].offsetWidth;
      carouselRef.current.scrollTo({
        left: currentIndex * slideWidth,
        behavior: 'smooth'
      });

      // Pause all videos then play the current one
      videoRefs.current.forEach((video, index) => {
        if (video) {
          if (index === currentIndex) {
            video.currentTime = 0; // Reset video to start
            video.play();
          } else {
            video.pause();
          }
        }
      });
    }
  }, [currentIndex]);

  return (
    <div 
      className="relative w-full max-w-6xl mx-auto my-8 px-4"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h2 className="text-2xl font-bold mb-6 text-center">Nossos Destaques</h2>
      
      {/* Botões de navegação com ícones HTML simples em vez de Lucide */}
      <div className="absolute top-1/2 left-0 z-10 -translate-y-1/2">
        <button 
          onClick={handlePrev}
          className="bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-300"
          aria-label="Slide anterior"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            &larr;
          </div>
        </button>
      </div>
      
      <div className="absolute top-1/2 right-0 z-10 -translate-y-1/2">
        <button 
          onClick={handleNext}
          className="bg-black/50 hover:bg-black/80 text-white p-2 rounded-full transition-all duration-300"
          aria-label="Próximo slide"
        >
          <div className="w-6 h-6 flex items-center justify-center">
            &rarr;
          </div>
        </button>
      </div>
      
      {/* Container do carrossel */}
      <div 
        ref={carouselRef}
        className="flex items-center overflow-x-hidden scroll-smooth py-4"
      >
        {hightlightsSlides.map((list, i) => (
          <div 
            key={list.id} 
            className={`flex-shrink-0 w-full px-2 transition-all duration-500 transform ${
              i === currentIndex ? 'scale-100 opacity-100' : 'scale-95 opacity-70'
            }`}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl bg-black h-[300px] sm:h-[400px]">
              <video
                ref={el => videoRefs.current[i] = el}
                id={`video-${i}`}
                playsInline
                preload="auto"
                muted
                autoPlay={i === currentIndex}
                loop={false} // Changed to false to enable ended event
                className="w-full h-full object-cover"
              >
                <source src={list.video} type="video/mp4" />
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">{list.title || `Destaque ${i + 1}`}</h3>
                  <div className="space-y-1">
                    {list.textLists.map((text, index) => (
                      <p key={index} className="text-sm sm:text-base">
                        {text}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Indicadores de slide (pontos) */}
      <div className="flex justify-center mt-4">
        {hightlightsSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => handleDotClick(i)}
            className={`w-3 h-3 mx-1 rounded-full transition-all duration-300 ${
              i === currentIndex ? 'bg-white' : 'bg-gray-400'
            }`}
            aria-label={`Ir para slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoCarousel;