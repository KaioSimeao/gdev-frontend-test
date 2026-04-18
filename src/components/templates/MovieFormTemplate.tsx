'use client';

import { FormHeader } from '../organisms/FormHeader';
import { MovieForm } from '@/components/organisms/MovieForm';

interface Props {
  title: string;
  initialData?: any;
}

export const MovieFormTemplate = ({ title, initialData }: Props) => {
  return (
    <div className="bg-[#f9f9f9] min-h-screen">

      <FormHeader />

      <main className="pt-32 pb-12 px-8 max-w-7xl mx-auto flex flex-col items-center">

        <div className="w-full max-w-xl">

          <header className="mb-10 text-center">
            <h1 className="text-4xl font-extrabold tracking-tighter">
              {title}
            </h1>
          </header>

          <MovieForm initialData={initialData} />

        </div>

      </main>
    </div>
  );
};