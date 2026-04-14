import CoachingPrograms from "@/components/sections/coachingPrograms";
import DevelopmentPrograms from "@/components/sections/developmentPrograms";
import Hero from "@/components/sections/hero";
import Usp from "@/components/sections/usp";

import React from "react";

function Bca() {
	return (
		<main>
			<Hero id={"bca-hero"} />
			<Usp id={"unique-selling-points"} />
			<CoachingPrograms id={"coaching-programs"} />
			<DevelopmentPrograms id={"development-programs"} />
		</main>
	);
}

export default Bca;
