'use client';

import { TopNavBar } from '@/components/organisms/TopNavBar';
import { DashboardHeader } from '../organisms/DashboardHeader';
import { StatsGrid } from '../organisms/StatsGrid';
import { ChartsSection } from '../organisms/ChartsSection';
import { Footer } from '../organisms/Footer';

export const DashboardTemplate = ({
  user,
  totalMovies,
  watchedMovies,
  toWatchMovies,
  completionRate,
  movies
}: any) => {
  return (
    <div className="bg-[#f9f9f9] min-h-screen">

      <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b">
        <TopNavBar />
      </header>

      <main className="pt-24 pb-12 px-8 max-w-7xl mx-auto">

        <DashboardHeader user={user} />

        <StatsGrid
          totalMovies={totalMovies}
          watchedMovies={watchedMovies}
          toWatchMovies={toWatchMovies}
          completionRate={completionRate}
        />

        <ChartsSection movies={movies} />

        <Footer/>

      </main>
    </div>
  );
};