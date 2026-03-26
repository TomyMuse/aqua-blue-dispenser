
import React from 'react';
import { SPECS } from '../constants';
import { ShieldCheck, Activity, Clock, Droplets, Zap } from 'lucide-react';

const ProductDetail: React.FC = () => {
  return (
    <section id="producto" className="py-32 relative overflow-hidden bg-slate-50/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          
          <div className="lg:w-1/2 space-y-14">
            <div className="space-y-6">
              <h2 className="text-5xl font-brand font-black text-slate-900 leading-tight">
                Diseño que Refleja <br /> <span className="text-sky-600">Pureza Absoluta.</span>
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed font-medium">
                Nuestros dispensers Aqua Blue combinan una estética moderna con la tecnología de filtrado más avanzada del mercado. Olvidate de la logística de bidones y disfrutá de agua fresca siempre.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
               <div className="flex space-x-5 group">
                  <div className="p-4 bg-sky-50 rounded-2xl h-fit border border-sky-100 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Filtrado Profesional</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Elimina sedimentos, cloro y sabores desagradables al instante.</p>
                  </div>
               </div>
               <div className="flex space-x-5 group">
                  <div className="p-4 bg-slate-50 rounded-2xl h-fit border border-slate-100 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300">
                    <Zap className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-slate-900">Alto Rendimiento</h4>
                    <p className="text-slate-500 text-sm leading-relaxed">Enfriamiento rápido y agua caliente a temperatura constante.</p>
                  </div>
               </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {SPECS.map((spec, i) => (
                <div key={i} className="p-5 glass rounded-2xl border-white/80 hover:border-sky-200 transition-colors shadow-sm">
                  <span className="text-[9px] font-black text-slate-400 uppercase tracking-widest block mb-1">{spec.label}</span>
                  <span className="block text-xs font-bold text-slate-800">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:w-1/2 relative">
            <div className="relative z-10 p-2 glass rounded-[4rem] border-white/80 shadow-2xl overflow-hidden group bg-white/40">
               <div className="bg-white rounded-[3.5rem] overflow-hidden p-8 flex justify-center">
                  <img 
                    src="https://i.postimg.cc/jR5CB7j3/Chat-GPT-Image-1-feb-2026-13-18-22.png" 
                    alt="Detalle Dispenser Aqua Blue" 
                    className="w-full h-auto object-contain transform transition-transform duration-1000 group-hover:scale-110 drop-shadow-xl"
                  />
               </div>
            </div>
            {/* Decoración de fondo */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-400/10 rounded-full blur-3xl -z-10"></div>
            <span className="absolute -bottom-16 -right-16 text-[10rem] font-brand font-black text-slate-900/[0.02] -z-10 select-none">BLUE</span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
