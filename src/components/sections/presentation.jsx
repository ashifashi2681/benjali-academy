import React from "react";
import Heading from "../ui/heading";
import { MdCall, MdHandshake, MdPayments, MdSettings } from "react-icons/md";

function Presentation() {
	return (
		<section>
			<div className="w-full bg-secondary-500 min-h-[220px] relative px-12 md:px-24 flex items-center justify-between overflow-hidden">
				<Heading color="text-white" className="z-10">
					Your Business
					<br />
					Presentation
				</Heading>
				<div className="grid grid-cols-5 gap-3 opacity-30 z-10">
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
				<div className="absolute bottom-0 left-0 w-full h-8 bg-background rounded-t-[2.5rem]"></div>
			</div>
			<div className="max-w-[1440px] mx-auto px-12 -mt-16">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
					<div className="flex flex-col items-center group">
						<div className="w-28 h-28 bg-accent-gold rotate-45 rounded-[1.5rem] flex items-center justify-center shadow-xl mb-12 transition-transform duration-500 group-hover:scale-110">
							<span className=" text-accent-blue text-xxl -rotate-45">
								<MdCall />
							</span>
						</div>
						<div className="bg-secondary-500 px-8 py-2 rounded-full mb-6">
							<span className="text-white text-xs font-bold uppercase tracking-widest">
								Lorem Ipsum
							</span>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-sm border border-border/5 text-center flex-grow">
							<Heading as="h4" className="mb-3">
								Lorem Ipsum
							</Heading>
							<p className="text-sm text-text-secondary leading-relaxed">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore.
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center group">
						<div className="w-28 h-28 bg-accent-gold rotate-45 rounded-[1.5rem] flex items-center justify-center shadow-xl mb-12 transition-transform duration-500 group-hover:scale-110">
							<span className="text-accent-blue text-xxl -rotate-45">
								<MdHandshake />
							</span>
						</div>
						<div className="bg-secondary-500 px-8 py-2 rounded-full mb-6">
							<span className="text-white text-xs font-bold uppercase tracking-widest">
								Lorem Ipsum
							</span>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-sm border border-border/5 text-center flex-grow">
							<Heading as="h4" className="mb-3">
								Lorem Ipsum
							</Heading>
							<p className="text-sm text-text-secondary leading-relaxed">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore.
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center group">
						<div className="w-28 h-28 bg-accent-gold rotate-45 rounded-[1.5rem] flex items-center justify-center shadow-xl mb-12 transition-transform duration-500 group-hover:scale-110">
							<span className=" text-accent-blue text-xxl -rotate-45">
								<MdSettings />
							</span>
						</div>
						<div className="bg-secondary-500 px-8 py-2 rounded-full mb-6">
							<span className="text-white text-xs font-bold uppercase tracking-widest">
								Lorem Ipsum
							</span>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-sm border border-border/5 text-center flex-grow">
							<Heading as="h4" className="mb-3">
								Lorem Ipsum
							</Heading>
							<p className="text-sm text-text-secondary leading-relaxed">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore.
							</p>
						</div>
					</div>
					<div className="flex flex-col items-center group">
						<div className="w-28 h-28 bg-accent-gold rotate-45 rounded-[1.5rem] flex items-center justify-center shadow-xl mb-12 transition-transform duration-500 group-hover:scale-110">
							<span className="text-accent-blue text-xxl -rotate-45">
								<MdPayments />
							</span>
						</div>
						<div className="bg-secondary-500 px-8 py-2 rounded-full mb-6">
							<span className="text-white text-xs font-bold uppercase tracking-widest">
								Lorem Ipsum
							</span>
						</div>
						<div className="bg-white p-8 rounded-2xl shadow-sm border border-border/5 text-center flex-grow">
							<Heading as="h4" className="mb-3">
								Lorem Ipsum
							</Heading>
							<p className="text-sm text-text-secondary leading-relaxed">
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit, sed do eiusmod tempor
								incididunt ut labore.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Presentation;
