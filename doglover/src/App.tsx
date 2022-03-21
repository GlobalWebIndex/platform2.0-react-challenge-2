import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navigation from './components/Navigation';
import Home from './components/Home';
import AllBreeds from './components/AllBreeds';
import Breed from './components/Breed';
import RandomImages from './components/RandomImages';


function App() {
  return (
    <Router>
        <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/images' element={<RandomImages />} />
        <Route path='/breeds' element={<AllBreeds />} />
        <Route path='/breeds/:breedId' element={<Breed />} />
      </Routes>
    </Router>
  );
}

export default App;
