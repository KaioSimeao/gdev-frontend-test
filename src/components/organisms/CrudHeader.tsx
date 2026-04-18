import Link from 'next/link';

export const CrudHeader = () => {
  return (
    <header className="mb-12 flex justify-between items-end">

      <div>
        <h1 className="text-5xl font-bold">
          Filmes
        </h1>
      </div>

      <Link
        href="/crud/new"
        className="flex items-center gap-2 bg-black text-white px-6 py-4">
        Adicionar Filme
      </Link>

    </header>
  );
};