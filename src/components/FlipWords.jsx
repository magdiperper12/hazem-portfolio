'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

export const FlipWords = ({ words, duration = 5000, className }) => {
	const [word, setWord] = useState(words[0]),
		[animating, setAnimating] = useState(false);

	useEffect(() => {
		if (!animating) {
			const id = setTimeout(() => {
				setWord(words[(words.indexOf(word) + 1) % words.length]);
				setAnimating(true);
			}, duration);
			return () => clearTimeout(id);
		}
	}, [animating, word, duration, words]);

	const base = { opacity: 0, y: 10, filter: 'blur(8px)' },
		animate = { opacity: 1, y: 0, filter: 'blur(0px)' };

	return (
		<AnimatePresence onExitComplete={() => setAnimating(false)}>
			<motion.div
				key={word}
				initial={{ opacity: 0, y: 10 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{
					opacity: 0,
					y: -40,
					x: 40,
					filter: 'blur(8px)',
					scale: 2,
					position: 'absolute',
				}}
				transition={{ type: 'spring', stiffness: 100, damping: 10 }}
				className={twMerge('inline-block relative z-10 text-left', className)}>
				{word.split(' ').map((w, wi) => (
					<motion.span
						key={wi}
						initial={base}
						animate={animate}
						transition={{ delay: wi * 0.4, duration: 0.4 }}
						className='inline-block whitespace-nowrap'>
						{[...w].map((l, li) => (
							<motion.span
								key={li}
								initial={base}
								animate={animate}
								transition={{ delay: wi * 0.6 + li * 0.05, duration: 0.3 }}
								className='inline-block'>
								{l}
							</motion.span>
						))}
						<span className='inline-block'>&nbsp;</span>
					</motion.span>
				))}
			</motion.div>
		</AnimatePresence>
	);
};
