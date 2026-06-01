import Achievments from "@/components/sections/achievments";
import BrandShowcase from "@/components/sections/brandShowcase";
import CoachingPrograms from "@/components/sections/coachingPrograms";
import ContactAndMap from "@/components/sections/contactAndMap";
import DevelopmentPrograms from "@/components/sections/developmentPrograms";
import Hero from "@/components/sections/hero";
import Testimonial from "@/components/sections/testimonial";
import Usp from "@/components/sections/usp";
import { chooseUs, coreService, hero, uniqueStrength } from "@/lib/bca";

import React from "react";

function Bca() {
	return (
		<main>
			<Hero id={"bca-hero"} data={hero}/>
			<Usp id={"why-choose-benjali"} data={chooseUs} />
			<CoachingPrograms id={"unique-strength"} data={uniqueStrength} />
			<DevelopmentPrograms id={"core-services"} data={coreService} />
			<Achievments id={"achievments"} />
			<BrandShowcase id={"our-clients"} />
			<Testimonial id={"bca-testimonials"} />
			<ContactAndMap id={"bca-contact&map"} />
		</main>
	);
}

export default Bca;
