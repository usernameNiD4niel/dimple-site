"use client";

import useStore from "@/utils/navbar";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { shallow } from "zustand/shallow";

const MyHeroes = () => {
	const [focus, updateFocus] = useStore(
		(state) => [state.focus, state.updateFocus],
		shallow,
	);

	useEffect(() => {
		if (focus !== "My Heroes") {
			updateFocus("My Heroes");
		}
	}, []);

	return (
		<main className="py-3 flex flex-col gap-3 w-full items-center">
			<section>
				<ul className="flex flex-col items-center gap-3 mb-10">
					<li className="cursor-pointer border border-black bg-gradient-to-l from-[#3e0443] to-black rounded-xl flex flex-col items-center justify-center w-[300px] drop-shadow-3xl">
						<Link href="/my-heroes/1">
							<Image
								src="/lou_yi.svg"
								width={300}
								height={300}
								alt="mobile legends hero named lou yi"
								className="border rounded-tl-xl border-transparent rounded-tr-xl w-[300px] h-auto"
							/>
							<div className="flex flex-col items-center px-7 py-5 gap-2">
								<p className="w-full text-right text-[#FFD600] font-semibold text-xs">
									Rank #1
								</p>
								<h2 className="text-[#EB00FF] font-bold w-full text-start text-2xl">
									Lou Yi
								</h2>
								<p className="text-xs mb-5">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Corrupti...
								</p>
							</div>
						</Link>
					</li>
					<li className="cursor-pointer border border-black bg-gradient-to-l from-[#3e0443] to-black rounded-xl flex flex-col items-center justify-center w-[300px] drop-shadow-3xl">
						<Link href="/my-heroes/2">
							<Image
								src="/kagura.svg"
								width={300}
								height={300}
								alt="mobile legends hero named kagura"
								className="border rounded-tl-xl border-transparent rounded-tr-xl w-[300px] h-auto"
							/>
							<div className="flex flex-col items-center px-7 py-5 gap-2">
								<p className="w-full text-right text-[#FFD600] font-semibold text-xs">
									Rank #2
								</p>
								<h2 className="text-[#EB00FF] font-bold w-full text-start text-2xl">
									Kagura
								</h2>
								<p className="text-xs mb-5">
									Lorem ipsum dolor sit amet consectetur adipisicing elit.
									Corrupti...
								</p>
							</div>
						</Link>
					</li>
				</ul>
			</section>
		</main>
	);
};

export default MyHeroes;
