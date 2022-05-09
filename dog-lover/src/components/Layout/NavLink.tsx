import { Link } from 'react-router-dom';
import clsx from 'clsx';
import useBreedLocation from '../../hooks/useBreedLocation';
import { HeartIcon } from '../../assets';

const NavLink = ({ pathName }: { pathName: string }) => {
  const { current } = useBreedLocation();

  return (
    <>
      {pathName !== '/' && (
        <span className="text-xl text-amber-700/50 before:content-['/'] md:text-3xl" />
      )}
      <Link
        to={pathName}
        aria-label={`Go to ${
          pathName === '/' ? 'Home' : pathName.split('/').pop()
        } page`}
        className={clsx(
          current === pathName ? ' bg-amber-700 text-amber-50' : '',
          'capitalize py-2 px-2 rounded text-amber-700 transition-colors duration-100 text-ellipsis whitespace-nowrap overflow-hidden hocus:bg-amber-700 hocus:text-amber-50 md:px-4'
        )}
      >
        {pathName === '/' ? (
          <HeartIcon />
        ) : pathName === '/breeds' ? (
          'breeds'
        ) : (
          pathName.split('/').pop()
        )}
      </Link>
    </>
  );
};

export default NavLink;
