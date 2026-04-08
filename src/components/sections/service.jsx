import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import { MdGridView, MdLayers, MdLightbulb } from "react-icons/md";

const data = [
	{
		title: "Brand Identity",
		desc: "Defining your core narrative through minimalist aesthetics and strategic visual language.",
		icon: <MdLayers />,
	},
	{
		title: "Product Design",
		desc: "Creating seamless user journeys with a focus on high-end interactions and clarity.",
		icon: <MdGridView />,
	},
	{
		title: "Digital Strategy",
		desc: "Positioning your business for long-term growth in the rapidly evolving digital ecosystem.",
		icon: <MdLightbulb />,
	},
];

const Card = ({ title, desc, icon }) => {
	return (
		<div className="group p-10 rounded-2xl bg-surface transition-all duration-500 hover:-translate-y-2 hover:shadow-[0px_24px_48px_rgba(43,52,55,0.06)] border border-border/50 relative overflow-hidden">
			<div className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 to-transparent transition-opacity" />
			<div className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/2 -translate-x-full skew-x-[-20deg] bg-gradient-to-r from-transparent via-white/80 to-transparent opacity-0 blur-[2px] transition-all duration-700 ease-out group-hover:translate-x-[260%] group-hover:opacity-100" />
			<span className="relative z-10 mb-8 block text-xl text-primary-800">
				{icon}
			</span>
			<Heading as="h3" className="relative z-10 mb-4">
				{title}
			</Heading>
			<p className="relative z-10 leading-relaxed text-text-secondary">{desc}</p>
		</div>
	);
};

function Service({ id }) {
	return (
		<Section id={id}>
			<div className="text-center mb-20 max-w-3xl mx-auto">
				<Heading helperText="Our Expertise">
					Bespoke services for the digital vanguard.
				</Heading>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				{data?.map((itm, i) => (
					<Card
						key={i}
						title={itm.title}
						desc={itm.desc}
						icon={itm.icon}
					/>
				))}
			</div>
		</Section>
	);
}

export default Service;
