import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import { MdHub, MdLightbulb, MdMonitorHeart, MdShoppingCart } from "react-icons/md";

function Presentaion2({id}) {
	return (
		<Section id={id}>
			<div className="overflow-hidden bg-surface shadow-2xl rounded-[2rem] flex flex-col md:flex-row">
				<div className="w-full md:w-[40%] bg-secondary-500 p-12 md:p-20 text-white flex flex-col relative overflow-hidden min-h-[500px]">
					<div className="z-10 space-y-6">
						<Heading color="text-white">
							Business
							<br />
							Presentation
						</Heading>
						<div className="space-y-4 max-w-sm">
							<p className="text-base leading-relaxed opacity-70">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>
							<p className="text-base leading-relaxed opacity-70">
								Ut enim ad minim veniam, quis nostrud
								exercitation ullamco laboris nisi ut aliquip ex
								ea commodo consequat.
							</p>
						</div>
					</div>
					<div className="absolute bottom-12 left-12 grid grid-cols-6 gap-3 opacity-20">
						<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
						<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
						<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
						<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
						<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
						<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
						<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
						<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
						<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
						<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
						<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
						<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
						<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
						<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
						<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
						<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
						<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
						<div className="w-1.5 h-1.5 bg-white rounded-full"></div>
					</div>
				</div>
				<div className="w-full md:w-[60%] bg-surface p-12 md:p-20 flex flex-col justify-center space-y-12">
					<div className="flex items-start gap-8 group">
						<div className="relative flex-shrink-0 w-16 h-16">
							<div className="absolute inset-0 bg-accent-blue rotate-45 rounded-xl shadow-lg shadow-accent-blue/20"></div>
							<div className="absolute inset-0 flex items-center justify-center">
								<span className="text-white text-lg">
									<MdLightbulb />
								</span>
							</div>
						</div>
						<div className="space-y-1">
							<Heading as="h3">Lorem Ipsum Dolor</Heading>
							<p className="text-text-secondary text-sm max-w-md leading-relaxed">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
					</div>
					<div className="flex items-start gap-8 group translate-x-12">
						<div className="relative flex-shrink-0 w-16 h-16">
							<div className="absolute inset-0 bg-accent-gold rotate-45 rounded-xl shadow-lg shadow-accent-gold/20"></div>
							<div className="absolute inset-0 flex items-center justify-center">
								<span className="text-white text-lg">
									<MdMonitorHeart />
								</span>
							</div>
						</div>
						<div className="space-y-1">
							<Heading as="h3">Lorem Ipsum Dolor</Heading>
							<p className="text-text-secondary text-sm max-w-md leading-relaxed">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
					</div>
					<div className="flex items-start gap-8 group">
						<div className="relative flex-shrink-0 w-16 h-16">
							<div className="absolute inset-0 bg-accent-blue rotate-45 rounded-xl shadow-lg shadow-accent-blue/20"></div>
							<div className="absolute inset-0 flex items-center justify-center">
								<span className="text-white text-lg">
									<MdShoppingCart />
								</span>
							</div>
						</div>
						<div className="space-y-1">
							<Heading as="h3">Lorem Ipsum Dolor</Heading>
							<p className="text-text-secondary text-sm max-w-md leading-relaxed">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
					</div>
					<div className="flex items-start gap-8 group translate-x-12">
						<div className="relative flex-shrink-0 w-16 h-16">
							<div className="absolute inset-0 bg-accent-gold rotate-45 rounded-xl shadow-lg shadow-accent-gold/20"></div>
							<div className="absolute inset-0 flex items-center justify-center">
								<span className=" text-white text-lg">
									<MdHub />
								</span>
							</div>
						</div>
						<div className="space-y-1">
							<Heading as="h3">Lorem Ipsum Dolor</Heading>
							<p className="text-text-secondary text-sm max-w-md leading-relaxed">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua.
							</p>
						</div>
					</div>
				</div>
			</div>
		</Section>
	);
}

export default Presentaion2;
