import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import Button from "../ui/Button";

function Hero({id}) {
	return (
		<Section id={id} className="mt-8">
			<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center w-full">
				<div className="space-y-8 max-w-2xl">
					<div className="inline-flex items-center px-4 py-2 bg-surface rounded-full">
						<span className="text-xxs uppercase tracking-[0.2em] font-bold text-accent-blue">
							Evolving Digital Landscapes
						</span>
					</div>
					<Heading as="h1">
						Curating exceptional digital{" "}
						<span className="text-accent-gold">experiences</span>.
					</Heading>
					<p className="main-description">
						We blend clinical precision with creative soul to build
						portfolios and digital products that command authority
						and inspire trust.
					</p>
					<div className="flex flex-wrap gap-4 pt-4">
						<Button variant="gradient" size="xl">
							Start a Project
						</Button>
						{/* <button className="bg-primary-500 hover:bg-primary-300 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg shadow-primary-100">
							Start a Project
						</button>
						<button className="bg-surface text-primary-500 px-8 py-4 rounded-xl font-semibold border hover:bg-background transition-all">
							View Work
						</button> */}
						<Button variant="outline" size="xl">
							View Work
						</Button>
					</div>
				</div>
				<div className="relative hidden lg:block">
					<div className="absolute -top-20 -right-20 w-80 h-80 bg-accent-blue/30 rounded-full blur-3xl"></div>
					<div className="relative rounded-[2rem] overflow-hidden shadow-2xl rotate-2 transform hover:rotate-0 transition-transform duration-700">
						<img
							alt="Abstract 3D digital sculpture"
							className="w-full h-[600px] object-cover"
							src="https://lh3.googleusercontent.com/aida-public/AB6AXuAizYLbBvBePy-INvniGNU3iSo0AFMelpqrVmA_H9SumeqhZKByMfoOJCZaOWleSp4gYXifY-Whlwpx-93pF_Apscl7gnnmHvG6w3xeNFgIat8OBOsNmYpeIJLZi-bAzKT3wEy1NwgPG0k09VclGqvk0tBmzkENSswqYutRlYSWPs-3F5XNlUub3fWU90P6rV1CTaqIHfLUlYyNKdcfPHMqv5jOo3WDhGaIv_UaFIA5uN_ajGPI5b4sKPjhymhBjqtDKCQyhphN9qoN"
						/>
					</div>
					<div className="absolute bottom-10 -left-10 glass-card p-6 rounded-2xl shadow-xl max-w-[200px]">
						<p className="text-xs font-bold text-accent-blue uppercase tracking-widest mb-1">
							Active Projects
						</p>
						<p className="text-md font-headline font-extrabold text-text-primary">
							12k+
						</p>
					</div>
				</div>
			</div>
		</Section>
	);
}

export default Hero;
