import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import { MdArrowForward, MdCode, MdDataUsage } from "react-icons/md";
import Button from "../ui/Button";

function SectionH({ id }) {
	return (
		// Section 1: BCA Program Overview
		<Section bg="bg-surface" id={id}>
			<div className="flex flex-col md:flex-row items-center overflow-hidden">
				<div className="w-full md:w-1/2 h-[500px] relative">
					<img
						alt="Students collaborating"
						className="w-full h-full object-cover rounded-l-3xl"
						data-alt="Modern bright university Nameclassroom with diverse students collaborating around a wooden table, soft natural sunlight, professional academic atmosphere"
						src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIvmfR5TbPjS52lUaylYCsTkLpasOFIXmfdnUr_kw7F6piRGFa9zPK_xRkJKwlCsoFZCsy1Qo1ex4i32mNNBx_PBLqRE9GvwsmlnuQf0OVPfxLTaCWN9OMyhrAT_rr7L1uffYmWEmoUZmcWawPyGfhijPXJBCTmAk-weW-uzodhYasZmWXD6PcNqGuKtB8viYubObqDCSiNPGzA487o2URuDKuxodIDSZChj4UvJThfpTrlUxzZlELHZFeDIBkP7Nwr-wC9XXTR8Yt"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface/40"></div>
				</div>
				<div className="w-full md:w-1/2 p-8">
					<div className="max-w-xl">
						<Heading className="mb-6" helperText="CORE CURRICULUM">
							BCA Program Overview
						</Heading>
						<p className="main-description mb-6">
							Our Bachelor of Computer Applications program is
							designed for the modern digital architect. We blend
							foundational computational logic with emerging
							technological trends to prepare you for a
							high-impact career in global tech ecosystems.
						</p>
						<div className="grid grid-cols-2 gap-6 mb-10">
							<div className="flex items-start gap-3">
								<span className="text-base text-secondary-500">
									<MdCode />
								</span>
								<div>
									<p className="font-bold text-text-secondary text-sm">
										Software Dev
									</p>
									<p className="text-xs text-text-muted">
										Full-stack mastery
									</p>
								</div>
							</div>
							<div className="flex items-start gap-3">
								<span className="text-base text-secondary-500">
									<MdDataUsage />
								</span>
								<div>
									<p className="font-bold text-text-secondary text-sm">
										Data Systems
									</p>
									<p className="text-xs text-text-muted">
										Architectural design
									</p>
								</div>
							</div>
						</div>
						<Button icon={<MdArrowForward />} iconPosition="right" variant='gradient'>View More</Button>
					</div>
				</div>
			</div>
		</Section>
	);
}

export default SectionH;
