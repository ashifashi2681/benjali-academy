import React from 'react'
import Section from '../ui/section';
import Heading from '../ui/heading';
import { MdCorporateFare, MdScience } from 'react-icons/md';

function SectionB() {
  return (
		// Research & Innovation
		<Section>
			<div class="grid lg:grid-cols-12 gap-12 items-center">
				<div class="lg:col-span-5 space-y-6">
					<Heading helperText="journy" as="h2">
						Research &amp; Innovation
					</Heading>
					<p class="main-description">
						Our research labs partner with industry giants to solve
						real-world problems. From quantum computing applications
						to sustainable logistics, we are at the frontier.
					</p>
					<div class="space-y-4 pt-4">
						<div class="flex items-start space-x-4">
							<div class="w-12 h-12 bg-surface rounded-xl shadow-sm flex items-center justify-center shrink-0">
								<span
									class="text-accent-blue text-md"
									data-icon="science">
									<MdScience />
								</span>
							</div>
							<div>
								<Heading as="h6">Active Labs</Heading>
								<p class="text-sm text-text-muted">
									14 interdisciplinary laboratories currently
									in operation.
								</p>
							</div>
						</div>
						<div class="flex items-start space-x-4">
							<div class="w-12 h-12 bg-surface rounded-xl shadow-sm flex items-center justify-center shrink-0">
								<span
									class="text-accent-blue text-md"
									data-icon="corporate_fare">
									<MdCorporateFare />
								</span>
							</div>
							<div>
								<Heading as="h6">Industry Partners</Heading>
								<p class="text-sm text-text-muted">
									Collaborations with Fortune 500 tech and
									manufacturing firms.
								</p>
							</div>
						</div>
					</div>
				</div>
				<div class="lg:col-span-7 grid grid-cols-2 gap-4">
					<div class="space-y-4">
						<div class="h-64 rounded-2xl overflow-hidden shadow-lg border border-border">
							<img
								alt="Scientific research"
								class="w-full h-full object-cover"
								data-alt="scientists in a clean lab environment working with high-tech equipment and blue lighting atmosphere"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuAR1LwOjP0iZ3TW8Rv13e1rDZbNJQppVgvlU_3tex1ji5UsV4096SAo7RBdHqJU2HRaDcs0c5TnhNnmgcx_YyaJJLH6Y_YdXyQpfQNYhmChj2A7wifReVm1xmjiVUrx50ZL8WpHQZNeaPUMl-uACAebqp-hOhKT-FpUN9WqUeypr3Gn0GJhKMkKcj8C-FluNjmm8PUORdpmbHEPMj_Ca3g9YQgT63HCo9u_1C7Q23nqvvGhtn_D_2xUtEvHhERQt6noAzRmgd9-ibEs"
							/>
						</div>
						<div class="h-48 rounded-2xl overflow-hidden shadow-lg border border-border bg-primary-500 p-8 text-text-primary flex flex-col justify-end">
							<p class="text-lg font-bold">240+</p>
							<p class="text-sm opacity-80 uppercase tracking-widest">
								Patents Filed
							</p>
						</div>
					</div>
					<div class="space-y-4 pt-12">
						<div class="h-48 rounded-2xl overflow-hidden shadow-lg border border-border bg-secondary-500 p-8 text-text-primary flex flex-col justify-end">
							<p class="text-lg font-bold">$12M</p>
							<p class="text-sm opacity-80 uppercase tracking-widest">
								Research Grants
							</p>
						</div>
						<div class="h-64 rounded-2xl overflow-hidden shadow-lg border border-border">
							<img
								alt="Meeting at research center"
								class="w-full h-full object-cover"
								data-alt="collaborative meeting in a modern open office with glass walls and professional people discussing over a large tablet"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuDyHFXJJLLzYU3kYx_px92828fHN_35u5VZmk_mkjEHbU1KxUGZ7aIOxJTl67Sr-l4FNSiQulHnQ2ddKtNy35f8nCLvDf2o5mN7cznMni40NwnquaNbFIw0WNxmV6MJDfY2DCqcE0Q5JonwuJ-UMIQhEDjYUDtcetQR9_ljmlQ0NNUIEGn8HcSVF_4PZl9Ks3W8iPLwAIOz-WdARQc3KQgMea_F1sNUptuQsnLDN7Jx3O4fQKkaPfkcV3_xgkLZSJSTrNUeGU5xUWn-"
							/>
						</div>
					</div>
				</div>
			</div>
		</Section>
  );
}

export default SectionB