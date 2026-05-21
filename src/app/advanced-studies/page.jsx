import AboutUs from "@/components/sections/aboutUs";
import EnquiryForm from "@/components/sections/enquiryForm";
import Features from "@/components/sections/features";
import HeroC from "@/components/sections/heroC";
import Sectionj from "@/components/sections/sectionj";
import SectionK from "@/components/sections/sectionK";
import SectionL from "@/components/sections/sectionL";
import Testimonial from "@/components/sections/testimonial";
import { heroContent, missonVission, courseProgram } from "@/lib/adv-studied";

function AdvancedStudies() {
	return (
		<main>
			<HeroC data={heroContent} id={"adv-studies-hero"} />
			<AboutUs data={missonVission} id={"adv-aboutus"} />
			<Sectionj data={courseProgram} id={"main-courses"} />
			<SectionK id={"vacation-cources"} />
			<Features id={"features"} />
			<SectionL id={"academic-journey"} />
			<EnquiryForm />
			<Testimonial id={"testimonial-adv-stds"} />
		</main>
	);
}

export default AdvancedStudies;
