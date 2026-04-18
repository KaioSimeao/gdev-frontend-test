import { MoviesTimelineChart } from '@/components/organisms/MoviesTimelineChart';
import { MoviesGenrePieChart } from '@/components/organisms/MoviesGenrePieChart';
import { MoviesStatusDoughnutChart } from '@/components/organisms/MoviesStatusDoughnutChart';

import type { Movie } from '@/store/useCrudStore';

interface ChartsSectionProps {
  movies: Movie[];
}

export const ChartsSection = ({ movies }: ChartsSectionProps) => {
  return (
    <>
      <div className="bg-white p-8 border shadow-sm mb-8">
        <h3 className="text-[10px] uppercase text-gray-500 mb-2">
          Linha do Tempo de Visualizações
        </h3>

        <MoviesTimelineChart movies={movies} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

        <div className="bg-white p-8 border shadow-sm">
          <h3 className="text-[10px] uppercase text-gray-500 mb-2">
            Distribuição por Género
          </h3>
          <MoviesGenrePieChart movies={movies} />
        </div>

        <div className="bg-white p-8 border shadow-sm">
          <h3 className="text-[10px] uppercase text-gray-500 mb-2">
            Progresso da Biblioteca
          </h3>
          <MoviesStatusDoughnutChart movies={movies} />
        </div>

      </div>
    </>
  );
};