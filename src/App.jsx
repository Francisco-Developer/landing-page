import { Header, Footer } from './components/layout';

import {
	Abouts,
	Hero,
	Portfolio,
	Pricing,
	Services,
	Contact,
} from './pages/home';
function App() {
	return (
		<>
			<Header />
			<Hero />
			<Services />
			<Portfolio />
			<Pricing />
			<Abouts />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
