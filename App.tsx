
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import ProductDetail from './components/ProductDetail';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import { CONTACT_INFO } from './constants';

const App: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = window.scrollY / totalHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getBgColor = () => {
    if (scrollProgress < 0.4) {
      return '#f8fafc'; // Slate 50 (Fresco/Profesional)
    } else if (scrollProgress < 0.8) {
      return '#ffffff'; // Puro
    }
    return '#fffdfa'; // Beige/Oro muy sutil
  };

  return (
    <div 
      className="flex flex-grow flex-col min-h-screen relative transition-colors duration-1000 ease-in-out"
      style={{ backgroundColor: getBgColor() }}
    >
      <div 
        className="fixed inset-0 pointer-events-none z-0 transition-opacity duration-1000"
        style={{ 
          opacity: Math.max(0, 1 - scrollProgress * 2.5),
          background: 'linear-gradient(180deg, rgba(14, 165, 233, 0.1) 0%, rgba(255, 255, 255, 0) 100%)'
        }}
      />

      <Navbar />
      <main className="flex-grow relative z-10">
        <Hero scrollProgress={scrollProgress} />
        <Features />
        
        <section className="py-32 bg-slate-950 overflow-hidden relative">
          <div className="absolute inset-0 bg-water-gradient opacity-5"></div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-10">
               <h2 className="text-4xl md:text-7xl font-brand font-black text-white leading-tight">
                Dispenser a Red: <br /> <span className="text-sky-500">Más Higiénico.</span>
              </h2>
              <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                Al conectarse directamente a tu red doméstica, eliminamos el contacto con el aire y la manipulación manual de envases. Disfrutá de la máxima seguridad alimentaria con la tecnología <strong>Aqua Blue Eco</strong>.
              </p>
              <div className="pt-8 flex justify-center">
                <div className="inline-flex items-center space-x-6 bg-white/5 border border-white/10 px-10 py-5 rounded-2xl">
                   <div className="w-4 h-4 bg-sky-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(14,165,233,0.8)]"></div>
                   <span className="text-white font-bold tracking-[0.2em] text-xs uppercase">Certificación de Agua Doméstica Segura</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProductDetail />
        <ContactForm />
      </main>
      <Footer />
      
      {/* WhatsApp Flotante con Logo Oficial */}
      <a 
        href={CONTACT_INFO.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group flex items-center justify-end"
        title="Consultar por WhatsApp"
      >
        {/* Tooltip texto deslizante */}
        <div className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out bg-white text-slate-900 rounded-l-2xl shadow-lg mr-[-15px] relative z-0 h-12 flex items-center opacity-0 group-hover:opacity-100">
           <span className="px-5 font-bold whitespace-nowrap pl-4 pr-8 text-sm">
             ¿Consultas? Escribinos
           </span>
        </div>

        {/* Imagen Logo */}
        <div className="relative z-10 transition-transform duration-300 group-hover:scale-110 drop-shadow-2xl">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
            alt="WhatsApp Aqua Blue" 
            className="w-16 h-16 md:w-20 md:h-20"
          />
        </div>
      </a>

      {/* Botón Móvil Adaptado */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-40 w-[70%] pr-12">
        <a 
          href={CONTACT_INFO.whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full glass bg-slate-900 text-white font-bold py-5 rounded-xl shadow-2xl border-none backdrop-blur-xl uppercase tracking-widest text-[10px] text-center"
        >
          Pedir Presupuesto
        </a>
      </div>
    </div>
  );
};

export default App;
