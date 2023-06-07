"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const customClass: string = "pb-10";
const active: string =
	"transition ease-in-out duration-75 px-7 py-3 border border-transparent border-2 border-b-[#EB00FF] text-[#EB00FF]";
let lastClicked: number = 1;

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const handleButtonClick = (event: any) => {
		console.log(event);
		if (event.target.tagName === "A" && event.target.className !== "close") {
			event.target.setAttribute("class", active);

			const ul = document.querySelector(".my_ul");
			if (ul) {
				const lastElement: HTMLCollection[number] = ul.children[lastClicked];
				const link = lastElement.children[0];
				console.log(link, event.target);

				if (link !== event.target) {
					lastElement.children[0].removeAttribute("class");
				}
			}

			lastClicked = parseInt(event.target.getAttribute("datatype"));
		}
		setIsOpen(false);
	};

	return (
		<>
			<ul
				className={`${
					!isOpen ? "hidden" : "flex opacity-100"
				} items-center justify-center overflow-hidden my_ul transition-opacity duration-300 ease-in-out opacity-0 absolute flex-col w-screen h-screen top-0 left-0 bg-black`}
				onClick={(e) => handleButtonClick(e)}>
				<li className="absolute right-0 m-5 top-0 close">
					<Image src="/close.svg" alt="Close" width={20} height={20} />
				</li>
				<li className={customClass}>
					<Link href="/" className={`profile ${active}`} datatype="1">
						Profile
					</Link>
				</li>
				<li className={customClass}>
					<Link href="/" className="top-fan" datatype="2">
						Top Fan
					</Link>
				</li>
				<li className={customClass}>
					<Link href="/" className="custom" datatype="3">
						Custom
					</Link>
				</li>
				<li className={customClass}>
					<Link href="/" className="recent-matches" datatype="4">
						Recent Matches
					</Link>
				</li>
				<li className={customClass}>
					<Link href="/" className="my-heroes" datatype="5">
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
				className="my-5 ml-5"
			/>
			<p className="w-screen text-center font-bold">Profile</p>
		</>
	);
};

export default Navbar;
