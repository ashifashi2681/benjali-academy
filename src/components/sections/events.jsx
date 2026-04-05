import React from "react";
import Section from "../ui/section";
import Heading from "../ui/heading";

const Card = ({ title, desc, month, date, img }) => (
	<div className="group relative flex flex-col bg-surface rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 card-zoom border border-border/30">
		<div className="relative h-64 overflow-hidden">
			<div className="absolute top-4 right-4 z-10 bg-surface/90 backdrop-blur-md px-3 py-1.5 rounded-lg text-center shadow-lg border border-border/20">
				<span className="block text-xs font-bold text-text-secondary uppercase tracking-tighter">
					{month}
				</span>
				<span className="block text-lg font-extrabold text-text-primary leading-none">
					{date}
				</span>
			</div>
			<img
				alt="Startup Pitch"
				className="zoom-image w-full h-full object-cover transition-transform duration-700 ease-out"
				data-alt="High-energy startup pitch competition with bright stage lighting, energetic speaker, and a blurry background of a captive audience"
				src={img}
			/>
		</div>
		<div className="p-6 flex-grow flex flex-col justify-between">
			<div>
				<Heading as="h4" className="mb-3">{title}</Heading>
				<p className="text-text-secondary text-sm font-body leading-relaxed">
					{desc}
				</p>
			</div>
		</div>
	</div>
);

function Events({ id }) {
	const data = [
		{
			title: "Future Tech Summit",
			desc: "Exploring the boundaries of artificial intelligence and sustainable engineering practices for the next decade.",
			month: "Oct",
			date: "24",
			img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDoc4d9nTtYAUFDhi1SIeXErrXsupg8OuTcpDcLcx2RuakC8bYvNaKG2bpIEIQKXpLUPrwjEAfT2UBnXgbjXoB9k8w8tLNB6SvgB3l_q3y2Xej1kFqFBF0DL1pl9quDa6EsKX89W0mlsmBV1v7YnnS8p7brmQdOnea7i9ptI6kIvKnSZZAu0Cm2s1ZO441LtEznh-CRKY7MFp1JIBL_GOsdqEH4aRr3q1_WYoBIwuZlh1urPWiIlElbzTGG6dMw2TSVqyV-SHIbINBR",
		},
		{
			title: "Design Sprint 2025",
			desc: "A weekend of rapid prototyping and user-centric design thinking with top industry mentors.",
			month: "Nov",
			date: "28",
			img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDHYxjVL3-ESMQC9UJvzY2viY5yDgJ77OuWd3rmDOXgDM4yvmwKdsWuGbXyC0BYIROiimY5ISqm95P13GDqzJSMzfNzSr-0Ba_-jwDdTuIkCEEfQUTxFNZfJi7_tBQtcqgvY-JtBrmd7Kqc5DlhiocgKl3cZr2WMgwbz5oSoE8HMBG-QY1DDJ6CRBRsOM65hNvArNNxlsF3PWd6kVn-aMVKgRqbV8SAi0vHaaPEJWXioPJ0sPU3UKYnQ774AoY6SdHITGKf7QzvaY6o",
		},
		{
			title: "Digital Gala Night",
			desc: "Celebrating the year's digital achievements with our global partners and visionary creators.",
			month: "Dec",
			date: "12",
			img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCuqjMpoDwwP5xuDI6iQyiiYsw99d3Z0AvMz9k-1P5wwBNnqCjW8eIx_ZyoRL7anBdOJYXjdHVq5PJ2uRiUcnQX96FVrSPqxkjb-MntPdICcIIjTpdN42zZw_TOIulPSPMY7CePC89opzoGc8RFVFPjCb2mN3NQI3gEl1nPwcWGPnFxfGcyT5hxR6SFCwPtaWvLDHX-eALjwNf65irtz5LOEOISFBst9e1Nk-p1MNoiswPRWHkyJ04tgrXblApOK3IoB3gRpVgrxuQu",
		},
		{
			title: "Founder's Pitch Lab",
			desc: "The premier stage for early-stage startups to present their boldest ideas to top-tier investors.",
			month: "Jan",
			date: "05",
			img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAUTEMGqeOnlPabXpJXePeWamO_8AshscxPqgubRGRoEnvsG_LeBlM-_lZ_izMpsW-esavqQ_PyECbMBmOyEaMM9TpS73OKrj4iZSMY2o5ctJk9UweJgQ2u2rrlJBWbiWhPXu5lv8GSL4JefBS8ccrXCGR015EjkjWWzcxYeDelOCNNzlWUs1IUeQik2wpWVDBVqwmSKoAq2FGb2SPF_d5KhxI8zszXmYS4bqz1Y-Ni1AMLtMrmymAgfYkLd9lQqoNOpHkzO-VvyUoq",
		},
	];
	return (
		<Section id={id}>
			<div>
				<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
					<div>
						<Heading as="h3" helperText="Latest Buzz">
							Event Highlights
						</Heading>
					</div>
					<p className="max-w-md text-text-secondary">
						Stay updated with our community workshops, design
						sprints, and industry keynote sessions.
					</p>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
					{data?.map((itm, i) => (
						<Card
							key={i}
							title={itm.title}
							desc={itm.desc}
							month={itm.month}
							date={itm.date}
							img={itm.img}
						/>
					))}
				</div>
			</div>
		</Section>
	);
}

export default Events;

/* 
event card
<div className="group cursor-pointer">
	<div className="relative overflow-hidden rounded-2xl mb-6 aspect-square">
		<img
			alt="Design Workshop"
			className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
			src="https://lh3.googleusercontent.com/aida-public/AB6AXuCPd-Ro36iUAxZcUGsopzzaXm7tJ9qpzVJSLcU897OmHAk7usUlmMfnXASsL7YrNXSG58G58o4EVmQtSTaISFsM6Q0TnLf44M68VKoohEX2iH8xG7X_5Y9Pw4H_O1UR29DCLiVCNfeJrAy64cG_rk9PgVkOzMpkWMmFQBPD6eKRA0Uiy-GGRg3N9p3qMwlOiEN9st2tdx-2TnZgmCym5WnVNRbIEUoHZZ4TsX22eAiDv2vpiKvGOaaYHFaLWZMw9aYt_eBYrsOFvldE"
		/>
		<div className="absolute top-4 left-4 glass-card px-3 py-1 rounded-full text-xxs font-bold uppercase tracking-widest">
			Oct 24
		</div>
	</div>
	<Heading
		as="h4"
		className="mb-2 group-hover:text-secondary-600 transition-colors">
		Future of UX Summit
	</Heading>
	<p className="text-sm text-text-secondary leading-relaxed line-clamp-2">
		Exploring the intersection of generative AI and
		human-centered design principles.
	</p>
</div>
*/
