import React from 'react'
import Button from './ui/Button';

function Navbar() {
  return (
		<nav className="fixed top-0 w-full z-[100] bg-surface/70 backdrop-blur-[20px] shadow-[0px_24px_48px_rgba(43,52,55,0.06)]">
			<div className="flex justify-between items-center px-12 py-6 max-w-[1440px] mx-auto w-full">
				<span className="text-2xl font-extrabold tracking-tighter text-[#2b3437]">
					BRAND
				</span>
				<div className="hidden md:flex items-center gap-10">
					<a
						className="text-sm font-bold tracking-tight text-[#005bc2] border-b-2 border-[#005bc2] pb-1"
						href="#">
						Home
					</a>
					<a
						className="text-sm font-medium tracking-tight text-[#2b3437] hover:text-[#005bc2] transition-colors"
						href="#about">
						About
					</a>
					<a
						className="text-sm font-medium tracking-tight text-[#2b3437] hover:text-[#005bc2] transition-colors"
						href="#programs">
						Programs
					</a>
					<a
						className="text-sm font-medium tracking-tight text-[#2b3437] hover:text-[#005bc2] transition-colors"
						href="#portfolio">
						Portfolio
					</a>
					<a
						className="text-sm font-medium tracking-tight text-[#2b3437] hover:text-[#005bc2] transition-colors"
						href="#contact">
						Contact
					</a>
				</div>
				<Button size="md" variant="gradient">Get a Quote</Button>
				
			</div>
		</nav>
  );
}

export default Navbar