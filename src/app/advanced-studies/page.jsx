import Features from '@/components/sections/features';
import HeroC from '@/components/sections/heroC'
import Sectionj from '@/components/sections/sectionj';
import SectionK from '@/components/sections/sectionK';
import SectionL from '@/components/sections/sectionL';
import Testimonial from '@/components/sections/testimonial';

function AdvancedStudies() {
  return (
		<main>
			<HeroC id={"adv-studies-hero"} />
			<Sectionj id={"main-courses"} />
			<SectionK id={"vacation-cources"} />
			<Features id={"features"} />
			<SectionL id={"academic-journey"} />
			<Testimonial id={"testimonial-adv-stds"} />
		</main>
  );
}

export default AdvancedStudies