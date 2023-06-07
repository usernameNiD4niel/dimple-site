import Image from "next/image";

export default function Home() {
	return (
		<main className="flex w-screen flex-col items-center justify-between p-24">
			<section className="h-full flex w-screen flex-col items-center justify-center px-5">
				<Image
					src="/profile.svg"
					alt="chona mae's image"
					width={150}
					height={150}
				/>
				<h1 className="text-2xl mt-5 font-bold text-center">
					Hello my name is <br />
					<span className="text-[#EB00FF]">Chona Mae</span>
				</h1>
				<p className="text-center mt-3">
					I am content creator in Mobile Legends, my in game name is Chona and
					my FB Page name is{" "}
					<span className="text-[#EB00FF] font-bold">DIMPL3 </span>
					Lorem Ipsum is simply dummy text of the printing and typesetting
					industry.
				</p>
			</section>
			<section className="h-screen flex flex-col items-center justify-center">
				<h1 className="text-center font-bold text-2xl mb-5">
					What can you say?
				</h1>
				<form
					action=""
					method="POST"
					className="w-[300px] flex flex-col items-end">
					<input
						type="email"
						placeholder="Your Email"
						required
						className="border border-[#EB00FF] rounded-md bg-transparent py-2 px-4 w-full placeholder:text-sm"
					/>
					<textarea
						required
						className="border border-[#EB00FF] rounded-md bg-transparent py-2 my-4 px-4 w-full placeholder:text-sm"
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
