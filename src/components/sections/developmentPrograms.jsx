import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import { MdArrowOutward } from "react-icons/md";

function DevelopmentPrograms({ id }) {
	const data = [
		{
			title: "Build Leadership Presence",
			desc: "Develop strong leadership qualities through real-world scenarios and immersive coaching techniques.",
			class: "bg-white organic-tilt-1 border-border",
		},
		{
			title: "Drive Engagement & Accountability",
			desc: "Design programs that improve employee engagement, ownership, and measurable results across departments.",
			class: "bg-[#e7f3e8] organic-tilt-2 border-green-200/50",
		},
		{
			title: "Handle Workplace Challenges",
			desc: "Equip leaders with tools to manage conflicts, handle objections, and foster a healthy culture of feedback.",
			class: "bg-white organic-tilt-1 border-border",
		},
		{
			title: "Strategic Thinking & Execution",
			desc: "Enable leaders to think strategically, align team goals, and execute vision with precision.",
			class: "bg-[#e7f3e8] organic-tilt-2 border-green-200/50",
		},
	];
	return (
		<Section className="relative overflow-hidden" id={id}>
			<div className="max-w-7xl mx-auto relative z-10">
				<div className="flex flex-col items-center text-center mb-16">
					<Heading
						className="mb-6"
						helperText="managers & leaders development programs">
						Program Objectives
					</Heading>
					<p className="main-description">
						Create impactful leadership and corporate training
						programs designed to enhance managerial effectiveness,
						strategic thinking, and organizational growth.
					</p>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{data?.map((itm, i) => (
						<div
							key={i}
							className={`group relative flex flex-col p-8 rounded-3xl shadow-sm hover-lift border transition-all duration-300 ${itm.class}`}>
							<div className="flex justify-between items-start mb-8">
								<span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-surface text-text-secondary shadow-md font-bold text-sm">
									0{Number(i + 1)}
								</span>
								<span
									className="material-symbols-outlined text-outline group-hover:text-primary transition-colors"
									data-icon="arrow_outward">
									<MdArrowOutward />
								</span>
							</div>
                            <Heading as="h4" className="mb-4">{itm.title}</Heading>
							<p className="text-sm text-text-secondary leading-relaxed">
								Develop strong leadership qualities through
								real-world scenarios and immersive coaching
								techniques.
							</p>
						</div>
					))}
				</div>
			</div>

			<div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary-500/30 blur-[100px] rounded-full"></div>
			<div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-secondary-500/30 blur-[100px] rounded-full"></div>
		</Section>
	);
}

export default DevelopmentPrograms;
