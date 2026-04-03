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
		return <Icon className={cn("shrink-0", iconClassName)} aria-hidden="true" />;
	}

	return <span className={cn("shrink-0", iconClassName)} aria-hidden="true">{icon}</span>;
}

const sizeClasses = {
	sm: "h-10 px-4 text-sm gap-2 rounded-xl",
	md: "h-11 px-5 text-sm gap-2.5 rounded-full",
	lg: "h-12 px-6 text-sm gap-2.5 rounded-full",
	xl: "h-14 px-7 text-sm gap-3 rounded-full",
	icon: "size-11 rounded-xl",
};

const variantClasses = {
	primary:
		"border border-primary-500 bg-primary-500 text-white shadow-[0_12px_30px_-16px_rgba(202,157,49,0.85)] hover:border-primary-600 hover:bg-primary-600 hover:shadow-[0_18px_36px_-18px_rgba(202,157,49,0.95)]",
	outline:
		"border border-primary-500/70 bg-white/90 text-primary-700 shadow-[0_10px_24px_-18px_rgba(15,23,42,0.45)] hover:bg-primary-50 hover:text-primary-800 hover:shadow-[0_16px_34px_-20px_rgba(202,157,49,0.45)]",
	gradient:
		"border border-primary-400/30 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-300 text-white shadow-[0_16px_38px_-18px_rgba(52,113,170,0.55)] hover:brightness-105 hover:shadow-[0_22px_44px_-20px_rgba(52,113,170,0.7)]",
};

const Button = forwardRef(function Button(
	{
		children,
		className = "",
		variant = "primary",
		size = "md",
		icon,
		iconPosition = "left",
		fullWidth = false,
		disabled = false,
		type,
		...props
	},
	ref
) {
	const currentSize = sizeClasses[size] || sizeClasses.md;
	const currentVariant = variantClasses[variant] || variantClasses.primary;
	const iconNode = renderIcon(
		icon,
		size === "sm" ? "size-4" : size === "icon" ? "size-5" : "size-5"
	);
	const resolvedType = type ?? "button";

	return (
		<button
			ref={ref}
			type={resolvedType}
			disabled={disabled}
			className={cn(
				"inline-flex items-center justify-center font-semibold tracking-[0.01em] whitespace-nowrap",
				"relative overflow-hidden isolate transition-all duration-200 ease-out",
				"focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary-300/55 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
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
