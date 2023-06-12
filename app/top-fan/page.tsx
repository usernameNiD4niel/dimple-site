"use client";
import Image from "next/image";
import { useEffect } from "react";
import useStore from "../../utils/navbar";
import { shallow } from "zustand/shallow";

function TopFan() {
	const [focus, updateFocus] = useStore(
		(state) => [state.focus, state.updateFocus],
		shallow,
	);
	useEffect(() => {
		if (focus !== "Top Fan") {
			updateFocus("Top Fan");
		}
	}, []);
	return (
		<main>
			<section className="w-screen flex flex-col items-center justify-center my-5 px-10">
				<Image
					src="/pogi.svg"
					alt="the most handsome person in the world"
					width={90}
					height={90}
					className="my-5 w-auto h-auto"
				/>
				<h3 className="text-2xl font-bold text-center">Daniel Rey</h3>
				<p className="text-center my-2 text-sm">
					Top fan since 06/06/2023, thank you for supporting the pagefrom the
					bottom of our heart.
				</p>
				<p className="text-center text-sm">June 6, 2023</p>
			</section>
			<section className="w-screen flex flex-col items-center justify-center my-5 px-10">
				<Image
					src="/pogi.svg"
					alt="the most handsome person in the world"
					width={90}
					height={90}
					className="my-5 w-auto h-auto"
				/>
				<h3 className="text-2xl font-bold text-center">Daniel Rey</h3>
				<p className="text-center my-2 text-sm">
					Top fan since 06/06/2023, thank you for supporting the pagefrom the
					bottom of our heart.
				</p>
				<p className="text-center text-sm">June 6, 2023</p>
			</section>
			<section className="w-screen flex flex-col items-center justify-center my-5 px-10">
				<Image
					src="/pogi.svg"
					alt="the most handsome person in the world"
					width={90}
					height={90}
					className="my-5 w-auto h-auto"
				/>
				<h3 className="text-2xl font-bold text-center">Daniel Rey</h3>
				<p className="text-center my-2 text-sm">
					Top fan since 06/06/2023, thank you for supporting the pagefrom the
					bottom of our heart.
				</p>
				<p className="text-center text-sm">June 6, 2023</p>
			</section>
			<section className="w-screen flex flex-col items-center justify-center my-5 px-10">
				<Image
					src="/pogi.svg"
					alt="the most handsome person in the world"
					width={90}
					height={90}
					className="my-5 w-auto h-auto"
				/>
				<h3 className="text-2xl font-bold text-center">Daniel Rey</h3>
				<p className="text-center my-2 text-sm">
					Top fan since 06/06/2023, thank you for supporting the pagefrom the
					bottom of our heart.
				</p>
				<p className="text-center text-sm">June 6, 2023</p>
			</section>
			<section className="w-screen flex flex-col items-center justify-center my-5 px-10">
				<Image
					src="/pogi.svg"
					alt="the most handsome person in the world"
					width={90}
					height={90}
					className="my-5 w-auto h-auto"
				/>
				<h3 className="text-2xl font-bold text-center">Daniel Rey</h3>
				<p className="text-center my-2 text-sm">
					Top fan since 06/06/2023, thank you for supporting the pagefrom the
					bottom of our heart.
				</p>
				<p className="text-center text-sm">June 6, 2023</p>
			</section>
			<section className="w-screen flex flex-col items-center justify-center my-5 px-10">
				<Image
					src="/pogi.svg"
					alt="the most handsome person in the world"
					width={90}
					height={90}
					className="my-5 w-auto h-auto"
				/>
				<h3 className="text-2xl font-bold text-center">Daniel Rey</h3>
				<p className="text-center my-2 text-sm">
					Top fan since 06/06/2023, thank you for supporting the pagefrom the
					bottom of our heart.
				</p>
				<p className="text-center text-sm">June 6, 2023</p>
			</section>
		</main>
	);
}

export default TopFan;
