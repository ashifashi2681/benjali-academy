import React, { forwardRef, useId } from "react";

function cn(...classes) {
	return classes.filter(Boolean).join(" ");
}

const baseSelectClasses =
	"w-full appearance-none rounded-2xl border bg-[linear-gradient(180deg,#ffffff,#f8fafc)] px-4 py-3.5 text-sm text-text-primary outline-none transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const Select = forwardRef(function Select(
	{
		id,
		name,
		label,
		options = [],
		placeholder = "Select option",
		helperText,
		error,
		wrapperClassName = "",
		labelClassName = "",
		selectClassName = "",
		helperClassName = "",
		required = false,
		...props
	},
	ref
) {
	const generatedId = useId();
	const selectId = id || name || generatedId;
	const hasError = Boolean(error);

	return (
		<div className={cn("w-full", wrapperClassName)}>
			{label && (
				<label
					htmlFor={selectId}
					className={cn(
						"mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-text-muted",
						labelClassName
					)}>
					{label}
					{required && <span className="ml-1 text-error">*</span>}
				</label>
			)}

			<select
				ref={ref}
				id={selectId}
				name={name}
				required={required}
				aria-invalid={hasError}
				aria-describedby={
					helperText || hasError ? `${selectId}-help` : undefined
				}
				className={cn(
					baseSelectClasses,
					hasError
						? "border-error/70 bg-white focus:border-error focus:ring-4 focus:ring-error/20"
						: "border-border focus:border-secondary-400 focus:ring-4 focus:ring-secondary-100/70",
					selectClassName
				)}
				{...props}>
				<option disabled value="">
					{placeholder}
				</option>
				{options?.map((option) => {
					if (typeof option === "string") {
						return (
							<option key={option} value={option}>
								{option}
							</option>
						);
					}

					return (
						<option
							key={option.value}
							value={option.value}
							disabled={option.disabled}>
							{option.label}
						</option>
					);
				})}
			</select>

			{(helperText || hasError) && (
				<p
					id={`${selectId}-help`}
					className={cn(
						"mt-2 text-xs",
						hasError ? "text-error" : "text-text-muted",
						helperClassName
					)}>
					{hasError ? error : helperText}
				</p>
			)}
		</div>
	);
});

export default Select;
