import CustomNav from "@/components/custom-nav";
import { CustomParamSlug } from "@/types";
import Image from "next/image";

const SingleMatchCustom = ({ params }: CustomParamSlug) => {
	return (
		<main className="fixed inset-0 z-50 bg-black">
			<CustomNav
				iconLeftSrc="/back-btn.svg"
				title="Lou Yi"
				textStyle="flex-1 text-center font-bold text-sm text-white leading-6"
				parentStyle="flex items-start py-3 px-2 justify-center border border-transparent border-b-slate-500"
				path="/custom"
			/>
			<section className="flex flex-col items-center">
				<Image
					src="/lou_yi.svg"
					width={320}
					height={320}
					alt="mobile legends hero"
					className="w-auto max-w-xs h-auto mt-5"
				/>
				<div className="max-w-xs mt-2">
					<h3 className="text-[#EB00FF] font-bold">Lou Yi (Mage)</h3>
					<p className="text-white text-sm font-semibold opacity-50">
						Published on: {params.slug}
					</p>
					<p className="text-justify text-sm font-thin mt-2">
						Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nesciunt
						ipsa, quae quaerat voluptate reprehenderit delectus, quasi assumenda
						maiores hic ratione commodi, iste distinctio. Quod magnam illo
						aliquid velit distinctio dolor, quas molestiae praesentium deserunt
						cumque dicta modi sint, dolorum aperiam commodi suscipit officiis
						est dignissimos, corrupti reprehenderit at ipsam adipisci explicabo
						enim? Ipsa quas animi, ea, ipsum magni illum cum nostrum maxime
						excepturi minima eaque quaerat facere libero repudiandae porro
						tenetur, nisi officia laudantium voluptates. Autem repellendus
						reiciendis repudiandae voluptates consequuntur molestias sit rerum
						delectus, assumenda numquam praesentium, adipisci quod totam
						tempore! Ducimus dolorem perferendis laborum distinctio veritatis
						quisquam doloremque!
					</p>
				</div>
			</section>
		</main>
	);
};

export default SingleMatchCustom;
