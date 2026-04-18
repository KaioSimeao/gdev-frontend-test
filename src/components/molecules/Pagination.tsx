export const Pagination = ({
  currentPage,
  totalPages,
  setCurrentPage,
  totalItems,
  currentItems
}: any) => {
  return (
    <footer className="mt-12 flex justify-between items-center">

      <p className="text-sm text-gray-500">
        Mostrando {currentItems} of {totalItems}
      </p>

      <div className="flex gap-2">

        <button
          onClick={() => setCurrentPage((p: number) => Math.max(1, p - 1))}>
            Anterior
        </button>

        <span>Pagina {currentPage} de {totalPages}</span>

        <button
          onClick={() => setCurrentPage((p: number) => Math.min(totalPages, p + 1))}>
            Proximo
        </button>

      </div>
    </footer>
  );
};