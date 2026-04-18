export const MovieCard = ({ movie, onView, onDelete }: any) => {
  return (
    <div className="bg-[#eeeeee] p-6 flex gap-6 hover:bg-[#e8e8e8] transition">

      <div className="flex flex-col justify-between w-full">

        <div>
          <div className="flex gap-2 mb-1 items-center">
            <span className="text-[10px] bg-black text-white px-2">
              {movie.genre}
            </span>

            <span className="text-[10px] text-gray-500">
              {movie.year}
            </span>

            <span className="ml-auto text-[10px] px-2 font-bold">
              {movie.status}
            </span>
          </div>

          <h3 className="text-[40px]  font-bold" >
            {movie.title}
          </h3>
        </div>

        <div className="flex gap-4">
          <button onClick={onView}>
            Editar
          </button>
          <button onClick={onDelete} className="text-red-600">
            Apagar
          </button>
        </div>

      </div>
    </div>
  );
};