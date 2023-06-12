"use client";

import { useEffect } from "react";
import useStore from "../../utils/navbar";
import { shallow } from "zustand/shallow";
import Image from "next/image";
import Link from "next/link";

const Custom = () => {
	const [focus, updateFocus] = useStore(
		(state) => [state.focus, state.updateFocus],
		shallow,
	);

	useEffect(() => {
		if (focus !== "Custom") {
			updateFocus("Custom");
		}
	}, []);
	return (
		<main className="py-3 flex flex-col gap-3 w-full items-center h-screen">
			<Link
				href="/custom/June_10_2023_9_00pm"
				className="border transition duration-300 ease-in-out border-[#FFD600] w-[85%] py-5 rounded-xl cursor-pointer overflow-hidden group">
				<div className="relative w-full">
					<Image
						src="/lou_yi.svg"
						alt="Lou yi hero in mobile legends"
						width={500}
						height={40}
						className="absolute -top-10 left-0 right-0 opacity-30 w-full"
					/>
				</div>
				<h1 className="font-bold text-1xl pl-5 group-hover:text-2xl group-hover:text-[#FFD600]">
					1v1 Custom: Victory
				</h1>
				<p className="text-sm font-thin pl-5">KDA: 5/1/0</p>
			</Link>
		</main>
	);
};

export default Custom;
