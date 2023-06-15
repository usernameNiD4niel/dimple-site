import Footer from "@/components/footer";
import { CustomParamSlug } from "@/types";
import Image from "next/image";
import Link from "next/link";

const header: string =
	"text-[#EB00FF] font-bold md:w-[50%] text-1xl md:text-2xl";
const textContent: string = "text-justify text-slate-200 pt-5 lg:max-w-[50%]";
const parentClass: string = "w-full p-8 flex flex-col lg:items-center md:pt-0";

const SpecificHero = ({ params }: CustomParamSlug) => {
	return (
		<main className="absolute inset-0 bg-gradient-to-r from-black to-[#31012a] flex flex-col z-50 h-fit">
			<nav className="flex justify-between w-full p-5">
				<Link
					href="/my-heroes"
					className="flex justify-center items-center fixed">
					<Image src="/back-btn.svg" alt="back button" width={25} height={25} />
					<p className="text-white mb-[2px] text-xs">Back</p>
				</Link>
				<h4 className="text-xs text-[#FFF500] w-full text-end md:hidden">
					Rank#{params.id}
				</h4>
			</nav>
			{/* Hero Section */}
			<section className="w-full flex flex-col items-center py-5 md:flex-row md:justify-center md:py-10 md:gap-10">
				<Image
					src="/rounded_lou_yi.svg"
					alt="Mobile Legends Hero, Lou Yi"
					width={200}
					height={200}
					className="w-auto h-auto "
				/>
				<div>
					<h4 className="hidden md:block text-md text-[#FFF500] font-bold">
						Rank#{params.id}
					</h4>
					<h2 className="font-bold text-2xl text-center mx-8 md:text-start md:max-w-lg md:text-3xl md:mx-0">
						My favorite hero and most used hero this season is{" "}
						<span className="text-[#EB00FF]">Lou Yi</span>
					</h2>
				</div>
			</section>
			{/* Why is that? */}
			<section className={parentClass}>
				<h3 className={header}>Why Lou Yi?</h3>
				<p className={textContent}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
					adipisci fuga obcaecati animi? Sed mollitia pariatur, nesciunt
					sapiente, nostrum incidunt harum aliquam fuga ullam velit eos rerum
					nisi vitae nemo quaerat, nobis repellat suscipit laudantium dolor
					expedita consectetur. Consequuntur neque cumque voluptates illo amet,
					debitis distinctio totam quae voluptate earum fugiat accusamus dolor
					alias asperiores deleniti, sit vitae error? Soluta, est molestiae hic
					consequatur aut accusamus optio mollitia ducimus vero dignissimos odio
					laborum qui quis non distinctio ea blanditiis atque illum saepe vel
					voluptatibus quia neque? Exercitationem a inventore eius doloremque
					fugiat, cupiditate laudantium laboriosam sunt quod illo eaque
					recusandae autem iste, repellendus officia. Iusto excepturi dolore,
					voluptate laudantium rem, labore eligendi beatae veniam ipsam eaque
					voluptas animi libero voluptatum inventore similique repellendus
					quidem rerum nam eos quas. Id dolor quae quibusdam cumque, distinctio
					sed totam quia harum magnam pariatur doloribus a vero laborum vitae
					natus modi deleniti blanditiis ab!
				</p>
			</section>
			{/* In game usage */}
			<section className={parentClass}>
				<h3 className={header}>How do I used this in game?</h3>
				<p className={textContent}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
					quam asperiores consectetur ut, quis totam sint fugit commodi
					quibusdam corporis, aliquid accusantium fugiat odio reprehenderit
					blanditiis. Eum repellendus velit numquam!
				</p>
			</section>
			{/* Class type */}
			<section className={parentClass}>
				<h3 className={header}>Class and Type</h3>
				<p className="md:w-[50%]">
					<b>Class:</b> Mage
				</p>
				<p className="md:w-[50%]">
					<b>Type:</b> Reap/Burst
				</p>
			</section>
			<footer className="w-screen flex flex-col items-center justify-center bg-black py-2">
				<Footer />
			</footer>
		</main>
	);
};

export default SpecificHero;
