import { BrowserRouter } from "react-router-dom";

import {
	About,
	Contact,
	Experience,
	Hero,
	Navbar,
	Tech,
	StarsCanvas,
} from "./components";

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<div>
					<Navbar />
					<Hero />
				</div>
				<About />
				<Experience />
				<Tech />
				<div className="relative z-0">
					<Contact />
					<StarsCanvas />
				</div>
			</div>
		</BrowserRouter>
	);
};

export default App;
