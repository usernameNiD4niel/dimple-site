"use client";
import { shallow } from "zustand/shallow";
import useStore from "../../utils/navbar";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const RecentMatches = () => {
	const [focus, updateFocus] = useStore(
		(state) => [state.focus, state.updateFocus],
		shallow,
	);

	useEffect(() => {
		if (focus !== "Recent Matches") {
			updateFocus("Recent Matches");
		}
	}, []);

	return (
		<main className="py-3 flex flex-col gap-3 w-full items-center h-screen md:py-24">
			<Link
				href="/recent-matches"
				className="border transition duration-300 ease-in-out border-[#FFD600] flex flex-col justify-center w-[85%] md:h-32 md:max-w-2xl py-5 rounded-xl cursor-pointer overflow-hidden group">
				<div className="relative w-full">
					<Image
						src="/lou_yi.svg"
						alt="Lou yi hero in mobile legends"
						width={500}
						height={40}
						className="absolute -top-10 left-0 right-0 opacity-30 w-full"
					/>
				</div>
				<p className="w-40 bg-gradient-to-r from-[#b39812] px-5 py-1 text-[10px] font-bold">
					MVP
				</p>
				<h1 className="font-bold text-1xl pl-5 group-hover:text-2xl group-hover:text-[#FFD600]">
					Classic: Victory
				</h1>
				<p className="text-sm font-thin pl-5">KDA: 15/1/9</p>
			</Link>
		</main>
	);
};

export default RecentMatches;
