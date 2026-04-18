'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useCrudStore, Movie } from '@/store/useCrudStore';
import { useAuthStore } from '@/store/useAuthStore';
import { Input } from '../atoms/Input';
import { Button } from '../atoms/Button';

interface MovieFormProps {
  initialData?: Movie;
}

export const MovieForm = ({ initialData }: MovieFormProps) => {
  const router = useRouter();
  const { addMovie, updateMovie } = useCrudStore();
  const { user } = useAuthStore();

  const isEditing = !!initialData;


  const [title, setTitle] = useState(initialData?.title || '');
  const [genre, setGenre] = useState(initialData?.genre || '');
  const [year, setYear] = useState(initialData?.year?.toString() || '');
  const [status, setStatus] = useState<'Assistido' | 'Para Assistir'>(
    initialData?.status || 'Para Assistir'
  );
  const [watchedDate, setWatchedDate] = useState(
    initialData?.watchedDate || ''
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      title,
      genre,
      year: Number(year),
      status,
      watchedDate: status === 'Assistido' ? watchedDate : undefined
    };

    if (isEditing && initialData) {
      updateMovie(initialData.id, payload);
    } else {
      addMovie(payload, user?.email || 'desconhecido');
    }

    router.push('/crud');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 w-full max-w-xl bg-white p-8 border border-gray-100 shadow-sm"
    >

      <div className="space-y-2">
        <label className="text-[10px] uppercase font-bold text-gray-500">
          Título do Filme
        </label>

        <Input
          type="text"
          required
          value={title}
          onChange={(e: any) => setTitle(e.target.value)}
          placeholder="Ex: Interstellar"
          className="border-b border-gray-300 bg-transparent px-0"
        />
      </div>


      <div className="space-y-2">
        <label className="text-[10px] uppercase font-bold text-gray-500">
          Género
        </label>

        <Input
          type="text"
          required
          value={genre}
          onChange={(e: any) => setGenre(e.target.value.toUpperCase())}
          placeholder="Ex: SCI-FI"
          className="border-b border-gray-300 bg-transparent px-0"
        />
      </div>


      <div className="space-y-2">
        <label className="text-[10px] uppercase font-bold text-gray-500">
          Ano
        </label>

        <Input
          type="number"
          required
          min={1888}
          max={new Date().getFullYear() + 5}
          value={year}
          onChange={(e: any) => setYear(e.target.value)}
          placeholder="Ex: 2014"
          className="border-b border-gray-300 bg-transparent px-0"
        />
      </div>


      <div className="space-y-2">
        <label className="text-[10px] uppercase font-bold text-gray-500">
          Estado
        </label>

        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => setStatus('Assistido')}
            className={`flex-1 py-3 text-xs font-bold uppercase border ${
              status === 'Assistido'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-500'
            }`}
          >
            Assistido
          </button>

          <button
            type="button"
            onClick={() => {
              setStatus('Para Assistir');
              setWatchedDate('');
            }}
            className={`flex-1 py-3 text-xs font-bold uppercase border ${
              status === 'Para Assistir'
                ? 'bg-black text-white'
                : 'bg-gray-100 text-gray-500'
            }`}
          >
            Para Assistir
          </button>
        </div>
      </div>


      {status === 'Assistido' && (
        <div className="space-y-2">
          <label className="text-[10px] uppercase font-bold text-gray-500">
            Data de Visualização
          </label>

          <Input
            type="date"
            required
            value={watchedDate}
            onChange={(e: any) => setWatchedDate(e.target.value)}
            className="border-b border-gray-300 bg-transparent px-0"
          />
        </div>
      )}

      <div className="flex gap-4 pt-6">
        <Button
          type="button"
          onClick={() => router.push('/crud')}
          className="w-full bg-gray-200 text-black"
        >
          Cancelar
        </Button>

        <Button
          type="submit"
          className="w-full bg-black text-white"
        >
          {isEditing ? 'Salvar' : 'Adicionar'}
        </Button>
      </div>
    </form>
  );
};