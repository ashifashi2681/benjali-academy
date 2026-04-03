import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import { MdBrush, MdSpeed } from "react-icons/md";

function AboutUs({id}) {
	return (
		<Section id={id} bg="bg-surface">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
				<div className="grid grid-cols-2 gap-6 relative">
					<div className="space-y-6">
						<img
							alt="Modern workspace"
							className="rounded-3xl w-full h-64 object-cover shadow-lg"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuDDrFNo2IuhsinfkB6ULPx_DVVRwv7-HH6bLZ3JY7LbI9GhLOtaquhhxwBowRGZOH-Co60iFWhTNq_cZww82-i3y92eKJ-E0c-IMImLDIPEoqethTMRNhVuyGPwi_I7hnKbHfZs6GNDodVQwhk-tQ3ibqvW1XVK9nzNEuqTw947SmY_SjgMYpBZhDZ_jSFJ7LeoDIRoN4T6TulP6ahsucSNN4tjTLzDXd69ptatNLkJZLWtBRmlSS6dM_yLm4_RIB5alNOe6oZEetsg"
						/>
						<img
							alt="Creative process"
							className="rounded-3xl w-full h-80 object-cover shadow-lg"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuDFYJmiT4BRi37ZaSVvarDPrdxheFRNufLsum1UgPv56oBh-PP5_NAOwghv2hrGlXjsfNLzTzJb3yqGib5spXq5i7qWe2S_j6m_o1wgCQQqZKeuVUuSF4WMJ3T4dgdIcLd-_8AkXrV54Vf9cA9BdtsXv_rnLT-fZbPsZ3UhSUZfYEb_G4SOvUEUzkoGy9nkOCfwW70vmBBWYAtyTMRVHdlIxm-rbrlaz6CDqgS0CQ-ZCUo3DbxNlRqWM8u1nJCg1k-GCqFKxmdA_bnY"
						/>
					</div>
					<div className="space-y-6 pt-12">
						<img
							alt="Team collaboration"
							className="rounded-3xl w-full h-80 object-cover shadow-lg"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuDMlQRIXnDmGR0hQXNnj12CLlssbwNeohIklruXTSbFTN55ubHuaRvCgr24I58w-wbByKBVUnGYmFwHjPPeRkgfYdhVBDtj1o0ODG5Mo1LnXyMguCrwVgmhgg4-YbYgd192NMLnciCCI3-tIAqjaFprQKrPl_LHPeQ2XurWgvzYbVDMLS5Pl1Zn_HLQ9gyv5AiBFyd7FjBXR2Mj1kCPNxBdqj35_7NsB5rv1Ux8TTjEZLAr2jKLSCIqVSN4DjrYvrYb6Tq3BNcUyLhk"
						/>
						<img
							alt="Design meeting"
							className="rounded-3xl w-full h-64 object-cover shadow-lg"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuDlZ9F5xZCdiXygvBI2vuG2pWyj7xut3i_xl9dAss1obQB09B4Bh5oCZ0z9sTY9zlybKHjBP2PaLlr57s4a4kdamp4n2fB8WWy9GDyfWNwBBi0UhV3lKDWqaoeDicna37aqR84ErHTa58MZXaLmPkvEAr3nwE4kqWrk53G9cv1kIrQBhMisU-3jWvqL22znRaGMkS2DxnBUaohUwadsSQRmSb2JEbpOedQjUGt4IwPY0MkN5r4Vxv0O-nVXZWVjCNN1W3Jdi2u6D3Fz"
						/>
					</div>
					<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
						<div className="glass-card p-10 rounded-full border border-border/40 shadow-2xl backdrop-blur-xl pointer-events-auto">
							<span className="text-lg font-black text-accent-blue italic">
								SINCE 2012
							</span>
						</div>
					</div>
				</div>
				<div className="space-y-8">
					<Heading helperText="The Curator Philosophy">
						We define the standard for{" "}
						<span className="underline decoration-accent-blue/50 underline-offset-8">
							modern excellence
						</span>
						.
					</Heading>
					<p className="main-description">
						Beyond aesthetics, we engineering digital environments
						that breathe. Our approach combines architectural
						structuralism with fluid user psychology, creating
						interfaces that aren't just seen—they're felt.
					</p>
					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
						<div className="flex items-center gap-4 p-4 rounded-2xl bg-background">
							<span className="text-accent-blue text-base">
								<MdBrush />
							</span>
							<span className="font-semibold text-sm">
								Artisanal Design
							</span>
						</div>
						<div className="flex items-center gap-4 p-4 rounded-2xl bg-background">
							<span className="text-accent-blue text-base">
								<MdSpeed />
							</span>
							<span className="font-semibold text-sm">
								High-Performance
							</span>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}

export default AboutUs;
