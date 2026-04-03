import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";

function Portfolio() {
	return (
		<Section bg="bg-surface">
			<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
				<div className="max-w-xl">
					<Heading
						helperText="what we are doing so far."
						className="mb-6">
						Selected Archives
					</Heading>
					<p className="text-text-secondary">
						A curated selection of projects where form follows
						function in its most elegant state.
					</p>
				</div>
				{/* <button className="text-text-primary font-bold border-b-2 border-border-strong hover:border-accent-blue pb-1 transition-all">
					View All Case Studies
				</button> */}
			</div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
				<div className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
					<img
						alt="Mobile app UI design"
						className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqBJin2zXU1rWcgp7MJa3yVsglfM7Cild0h7BnC6xcLXhmAZHQdB-7XfbrH9GmFHQ9p3eaj7ClmKOrXM9t2gtyfIvvA1j8hvPPYU1SqSLc5uUiW6AcOna8BSoL6UCTe4rOr9n3QBaoRrOG-AWYmIBDxgGtLIixAvuqKmzOtgvDrqXF5Ou8gwc758mdHvgUbcmKIeG73mDEx5KAEONRSBE-BXEqiT-H_qnPHPPBRC-4DGNQOdpgsCCO8OV1nGEPE0VEu9qWMur8hfpt"
					/>
					<div className="absolute inset-0 bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12 text-text-primary backdrop-blur-[2px]">
						<Heading helperText="Fintech" as="h3" className="mb-6">
							Nexus Banking Suite
						</Heading>
						<div>
							<span className="bg-surface/50 backdrop-blur-md px-6 py-3 rounded-full text-sm font-semibold">
								View Case Study
							</span>
						</div>
					</div>
				</div>
				<div className="group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer">
					<img
						alt="Branding project"
						className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8yOx1UyeDEEkiEuAjLF1oNzFrAjSzLjkntS-nmk7QDXxvQXpcgZRowCZjEdtDyhVHFbVbSspyC-8DEakVuY0EYz5VLKGB2Mi3yax5R-9oxgWoSXpEsWJ9F_8ceG4Ou9-w2BW7jW8zOifcjZfQIVN55P_d5yfHhuYIvECtfN0iYGZidsXl86JvcALLMhxif1MUXYRoZT1o60zWIHTWwbkRHnPqWMyhLj1VGs-TFy3qojCca0QiNmTglyAprFhQR6o5iWDyq9JyBgba"
					/>
					<div className="absolute inset-0 bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-12 text-text-primary backdrop-blur-[2px]">
				
						<Heading
							helperText="Lifestyle"
							as="h3"
							color="text-white/80"
							className="mb-6">
							Aura Skincare Lab
						</Heading>
						<div>
							<span className="bg-surface/50 backdrop-blur-md px-6 py-3 rounded-full text-sm font-semibold">
								View Case Study
							</span>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}

export default Portfolio;
