import React from "react";
import Heading from "../ui/heading";
import Section from "../ui/section";
import {
	MdFoundation,
	MdHub,
	MdRocketLaunch,
	MdSchedule,
	MdSchool,
	MdVerified,
} from "react-icons/md";

const data = [
	{
		icon: <MdFoundation />,
		title: "Foundations",
		desc: "Mastering the core principles of business architecture, market analysis, and strategic communication frameworks.",
	},
	{
		icon: <MdHub />,
		title: "Specialization",
		desc: "Deep diving into data-driven decision making and advanced organizational behavioral psychology modules.",
	},
	{
		icon: <MdRocketLaunch />,
		title: "Real-world Projects",
		desc: "Applying theoretical knowledge to corporate challenges through internship programs and collaborative capstone ventures.",
	},
	{
		icon: <MdVerified />,
		title: "Certification",
		desc: "Achieving professional accreditation and entering the global alumni network as a certified portfolio expert.",
	},
];

const Card = ({ item }) => (
	<div className="group flex flex-col items-center lg:items-start text-center lg:text-left">
		<div className="w-16 h-16 rounded-xl bg-gray-200 flex items-center justify-center mb-6 shadow-sm border border-border group-hover:border-secondary-500 transition-all duration-300">
			<span className="text-secondary-500 text-lg" data-icon="foundation">
				{item.icon}
			</span>
		</div>
		<div className="relative pb-4">
			<div className="hidden lg:block absolute -left-2 top-0 w-4 h-4 bg-secondary-500 rounded-full border-4 border-surface -translate-y-12"></div>
			<Heading as="h4" className="mb-4">
				{item.title}
			</Heading>
			<p className="text-text-secondary leading-relaxed text-sm">
				{item.desc}
			</p>
		</div>
	</div>
);
function SectionL({ id }) {
	return (
		<Section id={id} bg="bgsurface">
			<div className="mb-16 text-center">
				<Heading helperText="Path to Excellence" className="mb-6">
					Academic Journey
				</Heading>
				<p className="main-description mx-auto">
					A structured roadmap of professional growth, spanning from
					foundational concepts to industry-standard certifications.
				</p>
			</div>
			<div className="relative">
				<div className="hidden lg:block absolute top-6/12 left-0 w-full h-px border-t-3 border-dashed border-border-strong -translate-y-1/2"></div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
					{data?.map((itm, i) => (
						<Card key={i} item={itm} />
					))}
				</div>
			</div>
			<div className="mt-24 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-surface p-8 lg:p-12 rounded-2xl border border-border shadow-sm">
				<div className="lg:col-span-7">
					<Heading as="h3" className="mb-4">
						Milestone Spotlight
					</Heading>
					<p className="main-description mb-8">
						The final stage of the journey involves a rigorous
						defense of a Strategic Portfolio, evaluated by industry
						leaders and academic scholars.
					</p>
					<div className="flex flex-wrap gap-4">
						<div className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-full text-sm font-medium">
							<span className="text-base" data-icon="schedule">
								<MdSchedule />
							</span>{" "}
							12 Months Intensive
						</div>
						<div className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-full text-sm font-medium">
							<span className="text-base" data-icon="school">
								<MdSchool />
							</span>{" "}
							Academic Honor
						</div>
					</div>
				</div>
				<div className="lg:col-span-5 relative group">
					<div className="absolute -inset-1 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-xl blur opacity-25 group-hover:opacity-80 transition duration-1000"></div>
					<img
						className="relative rounded-xl w-full h-64 object-cover shadow-lg border border-white"
						data-alt="Modern bright university campus library with students collaborating on digital tablets in a soft warm morning light"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuA495eqAN1SA1J-XP5eF7Ob8Hs74g_3X1dAZ2DdJqUc9d_ihQdYegCORSNIbim6UvqteQNpC7MGi-68XsToGPTwmxPLymv9aQ9LaQ6AGR75TMozYoeNTKgil7RQpnLx6mxwC4nNiAFy-nZ8ACh-Bk0c6oq07KiySUazV4BfGSw3tcYvIKnNrabPMxoOrnxXmIUGpMg9IHQvw-2KYwepRnI_I1JmJJQZk2OsrniRzgaQNJRXhsvure5ihfwI2kH8A8s5UJiiorpFwnGQ"
					/>
				</div>
			</div>
		</Section>
	);
}

export default SectionL;
