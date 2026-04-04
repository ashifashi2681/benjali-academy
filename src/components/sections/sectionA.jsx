import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import { MdDeviceHub, MdLeaderboard, MdLightbulb, MdOpenInNew } from "react-icons/md";

function SectionA({id}) {
	return (
		// Specialized Tracks Section
		<Section id={id} bg="bg-accent-blue/5">
			<div className="text-center mb-16 space-y-4">
				<Heading helperText="how we track!" as="h2">
					Specialized Tracks
				</Heading>
				<p className="text-text-secondary text-sm max-w-2xl mx-auto">
					Deepen your expertise with our focused advanced programs
					designed for the modern economy.
				</p>
			</div>
			<div className="grid md:grid-cols-3 gap-8">
				<div className="bg-surface p-10 rounded-3xl border border-border shadow-sm hover:shadow-xl transition-all group">
					<div className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
						<span
							className=" text-accent-blue text-xl"
							data-icon="leaderboard">
							<MdLeaderboard />
						</span>
					</div>
					<Heading as="h6" className="mb-4">
						Strategic Leadership
					</Heading>
					<p className="text-text-secondary leading-relaxed mb-6">
						Master the art of decision-making, organizational
						psychology, and global market expansion strategies.
					</p>
					<a
						className="text-text-primary font-bold inline-flex items-center hover:underline decoration-2 underline-offset-4"
						href="#">
						Explore Track{" "}
						<span className="ml-2 text-sm" data-icon="open_in_new">
							<MdOpenInNew />
						</span>
					</a>
				</div>
				<div className="bg-surface p-10 rounded-3xl border border-white shadow-sm hover:shadow-xl transition-all group">
					<div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
						<span
							className="text-accent-gold text-xl"
							data-icon="hub">
							<MdDeviceHub />
						</span>
					</div>
					<Heading as="h6" className="mb-4">
						Data Architecture
					</Heading>
					<p className="text-text-secondary leading-relaxed mb-6">
						Engineered for tech leads transitioning into
						architectural roles, focusing on scalable systems and AI
						ethics.
					</p>
					<a
						className="text-text-primary font-bold inline-flex items-center hover:underline decoration-2 underline-offset-4"
						href="#">
						Explore Track{" "}
						<span className="ml-2 text-sm" data-icon="open_in_new">
							<MdOpenInNew />
						</span>
					</a>
				</div>
				<div className="bg-surface p-10 rounded-3xl border border-white shadow-sm hover:shadow-xl transition-all group">
					<div className="w-16 h-16 bg-secondary-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
						<span
							className="text-accent-blue text-xl"
							data-icon="lightbulb">
							<MdLightbulb />
						</span>
					</div>
					<Heading as="h6" className="mb-4">
						Innovation Management
					</Heading>
					<p className="text-text-secondary leading-relaxed mb-6">
						Bridge the gap between creative ideation and commercial
						viability through lean methodologies.
					</p>
					<a
						className="text-text-primary font-bold inline-flex items-center hover:underline decoration-2 underline-offset-4"
						href="#">
						Explore Track{" "}
						<span className="ml-2 text-sm" data-icon="open_in_new">
							<MdOpenInNew />
						</span>
					</a>
				</div>
			</div>
		</Section>
	);
}

export default SectionA;
