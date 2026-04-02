import React from 'react'

function Footer() {
  return (
		<footer className="w-full py-12 px-12 bg-[#f1f4f6]">
			<div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-[1440px] mx-auto w-full">
				<span className="text-lg font-bold text-[#2b3437]">BRAND</span>
				<p className="font-['Inter'] text-xs uppercase tracking-widest text-[#5f5e5e]">
					© 2026 Digital Brand. All rights reserved.
				</p>
				<div className="flex gap-6">
					<a
						className="text-[#2b3437]/60 hover:text-[#005bc2] underline-offset-4 hover:underline font-['Inter'] text-xs uppercase tracking-widest transition-all"
						href="#">
						Privacy Policy
					</a>
					<a
						className="text-[#2b3437]/60 hover:text-[#005bc2] underline-offset-4 hover:underline font-['Inter'] text-xs uppercase tracking-widest transition-all"
						href="#">
						Terms
					</a>
					<a
						className="text-[#2b3437]/60 hover:text-[#005bc2] underline-offset-4 hover:underline font-['Inter'] text-xs uppercase tracking-widest transition-all"
						href="#">
						LinkedIn
					</a>
					<a
						className="text-[#2b3437]/60 hover:text-[#005bc2] underline-offset-4 hover:underline font-['Inter'] text-xs uppercase tracking-widest transition-all"
						href="#">
						Dribbble
					</a>
					<a
						className="text-[#2b3437]/60 hover:text-[#005bc2] underline-offset-4 hover:underline font-['Inter'] text-xs uppercase tracking-widest transition-all"
						href="#">
						Instagram
					</a>
				</div>
			</div>
		</footer>
  );
}

export default Footer