export default function Heading({
	children,
	as = "h2",
	helperText = "",
	className = "",
	align = "left",
	color = "text-text-primary",
}) {
	const Tag = as;

	const sizes = {
		h1: "text-xxxl",
		h2: "text-xxl",
		h3: "text-xl",
		h4: "text-lg",
		h5: "text-md",
		h6: "text-base",
	};

	return (
		<>
			{helperText !== "" && (
				<p
					className={`text-accent-blue font-bold tracking-[0.2em] mb-5 text-xs uppercase text-${align}`}>
					{helperText}
				</p>
			)}

			<Tag
				className={`
                    font-heading font-extrabold tracking-tight leading-[1.1] text-${align}
                    ${sizes[Tag] || sizes.h2}
                    ${color}
                    ${className}
                `}>
				{children}
			</Tag>
		</>
	);
}
