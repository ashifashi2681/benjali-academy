"use client";

import React, { useEffect } from "react";
import { MdClose, MdSchedule, MdSchool, MdStars } from "react-icons/md";
import Button from "./Button";

function ModalCource({ isOpen, onClose, course }) {
	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	useEffect(() => {
		const closeOnEscape = (event) => {
			if (event.key === "Escape") onClose?.();
		};

		if (isOpen) window.addEventListener("keydown", closeOnEscape);
		return () => window.removeEventListener("keydown", closeOnEscape);
	}, [isOpen, onClose]);

	const details = course?.details ?? {};

	return (
		<div
			className={`fixed inset-0 z-[120] px-3 py-4 transition-all duration-300 sm:p-6 ${
				isOpen
					? "pointer-events-auto opacity-100"
					: "pointer-events-none opacity-0"
			}`}>
			<button
				type="button"
				aria-label="Close modal"
				onClick={onClose}
				className="absolute inset-0 bg-slate-950/55 backdrop-blur-[2px]"
			/>

			<div
				role="dialog"
				aria-modal="true"
				aria-labelledby="course-modal-title"
				className={`relative mx-auto flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-[0_25px_65px_-28px_rgba(0,0,0,0.55)] transition-all duration-300 ${
					isOpen
						? "translate-y-0 scale-100 opacity-100"
						: "translate-y-4 scale-[0.98] opacity-0"
				}`}>
				<div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-7 sm:py-5">
					<div>
						<p className="mb-2 inline-flex items-center gap-2 rounded-full bg-accent-blue/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-accent-blue">
							<MdStars className="text-sm" />
							Course Details
						</p>
						<h3
							id="course-modal-title"
							className="font-heading text-lg font-extrabold leading-tight text-text-primary sm:text-xl">
							{course?.title}
						</h3>
						<p className="mt-2 text-sm leading-relaxed text-text-secondary">
							{course?.desc}
						</p>
					</div>
					<Button
						size="sm"
						variant="gradient"
						color="primary"
						icon={<MdClose />}
						onClick={onClose}
						aria-label="Close"
					/>
				</div>

				<div className="overflow-y-auto px-5 py-5 sm:px-7">
					<div className="grid gap-3 sm:grid-cols-2">
						<div className="rounded-xl border border-border bg-background/45 p-4">
							<p className="mb-1 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-accent-blue">
								<MdSchedule className="text-sm" />
								Duration
							</p>
							<p className="text-sm font-medium text-text-secondary">
								{details.duration ?? course?.duration}
							</p>
						</div>
						<div className="rounded-xl border border-border bg-background/45 p-4">
							<p className="mb-1 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-accent-blue">
								<MdSchool className="text-sm" />
								Ideal For
							</p>
							<p className="text-sm font-medium text-text-secondary">
								{details.idealFor ??
									"Aspiring professionals and graduates"}
							</p>
						</div>
					</div>

					<div className="mt-6">
						<h4 className="mb-3 text-sm font-bold uppercase tracking-[0.12em] text-accent-blue">
							Key Modules
						</h4>
						<ul className="space-y-2">
							{(details.modules ?? []).map((module) => (
								<li
									key={module}
									className="rounded-lg border border-border bg-background/35 px-4 py-2.5 text-sm text-text-secondary">
									{module}
								</li>
							))}
						</ul>
					</div>

					<div className="mt-6 rounded-xl border border-border bg-background/45 p-4">
						<h4 className="mb-2 text-sm font-bold uppercase tracking-[0.12em] text-accent-blue">
							Features
						</h4>
						<p className="text-sm leading-relaxed text-text-secondary">
							{details.features}
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ModalCource;
