import { useState, useEffect } from "react";
import RandomDogItem from "../random-dogs-item/RandomDogsItem"; 
import { api } from "../../utils/api";
import { motion } from "framer-motion";

const RandomDogsMain = (props) =>{
   const [randomDogs , setRandomDogs] = useState([]);
  
   useEffect( () => {
     fetchDogs();
   },[])

   const fetchDogs = async () => {
    const url = "https://dog.ceo/api/breeds/image/random/8"   
    const data = await api(url,"get");
    const dogsArray = data.message;
    setRandomDogs(dogsArray);
   }

    return (
      
      <>
    <motion.div className='main-image-list-container'
    initial={{y:100 , opacity:0}}
    animate={{y:0 , opacity:1}}
    transition={{delay:1.2 , duration:1.1 }}
    
    >
     {randomDogs?.map((randomImage,index) =>(
       <RandomDogItem key={index} dogRandomImg={randomImage} />
     ))}    
    </motion.div>
    </>  
    )
}

export default RandomDogsMain