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
						<p className='headtext'>Hi, I'm MOHAMED FAWZI ABDALSHAFIE</p>
						<p className=' text-white/70 font-bold '>AI ENGINEER</p>
						<p className='subtext'>
							Over the last 4 years, I developed my frontend and backend dev
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
							I hold a Bachelor's in Environmental Control Engineering and
							Agricultural Bio-systems and a Master's focusing on AI and thermal
							imaging in agriculture. As a member of an Egyptian AI research
							school, I have contributed to international research projects and
							founded a company specializing in AI applications for the poultry
							industry. I have also spoken on AI at various Egyptian
							universities. My expertise lies in AI and thermal imaging
							applications in agriculture.
						</p>
					</div>
				</div>
				{/* Grid 3 */}
				<div className='grid-default-color grid-3'>
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
						<h2 className='text-base   text-white flex items-center gap-3'>
							SPANISH <span className='text-sm text-gray-300'>Beginner</span>
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
