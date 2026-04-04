import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import { MdAccountBalance, MdArrowForward, MdVerifiedUser, MdWorkspacePremium } from "react-icons/md";
import Button from "../ui/Button";

function HeroC({id}) {
	return (
		<Section id={id} className="mt-8 relative">
			<div className="absolute top-0 right-0 -z-10 w-1/2 h-full bg-gradient-to-l from-primary-500/20 to-transparent blur-3xl"></div>
			<div className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/2 bg-gradient-to-tr from-secondary-500/30 to-transparent blur-3xl"></div>
			<div className="overflow-hidden min-h[921px] flex items-center">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div className="space-y-8">
						<div className="inline-flex items-center space-x-2 bg-surface border border-border/50 px-4 py-1.5 rounded-full">
							<span className="flex h-2 w-2 rounded-full bg-primary-500"></span>
							<span className="text-xxs font-bold uppercase tracking-widest text-text-primary">
								shadow2xl border ClassName of 2025 Applications
								Open
							</span>
						</div>
						<Heading as="h1">
							Advanced Studies{" "}
							<span className="text-primary-500">Institute</span>
						</Heading>
						<p className="main-description">
							Elevate your professional trajectory with our
							world-className post-graduate tracks. Master complex
							systems, drive global innovation, and lead with
							strategic precision.
						</p>
						<div className="flex flex-wrap gap-4 pt-4">
						
							<Button size="xl" variant="gradient">
								Apply Now
							</Button>
							
							<Button
								size="xl"
								variant="outline"
								icon={<MdArrowForward />} iconPosition='right'>
								View Benjali
							</Button>
						</div>
						<div className="flex items-center space-x-6 pt-8 grayscale opacity-60">
							<span className="font-bold text-lg opacity-40 font-headline italic">
								Accredited by:
							</span>
							<div className="flex space-x-8">
								<span
									className="material-symbols-outlined text-md"
									data-icon="verified_user">
									<MdVerifiedUser />
								</span>
								<span
									className=" text-md"
									data-icon="account_balance">
									<MdAccountBalance />
								</span>
								<span
									className="material-symbols-outlined text-md"
									data-icon="workspace_premium">
									<MdWorkspacePremium />
								</span>
							</div>
						</div>
					</div>
					<div className="relative group">
						<div className="absolute -inset-4 bg-primary-500/5 rounded-[2rem] blur-2xl group-hover:bg-primary-500/10 z-10 transition-colors"></div>
						<div className="relative overflow-hidden rounded-[2rem] border border-border aspect-square lg:aspect-auto lg:h-[550px]">
							<img
								alt="Modern university architecture"
								className="w-full h-full object-cover"
								data-alt="ultra-modern glass and concrete architecture of a research institute with large windows reflecting a blue sky and lush landscaping"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMvjQn4c1rTBaILUOj90nt8L-j32cRlkn7RrsORzuHszE_VmvYoC4DQxx3b1qvgyM4OBwAZH7wBBUogbSzLA7cKTVD95xCnSAPwA4VnLld1agf85J-YKERleZZVJXsVpWaQHSc3C84VcTiwfz1tG9kdatbJhYakepEFMx97AVlxogHQ3YxhhocFdTviCRo9uM6A3PSprdfY9R2sgSSo4Ae7VJ8EPRoqwvDpKeXVcbfqkcg7e3iM-lVe6TPB4oc5YHKqtJZKoFwQvVl"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
							<div className="absolute bottom-8 left-8 right-8 glass-card p-6 rounded-2xl border border-border/80">
								<div className="flex items-center justify-between">
									<div>
										<p className="text-text-primary font-bold text-lg">
											Tomorrow's Leaders
										</p>
										<p className="text-text-primary/90 text-sm">
											Join 500+ professionals currently
											enrolled
										</p>
									</div>
									<div className="flex -space-x-3">
										<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-200"></div>
										<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-300"></div>
										<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-400"></div>
										<div className="w-10 h-10 rounded-full border-2 border-white bg-primary text-white flex items-center justify-center text-xs font-bold">
											+12
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}

export default HeroC;
