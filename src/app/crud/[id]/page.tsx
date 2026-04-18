'use client';

import { useEffect } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useCrudStore } from '@/store/useCrudStore';
import { MovieFormTemplate } from '@/components/templates/MovieFormTemplate';

export default function EditMoviePage() {
  const { id } = useParams();
  const router = useRouter();
  const { movies } = useCrudStore();

  const movie = movies.find(m => String(m.id) === String(id));

  useEffect(() => {
    if (!movie) {
      router.push('/crud');
    }
  }, [movie, router]);

  if (!movie) return null;

  return (
    <MovieFormTemplate
      title="Editar Filme"
      initialData={movie}
    />
  );
}