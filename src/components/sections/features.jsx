import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import { MdCheckCircle, MdDomain, MdPublic, MdSchool, MdWorkHistory } from "react-icons/md";
import Card from "../ui/card";

function Features({id}) {
	return (
		<Section id={id}>
			<div className="mb-16 max-w-2xl">
				<Heading helperText="key features & strength" className="mb-6">
					Redefining Professional Excellence
				</Heading>
				<p className="main-description">
					Our institution bridges the gap between theoretical
					knowledge and industrial application through four core
					pillars of educational innovation.
				</p>
			</div>
			<div className="grid grid-cols-1 md:grid-cols-12 gap-6">
				<Card className="md:col-span-8 group relative overflow-hidden bg-surface border border-border-strong hover:border-primary-400 transition-all duration-300">
					<div className="flex flex-col h-full justify-between">
						<div>
							<div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-6">
								<span
									className="text-surface text-md"
									data-icon="work_history">
									<MdWorkHistory />
								</span>
							</div>
							<Heading as="h4" className="mb-4">
								Practical Learning
							</Heading>
							<p className="text-text-secondary max-w-md leading-relaxed text-sm">
								Engage with hands-on projects designed to mimic
								real-world challenges. Develop industry-relevant
								skills that translate directly to professional
								success from day one.
							</p>
						</div>
						<div className="mt-8 flex gap-4">
							<span className="px-3 py-1 bg-gray-200 text-text-secondary text-xs rounded-full">
								Real-world ROI
							</span>
							<span className="px-3 py-1 bg-gray-200 text-text-secondary text-xs rounded-full">
								Project-Based
							</span>
						</div>
					</div>
					<div className="hidden md:block absolute -right-4 -bottom-4 w-64 h-64 opacity-50 group-hover:opacity-100 rounded-xl overflow-hidden transition-opacity">
						<img
							alt="Industrial engineering"
							className="object-cover w-full h-full grayscale group-hover:grayscale-0 transition-all"
							data-alt="Close-up of high-precision robotic arm working on a circuit board in a clean modern laboratory environment with soft bokeh"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHaJYuek6a04AApVLIjt3OROrkrccS7wDjC5CxjNmCDk7yjXH95IqynUmkB49fTzxASbLs5Nni-R0q17fjIVrXar4eRncf6znwlG6-0mUHL_ZtgQVWQXh-7-eZZNNNxxeqyyZUzBqj8iMvUHHTk3ebWgi9B9jAnZhKltoE9x2CqlkvP4mNKCo1z4_XDTJ4rbJnu3n7jOxsw6Nq0lmqhKbv9Q9NXXSPrgvhr1138A0F4VxSAgCvggRlQv8NTZw0cXYxdE5h3Szobk1x"
						/>
					</div>
				</Card>
				<Card className="md:col-span-4 bg-secondary-50 border border-secondary-400 flex flex-col items-start justify-between">
					<div>
						<div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center mb-6">
							<span
								className="material-symbols-outlined text-white text-md"
								data-icon="school">
								<MdSchool />
							</span>
						</div>
						<Heading as="h4" className="mb-4">
							Expert Trainers
						</Heading>
						<p className="text-text-secondary max-w-md leading-relaxed text-sm">
							Learn from seasoned professionals with decades of
							experience in their respective global sectors.
						</p>
					</div>
					<div className="mt-8 pt-6 border-t border-border-strong w-full">
						<div className="flex -space-x-3">
							<img
								alt="Trainer 1"
								className="w-10 h-10 rounded-full border-2 border-surface"
								data-alt="Portrait of a professional man in a tailored suit smiling confidently in a modern office"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7BrtSqk2iH5RZSn0STFLkYzjZt0DvNeqnJhkMZ24wfRik7PiSO_HNRiV1Lgm-YegMEUFjLknk-CKaqr7d3FoPHdYVHFPjeIdoGlnzrFJNjpncQWL89k0r6Ac-TMDZcDV14G0qf1x9ZdoKQpYJnQt9tyTRpTMGitZrfsbkY6v1SND4AbaFntdgLyRKGi0GlKkRMirvKjEVjZ42jvmD5BGS-oQHCaiT491XP7fIV8KG6D7r7_8mXIo3rf0IGQzfXz5E2GIICIGRKpuq"
							/>
							<img
								alt="Trainer 2"
								className="w-10 h-10 rounded-full border-2 border-surface"
								data-alt="Professional woman with glasses looking at camera in a bright collaborative workspace"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxOvTTCP2KRtRefJAbB781Y3WgjrmvsaM21p54b9mnW2e8qarGtX1hi_2lWFRsnFri9eR5DVpP1TmrBlzLKoLvwnEB0uFwEcLFljhp_v_tMjziJ_cY1sHAHori3ZcBu0362bGK2i6LUH4vhjXP71TiUrIllyw34vhoFb8AKHigootFgJx4UctaLTAhFGGXu7gLjLQZo9jmpxlUgWa3juokahM6rYIOE2n3eGEkURbudUaqi8ANLjWRhD7mPPu5RB86laWLYEVS2XBk"
							/>
							<img
								alt="Trainer 3"
								className="w-10 h-10 rounded-full border-2 border-surface"
								data-alt="Mid-adult man in smart casual attire smiling warmly against a blurred city background"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6DHTqi6iEZ_kuDW-WJxK1evbvFZGJ0IefEcwW-O2bVL13nhTXw9OYdl_G58-2fCUAMN91LmY6adBq5og3NIId4e4af23oFavs_WMYQEcFi91Gm-pRWOPZrEC8eZEl1vF8aJgE5xel44mnTutb44n4hL8I_C9XM3-AZgSUf7lyt2RldDxVxxhEEHk8z7cuC5wgZgqSdlfIQATZFU6IFvFDQNf2g6SXqrRIu4HihANA3Vt6vTkW8h0Wtn5RKaDrtrn3YhlYNS5yge7K"
							/>
							<div className="w-10 h-10 rounded-full border-2 border-surface bg-surface-container-highest flex items-center justify-center text-[10px] font-bold text-text-muted">
								+12
							</div>
						</div>
					</div>
				</Card>
				<Card className="md:col-span-5 bg-secondary-50 border border-secondary-400 relative overflow-hidden">
					<div className="relative z-10">
						<div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center mb-6">
							<span
								className="text-white text-md"
								data-icon="domain">
								<MdDomain />
							</span>
						</div>
						<Heading as="h4" className="mb-4">
							Modern Infrastructure
						</Heading>
						<p className="text-text-secondary leading-relaxed mb-6 text-sm">
							Experience our state-of-the-art labs and immersive
							learning environments designed for the digital age.
						</p>
						<ul className="space-y-3">
							<li className="flex items-center gap-3 text-sm text-text-secondary">
								<span
									className=" text-secondary-400 text-md"
									data-icon="check_circle">
									<MdCheckCircle />
								</span>
								Next-gen Computer Labs
							</li>
							<li className="flex items-center gap-3 text-sm text-text-secondary">
								<span
									className="text-secondary-400 text-md"
									data-icon="check_circle">
									<MdCheckCircle />
								</span>
								Collaborative Huddle Spaces
							</li>
						</ul>
					</div>
				</Card>
				<Card className="md:col-span-7 bg-surface border border-border-strong hover:border-primary-400 transition-all duration-300 relative overflow-hidden">
					<div className="flex flex-col md:flex-row gap-8 items-start h-full">
						<div className="flex-1">
							<div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center mb-6">
								<span
									className="text-white text-md"
									data-icon="public">
									<MdPublic />
								</span>
							</div>
							<Heading as="h4" className="mb-4">
								Global Network
							</Heading>
							<p className="text-text-secondary max-w-md leading-relaxed text-sm">
								Instant access to a prestigious circle of alumni
								and strategic industry partners spanning across
								six continents. Join a community that opens
								doors worldwide.
							</p>
						</div>
						<div className="flex-none md:flex-1 w-full h-44 md:h-full min-h-[130px] rounded-lg overflow-hidden opacity-80 border border-border">
							<img
								alt="World connectivity"
								className="w-full h-full object-cover"
								data-alt="Digital visualization of a world map with glowing connection lines and nodes representing a global communications network"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-Lt1ljNjStqeMDZRJjoDmWTzMJVoZJqgedBaJEphVKtgs05-PG3RZ8M4s60jgPS8o1ARYWZufiguuzdcfbFVdZfIWp6rFLAA208nK0I-g-aWBTsL88G4Az6tHJOfr6_2RiQuBrHiVvIe7bMqmkCNsZLh1p-iR6oIS0IZdnel-Jr419SCYw1FX3AppsCxxzBxHdjOEjdHMYNH0RYr1zu0xWQZHFS_31gdOp_nAFFXGLDJuraLZFz7UdB6mM3DY7QkGvOXIOgDlFHST"
							/>
						</div>
					</div>
				</Card>
			</div>
		</Section>
	);
}

export default Features;
