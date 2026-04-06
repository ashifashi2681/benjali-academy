import React from "react";
import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import Section from "../ui/section";
import Button from "../ui/Button";
import Heading from "../ui/heading";

const people = [
	{
		name: "Ethan Lee",
		role: "Product Manager",
		image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1200",
		shift: 34,
		rotate: -7,
	},
	{
		name: "Noah Carter",
		role: "UI/UX Designer",
		image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1200",
		shift: 18,
		rotate: -5,
	},
	{
		name: "Ava Johnson",
		role: "Frontend Engineer",
		image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1200",
		shift: 8,
		rotate: -2,
	},
	{
		name: "Sophia Patel",
		role: "Operations Lead",
		image: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1200",
		shift: 0,
		rotate: 0,
	},
	{
		name: "Liam Brown",
		role: "Data Analyst",
		image: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1200",
		shift: 8,
		rotate: 2,
	},
	{
		name: "Mason Grant",
		role: "Backend Engineer",
		image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1200",
		shift: 18,
		rotate: 5,
	},
	{
		name: "Isabella Wong",
		role: "Growth Strategist",
		image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1200",
		shift: 34,
		rotate: 7,
	},
];

const features = [
	{
		title: "Real-Time Collaboration",
		description:
			"Communicate seamlessly and keep everyone in sync with built-in messaging, file sharing, and live updates.",
	},
	{
		title: "Task & Project Tracking",
		description:
			"Assign tasks, set deadlines, and visualize progress with boards, lists, and timelines tailored to your team.",
	},
	{
		title: "Performance Insights",
		description:
			"Make smarter decisions with analytics that show productivity trends, bottlenecks, and team workload balance.",
	},
];

function TeamCard({ person }) {
	return (
		<figure
			className="relative h-[230px] w-[130px] shrink-0 overflow-hidden rounded-[24px] shadow-[0_20px_45px_-30px_rgba(15,23,42,0.75)] sm:h-[280px] sm:w-[160px] md:h-[340px] md:w-[195px]"
			style={{
				transform: `translateY(${person.shift}px) rotate(${person.rotate}deg)`,
			}}>
			<Image
				src={person.image}
				alt={person.name}
				fill
				sizes="(max-width: 640px) 130px, (max-width: 768px) 160px, 195px"
				className="object-cover"
			/>
			<div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/80 via-black/45 to-transparent sm:h-28 md:h-32" />
			<figcaption className="absolute inset-x-0 bottom-0 z-10 px-3 pb-3 text-white sm:px-4 sm:pb-4">
				<p className="text-xs font-semibold tracking-[0.02em] sm:text-sm md:text-base">
					{person.name}
				</p>
				<p className="text-[10px] text-white/85 sm:text-xs md:text-sm">
					{person.role}
				</p>
			</figcaption>
			<div className="absolute inset-0 rounded-[24px] ring-1 ring-inset ring-black/10" />
		</figure>
	);
}

function Team({id}) {
	const duplicatedPeople = [...people, ...people];

	return (
		<Section id={id} className="overflow-hidden">
			<div className="mx-auto max-w-4xl text-center">
				<Heading helperText="Streamline our Team" className="mb-6">
					Supercharge Our Workflow
				</Heading>
				<p className="mx-auto main-description">
					All-in-one platform to plan, collaborate, and deliver faster
					and smarter.
				</p>
				<div className="mt-7 flex justify-center">
					<Button
						variant="gradient"
						color="secondary-500"
						size="lg"
						icon={<FiArrowRight />}
						iconPosition="right">
						Get started for free
					</Button>
				</div>
			</div>

			<div className="team-carousel relative mt-14 md:mt-16">
				<div className="team-track flex w-max items-end gap-3 sm:gap-4 md:gap-5">
					{duplicatedPeople.map((person, index) => (
						<div
							key={`${person.name}-${index}`}
							aria-hidden={index >= people.length}>
							<TeamCard person={person} />
						</div>
					))}
				</div>
			</div>

			<div className="mt-16 grid gap-9 border-black/10 pt-9 text-center sm:grid-cols-2 lg:grid-cols-3 lg:border-t">
				{features.map((item, index) => (
					<div
						key={item.title}
						className={`mx-auto max-w-sm px-4 ${
							index > 0 ? "lg:border-l lg:border-black/10" : ""
						}`}>
						<Heading as="h3">{item.title}</Heading>
						<p className="mt-3 text-sm leading-7 text-text-secondary/90">
							{item.description}
						</p>
					</div>
				))}
			</div>
		</Section>
	);
}

export default Team;
