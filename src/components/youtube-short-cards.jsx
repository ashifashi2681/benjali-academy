"use client";

import React, { useCallback, useMemo, useRef, useState } from "react";
import {
	MdPause,
	MdPlayArrow,
	MdVolumeOff,
	MdVolumeUp,
	MdFormatQuote,
	MdArrowBackIosNew,
	MdOutlineArrowForwardIos,
} from "react-icons/md";
import useEmblaCarousel from "embla-carousel-react";
import Button from "./ui/Button";

function YoutubeShortCards() {
	const [emblaRef, emblaApi] = useEmblaCarousel({
		align: "start",
		watchDrag: false,
	});

	const goToPrev = () => emblaApi?.scrollPrev();
	const goToNext = () => emblaApi?.scrollNext();

	const iframeRef = useRef(null);
	const [isPlaying, setIsPlaying] = useState(false);
	const [volume, setVolume] = useState(25);
	const shortVideoId = "RM485oUuOhg";

	const youtubeEmbedSrc = useMemo(
		() =>
			`https://www.youtube.com/embed/${shortVideoId}?enablejsapi=1&playsinline=1&rel=0&controls=0&modestbranding=1&loop=1&playlist=${shortVideoId}`,
		[shortVideoId]
	);

	const sendPlayerCommand = useCallback((func, args = []) => {
		const iframeWindow = iframeRef.current?.contentWindow;
		if (!iframeWindow) return;

		iframeWindow.postMessage(
			JSON.stringify({
				event: "command",
				func,
				args,
			}),
			"https://www.youtube.com"
		);
	}, []);

	const handlePlayToggle = useCallback(() => {
		if (isPlaying) {
			sendPlayerCommand("pauseVideo");
			setIsPlaying(false);
			return;
		}

		if (volume === 0) {
			sendPlayerCommand("mute");
		} else {
			sendPlayerCommand("unMute");
			sendPlayerCommand("setVolume", [volume]);
		}

		sendPlayerCommand("playVideo");
		setIsPlaying(true);
	}, [isPlaying, sendPlayerCommand, volume]);

	const handleVolumeChange = useCallback(
		(event) => {
			const nextVolume = Number(event.target.value);
			setVolume(nextVolume);

			if (nextVolume === 0) {
				sendPlayerCommand("mute");
				return;
			}

			sendPlayerCommand("unMute");
			sendPlayerCommand("setVolume", [nextVolume]);
		},
		[sendPlayerCommand]
	);
	return (
		<div className="embla">
			<div className="flex gap-2 justify-end">
				<Button
					onClick={goToPrev}
					variant="gradient"
					size="sm"
					icon={<MdArrowBackIosNew />}></Button>
				<Button
					onClick={goToNext}
					variant="gradient"
					size="sm"
					icon={<MdOutlineArrowForwardIos />}></Button>
			</div>
			<div className="embla__viewport overflow-hidden" ref={emblaRef}>
				<div className="embla__container py-8 flex gap-6">
					<div className="embla__slide flex-none w-[300px] aspect-[9/16] relative rounded-2xl overflow-hidden shadow-xl group">
						<iframe
							ref={iframeRef}
							src={youtubeEmbedSrc}
							title="Client video testimonial"
							className="absolute inset-0 h-full w-full"
							allow="autoplay; encrypted-media; picture-in-picture"
							referrerPolicy="strict-origin-when-cross-origin"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
						<div className="absolute inset-x-4 bottom-24 z-10 rounded-xl bg-black/45 p-3 backdrop-blur-md border border-white/20">
							<div className="flex items-center gap-3">
								<button
									type="button"
									onClick={handlePlayToggle}
									className="h-10 w-10 shrink-0 rounded-full border border-white/40 bg-white/15 text-white flex items-center justify-center hover:bg-white/25 transition-colors"
									aria-label={
										isPlaying
											? "Pause testimonial video"
											: "Play testimonial video"
									}>
									{isPlaying ? (
										<MdPause className="text-md" />
									) : (
										<MdPlayArrow className="text-md" />
									)}
								</button>
								<div className="flex items-center gap-2 w-full">
									{volume === 0 ? (
										<MdVolumeOff className="text-white text-lg" />
									) : (
										<MdVolumeUp className="text-white text-lg" />
									)}
									<input
										type="range"
										min="0"
										max="100"
										value={volume}
										onChange={handleVolumeChange}
										className="w-full accent-white"
										aria-label="Video volume"
									/>
								</div>
							</div>
						</div>
						<div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/10 backdrop-blur-lg border border-white/20 text-white">
							<h4 className="font-bold text-md">Sarah Jenkins</h4>
							<p className="text-sm opacity-90">
								CEO, TechFlow Systems
							</p>
						</div>
					</div>

					<ReviewCard />
					<ReviewCard />
					<ReviewCard />
					<ReviewCard />
				</div>
			</div>
		</div>
	);
}

export default YoutubeShortCards;

const ReviewCard = () => (
	<div className="embla__slide flex-none w-[300px] aspect-[9/16] relative rounded-2xl shadow-xl p-8 flex flex-col bg-secondary-50">
		<div className="mb-6">
			<span className="text-accent-blue text-xl">
				<MdFormatQuote />
			</span>
		</div>
		<p className="!pointer-events-none text-base font-body text-text-secondary leading-relaxed flex-grow">
			The level of strategic insight and technical execution was far
			beyond what we expected. A truly transformative partnership.
		</p>
		<div className="mt-auto p-4 -mx-4 rounded-xl bg-white/30 backdrop-blur-md border border-border/20 text-text-secondary">
			<h4 className="font-bold text-md">Marcus Thorne</h4>
			<p className="text-sm opacity-80">Founder, Astral Media</p>
		</div>
	</div>
);
