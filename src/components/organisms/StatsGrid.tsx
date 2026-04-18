import { StatCard } from '../molecules/StatCard';

export const StatsGrid = ({
  totalMovies,
  watchedMovies,
  toWatchMovies,
  completionRate
}: any) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-1 mb-12">
      
      <StatCard
        title="Total na Lista"
        value={totalMovies}
        sub="Filmes catalogados"
      />

      <StatCard
        title="Já Assistidos"
        value={watchedMovies}
        sub="Sessões concluídas"
      />

      <StatCard
        title="Para Assistir"
        value={toWatchMovies}
        sub="Na fila de espera"
      />

      <StatCard
        title="Taxa de Conclusão"
        value={`${completionRate}%`}
        isProgress
        progress={completionRate}
      />
    </div>
  );
};