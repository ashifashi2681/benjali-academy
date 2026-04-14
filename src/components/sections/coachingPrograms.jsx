import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import {
	MdArrowForward,
	MdCurrencyExchange,
	MdFactCheck,
	MdPsychology,
	MdRocketLaunch,
} from "react-icons/md";
import Button from "../ui/Button";

const data = [
	{
		icon: <MdPsychology />,
		title: "Founder Mindset",
		desc: "Develop the psychological resilience, leadership intuition, and mental frameworks required to navigate the high-stakes startup ecosystem.",
	},
	{
		icon: <MdFactCheck />,
		title: "Market Validation",
		desc: "Master the art of customer discovery and data-driven iteration to ensure your product solves a real-world pain point with a clear ROI.",
	},
	{
		icon: <MdRocketLaunch />,
		title: "Scale-up Mastery",
		desc: "Transition from a small team to a robust organization with repeatable sales processes, operational excellence, and cultural integrity.",
	},
	{
		icon: <MdCurrencyExchange />,
		title: "Exit Strategy",
		desc: "Prepare for the ultimate milestone. Learn how to maximize company value, navigate due diligence, and execute a successful acquisition or IPO.",
	},
];

function CoachingPrograms({ id }) {
	return (
		<Section id={id}>
			<div class="text-center mb-16">
				<Heading
					className="mb-6"
					helperText="explore coaching programs">
					Entrepreneurship Coaching Programs
				</Heading>
				<p class="main-description mx-auto">
					Designed specifically for high-impact founders. We provide a
					structured roadmap through the most critical phases of the
					entrepreneurial journey.
				</p>
			</div>
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{data?.map((itm, i) => (
					<div
						key={i}
						class="group relative bg-surface/70 p-8 rounded-xl border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/30 flex flex-col">
						<div class="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
							<span class="text-primary-600 text-lg" data-icon="">
								{itm.icon}
							</span>
						</div>
						<Heading as="h4" className="mb-3">
							{itm.title}
						</Heading>
						<p class="text-text-secondary text-sm leading-relaxed">
							{itm.desc}
						</p>
						<div class="mt-3 flex items-center text-primary-600 font-semibold text-xs uppercase tracking-wider group-hover:gap-2 transition-all">
							Learn More{" "}
							<span class="text-sm" data-icon="arrow_forward">
								<MdArrowForward />
							</span>
						</div>
					</div>
				))}
			</div>

			<div class="bg-secondary-800 rounded-3xl mt-10 p-8 flex flex-col md:flex-row items-center justify-between gap-8">
				<div class="text-center md:text-left">
					<h2 class="text-base font-bold text-white mb-2">
						Ready to accelerate your journey?
					</h2>
					<p class="text-slate-400 text-sm">
						Join 500+ successful founders who have scaled their
						ventures with our coaching.
					</p>
				</div>
				<div class="flex flex-col sm:flex-row gap-4">
					<Button variant="outline">Book Strategy Call</Button>
					<Button variant="gradient">View Syllabus</Button>
				</div>
			</div>
		</Section>
	);
}

export default CoachingPrograms;
