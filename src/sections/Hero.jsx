import HeroText from '../components/HeroText';
import ParallaxBackground from '../components/ParallaxBackground';

const Hero = () => {
	return (
		<section
			className='flex items-start justify-center min-h-screen overflow-hidden  c-space '
			id='home'>
			<div className='w-full flex flex-col lg:flex-row justify-center items-center'>
				<div className='w-full lg:w-1/2 '>
					<HeroText />
				</div>
				<div className='w-full lg:w-1/2 lg:-mt-20'>
					<img
						src='/assets/fawzy.png'
						alt='e'
						className='w-full h-auto object-cover'
					/>
				</div>
			</div>

			<ParallaxBackground />
		</section>
	);
};

export default Hero;
