import React from "react";

function Section({ children, bg='', className='', id }) {
	return (
		<section id={id} className={`${bg} ${className}`}>
			<div className="px-3 py-16 relative mx-auto w-[min(1440px,calc(100%-24px))] sm:px-6 sm:py-20 md:px-12 md:py-24">
				{children}
			</div>
		</section>
	);
}

export default Section;
