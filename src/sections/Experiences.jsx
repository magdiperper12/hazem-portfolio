import { Timeline } from '../components/Timeline';
import {
	Education,
	Experience,
	publications,
	courses,
	workshops,
} from '../constants';
const Experiences = () => {
	return (
		<div>
			<section
				id='Education'
				className='w-full lg:pt-24'>
				<Timeline
					data={Education}
					title={'Education'}
				/>
			</section>
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
			<section
				id='workshops'
				className='w-full lg:pt-24'>
				<Timeline
					data={workshops}
					title={'workshops'}
				/>
			</section>
			<section
				id='publications'
				className='w-full lg:pt-24'>
				<Timeline
					data={publications}
					title={'publications'}
				/>
			</section>
		</div>
	);
};

export default Experiences;
