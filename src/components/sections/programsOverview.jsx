import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import { MdCode, MdSchool } from "react-icons/md";

function ProgramsOverview() {
	return (
		<Section bg="bg-surface">
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 overflow-hidden">
				<div className="p-12 rounded-[2.5rem] bg-muted relative overflow-hidden group">
					<div className="relative z-10">
						<Heading
							helperText="Educational Tracks"
							as="h3"
							className="mb-6">
							BCA Program Overview
						</Heading>
						<p className="main-description mb-8">
							Our Bachelor of Computer Applications focuses on the
							synergy between advanced coding and high-end design
							principles.
						</p>
						<button className="bg-surface text-text-primary px-8 py-4 rounded-xl font-bold shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
							View More
						</button>
					</div>
					<span className="absolute -bottom-4 -right-4 text-[200px] text-text-muted/50 group-hover:rotate-12 transition-transform duration-700">
						<MdCode />
					</span>
				</div>
				<div className="p-12 rounded-[2.5rem] bg-secondary-900 text-white overflow-hidden relative group">
					<div className="relative z-10">
						<Heading
							as="h3"
							helperText="Expert Specialization"
							color="text-white"
							className="mb-5">
							Advanced Studies
						</Heading>
						<p className="main-description !text-white/60 mb-8">
							Post-graduate pathways designed for experienced
							practitioners seeking to master specialized digital
							sub-disciplines.
						</p>
						<button className="bg-accent-blue text-white px-8 py-4 rounded-xl font-bold hover:bg-tertiary-dim hover:-translate-y-1 transition-all shadow-lg shadow-tertiary/20">
							View More
						</button>
					</div>
					<span className="absolute -bottom-4 -right-4 text-[200px] text-white/5 group-hover:-rotate-12 transition-transform duration-700">
						<MdSchool />
					</span>
				</div>
			</div>
		</Section>
	);
}

export default ProgramsOverview;
