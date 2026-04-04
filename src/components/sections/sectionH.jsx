import React from "react";

function SectionH({ id }) {
	return (
		// Section 1: BCA Program Overview
		<section class="min-h-[819px] flex flex-col md:flex-row items-center overflow-hidden">
			<div class="w-full md:w-1/2 h-[400px] md:h-[819px] relative">
				<img
					alt="Students collaborating"
					class="w-full h-full object-cover"
					data-alt="Modern bright university classroom with diverse students collaborating around a wooden table, soft natural sunlight, professional academic atmosphere"
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIvmfR5TbPjS52lUaylYCsTkLpasOFIXmfdnUr_kw7F6piRGFa9zPK_xRkJKwlCsoFZCsy1Qo1ex4i32mNNBx_PBLqRE9GvwsmlnuQf0OVPfxLTaCWN9OMyhrAT_rr7L1uffYmWEmoUZmcWawPyGfhijPXJBCTmAk-weW-uzodhYasZmWXD6PcNqGuKtB8viYubObqDCSiNPGzA487o2URuDKuxodIDSZChj4UvJThfpTrlUxzZlELHZFeDIBkP7Nwr-wC9XXTR8Yt"
				/>
				<div class="absolute inset-0 bg-gradient-to-r from-transparent to-surface/10"></div>
			</div>
			<div class="w-full md:w-1/2 p-8 md:p-16 lg:p-24 bg-surface">
				<div class="max-w-xl">
					<span class="text-primary font-bold tracking-wider text-sm mb-4 block">
						CORE CURRICULUM
					</span>
					<h2 class="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-6 leading-tight">
						BCA Program Overview
					</h2>
					<p class="text-lg text-on-surface-variant mb-8 leading-relaxed">
						Our Bachelor of Computer Applications program is
						designed for the modern digital architect. We blend
						foundational computational logic with emerging
						technological trends to prepare you for a high-impact
						career in global tech ecosystems.
					</p>
					<div class="grid grid-cols-2 gap-6 mb-10">
						<div class="flex items-start gap-3">
							<span class="material-symbols-outlined text-primary">
								code
							</span>
							<div>
								<p class="font-bold text-on-surface">
									Software Dev
								</p>
								<p class="text-xs text-on-surface-variant">
									Full-stack mastery
								</p>
							</div>
						</div>
						<div class="flex items-start gap-3">
							<span class="material-symbols-outlined text-primary">
								database
							</span>
							<div>
								<p class="font-bold text-on-surface">
									Data Systems
								</p>
								<p class="text-xs text-on-surface-variant">
									Architectural design
								</p>
							</div>
						</div>
					</div>
					<button class="bg-primary text-on-primary px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-primary/20">
						View More
						<span class="material-symbols-outlined">
							arrow_forward
						</span>
					</button>
				</div>
			</div>
		</section>
	);
}

export default SectionH;
