import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";

function Testimonial({id}) {
	return (
		<Section id={id}>
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
				<div className="lg:sticky lg:top-40 h-fit">
					<Heading
						helperText="what they are saying about us."
						className="mb-6">
						Client Echoes
					</Heading>
					<p className="text-text-secondary">
						What industry leaders say about the partnership
						experience.
					</p>
				</div>
				<div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="bg-surface p-8 rounded-2xl border border-border shadow-sm">
						<div className="flex items-center gap-4 mb-8">
							<img
								alt="Client portrait"
								className="w-12 h-12 rounded-full object-cover"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuB09ApV6pehKKhBQkTwuwGk_b6H4VFJfFhBkzWSJZFhPra67gSTcnmLPAoWcMIITxS34C7HMlwyc-R667oUco1xzRhJgWDT7pxrPwfXMuWCwBYrj_wX2Kdk6VhIPmWQngcxe1ArjSJKjzo6udXSyMDtvHn4QY8yAKOB0BCOFiM3AMX8mvwmH2dJeVZK3SCxQF62whBJd4Dpg5ot2r1Ydt7HV3Q4mUANbniRWrVQOuqXx0U7E6jmhfG8O9XtqBJD9DE9oOMKaviyJpxz"
							/>
							<div>
								<Heading as="h6" className="">
									Marcus Thorne
								</Heading>
								<p className="text-xs text-text-muted uppercase tracking-widest">
									CTO, Luminar
								</p>
							</div>
						</div>
						<p className="italic text-text-secondary leading-relaxed">
							"The level of detail and aesthetic consideration is
							unmatched. They don't just build sites; they build
							digital legacies."
						</p>
					</div>
					<div className="bg-surface p-8 rounded-2xl border border-border shadow-sm">
						<div className="flex items-center gap-4 mb-8">
							<img
								alt="Client portrait"
								className="w-12 h-12 rounded-full object-cover"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwPqvzEiCSHWfILfaq6Llz8R7NzNFRmfi6rihErbRJKQEcW1u7lFKEL4BbU-C4BUKYWMimVXAY1asFnsyptoYAlFXUkYI9q8tbIOoIQV0_zxPoBxQibAJipulTsdru1wyJxGCtPp5hS6mgR_rlOUkq0AhqaMUzZtICXmH8k6K-N0o6COQtS39EqWa_dmmTSGBfdPAbWW6FUvSgQC78vEiHG_YpYqcAMTzqkypfsO__EoEYKGs7JXx290dr4Cufsjjr0mKusVMXqhON"
							/>
							<div>
								<Heading as="h6" className="">
									Sarah Jenks
								</Heading>

								<p className="text-xs text-text-muted uppercase tracking-widest">
									Founder, Verve
								</p>
							</div>
						</div>
						<p className="italic text-text-secondary leading-relaxed">
							"Our conversion rates skyrocketed by 40% after the
							re-brand. The '' touch is real and remarkably
							effective."
						</p>
					</div>
				</div>
			</div>
		</Section>
	);
}

export default Testimonial;
