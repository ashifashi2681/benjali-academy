import ContactAndMap from "@/components/sections/contactAndMap";
import Events from "@/components/sections/events";
import Hero from "@/components/sections/hero";
import HeroB from "@/components/sections/heroB";
import HeroC from "@/components/sections/heroC";
import Leadership from "@/components/sections/leadership";
import Portfolio from "@/components/sections/portfolio";
import Presentaion2 from "@/components/sections/presentaion2";
import Presentation from "@/components/sections/presentation";
import ProgramsOverview from "@/components/sections/programsOverview";
import ProgramsOverview2 from "@/components/sections/programsOverview2";
import SectionA from "@/components/sections/sectionA";
import SectionB from "@/components/sections/sectionB";
import SectionC from "@/components/sections/sectionC";
import SectionD from "@/components/sections/sectionD";
import SectionE from "@/components/sections/sectionE";
import SectionF from "@/components/sections/sectionF";
import SectionG from "@/components/sections/sectionG";
import SectionH from "@/components/sections/sectionH";
import SectionI from "@/components/sections/sectionI";
import Service from "@/components/sections/service";
import StartegicApproch from "@/components/sections/startegicApproch";
import Team from "@/components/sections/team";
import Testimonial from "@/components/sections/testimonial";
import Testimonial2 from "@/components/sections/testimonial2";
import React from "react";

function Sections() {
	return (
		<>
			<Hero />
			<HeroB />
			<HeroC />
			<SectionA />
			<SectionB />
			<SectionC />
			<SectionD />
			<SectionE />
			<SectionF />
			<SectionG />
			<SectionH />
			<SectionI />
            <Events />
            <Portfolio />
            <Presentation />
            <Presentaion2 />
            <ProgramsOverview />
            <ProgramsOverview2 />
            <Service />
            <StartegicApproch />
            <Team />
            <Testimonial />
            <Testimonial2 />
            <ContactAndMap />
			<Leadership />
		</>
	);
}

export default Sections;
