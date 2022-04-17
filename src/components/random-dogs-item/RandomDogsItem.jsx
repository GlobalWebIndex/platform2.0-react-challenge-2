import '../random-dogs-item/random-dogs-item.style.scss'
import { motion } from 'framer-motion';
import { useState} from "react";
const RandomDogItem = ({dogRandomImg}) =>{
  const [isOpen, setOpen] = useState(false);



    return(
        <div className='main-image-list-container__singe-image'>
          <img src={dogRandomImg}/>     
      </div>
      
    );
}

export default RandomDogItem