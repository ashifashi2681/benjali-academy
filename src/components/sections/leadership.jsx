import React from "react";
import Section from "../ui/section";
import {
	MdArrowForward,
	MdRocketLaunch,
	MdSpeakerNotes,
	MdVerified,
} from "react-icons/md";
import Heading from "../ui/heading";
import Button from "../ui/Button";

function Leadership({ id }) {
	return (
		<Section
			bg="bg-gradient-to-l from-primary-200/20 to-transparent"
			id={id}>
			<div className="relative  flex items-center overflow-hidden">
				<div className=" grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
					<div className="lg:col-span-5 relative order-2 lg:order-1">
						<div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] border-8 border-white">
							<img
								alt="Casac Benjali"
								className="w-full h-full object-cover"
								data-alt="Sophisticated middle-aged professional man in a tailored charcoal suit, confident expression, soft natural window lighting, studio setting with clean gray background"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNLDUhxrjSbp3FkIzvJvHE4xCo0Iqx_MdDut9IfbwUMm9gzuPjekxg9stTFFBSv8cpdOXAB3HeV82mKLBJvwOm1hpeMSqWY7lzcGTjt2pVnYhq2Q9Y3C0yWW-AamYFe1txpdiSWG8UApqitYr2MaFdbgkDrmRWZOTMVaBLuQaz0ElUsW0a4Lb-ZFwsSzR85N5UbOAnReAto2B4T4BBiGGluE2ZN_y9lXZj-fDu2o8EXbLLP7b1Kk2LfLl64p_heCw3qE7uqRT1Htys"
							/>
						</div>
						<div className="absolute top-6 -right-6 glass-card p-6 rounded-xl shadow-lg hidden md:block z-20">
							<div className="flex items-center gap-3">
								<span
									className="text-accent-blue text-md"
									data-icon="verified">
									<MdVerified />
								</span>
								<div>
									<p className="text-xs font-label uppercase tracking-widest text-text-primary">
										Certification
									</p>
									<p className="font-bold text-text-secondary text-sm">
										Global Master Trainer
									</p>
								</div>
							</div>
						</div>
						<div className="absolute -bottom-3 left-10 glass-card p-8 rounded-xl shadow-lg hidden md:block z-20 max-w-[240px]">
							<p className="text-text-primary text-base font-extrabold tracking-tighter">
								15+
							</p>
							<p className="text-sm font-body text-text-secondary font-medium leading-tight">
								Years of high-impact leadership and
								organizational transformation
							</p>
						</div>
					</div>
					<div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
						<div className="space-y-4">
							<Heading helperText="spotlight">
								Lead Trainer:{" "}
								<span className="text-primary-500">
									Casac Benjali
								</span>
							</Heading>
							<p className="main-description">
								A spotlight section on his expertise,
								leadership, and professional background.
								Architecting future-ready leaders through
								strategic mentorship.
							</p>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
							<div className="p-6 rounded-xl bg-surface border border-border/30 hover:shadow-md transition-all">
								<span
									className="text-secondary-500 mb-4 block text-base"
									data-icon="clinical_notes">
									<MdSpeakerNotes />
								</span>
								<Heading as="h4" className="mb-2">
									Executive Coaching
								</Heading>
								<p className="text-sm text-text-secondary">
									Deep expertise in C-suite behavioral
									dynamics and strategic alignment.
								</p>
							</div>
							<div className="p-6 rounded-xl bg-surface border border-border/30 hover:shadow-md transition-all">
								<span
									className="text-secondary-500 mb-4 block text-base"
									data-icon="rocket_launch">
									<MdRocketLaunch />
								</span>
								<Heading as="h4" className="mb-2">
									Scaling Teams
								</Heading>
								<p className="text-sm text-text-secondary">
									Proven track record in building
									high-performance cultures for tech unicorns.
								</p>
							</div>
						</div>
						<div className="flex flex-wrap gap-4 pt-4">
							<Button
								variant="gradient"
								icon={<MdArrowForward />}
								iconPosition="right">
								Explore Portfolio
							</Button>
							<Button variant="outline">View Credentials</Button>
						</div>
					</div>
				</div>
			</div>

			<div className="py-24 overflow-hidden">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
					<div className="space-y-6">
						<Heading>Professional Leadership &amp; Impact</Heading>
						<p className="main-description">
							With a career spanning over a decade and a half,
							Casac has been at the forefront of human capital
							development. His methodology blends psychological
							insights with practical business acumen to deliver
							measurable growth.
						</p>
						<div className="space-y-4">
							<div className="flex gap-4">
								<div className="w-1 bg-primary rounded-full"></div>
								<div>
									<Heading as="h5" className="mb-4">
										Pioneering Adaptive Leadership
									</Heading>
									<p className="text-text-secondary text-sm">
										Implementing frameworks that allow
										leaders to thrive in volatile,
										uncertain, complex, and ambiguous (VUCA)
										environments.
									</p>
								</div>
							</div>
							<div className="flex gap-4">
								<div className="w-1 bg-secondary rounded-full"></div>
								<div>
									<Heading as="h5" className="mb-4">
										Data-Driven Development
									</Heading>

									<p className="text-text-secondary text-sm">
										Leveraging quantitative metrics to track
										and optimize soft-skill progression
										across global departments.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="relative">
						<div className="bg-surface h-96 rounded-3xl overflow-hidden shadow-inner relative group">
							<img
								alt="Professional setting"
								className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
								data-alt="Modern minimalist office interior with floor-to-ceiling windows, sleek furniture, and soft daylight, suggesting high-level corporate leadership"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2jcJWK8BiR1kfVZyesb9i1gZm02bYhRxgaeQHYjo_9nt4B7nq6ucZCjF5i-5CbyaQKu4kuRXpcIx4ama8zM9NQcT1Xo2Z9hYm5RcOy7X4Vdiqh-zS06s_UuYFUqnMIcc6_1M7LA-4DyIQJuKuNdPBaRbFoBrTTl-pECZ5tWTHQw_A3HHaJI2wagyxhDBdXl-qqm4YtvDlWGNNLfBb5fITLc7BKwI8pRP9lV3v-4ppGusUDr1hfj2usXBZyjVuOs2QVarl8SWVXWdc"
							/>
							<div className="absolute inset-0 bg-primary-500/40 mix-blend-multiply pointer-events-none"></div>
						</div>
						<div className="absolute top-1/2 -left-10 transform -translate-y-1/2 glass-card p-6 rounded-2xl shadow-2xl border border-white/50 w-48 text-center">
							<p className="text-text-primary text-base font-black">
								500+
							</p>
							<p className="text-xs uppercase tracking-widest">
								Executives Trained
							</p>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}

export default Leadership;
