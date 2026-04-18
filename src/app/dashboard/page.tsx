'use client';

import { useEffect, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/useAuthStore';
import { useCrudStore } from '@/store/useCrudStore';
import { DashboardTemplate } from '@/components/templates/DashBoardTemplate';

export default function DashboardPage() {
  const router = useRouter();
  const { isAuthenticated, user } = useAuthStore();
  const { movies } = useCrudStore();

  useEffect(() => {
    if (!isAuthenticated) router.push('/login');
  }, [isAuthenticated, router]);

  const userMovies = useMemo(
    () => movies.filter(m => m.ownerEmail === user?.email),
    [movies, user]
  );

  const totalMovies = userMovies.length;
  const watchedMovies = userMovies.filter(m => m.status === 'Assistido').length;
  const toWatchMovies = userMovies.filter(m => m.status === 'Para Assistir').length;

  const completionRate =
    totalMovies > 0
      ? Math.round((watchedMovies / totalMovies) * 100)
      : 0;

  if (!isAuthenticated) return null;

  return (
    <div className='bg-[#f9f9f9] text-[#1a1c1c] min-h-screen font-sans'>
      <DashboardTemplate
      user={user}
      totalMovies={totalMovies}
      watchedMovies={watchedMovies}
      toWatchMovies={toWatchMovies}
      completionRate={completionRate}
      movies={userMovies}
    />
    </div>
    
  );
}