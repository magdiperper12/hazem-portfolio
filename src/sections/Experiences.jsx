import { Timeline } from '../components/Timeline';
import { Experience, courses } from '../constants';
const Experiences = () => {
	return (
		<div>
			<section
				id='Experiences'
				className='w-full lg:pt-24'>
				<Timeline
					data={Experience}
					title={'Experience'}
				/>
			</section>

			<section
				id='courses'
				className='w-full lg:pt-24'>
				<Timeline
					data={courses}
					title={'courses'}
				/>
			</section>
		</div>
	);
};

export default Experiences;
