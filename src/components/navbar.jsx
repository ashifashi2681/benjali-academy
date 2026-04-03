"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { navData } from "@/lib/navigation";
import Button from "./ui/Button";

function normalizeHref(href) {
	if (!href) return "/";

	const [path, hash = ""] = href.split("#");
	const normalizedPath = path || "/";

	return `${normalizedPath}${hash ? `#${hash}` : ""}`;
}

function parseHref(href) {
	const normalizedHref = normalizeHref(href);
	const [path, hash = ""] = normalizedHref.split("#");

	return {
		path: path || "/",
		hash: hash ? `#${hash}` : "",
		id: hash || "",
		href: normalizedHref,
	};
}

function resolveActiveHref(items, pathname, hash) {
	const pathnameOnly = pathname || "/";
	const hashValue = hash || "";
	const routeWithHash = `${pathnameOnly}${hashValue}`;

	const exactMatch = items.find((item) => normalizeHref(item.link) === routeWithHash);
	if (exactMatch) return exactMatch.link;

	const routeMatch = items.find((item) => {
		const [path] = normalizeHref(item.link).split("#");
		return path === pathnameOnly;
	});

	return routeMatch?.link || items[0]?.link || "/";
}

function Navbar() {
	const pathname = usePathname();
	const [currentHash, setCurrentHash] = useState("");
	const [activeHref, setActiveHref] = useState("");
	const [indicatorStyle, setIndicatorStyle] = useState({
		opacity: 0,
		width: 0,
		x: 0,
	});
	const navListRef = useRef(null);
	const itemRefs = useRef(new Map());
	const normalizedItems = useMemo(
		() => navData.map((item) => ({ ...item, link: normalizeHref(item.link) })),
		[]
	);
	const sectionItems = useMemo(
		() =>
			normalizedItems
				.map((item) => ({ ...item, ...parseHref(item.link) }))
				.filter((item) => item.id),
		[normalizedItems]
	);

	useEffect(() => {
		const syncHash = () => {
			setCurrentHash(window.location.hash || "");
		};

		syncHash();
		window.addEventListener("hashchange", syncHash);

		return () => window.removeEventListener("hashchange", syncHash);
	}, []);

	useEffect(() => {
		setActiveHref(resolveActiveHref(normalizedItems, pathname, currentHash));
	}, [currentHash, normalizedItems, pathname]);

	useEffect(() => {
		const pathnameOnly = pathname || "/";
		const observableSections = sectionItems.filter((item) => item.path === pathnameOnly);

		if (!observableSections.length) return undefined;

		const visibleSections = new Map();
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					const href = entry.target.getAttribute("data-nav-href");
					if (!href) return;

					if (entry.isIntersecting) {
						visibleSections.set(href, entry.intersectionRatio);
						return;
					}

					visibleSections.delete(href);
				});

				if (!visibleSections.size) return;

				const [nextHref] = [...visibleSections.entries()].sort((a, b) => b[1] - a[1])[0];
				if (!nextHref || nextHref === activeHref) return;

				setActiveHref(nextHref);

				const nextHash = parseHref(nextHref).hash;
				if (nextHash && nextHash !== window.location.hash) {
					window.history.replaceState(null, "", `${pathnameOnly}${nextHash}`);
					setCurrentHash(nextHash);
				}
			},
			{
				root: null,
				rootMargin: "100px 0px -55% 0px",
				threshold: [0.2, 0.35, 0.5, 0.65, 0.8],
			}
		);

		observableSections.forEach((item) => {
			const sectionElement = document.getElementById(item.id);
			if (!sectionElement) return;

			sectionElement.setAttribute("data-nav-href", item.href);
			observer.observe(sectionElement);
		});

		return () => {
			observer.disconnect();
			observableSections.forEach((item) => {
				const sectionElement = document.getElementById(item.id);
				if (!sectionElement) return;
				sectionElement.removeAttribute("data-nav-href");
			});
		};
	}, [activeHref, pathname, sectionItems]);

	useEffect(() => {
		const updateIndicator = () => {
			const activeElement = itemRefs.current.get(activeHref);
			const listElement = navListRef.current;

			if (!activeElement || !listElement) {
				setIndicatorStyle((prev) => ({ ...prev, opacity: 0 }));
				return;
			}

			const itemBox = activeElement.getBoundingClientRect();
			const listBox = listElement.getBoundingClientRect();

			setIndicatorStyle({
				opacity: 1,
				width: itemBox.width,
				x: itemBox.left - listBox.left,
			});
		};

		updateIndicator();
		window.addEventListener("resize", updateIndicator);

		return () => window.removeEventListener("resize", updateIndicator);
	}, [activeHref]);

	return (
		<nav className="fixed top-0 z-[100] w-full">
			<div className="mx-auto mt-4 flex w-[min(1440px,calc(100%-24px))] items-center justify-between rounded-[28px] border border-white/60 bg-[rgba(255,255,255,0.72)] px-5 py-4 shadow-[0_20px_60px_rgba(15,23,42,0.08)] backdrop-blur-2xl md:px-8">
				<Link
					href="/"
					className="text-xl font-extrabold tracking-[-0.08em] text-text-primary transition-transform duration-300 ease-out hover:scale-[1.02]">
					BRAND
				</Link>

				<div className="hidden items-center gap-3 md:flex">
					<div
						ref={navListRef}
						className="relative flex items-center rounded-full border border-border/70 bg-muted/70 p-1.5">
						<span
							aria-hidden="true"
							className="pointer-events-none absolute top-1.5 bottom-1.5 rounded-full bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] transition-[transform,width,opacity] duration-300 ease-out"
							style={{
								opacity: indicatorStyle.opacity,
								width: `${indicatorStyle.width}px`,
								transform: `translateX(${indicatorStyle.x}px)`,
							}}
						/>

						{normalizedItems.map((nav) => {
							const isActive = activeHref === nav.link;

							return (
								<Link
									key={nav.link}
									ref={(node) => {
										if (node) {
											itemRefs.current.set(nav.link, node);
										} else {
											itemRefs.current.delete(nav.link);
										}
									}}
									href={nav.link}
									onClick={() => setActiveHref(nav.link)}
									aria-current={isActive ? "page" : undefined}
									className={`relative z-10 rounded-full px-4 py-2.5 text-sm font-semibold tracking-[-0.01em] transition-all duration-200 ease-out ${
										isActive
											? "text-primary-700"
											: "text-text-secondary hover:-translate-y-0.5 hover:text-text-primary"
									}`}>
									<span className="inline-flex items-center gap-2">
										<span
											className={`h-1.5 w-1.5 rounded-full transition-all duration-300 ease-out ${
												isActive ? "bg-primary-500 scale-100" : "bg-primary-500/0 scale-75"
											}`}
										/>
										{nav.label}
									</span>
								</Link>
							);
						})}
					</div>

					<Button size="md" variant="gradient">
						Get a Quote
					</Button>
				</div>

				<div className="md:hidden">
					<Button size="sm" variant="gradient">
						Quote
					</Button>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
