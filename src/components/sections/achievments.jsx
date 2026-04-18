import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import {
	MdBolt,
	MdCenterFocusStrong,
	MdDewPoint,
	MdOutlineHeartBroken,
	MdRocketLaunch,
	MdStarRate,
} from "react-icons/md";
import Card from "../ui/card";

const data = [
	{
		icon: <MdRocketLaunch />,
		metrics: "80%",
		title: "Engagement Impact",
		desc: "Significant increase in employee retention and internal satisfaction scores across pilot departments.",
	},
	{
		icon: <MdCenterFocusStrong />,
		metrics: "95%",
		title: "Strategic Alignment",
		desc: "Leaders now operate under a unified strategic roadmap ensuring seamless execution of global initiatives.",
	},
	{
		icon: <MdBolt />,
		metrics: "45%",
		title: "Resilience Growth",
		desc: "Measured enhancement in adaptive capacity and stress management among senior executive participants.",
	},
	{
		icon: <MdDewPoint />,
		metrics: "12.4x",
		title: "Goal Orientation",
		desc: "Dramatic increase in quarterly objective completion rate following targeted management modules.",
	},
	{
		icon: <MdStarRate />,
		metrics: "5.0",
		title: "Leadership Dev",
		desc: "Flawless participant satisfaction rating for our executive coaching and mentorship programs.",
	},
	{
		icon: <MdOutlineHeartBroken />,
		metrics: "98%",
		title: "Confidence Building",
		desc: "Participants report significantly higher autonomy in critical decision making and project leadership.",
	},
];

function Achievments({ id }) {
	return (
		<Section id={id}>
			<div className="max-w-6xl mx-auto">
				<div className="mb-10 text-center">
					<Heading className="mb-6" helperText="highlights">
						Impact &amp; Achievements
					</Heading>
					<p className="main-description mx-auto">
						A snapshot of measurable outcomes, participant growth,
						and organizational transformation driven by our
						leadership programs.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{data?.map((itm, i) => (
						<Card
							key={itm.title ?? i}
							className="hover-gradient-skew group bg-surface border border-border shadow-sm flex flex-col">
							<div className="mb-4 flex justify-between items-start">
								<span className="text-text-muted text-lg transition-colors duration-300 group-hover:text-white/90">
									{itm.icon}
								</span>
							</div>
							<div className="mt-auto">
								<div className="text-xl font-black text-primary-500 mb-4 transition-colors duration-300 group-hover:text-white">
									{itm.metrics}
								</div>
								<Heading
									as="h5"
									className="mb-3 transition-colors duration-300 group-hover:text-white">
									{itm.title}
								</Heading>
								<p className="text-slate-500 text-sm leading-relaxed transition-colors duration-300 group-hover:text-white/85">
									{itm.desc}
								</p>
							</div>
						</Card>
					))}
				</div>

				{/* <div className="mt-20 pt-10 border-t border-border flex flex-wrap gap-16 justify-center">
					<div className="text-center">
						<div className="text-slate-900 font-black text-3xl mb-1">
							2.4k+
						</div>
						<div className="text-slate-500 text-xs uppercase tracking-widest font-bold">
							Leaders Certified
						</div>
					</div>
					<div className="text-center">
						<div className="text-slate-900 font-black text-3xl mb-1">
							150+
						</div>
						<div className="text-slate-500 text-xs uppercase tracking-widest font-bold">
							Corporate Partners
						</div>
					</div>
					<div className="text-center">
						<div className="text-slate-900 font-black text-3xl mb-1">
							40M
						</div>
						<div className="text-slate-500 text-xs uppercase tracking-widest font-bold">
							Projected ROI
						</div>
					</div>
				</div> */}
			</div>
		</Section>
	);
}

export default Achievments;
