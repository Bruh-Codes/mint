import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export function EventHeader() {
	return (
		<header className="bg-cream py-4">
			<div className="container md:max-w-5xl mx-auto flex justify-between items-center px-4">
				<div className="text-2xl font-bold">
					<Link to="/" className="text-orange-600 hover:text-orange-600/90">
						Freshmint
					</Link>
				</div>
				<nav className="flex items-center gap-6">
					<Link to="/events" className="text-gray-600 hover:text-primary">
						Events
					</Link>
					<Link to="/community" className="text-gray-600 hover:text-primary">
						Community
					</Link>
					<Link to="/profiles" className="text-gray-600 hover:text-primary">
						Profiles
					</Link>
					<Button
						type="button"
						className="text-white bg-orange-600 rounded-full"
					>
						0x3e3c…4b77
					</Button>
				</nav>
			</div>
		</header>
	);
}
