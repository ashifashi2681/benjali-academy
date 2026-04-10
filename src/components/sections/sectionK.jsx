import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import { MdSchedule } from "react-icons/md";
import Button from "../ui/Button";

const data = [
	{
		badge: "Intensive",
		img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBERTL_wLm5TyGY3OIIjajFIsQ1hqBQqHZ4Mz5kDdyep6ZOfejJzXdMcVNO4VW_GEDGxo3SOMZ0NvpBMerTYGfmlFjso8-y3prj5Mssywjdfdjz8pAEqwyrAXpbcZ2rw-IdzrQV8Fncv8b2U1GNHqOtVi-4skKG_Qbj-KMZivFIrFwwX6MDC8WeDE_xo2SFpvn1o1AfhbYP6Ot-s6SnQkaFoVUUys1_09v5l0Fq8V13TNRrP2xFrm_qwjW78rh33kuaVAv0560xGDMV",
		duration: "2 Weeks",
		title: "Holiday Tech Intensive",
		desc: "A fast-paced immersion into full-stack development. Master core frameworks through 10-hour daily sprints and collaborative projects.",
	},
	{
		badge: "Leadership",
		img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDr3F2Zk1g-0azpV17IAoIYQEUNF7HN-axcKeZNYn8-HqHNyacbk-OdY4zmbFJH_7loTWMA0TVRN_X4XFL_eOHA8evgTGWnXh21NY17w_E2fjUgNVIEduVSCtLYpjPa8lXy2ahK4Uscx0mdLps9xZCztk1C6LtDqSyHg6l4s5CQ5cdFj5j1DoyTELK7UoL5UMVF8j05pUUpGh5o1g74115scvWPfd1MRDMbxIv3y57z9LS46ZNbIbsQjBmkOUlY6IZxlYrSIHEHpPE4",
		duration: "10 Days",
		title: "Summer Leadership Camp",
		desc: "Dynamic workshop series focused on executive decision-making, emotional intelligence, and team management in high-pressure scenarios.",
	},
	{
		badge: "Business",
		img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4LQ7uVbuTeJqhkun-ijsx2acrz1G0nlHeb4OO1AAQuxrAoYK_zT3nWT6HcWvT_fa3tC5LQEqfVxlqkAtq3ECXqjmCu5snQkoWgTh4s-f_WIAATgTS7DC6BQxsUFKh6OanULcKOeIRD95z_VwVYTTfozlGNfHNc9Vlm0obei0u4q6RmVqm0GbxwdGTSu5z2AyjqYrWKJTOuQxWzi5BDknnWUMLIJ_xUlGHiNCw1OxhpkeGBbFfniB73Me80TGtZ4WIHhyzw7eV-hKF",
		duration: "1 Week",
		title: "Digital Marketing Blitz",
		desc: "Intense 7-day masterclassName on SEO, performance marketing, and brand storytelling. Rapid prototyping of real-world campaigns.",
	},
];

const Card = ({ item }) => (
	<div className="group bg-surface border border-border rounded-lg overflow-hidden flex flex-col shadow-sm hover:shadow-xl transition-all duration-300">
		<div className="relative h-64 overflow-hidden">
			<img
				className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
				data-alt="Modern collaborative workspace with students working on laptops in a sunlit airy environment with festive warm lighting"
				src={item.img}
			/>
			<div className="absolute top-4 right-4 bg-secondary-400 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
				{item.badge}
			</div>
		</div>
		<div className="p-8 flex flex-col flex-grow">
			<div className="flex items-center gap-2 text-accent-blue mb-3">
				<span className="text-base">
					<MdSchedule />
				</span>
				<span className="text-xs font-bold uppercase tracking-widest">
					{item.duration}
				</span>
			</div>
			<Heading as="h4" className="mb-3">
				{item.title}
			</Heading>
			<p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
				{item.desc}
			</p>
			<Button variant="gradient" color="secondary-500">
				Learn More
			</Button>
		</div>
	</div>
);

function SectionK({id}) {
	return (
		<Section bg="bg-primary-50/50" id={id}>
			<Heading helperText="Accelerate Your Learning" className="mb-6">
				Vacation Courses
			</Heading>
			<p className="main-description mb-8">
				Transform your holiday into a strategic career advantage with
				our high-intensity, short-term programs designed for ambitious
				learners.
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{data?.map((itm, i) => (
					<Card key={i} item={itm} />
				))}
			</div>
		</Section>
	);
}

export default SectionK;
