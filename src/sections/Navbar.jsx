import { useState } from 'react';
import { motion } from 'motion/react';
function Navigation() {
	return (
		<ul className='nav-ul py-4'>
			<li className='nav-li'>
				<a
					className='nav-link'
					href='#home'>
					Home
				</a>
			</li>
			<li className='nav-li'>
				<a
					className='nav-link'
					href='#about'>
					About
				</a>
			</li>
			<li className='nav-li'>
				<a
					className='nav-link'
					href='#Project'>
					Project
				</a>
			</li>

			<li className='nav-li'>
				<a
					className='nav-link'
					href='#Experiences'>
					Experiences
				</a>
			</li>

			<li className='nav-li'>
				<a
					className='nav-link'
					href='#contact'>
					Contact
				</a>
			</li>
		</ul>
	);
}
const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<div className='fixed inset-x-0 z-50 w-full backdrop-blur-lg  bg-primary/20'>
			<div className='mx-auto c-space max-w-7xl'>
				<div className='flex items-center justify-between py-2 sm:py-0'>
					<a
						href='/'
						className='text-xl font-bold transition-colors text-neutral-400 hover:text-white'>
						Hazem ghazaly
					</a>
					<button
						onClick={() => setIsOpen(!isOpen)}
						className='flex cursor-pointer text-neutral-400 hover:text-white focus:outline-none md:hidden'>
						<img
							src={isOpen ? 'assets/close.svg' : 'assets/menu.svg'}
							className='w-6 h-6'
							alt='toggle'
						/>
					</button>
					<nav className='hidden sm:flex'>
						<Navigation />
					</nav>
				</div>
			</div>
			{isOpen && (
				<motion.div
					className='block overflow-hidden text-center sm:hidden'
					initial={{ opacity: 0, x: -10 }}
					animate={{ opacity: 1, x: 0 }}
					style={{ maxHeight: '100vh' }}
					transition={{ duration: 1 }}>
					<nav className='pb-5'>
						<Navigation />
					</nav>
				</motion.div>
			)}
		</div>
	);
};

export default Navbar;
