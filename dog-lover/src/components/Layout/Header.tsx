import useBreedLocation from '../../hooks/useBreedLocation';
import { NavLink } from './';

const Header = () => {
  const { breed, subBreed } = useBreedLocation();

  return (
    <header className="max-w-screen-xl mx-auto px-1 py-3.5 sticky top-0 z-50 bg-amber-50 border-b-[1px] border-amber-700 md:py-5">
      <nav className="flex justify-start items-center gap-x-2 text-lg font-bold rounded bg-amber-700/5 max-w-max md:gap-x-4 md:text-xl">
        <NavLink pathName="/" />
        <NavLink pathName="/breeds" />
        {breed && <NavLink pathName={`/breeds/${breed}`} />}
        {breed && subBreed && (
          <NavLink pathName={`/breeds/${breed}/${subBreed}`} />
        )}
      </nav>
    </header>
  );
};

export default Header;
