import React from "react";

function Card({ children, className, haveBody = true }) {
	return (
		<div
			className={` rounded-xl md:rounded-2xl lg:rounded-3xl ${
				className ?? ""
			}`}>
			<div className={`${haveBody ? "p-4 md:p-6 lg:p-8 h-full" : ""}`}>
				{children}
			</div>
		</div>
	);
}

export default Card;
