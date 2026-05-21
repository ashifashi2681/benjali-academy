"use client";

import React, { useState } from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import Image from "next/image";
import {
	MdSchedule,
	MdVerified,
} from "react-icons/md";
import Button from "../ui/Button";
import Card from "../ui/card";
import ModalCource from "../ui/modal-cource";



const Box = ({ item, onViewDetails }) => {
	const imageSrc = item?.img || "/next.svg";
	const imageAlt = item?.title
		? `${item.title} course preview`
		: "Course preview image";

	return (
		<Card
		haveBody={false}
		className="bg-surface border border-border overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col">
		<div className="relative h-56 overflow-hidden">
			<Image
				src={imageSrc}
				alt={imageAlt}
				fill
				sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
				className="object-cover group-hover:scale-105 transition-transform duration-500"
				quality={85}
			/>
			<div className="absolute top-4 left-4 bg-secondary-400 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest">
				{item?.badge}
			</div>
		</div>
		<Card className="flex flex-col flex-grow">
			<div className="flex items-center gap-2 text-accent-blue font-bold text-xs mb-3">
				<span className="text-base">
					<MdSchedule />
				</span>
				<span>{item?.duration}</span>
			</div>
			<Heading as="h4" className="mb-4">
				{item?.title}
			</Heading>
			<p className="text-text-secondary text-sm leading-relaxed mb-6">
				{item?.desc}
			</p>
			<div className="mt-auto pt-6 border-t border-border">
				<div className="flex flex-col gap-3 mb-6">
					<div className="flex items-center gap-3 text-sm font-medium text-text-secondary">
						<span className="text-accent-blue text-base">
							<MdVerified />
						</span>
						<span>{item?.feature1}</span>
					</div>
					<div className="flex items-center gap-3 text-sm font-medium text-text-secondary">
						<span className="text-accent-blue text-base">
							{item?.icon}
						</span>
						<span>{item?.feature2}</span>
					</div>
				</div>
				<Button
					color="secondary-500"
					variant="gradient"
					onClick={() => onViewDetails?.(item)}>
					Course Details
				</Button>
			</div>
		</Card>
	</Card>
	);
};

function Sectionj({ id, data }) {
	const [selectedCourse, setSelectedCourse] = useState(null);

	return (
		<Section bg="" id={id}>
			<Heading helperText={data?.hint} className="mb-6">
				{data?.title}
			</Heading>
			<p className="main-description mb-8">{data?.desc}</p>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{data?.cards?.map((itm, i) => (
					<Box key={i} item={itm} onViewDetails={setSelectedCourse} />
				))}
			</div>
			<ModalCource
				isOpen={Boolean(selectedCourse)}
				onClose={() => setSelectedCourse(null)}
				course={selectedCourse}
			/>
		</Section>
	);
}

export default Sectionj;
