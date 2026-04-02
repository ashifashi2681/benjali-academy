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
import Hero from "@/components/sections/hero";
import HeroB from "@/components/sections/heroB";

export default function Home() {
	return (
		<main>
			<Hero />
			<HeroB />
			<AboutUs />
			<Events />
			<ProgramsOverview />
			<Service />
			<StartegicApproch />
			<Presentaion2 />
			<Presentation />
			<Portfolio />
			<Testimonial />
			<ContactAndMap />
		</main>
	);
}
