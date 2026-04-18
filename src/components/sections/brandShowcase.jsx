import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";

const brands = [
	{
		name: "Google",
		logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
	},
	{
		name: "Microsoft",
		logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
	},
	{
		name: "Canon",
		logo: "https://upload.wikimedia.org/wikipedia/commons/0/0c/Canon_wordmark.svg",
	},
	{
		name: "Intel",
		logo: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Intel-logo.svg",
	},
	{
		name: "Coca-Cola",
		logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg",
	},
	{
		name: "Pepsi",
		logo: "https://upload.wikimedia.org/wikipedia/commons/a/a6/Pepsi_logo_2014.svg",
	},
	{
		name: "Mastercard",
		logo: "https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",
	},
	{
		name: "FedEx",
		logo: "https://upload.wikimedia.org/wikipedia/commons/7/7e/FedEx_Express.svg",
	},
	{
		name: "Airbnb",
		logo: "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg",
	},
	{
		name: "Netflix",
		logo: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png",
	},
	{
		name: "Spotify",
		logo: "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
	},
	{
		name: "Adobe",
		logo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_logo.svg",
	},
];

function BrandShowcase({ id }) {
	return (
		<Section id={id} className="bg-[#efefef] rounded-tr-[2rem] rounded-bl-[2rem]">
			<div className="mx-auto max-w-6xl">
				<div className="mx-auto max-w-3xl text-center">
          <Heading helperText="our clients" className="mb-6">Brand Showcase</Heading>
					<p className="main-description mx-auto">
						We have experience working with clients in consumer
						electronics, CPG, automotive, financial services, travel
						and tourism, entertainment, retail industries and more.
					</p>
				</div>

				<div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 border-t border-black/10">
					{brands.map((brand) => (
						<div
							key={brand.name}
							className="group relative flex h-36 sm:h-40 items-center justify-center border-b border-black/10 px-8 py-8">
							<div className="relative w-full h-16">
								<img
									src={brand.logo}
									alt={`${brand.name} logo`}
									loading="lazy"
									className="absolute inset-0 m-auto h-full w-full object-contain grayscale contrast-125 brightness-75 opacity-95"
								/>
								<div className="absolute left-0 top-0 h-full w-0 overflow-hidden transition-[width] duration-700 ease-out group-hover:w-full">
									<img
										src={brand.logo}
										alt=""
										aria-hidden="true"
										loading="lazy"
										className="absolute inset-0 m-auto h-full w-full object-contain"
									/>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</Section>
	);
}

export default BrandShowcase;
