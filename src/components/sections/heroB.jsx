import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import { MdAnalytics, MdArrowForward, MdAutoAwesome, MdVerified } from "react-icons/md";

function HeroB() {
	return (
		<Section>
			<div className="relative pt-20 overflow-hidden min-h-screen flex items-center">
				<div className="w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
					<div className="lg:col-span-5 space-y-8">
						<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 text-primary-800 text-xs font-bold tracking-wider uppercase">
							<span className="text-sm">
								<MdAutoAwesome />
							</span>
							Future of Design
						</div>
						<Heading as="h1">
							Crafting{" "}
							<span className="text-primary-400">Digital</span>{" "}
							Dimensions.
						</Heading>

						<p className="main-description">
							We push the boundaries of the web with immersive 3D
							experiences and glassmorphic interfaces designed for
							the next generation of digital products.
						</p>
						<div className="flex flex-wrap gap-4 pt-4">
							<button className="bg-primary-500 text-surface px-8 py-4 rounded-xl font-bold flex items-center gap-2 hover:shadow-lg transition-all active:scale-95">
								View Projects
								<span className="text-base">
									<MdArrowForward />
								</span>
							</button>
							<button className="bg-surface text-text-primary border border-border px-8 py-4 rounded-xl font-bold hover:bg-secondary-100 transition-all">
								Our Process
							</button>
						</div>
						<div className="flex items-center gap-6 pt-8 border-t border-border">
							<div className="flex -space-x-3">
								<img
									className="w-10 h-10 rounded-full border-2 border-background object-cover"
									data-alt="User avatar portrait for social proof"
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuBeQ5-sZXAlAUWdmt19JH569oGU_j2NFiPTSjHM5EfKMy2khlZ09BORXmXxwsY88pfTr6fN69kMmx_SH_6FAtRd_R83d-FS6zfrASmEH77B7qLy3CGXwkg5djpVGkz3rRQaq9WIdgSLrYKgxrLgc_y-4xvD1H2SDCR10mkQXqnWOAoc22LrkffWIK51xi2G5G2KpTD2APh5JfsLVAnUemuC7kVjPQBRH0F1KcQGulDLZMwyuw1PcRaKSEeBfiIFaGmbwADvvI9F8UnD"
								/>
								<img
									className="w-10 h-10 rounded-full border-2 border-background object-cover"
									data-alt="User avatar portrait for social proof"
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuDeBpUn-VFxQsKLucaULQMPK-vHKbujAyub_5MT2UM-RbbzThv47GvuzuvsiOYaKF5aGOdR0OpNGdK-Rm_S4faAVqd1HpkBCauPA0EpSprUx4J3Jgakiln7qDpGjCBqAUtWqGH7uV81It8Y_IEtwXupsARHofo7vyRxU0585O-f51fxugLVPqgMA4E3XUGvI9ghyKrIKZr4ocqLOz0k5Vw1MzxBF97eDx8ZXFeQCgfxzQNrh4YH-0E_kPFeBR8_yb_C3QNFJ5yNIsAu"
								/>
								<img
									className="w-10 h-10 rounded-full border-2 border-background object-cover"
									data-alt="User avatar portrait for social proof"
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuCSUTUh80oRiuYzKNt4rp8_ytHrp0mwj9b54XrVB6DzlUW7Oe4yTn4f1tL2QxHtNccJYm_zLTyp8e04H9EOq3mLm0xbCZUEaTo9FVpFYXad_54F9slNdfMacMpaamlDJF1UfvMWcWkDswBu5k3fOuq1bQB4VuRBXoNldSjm2o3TIJb4NnW7OYMKiFy6Sr7sFRpyKUOovsSP5dQekhXOZgOvlXQa8gksuVNHLqEq36yd5j-f4yXm9BCiac6i4vj59Z7Y85Cd1Oow4Se4"
								/>
							</div>
							<div className="text-sm">
								<p className="font-bold text-text-secondary">
									Trusted by 500+ Brands
								</p>
								<p className="text-text-muted text-xs">
									Leading the 2026 tech curve
								</p>
							</div>
						</div>
					</div>
					<div className="lg:col-span-7 relative flex justify-center items-center h-[600px] lg:h-[800px]">
						<div className="relative z-20 w-full h-full flex items-center justify-center">
							<div className="absolute inset-0 bg-gradient-to-tr from-primary-300 to-accent-blue/60 blur-3xl rounded-full scale-75 animate-pulse"></div>
							<img
								className="w-full max-w-[500px] object-contain drop-shadow-2xl floating z-20"
								data-alt="3D abstract translucent flowing crystalline structure centerpiece"
								src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRY8iHPhvb4O0D6O6xbQRnVfD8EuOiiuZKWUdyETUG2tMMaVLID4uXVUqiPlFlRIDjjxEpxl1K0fbvKesNXoB8948iFIzHz5AUuJxdVT6V-wVwSxqkPg0x5bLz3pAcR7aIvZku_tZRvbeEUjb8mhybvgmz574wUOVBf40_wfCS95N2I40de_ulkNOEajk-Rk2jt78VKu900GHw0OJ6UPh9rufrdOS65lkiqfBggsIwGyiVdn4BGvsfzAgiTPGffSkrIAwGZmLb8DuB"
							/>
						</div>
						<div className="absolute top-20 right-4 lg:right-10 z-30 glass-card backdrop-blur-lg p-5 rounded-2xl w-48 shadow-xl animate-[float_8s_ease-in-out_infinite]">
							<div className="flex items-center gap-3 mb-3">
								<div className="w-10 h-10 rounded-lg bg-secondary-100 flex items-center justify-center text-secondary-500">
									<span className="text-base">
										<MdAnalytics />
									</span>
								</div>
								<span className="text-xs font-bold text-text-primary uppercase tracking-widest">
									Growth
								</span>
							</div>
							<div className="h-1 w-full bg-border rounded-full overflow-hidden">
								<div className="h-full w-2/3 bg-accent-blue"></div>
							</div>
							<p className="mt-3 text-base font-bold text-text-primary">
								+124%
							</p>
						</div>
						<div className="absolute bottom-32 left-0 lg:-left-10 z-30 glass-card backdrop-blur-lg p-6 rounded-2xl w-56 shadow-xl animate-[float_7s_ease-in-out_infinite_1s]">
							<div className="flex items-center gap-2 mb-4">
								<span className="text-secondary-500 text-base">
									<MdVerified />
								</span>
								<span className="text-sm font-bold">
									Secure Asset
								</span>
							</div>
							<div className="flex gap-1">
								<div className="h-8 w-8 rounded bg-accent-blue/10"></div>
								<div className="h-8 w-8 rounded bg-accent-blue/30"></div>
								<div className="h-8 w-16 rounded bg-accent-blue/30"></div>
							</div>
							<p className="mt-4 text-xs text-text-muted font-medium">
								Verified by Quantum Seal v2.0
							</p>
						</div>
						<div className="absolute top-1/2 -translate-y-1/2 right-0 z-30 glass-card backdrop-blur-lg p-4 rounded-xl w-40 shadow-lg animate-[float_10s_ease-in-out_infinite_0.5s]">
							<div className="flex justify-between items-center mb-2">
								<div className="w-3 h-3 rounded-full bg-success"></div>
								<span className="text-[10px] font-bold text-text-muted">
									LIVE FEED
								</span>
							</div>
							<div className="space-y-2">
								<div className="h-2 w-full bg-border rounded"></div>
								<div className="h-2 w-3/4 bg-border rounded"></div>
							</div>
						</div>
						<div className="absolute top-1/4 left-1/4 w-64 h-64 bg-secondary-100 rounded-full blur-3xl -z-10"></div>
						<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-100 rounded-full blur-3xl -z-10"></div>
					</div>
				</div>
				<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
					<span className="text-[10px] font-bold tracking-[0.3em] uppercase">
						Scroll
					</span>
					<div className="w-px h-12 bg-gradient-to-b from-primary-500 to-transparent"></div>
				</div>
			</div>
		</Section>
	);
}

export default HeroB;
