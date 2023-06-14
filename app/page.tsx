"use client";
import Image from "next/image";
import { useEffect } from "react";
import useStore from "../utils/navbar";
import { shallow } from "zustand/shallow";

export default function Home() {
	const [focus, updateFocus] = useStore(
		(state) => [state.focus, state.updateFocus],
		shallow,
	);

	useEffect(() => {
		if (focus !== "Profile") {
			updateFocus("Profile");
		}
	}, []);

	return (
		<main className="flex w-full flex-col items-center justify-between py-10 md:py-0">
			<section className="h-full flex w-full flex-col items-center py-5 md:py-0 justify-center px-10 md:flex-row md:gap-20 md:h-screen">
				<Image
					src="/profile.svg"
					alt="chona mae's image"
					width={150}
					height={150}
					className="w-auto h-auto sm:w-56 sm:h-56"
				/>
				<div>
					<h1 className="text-2xl mt-5 font-bold text-center md:text-start md:text-4xl">
						Hello my name is <br className="sm:hidden" />
						<span className="text-[#EB00FF]">Chona Mae</span>
					</h1>
					<p className="text-center mt-3 text-sm max-w-sm md:text-justify md:max-w-md md:text-md">
						I am content creator in Mobile Legends, my in game name is Chona and
						my FB Page name is{" "}
						<span className="text-[#EB00FF] font-bold">DIMPL3 </span>
						Lorem Ipsum is simply dummy text of the printing and typesetting
						industry.
					</p>
				</div>
			</section>
			<section className="h-screen flex flex-col items-center justify-center w-full">
				<h1 className="text-center font-bold text-2xl mb-5 md:text-4xl md:text-start md:mb-10">
					What can you say?
				</h1>
				<form
					action=""
					method="POST"
					className="w-[300px] flex flex-col items-end md:w-1/2">
					<input
						type="email"
						placeholder="Your Email"
						required
						className="border border-[#EB00FF] rounded-md bg-transparent py-2 px-4 w-full md:py-3 placeholder:text-sm"
					/>
					<textarea
						required
						className="border border-[#EB00FF] rounded-md bg-transparent py-2 my-4 px-4 md:h-40 w-full placeholder:text-sm"
						placeholder="Your Message"></textarea>
					<button
						type="submit"
						className="rounded-md text-sm font-bold text-center bg-[#EB00FF] px-5 py-3">
						Submit
					</button>
				</form>
			</section>
		</main>
	);
}
