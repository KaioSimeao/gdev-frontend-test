'use client';

import { useState, useMemo, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useCrudStore } from '@/store/useCrudStore';
import { useAuthStore } from '@/store/useAuthStore';
import { CrudTemplate } from '@/components/templates/CrudTemplate'; 

export default function CrudPage() {
  const router = useRouter();
  const { movies, deleteMovie } = useCrudStore();
  const { user, isAuthenticated } = useAuthStore();


  const [search, setSearch] = useState('');
  const [eraFilter, setEraFilter] = useState('All Eras');
  const [itemsPerPage, setItemsPerPage] = useState(12);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    if (!isAuthenticated) router.push('/login');
  }, [isAuthenticated, router]);


  const filteredMovies = useMemo(() => {
    const userMovies = movies.filter(movie => movie.ownerEmail === user?.email);

    return userMovies.filter((movie) => {
      const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase());
      
      let matchesEra = true;
      if (eraFilter === '2020s') matchesEra = movie.year >= 2020;
      if (eraFilter === '2010s') matchesEra = movie.year >= 2010 && movie.year < 2020;
      if (eraFilter === '2000s') matchesEra = movie.year >= 2000 && movie.year < 2010;
      if (eraFilter === 'Classic') matchesEra = movie.year < 2000;

      return matchesSearch && matchesEra;
    });
  }, [movies, search, eraFilter, user?.email]);


  const totalItems = filteredMovies.length;
  const totalPages = Math.max(1, Math.ceil(totalItems / itemsPerPage));
  const safeCurrentPage = Math.min(currentPage, totalPages);
  const startIndex = (safeCurrentPage - 1) * itemsPerPage;
  

  const currentMovies = filteredMovies.slice(startIndex, startIndex + itemsPerPage);

  if (!isAuthenticated) return null;


  return (
    <div className='bg-[#f9f9f9] text-[#1a1c1c] min-h-screen font-sans'>
      <CrudTemplate
      search={search}
      setSearch={setSearch}
      eraFilter={eraFilter}
      setEraFilter={setEraFilter}
      itemsPerPage={itemsPerPage}
      setItemsPerPage={setItemsPerPage}
      currentPage={safeCurrentPage}
      setCurrentPage={setCurrentPage}
      movies={currentMovies}
      router={router}
      deleteMovie={deleteMovie}
      totalPages={totalPages}
      totalItems={totalItems}
    />
    </div>
  );
}