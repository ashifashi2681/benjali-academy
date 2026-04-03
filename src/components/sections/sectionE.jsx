import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import { MdPalette, MdTerminal } from "react-icons/md";

function SectionE() {
	return (
		// Program Overview
		<Section bg="bg-surface">
			<div className="grid lg:grid-cols-2 gap-16 items-center">
				<div className="rounded-2xl overflow-hidden shadow-2xl relative aspect-video">
					<img
						className="w-full h-full object-cover"
						data-alt="Modern university campus interior with high ceilings, glass walls, and students collaborating on laptops in a bright airy lounge"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8iL3BhTZozb2w-Pf1jvOy11GkAuKdLMjSDwP-VTiTQzFZ-AXvKEH04bHNKWAP3qRrEY4dS2Ppdy-uZ_5M2LCJDYbyzwn3mOjTmhEwwop__dDzrELUiPI2xIHBcfRfSs07zXQDtiLPJUfQvecsQk4yajJuz6vnXx3ICItfX6kqbrnaCPS9WloJ3fPeOzbKuhc9Yp0T0nsSut2DELCVm3pf_9cMOqDpzW-amfrE1aiua8IFFXzeMzVRrzU6XpcjvOX9HwHLogOoxztx"
					/>
					<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
				</div>
				<div>
					<Heading helperText="Creativity" className="mb-6">
						Where Code Meets Creativity
					</Heading>
					<p className="main-description text-text-secondary mb-6">
						Our program philosophy goes beyond standard syntax and
						logic. We believe that the next generation of developers
						must be hybrid thinkers—capable of writing robust
						backends while understanding the nuances of user
						experience.
					</p>
					<div className="space-y-4">
						<div className="flex gap-4 items-start">
							<div className="bg-accent-blue/10 p-2 rounded-lg">
								<span
									className="text-accent-blue text-base"
									data-icon="terminal">
									<MdTerminal />
								</span>
							</div>
							<div>
								<Heading as="h6">Technical Mastery</Heading>
								<p className="text-text-secondary text-sm">
									Deep dive into data structures, algorithms,
									and architectural patterns.
								</p>
							</div>
						</div>
						<div className="flex gap-4 items-start">
							<div className="bg-accent-blue/10 p-2 rounded-lg">
								<span
									className="text-accent-blue text-base"
									data-icon="palette">
									<MdPalette />
								</span>
							</div>
							<div>
								<Heading as="h6">Creative Logic</Heading>

								<p className="text-text-secondary text-sm">
									Integrating design thinking principles into
									the software development lifecycle.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}

export default SectionE;
