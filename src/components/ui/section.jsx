import React from "react";

function Section({ children, bg='', className='' }) {
	return (
		<section className={`${bg} ${className}`}>
			<div className="px-12 relative max-w-[1440px] mx-auto py-24 w-full">
				{children}
			</div>
		</section>
	);
}

export default Section;
