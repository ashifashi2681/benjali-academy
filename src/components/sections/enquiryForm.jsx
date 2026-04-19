import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import Button from "../ui/Button";
import Card from "../ui/card";

const courses = [
	"Advanced Studies Program",
	"BCA (Bachelor of Computer Applications)",
	"Full Stack Web Development",
	"Data Analytics and AI Foundations",
	"UI/UX and Product Design",
	"Corporate Leadership Coaching",
];

function EnquiryForm({ id }) {
	return (
		<Section id={id}>
			<div className="relative overflow-hidden rounded-[1.8rem] border border-border/70 bg-[linear-gradient(160deg,#f8fafc_0%,#ffffff_38%,#f2f7ff_100%)] p-5 sm:p-7 md:p-10 lg:p-12 shadow-[0_30px_80px_-48px_rgba(15,23,42,0.35)]">
				<div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-secondary-200/40 blur-3xl" />
				<div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-primary-200/45 blur-3xl" />

				<div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:gap-10">
					<div className="lg:col-span-5">
						<Heading helperText="Contact Us" className="mb-5">
							Course Enquiry
						</Heading>
						<p className="main-description max-w-md">
							Share your goals and we will suggest the right
							program, schedule, and next steps for admission.
						</p>
						<Card className="mt-8 border border-border/70 bg-white/80 backdrop-blur-sm">
							<p className="text-xs font-bold uppercase tracking-[0.14em] text-text-muted">
								Quick Response
							</p>
							<p className="mt-2 text-sm text-text-secondary">
								Our academic counselor usually responds within
								24 working hours.
							</p>
						</Card>
					</div>

					<form className="lg:col-span-7 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
						<div className="sm:col-span-1">
							<label
								htmlFor="fullName"
								className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">
								Full Name
							</label>
							<input
								id="fullName"
								name="fullName"
								type="text"
								placeholder="Enter your full name"
								className="w-full rounded-2xl border border-border bg-white/85 px-4 py-3.5 text-sm text-text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] outline-none transition-all duration-200 placeholder:text-text-muted/80 focus:border-secondary-400 focus:bg-white focus:ring-4 focus:ring-secondary-100/70"
							/>
						</div>
						<div className="sm:col-span-1">
							<label
								htmlFor="email"
								className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">
								Email Address
							</label>
							<input
								id="email"
								name="email"
								type="email"
								placeholder="you@example.com"
								className="w-full rounded-2xl border border-border bg-white/85 px-4 py-3.5 text-sm text-text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] outline-none transition-all duration-200 placeholder:text-text-muted/80 focus:border-secondary-400 focus:bg-white focus:ring-4 focus:ring-secondary-100/70"
							/>
						</div>
						<div className="sm:col-span-1">
							<label
								htmlFor="phone"
								className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">
								Phone Number
							</label>
							<input
								id="phone"
								name="phone"
								type="tel"
								placeholder="+91 98765 43210"
								className="w-full rounded-2xl border border-border bg-white/85 px-4 py-3.5 text-sm text-text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] outline-none transition-all duration-200 placeholder:text-text-muted/80 focus:border-secondary-400 focus:bg-white focus:ring-4 focus:ring-secondary-100/70"
							/>
						</div>
						<div className="sm:col-span-1">
							<label
								htmlFor="city"
								className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">
								City
							</label>
							<input
								id="city"
								name="city"
								type="text"
								placeholder="Your city"
								className="w-full rounded-2xl border border-border bg-white/85 px-4 py-3.5 text-sm text-text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] outline-none transition-all duration-200 placeholder:text-text-muted/80 focus:border-secondary-400 focus:bg-white focus:ring-4 focus:ring-secondary-100/70"
							/>
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="course"
								className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">
								Preferred Course
							</label>
							<select
								id="course"
								name="course"
								defaultValue=""
								className="w-full appearance-none rounded-2xl border border-border bg-[linear-gradient(180deg,#ffffff,#f8fafc)] px-4 py-3.5 text-sm text-text-primary outline-none transition-all duration-200 focus:border-secondary-400 focus:ring-4 focus:ring-secondary-100/70">
								<option value="" disabled>
									Select a course
								</option>
								{courses.map((course) => (
									<option key={course} value={course}>
										{course}
									</option>
								))}
							</select>
						</div>

						<div className="sm:col-span-1">
							<label
								htmlFor="mode"
								className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">
								Learning Mode
							</label>
							<select
								id="mode"
								name="mode"
								defaultValue=""
								className="w-full appearance-none rounded-2xl border border-border bg-[linear-gradient(180deg,#ffffff,#f8fafc)] px-4 py-3.5 text-sm text-text-primary outline-none transition-all duration-200 focus:border-secondary-400 focus:ring-4 focus:ring-secondary-100/70">
								<option value="" disabled>
									Select mode
								</option>
								<option value="online">Online</option>
								<option value="offline">Offline</option>
								<option value="hybrid">Hybrid</option>
							</select>
						</div>

						<div className="sm:col-span-1">
							<label
								htmlFor="timeline"
								className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">
								Joining Timeline
							</label>
							<select
								id="timeline"
								name="timeline"
								defaultValue=""
								className="w-full appearance-none rounded-2xl border border-border bg-[linear-gradient(180deg,#ffffff,#f8fafc)] px-4 py-3.5 text-sm text-text-primary outline-none transition-all duration-200 focus:border-secondary-400 focus:ring-4 focus:ring-secondary-100/70">
								<option value="" disabled>
									Select timeline
								</option>
								<option value="immediate">Immediate</option>
								<option value="1-3-months">In 1 to 3 months</option>
								<option value="later">Exploring for later</option>
							</select>
						</div>

						<div className="sm:col-span-2">
							<label
								htmlFor="message"
								className="mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-text-muted">
								Your Enquiry
							</label>
							<textarea
								id="message"
								name="message"
								rows={5}
								placeholder="Tell us about your background, goals, and preferred schedule."
								className="w-full resize-y rounded-2xl border border-border bg-white/85 px-4 py-3.5 text-sm text-text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] outline-none transition-all duration-200 placeholder:text-text-muted/80 focus:border-secondary-400 focus:bg-white focus:ring-4 focus:ring-secondary-100/70"
							/>
						</div>

						<label className="sm:col-span-2 flex items-start gap-3 rounded-xl border border-border/60 bg-white/75 px-4 py-3 text-sm text-text-secondary">
							<input
								type="checkbox"
								name="consent"
								className="mt-1 size-4 rounded border-border text-secondary-600 focus:ring-secondary-300"
							/>
							I agree to be contacted about my course enquiry via
							call, email, or WhatsApp.
						</label>

						<div className="sm:col-span-2 pt-1">
							<Button type="submit" size="lg" className="w-full sm:w-auto">
								Send Enquiry
							</Button>
						</div>
					</form>
				</div>
			</div>
		</Section>
	);
}

export default EnquiryForm;
