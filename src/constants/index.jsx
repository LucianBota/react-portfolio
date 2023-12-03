import {
	audit,
	blockchain,
	database,
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
	backend,
	nda,
	rcdi,
	roulette,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "projects",
		title: "Projects",
	},
	{
		id: "work",
		title: "Experience",
	},
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
		title: "Database Architect",
		icon: database,
	},
	// {
	// 	title: "Smart Contract Auditor",
	// 	icon: audit,
	// },
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

const projects = [
	{
		name: "Basic ERP Solution",
		description:
			<span>A software that streamlined the company's document flow, including orders, invoices, price offers, and delivery notes. Before the ERP, manual processes led to errors and delays. With the system, I <b>automated order processing</b>, <b>ensured accurate invoicing</b>, and <b>seamlessly managed price offers</b>. The ERP improved communication between departments, optimizing delivery note creation and providing real-time visibility into inventory and order statuses. Overall, the ERP system <b>enhanced efficiency</b>, <b>reduced errors</b>, and <b>improved customer satisfaction</b>.</span>,
			tags: [
				{
				  name: "frontend",
				  color: "blue-text-gradient",
				},
				{
				  name: "backend",
				  color: "green-text-gradient",
				},
				{
				  name: "database",
				  color: "pink-text-gradient",
				},
			  ],
		image: nda,
	},
	{
		name: "Registrul Constructorilor",
		description:
			<span>An innovative social media and project management mobile application designed for both Android and iOS platforms. Your go-to solution for transparent insights in construction and real estate. Explore reviews, join a community for unfiltered feedback, and discover top-rated companies. <b>Solve industry challenges</b> by promoting transparency, ensuring quality, and empowering users.</span>,
			tags: [
				{
				  name: "frontend",
				  color: "blue-text-gradient",
				},
				{
				  name: "backend",
				  color: "green-text-gradient",
				},
				{
				  name: "database",
				  color: "pink-text-gradient",
				},
			  ],
		image: rcdi,
	},
	{
		name: "GamETH Roulette",
		description:
			<span>Players connect their Ethereum wallets for a seamless and secure gaming experience, thanks to smart contracts ensuring fair play and instant token transfers. Our platform guarantees over a <b>97% player win rate</b>—far surpassing the odds found in centralized casinos.</span>,
			tags: [
				{
				  name: "frontend",
				  color: "blue-text-gradient",
				},
				{
				  name: "backend",
				  color: "green-text-gradient",
				},
				{
				  name: "blockchain",
				  color: "pink-text-gradient",
				},
			  ],
		image: roulette,
		source_code_link: "https://github.com/LucianBota/scaffold-eth-2-gameth",
	},
	{
		name: "OEE + OLE Solution",
		description:
			<span>Enhance the production management's tracking of employee and machine performance. The system provided insights through weekly, periodical, and yearly reports, <b>optimizing operational efficiency</b>. Precise monitoring of machine productivity and employee efficiency led to <b>real-time adjustments</b> and <b>strategic decision-making</b>, enhancing transparency, accountability, and overall productivity.</span>,
			tags: [
				{
				  name: "frontend",
				  color: "blue-text-gradient",
				},
				{
				  name: "backend",
				  color: "green-text-gradient",
				},
				{
				  name: "database",
				  color: "pink-text-gradient",
				},
			  ],
		image: nda,
	},
	{
		name: "Downtime Monitoring Solution",
		description:
			<span><b>Significantly improved operations</b> in the engineering and production departments. The real-time tracking of machine issues allowed the engineering team to proactively address problems, reducing unplanned downtime. In production, the application's alerts enabled quick responses to malfunctions, <b>enhancing overall efficiency</b>. The data-driven insights facilitated informed decision-making, leading to a smoother and more reliable production process.</span>,
			tags: [
				{
				  name: "frontend",
				  color: "blue-text-gradient",
				},
				{
				  name: "backend",
				  color: "green-text-gradient",
				},
				{
				  name: "database",
				  color: "pink-text-gradient",
				},
			  ],
		image: nda,
	},
	{
		name: "Employee Bonus Calculation Solution",
		description:
			<span>Revolutionized bonus management, the system seamlessly automated calculations, <b>ensuring equitable distribution</b> within allocated budgets. Its user-friendly interface facilitated easy data input, while insightful reports empowered strategic decision-making, ultimately <b>elevating the efficiency and effectiveness</b> of the HR department.</span>,
			tags: [
				{
				  name: "frontend",
				  color: "blue-text-gradient",
				},
				{
				  name: "backend",
				  color: "green-text-gradient",
				},
				{
				  name: "database",
				  color: "pink-text-gradient",
				},
			  ],
		image: nda,
	},
	{
		name: "NFT Marketplace",
		description:
			<span>Cutting-edge NFT Marketplace, for connecting artists and collectors worldwide. Orchestrated the integration of blockchain technology, and web3 concepts to enable <b>seamless</b> buying, selling, and trading of unique digital assets.</span>,
			tags: [
				{
				  name: "backend",
				  color: "green-text-gradient",
				},
				{
				  name: "blockchain",
				  color: "pink-text-gradient",
				},
			  ],
		image: backend,
		source_code_link: "https://github.com/LucianBota/hardhat-nft-marketplace"
	},
	{
		name: "Basic DeFi",
		description:
			<span>A fundamental DeFi project utilizing Aave protocol, demonstrating the ability to programmatically handle asset borrowing, depositing, and repaying. Developed smart contracts and integrated blockchain technologies to create a <b>functional decentralized financial ecosystem</b>.</span>,
			tags: [
				{
				  name: "backend",
				  color: "green-text-gradient",
				},
				{
				  name: "blockchain",
				  color: "pink-text-gradient",
				},
			  ],
		image: backend,
		source_code_link: "https://github.com/LucianBota/hardhat-defi",
	},
	{
		name: "GamETH Raffle",
		description:
			<span>User-friendly application that enables participants to effortlessly engage in raffles using cryptocurrency on the Ethereum blockchain. Ensured <b>fairness and transparency</b> by implementing an automated winner selection mechanism powered by smart contracts.</span>,
			tags: [
				{
				  name: "backend",
				  color: "green-text-gradient",
				},
				{
				  name: "blockchain",
				  color: "pink-text-gradient",
				},
			  ],
		image: backend,
		source_code_link: "https://github.com/LucianBota/smartcontract-lottery",
	},
	{
		name: "Smart Questionnaires",
		description:
			<span>Multiple smart questionnaires that effortlessly capture valuable insights. With the collected data, the client company gains the leverage to optimize processes and make impactful, data-driven decisions, driving <b>enhanced efficiency and strategic refinement</b>.</span>,
			tags: [
				{
				  name: "frontend",
				  color: "blue-text-gradient",
				},
				{
				  name: "backend",
				  color: "green-text-gradient",
				},
				{
				  name: "database",
				  color: "pink-text-gradient",
				},
			  ],
		image: nda,
	},
	{
		name: "Employee Expenses Settlement Management Solution",
		description:
			<span>Revolutionized expense management, streamlining the entire process from submission to approval. This intuitive system <b>reduced administrative overhead</b>, <b>enhanced transparency</b>, and <b>accelerated reimbursement cycles</b>, providing organizations with newfound efficiency and financial control in managing expenses.</span>,
			tags: [
				{
				  name: "frontend",
				  color: "blue-text-gradient",
				},
				{
				  name: "backend",
				  color: "green-text-gradient",
				},
				{
				  name: "database",
				  color: "pink-text-gradient",
				},
			  ],
		image: nda,
	},
	{
		name: "Employee Trainings Management Solution",
		description:
			<span>Streamlining training processes, this application significantly boosted the HR department's efficiency. It provided centralized control over program planning, seamless communication, and comprehensive tracking. The user-friendly interface facilitated easy content management and reporting.</span>,
			tags: [
				{
				  name: "frontend",
				  color: "blue-text-gradient",
				},
				{
				  name: "backend",
				  color: "green-text-gradient",
				},
				{
				  name: "database",
				  color: "pink-text-gradient",
				},
			  ],
		image: nda,
	},
	{
		name: "Vacation Days Requests Management Solution",
		description:
			<span>It enabled employees to submit requests electronically. The system automated approval workflows, providing a user-friendly interface for employees and a centralized dashboard for HR. This resulted in <b>improved efficiency</b>, quicker approval times, and <b>better workforce management</b> through data-driven insights into employee leave patterns.</span>,
			tags: [
				{
				  name: "frontend",
				  color: "blue-text-gradient",
				},
				{
				  name: "backend",
				  color: "green-text-gradient",
				},
				{
				  name: "database",
				  color: "pink-text-gradient",
				},
			  ],
		image: nda,
	},
	{
		name: "MSDS Generator",
		description:
			<span>An application that simplified document creation, <b>saving time</b> and <b>ensuring accuracy</b>. The tool enhanced compliance, reduced errors, and contributed to a safer work environment, reinforcing the company's commitment to efficiency and safety.</span>,
			tags: [
				{
				  name: "frontend",
				  color: "blue-text-gradient",
				},
				{
				  name: "backend",
				  color: "green-text-gradient",
				},
				{
				  name: "database",
				  color: "pink-text-gradient",
				},
			  ],
		image: nda,
	},
];

export { services, technologies, experiences, projects };
