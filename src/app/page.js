import ContactAndMap from "@/components/sections/contactAndMap";
import Testimonial from "@/components/sections/testimonial";
import Service from "@/components/sections/service";
import Events from "./../components/sections/events";
import AboutUs from "@/components/sections/aboutUs";
import HeroB from "@/components/sections/heroB";
import Team from "@/components/sections/team";
import Leadership from "@/components/sections/leadership";
import ProgramsOverview2 from "@/components/sections/programsOverview2";
import Testimonial2 from "@/components/sections/testimonial2";

export default function Home() {
	return (
		<main>
			<HeroB id={"hero"} />
			<AboutUs id={"aboutus"} />
			<Service id={"services"} />
			<Events id="events" /> {/* slides */}
			<Team id={"teams"} />
			<Leadership id={"leadership"} />
			<ProgramsOverview2 id={"program-overview"} />
			<Testimonial2 id={"testimonial2"} />
			{/* <Testimonial id={"testimonial"} /> */}
			<ContactAndMap id={"contact"} />
		</main>
	);
}
