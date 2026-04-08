import Section from "../ui/section";
import Heading from "../ui/heading";
import YoutubeShortCards from "../youtube-short-cards";

function Testimonial2({ id }) {
	return (
		<Section bg="bg-surface" id={id}>
			<div className=" grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
				<div className="lg:col-span-4 space-y-6">
					<Heading helperText="Success Stories">
						Client Echoes
					</Heading>
					<p className="main-description max-w-md">
						We believe in partnerships that transcend transactions.
						Discover how our collaborative approach has fueled
						growth and redefined success for visionaries worldwide.
					</p>
				</div>

				<div className="lg:col-span-8 relative">
					<YoutubeShortCards />
				</div>
			</div>
		</Section>
	);
}

export default Testimonial2;
