import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import { MdCall, MdExpandMore, MdMail } from "react-icons/md";
import Button from "../ui/Button";

function ContactAndMap() {
	return (
		<Section bg="bg-surface">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
				<div className="flex flex-col h-full">
					<Heading helperText="let's get started" className="mb-6">
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
				<form className="space-y-8 bg-accent-blue/5 h-fit p-10 rounded-2xl backdrop-blur-md">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="relative group">
							<input
								className="peer block w-full bg-transparent outline-0 border-0 border-b-2 border-border-strong/30 py-4 focus:ring-0 focus:border-accent-blue transition-all"
								id="name"
								placeholder=" "
								type="text"
							/>
							<label
								className="absolute left-0 top-4 -translate-y-6 scale-75 text-text-secondary transition-all peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-accent-blue"
								htmlFor="name">
								Full Name
							</label>
						</div>
						<div className="relative group">
							<input
								className="peer block w-full bg-transparent outline-0 border-0 border-b-2 border-border-strong/30 py-4 focus:ring-0 focus:border-accent-blue transition-all"
								id="email"
								placeholder=" "
								type="email"
							/>
							<label
								className="absolute left-0 top-4 -translate-y-6 scale-75 text-text-secondary transition-all peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-accent-blue"
								htmlFor="email">
								Email Address
							</label>
						</div>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div className="relative group">
							<input
								className="peer block w-full bg-transparent outline-0 border-0 border-b-2 border-border-strong/30 py-4 focus:ring-0 focus:border-accent-blue transition-all"
								id="phone"
								placeholder=" "
								type="tel"
							/>
							<label
								className="absolute left-0 top-4 -translate-y-6 scale-75 text-text-secondary transition-all peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-accent-blue"
								htmlFor="phone">
								Phone Number
							</label>
						</div>
						<div className="relative group">
							<select
								className="peer block w-full bg-transparent outline-0 border-0 border-b-2 border-border-strong/30 py-4 focus:ring-0 focus:border-accent-blue transition-all text-text-primary appearance-none"
								id="project-type">
								<option
									disabled=""
									hidden=""
									selected=""
									value=""></option>
								<option
									className="bg-secondary-100 text-text-secondary"
									value="web-design">
									Web Design
								</option>
								<option
									className="bg-secondary-100 text-text-secondary"
									value="branding">
									Branding
								</option>
								<option
									className="bg-secondary-100 text-text-secondary"
									value="product-strategy">
									Product Strategy
								</option>
							</select>
							<label
								className="absolute left-0 top-4 -translate-y-6 scale-75 text-text-secondary transition-all peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-accent-blue"
								htmlFor="project-type">
								Project Type
							</label>
							<span className="absolute right-0 top-4 text-on-primary/20 pointer-events-none">
								<MdExpandMore />
							</span>
						</div>
					</div>
					<div className="relative group">
						<textarea
							className="peer block w-full bg-transparent outline-0 border-0 border-b-2 border-border-strong/30 py-4 focus:ring-0 focus:border-accent-blue transition-all resize-none"
							id="message"
							placeholder=" "
							rows="4"></textarea>
						<label
							className="absolute left-0 top-4 -translate-y-6 scale-75 text-text-secondary transition-all peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-accent-blue"
							htmlFor="message">
							Message
						</label>
					</div>
					<Button variant="gradient" size="xl" fullWidth={true}>
						Send Message
					</Button>
				</form>
			</div>
		</Section>
	);
}

export default ContactAndMap;
