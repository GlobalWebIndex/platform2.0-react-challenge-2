import RandomDogsMain from '../../components/random-dogs-main/RandomDogsMain';
import HomeTitle from '../../components/home-title/HomeTitle';
const Home = () => {

      return(
        <>
        <div className='home-page-container'>
          <HomeTitle/>
          <RandomDogsMain />
        </div>
        </>
      );
      
    };
    
    export default Home;