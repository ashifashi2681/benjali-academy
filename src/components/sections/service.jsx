import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import { MdGridView, MdLayers, MdLightbulb } from "react-icons/md";

function Service({id}) {
	return (
		<Section id={id}>
			<div className="text-center mb-20 max-w-3xl mx-auto">
				<Heading helperText="Our Expertise">
					Bespoke services for the digital vanguard.
				</Heading>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div className="group p-10 rounded-2xl bg-surface transition-all duration-500 hover:-translate-y-2 hover:shadow-[0px_24px_48px_rgba(43,52,55,0.06)] border border-border/50 relative overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
					<span className="text-xl text-primary-800 mb-8 block">
						<MdLayers />
					</span>
					<Heading as="h3" className="mb-4">
						Brand Identity
					</Heading>
					<p className="text-text-secondary leading-relaxed">
						Defining your core narrative through minimalist
						aesthetics and strategic visual language.
					</p>
				</div>
				<div className="group p-10 rounded-2xl bg-surface transition-all duration-500 hover:-translate-y-2 hover:shadow-[0px_24px_48px_rgba(43,52,55,0.06)] border border-border/50 relative overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
					<span className="text-xl text-primary-800 mb-8 block">
						<MdGridView />
					</span>
					<Heading as="h3" className="mb-4">
						Product Design
					</Heading>
					<p className="text-text-secondary leading-relaxed">
						Creating seamless user journeys with a focus on high-end
						interactions and clarity.
					</p>
				</div>
				<div className="group p-10 rounded-2xl bg-surface transition-all duration-500 hover:-translate-y-2 hover:shadow-[0px_24px_48px_rgba(43,52,55,0.06)] border border-border/50 relative overflow-hidden">
					<div className="absolute inset-0 bg-gradient-to-br from-accent-gold/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
					<span className="text-xl text-primary-700 mb-8 block">
						<MdLightbulb />
					</span>
					<Heading as="h3" className="mb-4">
						Digital Strategy
					</Heading>
					<p className="text-text-secondary leading-relaxed">
						Positioning your business for long-term growth in the
						rapidly evolving digital ecosystem.
					</p>
				</div>
			</div>
		</Section>
	);
}

export default Service;
