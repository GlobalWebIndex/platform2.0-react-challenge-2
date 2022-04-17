import { motion } from "framer-motion";

const HomeTitle =() =>{
    return(
        <motion.div className="main-title-container"
        initial={{x:-100, opacity:0}}
        animate={{x:0, opacity:1 }}
        transition={{duration: 1 , stiffness:120 }}
        >
            <h1 className="main-title-container--title">We love pets</h1>
            <h3 className="main-title-container--subtitle">Respect them as human beings</h3>
        </motion.div>
    );
}

export default HomeTitle;