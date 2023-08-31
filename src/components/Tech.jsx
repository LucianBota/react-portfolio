import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";

const Coin = ({ icon }) => {
	return (
		<Tilt
			className="p-4 bg-gradient-to-r from-gray-300 to-white rounded-full"
			options={{
				max: 45,
				scale: 1,
				speed: 450,
			}}
		>
			<div
				className={`h-20 w-20 bg-contain bg-no-repeat`}
				style={{ backgroundImage: `url(${icon})` }}
			/>
		</Tilt>
	);
};

const Tech = () => {
	return (
		<div>
			<motion.div variants={textVariant()}>
				<p className={`${styles.sectionSubText} text-center`}>
					My strongest skills
				</p>
				<h2 className={`${styles.sectionHeadText} text-center`}>
					Technologies.
				</h2>
			</motion.div>

			<div className="mt-20 flex flex-row flex-wrap justify-center gap-10">
				{technologies.map((technology, index) => (
					<motion.div
						className="flex flex-col items-center"
						variants={fadeIn("up", "spring", index * 0.1, 0.75)}
						key={technology.name}
					>
						<Coin icon={technology.icon} />
						<p className="pt-2 text-secondary">{technology.name}</p>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default SectionWrapper(Tech, "tech");
