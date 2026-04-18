'use client';

import { use } from 'react'; // 1. Importe o 'use' do React
import { useCrudStore } from '@/store/useCrudStore';
import { MovieForm } from '@/components/organisms/MovieForm';
import { notFound } from 'next/navigation';
import Link from 'next/link';

// 2. Atualize a tipagem do params para Promise
export default function EditMoviePage({ params }: { params: Promise<{ id: string }> }) {
  // 3. Desempacote a Promise
  const resolvedParams = use(params);
  
  const { movies } = useCrudStore();
  
  // 4. Use o resolvedParams.id
  const movieToEdit = movies.find((m) => m.id === resolvedParams.id);

  if (!movieToEdit) {
    return notFound();
  }

  return (
    <div className="bg-[#f9f9f9] text-[#1a1c1c] min-h-screen font-sans">
      <nav className="fixed top-0 w-full z-50 bg-[#ffffffcc] backdrop-blur-xl border-b border-[#dadada]">
        <div className="flex justify-between items-center px-8 h-16 max-w-full mx-auto">
          <Link href="/" className="text-xl font-bold tracking-tighter uppercase text-gray-900">Architect</Link>
          <div className="flex gap-6">
            <Link href={`/crud/${movieToEdit.id}`} className="text-gray-500 font-medium hover:text-black transition-colors">
              Back to Details
            </Link>
          </div>
        </div>
      </nav>

      <main className="pt-32 pb-12 px-8 max-w-7xl mx-auto flex flex-col items-center">
        <div className="w-full max-w-xl">
          <header className="mb-10 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-gray-500 mb-2">
              Database Modification
            </p>
            <h1 className="text-4xl font-extrabold tracking-tighter text-black">
              Editing: {movieToEdit.title}
            </h1>
          </header>

          <MovieForm initialData={movieToEdit} />
          
        </div>
      </main>
    </div>
  );
}