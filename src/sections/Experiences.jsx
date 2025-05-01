import { Timeline } from '../components/Timeline';
import { experiences } from '../constants';
const Experiences = () => {
	return (
		<section
			id='Experiences'
			className='w-full lg:pt-24'>
			<Timeline data={experiences} />
		</section>
	);
};

export default Experiences;
