import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import { MdCall, MdExpandMore, MdMail } from "react-icons/md";
import Button from "../ui/Button";
import Card from "../ui/card";
import Input from "../ui/input";
import Select from "../ui/select";
import TextArea from "../ui/textArea";

function ContactAndMap({ id }) {
	return (
		<Section id={id} bg="bg-secondary-50">
			<Card className="relative overflow-hidden border border-border/70 bg-[linear-gradient(160deg,#f8fafc_0%,#ffffff_38%,#f2f7ff_100%)] shadow-[0_30px_80px_-48px_rgba(15,23,42,0.35)]">
				<div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-secondary-200/40 blur-3xl" />
				<div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-primary-200/45 blur-3xl" />

				<div className="relative z-10 grid gap-8 lg:grid-cols-12 lg:gap-10">
					<div className="lg:col-span-5">
						<Heading
							helperText="let's get started"
							className="mb-6">
							Let's create something permanent.
						</Heading>
						<p className="main-description mb-12">
							Ready to elevate your digital presence? Send us a
							message or reach out directly.
						</p>
						<div className="space-y-6 mb-12">
							<a
								className="flex items-center gap-4 hover:text-accent-blue transition-colors group"
								href="tel:+1234567890">
								<span className="text-base p-3 rounded-xl bg-white/5 group-hover:bg-accent-blue/20 transition-all">
									<MdCall />
								</span>
								<span>+91 123 567 890</span>
							</a>
							<a
								className="flex items-center gap-4 hover:text-accent-blue transition-colors group"
								href="mailto:hello@curator.io">
								<span className="text-base p-3 rounded-xl bg-white/5 group-hover:bg-accent-blue/20 transition-all">
									<MdMail />
								</span>
								<span>hello@bramd.io</span>
							</a>
						</div>
						<div className="flex-grow mt-auto">
							<div className="w-full h-80 rounded-3xl overflow-hidden relative border border-border group grayscale hover:grayscale-0 transition-all duration-700">
								<iframe
									allowFullScreen=""
									className="opacity-80 border-0"
									height="100%"
									loading="lazy"
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62651.03862314883!2d76.02719180606623!3d11.06185891066939!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba64a9be29b058f%3A0x23e371e0d4c30d8e!2sMalappuram%2C%20Kerala!5e0!3m2!1sen!2sin!4v1774752191364!5m2!1sen!2sin"
									width="100%"></iframe>
								<div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/20 rounded-3xl"></div>
								<div className="absolute bottom-4 left-4 glass-card backdrop-blur-3xl px-4 py-2 rounded-xl text-xs font-bold uppercase tracking-widest text-text-primary">
									Headquarters: Malappuram
								</div>
							</div>
						</div>
					</div>

					<form className="lg:col-span-7 h-fit grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
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
							<Select
								name="project-type"
								label="Project Type"
								placeholder="Select type"
								options={[
									{
										value: "web-design",
										label: "Web Design",
									},
									{
										value: "branding",
										label: "Branding",
									},
									{
										value: "product-strategy",
										label: "Product Strategy",
									},
									{
										value: "later",
										label: "Choose Later",
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
								variant="gradient"
								className="w-full sm:w-auto">
								Send Message
							</Button>
						</div>
					</form>
				</div>
			</Card>
		</Section>
	);
}

export default ContactAndMap;
