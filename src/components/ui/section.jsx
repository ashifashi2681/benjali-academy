import React from "react";

function Section({ children, bg='', className='', id }) {
	return (
		<section id={id} className={`${bg} ${className}`}>
			<div className="px-4 py-16 relative w-full mx-auto max-w-[1440px] sm:px-6 sm:py-20 md:px-12 md:py-24">
				{children}
			</div>
		</section>
	);
}

export default Section;
