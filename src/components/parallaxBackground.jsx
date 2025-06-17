'use client';
import {
	motion,
	useSpring,
	useTransform,
	useScroll,
	useAnimationFrame,
} from 'framer-motion';
import { useMotionValue } from 'framer-motion';

const ParallaxBackground = () => {
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
	);
};

export default ParallaxBackground;
