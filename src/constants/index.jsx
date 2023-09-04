import {
	audit,
	blockchain,
	mobile,
	web,
	c,
	chainlink,
	cpp,
	csharp,
	css,
	ethereum,
	ethersjs,
	figma,
	git,
	hardhat,
	html,
	java,
	javascript,
	jquery,
	json,
	moralis,
	nextjs,
	reactjs,
	redux,
	solidity,
	sql,
	typescript,
	unity,
	web3js,
	logo,
	alight,
	terpena,
	vcst,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	// {
	// 	id: "tech",
	// 	title: "Technologies",
	// },
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: (
			<p>
				Web
				<br />
				Developer
			</p>
		),
		icon: web,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
	{
		title: "Blockchain Developer",
		icon: blockchain,
	},
	{
		title: "Smart Contract Auditor",
		icon: audit,
	},
];

const technologies = [
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Next JS",
		icon: nextjs,
	},
	{
		name: "Redux",
		icon: redux,
	},
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "Ethereum",
		icon: ethereum,
	},
	{
		name: "Solidity",
		icon: solidity,
	},
	{
		name: "Web3 JS",
		icon: web3js,
	},
	{
		name: "Ethers JS",
		icon: ethersjs,
	},
	{
		name: "Hardhat",
		icon: hardhat,
	},
	{
		name: "Chainlink",
		icon: chainlink,
	},
	{
		name: "Moralis",
		icon: moralis,
	},
	{
		name: "Unity 3D",
		icon: unity,
	},
	{
		name: "C#",
		icon: csharp,
	},
	{
		name: "C++",
		icon: cpp,
	},
	{
		name: "C",
		icon: c,
	},
	{
		name: "Java",
		icon: java,
	},
	{
		name: "SQL",
		icon: sql,
	},
	{
		name: "JSON",
		icon: json,
	},
	{
		name: "jQuery",
		icon: jquery,
	},
	{
		name: "Git",
		icon: git,
	},
	{
		name: "Figma",
		icon: figma,
	},
];

const experiences = [
	{
		title: "Full-Stack Web3 Developer",
		company_name: "Remote Work",
		icon: logo,
		iconBg: "#383E56",
		date: "July 2022 - Present",
		points: [
			"Developed a cutting-edge NFT Marketplace integrating blockchain tech for global artist-collector connections. Created a secure platform for digital art enthusiasts.",
			"Created GamETH Raffle with blockchain, offering seamless raffle participation via cryptocurrency on Sepolia testnet. Built fairness with chainlink & smart contracts-powered winner selection.",
			"Created and managed a fundamental DeFi project utilizing Aave protocol, showcasing skill in asset handling through smart contracts and blockchain integration.",
			"Replicated Kickstarter-like crowdfunding on Rinkeby testnet via Solidity and Web3, enabling users to initiate, fund, and manage campaigns.",
		],
	},
	{
		title: "Full-Stack Developer",
		company_name: "Alight.EE",
		icon: alight,
		iconBg: "#E6DEDD",
		date: "Nov 2021 - Mar 2023",
		points: [
			"Developed an innovative social media and project management app for Android and iOS. Leveraging my skills, I ensured a seamless cross-platform experience, catering to project management needs while facilitating reviews of construction and real estate companies.",
			"Led the development efforts of diverse SharePoint websites, each serving unique business needs.",
			"Designed and implemented smart questionnaires tailored for business partners, enhancing data collection and analysis.",
			"Engineered an employee expenses settlement system, promoting transparency and accuracy in expense processing.",
		],
	},
	{
		title: "Full-Stack Developer",
		company_name: "VCST Automotive Production Alba",
		icon: vcst,
		iconBg: "#383E56",
		date: "May 2020 - Oct 2021",
		points: [
			"Created a downtime monitoring system, revamping issue resolution. Improved data collection and reporting for machine setups and problems, aiding production management.",
			"Innovated an employee training app, streamlining requests and approvals. Integrated HR data and generated reports for better tracking.",
			"Headed engineering optimization, automating workflows, and enhancing data utilization. Employed expertise to consolidate data, eliminate redundancy, and improve reporting for time-saving operational enhancements.",
		],
	},
	{
		title: "Full-Stack Developer",
		company_name: "Chemical Industry Company",
		icon: terpena,
		iconBg: "#E6DEDD",
		date: "Apr 2016 - Feb 2020",
		points: [
			"Crafted an app for company entry/exit requests, enabling diverse ticket submissions. Streamlined approval by superiors and provided detailed reports to the GM for accountability.",
			"Revamped workflows of all departments via smart PDF templates, dynamically populated using a database. Boosted efficiency and accuracy in document creation and management.",
		],
	},
];

export { services, technologies, experiences };
