import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import { MdArrowForward, MdWorkspacePremium } from "react-icons/md";
import Button from "../ui/Button";

function SectionI({ id }) {
	return (
		// Section 2: Advanced Studies
		<Section id={id} bg="bg-surface">
			<div className="flex flex-col-reverse md:flex-row items-center overflow-hidden">
				<div className="w-full md:w-1/2">
					<div className="max-w-xl md:pr-8 mt-5 md:mt-0">
						<Heading
							className="mb-6"
							helperText="POST-GRADUATE EXCELLENCE">
							Advanced Studies
						</Heading>
						<p className="main-description mb-6">
							Elevate your expertise with specialized tracks in
							corporate strategy, digital leadership, and
							enterprise architecture. Our Advanced Studies
							program focuses on high-level decision making and
							professional mastery for future industry leaders.
						</p>
						<div className="glass-card p-6 rounded-2xl mb-10 border border-border/10 shadow-sm">
							<p className="italic text-text-muted mb-4">
								"The curriculum bridge between technical mastery
								and executive leadership is what defines our
								advanced alumni."
							</p>
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center">
									<span className="text-secondary-700 text-base">
										<MdWorkspacePremium />
									</span>
								</div>
								<p className="font-semibold text-sm text-text-secondary">
									Strategic Leadership Fellowships
								</p>
							</div>
						</div>
						<Button
							icon={<MdArrowForward />}
							iconPosition="right"
							variant="gradient">
							View More
						</Button>
					</div>
				</div>
				<div className="w-full md:w-1/2 h-[500px] relative">
					<img
						alt="Corporate skyscraper"
						className="w-full h-full object-cover rounded-t-3xl md:rounded-t-none md:rounded-r-3xl"
						data-alt="Low angle shot of a sleek modern glass skyscraper reflecting a clear blue sky, representing professional development, corporate strategy, and high-end achievement"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxDHbH9icRJvxen0rA7eVzquaL80Fczbwq61kFQFrctKalvibKz58SeIzQXfitbazrMPtXmdeFXGOiy_3G8U_-uJ_K4aS1DhjuJhg03VdRdlsayxZSXQk_9L9AjIfhY-D2whH9yuQm0AxyUPBC00_pRVWB2uiZ1ymFNrgws4lTXl-8ggNDQ_13pqkXuhtHdau1ePdHsT8mq1QK6NI24Ipi6c7gYEZro1sQOSTNJGRA4ZEK8bkwy4Dxmi5rhKiu4z3u5k31flYOr0Lv"
					/>
					<div className="absolute inset-0 bg-gradient-to-l from-transparent to-surface/20"></div>
				</div>
			</div>
		</Section>
	);
}

export default SectionI;
