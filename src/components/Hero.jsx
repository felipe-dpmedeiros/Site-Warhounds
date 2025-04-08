import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Hero = () => {
  const videoSrc = '/assets/videos/hero.mp4';

  // GSAP Animations
  useGSAP(() => {
    gsap.to('#hero', { opacity: 1, delay: 1.25 });
    gsap.to('#cta', { opacity: 0.95, y: -50, delay: 3 });
  }, []);
  
  return (
    <div className="w-full nav-height bg-black relative overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>

      {/* Title at very top */}
      <div className="relative z-10 w-full pt-8">
        <p id="hero" className="hero-title text-center">Nós somos WarHounds</p>
      </div>

      {/* Empty space */}
      <div className="h-[55vh]"></div>

      {/* CTA at bottom */}
      <div id="cta" className="relative z-10 pb-15 opacity-0 translate-y-20">
        <div className="flex flex-col items-center space-y-4">
          <a href="#highlights" className="btn">Projetos</a>
          <p className="font-normal text-xl">Clique acima para ver nossos projetos.</p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 5v14M19 12l-7 7-7-7"/>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
