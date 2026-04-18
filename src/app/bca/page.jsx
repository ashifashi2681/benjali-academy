import Achievments from "@/components/sections/achievments";
import BrandShowcase from "@/components/sections/brandShowcase";
import CoachingPrograms from "@/components/sections/coachingPrograms";
import ContactAndMap from "@/components/sections/contactAndMap";
import DevelopmentPrograms from "@/components/sections/developmentPrograms";
import Hero from "@/components/sections/hero";
import Testimonial from "@/components/sections/testimonial";
import Usp from "@/components/sections/usp";

import React from "react";

function Bca() {
	return (
		<main>
			<Hero id={"bca-hero"} />
			<Usp id={"unique-selling-points"} />
			<CoachingPrograms id={"coaching-programs"} />
			<DevelopmentPrograms id={"development-programs"} />
			<Achievments id={"achievments"} />
			<BrandShowcase id={"our-clients"} />
			<Testimonial id={"bca-testimonials"} />
			<ContactAndMap id={"bca-contact&map"} />
		</main>
	);
}

export default Bca;
