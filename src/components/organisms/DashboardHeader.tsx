import Link from 'next/link';

export const DashboardHeader = ({ user }: any) => {
  return (
    <section className="mb-12">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tighter text-black mb-1">
            {user?.name}
          </h1>

          <p className="text-gray-500">{user?.email}</p>
        </div>

        <Link
          href="/crud/new"
          className="bg-black text-white px-6 py-3 text-sm font-bold uppercase tracking-widest">
          Adicionar Filme
        </Link>

      </div>
    </section>
  );
};