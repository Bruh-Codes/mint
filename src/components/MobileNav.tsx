import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { navLinks } from "./events/EventHeader";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

const MobileNav = ({
	showMobileNav,
	setShowMobileNav,
}: {
	setShowMobileNav: React.Dispatch<React.SetStateAction<boolean>>;
	showMobileNav: boolean;
}) => {
	return (
		<nav
			className={cn(
				"flex flex-col min-h-screen transition-transform duration-150 ease-out justify-center fixed inset-0 z-10 bg-stone-800 md:hidden items-center gap-6",
				{
					"translate-x-full": !showMobileNav,
				}
			)}
		>
			<div className="flex absolute top-5 px-5 justify-between w-full">
				<Link to="/" className="text-orange-600 hover:text-orange-600/90">
					Freshmint
				</Link>
				<X
					onClick={() => setShowMobileNav(false)}
					className="text-white  cursor-pointer"
				/>
			</div>
			{navLinks.map(({ link, name }) => {
				return (
					<Link
						key={name}
						to={link}
						className="text-white hover:text-orange-600"
					>
						{name}
					</Link>
				);
			})}

			<Button type="button" className="text-white bg-orange-600 rounded-full">
				0x3e3c…4b77
			</Button>
		</nav>
	);
};

export default MobileNav;
