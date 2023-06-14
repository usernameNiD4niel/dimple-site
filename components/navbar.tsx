"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import useStore from "../utils/navbar";

const customClass: string = "pb-10 md:pb-0 md:mr-10 md:text-xs";
const active: string =
	"transition ease-in-out duration-75 px-7 py-3 border border-transparent border-2 border-b-[#EB00FF] text-[#EB00FF]";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [focus] = useStore((state) => [state.focus]);

	const handleButtonClick = (): void => setIsOpen(false);

	return (
		<>
			<ul
				className={`${
					!isOpen ? "hidden" : "flex opacity-100"
				} md:flex md:opacity-100 items-center justify-center overflow-hidden opacity-0 transition-opacity duration-300 ease-in-out absolute flex-col w-screen h-screen top-0 left-0 md:flex-row md:h-20 md:py-5 md:bg-transparent bg-black md:bg-gradient-to-r md:from-black`}
				onClick={handleButtonClick}>
				<li className="absolute right-1 m-5 top-0 close">
					<Image
						src="/close.svg"
						alt="Close"
						width={20}
						height={20}
						className="w-auto h-auto md:hidden"
					/>
				</li>
				<li className={customClass}>
					<Link href="/" className={`${focus === "Profile" && active}`}>
						Profile
					</Link>
				</li>
				<li className={customClass}>
					<Link href="/top-fan" className={`${focus === "Top Fan" && active}`}>
						Top Fan
					</Link>
				</li>
				<li className={customClass}>
					<Link href="/custom" className={`${focus === "Custom" && active}`}>
						Custom
					</Link>
				</li>
				<li className={customClass}>
					<Link
						href="/recent-matches"
						className={`${focus === "Recent Matches" && active}`}>
						Recent Matches
					</Link>
				</li>
				<li className={customClass}>
					<Link
						href="/my-heroes"
						className={`${focus === "My Heroes" && active}`}>
						My Heroes
					</Link>
				</li>
			</ul>
			<Image
				src="/menu.svg"
				alt="menu bar svg"
				width={30}
				height={30}
				onClick={() => setIsOpen((prev) => !prev)}
				className="my-5 ml-5 w-auto h-auto z-0 md:hidden"
			/>
			<p className="w-screen text-center font-bold banner-text md:hidden">
				{focus}
			</p>
		</>
	);
};

export default Navbar;
