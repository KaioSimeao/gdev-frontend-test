import Link from 'next/link';

export const HeroSection = () => {
  return (
    <section className="relative h-[870px] flex items-center bg-[#f9f9f9] overflow-hidden">
          <div className="absolute inset-0 z-0">
            <div className="absolute inset-0 bg-gradient-to-r from-[#f9f9f9] via-[#f9f9f9]/80 to-transparent z-10"></div>
            <img 
              className="w-full h-full object-cover grayscale opacity-20" 
              alt="minimalist architectural building" 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
            />
          </div>
          <div className="relative z-20 max-w-7xl mx-auto px-8 w-full">
            <div className="max-w-2xl">
              <span className="text-sm uppercase tracking-[0.2em] text-black mb-6 block font-medium">Organize o que você assiste</span>
              <h1 className="text-7xl md:text-8xl font-bold tracking-tighter leading-[1] text-[#1a1c1c] mb-8">
                A Lógica da Sua Biblioteca de Filmes.
              </h1>
              <p className="text-lg text-[#474747] leading-relaxed mb-10 max-w-lg">
                Um sistema inteligente para acompanhar, organizar e analisar seus filmes. Focado em clareza, progresso e na sua jornada como espectador.
              </p>
              <div className="flex items-center gap-6">
                <Link href="/register" className="bg-black text-white px-10 py-4 font-bold tracking-tight hover:bg-gray-800 transition-colors">
                  Começar Agora
                </Link>
              </div>
            </div>  
          </div>
        </section>
  );
};