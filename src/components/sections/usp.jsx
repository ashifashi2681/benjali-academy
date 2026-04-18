import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";
import { MdAccountBalance, MdArrowForward, MdGroups, MdLanguage, MdModelTraining, MdPublic } from "react-icons/md";
import Button from "../ui/Button";
import Card from "../ui/card";

function Usp({ id }) {
	return (
		<Section id={id}>
			<div className="mb-14 text-center max-w-4xl mx-auto">
				<Heading
					helperText="Forging World-ClassName Leaders"
					className="mb-6">
					Why Choose <span className="text-primary-500">Benjali</span>
					?
				</Heading>
				<p className="main-description mx-auto">
					We bridge the gap between academic theory and executive
					excellence through a curriculum designed for the future of
					global commerce.
				</p>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-12 gap-8 perspective-1000">
				<div className="md:col-span-8 group perspective-1000">
					<Card className="card-lift h-full bg-surface border border-border overflow-hidden ">
						<div className="h-full relative flex flex-col md:flex-row gap-10">
							<div className="flex-1 z-10">
								<div className="w-14 h-14 rounded-full bg-accent-gold/30 flex items-center justify-center mb-6 text-primary-700">
									<span
										className="text-md"
										data-icon="account_balance">
										<MdAccountBalance />
									</span>
								</div>
								<Heading as="h3" className="mb-4">
									Industry-Aligned
									<br />
									Curriculum
								</Heading>
								<p className="main-description reveal-content">
									Our modules are co-developed with Fortune
									500 executives to ensure every lesson
									addresses real-world market demands and
									emerging technological shifts.
								</p>
							</div>
							<div className="flex-1 relative min-h-[300px] md:min-h-full rounded-2xl overflow-hidden shadow-2xl">
								<img
									className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
									data-alt="data analytics tablet"
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3FmMldV2JsOxNl2EXG51moCrw824TCz8ChvmWNwD6KvKez9OT1EWy7cVhlQ_HG-idBoENA3Y0gwW5oLVPYowji-_86ozpmdqE5i9J2QJNAv3CuNRi6E3M1HPPSrlgv8x_HvCkrxeLhdMmJquEepvW5zTobpS7Z0oC4OI1jEaNCD9pS8aCzILEYSyl1QeLgSqNAz9q1suIGgFiMtsldti5uuPJzds-f1G47vauZdRBKF7Ui-7hjmTFRGWb2jIyKCsBpc79qfZ4dCzM"
								/>
								<div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
							</div>
						</div>
					</Card>
				</div>

				<div className="md:col-span-4 group">
					<Card className="card-lift h-full bg-surface border border-border flex flex-col">
						<div className="w-14 h-14 rounded-full bg-accent-blue/30 flex items-center justify-center mb-6 text-secondary-700">
							<span className="text-md" data-icon="groups">
								<MdGroups />
							</span>
						</div>
						<Heading as="h3" className="mb-4">
							Expert
							<br />
							Mentorship
						</Heading>
						<p className="main-description mb-10 reveal-content">
							Gain direct access to seasoned CEOs and industry
							veterans who provide one-on-one strategic guidance.
						</p>
						<div className="mt-auto space-y-4">
							<div className="flex items-center gap-4 p-4 bg-secondary-50 rounded-xl transition-all hover:bg-secondary-100 group/item">
								<img
									className="w-12 h-12 rounded-full object-cover shadow-md"
									data-alt="executive"
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKFZQz_6KsVwrGw0AOWz44TE-J-bf73nOESRfWUK4idMlxCdkhnnHXPW6T0EMwmbq9Wa6jkSXOLwKyJizF-NqZiIrxSa1cn6e6140KSIg_nUqePr-6fTU8HOra07W3TyxnqJwj-Wcl1N9HRDlSdoup1HTp_5n6G_IpVI-KXW_DXI4YMydrmPYXj-lPNTl5f6Z4v_4iBmQywG79bELdN1KYGka0KUiNW9VWDSswQROaSP8YSublLszGm94FEehEmaHDTrhLZYGTbZGo"
								/>
								<div>
									<p className="text-sm font-black text-text-secondary">
										Jameson Thorne
									</p>
									<p className="text-xs text-text-muted font-bold uppercase tracking-widest">
										Ex-VP Logistics
									</p>
								</div>
							</div>
							<div className="flex items-center gap-4 p-4 bg-secondary-50 rounded-xl opacity-60">
								<img
									className="w-12 h-12 rounded-full object-cover grayscale"
									data-alt="executive"
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOoNem_55nXcG0jHoUp27QnZ8G_IUuUDZp5FshY0BvN_MpQHZYS8Jlbs0Zi_c3Q2C8DfjDeKEHdRfO-G7OoXXrLgkt2U794fwjmxQ5O_IzwpD72LxGzg5a923OIr5MRX5OVT2-jX0_mJnvvKSp7sK2oM8CrH8nJH_KHH9_JM8nfvYHxfCwyBcgIdBUnkfQ-ZHG4DGY26ln6BshDAdvwxqB-s6lsj2ffwpLBJkr90OvOcQjItgThGKROEraneHWdCmYWK2vmJelUodW"
								/>
								<div>
									<p className="text-sm font-bold text-text-secondary">
										Sarah Al-Zayed
									</p>
									<p className="text-xs text-text-muted uppercase tracking-widest">
										Innovation Director
									</p>
								</div>
							</div>
						</div>
					</Card>
				</div>

				<div className="md:col-span-5 group">
					<Card className="card-lift h-full bg-secondary-500 text-white shadow-xl flex flex-col justify-between relative overflow-hidden">
						<div className="relative z-10">
							<div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-10">
								<span className="text-md" data-icon="public">
									<MdPublic />
								</span>
							</div>
							<Heading color="white" as="h3" className="mb-4">
								Global
								<br />
								Networking Hub
							</Heading>
							<p className="main-description !text-white mb-10 reveal-content">
								Join a prestigious ecosystem of 50,000+ alumni
								spanning across 45 countries.
							</p>
						</div>
						<div className="relative z-10">
							<Button
								icon={<MdArrowForward />}
								iconPosition="right"
								variant="outline"
								color="secondary-500">
								Explore Network
							</Button>
						</div>
						<div className="absolute -right-24 -bottom-24 opacity-10 group-hover:opacity-20 transition-opacity duration-700">
							<span className="text-[320px]" data-icon="language">
								<MdLanguage />
							</span>
						</div>
					</Card>
				</div>

				<div className="md:col-span-7 group">
					<Card className="card-lift h-full bg-surface border border-border flex flex-col justify-between overflow-hidden">
						<div className="flex flex-col md:flex-row gap-12">
							<div className="md:w-1/2">
								<div className="w-14 h-14 rounded-full bg-accent-gold/30 flex items-center justify-center mb-10 text-primary-700">
									<span
										className="text-md"
										data-icon="model_training">
										<MdModelTraining />
									</span>
								</div>
								<Heading as="h3" className="mb-4">
									Business
									<br />
									Simulations
								</Heading>
								<p className="main-description">
									Experience high-stakes decision-making in
									our virtual lab, where market volatility
									tests your strategic acumen.
								</p>
							</div>
							<div className="md:w-1/2 h-64 md:h-auto rounded-2xl overflow-hidden relative shadow-inner border border-border">
								<img
									className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-125"
									data-alt="trading simulation"
									src="https://lh3.googleusercontent.com/aida-public/AB6AXuBcF6Vu7wB5Ux2k9OTzSfMT6cxlIaoX7Y-UyreQn8ZRoBMAVt8d8F_4_ElrJ0XGac1CEtolQg4iXBfHbSC7Kddb7r1CYdxTKLocmGba19s8Wx-NBMAb63yX-KOqrDsgyXhYSerjJzwUSJmTKdp-Wpiu3Q1gwdQa6do4byqXZezIVDJM5CC-GauO_WHMzIemMB4FQI2qIakBvau_bJXSvH8cP_bE8tyPwDt_fFDX7eNrcwVr3HdrlPMbEch7Rj1rS-YjiO6AvXxGwFwa"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
							</div>
						</div>
					</Card>
				</div>
			</div>
		</Section>
	);
}

export default Usp;
