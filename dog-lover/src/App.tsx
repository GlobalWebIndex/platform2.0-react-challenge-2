import { Route, Routes } from 'react-router-dom';
import { SWRConfig } from 'swr';
import { DogBreedImages } from './components/DogBreedImages';
import { DogBreeds } from './components/DogBreeds';
import { Layout } from './components/Layout';
import { RandomDogs } from './components/RandomDogs';

function App() {
  return (
    <SWRConfig
      value={{
        fetcher: (url: string) => fetch(url).then((res) => res.json()),
        dedupingInterval: 600000,
        revalidateOnFocus: false,
      }}
    >
      <Layout>
        <Routes>
          <Route path="/" element={<RandomDogs />} />
          <Route path="/breeds" element={<DogBreeds />} />
          <Route path="/breeds/:breed" element={<DogBreedImages />} />
        </Routes>
      </Layout>
    </SWRConfig>
  );
}

export default App;
