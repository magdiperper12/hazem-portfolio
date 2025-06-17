'use client';

import { FlipWords } from './FlipWords';
import { motion } from 'framer-motion';
import { mySocials } from '../constants';

const HeroText = () => {
	const words = ['Instructor', 'DESIGNER', 'UI UX '];
	const variants = {
		hidden: { opacity: 0, y: 40 },
		visible: { opacity: 1, y: 0 },
	};

	return (
		<div className='flex items-center justify-center min-h-screen px-4 text-center bg-gradient-to-b '>
			<div className='z-10 flex flex-col items-center space-y-6'>
				{/* Heading */}
				<motion.h1
					className='text-4xl font-bold text-white/90 md:text-6xl'
					variants={variants}
					initial='hidden'
					animate='visible'
					transition={{ delay: 0.5 }}>
					Hi, I am Hazem Hany ghazaly
				</motion.h1>

				{/* FlipWords */}
				<motion.div
					variants={variants}
					initial='hidden'
					animate='visible'
					transition={{ delay: 0.8 }}>
					<FlipWords
						words={words}
						className='text-5xl font-black text-white/60 md:text-7xl'
					/>
				</motion.div>

				{/* Subheading */}
				<motion.p
					className='text-xl text-neutral-300 md:text-2xl'
					variants={variants}
					initial='hidden'
					animate='visible'
					transition={{ delay: 1.1 }}>
					Creating UI UX DESIGNER
				</motion.p>

				{/* Buttons */}
				<motion.div
					className='flex space-x-4'
					variants={variants}
					initial='hidden'
					animate='visible'
					transition={{ delay: 1.4 }}>
					<a
						href='#contact'
						className='px-4 py-2  backdrop-blur-lg text-white rounded-xl overflow-hidden bg-primary/25 hover:bg-primary/50  '>
						Contact Me
					</a>
					<a
						href='#work'
						className='px-4 py-2 border-2 rounded-xl  border-gray-800 backdrop-blur-lg overflow-hidden text-white 	 hover:bg-primary/50  '>
						see Projects
					</a>
				</motion.div>

				{/* Social Icons */}
				<motion.div
					className='flex space-x-6 pt-6 text-white  text-2xl'
					variants={variants}
					initial='hidden'
					animate='visible'
					transition={{ delay: 1.7 }}>
					{mySocials.map((social, index) => (
						<a
							href={social.href}
							key={index}>
							<img
								src={social.icon}
								className='w-8 h-8'
								alt={social.name}
							/>
						</a>
					))}
				</motion.div>
			</div>
		</div>
	);
};

export default HeroText;
