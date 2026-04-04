import ContactAndMap from "@/components/sections/contactAndMap";
import Portfolio from "@/components/sections/portfolio";
import Presentaion2 from "@/components/sections/presentaion2";
import Presentation from "@/components/sections/presentation";
import Testimonial from "@/components/sections/testimonial";
import StartegicApproch from "@/components/sections/startegicApproch";
import Service from "@/components/sections/service";
import ProgramsOverview from "@/components/sections/programsOverview";
import Events from "./../components/sections/events";
import AboutUs from "@/components/sections/aboutUs";
import HeroB from "@/components/sections/heroB";
import SectionH from "@/components/sections/sectionH";
import SectionI from "@/components/sections/sectionI";

export default function Home() {
	return (
		<main>
			<HeroB id={"hero"} />
			<AboutUs id={"aboutus"} />
			<Events id="events" />
			<ProgramsOverview />
			<SectionH id={"bca-program"} />
			<SectionI id={"advanced-studies"} />
			<Service id={"services"} />
			<StartegicApproch id={"StartegicApproch"} />
			<Presentaion2 id={'business-presentation'} />
			<Presentation id={'business-presentation-2'}/>
			<Portfolio id={'portfolio'} />
			<Testimonial id={'testimonial'} />
			<ContactAndMap id={"contact"} />
		</main>
	);
}
