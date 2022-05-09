import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '../../assets';

const BreedLink = ({ breed }: { breed: string }) => {
  return (
    <Link
      to={`/breeds/${breed}`}
      className="group flex items-center justify-center gap-x-2 px-8 py-3 rounded capitalize text-lg font-semibold text-amber-700 bg-amber-50 border-2 border-amber-700 transition-colors hocus:bg-amber-700 hocus:text-amber-50"
    >
      <span>View more {breed} images</span>
      <ArrowRightIcon />
    </Link>
  );
};

export default BreedLink;
