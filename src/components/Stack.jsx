import { motion, useScroll, useTransform } from "framer-motion";
import { items } from "../constants";

const Stack = () => {

// Tracks scroll prosition
const { scrollYProgress } = useScroll();

//   Creates Transformations for opacity and translateY position
const opacity = useTransform(scrollYProgress, [0, .3], [0, 1]);
const translateY = useTransform(scrollYProgress, [0, 0.3], [200, 0]);


  return (
      
      <motion.div style={{ opacity, translateY }}>
      <div className="flex wrap gap">
        {items.map((item) => (
          <motion.div
            key={item.id}
            style={{ opacity, translateY }}
            transition={{ ease: 'linear'}}
            className="stack-container flex-center justify-center flex-column text-gray"
          >
            <img src={item.image} alt={item.name} />
            <h3 className="text-gray text-sm">{item.name}</h3>
          </motion.div>
        ))}
        ;
      </div>
    </motion.div>
  );
};

export default Stack;
