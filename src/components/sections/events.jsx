import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";

function Events({id}) {
	return (
		<Section id={id}>
			<div>
				<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
					<div>
						<Heading as="h3" helperText="Latest Buzz">
							Event Highlights
						</Heading>
					</div>
					<p className="max-w-md text-text-secondary">
						Stay updated with our community workshops, design
						sprints, and industry keynote sessions.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
					<div className="group cursor-pointer">
						<div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
							<img
								alt="Design Workshop"
								className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPd-Ro36iUAxZcUGsopzzaXm7tJ9qpzVJSLcU897OmHAk7usUlmMfnXASsL7YrNXSG58G58o4EVmQtSTaISFsM6Q0TnLf44M68VKoohEX2iH8xG7X_5Y9Pw4H_O1UR29DCLiVCNfeJrAy64cG_rk9PgVkOzMpkWMmFQBPD6eKRA0Uiy-GGRg3N9p3qMwlOiEN9st2tdx-2TnZgmCym5WnVNRbIEUoHZZ4TsX22eAiDv2vpiKvGOaaYHFaLWZMw9aYt_eBYrsOFvldE"
							/>
							<div className="absolute top-4 left-4 glass-card px-3 py-1 rounded-full text-xxs font-bold uppercase tracking-widest">
								Oct 24
							</div>
						</div>
						<Heading
							as="h4"
							className="mb-2 group-hover:text-secondary-600 transition-colors">
							Future of UX Summit
						</Heading>
						<p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
							Exploring the intersection of generative AI and
							human-centered design principles.
						</p>
					</div>
					<div className="group cursor-pointer">
						<div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
							<img
								alt="Code Conference"
								className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuD95YOwRYRP7Sjjdgp3I06OcaB_InmwhLhuGeCYV-BL7HpkC0nAUoRZj8uyWWZwRqnZyDwJNmqjS1MI9ZkrY-_AwcE6oqU2PFKg4AXh2pV89gkc6IBxuRFt2fKYjss_peS-U1YsslA6eOMZvN4CwFzwUXYHveCCMG5gMt4hEM_HZ8062XxVrsHrQPh-w40MXpwkVACbIlRvaL9OtAhoW0zsrLtff8C9y3bnFfBgRkBO6E3kkWhIWk3gEGhRBOTsc-P0_bq_liKImMuf"
							/>
							<div className="absolute top-4 left-4 glass-card px-3 py-1 rounded-full text-xxs font-bold uppercase tracking-widest">
								Nov 12
							</div>
						</div>
						<Heading
							as="h4"
							className="mb-2 group-hover:text-secondary-600 transition-colors">
							DevFlow Workshop
						</Heading>

						<p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
							Intensive deep-dive into scalable frontend
							architectures and micro-interactions.
						</p>
					</div>
					<div className="group cursor-pointer">
						<div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
							<img
								alt="Creative Meetup"
								className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnG6W7WtQdXJBUFgAaZ-9sXaAcXD4X-oYvRuUdpf_XMptXni-ddZkiFPB12zhYgCOODfhw3W2KM_WgHXRcu-k80SgYX-Wo00FqUAxSIaMby5AMmNyGRtOn6kP2hRN74YA4VF3lC79bmyD9PWGPl4stMpo8psJdaXm6_DzcHd2BYOeAYMXku6QpUhNw9X9vJdqAeL9Zx4gKzhQQ72vOxh6ZP0hiz3Vth62yMfRmGouT6KXKoCSDJyEih-T_uMpHMPqVeKyJMuLt2woo"
							/>
							<div className="absolute top-4 left-4 glass-card px-3 py-1 rounded-full text-xxs font-bold uppercase tracking-widest">
								Dec 05
							</div>
						</div>

						<Heading
							as="h4"
							className="mb-2 group-hover:text-secondary-600 transition-colors">
							Minimalist Archives
						</Heading>
						<p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
							A gallery showcase of minimalist brand identities
							from the last decade.
						</p>
					</div>
					<div className="group cursor-pointer">
						<div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
							<img
								alt="Networking"
								className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6E6F8XjW7M6yZugEAVBSWhw448o76erObMc5UwiI5jFbkcoRa21ay8VHsOSEWl-2WryBxRl76sYoptDwOuE3FlTdzUD_JHmp1AHSHbV2UpE_YV9HP7Mhxeuo_eHJ4oI3S0OREs_Rm4bGmmrsP9lpVmePKotzBCE_4kym1QIggqrtu0tQk_aBuagsrIxcNnxYYvunYToNN0cATw_wk_MuIlSBtnx1n2gQW77znJHCh-K6fbF9mY9TP2LRwJ70vZWbc9aPU2dglDY0K"
							/>
							<div className="absolute top-4 left-4 glass-card px-3 py-1 rounded-full text-xxs font-bold uppercase tracking-widest">
								Jan 18
							</div>
						</div>
						<Heading
							as="h4"
							className="mb-2 group-hover:text-secondary-600 transition-colors">
							Visionaries Mixer
						</Heading>
						<p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
							Connect with industry leaders and creative directors
							over curated cocktails.
						</p>
					</div>
				</div>
			</div>
		</Section>
	);
}

export default Events;
