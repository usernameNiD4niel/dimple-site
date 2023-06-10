import { CustomNavParam } from "@/types";
import Image from "next/image";
import Link from "next/link";

const CustomNav = ({
	title,
	parentStyle,
	textStyle,
	iconLeftSrc,
	path,
}: CustomNavParam) => {
	return (
		<nav className={parentStyle}>
			<Link href={path}>
				<Image
					src={iconLeftSrc}
					alt="back icon"
					width={30}
					height={30}
					className="w-6 h-6"
				/>
			</Link>
			<h1 className={textStyle}>{title}</h1>
		</nav>
	);
};

export default CustomNav;
