import CtaBtn from "../components/ui/CtaButton";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="--home" className="flex-center justify-center full-width full-height flex-column">
      <div className="flex-column flex-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            ease: "linear",
            duration: 1,
            delay: 0.2,
          }}
        >
          <h1 className="heading-height hero-txt-efx">TEVIN CAMPBELL</h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: -9 }}
          animate={{ opacity: 1, y: 10 }}
          transition={{ delay: 0.5, duration: 1, ease: "linear" }}
        >
          <p id="byLine" className="text-sm text-gray">
            Frontend Developer building what I love, one project at a time.
          </p>
        </motion.div>
      </div>

      <div id="cta" className="flex-center reg-gap">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1, ease: "linear" }}
        >
          <div id="--cta-container" className="cto-container flex-center justify-between">
            <h3 id="cta-text" className="text-white">
              See Work
            </h3>
            <CtaBtn />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
