import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import Button from "../ui/Button";
import { MdArrowForward } from "react-icons/md";

function ProgramsOverview2({ id }) {
	return (
		<Section id={id}>
			<div className="text-center mb-16">
				<Heading helperText="benjali ecosystem" className="mb-6">
					Educational Pathways
				</Heading>
			</div>
			<div className="grid md:grid-cols-2 gap-8 lg:gap-12">
				<div className="group glass-effect premium-shadow rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-border/40 flex flex-col">
					<div className="relative h-64 overflow-hidden">
						<img
							alt="Digital interface concept"
							className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
							data-alt="Futuristic glowing blue digital code patterns and geometric shapes floating in a minimalist clean white environment with soft shadows"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuASVSIM15ZcHgS_ODFUtXtVpHE8k-8malZ7688e28H6HngajpWQpXTG_8a74Eyoxz_hrgPLbxibFSOStFxEjRCLjuhRyw68vIbNhSDKUorzxQ5CeiTWi6PzGoWxVvP9Y2CcGDvvONWnBbSlUC1DAl5NPC2aQOMvXmTwuOcwn5tv6_8uXIjAmaY7FY55WXdndZvVVrCecklzG-njn8fQJhLIcpBDN-1KGjKaGvZkQkguLN6ZN4z94oDT_Y33kgMZpeKHdbD9mtT6qVsi"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
						<div className="absolute bottom-4 left-6">
							<span className="bg-secondary-500 text-background text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
								Foundation
							</span>
						</div>
					</div>
					<div className="p-8 flex-grow flex flex-col">
						<Heading as="h4" className="mb-4">
							BCA Program Overview
						</Heading>
						<p className="text-text-secondary mb-6 leading-relaxed">
							Master the intersection of technology and
							creativity. Our core track emphasizes structural
							coding fundamentals paired with contemporary design
							principles for the modern web.
						</p>

						<div className="mt-auto flex justify-end items-center">
							<Button
								size="sm"
								className="group-hover:shadow-lg"
								icon={<MdArrowForward />}
								iconPosition="right">
								View More
							</Button>
						</div>
					</div>
				</div>
				<div className="group glass-effect premium-shadow rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2 border border-border/40 flex flex-col">
					<div className="relative h-64 overflow-hidden">
						<img
							alt="Advanced technology node"
							className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
							data-alt="A sophisticated glowing network of light trails and data nodes forming a globe shape in deep space teal and cyan hues"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuBshmsIGvPBsNFu2iti_PohzoqmjJKD_LtzV6lqE1iM90crYurYIkw59bWIcR3XwYx_tMHyHvSuQ_E0Cwweq989zC0WVDQ-XAzG8gtZxNwS3zFb5zZPP9kgJ6c2wvLFmI5U4OjeVN4fCEmtAQk_KUJnjZt5pe4-sb7LK6IMSgnIAXnkfxRsc-Xq8LwCR2VoYAWMXCyY_VpvedawODpxijP7fprn7vIhGH2jpTOlq8nPlb9VhwYlPGd4JP-HWw_zIjHcTN_KhqHW9QK4"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
						<div className="absolute bottom-4 left-6">
							<span className="bg-secondary-500 text-background text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full">
								Expertise
							</span>
						</div>
					</div>
					<div className="p-8 flex-grow flex flex-col">
						<Heading as="h4" className="mb-4">
							Advanced Studies
						</Heading>
						<p className="text-text-secondary mb-6 leading-relaxed">
							Accelerate your career with niche specializations.
							Designed for practitioners looking to lead
							innovation in post-graduate research and executive
							technology pathways.
						</p>

						<div className="mt-auto flex justify-end items-center">
							<Button
								size="sm"
								className="group-hover:shadow-lg"
								icon={<MdArrowForward />}
								iconPosition="right">
								View More
							</Button>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}

export default ProgramsOverview2;
