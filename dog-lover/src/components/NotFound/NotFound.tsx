import { Link } from 'react-router-dom';
import { SadFaceIcon } from '../../assets';

const NotFound = () => {
  return (
    <div className="flex flex-col justify-center items-center h-[calc(100vh-101px)] text-amber-700/50">
      <h1 className="text-3xl font-extrabold">Error. Dogs not found!</h1>
      <SadFaceIcon />
      <p className="text-2xl font-bold">It seems like you've got lost.</p>
      <Link
        to="/"
        className="mt-2 text-xl font-bold text-amber-700/75 border-b-2 border-amber-700/75 transition-colors hover:border-transparent"
      >
        Get back home!
      </Link>
    </div>
  );
};

export default NotFound;
