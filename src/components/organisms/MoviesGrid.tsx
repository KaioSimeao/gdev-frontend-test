import { MovieCard } from '../molecules/MovieCard';

export const MoviesGrid = ({ movies, router, deleteMovie }: any) => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1">
      {movies.map((movie: any) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          onView={() => router.push(`/crud/${movie.id}`)}
          onDelete={() => deleteMovie(movie.id)}
        />
      ))}
    </section>
  );
};