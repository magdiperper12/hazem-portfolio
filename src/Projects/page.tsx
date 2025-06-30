'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { myProjects } from './ProjectElement';

export default function Projects() {
	const [activeProjectIndex, setActiveProjectIndex] = useState<number | null>(
		null
	);

	const handleShow = (index: number) => {
		setActiveProjectIndex(index); // بدلًا من index - 1
	};
	useEffect(() => {
		if (activeProjectIndex !== null) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'auto';
		}

		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [activeProjectIndex]);

	return (
		<section
			id='Project'
			className='py-24 px-4  text-blue-200 :text-blue-50 transition-colors duration-500'>
			<div className='max-w-7xl mx-auto'>
				<motion.h1
					className='text-4xl md:text-6xl font-bold text-center mb-16'
					initial={{ opacity: 0, y: -30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}>
					Our Projects
				</motion.h1>

				<div className='grid xl:gap-x-20 xl:gap-y-28 lg:gap-y-12 lg:gap-x-10 gap-y-16  sm:grid-cols-1 lg:grid-cols-2'>
					{myProjects.map((project, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.5 }}
							transition={{ delay: index * 0.1, duration: 0.6 }}
							className='md:rounded-[30px]  rounded-xl overflow-hidden group p-2 lg:p-3 xl:p-6  bg-gray-900 :bg-black :border-third/25 border-2 shadow-xl hover:shadow-sm transition duration-300'>
							<div className='relative w-full h-[250px] md:h-[400px] overflow-hidden bg-black rounded-xl :rounded-none :bg-gray-950 :border-b-2 border-blue-900/60 '>
								<img
									src={project.image}
									alt='Tech tag'
									className=' object-contain  px-3 scale-125 w-full group-hover:scale-110 transition-transform duration-500'
								/>
							</div>

							<div className='md:p-10 p-6 lg:p-4 xl:p-8 lg:pb-10 xl:pb-10'>
								<h3 className='text-3xl font-bold text-blue-200 mb-4'>
									{project.title}
								</h3>
								<p className='text-lg text-blue-100  mb-6'>
									{project.description}
								</p>
								<div className='flex items-center flex-wrap gap-4'>
									<button
										onClick={() => handleShow(index)}
										className='md:px-6  md:py-2 px-3 py-1 text-xs md:text-base bg-gray-600  text-blue-50 font-semibold rounded-full hover:opacity-90 transition'>
										View Details
									</button>
									<a
										href={project.href}
										target='_blank'
										rel='noopener noreferrer'
										className='md:px-6  md:py-2 px-3 py-1 text-xs md:text-base bg-blue-100  text-blue-950  font-semibold rounded-full hover:opacity-90 transition'>
										Live Site
									</a>
									<span className='ml-auto md:px-6  md:py-2 px-3 py-1 text-xs md:text-base bg-black  text-blue-50  font-semibold rounded-full transform transition-transform'>
										{project.type}
									</span>
									{activeProjectIndex === index && (
										<div className='z-50 fixed  top-0 right-0  flex items-center justify-center gap-2 h-[100vh] w-full bg-black/60'>
											<div className=' p-5 rounded-lg shadow-lg max-w-4xl bg-gray-900 :bg-gray-950 max-h-[100vh] w-full'>
												<div className='relative w-11/12 m-auto   h-[250px] md:h-[350px] overflow-hidden  '>
													<div className='bg-gray-100  rounded-xl    w-full h-full'>
														<img
															src={project.image}
															alt={project.title}
															className='object-contain  bg-transparent scale-105 hover:scale-125 transition-transform duration-500'
														/>
													</div>
												</div>
												<h2 className='text-2xl text-blue-400 text-center font-bold m-4 '>
													{project.title}
												</h2>
												<p className='text-lg mb-4'>{project.description}</p>
												<ul className='list-disc pl-5 mb-4'>
													{project.subDescription.map((feature, idx) => (
														<li
															key={idx}
															className='text-sm'>
															{feature}
														</li>
													))}
												</ul>
												<ul className=' pl-5 mb-4 flex justify-center items-center gap-4 '>
													{project.tags.map((tag, idx) => (
														<li
															key={idx}
															className='text-lg'>
															<img
																className='w-10 h-10 rounded-full '
																src={tag.path}
															/>
														</li>
													))}
												</ul>
												<div className='flex justify-end'>
													<button
														onClick={() => setActiveProjectIndex(null)}
														className='px-4 mb-5 py-2 bg-blue-900  text-blue-50 font-semibold rounded-full hover:opacity-90 transition'>
														Close
													</button>
												</div>
											</div>
										</div>
									)}
								</div>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
