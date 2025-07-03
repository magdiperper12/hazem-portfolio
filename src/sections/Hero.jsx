'use client';

import HeroText from '../components/HeroText';

import {
	motion,
	useSpring,
	useTransform,
	useScroll,
	useAnimationFrame,
} from 'framer-motion';
import { useMotionValue } from 'framer-motion';
const Hero = () => {
	const { scrollYProgress } = useScroll();
	const springY = useSpring(scrollYProgress, { damping: 20 });

	// حركة الجبال مع التمرير
	const mountain3Y = useTransform(springY, [0, 0.5], ['0%', '70%']);
	const mountain2Y = useTransform(springY, [0, 0.5], ['0%', '30%']);
	const mountain1Y = useTransform(springY, [0, 0.5], ['0%', '0%']);

	// قيمة X الكواكب
	const planetsX = useMotionValue(0);

	// حركة تلقائية للكواكب باستخدام sin wave
	useAnimationFrame((t) => {
		const wave = Math.sin(t / 1000) * 20; // من -20 إلى +20 بكسل
		planetsX.set(wave);
	});
	return (
		<section
			className='flex items-start justify-center min-h-screen lg:h-screen    c-space lg:overflow-hidden  '
			id='home'>
			<div className='bg-black/50 lg:bg-black/30 absolute top-0 left-0 h-screen w-full'></div>
			<div className='w-full flex flex-col lg:flex-row justify-center items-center'>
				<div className='w-full lg:w-1/2 '>
					<HeroText />
				</div>
				<div className='w-full lg:w-1/2 lg:-mt-4'>
					<img
						src='/assets/hazem-removebg.png'
						alt='e'
						className='w-full h-auto  object-cover z-50'
					/>
				</div>
			</div>
			<section className='absolute inset-0 '>
				<div className='relative h-screen overflow-hidden'>
					{/* السماء */}
					<div
						className='absolute inset-0 w-full h-screen -z-50'
						style={{
							backgroundImage: 'url(/assets/sky.jpg)',
							backgroundPosition: 'bottom',
							backgroundSize: 'cover',
						}}
					/>
					{/* جبل 3 */}
					<motion.div
						className='absolute inset-0 -z-40'
						style={{
							backgroundImage: 'url(/assets/mountain-3.png)',
							backgroundPosition: 'bottom',
							backgroundSize: 'cover',
							y: mountain3Y,
						}}
					/>
					{/* الكواكب تتحرك تلقائيًا */}
					<motion.div
						className='absolute inset-0 -z-30'
						style={{
							backgroundImage: 'url(/assets/planets.png)',
							backgroundPosition: 'bottom',
							backgroundSize: 'cover',
							x: planetsX,
						}}
					/>
					{/* جبل 2 */}
					<motion.div
						className='absolute inset-0 -z-20'
						style={{
							backgroundImage: 'url(/assets/mountain-2.png)',
							backgroundPosition: 'bottom',
							backgroundSize: 'cover',
							y: mountain2Y,
						}}
					/>
					{/* جبل 1 */}
					<motion.div
						className='absolute inset-0 -z-10'
						style={{
							backgroundImage: 'url(/assets/mountain-1.png)',
							backgroundPosition: 'bottom',
							backgroundSize: 'cover',
							y: mountain1Y,
						}}
					/>
				</div>
			</section>
		</section>
	);
};

export default Hero;
