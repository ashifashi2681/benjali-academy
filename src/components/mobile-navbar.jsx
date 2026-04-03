"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";

import { navData } from "@/lib/navigation";

import Button from "./ui/Button";

function normalizeHref(href) {
	if (!href) return "/";

	const [path, hash = ""] = href.split("#");
	const normalizedPath = path || "/";

	return `${normalizedPath}${hash ? `#${hash}` : ""}`;
}

function resolveActiveHref(items, pathname, hash) {
	const pathnameOnly = pathname || "/";
	const hashValue = hash || "";
	const routeWithHash = `${pathnameOnly}${hashValue}`;

	const exactMatch = items.find((item) => item.link === routeWithHash);
	if (exactMatch) return exactMatch.link;

	const routeMatch = items.find((item) => item.link.split("#")[0] === pathnameOnly);
	return routeMatch?.link || items[0]?.link || "/";
}

export default function MobileNavbar() {
	const pathname = usePathname();
	const [currentHash, setCurrentHash] = useState("");
	const [activeHref, setActiveHref] = useState("");
	const [isOpen, setIsOpen] = useState(false);
	const items = useMemo(
		() => navData.map((item) => ({ ...item, link: normalizeHref(item.link) })),
		[]
	);

	useEffect(() => {
		const syncHash = () => setCurrentHash(window.location.hash || "");

		syncHash();
		window.addEventListener("hashchange", syncHash);

		return () => window.removeEventListener("hashchange", syncHash);
	}, []);

	useEffect(() => {
		setActiveHref(resolveActiveHref(items, pathname, currentHash));
	}, [currentHash, items, pathname]);

	useEffect(() => {
		setIsOpen(false);
	}, [pathname, currentHash]);

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "";

		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	return (
		<div className="lg:hidden">
			<Button
				size="icon"
				variant="outline"
				color="primary"
				onClick={() => setIsOpen((open) => !open)}
				aria-expanded={isOpen}
				aria-controls="mobile-navigation"
				aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}>
				{isOpen ? <FiX className="size-5" /> : <FiMenu className="size-5" />}
			</Button>

			<div
				className={`fixed inset-0 z-[120] transition-all duration-300 ease-out ${
					isOpen ? "pointer-events-auto" : "pointer-events-none"
				}`}>
				<div
					className={`absolute inset-0 bg-slate-950/28 backdrop-blur-sm transition-opacity duration-300 ${
						isOpen ? "opacity-100" : "opacity-0"
					}`}
					onClick={() => setIsOpen(false)}
				/>

				<div
					id="mobile-navigation"
					className={`absolute inset-x-3 top-3 rounded-[30px] border border-white/65 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.92))] p-4 shadow-[0_30px_80px_rgba(15,23,42,0.22)] backdrop-blur-2xl transition-all duration-300 ease-out ${
						isOpen ? "translate-y-0 opacity-100" : "-translate-y-6 opacity-0"
					}`}>
					<div className="mb-5 flex items-center justify-between">
						<div>
							<p className="text-[11px] font-bold uppercase tracking-[0.28em] text-primary-500">
								Navigation
							</p>
							<Link
								href="/"
								className="mt-1 block text-lg font-extrabold tracking-[-0.08em] text-text-primary">
								BRAND
							</Link>
						</div>

						<button
							type="button"
							onClick={() => setIsOpen(false)}
							className="inline-flex size-11 items-center justify-center rounded-2xl border border-border bg-white text-text-primary shadow-[0_10px_24px_rgba(15,23,42,0.08)] transition-transform duration-200 ease-out hover:scale-[1.03] active:scale-[0.98]"
							aria-label="Close navigation menu">
							<FiX className="size-5" />
						</button>
					</div>

					<div className="space-y-2">
						{items.map((item, index) => {
							const isActive = activeHref === item.link;

							return (
								<Link
									key={item.link}
									href={item.link}
									onClick={() => {
										setActiveHref(item.link);
										setIsOpen(false);
									}}
									aria-current={isActive ? "page" : undefined}
									className={`group flex items-center justify-between rounded-[22px] border px-4 py-3.5 transition-all duration-300 ease-out ${
										isActive
											? "border-primary-200 bg-[linear-gradient(135deg,rgba(202,157,49,0.14),rgba(255,255,255,0.95))] text-primary-700 shadow-[0_16px_36px_rgba(202,157,49,0.16)]"
											: "border-transparent bg-white/72 text-text-secondary hover:-translate-y-0.5 hover:border-border hover:bg-white hover:text-text-primary hover:shadow-[0_16px_30px_rgba(15,23,42,0.08)]"
									}`}
									style={{ transitionDelay: isOpen ? `${index * 35}ms` : "0ms" }}>
									<div className="flex items-center gap-3">
										<span
											className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
												isActive ? "bg-primary-500 shadow-[0_0_0_6px_rgba(202,157,49,0.12)]" : "bg-border"
											}`}
										/>
										<span className="text-sm font-semibold tracking-[-0.01em]">
											{item.label}
										</span>
									</div>

									<FiArrowUpRight
										className={`size-4 transition-transform duration-300 ${
											isActive ? "translate-x-0 text-primary-500" : "translate-x-0 group-hover:translate-x-0.5"
										}`}
									/>
								</Link>
							);
						})}
					</div>

					<div className="mt-5 rounded-[24px] border border-primary-100 bg-[linear-gradient(135deg,rgba(202,157,49,0.12),rgba(52,113,170,0.08))] p-3">
						<Button variant="gradient" className="w-full">
							Get a Quote
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}
