import { InfoCard } from '../molecules/InfoCard';

export function InfoCardsSection() {
  return (
    <section className="py-32 bg-[#f3f3f3]">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <InfoCard 
            number="01" 
            title="Funcionalidades Principais" 
            description="Descubra como acompanhar seus filmes de forma simples, organizada e inteligente." 
          />
          <InfoCard 
            number="02" 
            title="Biblioteca Centralizada" 
            description="Todos os seus filmes em um só lugar. Organize por gênero, ano e status com total controle." 
          />
          <InfoCard 
            number="03" 
            title="Controle de Progresso" 
            description="Saiba exatamente o que já assistiu e o que ainda está na sua lista. Nunca mais perca um filme." 
          />
        </div>
      </div>
    </section>
  );
}