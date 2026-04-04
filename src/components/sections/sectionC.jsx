import React from 'react'
import Section from '../ui/section';
import Heading from '../ui/heading';

function SectionC({id}) {
  return (
		// Admissions/Enrollment
		<Section id={id} bg="bgsurface" className="border-y border-border/80">
			<div className="text-center mb-16">
				<Heading className="mb-3">Admissions Path</Heading>

				<p className="text-text-secondary">
					A streamlined, merit-based journey to excellence.
				</p>
			</div>
			<div className="relative">
				<div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-accent-gold -translate-y-1/2 -z-10"></div>
				<div className="grid md:grid-cols-4 gap-8">
					<div className="bg-surface p-6 rounded-2xl text-center space-y-4">
						<div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto text-md font-bold shadow-lg shadow-primary-200">
							1
						</div>
						<Heading as="h4">Submission</Heading>
						<p className="text-sm text-text-secondary">
							Submit your portfolio, credentials, and vision
							statement.
						</p>
					</div>
					<div className="bg-surface p-6 rounded-2xl text-center space-y-4">
						<div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto text-md font-bold shadow-lg shadow-primary-200">
							2
						</div>
						<Heading as="h4">Evaluation</Heading>
						<p className="text-sm text-text-secondary">
							Our academic board reviews alignment and potential.
						</p>
					</div>
					<div className="bg-surface p-6 rounded-2xl text-center space-y-4">
						<div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto text-md font-bold shadow-lg shadow-primary-200">
							3
						</div>
						<Heading as="h4">Interview</Heading>

						<p className="text-sm text-text-secondary">
							Engage in a critical discussion with faculty leads.
						</p>
					</div>
					<div className="bg-surface p-6 rounded-2xl text-center space-y-4">
						<div className="w-12 h-12 bg-primary-500 text-white rounded-full flex items-center justify-center mx-auto text-md font-bold shadow-lg shadow-primary-200">
							4
						</div>
						<Heading as="h4">Enrollment</Heading>
						<p className="text-sm text-text-secondary">
							Secure your position and begin your advanced track.
						</p>
					</div>
				</div>
			</div>
		</Section>
  );
}

export default SectionC