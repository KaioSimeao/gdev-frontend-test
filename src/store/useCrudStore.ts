import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Movie {
  id: string;
  title: string;
  genre: string;
  year: number;
  ownerEmail: string;
  status: 'Assistido' | 'Para Assistir';
  watchedDate?: string;
}

interface CrudState {
  movies: Movie[];
  addMovie: (movie: Omit<Movie, 'id' | 'ownerEmail'>, ownerEmail: string) => void;
  updateMovie: (id: string, updatedData: Partial<Movie>) => void;
  deleteMovie: (id: string) => void;
}

export const useCrudStore = create<CrudState>()(
  persist(
    (set) => ({
      movies: [],

      addMovie: (movieData, ownerEmail) => set((state) => ({
        movies: [...state.movies, { ...movieData, id: Date.now().toString(), ownerEmail }],
      })),

      updateMovie: (id, updatedData) => set((state) => ({
        movies: state.movies.map((movie) => 
          movie.id === id ? { ...movie, ...updatedData } : movie
        )
      })),

      deleteMovie: (id) => set((state) => ({
        movies: state.movies.filter((movie) => movie.id !== id)
      })),
    }),
    {
      name: 'architect-crud-storage',
    }
  )
);