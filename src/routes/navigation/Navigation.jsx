import { Outlet, Link } from "react-router-dom";
import { ReactComponent as DogLogo } from "../../assets/logoDog.svg";

const Navigation = () =>{
    return(
      <>
        <div className="navigation">
            <Link to='/'>
            <div className="navigation--logo">
                <DogLogo/> 
            </div>
            </Link>
            <nav className="navigation__links-container">
                <Link className="navigation__links-container--link" to='/'>
                    Home
                </Link>
                <Link className="navigation__links-container--link" to='/breeds'>
                    Breeds
                </Link>
            </nav>
        </div>
        <Outlet/>
        </>
    );
  }

  export default Navigation