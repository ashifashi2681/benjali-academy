import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import { MdAnalytics, MdArchitecture, MdAutoAwesome } from "react-icons/md";

function StartegicApproch({id}) {
	return (
		<Section bg="bg-surface" id={id}>
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
				<div className="max-w-xl">
					<Heading helperText="Methodology" className="mb-6">
						Strategic Approach
					</Heading>
					<p className="main-description">
						Our workflow is an architectural journey through data,
						intuition, and technical mastery. We deconstruct
						complexity to build intuitive clarity.
					</p>
					<div className="mt-12 space-y-4">
						<p className="text-text-secondary font-medium flex items-center gap-2">
							<span className="w-8 h-[2px] bg-accent-blue"></span>
							Phase-based execution
						</p>
						<p className="text-text-secondary font-medium flex items-center gap-2">
							<span className="w-8 h-[2px] bg-accent-blue"></span>
							Outcome-driven design
						</p>
					</div>
				</div>
				<div className="relative pt-12 pb-12 lg:pt-0 lg:pb-0">
					<div className="flex flex-col gap-8 relative z-10 lg:pl-12">
						<div className="flex items-center gap-8 self-end md:mr-32 translate-x-4">
							<div className="w-32 h-32 flex-shrink-0 bg-primary-50 rounded-[2rem] flex items-center justify-center shadow-lg transform -rotate-6">
								<span className="text-xxxl text-accent-gold">
									<MdAnalytics />
								</span>
							</div>
							<div className="max-w-xs">
								<Heading as="h5" className="mb-2">
									Discovery
								</Heading>
								<p className="text-sm text-text-secondary">
									In-depth market research and stakeholder
									alignment to define core objectives.
								</p>
							</div>
						</div>
						<div className="flex items-center gap-8 md:ml-12">
							<div className="w-32 h-32 flex-shrink-0 bg-secondary-50 rounded-[2rem] flex items-center justify-center shadow-lg transform rotate-3">
								<span className="text-xxxl text-accent-blue">
									<MdArchitecture />
								</span>
							</div>
							<div className="max-w-xs">
								<Heading as="h5" className="mb-2">
									Architecture
								</Heading>
								<p className="text-sm text-text-secondary">
									Structuring the digital foundation with a
									focus on scalability and user flow.
								</p>
							</div>
						</div>
						<div className="flex items-center gap-8 self-end md:mr-12 -translate-x-4">
							<div className="w-32 h-32 flex-shrink-0 bg-primary-50 rounded-[2rem] flex items-center justify-center shadow-lg transform -rotate-3">
								<span className="text-xxxl text-accent-gold">
									<MdAutoAwesome />
								</span>
							</div>
							<div className="max-w-xs">
								<Heading as="h5" className="mb-2">
									Refinement
								</Heading>
								<p className="text-sm text-text-secondary">
									Polishing every interaction to achieve a
									premium, high-fidelity experience.
								</p>
							</div>
						</div>
					</div>
					<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-border bg-primary-50 rounded-full pointer-events-none -z-0 opacity-50"></div>
				</div>
			</div>
		</Section>
	);
}

export default StartegicApproch;
