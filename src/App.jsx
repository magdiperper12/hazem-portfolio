import Hero from './sections/Hero';
import About from './sections/About';
import Experiences from './sections/Experiences';
import Contact from './sections/Contact';
import Footer from './sections/Footer';
import Navbar from './sections/Navbar';

const App = () => {
	return (
		<div className='container mx-auto max-w-7xl'>
			<Navbar />
			<Hero />
			<About />
			<Experiences />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
