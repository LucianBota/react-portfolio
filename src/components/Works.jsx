import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Works = () => {
	return (
		<div className="-mb-10">
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} `}>My work</p>
				<h2 className={`${styles.sectionHeadText}`}>Projects.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className='mt-3 text-secondary text-[17px] max-w-4xl leading-[30px]'
			>
				The following software solutions showcases my skills and experience through
				real-world examples of my work. It reflects my
				ability to solve complex problems, work with different technologies,
				and manage projects effectively.
			</motion.p>
		</div>
	);
};

export default SectionWrapper(Works, "projects");