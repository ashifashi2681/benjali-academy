import React, { forwardRef, useId } from "react";

function cn(...classes) {
	return classes.filter(Boolean).join(" ");
}

const baseTextAreaClasses =
	"w-full resize-y rounded-2xl border bg-[linear-gradient(180deg,#ffffff,#f8fafc)] px-4 py-3.5 text-sm text-text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] outline-none transition-all duration-200 placeholder:text-text-muted/80 disabled:cursor-not-allowed disabled:opacity-60";

const TextArea = forwardRef(function TextArea(
	{
		id,
		name,
		label,
		rows = 5,
		helperText,
		error,
		wrapperClassName = "",
		labelClassName = "",
		textAreaClassName = "",
		helperClassName = "",
		required = false,
		...props
	},
	ref
) {
	const generatedId = useId();
	const textAreaId = id || name || generatedId;
	const hasError = Boolean(error);

	return (
		<div className={cn("w-full", wrapperClassName)}>
			{label && (
				<label
					htmlFor={textAreaId}
					className={cn(
						"mb-2 block text-xs font-semibold uppercase tracking-[0.12em] text-text-muted",
						labelClassName
					)}>
					{label}
					{required && <span className="ml-1 text-error">*</span>}
				</label>
			)}

			<textarea
				ref={ref}
				id={textAreaId}
				name={name}
				rows={rows}
				required={required}
				aria-invalid={hasError}
				aria-describedby={
					helperText || hasError ? `${textAreaId}-help` : undefined
				}
				className={cn(
					baseTextAreaClasses,
					hasError
						? "border-error/70 bg-white focus:border-error focus:ring-4 focus:ring-error/20"
						: "border-border bg-white/85 focus:border-secondary-400 focus:bg-white focus:ring-4 focus:ring-secondary-100/70",
					textAreaClassName
				)}
				{...props}
			/>

			{(helperText || hasError) && (
				<p
					id={`${textAreaId}-help`}
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

export default TextArea;
