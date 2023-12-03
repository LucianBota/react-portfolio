import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const ServiceCard = ({ index, title, icon }) => (
	<Tilt
		className="xs:w-[250px] w-full"
		options={{
			max: 45,
			scale: 1,
			speed: 450,
		}}
	>
		<motion.div
			variants={fadeIn("right", "spring", index * 0.5, 0.75)}
			className="w-full purple-pink-gradient p-[1px] rounded-[20px] shadow-card"
		>
			<div
				options={{
					max: 45,
					scale: 1,
					speed: 450,
				}}
				className="bg-tertiary rounded-[20px] py-5 px-11 min-h-[280px] flex justify-evenly items-center flex-col"
			>
				<img
					src={icon}
					alt="web-development"
					className="w-16 h-16 object-contain"
				/>

				<h3 className="text-white text-[20px] font-bold text-center">
					{title}
				</h3>
			</div>
		</motion.div>
	</Tilt>
);

const About = () => {
	return (
		<div>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-4xl leading-[30px] sm:text-justify"
			>
				I am a dedicated full-stack software developer, committed to helping companies optimize and automate their workflows. From expert software development to tailored solutions and automation excellence, I specialize in enhancing efficiency and driving innovation.
				<br /><br />
				Let's transform your business together for a brighter, more streamlined future.
			</motion.p>

			<div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(About, "about");
