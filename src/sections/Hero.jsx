import HeroText from '../components/HeroText';
import ParallaxBackground from '../components/ParallaxBackground';
const Hero = () => {
	return (
		<section
			className='flex items-start justify-center min-h-screen   c-space overflow-hidden  '
			id='home'>
			<div className='w-full flex flex-col lg:flex-row justify-center items-center'>
				<div className='w-full lg:w-1/2 '>
					<HeroText />
				</div>
				<div className='w-full lg:w-1/2 lg:-mt-4'>
					<img
						src='/assets/hazem-removebg.png'
						alt='e'
						className='w-full h-auto object-cover z-50'
					/>
				</div>
			</div>
			<ParallaxBackground />
		</section>
	);
};

export default Hero;
