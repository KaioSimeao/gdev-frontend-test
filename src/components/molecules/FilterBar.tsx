import { Input } from '../atoms/Input';
import { Select } from '../atoms/Select';

export const FilterBar = ({
  search,
  setSearch,
  eraFilter,
  setEraFilter,
  itemsPerPage,
  setItemsPerPage,
  setCurrentPage
}: any) => {
  return (
    <section className="mb-8 p-6 bg-[#eeeeee] flex flex-col lg:flex-row gap-6">

      <div className="flex-1">
        <label className="text-[10px] uppercase text-gray-500 block mb-2">
          Procure por um título
        </label>

        <div className="relative">

          <Input
            value={search}
            onChange={(e: any) => {
              setSearch(e.target.value);
              setCurrentPage(1);
            }}
            className="pl-12"
            placeholder="Digite para buscar..."
          />
        </div>
      </div>

      <div className="w-full lg:w-48">
        <label className="text-[10px] uppercase text-gray-500 block mb-2">
          Estreia
        </label>

        <Select
          value={eraFilter}
          onChange={(e: any) => {
            setEraFilter(e.target.value);
            setCurrentPage(1);
          }}
        >
          <option>Todas as Datas</option>
          <option value="2020s">2020s</option>
          <option value="2010s">2010s</option>
          <option value="2000s">2000s</option>
          <option value="classic">Classicos</option>
        </Select>
      </div>

      <div className="w-full lg:w-48">
        <label className="text-[10px] uppercase text-gray-500 block mb-2">
          Items por página
        </label>

        <Select
          value={itemsPerPage}
          onChange={(e: any) => {
            setItemsPerPage(Number(e.target.value));
            setCurrentPage(1);
          }}
        >
          <option value={6}>6</option>
          <option value={12}>12</option>
          <option value={24}>24</option>
        </Select>
      </div>
    </section>
  );
};