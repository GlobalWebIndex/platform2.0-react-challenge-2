import { ChangeEvent } from 'react';
import { FilterIcon } from '../../assets';

const BreedFilter = ({
  filter,
  onSetFilter,
}: {
  filter: string;
  onSetFilter: (e: ChangeEvent<HTMLInputElement>) => void;
}) => {
  return (
    <div className="p-2">
      <label
        htmlFor="filter"
        className="relative block text-xl text-amber-700/50 transition-colors focus-within:text-amber-800"
      >
        <FilterIcon />
        <input
          onChange={onSetFilter}
          value={filter}
          type="text"
          name="filter"
          id="filter"
          autoComplete="off"
          className="w-full p-3 pl-14 rounded outline-none border-2 border-amber-700 text-amber-700 bg-amber-700/5 transition-colors placeholder:text-amber-700/50 hocus:border-amber-800 focus:placeholder:text-amber-700/25"
          placeholder="Filter dog breeds"
        />
      </label>
    </div>
  );
};

export default BreedFilter;
