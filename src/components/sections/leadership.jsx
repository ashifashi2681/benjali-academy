import React from "react";
import Section from "../ui/section";

function Leadership({ id }) {
	return (
		<Section id={id}>
			<div className="relative min-h-[921px] flex items-center overflow-hidden">
				<div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-primary-container/20 to-transparent"></div>
				<div className="absolute -bottom-48 -left-48 w-96 h-96 bg-tertiary-container/30 rounded-full blur-3xl"></div>
				<div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
					<div className="lg:col-span-5 relative order-2 lg:order-1">
						<div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl aspect-[4/5] border-8 border-white">
							<img
								alt="Casac Benjali"
								className="w-full h-full object-cover"
								data-alt="Sophisticated middle-aged professional man in a tailored charcoal suit, confident expression, soft natural window lighting, studio setting with clean gray background"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNLDUhxrjSbp3FkIzvJvHE4xCo0Iqx_MdDut9IfbwUMm9gzuPjekxg9stTFFBSv8cpdOXAB3HeV82mKLBJvwOm1hpeMSqWY7lzcGTjt2pVnYhq2Q9Y3C0yWW-AamYFe1txpdiSWG8UApqitYr2MaFdbgkDrmRWZOTMVaBLuQaz0ElUsW0a4Lb-ZFwsSzR85N5UbOAnReAto2B4T4BBiGGluE2ZN_y9lXZj-fDu2o8EXbLLP7b1Kk2LfLl64p_heCw3qE7uqRT1Htys"
							/>
						</div>
						<div className="absolute -top-6 -right-6 glass-card p-6 rounded-xl shadow-lg hidden md:block z-20">
							<div className="flex items-center gap-3">
								<span
									className="material-symbols-outlined text-primary scale-125"
									data-icon="verified">
									verified
								</span>
								<div>
									<p className="text-xs font-label uppercase tracking-widest text-outline">
										Certification
									</p>
									<p className="font-headline font-bold text-on-surface">
										Global Master Trainer
									</p>
								</div>
							</div>
						</div>
						<div className="absolute -bottom-10 -left-10 glass-card p-8 rounded-xl shadow-lg hidden md:block z-20 max-w-[240px]">
							<p className="text-primary font-headline text-4xl font-extrabold tracking-tighter">
								15+
							</p>
							<p className="text-sm font-body text-on-surface-variant font-medium leading-tight">
								Years of high-impact leadership and
								organizational transformation
							</p>
						</div>
					</div>
					<div className="lg:col-span-7 order-1 lg:order-2 space-y-8">
						<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-label text-sm font-semibold tracking-wide uppercase">
							<span className="w-2 h-2 rounded-full bg-primary"></span>
							Spotlight Profile
						</div>
						<div className="space-y-4">
							<h1 className="text-5xl lg:text-7xl font-headline font-extrabold text-on-surface tracking-tight leading-[1.1]">
								Lead Trainer:{" "}
								<span className="text-primary">
									Casac Benjali
								</span>
							</h1>
							<p className="text-xl lg:text-2xl font-body text-on-surface-variant leading-relaxed max-w-2xl font-light">
								A spotlight section on his expertise,
								leadership, and professional background.
								Architecting future-ready leaders through
								strategic mentorship.
							</p>
						</div>
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
							<div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/30 hover:shadow-md transition-all">
								<span
									className="material-symbols-outlined text-secondary mb-4 block"
									data-icon="clinical_notes">
									clinical_notes
								</span>
								<h3 className="font-headline font-bold text-lg text-on-surface mb-2">
									Executive Coaching
								</h3>
								<p className="text-sm font-body text-on-surface-variant">
									Deep expertise in C-suite behavioral
									dynamics and strategic alignment.
								</p>
							</div>
							<div className="p-6 rounded-xl bg-surface-container-low border border-outline-variant/30 hover:shadow-md transition-all">
								<span
									className="material-symbols-outlined text-secondary mb-4 block"
									data-icon="rocket_launch">
									rocket_launch
								</span>
								<h3 className="font-headline font-bold text-lg text-on-surface mb-2">
									Scaling Teams
								</h3>
								<p className="text-sm font-body text-on-surface-variant">
									Proven track record in building
									high-performance cultures for tech unicorns.
								</p>
							</div>
						</div>
						<div className="flex flex-wrap gap-4 pt-4">
							<button className="bg-primary text-white px-8 py-4 rounded-full font-headline font-bold text-lg shadow-xl shadow-primary/20 flex items-center gap-2 group">
								Explore Portfolio
								<span
									className="material-symbols-outlined group-hover:translate-x-1 transition-transform"
									data-icon="arrow_forward">
									arrow_forward
								</span>
							</button>
							<button className="px-8 py-4 rounded-full font-headline font-bold text-lg border-2 border-outline-variant text-on-surface hover:bg-surface-variant transition-colors">
								View Credentials
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className="py-24 px-8 max-w-7xl mx-auto overflow-hidden">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
					<div className="space-y-6">
						<h2 className="text-4xl font-headline font-extrabold tracking-tight">
							Professional Leadership &amp; Impact
						</h2>
						<p className="text-lg text-on-surface-variant leading-relaxed">
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
									<h4 className="font-headline font-bold text-on-surface">
										Pioneering Adaptive Leadership
									</h4>
									<p className="text-on-surface-variant font-body">
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
									<h4 className="font-headline font-bold text-on-surface">
										Data-Driven Development
									</h4>
									<p className="text-on-surface-variant font-body">
										Leveraging quantitative metrics to track
										and optimize soft-skill progression
										across global departments.
									</p>
								</div>
							</div>
						</div>
					</div>
					<div className="relative">
						<div className="bg-surface-container h-96 rounded-3xl overflow-hidden shadow-inner relative group">
							<img
								alt="Professional setting"
								className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
								data-alt="Modern minimalist office interior with floor-to-ceiling windows, sleek furniture, and soft daylight, suggesting high-level corporate leadership"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2jcJWK8BiR1kfVZyesb9i1gZm02bYhRxgaeQHYjo_9nt4B7nq6ucZCjF5i-5CbyaQKu4kuRXpcIx4ama8zM9NQcT1Xo2Z9hYm5RcOy7X4Vdiqh-zS06s_UuYFUqnMIcc6_1M7LA-4DyIQJuKuNdPBaRbFoBrTTl-pECZ5tWTHQw_A3HHaJI2wagyxhDBdXl-qqm4YtvDlWGNNLfBb5fITLc7BKwI8pRP9lV3v-4ppGusUDr1hfj2usXBZyjVuOs2QVarl8SWVXWdc"
							/>
							<div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
						</div>
						<div className="absolute top-1/2 -left-10 transform -translate-y-1/2 glass-card p-6 rounded-2xl shadow-2xl border border-white/50 w-48 text-center">
							<p className="text-primary font-headline text-3xl font-black">
								500+
							</p>
							<p className="text-xs uppercase font-label tracking-widest text-outline">
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
