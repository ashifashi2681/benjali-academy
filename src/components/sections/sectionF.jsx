import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import { MdDesignServices, MdLayers, MdMonitorHeart, MdSettingsEthernet } from "react-icons/md";

function SectionF({id}) {
	const data = [
		{
			icon: <MdSettingsEthernet />,
			title: "Software Engineering",
			desc: "Systematic approach to software development, focus on scalability and performance optimization.",
		},
		{
			icon: <MdDesignServices />,
			title: "UI/UX Design",
			desc: "User-centric research, wireframing, prototyping, and visual design principles for digital products.",
		},
		{
			icon: <MdMonitorHeart />,
			title: "Data Analytics",
			desc: "Advanced statistics, visualization, and data-driven decision making using Python and R.",
		},
		{
			icon: <MdLayers />,
			title: "Full-Stack Dev",
			desc: "Comprehensive mastery of both frontend technologies and backend infrastructures.",
		},
	];
	return (
		// Curriculum Highlights
		<Section id={id}>
			<div className="text-center mb-16">
				<Heading className="mb-4">Core Curriculum</Heading>
				<p className="text-text-secondary text-sm max-w-2xl mx-auto">
					Focused tracks designed by industry veterans to ensure you
					are ready for the global tech market from day one.
				</p>
			</div>
			<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
				{data?.map((itm, i) => (
					<Card icon={itm.icon} title={itm.title} desc={itm.desc} key={i}/>
				))}
			</div>
		</Section>
	);
}

export default SectionF;

const Card = ({icon, title, desc}) => {
	return (
		<div className="p-8 rounded-2xl border bg-surface border-border/30 hover:translate-y-[-8px] transition-all duration-300 shadow-sm hover:shadow-xl group">
			<div className="size-12 bg-accent-blue/30 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
				<span
					className="text-accent-blue text-md"
					data-icon="settings_ethernet">
					{icon}
				</span>
			</div>
			<Heading as="h4" className="mb-3">
				{title}
			</Heading>
			<p className="text-text-secondary text-sm leading-relaxed">
				{desc}
			</p>
		</div>
	);
};
