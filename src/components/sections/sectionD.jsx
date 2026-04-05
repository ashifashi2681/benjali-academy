import React from 'react'
import Section from '../ui/section';
import Heading from '../ui/heading';
import Button from '../ui/Button';

function SectionD({id}) {
  return (
		// Final CTA
		<Section id={id} bg="bg-primary-500/5">
			<div className="absolute inset-0 -z-10"></div>
			<div className="max-w-4xl mx-auto glass-card border border-border/50 p-12 lg:p-20 rounded-[3rem] text-center shadow-2xl relative">
				<div className="absolute -top-10 -right-10 w-40 h-40 bg-accent-gold/30 rounded-full blur-3xl"></div>
				<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-accent-gold/30 rounded-full blur-3xl"></div>
				<Heading className="mb-6">Ready to Lead?</Heading>
				<p className="main-description text-text-secondary mb-10 max-w-xl mx-auto">
					The next cohort begins in September. Take the definitive
					step toward professional mastery today.
				</p>
				<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
					<Button size="lg" variant="gradient">
						Start Application
					</Button>
					<Button size="lg" variant="outline">
						Download Prospectus
					</Button>
				</div>
				<p className="mt-8 text-sm text-on-surface-variant font-medium">
					No application fee for the current cycle.
				</p>
			</div>
		</Section>
  );
}

export default SectionD