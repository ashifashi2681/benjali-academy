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
import Card from "../ui/card";

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
			<div className="text-center mb-16">
				<Heading
					className="mb-6"
					helperText="explore coaching programs">
					Entrepreneurship Coaching Programs
				</Heading>
				<p className="main-description mx-auto">
					Designed specifically for high-impact founders. We provide a
					structured roadmap through the most critical phases of the
					entrepreneurial journey.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
				{data?.map((itm, i) => (
					<Card
						key={i}
						className="group relative bg-surface/70 border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary-500/30 flex flex-col">
						<div className="w-14 h-14 bg-white rounded-lg flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
							<span
								className="text-primary-600 text-lg"
								data-icon="">
								{itm.icon}
							</span>
						</div>
						<Heading as="h4" className="mb-3">
							{itm.title}
						</Heading>
						<p className="text-text-secondary text-sm leading-relaxed">
							{itm.desc}
						</p>
						<Button
							className="mt-3"
							size="sm"
							variant="link"
							icon={<MdArrowForward />}
							iconPosition="right">
							Learn More
						</Button>
					</Card>
				))}
			</div>

			<Card className="bg-secondary-800 mt-10">
				<div className="flex flex-col md:flex-row items-center justify-between gap-8">
					<div className="text-center md:text-left">
						<h2 className="text-base font-bold text-white mb-2">
							Ready to accelerate your journey?
						</h2>
						<p className="text-slate-400 text-sm">
							Join 500+ successful founders who have scaled their
							ventures with our coaching.
						</p>
					</div>
					<div className="flex flex-col sm:flex-row gap-4">
						<Button variant="outline">Book Strategy Call</Button>
						<Button variant="gradient">View Syllabus</Button>
					</div>
				</div>
			</Card>
		</Section>
	);
}

export default CoachingPrograms;
