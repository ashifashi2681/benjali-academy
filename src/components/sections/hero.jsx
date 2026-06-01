import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import Button from "../ui/Button";

function Hero({ id, data }) {
	return (
		<Section id={id} className="mt-8">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
				<div className="space-y-8 max-w-2xl">
					<div className="inline-flex items-center px-4 py-2 bg-surface rounded-full">
						<span className="text-xxs uppercase tracking-[0.2em] font-bold text-accent-blue">
							{data?.hint}
						</span>
					</div>
					<Heading as="h1">
						{data?.title}
						{data?.titleAccent && (
							<span className="text-accent-gold">
								{" "}
								{data.titleAccent}
							</span>
						)}
					</Heading>
					<p className="main-description">{data?.desc}</p>
					<div className="flex flex-wrap gap-4 pt-4">
						<Button variant="gradient" size="xl">
							Explore Programs
						</Button>

						<Button variant="outline" size="xl">
							Partner With Us
						</Button>
					</div>
				</div>
				<div className="relative hidden lg:block">
					<div className="absolute -top-20 -right-20 w-80 h-80 bg-accent-blue/30 rounded-full blur-3xl"></div>
					<div className="relative rounded-[2rem] overflow-hidden shadow-2xl rotate-2 transform hover:rotate-0 transition-transform duration-700">
						<img
							alt="Abstract 3D digital sculpture"
							className="w-full h-[550px] object-cover"
							src="https://img.freepik.com/free-photo/3d-rendering-abstract-flowing-shape-with-twisted-colorful-stripes_250435-1793.jpg?semt=ais_incoming&w=740&q=80"
						/>
					</div>
					<div className="absolute bottom-10 -left-10 glass-card p-6 rounded-2xl shadow-xl max-w-[200px]">
						<p className="text-xs font-bold text-accent-blue uppercase tracking-widest mb-1">
							{data?.state?.title}
						</p>
						<p className="text-md font-headline font-extrabold text-text-primary">
							{data?.state?.count}
						</p>
					</div>
				</div>
			</div>
		</Section>
	);
}

export default Hero;
