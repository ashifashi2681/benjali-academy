import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import Button from "../ui/Button";
import Card from "../ui/card";
import Input from "../ui/input";
import Select from "../ui/select";
import TextArea from "../ui/textArea";

const courses = [
	"Advanced Studies Program",
	"BCA (Bachelor of Computer Applications)",
	"Full Stack Web Development",
	"Data Analytics and AI Foundations",
	"UI/UX and Product Design",
	"Corporate Leadership Coaching",
	"Others",
];

function EnquiryForm({ id }) {
	return (
		<Section id={id}>
			<Card className="relative overflow-hidden rounded-[1.8rem] border border-border/70 bg-[linear-gradient(160deg,#f8fafc_0%,#ffffff_38%,#f2f7ff_100%)] shadow-[0_30px_80px_-48px_rgba(15,23,42,0.35)]">
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
							<Input
								name="fullName"
								placeholder="Enter your full name"
								label="Full Name"
								required={true}
							/>
						</div>
						<div className="sm:col-span-1">
							<Input
								name="email"
								placeholder="you@example.com"
								label="Email Address"
								required={true}
							/>
						</div>
						<div className="sm:col-span-1">
							<Input
								name="phone"
								type="tel"
								placeholder="+910000000000"
								label="Phone Number"
								required={true}
							/>
						</div>
						<div className="sm:col-span-1">
							<Input
								name="city"
								placeholder="Calicut"
								label="City"
								required={true}
							/>
						</div>

						<div className="sm:col-span-2">
							<Select
								name="course"
								label="Preferred Course"
								placeholder="Select a course"
								options={courses}
							/>
						</div>

						<div className="sm:col-span-1">
							<Select
								name="mode"
								label="Learning Mode"
								placeholder="Select mode"
								options={[
									{
										value: "online",
										label: "Online",
									},
									{
										value: "offline",
										label: "Offline",
									},
									{
										value: "hybrid",
										label: "Hybrid",
									},
									{
										value: "later",
										label: "Choose Later",
									},
								]}
							/>
						</div>

						<div className="sm:col-span-1">
							<Select
								name="timeline"
								label="Joining Timeline"
								placeholder="Select timeline"
								options={[
									{
										value: "1-3-months",
										label: "In 1 to 3 months",
									},
									{
										value: "immediate",
										label: "Immediate",
									},
									{
										value: "later",
										label: "Exploring for later",
									},
								]}
							/>
						</div>

						<div className="sm:col-span-2">
							<TextArea
								name="message"
								label="Your Enquiry"
								placeholder="Tell us about your background, goals, and preferred schedule."
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
							<Button
								type="submit"
								size="lg"
								className="w-full sm:w-auto">
								Send Enquiry
							</Button>
						</div>
					</form>
				</div>
			</Card>
		</Section>
	);
}

export default EnquiryForm;
