import { useRef } from 'react';
import CopyEmailButton from '../components/CopyEmailButton';
import { Frameworks } from '../components/FrameWorks';

const About = () => {
	const grid2Container = useRef();
	return (
		<section
			className='c-space section-spacing lg:pt-24'
			id='about'>
			<h2 className='text-heading'>About Me</h2>
			<div className='grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12'>
				{/* Grid 1 */}
				<div className='flex items-end grid-default-color grid-1'>
					<img
						src='assets/coding-pov.png'
						className='absolute scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]'
					/>
					<div className='z-10'>
						<p className='headtext'>Hi, I'm Hazem Hany ghazaly</p>
						<p className=' text-white/70 font-bold '>UI UX DESIGNER</p>
						<p className='subtext'>
							Over the last 1 years, I developed my frontend and backend dev
							skills to deliver dynamic and software and web applications.
						</p>
					</div>
					<div className='absolute inset-x-0 pointer-evets-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo' />
				</div>
				{/* Grid 2 */}
				<div className='grid-default-color grid-2'>
					<div
						ref={grid2Container}
						className='flex items-center justify-center w-full h-full'>
						<p className='flex items-end text-lg wrap-normal  text-gray-400'>
							In my year at AIOT GROUP, an AIoT company, my UI/UX objective has
							been to enhance user experience across our product ecosystem. This
							involved improving the usability and accessibility of our AIoT
							applications, increasing user engagement, and contributing to the
							overall success of our products by creating intuitive and
							efficient interfaces..
						</p>
					</div>
				</div>
				{/* Grid 3 */}
				<div className='grid-default-color grid-3 space-y-7'>
					<div className='z-10 w-[50%] space-y-2'>
						<p className='headtext text-blue-300'>LANDUAGES</p>
						<h2 className='text-base text-white flex items-center gap-3'>
							ARABIC{' '}
							<span className='text-sm ms-2 text-gray-300 '>
								Native language
							</span>
						</h2>
						<h2 className='text-base   text-white flex items-start justify-center gap-3'>
							ENGLISH{' '}
							<span className='text-sm text-gray-300 '>Secound language</span>
						</h2>
					</div>
					<div className='z-10 w-[50%] space-y-2'>
						<p className='headtext text-blue-300'>Education</p>
						<h2 className='text-base text-white flex items-center gap-3'>
							2023-07-13
							<span className='text-sm ms-2 text-gray-300 '>
								Faculty of Agriculture
							</span>
						</h2>
					</div>
				</div>
				{/* Grid 4 */}
				<div className='grid-special-color grid-4'>
					<div className='flex flex-col items-center justify-center gap-4 size-full'>
						<p className='text-center headtext'>
							Do you want to start a project together?
						</p>
						<CopyEmailButton />
					</div>
				</div>
				{/* Grid 5 */}
				<div className='grid-default-color grid-5'>
					<div className='z-10 w-[50%]'>
						<p className='headText'>Teck Stack</p>
						<p className='subtext'>
							I specialize in a variety of languages, frameworks, and tools taht
							allow me to build robust and scalable applications
						</p>
					</div>
					<div className='absolute inset-y-0 md:inset-y-9 w-full h-full start-[50%] md:scale-125'>
						<Frameworks />
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
