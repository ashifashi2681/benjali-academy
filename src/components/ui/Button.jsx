"use client";

import React, { forwardRef } from "react";

function cn(...classes) {
	return classes.filter(Boolean).join(" ");
}

function renderIcon(icon, iconClassName) {
	if (!icon) return null;

	if (React.isValidElement(icon)) {
		return React.cloneElement(icon, {
			className: cn("shrink-0", icon.props.className, iconClassName),
			"aria-hidden": true,
		});
	}

	if (typeof icon === "function") {
		const Icon = icon;
		return (
			<Icon
				className={cn("shrink-0", iconClassName)}
				aria-hidden="true"
			/>
		);
	}

	return (
		<span className={cn("shrink-0", iconClassName)} aria-hidden="true">
			{icon}
		</span>
	);
}

function resolveColorValue(color) {
	if (!color) return "var(--color-primary-500)";

	if (
		color.startsWith("var(") ||
		color.startsWith("#") ||
		color.startsWith("rgb") ||
		color.startsWith("hsl") ||
		color.startsWith("oklch") ||
		color.startsWith("color(")
	) {
		return color;
	}

	if (color.includes("-")) {
		return `var(--color-${color})`;
	}

	const semanticColors = new Set(["success", "warning", "error", "info"]);

	if (semanticColors.has(color)) {
		return `var(--color-${color})`;
	}

	return `var(--color-${color}-500)`;
}

const sizeClasses = {
	sm: "h-9 px-3.5 text-xs gap-1.5 rounded-full sm:h-10 sm:px-4 sm:text-sm sm:gap-2",
	md: "h-10 px-4 text-xs gap-2 sm:h-10 sm:px-4.5 sm:text-sm sm:gap-2 md:h-11 md:px-5 md:gap-2.5 rounded-full",
	lg: "h-10 px-4.5 text-xs gap-2 sm:h-11 sm:px-5 sm:text-sm sm:gap-2.5 md:h-12 md:px-6 rounded-full",
	xl: "h-11 px-5 text-sm gap-2.5 sm:h-12 sm:px-6 sm:gap-3 md:h-14 md:px-7 rounded-full",
	icon: "size-10 rounded-lg sm:size-11 sm:rounded-xl",
};

const variantClasses = {
	primary:
		"border border-[color:var(--btn-border)] bg-[var(--btn-bg)] text-[var(--btn-text)] shadow-[0_12px_30px_-16px_var(--btn-shadow)] hover:border-[color:var(--btn-border-hover)] hover:bg-[var(--btn-bg-hover)] hover:shadow-[0_18px_36px_-18px_var(--btn-shadow-strong)]",
	outline:
		"border border-[color:var(--btn-border)] bg-[var(--btn-outline-bg)] text-[var(--btn-outline-text)] shadow-[0_10px_24px_-18px_var(--btn-outline-shadow)] hover:border-[color:var(--btn-border-hover)] hover:bg-[var(--btn-outline-bg-hover)] hover:text-[var(--btn-outline-text-hover)] hover:shadow-[0_16px_34px_-20px_var(--btn-shadow)]",
	gradient:
		"border border-[color:var(--btn-border)] bg-[linear-gradient(135deg,var(--btn-bg),var(--btn-bg-soft),var(--btn-bg-tint))] text-[var(--btn-text)] shadow-[0_16px_38px_-18px_var(--btn-shadow)] hover:brightness-105 hover:shadow-[0_22px_44px_-20px_var(--btn-shadow-strong)]",
};

const Button = forwardRef(function Button(
	{
		children,
		className = "",
		variant = "primary",
		color = "primary",
		size = "md",
		icon,
		iconPosition = "left",
		fullWidth = false,
		disabled = false,
		type,
		style,
		...props
	},
	ref
) {
	const currentSize = sizeClasses[size] || sizeClasses.md;
	const currentVariant = variantClasses[variant] || variantClasses.primary;
	const resolvedColor = resolveColorValue(color);
	const iconNode = renderIcon(
		icon,
		size === "sm"
			? "size-3.5 sm:size-4"
			: size === "icon"
				? "size-4 sm:size-5"
				: "size-4 sm:size-5"
	);
	const resolvedType = type ?? "button";
	const buttonStyle = {
		"--btn-bg": resolvedColor,
		"--btn-bg-hover": `color-mix(in srgb, ${resolvedColor} 88%, black)`,
		"--btn-bg-soft": `color-mix(in srgb, ${resolvedColor} 82%, white)`,
		"--btn-bg-tint": `color-mix(in srgb, ${resolvedColor} 58%, white)`,
		"--btn-border": `color-mix(in srgb, ${resolvedColor} 72%, transparent)`,
		"--btn-border-hover": `color-mix(in srgb, ${resolvedColor} 88%, black)`,
		"--btn-shadow": `color-mix(in srgb, ${resolvedColor} 38%, transparent)`,
		"--btn-shadow-strong": `color-mix(in srgb, ${resolvedColor} 52%, transparent)`,
		"--btn-ring": `color-mix(in srgb, ${resolvedColor} 26%, white)`,
		"--btn-text": "#ffffff",
		"--btn-outline-bg": "rgba(255,255,255,0.92)",
		"--btn-outline-bg-hover": `color-mix(in srgb, ${resolvedColor} 10%, white)`,
		"--btn-outline-text": `color-mix(in srgb, ${resolvedColor} 68%, black)`,
		"--btn-outline-text-hover": `color-mix(in srgb, ${resolvedColor} 78%, black)`,
		"--btn-outline-shadow": "rgba(15,23,42,0.16)",
		...style,
	};

	return (
		<button
			ref={ref}
			type={resolvedType}
			disabled={disabled}
			style={buttonStyle}
			className={cn(
				"inline-flex items-center justify-center font-semibold tracking-[0.01em] whitespace-nowrap",
				"relative overflow-hidden isolate transition-all duration-200 ease-out",
				"focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[var(--btn-ring)] focus-visible:ring-offset-2 focus-visible:ring-offset-background",
				"active:translate-y-0 active:scale-[0.985] hover:-translate-y-0.5",
				"disabled:pointer-events-none disabled:translate-y-0 disabled:scale-100 disabled:opacity-55",
				"[&>span]:inline-flex [&>span]:items-center [&>span]:justify-center [&>span]:gap-inherit",
				fullWidth && "w-full",
				currentSize,
				currentVariant,
				className
			)}
			{...props}>
			<span>
				{iconPosition === "left" && iconNode}
				{children && <span>{children}</span>}
				{iconPosition === "right" && iconNode}
			</span>
		</button>
	);
});

export default Button;
