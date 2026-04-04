import React from 'react'

function SectionI({id}) {
  return (
		// Section 2: Advanced Studies
		<section class="min-h-[819px] flex flex-col-reverse md:flex-row items-center overflow-hidden">
			<div class="w-full md:w-1/2 p-8 md:p-16 lg:p-24 bg-surface-container-low">
				<div class="max-w-xl ml-auto">
					<span class="text-tertiary font-bold tracking-wider text-sm mb-4 block">
						POST-GRADUATE EXCELLENCE
					</span>
					<h2 class="font-headline text-4xl md:text-5xl font-extrabold text-on-surface mb-6 leading-tight">
						Advanced Studies
					</h2>
					<p class="text-lg text-on-surface-variant mb-8 leading-relaxed">
						Elevate your expertise with specialized tracks in
						corporate strategy, digital leadership, and enterprise
						architecture. Our Advanced Studies program focuses on
						high-level decision making and professional mastery for
						future industry leaders.
					</p>
					<div class="glass-card p-6 rounded-2xl mb-10 border border-white/40 shadow-sm">
						<p class="italic text-on-surface-variant mb-4">
							"The curriculum bridge between technical mastery and
							executive leadership is what defines our advanced
							alumni."
						</p>
						<div class="flex items-center gap-3">
							<div class="w-10 h-10 rounded-full bg-tertiary-container flex items-center justify-center">
								<span class="material-symbols-outlined text-tertiary">
									workspace_premium
								</span>
							</div>
							<p class="font-semibold text-sm">
								Strategic Leadership Fellowships
							</p>
						</div>
					</div>
					<button class="bg-on-surface text-surface px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:opacity-90 transition-all active:scale-95 shadow-lg shadow-on-surface/10">
						View More
						<span class="material-symbols-outlined">
							arrow_forward
						</span>
					</button>
				</div>
			</div>
			<div class="w-full md:w-1/2 h-[400px] md:h-[819px] relative">
				<img
					alt="Corporate skyscraper"
					class="w-full h-full object-cover"
					data-alt="Low angle shot of a sleek modern glass skyscraper reflecting a clear blue sky, representing professional development, corporate strategy, and high-end achievement"
					src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxDHbH9icRJvxen0rA7eVzquaL80Fczbwq61kFQFrctKalvibKz58SeIzQXfitbazrMPtXmdeFXGOiy_3G8U_-uJ_K4aS1DhjuJhg03VdRdlsayxZSXQk_9L9AjIfhY-D2whH9yuQm0AxyUPBC00_pRVWB2uiZ1ymFNrgws4lTXl-8ggNDQ_13pqkXuhtHdau1ePdHsT8mq1QK6NI24Ipi6c7gYEZro1sQOSTNJGRA4ZEK8bkwy4Dxmi5rhKiu4z3u5k31flYOr0Lv"
				/>
				<div class="absolute inset-0 bg-gradient-to-l from-transparent to-surface-container-low/20"></div>
			</div>
		</section>
  );
}

export default SectionI