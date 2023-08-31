import { useState } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import Circuit from "./circuit/Circuit";
import { fadeIn, staggerContainer } from "../utils/motion";
import { styles } from "../styles";

const Hero = () => {
  const [activeTextAnimation, setActiveTextAnimation] = useState(1);

  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={`relative w-full h-screen mx-auto`}
    >
      <div
        className={`absolute inset-0 max-w-7xl mx-auto ${styles.paddingX} flex sm:flex-row flex-col items-center sm:justify-between justify-center gap-5`}
      >
        <div className="sm:w-1/2 w-full">
          <h1 className={`${styles.heroHeadText} text-white`}>
            {activeTextAnimation == 1 ? (
              <TypeAnimation
                sequence={[
                  "",
                  1000,
                  "Hi! :)",
                  1000,
                  "Hi, I'm ",
                  0,
                  () => setActiveTextAnimation(2),
                ]}
              />
            ) : (
              <span>
                Hi, I'm{" "}
                <span className="text-[#915EFF]">
                  {activeTextAnimation == 2 ? (
                    <TypeAnimation
                      sequence={["Lucian", 0, () => setActiveTextAnimation(3)]}
                    />
                  ) : (
                    "Lucian"
                  )}
                </span>
              </span>
            )}
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            {activeTextAnimation == 3 ? (
              <TypeAnimation
                sequence={[
                  "",
                  1000,
                  "I have extensive experience in building full-stack web3 apps",
                  0,
                  () => setActiveTextAnimation(0),
                ]}
              />
            ) : activeTextAnimation == 0 ? (
              "I have extensive experience in building full-stack web3 apps"
            ) : null}
          </p>
        </div>

        <motion.div variants={fadeIn("", "", 0.5, 1)} className="sm:w-1/2">
          <div>
            <Circuit />
          </div>
        </motion.div>
      </div>

      <div className="absolute xs:bottom-10 bottom-16 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </motion.section>
  );
};

export default Hero;
