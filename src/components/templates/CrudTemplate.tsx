'use client';

import { TopNavBar } from '@/components/organisms/TopNavBar';
import { CrudHeader } from '../organisms/CrudHeader';
import { FilterBar } from '../molecules/FilterBar';
import { MoviesGrid } from '../organisms/MoviesGrid';
import { Pagination } from '../molecules/Pagination';
import { Footer } from '../organisms/Footer';

export const CrudTemplate = (props: any) => {
  const {
    setCurrentPage,
    movies,
    router,
    deleteMovie,
    totalPages,
    currentPage,
    totalItems
  } = props;

  return (
    <div className="bg-[#f9f9f9] min-h-screen">

      <TopNavBar />

      <main className="pt-32 px-8 max-w-[1440px] mx-auto">

        <CrudHeader />

        <FilterBar {...props} />

        {movies.length > 0 ? (
          <MoviesGrid
            movies={movies}
            router={router}
            deleteMovie={deleteMovie}
          />
        ) : (
          <div className="text-center py-32">
            Nehum filme encontrado. Tente ajustar seus filtros ou adicione novos filmes!
          </div>
        )}

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            setCurrentPage={setCurrentPage}
            totalItems={totalItems}
            currentItems={movies.length}
          />
        )}

        <Footer/>

      </main>
    </div>
  );
};