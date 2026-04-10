import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import {
	MdGroupAdd,
	MdRocketLaunch,
	MdSchedule,
	MdVerified,
	MdWork,
} from "react-icons/md";
import Button from "../ui/Button";

const data = [
	{
		badge: "Leadership",
		img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDEZBDlbvXiVMuEmBBHmQC-3yjGup2Sq4W9GJbFI8LnP6miWJtGnfYEe5mDwBcFLigyCEyAAdHYlnLpHIAh2MSqehmhFDR-4Hbth2EEXdXYtEUYsgKiipqdlwzDdBUnMVglf_6kkA8gOv9ooE3dSGYPS_io_1yG7SC8nN_6pyJ18GZYg5s5eEh5QuNI0Y3F1gMSkzzaqyAVmsAoJnBGi9_hElCmLIgR5rC7kmigfUVSG0uBs1yRdyTC9fgrd3n14Ty_vAlbfd1lqn6N",
		duration: "12 Weeks",
		title: "Executive Leadership Mastery",
		desc: "Develop advanced decision-making frameworks and psychological tools to lead complex organizations through digital transformation.",
		helpText1: "Global Executive Certification",
		helpText2: "Fortune 500 Network Access",
		icon: <MdWork />,
	},
	{
		badge: "Finance",
		img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfg3EHGgRsBEut10TxsjgYiq-p1xerpSvjGj6DUwQX6SlppWMMGzCVpYEI-byBAqd2K_-TzNS0j8xUQTC5POEFe0PGTqd3NYypvNKdQLaSzT0895hIErofEjMlZ6S75J-vlo40wokhxR5hGM4KHnI9U8756hSglKfxfZXumyEM2ENYPD4oauICQR6a4g9b6U3V6yh99anHevfur6MOmGEvAtj03LWmMfOjMXoE3miPZUWyX7tN2wLWzyCqcGYoDjxHNV2RQ2n4O1qC",
		duration: "4 Months",
		title: "Venture Capital & IPO Strategy",
		desc: "Master the lifecycle of high-growth startups, from seed funding mechanics to preparing for public market entry and global scale.",
		helpText1: "FinTech Analyst Diploma",
		helpText2: "Investor Pitch Mentorship",
		icon: <MdGroupAdd />,
	},
	{
		badge: "Product",
		img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAabroGJ0NyAgL7DD965iyyBGl3iPRCidXbdQkbrYN3AJwBcqOcnaAtYsvR58ARhGvgHkmDHii3LuynhG-l0ucxGYoihezjTRLUqDtK2hFd2g_HAqOEtXJmoQZwBgQ5IRjgthxFWyhtORmQkrNPydi5JdcBvDfy26yPTo6Qc-x4tC9qt4oe3645N7C4LW-fsYpMx1mOobs1cUBlCU6cPYVEvqgGev3YS5qnD8OndUdnw6PtmM1Ua6PpObdy6wT-LNENSwwp3up47YRQ",
		duration: "8 Months",
		title: "Growth Product Management",
		desc: "A data-driven deep dive into user acquisition, retention loops, and building products that achieve massive market resonance.",
		helpText1: "Certified Growth Specialist",
		helpText2: "Silicon Valley Internship",
		icon: <MdRocketLaunch />,
	},
];

const Card = ({ item }) => (
	<div className="bg-surface border border-border rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col">
		<div className="relative h-56 overflow-hidden">
			<img
				className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
				data-alt="Modern professional office setting with glass walls and minimalist furniture, bright natural daylight reflecting off clean surfaces"
				src={item.img}
			/>
			<div className="absolute top-4 left-4 bg-secondary-400 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
				{item.badge}
			</div>
		</div>
		<div className="p-8 flex flex-col flex-grow">
			<div className="flex items-center gap-2 text-accent-blue font-bold text-xs mb-3">
				<span className="text-base">
					<MdSchedule />
				</span>
				<span>{item.duration}</span>
			</div>
			<Heading as="h4" className="mb-4">
				{item.title}
			</Heading>
			<p className="text-text-secondary text-sm leading-relaxed mb-6">
				{item.desc}
			</p>
			<div className="mt-auto pt-6 border-t border-border">
				<div className="flex flex-col gap-3 mb-6">
					<div className="flex items-center gap-3 text-sm font-medium text-text-secondary">
						<span className="text-accent-blue text-base">
							<MdVerified />
						</span>
						<span>{item.helpText1}</span>
					</div>
					<div className="flex items-center gap-3 text-sm font-medium text-text-secondary">
						<span className="text-accent-blue text-base">
							{item.icon}
						</span>
						<span>{item.helpText2}</span>
					</div>
				</div>
				<Button color="secondary-500" variant="gradient">
					Course Details
				</Button>
			</div>
		</div>
	</div>
);

function Sectionj({ id }) {
	return (
		<Section bg="" id={id}>
			<Heading helperText="Academy Programs" className="mb-6">
				Strategic Business Courses
			</Heading>
			<p className="main-description mb-8">
				Master the modern economy with our industry-leading curriculum
				designed for executives, founders, and career professionals.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{data?.map((itm, i) => (
					<Card key={i} item={itm} />
				))}
			</div>
			
		</Section>
	);
}

export default Sectionj;
