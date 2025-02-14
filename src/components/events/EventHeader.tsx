import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import MobileNav from "../MobileNav";
import { useState } from "react";
import { Menu } from "lucide-react";

// eslint-disable-next-line react-refresh/only-export-components
export const navLinks = [
	{
		name: "Freshmint",
		link: "/",
	},
	{
		name: "Events",
		link: "/events",
	},
	{
		name: "Community",
		link: "/community",
	},
	{
		name: "Profile",
		link: "/profile",
	},
	{
		name: "Register",
		link: "/register",
	},
];
export function EventHeader() {
	const [showMobileNav, setShowMobileNav] = useState(false);
	return (
		<header className="bg-cream py-4">
			<div className="container md:max-w-5xl mx-auto flex justify-between items-center px-4">
				<div className="text-2xl font-bold">
					<Link to="/" className="text-orange-600 hover:text-orange-600/90">
						Freshmint
					</Link>
				</div>
				<nav className="hidden md:flex items-center gap-6">
					{navLinks.map(({ link, name }) => {
						return (
							<Link
								key={name}
								to={link}
								className="text-gray-600 hover:text-primary"
							>
								{name}
							</Link>
						);
					})}

					<Button
						type="button"
						className="text-white bg-orange-600 rounded-full"
					>
						0x3e3c…4b77
					</Button>
				</nav>
				<Menu
					className="cursor-pointer md:hidden"
					onClick={() => setShowMobileNav(true)}
				/>
				<MobileNav
					setShowMobileNav={setShowMobileNav}
					showMobileNav={showMobileNav}
				/>
			</div>
		</header>
	);
}
