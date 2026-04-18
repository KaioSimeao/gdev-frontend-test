'use client';

import { Movie } from '@/store/useCrudStore';
import { useRouter } from 'next/navigation';

interface MovieDetailsProps {
  movie: Movie;
}

export const MovieDetails = ({ movie }: MovieDetailsProps) => {
  const router = useRouter();

  return (
    <div className="w-full max-w-2xl bg-white border border-gray-100 shadow-sm overflow-hidden">
      {/* Cabeçalho do Card */}
      <div className="bg-black p-8">
        <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase">
          Titulo do Filme
        </span>
        <h2 className="text-3xl font-bold text-white tracking-tighter mt-2">
          {movie.title}
        </h2>
      </div>

      <div className="p-8 space-y-8">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <label className="block text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-1">
              Genero / Categoria
            </label>
            <p className="text-lg font-medium text-black">{movie.genre}</p>
          </div>
          <div>
            <label className="block text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-1">
              Ano de Lançamento
            </label>
            <p className="text-lg font-medium text-black">{movie.year}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div>
            <label className="block text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-1">
             ID
            </label>
            <p className="font-mono text-sm text-gray-400">{movie.id}</p>
          </div>
          <div>
            <label className="block text-[10px] uppercase font-bold text-gray-500 tracking-widest mb-1">
              Estado
            </label>
            <p className="font-mono text-sm text-gray-400">{movie.status}</p>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-100 flex gap-4">
          <button 
            onClick={() => router.push(`/crud/${movie.id}/edit`)}
            className="flex-1 bg-black text-white py-4 text-xs font-bold uppercase tracking-widest hover:bg-gray-800 transition-all"
          >
            Editar
          </button>
          <button 
            onClick={() => router.push('/crud')}
            className="flex-1 bg-[#eeeeee] text-black py-4 text-xs font-bold uppercase tracking-widest hover:bg-[#e2e2e2] transition-all"
          >
            Voltar
          </button>
        </div>
      </div>
    </div>
  );
};